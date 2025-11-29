package com.zqzqq.bootkits.core.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;

import java.io.IOException;
import java.nio.file.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.*;

/**
 * 插件配置管理器
 * 提供配置热更新、版本控制、多环境支持等功能
 * 
 * @author zqzqq
 * @since 4.1.0
 */
@Slf4j
public class PluginConfigurationManager {
    
    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(PluginConfigurationManager.class);
    
    private final ApplicationEventPublisher eventPublisher;
    private final PluginConfigurationProperties properties;
    private final ReadWriteLock lock = new ReentrantReadWriteLock();
    
    // 配置存储
    private final ConcurrentHashMap<String, PluginConfiguration> configurations = new ConcurrentHashMap<>();
    private final ConcurrentHashMap<String, List<PluginConfigurationVersion>> configVersions = new ConcurrentHashMap<>();
    
    // 配置监听器
    private final CopyOnWriteArrayList<PluginConfigurationListener> listeners = new CopyOnWriteArrayList<>();
    
    // 文件监控
    private WatchService watchService;
    private final ConcurrentHashMap<String, WatchKey> watchKeys = new ConcurrentHashMap<>();
    
    public PluginConfigurationManager(ApplicationEventPublisher eventPublisher,
                                    PluginConfigurationProperties properties) {
        this.eventPublisher = eventPublisher;
        this.properties = properties;
        
        initialize();
    }
    
    private void initialize() {
        try {
            // 初始化文件监控服务
            if (properties.isHotReloadEnabled()) {
                watchService = FileSystems.getDefault().newWatchService();
                startFileWatcher();
            }
            
            // 加载初始配置
            loadInitialConfigurations();
            
            log.info("Plugin configuration manager initialized with hot reload: {}", 
                    properties.isHotReloadEnabled());
            
        } catch (Exception e) {
            log.error("Failed to initialize plugin configuration manager", e);
            throw new RuntimeException("Configuration manager initialization failed", e);
        }
    }
    
    /**
     * 获取插件配置
     */
    public PluginConfiguration getConfiguration(String pluginId) {
        lock.readLock().lock();
        try {
            return configurations.get(pluginId);
        } finally {
            lock.readLock().unlock();
        }
    }
    
    /**
     * 获取插件配置属性
     */
    public <T> T getConfigurationProperty(String pluginId, String key, Class<T> type) {
        PluginConfiguration config = getConfiguration(pluginId);
        if (config == null) {
            return null;
        }
        return config.getProperty(key, type);
    }
    
    /**
     * 获取插件配置属性（带默认值）
     */
    public <T> T getConfigurationProperty(String pluginId, String key, T defaultValue, Class<T> type) {
        T value = getConfigurationProperty(pluginId, key, type);
        return value != null ? value : defaultValue;
    }
    
    /**
     * 更新插件配置
     */
    public void updateConfiguration(String pluginId, PluginConfiguration configuration) {
        updateConfiguration(pluginId, configuration, "Manual update");
    }
    
    /**
     * 更新插件配置（带版本说明）
     */
    public void updateConfiguration(String pluginId, PluginConfiguration configuration, String versionDescription) {
        lock.writeLock().lock();
        try {
            // 保存当前版本
            PluginConfiguration oldConfig = configurations.get(pluginId);
            if (oldConfig != null) {
                saveConfigurationVersion(pluginId, oldConfig, versionDescription);
            }
            
            // 更新配置
            configurations.put(pluginId, configuration);
            
            // 持久化配置
            if (properties.isPersistenceEnabled()) {
                persistConfiguration(pluginId, configuration);
            }
            
            // 发布配置变更事件
            PluginConfigurationChangeEvent event = new PluginConfigurationChangeEvent(
                pluginId, oldConfig, configuration, "Configuration updated"
            );
            
            eventPublisher.publishEvent(event);
            notifyListeners(event);
            
            log.info("Configuration updated for plugin: {}", pluginId);
            
        } catch (Exception e) {
            log.error("Failed to update configuration for plugin: " + pluginId, e);
            throw new RuntimeException("Configuration update failed", e);
        } finally {
            lock.writeLock().unlock();
        }
    }
    
    /**
     * 删除插件配置
     */
    public void removeConfiguration(String pluginId) {
        lock.writeLock().lock();
        try {
            PluginConfiguration oldConfig = configurations.remove(pluginId);
            if (oldConfig != null) {
                // 保存删除前的版本
                saveConfigurationVersion(pluginId, oldConfig, "Configuration removed");
                
                // 删除持久化配置
                if (properties.isPersistenceEnabled()) {
                    deletePersistedConfiguration(pluginId);
                }
                
                // 停止文件监控
                stopWatchingConfiguration(pluginId);
                
                // 发布配置变更事件
                PluginConfigurationChangeEvent event = new PluginConfigurationChangeEvent(
                    pluginId, oldConfig, null, "Configuration removed"
                );
                
                eventPublisher.publishEvent(event);
                notifyListeners(event);
                
                log.info("Configuration removed for plugin: {}", pluginId);
            }
        } catch (Exception e) {
            log.error("Failed to remove configuration for plugin: " + pluginId, e);
            throw new RuntimeException("Configuration removal failed", e);
        } finally {
            lock.writeLock().unlock();
        }
    }
    
    /**
     * 获取配置版本历史
     */
    public List<PluginConfigurationVersion> getConfigurationVersions(String pluginId) {
        return configVersions.getOrDefault(pluginId, Collections.emptyList());
    }
    
    /**
     * 回滚到指定版本
     */
    public void rollbackToVersion(String pluginId, String versionId) {
        lock.writeLock().lock();
        try {
            List<PluginConfigurationVersion> versions = configVersions.get(pluginId);
            if (versions == null) {
                throw new IllegalArgumentException("No version history found for plugin: " + pluginId);
            }
            
            PluginConfigurationVersion targetVersion = versions.stream()
                .filter(v -> v.getVersionId().equals(versionId))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Version not found: " + versionId));
            
            // 回滚配置
            updateConfiguration(pluginId, targetVersion.getConfiguration(), 
                "Rollback to version: " + versionId);
            
            log.info("Configuration rolled back to version {} for plugin: {}", versionId, pluginId);
            
        } finally {
            lock.writeLock().unlock();
        }
    }
    
    /**
     * 添加配置监听器
     */
    public void addConfigurationListener(PluginConfigurationListener listener) {
        listeners.add(listener);
        log.debug("Configuration listener added: {}", listener.getClass().getSimpleName());
    }
    
    /**
     * 移除配置监听器
     */
    public void removeConfigurationListener(PluginConfigurationListener listener) {
        listeners.remove(listener);
        log.debug("Configuration listener removed: {}", listener.getClass().getSimpleName());
    }
    
    /**
     * 重新加载所有配置
     */
    public void reloadAllConfigurations() {
        lock.writeLock().lock();
        try {
            log.info("Reloading all plugin configurations...");
            
            Set<String> pluginIds = new HashSet<>(configurations.keySet());
            for (String pluginId : pluginIds) {
                try {
                    reloadConfiguration(pluginId);
                } catch (Exception e) {
                    log.error("Failed to reload configuration for plugin: " + pluginId, e);
                }
            }
            
            log.info("All plugin configurations reloaded");
            
        } finally {
            lock.writeLock().unlock();
        }
    }
    
    /**
     * 重新加载指定插件配置
     */
    public void reloadConfiguration(String pluginId) {
        try {
            PluginConfiguration newConfig = loadConfigurationFromFile(pluginId);
            if (newConfig != null) {
                updateConfiguration(pluginId, newConfig, "Configuration reloaded");
            }
        } catch (Exception e) {
            log.error("Failed to reload configuration for plugin: " + pluginId, e);
            throw new RuntimeException("Configuration reload failed", e);
        }
    }
    
    /**
     * 获取所有配置
     */
    public Map<String, PluginConfiguration> getAllConfigurations() {
        lock.readLock().lock();
        try {
            return new HashMap<>(configurations);
        } finally {
            lock.readLock().unlock();
        }
    }
    
    /**
     * 检查是否存在指定插件的配置
     */
    public boolean hasConfiguration(String pluginId) {
        return configurations.containsKey(pluginId);
    }
    
    /**
     * 获取配置统计信息
     */
    public PluginConfigurationStatistics getStatistics() {
        lock.readLock().lock();
        try {
            int totalConfigurations = configurations.size();
            int totalVersions = configVersions.values().stream()
                .mapToInt(List::size)
                .sum();
            int activeWatchers = watchKeys.size();
            
            return new PluginConfigurationStatistics(
                totalConfigurations, totalVersions, activeWatchers, listeners.size()
            );
        } finally {
            lock.readLock().unlock();
        }
    }
    
    // 私有方法
    
    private void loadInitialConfigurations() {
        try {
            Path configDir = Paths.get(properties.getConfigDirectory());
            if (!Files.exists(configDir)) {
                Files.createDirectories(configDir);
                log.info("Created configuration directory: {}", configDir);
                return;
            }
            
            try (DirectoryStream<Path> stream = Files.newDirectoryStream(configDir, "*.{yml,yaml,properties}")) {
                for (Path configFile : stream) {
                    try {
                        String fileName = configFile.getFileName().toString();
                        String pluginId = fileName.substring(0, fileName.lastIndexOf('.'));
                        
                        PluginConfiguration config = loadConfigurationFromFile(configFile);
                        if (config != null) {
                            configurations.put(pluginId, config);
                            
                            // 开始监控配置文件
                            if (properties.isHotReloadEnabled()) {
                                startWatchingConfiguration(pluginId, configFile);
                            }
                            
                            log.debug("Loaded configuration for plugin: {}", pluginId);
                        }
                    } catch (Exception e) {
                        log.error("Failed to load configuration file: " + configFile, e);
                    }
                }
            }
            
            log.info("Loaded {} plugin configurations", configurations.size());
            
        } catch (Exception e) {
            log.error("Failed to load initial configurations", e);
            throw new RuntimeException("Initial configuration loading failed", e);
        }
    }
    
    private PluginConfiguration loadConfigurationFromFile(String pluginId) {
        Path configFile = Paths.get(properties.getConfigDirectory(), pluginId + ".yml");
        if (!Files.exists(configFile)) {
            configFile = Paths.get(properties.getConfigDirectory(), pluginId + ".yaml");
        }
        if (!Files.exists(configFile)) {
            configFile = Paths.get(properties.getConfigDirectory(), pluginId + ".properties");
        }
        
        return Files.exists(configFile) ? loadConfigurationFromFile(configFile) : null;
    }
    
    private PluginConfiguration loadConfigurationFromFile(Path configFile) {
        // 这里应该根据文件类型使用相应的解析器
        // 简化实现，实际应该支持YAML、Properties等格式
        return new PluginConfiguration();
    }
    
    private void saveConfigurationVersion(String pluginId, PluginConfiguration configuration, String description) {
        try {
            String versionId = UUID.randomUUID().toString();
            PluginConfigurationVersion version = new PluginConfigurationVersion(
                versionId, configuration, System.currentTimeMillis(), description
            );
            
            configVersions.computeIfAbsent(pluginId, k -> new ArrayList<>()).add(version);
            
            // 限制版本历史数量
            List<PluginConfigurationVersion> versions = configVersions.get(pluginId);
            if (versions.size() > properties.getMaxVersionHistory()) {
                versions.remove(0);
            }
            
        } catch (Exception e) {
            log.error("Failed to save configuration version for plugin: " + pluginId, e);
        }
    }
    
    private void persistConfiguration(String pluginId, PluginConfiguration configuration) {
        // 实现配置持久化逻辑
        log.debug("Persisting configuration for plugin: {}", pluginId);
    }
    
    private void deletePersistedConfiguration(String pluginId) {
        try {
            Path configFile = Paths.get(properties.getConfigDirectory(), pluginId + ".yml");
            if (Files.exists(configFile)) {
                Files.delete(configFile);
                log.debug("Deleted persisted configuration for plugin: {}", pluginId);
            }
        } catch (Exception e) {
            log.error("Failed to delete persisted configuration for plugin: " + pluginId, e);
        }
    }
    
    private void startFileWatcher() {
        if (watchService == null) {
            return;
        }
        
        Thread watcherThread = new Thread(() -> {
            try {
                while (!Thread.currentThread().isInterrupted()) {
                    WatchKey key = watchService.take();
                    
                    for (WatchEvent<?> event : key.pollEvents()) {
                        WatchEvent.Kind<?> kind = event.kind();
                        
                        if (kind == StandardWatchEventKinds.OVERFLOW) {
                            continue;
                        }
                        
                        @SuppressWarnings("unchecked")
                        WatchEvent<Path> ev = (WatchEvent<Path>) event;
                        Path filename = ev.context();
                        
                        if (kind == StandardWatchEventKinds.ENTRY_MODIFY) {
                            handleConfigFileChange(filename);
                        }
                    }
                    
                    boolean valid = key.reset();
                    if (!valid) {
                        break;
                    }
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                log.info("Configuration file watcher interrupted");
            } catch (Exception e) {
                log.error("Error in configuration file watcher", e);
            }
        });
        
        watcherThread.setName("PluginConfigWatcher");
        watcherThread.setDaemon(true);
        watcherThread.start();
        
        log.info("Configuration file watcher started");
    }
    
    private void startWatchingConfiguration(String pluginId, Path configFile) {
        try {
            Path dir = configFile.getParent();
            WatchKey key = dir.register(watchService, StandardWatchEventKinds.ENTRY_MODIFY);
            watchKeys.put(pluginId, key);
            
            log.debug("Started watching configuration file for plugin: {}", pluginId);
        } catch (Exception e) {
            log.error("Failed to start watching configuration for plugin: " + pluginId, e);
        }
    }
    
    private void stopWatchingConfiguration(String pluginId) {
        WatchKey key = watchKeys.remove(pluginId);
        if (key != null) {
            key.cancel();
            log.debug("Stopped watching configuration file for plugin: {}", pluginId);
        }
    }
    
    private void handleConfigFileChange(Path filename) {
        try {
            String fileName = filename.toString();
            String pluginId = fileName.substring(0, fileName.lastIndexOf('.'));
            
            if (configurations.containsKey(pluginId)) {
                // 延迟一点时间，确保文件写入完成
                Thread.sleep(100);
                reloadConfiguration(pluginId);
                log.info("Configuration file changed and reloaded for plugin: {}", pluginId);
            }
        } catch (Exception e) {
            log.error("Failed to handle configuration file change: " + filename, e);
        }
    }
    
    private void notifyListeners(PluginConfigurationChangeEvent event) {
        for (PluginConfigurationListener listener : listeners) {
            try {
                listener.onConfigurationChanged(event);
            } catch (Exception e) {
                log.error("Error notifying configuration listener: " + listener.getClass().getSimpleName(), e);
            }
        }
    }
    
    /**
     * 关闭配置管理器
     */
    public void shutdown() {
        try {
            if (watchService != null) {
                watchService.close();
            }
            
            // 取消所有监控
            watchKeys.values().forEach(WatchKey::cancel);
            watchKeys.clear();
            
            // 清理监听器
            listeners.clear();
            
            log.info("Plugin configuration manager shutdown completed");
            
        } catch (Exception e) {
            log.error("Error during configuration manager shutdown", e);
        }
    }
}