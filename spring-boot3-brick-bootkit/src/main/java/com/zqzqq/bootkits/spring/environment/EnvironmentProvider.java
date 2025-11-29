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

package com.zqzqq.bootkits.spring.environment;

import java.util.function.BiConsumer;

/**
 * 配置淇℃伅提供者鑰呮帴鍙?
 *
 * @author starBlues
 * @version 3.0.3
 */
public interface EnvironmentProvider {

    /**
     * 根据鍚嶇О获取配置鍊?
     * @param name 配置鍚嶇О
     * @return 配置鍊?
     */
    Object getValue(String name);

    /**
     * 根据鍚嶇О获取 String 绫诲瀷配置鍊?
     * @param name 配置鍚嶇О
     * @return 配置鍊?
     */
    String getString(String name);

    /**
     * 根据鍚嶇О获取 Integer 绫诲瀷配置鍊?
     * @param name 配置鍚嶇О
     * @return 配置鍊?
     */
    Integer getInteger(String name);

    /**
     * 根据鍚嶇О获取 Long 绫诲瀷配置鍊?
     * @param name 配置鍚嶇О
     * @return 配置鍊?
     */
    Long getLong(String name);

    /**
     * 根据鍚嶇О获取 Double 绫诲瀷配置鍊?
     * @param name 配置鍚嶇О
     * @return 配置鍊?
     */
    Double getDouble(String name);

    /**
     * 根据鍚嶇О获取 Float 绫诲瀷配置鍊?
     * @param name 配置鍚嶇О
     * @return 配置鍊?
     */
    Float getFloat(String name);

    /**
     * 根据鍚嶇О获取 Boolean 绫诲瀷配置鍊?
     * @param name 配置鍚嶇О
     * @return 配置鍊?
     */
    Boolean getBoolean(String name);

    /**
     * 根据鍓嶇紑鍚嶇О鎵归噺获取配置鍊?
     * @param prefix 鍓嶇紑
     * @return 鐜
     */
    EnvironmentProvider getByPrefix(String prefix);

    /**
     * 获取所有夐厤缃泦鍚?
     * @param action 姣忎釜鏉＄洰鎵ц鐨勬搷浣?
     */
    void forEach(BiConsumer<String, Object> action);


}

