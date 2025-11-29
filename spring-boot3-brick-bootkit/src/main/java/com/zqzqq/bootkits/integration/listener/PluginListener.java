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

package com.zqzqq.bootkits.integration.listener;


import com.zqzqq.bootkits.core.PluginInfo;

import java.nio.file.Path;

/**
 * 插件监听鑰?
 *
 * @author starBlues
 * @version 3.0.0
 */
public interface PluginListener {

    /**
     * 加载插件鎴愬姛
     * @param pluginInfo 插件淇℃伅
     */
    default void loadSuccess(PluginInfo pluginInfo){}

    /**
     * 加载失败
     * @param path 瑕佸姞杞界殑插件璺緞
     * @param throwable 异常淇℃伅
     */
    default void loadFailure(Path path, Throwable throwable){}

    /**
     * 卸载插件成功
     * @param pluginInfo 插件淇℃伅
     */
    default void unLoadSuccess(PluginInfo pluginInfo){}

    /**
     * 卸载失败
     * @param pluginInfo 插件淇℃伅
     * @param throwable 异常淇℃伅
     */
    default void unLoadFailure(PluginInfo pluginInfo, Throwable throwable){}

    /**
     * 注册插件鎴愬姛
     * @param pluginInfo 插件淇℃伅
     */
    default void startSuccess(PluginInfo pluginInfo){}


    /**
     * 鍚姩失败
     * @param pluginInfo 插件淇℃伅
     * @param throwable 异常淇℃伅
     */
    default void startFailure(PluginInfo pluginInfo, Throwable throwable){}

    /**
     * 卸载插件成功
     * @param pluginInfo 插件淇℃伅
     */
    default void stopSuccess(PluginInfo pluginInfo){}


    /**
     * 鍋滄失败
     * @param pluginInfo 插件淇℃伅
     * @param throwable 异常淇℃伅
     */
    default void stopFailure(PluginInfo pluginInfo, Throwable throwable){}

}

