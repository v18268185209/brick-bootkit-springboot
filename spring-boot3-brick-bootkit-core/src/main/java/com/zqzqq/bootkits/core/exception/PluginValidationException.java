package com.zqzqq.bootkits.core.exception;

/**
 * 插件验证异常
 * 当插件验证失败时抛出此异常
 */
public class PluginValidationException extends EnhancedPluginException {

    public PluginValidationException(PluginErrorCode errorCode) {
        super(errorCode);
    }

    public PluginValidationException(PluginErrorCode errorCode, String message) {
        super(errorCode, message);
    }

    public PluginValidationException(PluginErrorCode errorCode, String message, Throwable cause) {
        super(errorCode, message, cause);
    }

    public PluginValidationException(PluginErrorCode errorCode, Throwable cause) {
        super(errorCode, cause);
    }
}