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

package com.zqzqq.bootkits.spring.extract;

import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * 扩展宸ュ巶
 * @author starBlues
 * @version 3.0.0
 */
public interface ExtractFactory {

    ExtractFactory INSTANT = new DefaultExtractFactory();

    /**
     * 获取实例
     * @return ExtractFactory
     */
    static ExtractFactory getInstant(){
        return INSTANT;
    }

    /**
     * 通过鍧愭爣得到扩展
     * @param coordinate 扩展鐨勫潗锟?
     * @param <T> 扩展鐨勬硾锟?
     * @return 扩展实例, 如果不存在则抛出 RuntimeException 异常
     */
    <T> T getExtractByCoordinate(ExtractCoordinate coordinate);

    /**
     * 根据插件id鍜屽潗鏍囧緱鍒版墿锟?
     * @param pluginId 插件id
     * @param coordinate 扩展鐨勫潗锟?
     * @param <T> 扩展鐨勬硾锟?
     * @return 扩展实例, 如果不存在则抛出 RuntimeException 异常
     */
    <T> T getExtractByCoordinate(String pluginId, ExtractCoordinate coordinate);


    /**
     * 根据鍧愭爣得到主程序搴忕殑扩展
     * 主程序搴忔墿灞曞繀椤讳娇锟?@Extract+@Component 杩涜瀹氫箟
     * @param coordinate 扩展鐨勫潗锟?
     * @param <T> 扩展鐨勬硾锟?
     * @return 扩展实例, 如果不存在则抛出 RuntimeException 异常
     */
    <T> T getExtractByCoordinateOfMain(ExtractCoordinate coordinate);

    /**
     * 根据接口类型获取扩展
     * @param interfaceClass 接口类型
     * @param <T> 接口类型泛型
     * @return 扩展实现集合
     */
    <T> List<T> getExtractByInterClass(Class<T> interfaceClass);

    /**
     * 根据插件id和接口类型获取扩展
     * @param pluginId 插件id
     * @param interfaceClass 接口类型
     * @param <T> 接口类型泛型
     * @return 扩展实现集合
     */
    <T> List<T> getExtractByInterClass(String pluginId, Class<T> interfaceClass);

    /**
     * 根据接口类型获取主程序程序的扩展
     * 主程序搴忔墿灞曞繀椤讳娇锟?@Extract+@Component 杩涜瀹氫箟
     * @param interfaceClass 接口类型
     * @param <T> 接口类型泛型
     * @return 扩展实现集合
     */
    <T> List<T> getExtractByInterClassOfMain(Class<T> interfaceClass);

    /**
     * 得到所有的扩展坐标
     * @return 扩展坐标集合, key 为插件id, 值为所有扩展坐标集合
     */
    Map<String, Set<ExtractCoordinate>> getExtractCoordinates();

}

