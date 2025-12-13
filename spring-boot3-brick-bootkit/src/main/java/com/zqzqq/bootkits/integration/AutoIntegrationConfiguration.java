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

package com.zqzqq.bootkits.integration;

import com.zqzqq.bootkits.core.RuntimeMode;
import com.zqzqq.bootkits.integration.decrypt.DecryptConfiguration;
import com.zqzqq.bootkits.utils.ResourceUtils;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.Set;

/**
 * 鑷姩闆嗘垚鐨勯厤锟?
 *
 * @author starBlues
 * @since 3.0.0
 * @version 3.1.2
 */
@Configuration
@ConditionalOnMissingBean(IntegrationConfiguration.class)
@EqualsAndHashCode(callSuper = true)
@ConfigurationProperties(prefix = "plugin")
@Data
public class AutoIntegrationConfiguration extends DefaultIntegrationConfiguration{

    public static final String ENABLE_KEY = "plugin.enable";
    public static final String ENABLE_STARTER_KEY = "plugin.enableStarter";

    /**
     * 鏄惁鍚敤插件鍔熻兘
     */
    @Value("${enable:true}")
    private Boolean enable;

    /**
     * 杩愯妯″紡
     *  寮€鍙戠幆锟? development銆乨ev
     *  鐢熶骇/閮ㄧ讲 鐜: deployment銆乸rod
     */
    @Value("${runMode:dev}")
    private String runMode;

    /**
     * 主程序搴忓寘锟?
     */
    @Value("${mainPackage:}")
    private String mainPackage;

    /**
     * 插件鐨勮矾锟?
     */
    private List<String> pluginPath;

    /**
     * 涓婁紶鐨勬彃浠舵墍存储鐨勪复鏃剁洰锟?
     */
    @Value("${uploadTempPath:}")
    private String uploadTempPath;

    /**
     * 鍦ㄥ嵏杞芥彃浠跺悗, 澶囦唤插件鐨勭洰锟?
     */
    @Value("${backupPath:backupPlugin}")
    private String backupPath;

    /**
     * 插件rest接口鍓嶇紑. 榛樿: /plugins
     */
    @Value("${pluginRestPathPrefix:/plugins}")
    private String pluginRestPathPrefix;

    /**
     * 鏄惁鍚敤插件id浣滀负rest接口鍓嶇紑, 榛樿涓哄惎锟?
     * 如果涓哄惎锟? 鍒欏湴鍧€锟?/pluginRestPathPrefix/pluginId
     * pluginRestPathPrefix: 涓簆luginRestPathPrefix鐨勯厤缃拷?
     * pluginId: 涓烘彃浠秈d
     */
    @Value("${enablePluginIdRestPathPrefix:true}")
    private Boolean enablePluginIdRestPathPrefix;

    /**
     * 鍚敤鐨勬彃浠秈d
     */
    private Set<String> enablePluginIds;

    /**
     * 绂佺敤鐨勬彃浠秈d, 绂佺敤鍚庣郴缁熶笉浼氬惎鍔ㄨ插件
     * 如果绂佺敤所有夋彃锟? 鍒橲et集合中繑鍥炰竴涓瓧锟? *
     */
    private Set<String> disablePluginIds;

    /**
     * 璁剧疆鍒濆鍖栨椂插件鍚姩鐨勯『锟?
     */
    private List<String> sortInitPluginIds;

    /**
     * 褰撳墠主程序搴忕殑版本锟? 鐢ㄤ簬鏍￠獙插件鏄惁鍙畨锟?
     * 插件涓彲通过插件配置淇℃伅 requires 鏉ユ寚瀹氬彲瀹夎鐨勪富程序版本
     * 如果锟? 0.0.0 鐨勮瘽, 琛ㄧず涓嶆牎锟?
     */
    @Value("${version:0.0.0}")
    private String version;

    /**
     * 璁剧疆涓簍rue琛ㄧず插件璁剧疆鐨剅equires鐨勭増鏈彿瀹屽叏鍖归厤version版本鍙锋墠鍙厑璁告彃浠跺畨锟? 锟? requires=x.y.z
     * 璁剧疆涓篺alse琛ㄧず插件璁剧疆鐨剅equires鐨勭増鏈彿灏忎簬绛変簬version锟? 插件灏卞彲瀹夎, 鍗硆equires<=x.y.z
     * 榛樿涓篺alse
     */
    @Value("${exactVersion:false}")
    private Boolean exactVersion;

    /**
     * 鎻掓槸鍚︽壂锟?swagger 接口
     */
    @Value("${pluginSwaggerScan:true}")
    private Boolean pluginSwaggerScan;


    /**
     * 插件鐨勯厤缃枃锟?Profile 鏄惁璺熼殢主程序搴忕殑 Profile 配置鍔ㄦ€佸垏锟?
     */
    @Value("${pluginFollowProfile:false}")
    private Boolean pluginFollowProfile;

    /**
     * 插件鏃ュ織打印鏄惁璺熼殢主程序锟?
     */
    @Value("${pluginFollowLog:false}")
    private Boolean pluginFollowLog;

    /**
     * 瀵规彃浠跺惎鍔ㄦ椂杩涜瑙ｅ瘑鏍￠獙配置銆傞粯璁や负涓嶅惎锟?
     */
    private DecryptConfiguration decrypt;

    @Override
    public Boolean enable() {
        if(enable == null){
            return true;
        }
        return enable;
    }

    @Override
    public RuntimeMode environment() {
        return RuntimeMode.byName(runMode);
    }

    @Override
    public String mainPackage() {
        return ResourceUtils.replacePackage(mainPackage);
    }

    @Override
    public List<String> pluginPath() {
        return pluginPath;
    }

    @Override
    public String uploadTempPath() {
        if(ObjectUtils.isEmpty(uploadTempPath)){
            return super.uploadTempPath();
        }
        return uploadTempPath;
    }

    @Override
    public String backupPath() {
        if(ObjectUtils.isEmpty(backupPath)){
            return super.backupPath();
        }
        return backupPath;
    }

    @Override
    public String pluginRestPathPrefix() {
        if(pluginRestPathPrefix == null){
            return super.pluginRestPathPrefix();
        } else {
            return pluginRestPathPrefix;
        }
    }

    @Override
    public Boolean enablePluginIdRestPathPrefix() {
        if(enablePluginIdRestPathPrefix == null){
            return super.enablePluginIdRestPathPrefix();
        } else {
            return enablePluginIdRestPathPrefix;
        }
    }

    @Override
    public Set<String> enablePluginIds() {
        return enablePluginIds;
    }

    @Override
    public Set<String> disablePluginIds() {
        return disablePluginIds;
    }

    @Override
    public List<String> sortInitPluginIds() {
        return sortInitPluginIds;
    }

    @Override
    public String version() {
        return version;
    }

    @Override
    public Boolean exactVersion() {
        return exactVersion;
    }

    @Override
    public Boolean pluginSwaggerScan() {
        if(pluginSwaggerScan == null){
            return super.pluginSwaggerScan();
        }
        return pluginSwaggerScan;
    }

    @Override
    public Boolean pluginFollowProfile() {
        if(pluginFollowProfile == null){
            return super.pluginFollowProfile();
        }
        return pluginFollowProfile;
    }

    @Override
    public Boolean pluginFollowLog() {
        if(pluginFollowLog == null){
            return super.pluginFollowLog();
        }
        return pluginFollowLog;
    }

    @Override
    public DecryptConfiguration decrypt() {
        if(decrypt == null){
            return super.decrypt();
        }
        return decrypt;
    }
}

