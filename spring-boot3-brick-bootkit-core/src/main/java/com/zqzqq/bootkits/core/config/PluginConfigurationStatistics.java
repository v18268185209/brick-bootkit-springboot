package com.zqzqq.bootkits.core.config;

import lombok.Data;
import lombok.AllArgsConstructor;

/**
 * 插件配置统计信息
 * 
 * @author zqzqq
 * @since 4.1.0
 */
@Data
public class PluginConfigurationStatistics {
    
    public PluginConfigurationStatistics() {
        this.totalConfigurations = 0;
        this.totalVersions = 0;
        this.activeWatchers = 0;
        this.listenerCount = 0;
    }
    
    public PluginConfigurationStatistics(int totalConfigurations, int totalVersions, 
                                       int activeWatchers, int listenerCount) {
        this.totalConfigurations = totalConfigurations;
        this.totalVersions = totalVersions;
        this.activeWatchers = activeWatchers;
        this.listenerCount = listenerCount;
    }
    
    /**
     * 总配置数量
     */
    private int totalConfigurations;
    
    /**
     * 总版本数量
     */
    private int totalVersions;
    
    /**
     * 活跃监控器数量
     */
    private int activeWatchers;
    
    /**
     * 监听器数量
     */
    private int listenerCount;
    
    /**
     * 获取平均版本数
     */
    public double getAverageVersionsPerPlugin() {
        return totalConfigurations > 0 ? (double) totalVersions / totalConfigurations : 0.0;
    }
    
    /**
     * 检查是否有活跃监控
     */
    public boolean hasActiveMonitoring() {
        return activeWatchers > 0;
    }
    
    /**
     * 检查是否有监听器
     */
    public boolean hasListeners() {
        return listenerCount > 0;
    }
}