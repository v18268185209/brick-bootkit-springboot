package com.zqzqq.bootkits.core.exception;

/**
 * 插件配置异常
 */
public class PluginConfigException extends EnhancedPluginException {
    
    public PluginConfigException(PluginErrorCode errorCode, String message) {
        super(errorCode, message);
    }
    
    public PluginConfigException(PluginErrorCode errorCode, String message, Throwable cause) {
        super(errorCode, message);
        initCause(cause);
    }
    
    public static PluginConfigException invalidConfig(String pluginId, String configKey, String reason) {
        return new PluginConfigException(PluginErrorCode.CONFIG_INVALID, 
                "配置无效: " + configKey + " - " + reason)
                .withPluginId(pluginId)
                .withContext("configKey", configKey)
                .withContext("reason", reason);
    }
    
    public static PluginConfigException missingConfig(String pluginId, String configKey) {
        return new PluginConfigException(PluginErrorCode.CONFIG_MISSING, 
                "配置缺失: " + configKey)
                .withPluginId(pluginId)
                .withContext("configKey", configKey);
    }
    
    public static PluginConfigException parseError(String pluginId, String configFile, Throwable cause) {
        return new PluginConfigException(PluginErrorCode.CONFIG_PARSE_ERROR, 
                "配置解析错误: " + configFile, cause)
                .withPluginId(pluginId)
                .withContext("configFile", configFile);
    }
    
    public static PluginConfigException validationError(String pluginId, String field, String value, String constraint) {
        return new PluginConfigException(PluginErrorCode.CONFIG_VALIDATION_ERROR, 
                "配置验证失败: " + field + "=" + value + " 不满足约束: " + constraint)
                .withPluginId(pluginId)
                .withContext("field", field)
                .withContext("value", value)
                .withContext("constraint", constraint);
    }
}