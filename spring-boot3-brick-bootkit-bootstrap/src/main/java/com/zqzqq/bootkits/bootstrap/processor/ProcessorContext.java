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

package com.zqzqq.bootkits.bootstrap.processor;


import com.zqzqq.bootkits.bootstrap.SpringPluginBootstrap;
import com.zqzqq.bootkits.core.PluginInfo;
import com.zqzqq.bootkits.core.descriptor.InsidePluginDescriptor;
import com.zqzqq.bootkits.core.launcher.plugin.PluginInteractive;
import com.zqzqq.bootkits.core.launcher.plugin.RegistryInfo;
import com.zqzqq.bootkits.integration.IntegrationConfiguration;
import com.zqzqq.bootkits.spring.MainApplicationContext;
import com.zqzqq.bootkits.spring.SpringBeanFactory;
import com.zqzqq.bootkits.spring.WebConfig;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.ResourceLoader;

/**
 * 处理者呬笂涓嬫枃
 *
 * @author starBlues
 * @since 3.0.0
 * @version 3.0.0
 */
public interface ProcessorContext extends RegistryInfo {

    /**
     * 褰撳墠杩愯妯″紡
     * @return RunMode
     */
    RunMode runMode();

    /**
     * 得到鍏ュ彛绫诲锟?SpringPluginBootstrap
     * @return SpringPluginBootstrap
     */
    SpringPluginBootstrap getSpringPluginBootstrap();

    /**
     * 得到插件淇℃伅 PluginDescriptor
     * @return PluginDescriptor
     */
    InsidePluginDescriptor getPluginDescriptor();

    /**
     * 得到插件淇℃伅 PluginInfo
     * @return PluginInfo
     */
    PluginInfo getPluginInfo();

    /**
     * 得到鍚姩鐨刢lass锟?
     * @return Class
     */
    Class<? extends SpringPluginBootstrap> getRunnerClass();

    /**
     * 得到 PluginInteractive
     * @return PluginInteractive
     */
    PluginInteractive getPluginInteractive();

    /**
     * 得到主程序搴忕殑 ApplicationContext
     * @return MainApplicationContext
     */
    MainApplicationContext getMainApplicationContext();

    /**
     * 得到主程序搴忕殑 SpringBeanFactory
     * @return SpringBeanFactory
     */
    SpringBeanFactory getMainBeanFactory();

    /**
     * 得到褰撳墠妗嗘灦鐨勯泦鎴愰厤锟?
     * @return IntegrationConfiguration
     */
    IntegrationConfiguration getConfiguration();


    /**
     * 得到褰撳墠插件锟?ApplicationContext
     * @return GenericApplicationContext
     */
    GenericApplicationContext getApplicationContext();

    /**
     * 得到褰撳墠插件锟?ClassLoader
     * @return ClassLoader
     */
    ClassLoader getClassLoader();

    /**
     * 得到插件的资源婧恖oader
     * @return ResourceLoader
     */
    ResourceLoader getResourceLoader();

    /**
     * 获取 WebConfig
     * @return WebConfig
     */
    WebConfig getWebConfig();

    /**
     * set 褰撳墠插件锟?ApplicationContext
     * @param applicationContext GenericApplicationContext
     */
    void setApplicationContext(GenericApplicationContext applicationContext);

    /**
     * 杩愯妯″紡
     */
    enum RunMode{
        /**
         * 鍏ㄩ儴杩愯
         */
        ALL,

        /**
         * 插件鐜杩愯
         */
        PLUGIN,

        /**
         * 插件鐙珛杩愯
         */
        ONESELF
    }


}

