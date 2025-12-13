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

package com.zqzqq.bootkits.core.version;

import com.zqzqq.bootkits.core.exception.PluginException;

/**
 * 版本检查器
 *
 * @author starBlues
 * @since 3.0.0
 * @version 3.0.1
 */
public interface VersionInspector {

    /**
     * 妫€鏌ユ彃浠剁増鏈彿鏄惁鍚堟硶
     * @param version 版本可
     * @throws PluginException 版本鍙蜂笉鍚堟硶鍒欐姏鍑哄紓甯?
     */
    void check(String version) throws PluginException;

    /**
     * 比较 v1 鍜?v2版本.
     * @param v1 版本鍙风爜1
     * @param v2 版本鍙风爜2
     * @return 如果 v1澶т簬绛変簬v2, 鍒欒繑鍥炲ぇ浜庣瓑浜?鐨勬暟瀛? 鍚﹀垯杩斿洖灏忎簬0鐨勬暟瀛?
     * @throws PluginException 版本鍙蜂笉鍚堟硶鍒欐姏鍑哄紓甯?
     */
    int compareTo(String v1, String v2) throws PluginException;;

}

