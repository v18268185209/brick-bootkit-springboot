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

package com.zqzqq.bootkits.utils;


import java.util.Comparator;
import java.util.List;
import java.util.function.Function;

/**
 * 閫氱敤工具
 *
 * @author starBlues
 * @since 3.0.0
 * @version 3.0.0
 */
public class OrderUtils {

    private OrderUtils(){}

    /**
     * list鎸夌収int鎺掑簭. 鏁板瓧瓒婂ぇ, 瓒婃帓鍦ㄥ墠闈?
     * @param list list集合
     * @param orderImpl 鎺掑簭实现
     * @param <T> T
     * @return List
     */
    public static <T> List<T> order(List<T> list, Function<T, Integer> orderImpl){
        if(list == null){
            return null;
        }
        list.sort(Comparator.comparing(orderImpl, Comparator.nullsLast(Comparator.reverseOrder())));
        return list;
    }


    /**
     * 瀵?OrderPriority 杩涜鎺掑簭操作
     * @param order OrderPriority
     * @param <T> 褰撳墠操作瑕佽鎺掑簭鐨刡ean
     * @return Comparator
     */
    public static <T> Comparator<T> orderPriority(final Function<T, OrderPriority> order){
        return Comparator.comparing(t -> {
            OrderPriority orderPriority = order.apply(t);
            if(orderPriority == null){
                orderPriority = OrderPriority.getLowPriority();
            }
            return orderPriority.getPriority();
        }, Comparator.nullsLast(Comparator.reverseOrder()));
    }


}

