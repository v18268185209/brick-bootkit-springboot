/**
 * Copyright [2019-Present] [starBlues]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.zqzqq.bootkits.loader.classloader.resource.storage;

import com.zqzqq.bootkits.loader.classloader.resource.Resource;
import com.zqzqq.bootkits.loader.classloader.resource.cache.Cache;
import com.zqzqq.bootkits.loader.classloader.resource.cache.DefaultCacheExpirationTrigger;
import com.zqzqq.bootkits.loader.classloader.resource.cache.LRUMapCache;
import com.zqzqq.bootkits.loader.utils.ObjectUtils;
import com.zqzqq.bootkits.loader.utils.ResourceUtils;

import java.io.InputStream;
import java.net.URL;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

/**
 * 鐩存帴鍙紦瀛樼殑资源存储,
 * 浼樼偣: 释放鍓嶅崰鐢ㄥ唴瀛樺仛浜嗛檺鍒?涓嶄細鍗犵敤澶珮, 澶勪簬鍗犵敤内容瓨比较浣? 涓斿彲根据LRU缓存鏈哄埗杩涜缓存
 * 缂虹偣: 如果缓存鏈懡在 閫熷害比较鎱?
 *
 * @author starBlues
 * @since 3.1.1
 * @version 4.0.0
 * @deprecated 鏆傛椂閬楀純
 */
@Deprecated
public class CacheLowMemoryResourceStorage extends AbstractResourceStorage {

    protected final Map<String, Cache<String, List<Resource>>> resourceStorage = new ConcurrentHashMap<>();

    public CacheLowMemoryResourceStorage(String key) {
    }

    @Override
    public void addBaseUrl(URL url) {
        super.addBaseUrl(url);
        String key = url.toString();
        if(!resourceStorage.containsKey(key)){
            Cache<String, List<Resource>> cache = DefaultCacheExpirationTrigger.getCacheExpirationTrigger(3, TimeUnit.MINUTES)
                    .getCache(key, () -> new LRUMapCache<String, List<Resource>>(10000, 180000));
            resourceStorage.put(key, cache);
        }
    }

    private Cache<String, List<Resource>> getCache(URL baseUrl){
        String key = baseUrl.toString();
        Cache<String, List<Resource>> cache = resourceStorage.get(key);
        if(cache != null){
            return cache;
        }
        cache = DefaultCacheExpirationTrigger.getCacheExpirationTrigger(3, TimeUnit.MINUTES)
                .getCache(key, () -> new LRUMapCache<String, List<Resource>>(1000, 180000));
        resourceStorage.put(key, cache);
        return cache;
    }

    @Override
    protected void addResource(Resource resource) throws Exception {
        String name = formatResourceName(resource.getName());
        List<Resource> resources = getCache(resource.getBaseUrl()).getOrDefault(name, ArrayList::new, true);
        resources.add(resource);
    }

    @Override
    public boolean exist(String name) {
        return get(name) != null;
    }

    @Override
    public Resource getFirst(String name) {
        if(ObjectUtils.isEmpty(name)){
            return null;
        }
        name = formatResourceName(name);
        for (Cache<String, List<Resource>> cache : resourceStorage.values()) {
            List<Resource> resources = cache.get(name);
            if(!ObjectUtils.isEmpty(resources)){
                return resources.get(0);
            }
        }
        return searchResource(name);
    }

    @Override
    public Enumeration<Resource> get(String name) {
        List<Resource> resources1 = new ArrayList<>();
        for (Cache<String, List<Resource>> cache : resourceStorage.values()) {
            List<Resource> resources = cache.get(name);
            if(!ObjectUtils.isEmpty(resources)){
                resources1.addAll(resources);
            }
        }
        if(!resources1.isEmpty()){
            return Collections.enumeration(resources1);
        }
        return searchResources(name);
    }

    @Override
    public InputStream getFirstInputStream(String name) {
        Resource resource = getFirst(name);
        if(resource == null){
            return null;
        }
        return openStream(resource);
    }

    @Override
    public Enumeration<InputStream> getInputStream(String name) {
        Enumeration<Resource> resources = searchResources(name);
        return openStream(resources);
    }

    @Override
    public synchronized void release() throws Exception {
        for (Cache<String, List<Resource>> value : resourceStorage.values()) {
            value.clear(ResourceUtils::release);
        }
        resourceStorage.clear();
    }

    @Override
    public void close() throws Exception {
        //resourceStorage.clear(ResourceUtils::release);
        super.close();
        release();
//        for (List<Resource> resources : resourceStorage.values()) {
//            ResourceUtils.release(resources);
//        }
    }


}