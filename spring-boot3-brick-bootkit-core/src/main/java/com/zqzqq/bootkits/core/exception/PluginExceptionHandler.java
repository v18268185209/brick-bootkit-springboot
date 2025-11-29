package com.zqzqq.bootkits.core.exception;

/**
 * 插件异常处理鍣ㄦ帴鍙?
 */
public interface PluginExceptionHandler {
    /**
     * 处理插件异常
     * @param exception 异常实例
     * @param phase 褰撳墠闃舵锛坕nstall/start/stop绛夛級
     */
    void handle(EnhancedPluginException exception, String phase);

    /**
     * 鏄惁鍙仮澶嶅紓甯?
     */
    boolean isRecoverable(EnhancedPluginException exception);

    /**
     * 获取閿欒处理寤鸿
     */
    default String getAdvice(EnhancedPluginException exception) {
        return "请检查插件配置和运行时环境";
    }
}