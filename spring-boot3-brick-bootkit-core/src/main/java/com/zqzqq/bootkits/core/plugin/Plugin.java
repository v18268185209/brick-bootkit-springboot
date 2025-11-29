package com.zqzqq.bootkits.core.plugin;

/**
 * 插件接口
 * 所有插件都必须实现此接口
 */
public interface Plugin {

    /**
     * 获取插件ID
     */
    String getId();

    /**
     * 获取插件名称
     */
    String getName();

    /**
     * 获取插件版本
     */
    String getVersion();

    /**
     * 获取插件描述
     */
    String getDescription();

    /**
     * 启动插件
     */
    void start() throws Exception;

    /**
     * 停止插件
     */
    void stop() throws Exception;

    /**
     * 卸载插件
     */
    void uninstall() throws Exception;

    /**
     * 检查插件是否正在运行
     */
    boolean isRunning();
}