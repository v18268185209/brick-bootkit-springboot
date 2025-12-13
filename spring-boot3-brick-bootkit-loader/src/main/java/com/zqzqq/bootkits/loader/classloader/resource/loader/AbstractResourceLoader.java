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

package com.zqzqq.bootkits.loader.classloader.resource.loader;

import com.zqzqq.bootkits.loader.classloader.resource.storage.ResourceStorage;
import com.zqzqq.bootkits.loader.utils.IOUtils;

import java.io.InputStream;
import java.net.URL;

/**
 * 插件的资源婧愬姞杞藉櫒
 * @author starBlues
 * @since 3.0.0
 * @version 3.1.1
 */
public abstract class AbstractResourceLoader implements ResourceLoader{

    private static final String CLASS_FILE_EXTENSION = ".class";

    private boolean loaded = false;

    protected final URL baseUrl;

    protected AbstractResourceLoader(URL baseUrl) {
        this.baseUrl = baseUrl;
    }

    @Override
    public URL getBaseUrl() {
        return baseUrl;
    }

    /**
     * 鍒濆鍖杛esource
     * @throws Exception 鍒濆异常
     */
    @Override
    public final synchronized void load(ResourceStorage resourceStorage) throws Exception{
        if(loaded){
            throw new Exception(this.getClass().getName()+": 宸茬粡鍒濆鍖栦簡, 不能鍐嶅垵濮嬪寲!");
        }
        try {
            // 添加root 资源
            resourceStorage.add(new DefaultResource("/", baseUrl, baseUrl));
            loadOfChild(resourceStorage);
        } finally {
            loaded = true;
        }
    }

    /**
     * 子类鍒濆鍖栧疄鐜?
     * @param resourceStorage 资源存储
     * @throws Exception 鍒濆异常
     */
    protected abstract void loadOfChild(ResourceStorage resourceStorage) throws Exception;

    protected byte[] getClassBytes(String path, InputStream inputStream, boolean isClose) throws Exception{
        if(!isClass(path)){
            return null;
        }
        try {
            return IOUtils.read(inputStream);
        } finally {
            if(isClose){
                IOUtils.closeQuietly(inputStream);
            }
        }
    }

    @Override
    public void close() throws Exception {

    }

    private static boolean isClass(String path){
        if(path == null || "".equals(path)){
            return false;
        }
        return path.toLowerCase().endsWith(CLASS_FILE_EXTENSION);
    }

}