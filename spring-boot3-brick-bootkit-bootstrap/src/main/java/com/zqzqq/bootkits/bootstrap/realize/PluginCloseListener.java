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

package com.zqzqq.bootkits.bootstrap.realize;

import com.zqzqq.bootkits.core.PluginCloseType;
import com.zqzqq.bootkits.core.PluginInfo;
import com.zqzqq.bootkits.core.descriptor.PluginDescriptor;
import org.springframework.context.support.GenericApplicationContext;

/**
 * 插件琚仠姝㈢洃鍚€呫€傜敤浜庤嚜瀹氫箟关闭资源
 *
 * @author starBlues
 * @since 3.0.0
 * @version 3.1.0
 */
public interface PluginCloseListener {

    /**
     * 关闭鏃惰皟鐢?
     * @param descriptor 褰撳墠插件鎻忚堪鑰?
     * @deprecated 鍦?3.1.1 版本浼氳鍒犻櫎
     * @since 3.0.0
     */
    default void close(PluginDescriptor descriptor){}

    /**
     * 关闭鏃惰皟鐢?
     * @param applicationContext 褰撳墠插件鐨凙pplicationContext
     * @param pluginInfo 褰撳墠插件淇℃伅
     * @param closeType 鍋滄绫诲瀷
     * @since 3.1.0
     */
    default void close(GenericApplicationContext applicationContext,
                       PluginInfo pluginInfo, PluginCloseType closeType){
        close(pluginInfo != null ? pluginInfo.getPluginDescriptor() : null);
    }

}

