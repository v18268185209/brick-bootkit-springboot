/**
 * Copyright [2019-Present] [starBlues]
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

package com.zqzqq.bootkits.core.launcher.plugin;
import java.util.function.Supplier;

/**
 * 注册的信息接口
 * @author starBlues
 * @since 3.0.0
 * @version 3.0.0
 */
public interface RegistryInfo {


    /**
     * 添加注册的信息
     * @param key 注册淇℃伅key
     * @param value 注册淇℃伅鍊?
     */
    void addRegistryInfo(String key, Object value);

    /**
     * 得到注册淇℃伅
     * @param key 注册淇℃伅key
     * @param <T> 杩斿洖绫诲瀷娉涘瀷
     * @return 注册淇℃伅鐨勫€?
     */
    <T> T getRegistryInfo(String key);

    /**
     * 得到注册淇℃伅
     * @param key 注册淇℃伅key
     * @param notExistCreate 不存在鍦ㄧ殑璇? 杩涜鍒涘缓鎿嶄綔
     * @param <T> 杩斿洖绫诲瀷娉涘瀷
     * @return 注册淇℃伅鐨勫€?
     */
    <T> T getRegistryInfo(String key, Supplier<T> notExistCreate);


    /**
     * 移除注册淇℃伅
     * @param key 注册淇℃伅key
     */
    void removeRegistryInfo(String key);

    /**
     * 娓呴櫎鍏ㄩ儴鐨勬敞鍐屼俊鎭?
     */
    void clearRegistryInfo();

}

