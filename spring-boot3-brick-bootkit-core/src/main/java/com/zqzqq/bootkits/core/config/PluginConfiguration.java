package com.zqzqq.bootkits.core.config;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.HashSet;

/**
 * 插件配置实体
 * 
 * @author zqzqq
 * @since 4.1.0
 */
@Data
@EqualsAndHashCode
public class PluginConfiguration {
    
    /**
     * 插件ID
     */
    private String pluginId;
    
    /**
     * 配置版本
     */
    private String version;
    
    /**
     * 环境标识
     */
    private String environment;
    
    /**
     * 配置属性
     */
    private Map<String, Object> properties = new HashMap<>();
    
    /**
     * 配置元数据
     */
    private PluginConfigurationMetadata metadata;
    
    /**
     * 创建时间
     */
    private LocalDateTime createdAt;
    
    /**
     * 最后更新时间
     */
    private LocalDateTime updatedAt;
    
    /**
     * 配置描述
     */
    private String description;
    
    /**
     * 是否启用
     */
    private boolean enabled = true;
    
    public PluginConfiguration() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.metadata = new PluginConfigurationMetadata();
    }
    
    public PluginConfiguration(String pluginId) {
        this();
        this.pluginId = pluginId;
    }
    
    /**
     * 获取配置属性
     */
    @SuppressWarnings("unchecked")
    public <T> T getProperty(String key, Class<T> type) {
        Object value = properties.get(key);
        if (value == null) {
            return null;
        }
        
        if (type.isInstance(value)) {
            return (T) value;
        }
        
        // 类型转换
        return convertValue(value, type);
    }
    
    /**
     * 获取配置属性（带默认值）
     */
    public <T> T getProperty(String key, T defaultValue, Class<T> type) {
        T value = getProperty(key, type);
        return value != null ? value : defaultValue;
    }
    
    /**
     * 设置配置属性
     */
    public void setProperty(String key, Object value) {
        properties.put(key, value);
        this.updatedAt = LocalDateTime.now();
    }
    
    /**
     * 移除配置属性
     */
    public Object removeProperty(String key) {
        Object removed = properties.remove(key);
        if (removed != null) {
            this.updatedAt = LocalDateTime.now();
        }
        return removed;
    }
    
    /**
     * 检查属性是否存在
     */
    public boolean hasProperty(String key) {
        return properties.containsKey(key);
    }
    
    /**
     * 检查配置是否有效
     */
    public boolean isValid() {
        return pluginId != null && !pluginId.trim().isEmpty();
    }
    
    /**
     * 获取字符串属性
     */
    public String getString(String key) {
        return getProperty(key, String.class);
    }
    
    /**
     * 获取字符串属性（带默认值）
     */
    public String getString(String key, String defaultValue) {
        return getProperty(key, defaultValue, String.class);
    }
    
    /**
     * 获取整数属性
     */
    public Integer getInteger(String key) {
        return getProperty(key, Integer.class);
    }
    
    /**
     * 获取整数属性（带默认值）
     */
    public Integer getInteger(String key, Integer defaultValue) {
        return getProperty(key, defaultValue, Integer.class);
    }
    
    /**
     * 获取布尔属性
     */
    public Boolean getBoolean(String key) {
        return getProperty(key, Boolean.class);
    }
    
    /**
     * 获取布尔属性（带默认值）
     */
    public Boolean getBoolean(String key, Boolean defaultValue) {
        return getProperty(key, defaultValue, Boolean.class);
    }
    
    /**
     * 创建配置副本
     */
    public PluginConfiguration copy() {
        PluginConfiguration copy = new PluginConfiguration();
        copy.pluginId = this.pluginId;
        copy.version = this.version;
        copy.environment = this.environment;
        copy.properties = new HashMap<>(this.properties);
        copy.metadata = this.metadata != null ? this.metadata.copy() : null;
        copy.createdAt = this.createdAt;
        copy.updatedAt = this.updatedAt;
        copy.description = this.description;
        copy.enabled = this.enabled;
        return copy;
    }
    
    @SuppressWarnings("unchecked")
    private <T> T convertValue(Object value, Class<T> type) {
        if (value == null) {
            return null;
        }
        
        String stringValue = value.toString();
        
        try {
            if (type == String.class) {
                return (T) stringValue;
            } else if (type == Integer.class || type == int.class) {
                return (T) Integer.valueOf(stringValue);
            } else if (type == Boolean.class || type == boolean.class) {
                return (T) Boolean.valueOf(stringValue);
            }
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("Cannot convert value '" + stringValue + 
                    "' to type " + type.getSimpleName(), e);
        }
        
        throw new IllegalArgumentException("Unsupported type: " + type.getSimpleName());
    }

    /**
     * 获取插件ID（public方法，确保兼容性）
     */
    public String getPluginId() {
        return pluginId;
    }

    /**
     * 获取版本（public方法，确保兼容性）
     */
    public String getVersion() {
        return version;
    }

    /**
     * 获取描述（public方法，确保兼容性）
     */
    public String getDescription() {
        return description;
    }

    /**
     * 判断是否启用（public方法，确保兼容性）
     */
    public boolean isEnabled() {
        return enabled;
    }

    /**
     * 获取环境（public方法，确保兼容性）
     */
    public String getEnvironment() {
        return environment;
    }

    /**
     * 获取配置属性（public方法，确保兼容性）
     */
    public Map<String, Object> getProperties() {
        return properties;
    }

    /**
     * 获取配置元数据（public方法，确保兼容性）
     */
    public PluginConfigurationMetadata getMetadata() {
        return metadata;
    }

    /**
     * 设置插件ID（public方法，确保兼容性）
     */
    public void setPluginId(String pluginId) {
        this.pluginId = pluginId;
        this.updatedAt = LocalDateTime.now();
    }

    /**
     * 设置版本（public方法，确保兼容性）
     */
    public void setVersion(String version) {
        this.version = version;
        this.updatedAt = LocalDateTime.now();
    }

    /**
     * 设置描述（public方法，确保兼容性）
     */
    public void setDescription(String description) {
        this.description = description;
        this.updatedAt = LocalDateTime.now();
    }

    /**
     * 设置启用状态（public方法，确保兼容性）
     */
    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
        this.updatedAt = LocalDateTime.now();
    }

    /**
     * 设置环境（public方法，确保兼容性）
     */
    public void setEnvironment(String environment) {
        this.environment = environment;
        this.updatedAt = LocalDateTime.now();
    }

    /**
     * 设置配置元数据（public方法，确保兼容性）
     */
    public void setMetadata(PluginConfigurationMetadata metadata) {
        this.metadata = metadata;
        this.updatedAt = LocalDateTime.now();
    }
    
    /**
     * 配置元数据
     */
    @Data
    public static class PluginConfigurationMetadata {
        
        /**
         * 配置来源
         */
        private String source;
        
        /**
         * 配置格式
         */
        private String format;
        
        /**
         * 配置校验规则
         */
        private Map<String, String> validationRules = new HashMap<>();
        
        /**
         * 敏感属性列表
         */
        private Set<String> sensitiveProperties = new HashSet<>();
        
        /**
         * 配置标签
         */
        private Map<String, String> tags = new HashMap<>();
        
        public PluginConfigurationMetadata copy() {
            PluginConfigurationMetadata copy = new PluginConfigurationMetadata();
            copy.source = this.source;
            copy.format = this.format;
            copy.validationRules = new HashMap<>(this.validationRules);
            copy.sensitiveProperties = new HashSet<>(this.sensitiveProperties);
            copy.tags = new HashMap<>(this.tags);
            return copy;
        }

        /**
         * 获取配置标签（public方法，确保兼容性）
         */
        public Map<String, String> getTags() {
            return tags;
        }

        /**
         * 获取敏感属性列表（public方法，确保兼容性）
         */
        public Set<String> getSensitiveProperties() {
            return sensitiveProperties;
        }

        /**
         * 设置配置来源（public方法，确保兼容性）
         */
        public void setSource(String source) {
            this.source = source;
        }

        /**
         * 设置配置格式（public方法，确保兼容性）
         */
        public void setFormat(String format) {
            this.format = format;
        }
    }
}