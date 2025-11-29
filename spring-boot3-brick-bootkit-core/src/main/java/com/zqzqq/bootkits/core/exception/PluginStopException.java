package com.zqzqq.bootkits.core.exception;

/**
 * 插件停止异常
 * 当插件停止失败时抛出此异常
 */
public class PluginStopException extends EnhancedPluginException {

    public PluginStopException(PluginErrorCode errorCode) {
        super(errorCode);
    }

    public PluginStopException(PluginErrorCode errorCode, String message) {
        super(errorCode, message);
    }

    public PluginStopException(PluginErrorCode errorCode, String message, Throwable cause) {
        super(errorCode, message, cause);
    }

    public PluginStopException(PluginErrorCode errorCode, Throwable cause) {
        super(errorCode, cause);
    }
}