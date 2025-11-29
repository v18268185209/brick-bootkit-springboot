package com.zqzqq.bootkits.core.state;

/**
 * 插件状态变更拦截器
 * @since 3.5.5
 */
public interface PluginStateInterceptor {
    
    /**
     * 状态变更前触发
     * @param pluginId 插件ID
     * @param currentState 当前状态
     * @param newState 新状态
     * @return 是否允许继续执行状态变更
     */
    default boolean preStateChange(String pluginId,
            EnhancedPluginState currentState,
            EnhancedPluginState newState) {
        return true;
    }

    /**
     * 状态变更后触发
     * @param pluginId 插件ID
     * @param previousState 之前状态
     * @param newState 新状态
     */
    default void postStateChange(String pluginId,
            EnhancedPluginState previousState,
            EnhancedPluginState newState) {
    }

    /**
     * 状态变更异常时触发
     * @param pluginId 插件ID
     * @param currentState 当前状态
     * @param attemptedState 尝试转换的状态
     * @param cause 异常原因
     */
    default void onStateChangeFailure(String pluginId,
            EnhancedPluginState currentState,
            EnhancedPluginState attemptedState,
            Throwable cause) {
    }
}