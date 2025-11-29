package com.zqzqq.bootkits.core.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * 插件配置管理属性
 * 
 * @author zqzqq
 * @since 4.1.0
 */
@Data
@ConfigurationProperties(prefix = "plugin.configuration")
public class PluginConfigurationProperties {
    
    /**
     * 是否启用配置管理
     */
    private boolean enabled = true;
    
    /**
     * 配置文件目录
     */
    private String configDirectory = "config/plugins";
    
    /**
     * 是否启用热重载
     */
    private boolean hotReloadEnabled = true;
    
    /**
     * 热重载延迟（毫秒）
     */
    private long hotReloadDelay = 1000;
    
    /**
     * 是否启用持久化
     */
    private boolean persistenceEnabled = true;
    
    /**
     * 每个插件最大版本数
     */
    private int maxVersionsPerPlugin = 10;
    
    /**
     * 配置缓存大小
     */
    private int cacheSize = 100;
    
    /**
     * 配置验证是否启用
     */
    private boolean validationEnabled = true;
    
    /**
     * 是否启用配置加密
     */
    private boolean encryptionEnabled = false;
    
    /**
     * 加密密钥
     */
    private String encryptionKey;
    
    /**
     * 配置备份是否启用
     */
    private boolean backupEnabled = true;
    
    /**
     * 备份目录
     */
    private String backupDirectory = "backup/plugins";
    
    /**
     * 备份保留天数
     */
    private int backupRetentionDays = 30;
    
    /**
     * 获取最大版本历史数量（兼容方法）
     */
    public int getMaxVersionHistory() {
        return maxVersionsPerPlugin;
    }

    /**
     * 判断热重载是否启用
     */
    public boolean isHotReloadEnabled() {
        return hotReloadEnabled;
    }

    /**
     * 判断持久化是否启用
     */
    public boolean isPersistenceEnabled() {
        return persistenceEnabled;
    }

    /**
     * 获取配置目录
     */
    public String getConfigDirectory() {
        return configDirectory;
    }
}