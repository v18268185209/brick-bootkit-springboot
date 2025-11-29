package com.zqzqq.bootkits.core.exception;

/**
 * 插件加载异常
 * 当插件加载失败时抛出此异常
 */
public class PluginLoadException extends EnhancedPluginException {

    public PluginLoadException(PluginErrorCode errorCode) {
        super(errorCode);
    }

    public PluginLoadException(PluginErrorCode errorCode, String message) {
        super(errorCode, message);
    }

    public PluginLoadException(PluginErrorCode errorCode, String message, Throwable cause) {
        super(errorCode, message, cause);
    }

    public PluginLoadException(PluginErrorCode errorCode, Throwable cause) {
        super(errorCode, cause);
    }
}