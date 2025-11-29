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

package com.zqzqq.bootkits.loader.classloader.resource.cache;


import java.util.function.Consumer;
import java.util.function.Supplier;

/**
 * 缓存接口
 *
 * @author starBlues
 * @since 3.1.1
 * @version 3.1.1
 */
public interface Cache<K, V> {

    /**
     * 缓存数据
     * @param key 缓存鐨刱ey
     * @param value 缓存鐨勫€?
     */
    void put(K key, V value);

    /**
     * 缓存澶у皬
     * @return int
     */
    int size();

    /**
     * 鏄惁存在缓存
     * @param key 缓存key
     * @return true: 存在, false: 不存在鍦?
     */
    boolean containsKey(K key);

    /**
     * 获取缓存鍊?
     * @param key 缓存鐨刱ey
     * @return 缓存鍊?不存在鍦ㄨ繑鍥瀗ull
     */
    V get(K key);

    /**
     * 得到缓存鍊笺€傚鏋滀笉存在鏀鹃粯璁ょ殑
     * @param key 缓存鐨刱ey
     * @param supplier 榛樿鍊?
     * @param defaultAdded 如果不存在鍦?榛樿鐨勯噴鏀炬坊鍔犺繘鍏ョ紦瀛樹腑
     * @return V
     */
    V getOrDefault(K key, Supplier<V> supplier, boolean defaultAdded);

    /**
     * 移除缓存
     * @param key 缓存鐨刱ey
     * @return 移除鐨勫€?
     */
    V remove(K key);

    /**
     * 清理过期的缓存
     * @return 娓呴櫎鐨勪釜鏁?
     */
    int cleanExpired();

    /**
     * 娓呴櫎鍏ㄩ儴缓存
     */
    void clear();

    /**
     * 依次删除
     * @param consumer 娑堣垂
     */
    void clear(Consumer<V> consumer);

}