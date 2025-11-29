package com.zqzqq.bootkits.core.plugin;

import com.zqzqq.bootkits.core.exception.PluginErrorCode;
import com.zqzqq.bootkits.core.exception.PluginInstallException;
import com.zqzqq.bootkits.core.exception.PluginStartException;
import com.zqzqq.bootkits.core.exception.PluginStopException;
import com.zqzqq.bootkits.core.logging.PluginLogger;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 插件管理器
 * 负责插件的安装、启动、停止和卸载
 */
public class PluginManager {

    private static final PluginLogger logger = PluginLogger.getLogger(PluginManager.class);

    private final PluginLoader pluginLoader;
    private final PluginValidator pluginValidator;
    
    // 已安装的插件
    private final ConcurrentHashMap<String, Plugin> installedPlugins = new ConcurrentHashMap<>();
    
    // 正在运行的插件
    private final ConcurrentHashMap<String, Plugin> runningPlugins = new ConcurrentHashMap<>();

    public PluginManager(PluginLoader pluginLoader, PluginValidator pluginValidator) {
        this.pluginLoader = pluginLoader;
        this.pluginValidator = pluginValidator;
    }

    /**
     * 安装插件
     */
    public Plugin installPlugin(File pluginFile) {
        logger.info("开始安装插件: {}", pluginFile.getName());
        
        try {
            // 验证插件
            if (!pluginValidator.validate(pluginFile)) {
                throw new PluginInstallException(
                    PluginErrorCode.PLUGIN_VALIDATION_FAILED,
                    "插件验证失败: " + pluginFile.getName()
                );
            }
            
            // 加载插件
            Plugin plugin = pluginLoader.loadPlugin(pluginFile);
            
            // 检查是否已安装
            if (installedPlugins.containsKey(plugin.getId())) {
                logger.warn("插件已存在，将覆盖安装: {}", plugin.getId());
            }
            
            // 安装插件
            installedPlugins.put(plugin.getId(), plugin);
            
            logger.info("插件安装成功: {} ({})", plugin.getName(), plugin.getId());
            return plugin;
            
        } catch (Exception e) {
            logger.error("插件安装失败: {} - {}", pluginFile.getName(), e.getMessage(), e);
            throw new PluginInstallException(
                PluginErrorCode.PLUGIN_INSTALL_FAILED,
                "插件安装失败: " + pluginFile.getName(),
                e
            );
        }
    }

    /**
     * 启动插件
     */
    public void startPlugin(String pluginId) {
        logger.info("开始启动插件: {}", pluginId);
        
        Plugin plugin = installedPlugins.get(pluginId);
        if (plugin == null) {
            throw new PluginStartException(
                PluginErrorCode.PLUGIN_NOT_FOUND,
                "插件不存在: " + pluginId
            );
        }
        
        if (runningPlugins.containsKey(pluginId)) {
            logger.warn("插件已在运行: {}", pluginId);
            return;
        }
        
        try {
            plugin.start();
            runningPlugins.put(pluginId, plugin);
            logger.info("插件启动成功: {}", pluginId);
            
        } catch (Exception e) {
            logger.error("插件启动失败: {} - {}", pluginId, e.getMessage(), e);
            throw new PluginStartException(
                PluginErrorCode.PLUGIN_START_FAILED,
                "插件启动失败: " + pluginId,
                e
            );
        }
    }

    /**
     * 停止插件
     */
    public void stopPlugin(String pluginId) {
        logger.info("开始停止插件: {}", pluginId);
        
        Plugin plugin = runningPlugins.get(pluginId);
        if (plugin == null) {
            logger.warn("插件未在运行: {}", pluginId);
            return;
        }
        
        try {
            plugin.stop();
            runningPlugins.remove(pluginId);
            logger.info("插件停止成功: {}", pluginId);
            
        } catch (Exception e) {
            logger.error("插件停止失败: {} - {}", pluginId, e.getMessage(), e);
            throw new PluginStopException(
                PluginErrorCode.PLUGIN_STOP_FAILED,
                "插件停止失败: " + pluginId,
                e
            );
        }
    }

    /**
     * 卸载插件
     */
    public void uninstallPlugin(String pluginId) {
        logger.info("开始卸载插件: {}", pluginId);
        
        // 先停止插件
        if (runningPlugins.containsKey(pluginId)) {
            stopPlugin(pluginId);
        }
        
        Plugin plugin = installedPlugins.get(pluginId);
        if (plugin == null) {
            logger.warn("插件不存在: {}", pluginId);
            return;
        }
        
        try {
            plugin.uninstall();
            installedPlugins.remove(pluginId);
            logger.info("插件卸载成功: {}", pluginId);
            
        } catch (Exception e) {
            logger.error("插件卸载失败: {} - {}", pluginId, e.getMessage(), e);
            // 卸载失败不抛异常，只记录日志
        }
    }

    /**
     * 获取已安装插件列表
     */
    public List<Plugin> getInstalledPluginsList() {
        return new ArrayList<>(installedPlugins.values());
    }

    /**
     * 获取正在运行的插件列表
     */
    public List<Plugin> getRunningPluginsList() {
        return new ArrayList<>(runningPlugins.values());
    }

    /**
     * 获取插件信息
     */
    public Plugin getPlugin(String pluginId) {
        return installedPlugins.get(pluginId);
    }

    /**
     * 检查插件是否已安装
     */
    public boolean isPluginInstalled(String pluginId) {
        return installedPlugins.containsKey(pluginId);
    }

    /**
     * 检查插件是否正在运行
     */
    public boolean isPluginRunning(String pluginId) {
        return runningPlugins.containsKey(pluginId);
    }

    /**
     * 获取已安装插件映射（用于测试）
     */
    public ConcurrentHashMap<String, Plugin> getInstalledPlugins() {
        return installedPlugins;
    }

    /**
     * 获取正在运行插件映射（用于测试）
     */
    public ConcurrentHashMap<String, Plugin> getRunningPlugins() {
        return runningPlugins;
    }
}