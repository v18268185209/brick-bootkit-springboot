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

package com.zqzqq.bootkits.spring;

import com.zqzqq.bootkits.spring.environment.EnvironmentProvider;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import java.util.Map;

/**
 * 主程序锟?ApplicationContext 鎺ュ彛
 * @author starBlues
 * @version 3.0.1
 */
public interface MainApplicationContext extends ApplicationContext {

    /**
     * 得到主程序库所有的环境配置的 env
     *
     * @return 主程序库所有的环境配置集合
     */
    Map<String, Map<String, Object>> getConfigurableEnvironment();

    /**
     * 得到主程序搴忛厤缃殑 Provider
     * @return EnvironmentProvider
     */
    EnvironmentProvider getEnvironmentProvider();

    /**
     * 杩斿洖主程序搴忛厤缃殑Profile配置
     * @return String 鏁扮粍
     */
    String[] getActiveProfiles();

    /**
     * 杩斿洖主程序搴忛粯璁ょ殑Profile配置
     * @return String 鏁扮粍
     */
    String[] getDefaultProfiles();

    /**
     * 浠庝富程序获取渚濊禆
     *
     * @param requestingBeanName 渚濊禆Bean鍚嶇О
     * @param dependencyType 渚濊禆绫诲瀷
     * @return boolean
     */
    Object resolveDependency(String requestingBeanName, Class<?> dependencyType);

    /**
     * 鏄惁涓簑eb鐜
     * @return boolean
     */
    boolean isWebEnvironment();

    /**
     * 得到鍘熷锟?ApplicationContext
     * @return Object
     */
    Object getSourceApplicationContext();

    /**
     * 鏄惁鑳芥敞鍐孋ontroller
     * @return boolean
     */
    boolean isRegisterController();

    /**
     * 获取主程序搴忕殑 RequestMappingHandlerMapping
     * @return RequestMappingHandlerMapping
     */
    RequestMappingHandlerMapping getRequestMappingHandlerMapping();

    /**
     * 获取主程序搴忕殑 RequestMappingHandlerAdapter
     * @return RequestMappingHandlerAdapter
     */
    RequestMappingHandlerAdapter getRequestMappingHandlerAdapter();


}

