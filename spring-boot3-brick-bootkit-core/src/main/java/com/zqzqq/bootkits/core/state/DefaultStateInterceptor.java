package com.zqzqq.bootkits.core.state;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * 默认状态变更拦截器（审计日志）
 * @since 3.5.5
 */
public class DefaultStateInterceptor implements PluginStateInterceptor {
    private static final DateTimeFormatter FORMATTER = 
        DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    @Override
    public boolean preStateChange(String pluginId,
            EnhancedPluginState currentState,
            EnhancedPluginState newState) {
        System.out.printf("[%s] 插件 %s 准备从 %s 状态转换到 %s 状态\n",
            FORMATTER.format(LocalDateTime.now()),
            pluginId,
            currentState,
            newState);
        return true;
    }

    @Override
    public void postStateChange(String pluginId,
            EnhancedPluginState previousState,
            EnhancedPluginState newState) {
        System.out.printf("[%s] 插件 %s 已从 %s 状态成功转换到 %s 状态\n",
            FORMATTER.format(LocalDateTime.now()),
            pluginId,
            previousState,
            newState);
    }

    @Override
    public void onStateChangeFailure(String pluginId,
            EnhancedPluginState currentState,
            EnhancedPluginState attemptedState,
            Throwable cause) {
        System.err.printf("[%s] 插件 %s 状态转换失败: %s -> %s, 原因: %s%n",
            FORMATTER.format(LocalDateTime.now()),
            pluginId,
            currentState,
            attemptedState,
            cause.getMessage());
    }
}