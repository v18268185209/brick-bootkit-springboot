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

import com.zqzqq.bootkits.utils.SpringBeanUtils;
import org.springframework.context.ApplicationContext;

import java.util.ArrayList;
import java.util.List;

/**
 * 插件鍒濆鍖栫洃鍚€呭伐鍘?
 *
 * @author starBlues
 * @version 3.0.0
 */
public class PluginInitializerListenerFactory implements PluginInitializerListener {

    private final List<PluginInitializerListener> pluginInitializerListeners = new ArrayList<>();

    public final ApplicationContext applicationContext;

    public PluginInitializerListenerFactory(ApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
        // 添加榛樿鐨勫垵濮嬪寲监听鑰?
        pluginInitializerListeners.add(new DefaultInitializerListener(applicationContext));
        addExtendPluginListener(applicationContext);
    }

    private void addExtendPluginListener(ApplicationContext applicationContext){
        List<PluginInitializerListener> initializerListeners = SpringBeanUtils.getBeans(applicationContext,
                PluginInitializerListener.class);
        pluginInitializerListeners.addAll(initializerListeners);
    }

    @Override
    public void before() {
        try {
            for (PluginInitializerListener pluginInitializerListener : pluginInitializerListeners) {
                pluginInitializerListener.before();
            }
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void complete() {
        try {
            for (PluginInitializerListener pluginInitializerListener : pluginInitializerListeners) {
                pluginInitializerListener.complete();
            }
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void failure(Throwable throwable) {
        try {
            for (PluginInitializerListener pluginInitializerListener : pluginInitializerListeners) {
                pluginInitializerListener.failure(throwable);
            }
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    /**
     * 添加监听鑰?
     * @param pluginInitializerListener pluginInitializerListener
     */
    public void addListener(PluginInitializerListener pluginInitializerListener){
        if(pluginInitializerListener != null){
            pluginInitializerListeners.add(pluginInitializerListener);
        }
    }

}

