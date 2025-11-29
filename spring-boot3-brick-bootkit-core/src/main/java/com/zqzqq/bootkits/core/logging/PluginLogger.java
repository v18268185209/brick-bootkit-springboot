package com.zqzqq.bootkits.core.logging;

import com.zqzqq.bootkits.core.exception.EnhancedPluginException;
import com.zqzqq.bootkits.core.exception.PluginErrorCode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;

import java.util.Map;

/**
 * 插件统一日志记录工具
 * 提供结构化的日志记录，支持上下文信息和错误追踪
 */
public class PluginLogger {
    
    private final Logger logger;
    private static final String PLUGIN_ID_KEY = "pluginId";
    private static final String ERROR_CODE_KEY = "errorCode";
    private static final String OPERATION_KEY = "operation";
    
    private PluginLogger(Logger logger) {
        this.logger = logger;
    }
    
    public static PluginLogger getLogger(Class<?> clazz) {
        return new PluginLogger(LoggerFactory.getLogger(clazz));
    }
    
    public static PluginLogger getLogger(String name) {
        return new PluginLogger(LoggerFactory.getLogger(name));
    }
    
    /**
     * 记录插件操作信息
     */
    public void info(String pluginId, String operation, String message, Object... args) {
        try {
            setMDC(pluginId, null, operation);
            logger.info("[{}] {} - " + message, pluginId, operation, args);
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录插件信息（简化版本）
     */
    public void info(String pluginId, String message) {
        try {
            setMDC(pluginId, null, "INFO");
            logger.info("[{}] {}", pluginId, message);
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录插件警告信息
     */
    public void warn(String pluginId, String operation, String message, Object... args) {
        try {
            setMDC(pluginId, null, operation);
            logger.warn("[{}] {} - " + message, pluginId, operation, args);
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录插件警告信息（简化版本）
     */
    public void warn(String pluginId, String message) {
        try {
            setMDC(pluginId, null, "WARN");
            logger.warn("[{}] {}", pluginId, message);
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录插件错误信息
     */
    public void error(String pluginId, String operation, String message, Throwable throwable) {
        try {
            setMDC(pluginId, null, operation);
            logger.error("[{}] {} - {}", pluginId, operation, message, throwable);
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录插件错误信息（简化版本）
     */
    public void error(String pluginId, String message, Throwable throwable) {
        try {
            setMDC(pluginId, null, "ERROR");
            logger.error("[{}] {}", pluginId, message, throwable);
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录插件错误信息（仅消息）
     */
    public void error(String pluginId, String message) {
        try {
            setMDC(pluginId, null, "ERROR");
            logger.error("[{}] {}", pluginId, message);
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录插件错误信息（带字符串异常信息）
     */
    public void error(String pluginId, String message, String errorDetails) {
        try {
            setMDC(pluginId, null, "ERROR");
            logger.error("[{}] {} - {}", pluginId, message, errorDetails);
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录插件错误信息（两个参数版本，第二个参数为异常）
     */
    public void error(String pluginId, String message, Exception exception) {
        try {
            setMDC(pluginId, null, "ERROR");
            logger.error("[{}] {}", pluginId, message, exception);
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录插件错误信息（两个参数版本，第二个参数为IOException）
     */
    public void error(String pluginId, String message, java.io.IOException exception) {
        try {
            setMDC(pluginId, null, "ERROR");
            logger.error("[{}] {}", pluginId, message, exception);
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录增强插件异常
     */
    public void error(EnhancedPluginException exception) {
        try {
            setMDC(exception.getPluginId(), exception.getErrorCode(), null);
            
            StringBuilder contextInfo = new StringBuilder();
            Map<String, Object> context = exception.getContext();
            if (!context.isEmpty()) {
                contextInfo.append(" Context: ");
                context.forEach((k, v) -> contextInfo.append(k).append("=").append(v).append(", "));
            }
            
            logger.error("[{}] 错误码: {} - {}{}", 
                exception.getPluginId() != null ? exception.getPluginId() : "unknown",
                exception.getErrorCode().getCode(),
                exception.getMessage(),
                contextInfo.toString(),
                exception);
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录插件调试信息
     */
    public void debug(String pluginId, String operation, String message, Object... args) {
        if (logger.isDebugEnabled()) {
            try {
                setMDC(pluginId, null, operation);
                logger.debug("[{}] {} - " + message, pluginId, operation, args);
            } finally {
                clearMDC();
            }
        }
    }
    
    /**
     * 记录插件性能信息
     */
    public void performance(String pluginId, String operation, long durationMs) {
        try {
            setMDC(pluginId, null, operation);
            if (durationMs > 1000) {
                logger.warn("[{}] {} - 执行时间较长: {}ms", pluginId, operation, durationMs);
            } else {
                logger.debug("[{}] {} - 执行时间: {}ms", pluginId, operation, durationMs);
            }
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录插件生命周期事件
     */
    public void lifecycle(String pluginId, PluginLifecycleEvent event, String details) {
        try {
            setMDC(pluginId, null, event.name());
            logger.info("[{}] 生命周期事件: {} - {}", pluginId, event.getDescription(), details);
        } finally {
            clearMDC();
        }
    }
    
    /**
     * 记录安全相关事件
     */
    public void security(String pluginId, String event, String details) {
        try {
            setMDC(pluginId, null, "SECURITY");
            logger.warn("[{}] 安全事件: {} - {}", pluginId, event, details);
        } finally {
            clearMDC();
        }
    }
    
    private void setMDC(String pluginId, PluginErrorCode errorCode, String operation) {
        if (pluginId != null) {
            MDC.put(PLUGIN_ID_KEY, pluginId);
        }
        if (errorCode != null) {
            MDC.put(ERROR_CODE_KEY, String.valueOf(errorCode.getCode()));
        }
        if (operation != null) {
            MDC.put(OPERATION_KEY, operation);
        }
    }
    
    private void clearMDC() {
        MDC.remove(PLUGIN_ID_KEY);
        MDC.remove(ERROR_CODE_KEY);
        MDC.remove(OPERATION_KEY);
    }
    
    /**
     * 插件生命周期事件枚举
     */
    public enum PluginLifecycleEvent {
        INSTALLING("安装中"),
        INSTALLED("已安装"),
        STARTING("启动中"),
        STARTED("已启动"),
        STOPPING("停止中"),
        STOPPED("已停止"),
        UNINSTALLING("卸载中"),
        UNINSTALLED("已卸载"),
        FAILED("失败");
        
        private final String description;
        
        PluginLifecycleEvent(String description) {
            this.description = description;
        }
        
        public String getDescription() {
            return description;
        }
    }
}