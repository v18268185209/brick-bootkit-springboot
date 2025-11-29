package com.zqzqq.bootkits.core.exception;

/**
 * 插件运行时异常
 */
public class PluginRuntimeException extends EnhancedPluginException {
    
    public PluginRuntimeException(PluginErrorCode errorCode, String message) {
        super(errorCode, message);
    }
    
    public PluginRuntimeException(PluginErrorCode errorCode, String message, Throwable cause) {
        super(errorCode, message);
        initCause(cause);
    }
    
    public static PluginRuntimeException runtimeError(String pluginId, String operation, Throwable cause) {
        return new PluginRuntimeException(PluginErrorCode.RUNTIME_ERROR, 
                "运行时异常: " + operation, cause)
                .withPluginId(pluginId)
                .withContext("operation", operation);
    }
    
    public static PluginRuntimeException resourceLeak(String pluginId, String resourceType, String details) {
        return new PluginRuntimeException(PluginErrorCode.RESOURCE_LEAK, 
                "资源泄漏: " + resourceType + " - " + details)
                .withPluginId(pluginId)
                .withContext("resourceType", resourceType)
                .withContext("details", details);
    }
    
    public static PluginRuntimeException memoryError(String pluginId, long usedMemory, long maxMemory) {
        return new PluginRuntimeException(PluginErrorCode.RUNTIME_MEMORY_ERROR, 
                "内存不足: 已使用 " + usedMemory + "MB, 最大 " + maxMemory + "MB")
                .withPluginId(pluginId)
                .withContext("usedMemory", usedMemory)
                .withContext("maxMemory", maxMemory);
    }
    
    public static PluginRuntimeException threadError(String pluginId, String threadName, Throwable cause) {
        return new PluginRuntimeException(PluginErrorCode.RUNTIME_THREAD_ERROR, 
                "线程异常: " + threadName, cause)
                .withPluginId(pluginId)
                .withContext("threadName", threadName);
    }
    
    public static PluginRuntimeException ioError(String pluginId, String operation, String path, Throwable cause) {
        return new PluginRuntimeException(PluginErrorCode.RUNTIME_IO_ERROR, 
                "IO异常: " + operation + " - " + path, cause)
                .withPluginId(pluginId)
                .withContext("operation", operation)
                .withContext("path", path);
    }
    
    public static PluginRuntimeException networkError(String pluginId, String url, Throwable cause) {
        return new PluginRuntimeException(PluginErrorCode.RUNTIME_NETWORK_ERROR, 
                "网络异常: " + url, cause)
                .withPluginId(pluginId)
                .withContext("url", url);
    }
}