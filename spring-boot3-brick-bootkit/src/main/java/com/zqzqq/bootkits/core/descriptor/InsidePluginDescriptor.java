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

package com.zqzqq.bootkits.core.descriptor;

import java.nio.file.Path;
import java.util.Properties;
import java.util.Set;

/**
 * 内部的PluginDescriptor
 *
 * @author starBlues
 * @since 3.0.0
 * @version 3.0.0
 */
public interface InsidePluginDescriptor extends PluginDescriptor {

    /**
     * 获取闇€瑕佹帓闄ょ殑鑷姩配置锟?
     * @return 排除鐨勮嚜鍔ㄩ厤缃被闆嗗悎
     */
    Set<String> getExcludeAutoConfigurations();

    /**
     * 璁剧疆闇€瑕佹帓闄ょ殑鑷姩配置锟?
     * @param excludeClasses 排除鐨勮嚜鍔ㄩ厤缃被闆嗗悎
     */
    void setExcludeAutoConfigurations(Set<String> excludeClasses);

    /**
     * 得到插件锟?Properties 配置
     * @return Properties
     */
    Properties getProperties();

    /**
     * 获取插件配置文件鍚嶇О锟?
     * 锟?getConfigFileLocation 配置浜岄€変竴, 如果閮芥湁鍊煎垯榛樿浣跨敤 getConfigFileName
     * @return String
     */
    String getConfigFileName();

    /**
     * 获取插件配置文件璺緞锟?
     * 锟?getConfigFileName 配置浜岄€変竴, 如果閮芥湁鍊煎垯榛樿浣跨敤 getConfigFileName
     * @return String
     */
    String getConfigFileLocation();

    /**
     * 得到插件鍚姩鏃跺弬锟?
     * @return String
     */
    String getArgs();

    /**
     * 得到鍐呴儴鐨勬彃浠惰矾锟?
     * @return Path
     */
    Path getInsidePluginPath();

    /**
     * 获取插件文件鍚嶇О
     * @return String
     */
    String getPluginFileName();


    /**
     * 获取插件classes path璺緞
     * @return Path
     */
    String getPluginClassPath();

    /**
     * 获取插件渚濊禆配置鐨勭洰锟?
     * @return String
     */
    String getPluginLibDir();

    /**
     * 获取插件渚濊禆鐨勮矾锟?
     * @return String
     */
    Set<PluginLibInfo> getPluginLibInfo();

    /**
     * 璁剧疆褰撳墠插件鍖呭惈主程序搴忓姞杞借祫婧愮殑鍖归厤
     * @return Set
     */
    Set<String> getIncludeMainResourcePatterns();

    /**
     * 璁剧疆褰撳墠插件排除浠庝富程序加载资源鐨勫尮锟?
     * @return Set
     */
    Set<String> getExcludeMainResourcePatterns();

    /**
     * 杞崲锟?PluginDescriptor
     * @return PluginDescriptor
     */
    PluginDescriptor toPluginDescriptor();

}

