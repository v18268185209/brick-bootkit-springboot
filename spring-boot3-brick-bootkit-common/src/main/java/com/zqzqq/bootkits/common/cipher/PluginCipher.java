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

package com.zqzqq.bootkits.common.cipher;

/**
 * 插件瀵嗙爜鎺ュ彛
 *
 * @author starBlues
 * @since 3.0.1
 * @version 3.0.1
 */
public interface PluginCipher {

    /**
     * 加密
     * @param sourceStr 鍘熷瀛楃
     * @return 加密鍚庣殑瀛楄妭
     * @throws Exception 加密异常
     */
    String encrypt(String sourceStr) throws Exception;

    /**
     * 解密
     * @param cryptoStr 加密鐨勫瓧绗?
     * @return 解密鍚庣殑瀛楃
     * @throws Exception 解密异常
     */
    String decrypt(String cryptoStr) throws Exception;


}