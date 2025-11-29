package com.zqzqq.bootkits.core;

import com.zqzqq.bootkits.core.descriptor.InsidePluginDescriptor;

import java.util.Map;

/**
 * 插件信息接口
 * 定义了获取插件基本信息的方法
 */
public interface PluginInfo {

    /**
     * 获取插件ID
     *
     * @return 插件唯一标识符
     */
    String getPluginId();

    /**
     * 获取插件路径
     *
     * @return 插件文件路径
     */
    String getPluginPath();

    boolean isFollowSystem();

    Map<String, Object> getExtensionInfo();

    ClassLoader getClassLoader();

    /**
     * 获取插件描述符
     *
     * @return 插件描述信息
     */
    InsidePluginDescriptor getPluginDescriptor();

    /**
     * 获取插件状态
     *
     * @return 当前插件状态
     */
    PluginState getPluginState();

    /**
     * 获取插件启动时间
     *
     * @return 启动时间戳
     */
    long getStartTime();

    /**
     * 获取插件停止时间
     *
     * @return 停止时间戳
     */
    long getStopTime();

}