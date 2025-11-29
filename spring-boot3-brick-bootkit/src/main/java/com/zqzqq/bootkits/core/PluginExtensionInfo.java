package com.zqzqq.bootkits.core;

import java.util.Map;

/**
 * 扩展实现插件额外扩展信息
 *
 * @author starBlues
 * @version 3.1.0
 * @since 3.1.0
 */
public interface PluginExtensionInfo {

    /**
     * 扩展方法获取扩展信息
     * @return 扩展信息Map
     */
    Map<String, Object> extensionInfo();

}