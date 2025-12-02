package com.zqzqq.bootkits.core.config;

/**
 * 插件配置统计信息
 * 
 * @author zqzqq
 * @since 4.1.0
 */
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
    
    // Manually implemented getters
    public int getTotalConfigurations() {
        return totalConfigurations;
    }
    
    public int getTotalVersions() {
        return totalVersions;
    }
    
    public int getActiveWatchers() {
        return activeWatchers;
    }
    
    public int getListenerCount() {
        return listenerCount;
    }
    
    // Manually implemented setters
    public void setTotalConfigurations(int totalConfigurations) {
        this.totalConfigurations = totalConfigurations;
    }
    
    public void setTotalVersions(int totalVersions) {
        this.totalVersions = totalVersions;
    }
    
    public void setActiveWatchers(int activeWatchers) {
        this.activeWatchers = activeWatchers;
    }
    
    public void setListenerCount(int listenerCount) {
        this.listenerCount = listenerCount;
    }
    
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