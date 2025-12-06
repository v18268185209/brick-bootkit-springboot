<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">插件生命周期管理</h1>
      <p class="text-lg text-gray-600 mb-8">
        详细介绍插件从创建、安装、启动、运行到停止、卸载的完整生命周期过程，以及如何在各个阶段进行管理和控制。
      </p>
    </div>

    <!-- Lifecycle Overview -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">生命周期概述</h2>
      <div class="card space-y-4">
        <p class="text-gray-700">
          Brick BootKit提供了完整的插件生命周期管理机制，确保插件能够正确初始化、运行和释放资源。
          生命周期管理涵盖了从插件发现到最终销毁的全过程。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-semibold text-blue-900 mb-2">状态跟踪</h3>
            <p class="text-blue-700 text-sm">实时跟踪插件运行状态</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-900 mb-2">优雅关闭</h3>
            <p class="text-green-700 text-sm">确保资源正确释放</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="font-semibold text-purple-900 mb-2">事件驱动</h3>
            <p class="text-purple-700 text-sm">基于事件的生命周期通知</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lifecycle States -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">生命周期状态</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">状态转换图</h3>
        <p class="text-gray-700">
          插件在其生命周期中会经历多种状态，每个状态都代表插件的当前运行情况：
        </p>
        <pre><code class="text-sm">┌─────────────┐    安装     ┌─────────────┐    初始化     ┌─────────────┐
│   DISCOVERED │ ───────────→ │ INSTALLED   │ ───────────→ │ INITIALIZED │
└─────────────┘              └─────────────┘              └─────────────┘
      ▲                             │                             │
      │                             ▼                             ▼
      │                      ┌─────────────┐              ┌─────────────┐
      │                      │   FAILED    │              │   STARTING  │
      │                      └─────────────┘              └─────────────┘
      │                             ▲                             │
      │                             │                             ▼
      │                      ┌─────────────┐              ┌─────────────┐
      │                      │   STOPPING  │              │   RUNNING   │
      │                      └─────────────┘              └─────────────┘
      │                             │                             ▲
      │                             │                             │
      │                             ▼                             │
      │                      ┌─────────────┐              ┌─────────────┐
      │                      │  UNINSTALL  │              │   PAUSED    │
      │                      │   FAILED    │              └─────────────┘
      │                      └─────────────┘                      ▲
      │                             │                               │
      │                             │                               │
      └─────────────────────────────┴───────────────────────────────┘
                                   │
                                   ▼
                          ┌─────────────┐
                          │ UNINSTALLED │
                          └─────────────┘</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">状态详细说明</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">核心状态</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li><strong>DISCOVERED</strong> - 发现阶段，插件已扫描但未安装</li>
              <li><strong>INSTALLED</strong> - 已安装，插件文件已解压并验证</li>
              <li><strong>INITIALIZED</strong> - 已初始化，插件类已加载</li>
              <li><strong>STARTING</strong> - 启动中，插件正在启动过程</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">运行状态</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li><strong>RUNNING</strong> - 正常运行，插件已完全启动</li>
              <li><strong>PAUSED</strong> - 已暂停，插件暂时停止服务</li>
              <li><strong>STOPPING</strong> - 停止中，插件正在优雅关闭</li>
              <li><strong>FAILED</strong> - 失败状态，插件启动或运行失败</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">清理状态</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li><strong>UNINSTALLING</strong> - 卸载中，插件正在清理</li>
              <li><strong>UNINSTALL_FAILED</strong> - 卸载失败，清理过程出错</li>
              <li><strong>UNINSTALLED</strong> - 已卸载，插件已被完全移除</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">状态特征</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 状态转换是单向的</li>
              <li>• 每个状态都有特定的生命周期事件</li>
              <li>• 支持状态恢复和回滚</li>
              <li>• 提供状态监控和告警</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Lifecycle Events -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">生命周期事件</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">事件类型</h3>
        <p class="text-gray-700">
          插件生命周期管理系统发出各种事件，应用程序可以监听这些事件来执行特定操作：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">安装事件</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li><code>PluginDiscoveredEvent</code> - 插件发现事件</li>
              <li><code>PluginInstalledEvent</code> - 插件安装事件</li>
              <li><code>PluginInstallationFailedEvent</code> - 安装失败事件</li>
              <li><code>PluginUninstalledEvent</code> - 插件卸载事件</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">启动事件</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li><code>PluginInitializedEvent</code> - 插件初始化事件</li>
              <li><code>PluginStartingEvent</code> - 插件启动事件</li>
              <li><code>PluginStartedEvent</code> - 插件启动完成事件</li>
              <li><code>PluginStartFailedEvent</code> - 启动失败事件</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">停止事件</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li><code>PluginPausedEvent</code> - 插件暂停事件</li>
              <li><code>PluginStoppingEvent</code> - 插件停止事件</li>
              <li><code>PluginStoppedEvent</code> - 插件停止完成事件</li>
              <li><code>PluginStopFailedEvent</code> - 停止失败事件</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">状态事件</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li><code>PluginStateChangedEvent</code> - 状态变更事件</li>
              <li><code>PluginHealthChangedEvent</code> - 健康状态变更事件</li>
              <li><code>PluginDependencyChangedEvent</code> - 依赖变更事件</li>
              <li><code>PluginVersionChangedEvent</code> - 版本变更事件</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">事件监听示例</h3>
        <p class="text-gray-700">
          监听插件生命周期事件的Java代码示例：
        </p>
        <pre><code class="java">@Component
public class PluginLifecycleListener {
    
    @EventListener
    public void handlePluginStarted(PluginStartedEvent event) {
        PluginInfo plugin = event.getPlugin();
        log.info("插件 [{}] 启动完成，版本: {}", plugin.getName(), plugin.getVersion());
        
        // 执行启动后逻辑
        registerPluginMetrics(plugin);
        updatePluginRegistry(plugin);
    }
    
    @EventListener
    public void handlePluginStopped(PluginStoppedEvent event) {
        PluginInfo plugin = event.getPlugin();
        log.info("插件 [{}] 已停止", plugin.getName());
        
        // 清理资源
        unregisterPluginMetrics(plugin);
        cleanupPluginResources(plugin);
    }
    
    @EventListener
    public void handlePluginFailed(PluginStartFailedEvent event) {
        PluginInfo plugin = event.getPlugin();
        Exception error = event.getError();
        
        log.error("插件 [{}] 启动失败: {}", plugin.getName(), error.getMessage(), error);
        
        // 执行失败处理逻辑
        sendAlert(plugin, error);
        scheduleRetry(plugin);
    }
    
    @EventListener
    public void handleStateChanged(PluginStateChangedEvent event) {
        PluginInfo plugin = event.getPlugin();
        PluginState oldState = event.getOldState();
        PluginState newState = event.getNewState();
        
        log.info("插件 [{}] 状态变更: {} -> {}", plugin.getName(), oldState, newState);
        
        // 记录状态变更日志
        auditLogService.recordStateChange(plugin.getName(), oldState, newState);
    }
}</code></pre>
      </div>
    </section>

    <!-- Lifecycle Management -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">生命周期管理</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">状态机配置</h3>
        <p class="text-gray-700">
          可以通过配置文件定义插件的生命周期状态转换规则：
        </p>
        <pre><code class="yaml"># application.yml
brick-bootkit:
  plugin-lifecycle:
    # 状态转换规则
    state-machine:
      states:
        - DISCOVERED
        - INSTALLED  
        - INITIALIZED
        - STARTING
        - RUNNING
        - PAUSED
        - STOPPING
        - FAILED
        - UNINSTALLING
        - UNINSTALLED
        
      transitions:
        - from: DISCOVERED
          to: INSTALLED
          trigger: install
          action: installPlugin
          
        - from: INSTALLED
          to: INITIALIZED  
          trigger: initialize
          action: initializePlugin
          
        - from: INITIALIZED
          to: STARTING
          trigger: start
          action: startPlugin
          
        - from: STARTING
          to: RUNNING
          trigger: startSuccess
          action: onStartSuccess
          
        - from: STARTING
          to: FAILED
          trigger: startFailed
          action: onStartFailed
          
        - from: RUNNING
          to: PAUSED
          trigger: pause
          action: pausePlugin
          
        - from: PAUSED
          to: RUNNING
          trigger: resume
          action: resumePlugin
          
        - from: RUNNING
          to: STOPPING
          trigger: stop
          action: stopPlugin
          
        - from: STOPPING
          to: INSTALLED
          trigger: stopSuccess
          action: onStopSuccess
          
        - from: INSTALLED
          to: UNINSTALLING
          trigger: uninstall
          action: uninstallPlugin
          
        - from: UNINSTALLING
          to: UNINSTALLED
          trigger: uninstallSuccess
          action: onUninstallSuccess
          
    # 超时配置
    timeouts:
      install: 300s
      initialize: 60s
      start: 120s
      stop: 60s
      pause: 30s
      uninstall: 120s
      
    # 重试配置
    retry:
      max-attempts: 3
      backoff-strategy: exponential
      initial-delay: 5s
      max-delay: 60s</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">生命周期管理器</h3>
        <p class="text-gray-700">
          核心的生命周期管理器实现：
        </p>
        <pre><code class="java">@Service
public class PluginLifecycleManager {
    
    @Autowired
    private PluginRepository pluginRepository;
    
    @Autowired
    private PluginStateMachine stateMachine;
    
    @Autowired
    private EventPublisher eventPublisher;
    
    @Autowired
    private PluginResourceManager resourceManager;
    
    public void installPlugin(String pluginId, InputStream pluginPackage) {
        try {
            // 验证插件包
            PluginValidationResult validation = validatePlugin(pluginPackage);
            if (!validation.isValid()) {
                throw new PluginValidationException(validation.getErrors());
            }
            
            // 提取插件文件
            PluginInfo plugin = extractPlugin(pluginId, pluginPackage);
            
            // 触发状态转换
            stateMachine.fireEvent(plugin.getId(), "install");
            
            // 发布安装完成事件
            eventPublisher.publishEvent(new PluginInstalledEvent(plugin));
            
            log.info("插件 [{}] 安装成功", plugin.getName());
            
        } catch (Exception e) {
            eventPublisher.publishEvent(new PluginInstallationFailedEvent(pluginId, e));
            throw new PluginInstallationException("插件安装失败", e);
        }
    }
    
    public void startPlugin(String pluginId) {
        PluginInfo plugin = pluginRepository.findById(pluginId);
        
        try {
            // 检查前置条件
            validateStartConditions(plugin);
            
            // 触发启动过程
            stateMachine.fireEvent(pluginId, "start");
            
            // 分配资源
            resourceManager.allocateResources(plugin);
            
            // 初始化插件
            PluginContext context = createPluginContext(plugin);
            plugin.initialize(context);
            
            // 启动插件服务
            plugin.start();
            
            // 验证启动状态
            if (plugin.isHealthy()) {
                stateMachine.fireEvent(pluginId, "startSuccess");
                eventPublisher.publishEvent(new PluginStartedEvent(plugin));
                log.info("插件 [{}] 启动成功", plugin.getName());
            } else {
                throw new PluginException("插件健康检查失败");
            }
            
        } catch (Exception e) {
            stateMachine.fireEvent(pluginId, "startFailed");
            resourceManager.releaseResources(plugin);
            eventPublisher.publishEvent(new PluginStartFailedEvent(plugin, e));
            log.error("插件 [{}] 启动失败", plugin.getName(), e);
            throw e;
        }
    }
    
    public void stopPlugin(String pluginId, boolean graceful) {
        PluginInfo plugin = pluginRepository.findById(pluginId);
        
        try {
            stateMachine.fireEvent(pluginId, "stop");
            
            if (graceful) {
                // 优雅关闭
                plugin.stop(new StopTimeout(60, TimeUnit.SECONDS));
            } else {
                // 强制关闭
                plugin.forceStop();
            }
            
            // 释放资源
            resourceManager.releaseResources(plugin);
            
            stateMachine.fireEvent(pluginId, "stopSuccess");
            eventPublisher.publishEvent(new PluginStoppedEvent(plugin));
            
            log.info("插件 [{}] 停止成功", plugin.getName());
            
        } catch (Exception e) {
            eventPublisher.publishEvent(new PluginStopFailedEvent(plugin, e));
            log.error("插件 [{}] 停止失败", plugin.getName(), e);
            throw e;
        }
    }
    
    public void uninstallPlugin(String pluginId) {
        PluginInfo plugin = pluginRepository.findById(pluginId);
        
        try {
            // 确保插件已停止
            if (plugin.getState() == PluginState.RUNNING) {
                throw new PluginException("插件正在运行，无法卸载");
            }
            
            stateMachine.fireEvent(pluginId, "uninstall");
            
            // 清理插件数据
            cleanupPluginData(plugin);
            
            // 删除插件文件
            deletePluginFiles(plugin);
            
            // 从仓库移除
            pluginRepository.remove(pluginId);
            
            stateMachine.fireEvent(pluginId, "uninstallSuccess");
            eventPublisher.publishEvent(new PluginUninstalledEvent(plugin));
            
            log.info("插件 [{}] 卸载成功", plugin.getName());
            
        } catch (Exception e) {
            eventPublisher.publishEvent(new PluginUninstallFailedEvent(plugin, e));
            log.error("插件 [{}] 卸载失败", plugin.getName(), e);
            throw e;
        }
    }
    
    public PluginState getPluginState(String pluginId) {
        return pluginRepository.findById(pluginId).getState();
    }
    
    public void pausePlugin(String pluginId) {
        PluginInfo plugin = pluginRepository.findById(pluginId);
        
        if (plugin.getState() != PluginState.RUNNING) {
            throw new PluginException("插件未在运行状态，无法暂停");
        }
        
        plugin.pause();
        stateMachine.fireEvent(pluginId, "pause");
        eventPublisher.publishEvent(new PluginPausedEvent(plugin));
        
        log.info("插件 [{}] 已暂停", plugin.getName());
    }
    
    public void resumePlugin(String pluginId) {
        PluginInfo plugin = pluginRepository.findById(pluginId);
        
        if (plugin.getState() != PluginState.PAUSED) {
            throw new PluginException("插件未在暂停状态，无法恢复");
        }
        
        plugin.resume();
        stateMachine.fireEvent(pluginId, "resume");
        eventPublisher.publishEvent(new PluginResumedEvent(plugin));
        
        log.info("插件 [{}] 已恢复", plugin.getName());
    }
}</code></pre>
      </div>
    </section>

    <!-- Dependency Management -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">依赖管理</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">依赖关系</h3>
        <p class="text-gray-700">
          插件生命周期管理需要考虑复杂的依赖关系，确保启动和停止的顺序正确：
        </p>
        <pre><code class="java">@Service
public class PluginDependencyManager {
    
    public void handleDependencyStart(PluginInfo plugin) {
        // 启动依赖插件
        List&lt;PluginInfo&gt; dependencies = plugin.getDependencies();
        for (PluginInfo dependency : dependencies) {
            if (dependency.getState() == PluginState.RUNNING) {
                continue; // 依赖已启动
            }
            
            if (dependency.getState() == PluginState.PAUSED) {
                // 恢复暂停的依赖
                lifecycleManager.resumePlugin(dependency.getId());
            } else {
                // 启动未启动的依赖
                lifecycleManager.startPlugin(dependency.getId());
            }
        }
    }
    
    public void handleDependencyStop(PluginInfo plugin, boolean force) {
        // 检查是否有其他插件依赖此插件
        List&lt;PluginInfo&gt; dependentPlugins = plugin.getDependents();
        
        for (PluginInfo dependent : dependentPlugins) {
            if (dependent.getState() == PluginState.RUNNING) {
                if (force) {
                    // 强制停止依赖插件
                    lifecycleManager.stopPlugin(dependent.getId(), false);
                } else {
                    // 不能停止有依赖的插件
                    throw new PluginDependencyException(
                        "无法停止插件 [" + plugin.getName() + 
                        "]，被插件 [" + dependent.getName() + "] 依赖");
                }
            }
        }
        
        // 可以安全停止此插件
        lifecycleManager.stopPlugin(plugin.getId(), force);
    }
    
    public void updateDependencyGraph(String pluginId) {
        // 更新依赖关系图
        PluginInfo plugin = pluginRepository.findById(pluginId);
        
        // 重新计算依赖关系
        calculateDependencies(plugin);
        
        // 验证依赖循环
        validateDependencyCycle();
        
        // 触发相关插件状态检查
        notifyDependencyChange(plugin);
    }
}</code></pre>
      </div>
    </section>

    <!-- Health Monitoring -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">健康监控</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">健康检查</h3>
        <p class="text-gray-700">
          对运行中的插件进行定期健康检查，及时发现问题：
        </p>
        <pre><code class="java">@Component
public class PluginHealthMonitor {
    
    @Scheduled(fixedRate = 30000) // 每30秒检查一次
    public void performHealthCheck() {
        List&lt;PluginInfo&gt; runningPlugins = pluginRepository.findByState(PluginState.RUNNING);
        
        for (PluginInfo plugin : runningPlugins) {
            try {
                PluginHealth health = plugin.checkHealth();
                
                if (health.isHealthy()) {
                    handleHealthyPlugin(plugin, health);
                } else {
                    handleUnhealthyPlugin(plugin, health);
                }
                
            } catch (Exception e) {
                handleHealthCheckError(plugin, e);
            }
        }
    }
    
    private void handleUnhealthyPlugin(PluginInfo plugin, PluginHealth health) {
        log.warn("插件 [{}] 健康检查失败: {}", plugin.getName(), health.getMessage());
        
        // 发布健康状态变更事件
        eventPublisher.publishEvent(new PluginHealthChangedEvent(plugin, health));
        
        // 根据失败次数决定处理策略
        int failureCount = plugin.incrementHealthFailureCount();
        
        if (failureCount >= 3) {
            // 连续3次失败，触发恢复机制
            handleCriticalFailure(plugin, health);
        } else if (failureCount >= 1) {
            // 发送告警
            sendHealthAlert(plugin, health);
        }
    }
    
    private void handleCriticalFailure(PluginInfo plugin, PluginHealth health) {
        log.error("插件 [{}] 健康状况严重恶化，执行恢复操作", plugin.getName());
        
        try {
            // 尝试重启插件
            lifecycleManager.stopPlugin(plugin.getId(), false);
            Thread.sleep(5000); // 等待5秒
            lifecycleManager.startPlugin(plugin.getId());
            
        } catch (Exception e) {
            log.error("插件 [{}] 恢复失败", plugin.getName(), e);
            
            // 发布严重故障事件
            eventPublisher.publishEvent(new PluginCriticalFailureEvent(plugin, e));
        }
    }
}</code></pre>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">最佳实践</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">状态管理</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 确保状态转换的正确性</li>
            <li>• 避免状态死锁情况</li>
            <li>• 及时更新插件状态</li>
            <li>• 记录状态变更历史</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">资源管理</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 正确分配和释放资源</li>
            <li>• 避免资源泄漏</li>
            <li>• 监控资源使用情况</li>
            <li>• 设置资源使用限制</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">事件处理</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 异步处理事件</li>
            <li>• 避免事件处理阻塞</li>
            <li>• 处理事件处理异常</li>
            <li>• 合理设置事件监听器</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">错误处理</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 提供详细的错误信息</li>
            <li>• 实现优雅的失败处理</li>
            <li>• 记录详细的错误日志</li>
            <li>• 实施自动恢复机制</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Troubleshooting -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">故障排除</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">常见问题</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-semibold text-gray-900">状态不一致</h4>
            <p class="text-gray-700 text-sm">问题：插件状态与实际运行情况不符</p>
            <p class="text-gray-600 text-sm">解决：重新初始化状态机，同步实际状态</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">启动超时</h4>
            <p class="text-gray-700 text-sm">问题：插件启动超过配置的超时时间</p>
            <p class="text-gray-600 text-sm">解决：检查插件初始化逻辑，优化启动流程</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">依赖循环</h4>
            <p class="text-gray-700 text-sm">问题：插件之间存在循环依赖</p>
            <p class="text-gray-600 text-sm">解决：重构插件架构，消除循环依赖</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">资源泄漏</h4>
            <p class="text-gray-700 text-sm">问题：插件停止后资源未正确释放</p>
            <p class="text-gray-600 text-sm">解决：完善插件的停止和清理逻辑</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>