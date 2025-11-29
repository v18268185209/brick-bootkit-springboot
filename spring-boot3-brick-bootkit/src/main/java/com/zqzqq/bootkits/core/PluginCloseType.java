package com.zqzqq.bootkits.core;

/**
 * 插件关闭类型
 *
 * @author starBlues
 * @since 3.1.0
 * @version 3.1.0
 */
public enum PluginCloseType {

    /**
     * 正常停止关闭
     */
    STOP,

    /**
     * 卸载移除
     */
    UNINSTALL,

    /**
     * 升级卸载
     */
    UPGRADE_UNINSTALL

}