package com.zqzqq.bootkits.core.state;

import com.zqzqq.bootkits.core.PluginInsideInfo;
import com.zqzqq.bootkits.core.PluginState;

/**
 * 插件状态拦截器接口
 * 用于在插件状态转换前后执行自定义处理逻辑
 */
public interface PluginStateInterceptor {

    /**
     * 状态转换前拦截方法
     * @param plugin 插件信息
     * @param oldState 旧状态
     * @param newState 新状态
     * @return 返回true允许状态转换，返回false则阻止转换
     */
    boolean preStateChange(PluginInsideInfo plugin, PluginState oldState, PluginState newState);

    /**
     * 状态转换后处理方法
     * @param plugin 插件信息
     * @param oldState 旧状态
     * @param newState 新状态
     */
    void postStateChange(PluginInsideInfo plugin, PluginState oldState, PluginState newState);

    /**
     * 状态转换失败处理方法
     * @param plugin 插件信息
     * @param oldState 旧状态
     * @param newState 新状态
     * @param e 异常信息
     */
    void onStateChangeFailure(PluginInsideInfo plugin, PluginState oldState, PluginState newState, Exception e);
}