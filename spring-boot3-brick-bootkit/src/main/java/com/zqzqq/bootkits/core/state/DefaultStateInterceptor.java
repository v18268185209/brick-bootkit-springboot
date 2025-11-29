package com.zqzqq.bootkits.core.state;

import com.zqzqq.bootkits.core.PluginInsideInfo;
import com.zqzqq.bootkits.core.PluginState;

/**
 * 默认状态拦截器实现
 * 可继承此类来重写状态拦截逻辑
 */
public class DefaultStateInterceptor implements PluginStateInterceptor {

    @Override
    public boolean preStateChange(PluginInsideInfo plugin, PluginState oldState, PluginState newState) {
        // 默认允许所有状态转换
        return true;
    }

    @Override
    public void postStateChange(PluginInsideInfo plugin, PluginState oldState, PluginState newState) {
        // 状态转换后默认处理逻辑
        // 可在此处添加日志记录或监控统计
    }

    @Override
    public void onStateChangeFailure(PluginInsideInfo plugin, PluginState oldState, PluginState newState, Exception e) {
        // 状态转换失败默认处理逻辑
        // 可在此处添加日志记录或异常通知
    }
}
