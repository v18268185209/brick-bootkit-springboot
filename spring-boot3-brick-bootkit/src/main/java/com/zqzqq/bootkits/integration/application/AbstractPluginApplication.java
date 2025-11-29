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

package com.zqzqq.bootkits.integration.application;

import com.zqzqq.bootkits.integration.IntegrationConfiguration;
import org.springframework.beans.factory.BeanCreationException;
import org.springframework.context.ApplicationContext;

/**
 * 鍏敤鐨勭殑插件搴旂敤
 *
 * @author starBlues
 * @version 3.0.0
 */
public abstract class AbstractPluginApplication implements PluginApplication {

    /**
     * 子类鍙€氳繃Application 获取插件瀹氫箟鐨勯厤锟?
     * @param applicationContext applicationContext
     * @return IntegrationConfiguration
     */
    protected IntegrationConfiguration getConfiguration(ApplicationContext applicationContext){
        IntegrationConfiguration configuration = null;
        try {
            configuration = applicationContext.getBean(IntegrationConfiguration.class);
        } catch (Exception e){
            // no show exception
        }
        if(configuration == null){
            throw new BeanCreationException("娌℃湁鍙戠幇 <IntegrationConfiguration> Bean, " +
                    "璇峰湪 Spring 瀹瑰櫒涓皢 <IntegrationConfiguration> 瀹氫箟涓築ean");
        }
        return configuration;
    }

}

