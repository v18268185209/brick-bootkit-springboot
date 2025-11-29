package com.zqzqq.bootkits.core.config;

/**
 * 插件配置变更监听器
 * 
 * @author zqzqq
 * @since 4.1.0
 */
public interface PluginConfigurationListener {
    
    /**
     * 配置变更时调用
     * 
     * @param event 配置变更事件
     */
    void onConfigurationChanged(PluginConfigurationChangeEvent event);
    
    /**
     * 获取监听器优先级
     * 数值越小优先级越高
     * 
     * @return 优先级
     */
    default int getPriority() {
        return 0;
    }
    
    /**
     * 检查是否支持指定插件的配置变更
     * 
     * @param pluginId 插件ID
     * @return 是否支持
     */
    default boolean supports(String pluginId) {
        return true;
    }
}