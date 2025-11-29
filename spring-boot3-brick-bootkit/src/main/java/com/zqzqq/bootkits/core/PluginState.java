package com.zqzqq.bootkits.core;

/**
 * 插件状态接口
 * 定义了插件生命周期中的各种状态
 */
public interface PluginState {

    /**
     * 获取状态名称
     * @return 状态名称
     */
    String name();

    /**
     * 检查是否可以转换到目标状态
     * @param targetState 目标状态
     * @return 如果可以转换返回true，否则返回false
     */
    boolean canTransitionTo(PluginState targetState);

    /**
     * 获取状态描述
     * @return 状态的描述信息
     */
    String getDescription();
}