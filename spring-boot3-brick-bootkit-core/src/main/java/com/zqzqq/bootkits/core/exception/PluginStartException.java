package com.zqzqq.bootkits.core.exception;

/**
 * 插件启动异常
 */
public class PluginStartException extends EnhancedPluginException {
    
    public PluginStartException(PluginErrorCode errorCode, String message) {
        super(errorCode, message);
    }
    
    public PluginStartException(PluginErrorCode errorCode, String message, Throwable cause) {
        super(errorCode, message);
        initCause(cause);
    }
    
    public static PluginStartException startFailed(String pluginId, String reason) {
        return new PluginStartException(PluginErrorCode.START_FAILED, reason)
                .withPluginId(pluginId);
    }
    
    public static PluginStartException startTimeout(String pluginId, long timeoutMs) {
        return new PluginStartException(PluginErrorCode.START_TIMEOUT, 
                "启动超时: " + timeoutMs + "ms")
                .withPluginId(pluginId)
                .withContext("timeoutMs", timeoutMs);
    }
    
    public static PluginStartException dependencyMissing(String pluginId, String dependency) {
        return new PluginStartException(PluginErrorCode.START_DEPENDENCY_MISSING, 
                "启动依赖缺失: " + dependency)
                .withPluginId(pluginId)
                .withContext("dependency", dependency);
    }
    
    public static PluginStartException configurationError(String pluginId, String configKey, String reason) {
        return new PluginStartException(PluginErrorCode.START_CONFIGURATION_ERROR, 
                "配置错误: " + configKey + " - " + reason)
                .withPluginId(pluginId)
                .withContext("configKey", configKey)
                .withContext("reason", reason);
    }
    
    public static PluginStartException classLoaderError(String pluginId, String className, Throwable cause) {
        return new PluginStartException(PluginErrorCode.START_CLASSLOADER_ERROR, 
                "类加载错误: " + className, cause)
                .withPluginId(pluginId)
                .withContext("className", className);
    }
    
    public static PluginStartException springContextError(String pluginId, Throwable cause) {
        return new PluginStartException(PluginErrorCode.START_SPRING_CONTEXT_ERROR, 
                "Spring上下文启动失败", cause)
                .withPluginId(pluginId);
    }
}