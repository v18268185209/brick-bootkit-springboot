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


import com.zqzqq.bootkits.common.Constants;
import com.zqzqq.bootkits.core.RuntimeMode;
import com.zqzqq.bootkits.integration.decrypt.DecryptConfiguration;
import com.zqzqq.bootkits.utils.ObjectUtils;

import java.util.List;
import java.util.Set;


/**
 * 插件闆嗘垚鏃剁殑配置接口銆傛彃浠堕泦鎴愮殑配置接口
 * @author starBlues
 * @version 3.0.1
 */
public interface IntegrationConfiguration {

    /**
     * 鏄惁鍚敤璇ユ彃浠舵鏋?
     * @return true 鍚敤, false 绂佺敤
     */
    Boolean enable();

    /**
     * 杩愯鐜銆傝繍琛岄」鐩椂鐨勬ā寮忋€傚垎涓哄紑鍙戠幆澧?Dev)銆佺敓浜х幆澧?Prod)
     * @return RuntimeMode.DEV銆丷untimeMode.PROD
     */
    RuntimeMode environment();

    /**
     * 主程序搴忓寘鍚?
     * @return String
     */
    String mainPackage();

    /**
     * 插件鐨勮矾寰勩€傚彲璁剧疆澶氫釜插件璺緞
     * 寮€鍙戠幆澧冨缓璁洿鎺ラ厤缃负插件模式鐨勭埗绾х洰褰曘€備緥濡? plugins銆傚鏋滃惎鍔ㄤ富程序鏃? 插件涓哄姞杞? 璇锋鏌ヨ配置鏄惁姝ｇ‘銆?
     * @return 插件鐨勮矾寰?
     */
    List<String> pluginPath();

    /**
     * 涓婁紶插件鍖呭瓨鍌ㄧ殑涓存椂璺緞銆傞粯璁?temp(鐩稿浜庝富程序jar璺緞)銆?
     * @return 涓婁紶插件鐨勪复鏃朵繚瀛樿矾寰勩€?
     */
    String uploadTempPath();

    /**
     * 插件澶囦唤璺緞銆傞粯璁?backupPlugin  (鐩稿浜庝富程序jar璺緞)銆?
     * @return 插件澶囦唤璺緞銆?
     */
    String backupPath();

    /**
     * 插件 RestController 缁熶竴璇锋眰鐨勮矾寰勫墠缂€
     * @return path
     */
    String pluginRestPathPrefix();

    /**
     * 鏄惁鍚敤插件id浣滀负RestController鐨勮矾寰勫墠缂€銆?
     * 如果鍚敤銆傚垯璺緞鍓嶇紑在pluginRestPathPrefix() 杩斿洖鐨勮矾寰勬嫾鎺ユ彃浠秈d,
     * 鍗充负: /pathPrefix/pluginId/**
     * @return boolean
     */
    Boolean enablePluginIdRestPathPrefix();

    /**
     * 鍚敤鐨勬彃浠秈d
     * @return Set
     */
    Set<String> enablePluginIds();

    /**
     * 绂佺敤鐨勬彃浠秈d, 绂佺敤鍚庣郴缁熶笉浼氬惎鍔ㄨ插件
     * 如果绂佺敤所有夋彃浠? 鍒橲et集合中繑鍥炰竴涓瓧绗? *
     * @return Set
     */
    Set<String> disablePluginIds();

    /**
     * 璁剧疆鍒濆鍖栨椂插件鍚姩鐨勯『搴?
     * @return 鏈夐『搴忕殑插件id
     */
    List<String> sortInitPluginIds();

    /**
     * 褰撳墠主程序搴忕殑版本可 鐢ㄤ簬鏍￠獙插件鏄惁鍙畨瑁?
     * 插件涓彲通过插件配置淇℃伅 requires 鏉ユ寚瀹氬彲瀹夎鐨勪富程序版本
     * @return 绯荤粺版本可 如果涓轰负绌烘垨鑰?0.0.0 琛ㄧず涓嶆牎楠?
     */
    String version();

    /**
     * 璁剧疆涓簍rue琛ㄧず插件璁剧疆鐨剅equires鐨勭増鏈彿瀹屽叏鍖归厤version版本鍙锋墠鍙厑璁告彃浠跺畨瑁? 鍗? [requires]=[x.y.z]
     * 璁剧疆涓篺alse琛ㄧず插件璁剧疆鐨剅equires鐨勭増鏈彿灏忎簬绛変簬version值 插件灏卞彲瀹夎, 鍗砙requires]灏忎簬绛変簬[x.y.z]
     * 榛樿涓篺alse
     * @return true or false
     */
    Boolean exactVersion();

    /**
     * 鏄惁鎵弿插件 swagger 接口
     * @return true 鍚姩, false 绂佺敤銆傞粯璁ゅ惎鐢?
     */
    Boolean pluginSwaggerScan();

    /**
     * 插件鐨勯厤缃枃浠?Profile 鏄惁璺熼殢主程序搴忕殑 Profile 配置鍔ㄦ€佸垏鎹?
     * @return true: 璺熼殢, false: 涓嶈窡闅?
     */
    Boolean pluginFollowProfile();

    /**
     * 插件鏃ュ織打印鏄惁璺熼殢主程序搴?
     * @return true: 璺熼殢, false: 涓嶈窡闅?
     */
    Boolean pluginFollowLog();

    /**
     * 瑙ｅ瘑配置
     * @return DecryptConfiguration
     */
    DecryptConfiguration decrypt();


    /**
     * 妫€鏌ラ厤缃?
     */
    default void checkConfig(){};


    /**
     * 鏄惁鏄紑鍙戠幆澧?
     * @return boolean
     */
    default boolean isDev(){
        return environment() == RuntimeMode.DEV;
    }

    /**
     * 鏄惁鏄敓浜х幆澧?
     * @return boolean
     */
    default boolean isProd(){
        return environment() == RuntimeMode.PROD;
    }


    /**
     * 鏄惁琚惎鍔?
     * @param pluginId 插件id
     * @return true: 鍚敤, false: 鏈惎鐢?
     */
    default boolean isEnable(String pluginId){
        if(ObjectUtils.isEmpty(enablePluginIds())){
            return true;
        }
        if(isDisabled(pluginId)){
            return false;
        }
        return enablePluginIds().contains(pluginId);
    }


    /**
     * 鏄惁琚鐢?
     * @param pluginId 插件id
     * @return true: 绂佺敤, false: 鏈鐢?
     */
    default boolean isDisabled(String pluginId){
        if(ObjectUtils.isEmpty(disablePluginIds())){
            return false;
        }
        if(disablePluginIds().contains(Constants.DISABLED_ALL_PLUGIN)){
            return true;
        }
        return disablePluginIds().contains(pluginId);
    }

}

