package com.zqzqq.bootkits.core.exception;

/**
 * 增强型插件异常
 * 用于表示插件操作过程中的各种异常情况
 */
public class EnhancedPluginException extends RuntimeException {

    /**
     * 构造一个新的插件异常
     */
    public EnhancedPluginException() {
        super();
    }

    /**
     * 构造一个带有指定详细消息的插件异常
     * @param message 详细消息
     */
    public EnhancedPluginException(String message) {
        super(message);
    }

    /**
     * 构造一个带有指定详细消息和原因的插件异常
     * @param message 详细消息
     * @param cause 原因
     */
    public EnhancedPluginException(String message, Throwable cause) {
        super(message, cause);
    }

    /**
     * 构造一个带有指定原因的插件异常
     * @param cause 原因
     */
    public EnhancedPluginException(Throwable cause) {
        super(cause);
    }
}