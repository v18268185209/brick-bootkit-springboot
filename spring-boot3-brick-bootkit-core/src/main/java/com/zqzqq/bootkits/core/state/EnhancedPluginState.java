package com.zqzqq.bootkits.core.state;

import java.util.EnumSet;
import java.util.Objects;
import java.util.Set;

/**
 * 增强版插件状态机
 * @since 3.5.5
 */
public enum EnhancedPluginState {
    PARSED("插件描述文件已解析"),
    LOADED("插件已加载"),
    STARTED("插件已启动"),
    STOPPED("插件已停止"),
    DISABLED("插件已禁用"), 
    UNLOADED("插件已卸载");

    private Set<EnhancedPluginState> allowedTransitions;
    private final String description;

    static {
        PARSED.allowedTransitions = EnumSet.of(LOADED, DISABLED);
        LOADED.allowedTransitions = EnumSet.of(STARTED, DISABLED, UNLOADED);
        STARTED.allowedTransitions = EnumSet.of(STOPPED, UNLOADED);
        STOPPED.allowedTransitions = EnumSet.of(STARTED, UNLOADED);
        DISABLED.allowedTransitions = EnumSet.of(LOADED, UNLOADED);
        UNLOADED.allowedTransitions = EnumSet.noneOf(EnhancedPluginState.class);
    }

    EnhancedPluginState(String description) {
        this.description = description;
    }

    /**
     * 检查状态转换是否合规
     */
    public boolean canTransitionTo(EnhancedPluginState newState) {
        Objects.requireNonNull(newState);
        if (this == newState) {
            throw new IllegalArgumentException("Cannot transition to same state");
        }
        return allowedTransitions.contains(newState);
    }

    /**
     * 获取所有允许的转换状态
     */
    public Set<EnhancedPluginState> getAllowedTransitions() {
        return EnumSet.copyOf(allowedTransitions);
    }

    /**
     * 获取状态描述
     */
    public String getDescription() {
        return description;
    }
}