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

import com.zqzqq.bootkits.common.DependencyPlugin;

import java.nio.file.Path;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

/**
 * 插件信息
 *
 * @author starBlues
 * @since 3.0.0
 * @version 3.0.0
 */
public interface PluginDescriptor {

    /**
     * 获取插件id
     * @return String
     */
    String getPluginId();

    /**
     * 获取插件版本
     * @return String
     */
    String getPluginVersion();

    /**
     * 获取插件寮曞类
     * @return String
     */
    String getPluginBootstrapClass();

    /**
     * 获取插件classpath
     * @return String
     */
    String getPluginPath();

    /**
     * 获取插件鍚嶅瓧
     * @return String
     */
    default String getName() {
        return getPluginId();
    }

    /**
     * 获取插件涓荤被
     * @return String
     */
    default String getMainClass() {
        return getPluginBootstrapClass();
    }

    /**
     * 获取插件鎻忚堪
     * @return String
     */
    String getDescription();

    /**
     * 获取插件鎵€鑳藉畨瑁呭埌主程序搴忕殑版本
     * @return String
     */
    String getRequires();

    /**
     * 获取插件提供者寮€鍙戣€?
     * @return String
     */
    String getProvider();

    /**
     * 获取插件 license
     * @return String
     */
    String getLicense();

    /**
     * 获取褰撳墠插件依赖
     * @return List
     */
    List<DependencyPlugin> getDependencyPlugin();

    /**
     * 得到插件类型
     * @return 插件类型
     */
    PluginType getType();

    /**
     * 鍔ㄦ€佽缃彃浠跺叾浠栧睘鎬?
     * @return map
     */
    HashMap<String,Object> pluginExtensionInfo();

    /**
     * 璁剧疆鎺堟潈鐮?
     * @return void
     */
    void setLicenseCode(String code);
    /**
     * 璁剧疆鎻忚堪
     * @return void
     */
    void setLicenseDesc(String desc);
    /**
     * 璁剧疆鎺堟潈鏃堕棿
     * @return void
     */
    void setLicenseDateMill(Long mills);

    String getLicenseCode();

    String getLicenseDesc();

    Long getLicenseDateMill();

    /**
     * 获取闇€瑕佹帓闄ょ殑鑷姩配置类
     * @return 排除鐨勮嚜鍔ㄩ厤缃被集合
     */
    default Set<String> getExcludeAutoConfigurations() {
        return Collections.emptySet();
    }

    /**
     * 璁剧疆闇€瑕佹帓闄ょ殑鑷姩配置类
     * @param excludeClasses 排除鐨勮嚜鍔ㄩ厤缃被集合
     */
    default void setExcludeAutoConfigurations(Set<String> excludeClasses) {
        // 榛樿绌哄疄鐜?
    }

    /**
     * 杞崲涓篒nsidePluginDescriptor
     * @return InsidePluginDescriptor
     */
    default InsidePluginDescriptor toInsidePluginDescriptor() {
        try {
            // 浣跨敤Path.of()鍒涘缓涓存椂Path对象
            Path pluginPath = Path.of(getPluginPath());
            DefaultInsidePluginDescriptor insideDescriptor = new DefaultInsidePluginDescriptor(
                getPluginId(),
                getPluginVersion(),
                getPluginBootstrapClass(),
                pluginPath
            );
            // 璁剧疆鍏朵粬蹇呰灞炴€?
            insideDescriptor.setType(getType());
            insideDescriptor.setDescription(getDescription());
            insideDescriptor.setProvider(getProvider());
            insideDescriptor.setRequires(getRequires());
            insideDescriptor.setLicense(getLicense());
            insideDescriptor.setLicenseCode(getLicenseCode());
            insideDescriptor.setLicenseDesc(getLicenseDesc());
            insideDescriptor.setLicenseDateMill(getLicenseDateMill());
            
            // 浼犻€掓帓闄ょ殑鑷姩配置类
            if (this instanceof InsidePluginDescriptor) {
                insideDescriptor.setExcludeAutoConfigurations(
                    ((InsidePluginDescriptor) this).getExcludeAutoConfigurations()
                );
            }
            return insideDescriptor;
        } catch (Exception e) {
            throw new RuntimeException("Failed to convert PluginDescriptor to InsidePluginDescriptor", e);
        }
    }
}