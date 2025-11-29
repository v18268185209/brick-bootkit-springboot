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

package com.zqzqq.bootkits.integration.user;

import java.lang.annotation.Annotation;
import java.util.List;
import java.util.Set;

/**
 * 璇ユ帴鍙ｇ敤浜庡湪主程序搴忔搷浣滆幏鍙栦富程序/插件锟?Spring 绠＄悊 Bean
 * @author starBlues
 * @version 3.0.0
 */
public interface PluginUser {

    /**
     * 获取 Bean鍚嶇О
     * @param includeMainBeans 鏄惁鍖呭惈主程序锟?Bean
     * @return Bean 鍖呰瀵硅薄
     */
    BeanWrapper<Set<String>> getBeanName(boolean includeMainBeans);

    /**
     * 获取插件中的Bean名称
     * @param pluginId 插件id
     * @return Bean名称集合
     */
    Set<String> getBeanName(String pluginId);


    /**
     * 通过 Bean名称获取 Bean 对象
     * @param name Bean的名称
     * @param includeMainBeans 是否包含主程序Bean
     * @return Bean对象
     */
    BeanWrapper<Object> getBean(String name, boolean includeMainBeans);

    /**
     * 通过 Bean鍚嶇О获取鍏蜂綋插件涓殑 Bean 瀵硅薄
     * @param pluginId 插件id锟?
     * @param name Bean鍚嶇О
     * @return Object
     */
    Object getBean(String pluginId, String name);


    /**
     * 通过鎺ュ彛获取实现鐨勫璞￠泦锟?
     * @param interfaceClass 鎺ュ彛鐨勭被
     * @param includeMainBeans 鏄惁鍖呭惈主程序锟?Bean
     * @param <T> Bean鐨勭被锟?
     * @return Bean鍖呰瀵硅薄
     */
    <T> BeanWrapper<List<T>> getBeanByInterface(Class<T> interfaceClass, boolean includeMainBeans);

    /**
     * 通过鎺ュ彛获取鍏蜂綋插件涓殑实现瀵硅薄闆嗗悎
     * @param pluginId 插件id
     * @param interfaceClass 鎺ュ彛鐨勭被
     * @param <T> Bean鐨勭被锟?
     * @return List
     */
    <T> List<T> getBeanByInterface(String pluginId, Class<T> interfaceClass);

    /**
     * 通过注解获取 Bean
     * @param annotationType 注解绫诲瀷
     * @param includeMainBeans 鏄惁鍖呭惈主程序锟?Bean
     * @return Bean鍖呰瀵硅薄
     */
    BeanWrapper<List<Object>> getBeansWithAnnotation(Class<? extends Annotation> annotationType, boolean includeMainBeans);

    /**
     * 通过注解获取鍏蜂綋插件涓殑 Bean
     * @param pluginId  插件id
     * @param annotationType 注解绫诲瀷
     * @return 璇ユ敞瑙ｇ殑 Bean 闆嗗悎
     */
    List<Object> getBeansWithAnnotation(String pluginId, Class<? extends Annotation> annotationType);


}

