<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">动态部署</h1>
      <p class="text-lg text-gray-600 mb-8">
        详细介绍如何在运行时动态部署、更新和卸载插件，包括部署策略、监控机制和故障恢复方案。
      </p>
    </div>

    <!-- Overview -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">动态部署概述</h2>
      <div class="card space-y-4">
        <p class="text-gray-700">
          Brick BootKit支持在Spring Boot应用运行时动态部署插件，无需重启应用即可加载、更新或卸载插件功能。
          这种能力使得系统具备更强的可扩展性和维护性。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-semibold text-blue-900 mb-2">零停机部署</h3>
            <p class="text-blue-700 text-sm">支持热插拔，不影响在线用户</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-900 mb-2">版本回滚</h3>
            <p class="text-green-700 text-sm">快速回滚到上一版本</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="font-semibold text-purple-900 mb-2">负载隔离</h3>
            <p class="text-purple-700 text-sm">插件故障不影响核心功能</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Deployment Architecture -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">部署架构</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">系统架构</h3>
        <p class="text-gray-700">
          动态部署基于Brick BootKit的核心架构，包含插件管理器、类加载器和生命周期管理器：
        </p>
        <pre><code class="text-sm">┌─────────────────────────────────────────────────────────┐
│                   Spring Boot 应用                        │
├─────────────────────────────────────────────────────────┤
│                   Brick BootKit 核心                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 插件管理器   │  │ 类加载器     │  │ 生命周期管理 │     │
│  │ PluginMgr   │  │ ClassLoader │  │ Lifecycle   │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   动态部署层                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 部署调度器   │  │ 监控管理器   │  │ 状态管理器   │     │
│  │ Deployer    │  │ Monitor     │  │ StateMgr    │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   插件实例                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 插件A v1.2  │  │ 插件B v2.1  │  │ 插件C v1.0  │     │
│  │ [运行中]    │  │ [更新中]    │  │ [已暂停]    │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">核心组件</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">插件管理器</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 插件发现和注册</li>
              <li>• 版本管理和依赖解析</li>
              <li>• 插件生命周期控制</li>
              <li>• 配置管理和更新</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">类加载器</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 插件类隔离</li>
              <li>• 依赖类共享</li>
              <li>• 热加载机制</li>
              <li>• 内存管理</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">部署调度器</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 部署计划管理</li>
              <li>• 资源调度和分配</li>
              <li>• 并发控制</li>
              <li>• 回滚机制</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">监控管理器</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 健康检查</li>
              <li>• 性能监控</li>
              <li>• 错误跟踪</li>
              <li>• 告警通知</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Deployment Strategies -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">部署策略</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">蓝绿部署</h3>
        <p class="text-gray-700">
          通过维护两套完全相同的插件环境，实现零风险版本升级：
        </p>
        <pre><code class="yaml"># 蓝绿部署配置
deployment:
  strategy: blue_green
  environments:
    blue:
      plugins:
        - name: user-service
          version: "1.0.0"
          status: active
    green:
      plugins:
        - name: user-service
          version: "1.1.0" 
          status: standby
  health_check:
    - url: "/api/health/user-service"
      timeout: 30s
      threshold: 95%</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">滚动部署</h3>
        <p class="text-gray-700">
          逐步替换现有插件实例，确保服务的连续性：
        </p>
        <pre><code class="yaml"># 滚动部署配置
deployment:
  strategy: rolling
  batch_size: 25%      # 每批更新25%的实例
  max_unavailable: 1   # 最大不可用实例数
  min_ready_time: 10s  # 实例最小就绪时间
  progress_deadline: 5m # 进度截止时间</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">金丝雀部署</h3>
        <p class="text-gray-700">
          先对少量用户发布新版本，根据反馈逐步扩大范围：
        </p>
        <pre><code class="yaml"># 金丝雀部署配置
deployment:
  strategy: canary
  traffic_splitting:
    stable: 90%         # 稳定版本流量90%
    canary: 10%         # 金丝雀版本流量10%
  success_criteria:
    error_rate: <1%     # 错误率小于1%
    response_time: <200ms # 响应时间小于200ms
  auto_promote:
    enabled: true
    duration: 30m      # 30分钟后自动提升</code></pre>
      </div>
    </section>

    <!-- Deployment Process -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">部署流程</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">标准部署流程</h3>
        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">1</div>
            <div>
              <h4 class="font-semibold text-gray-900">准备阶段</h4>
              <p class="text-gray-700 text-sm">验证插件包、依赖关系和系统资源</p>
              <ul class="text-gray-600 text-xs mt-1 space-y-1">
                <li>• 插件包完整性检查</li>
                <li>• 依赖版本兼容性验证</li>
                <li>• 系统资源评估</li>
              </ul>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">2</div>
            <div>
              <h4 class="font-semibold text-gray-900">预检查</h4>
              <p class="text-gray-700 text-sm">系统健康检查和兼容性测试</p>
              <ul class="text-gray-600 text-xs mt-1 space-y-1">
                <li>• 当前插件状态检查</li>
                <li>• 网络和服务连通性</li>
                <li>• 数据库连接测试</li>
              </ul>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">3</div>
            <div>
              <h4 class="font-semibold text-gray-900">停止旧版本</h4>
              <p class="text-gray-700 text-sm">优雅停止当前运行的插件实例</p>
              <ul class="text-gray-600 text-xs mt-1 space-y-1">
                <li>• 请求完成等待</li>
                <li>• 资源清理</li>
                <li>• 状态保存</li>
              </ul>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">4</div>
            <div>
              <h4 class="font-semibold text-gray-900">加载新版本</h4>
              <p class="text-gray-700 text-sm">加载插件文件并初始化类加载器</p>
              <ul class="text-gray-600 text-xs mt-1 space-y-1">
                <li>• JAR文件解压和验证</li>
                <li>• 类加载器创建</li>
                <li>• 依赖解析和加载</li>
              </ul>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">5</div>
            <div>
              <h4 class="font-semibold text-gray-900">启动插件</h4>
              <p class="text-gray-700 text-sm">初始化插件组件和服务</p>
              <ul class="text-gray-600 text-xs mt-1 space-y-1">
                <li>• 配置文件加载</li>
                <li>• 组件初始化</li>
                <li>• 服务注册</li>
              </ul>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">6</div>
            <div>
              <h4 class="font-semibold text-gray-900">健康验证</h4>
              <p class="text-gray-700 text-sm">功能测试和健康检查</p>
              <ul class="text-gray-600 text-xs mt-1 space-y-1">
                <li>• 健康检查接口</li>
                <li>• 功能自测</li>
                <li>• 性能基准测试</li>
              </ul>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">7</div>
            <div>
              <h4 class="font-semibold text-gray-900">流量切换</h4>
              <p class="text-gray-700 text-sm">将流量切换到新版本</p>
              <ul class="text-gray-600 text-xs mt-1 space-y-1">
                <li>• 路由规则更新</li>
                <li>• 负载均衡调整</li>
                <li>• 服务发现更新</li>
              </ul>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">8</div>
            <div>
              <h4 class="font-semibold text-gray-900">完成</h4>
              <p class="text-gray-700 text-sm">部署完成，清理旧资源</p>
              <ul class="text-gray-600 text-xs mt-1 space-y-1">
                <li>• 旧版本文件清理</li>
                <li>• 资源释放</li>
                <li>• 状态更新</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- API Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">API配置</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">部署控制器</h3>
        <p class="text-gray-700">
          通过REST API进行插件的动态部署管理：
        </p>
        <pre><code class="java">@RestController
@RequestMapping("/api/plugins")
public class PluginDeploymentController {
    
    @Autowired
    private PluginDeploymentService deploymentService;
    
    // 部署插件
    @PostMapping("/deploy")
    public ResponseEntity&lt;DeploymentResult&gt; deployPlugin(
            @RequestParam String pluginName,
            @RequestParam String version,
            @RequestParam String packageUrl) {
        
        DeploymentRequest request = DeploymentRequest.builder()
            .pluginName(pluginName)
            .version(version)
            .packageUrl(packageUrl)
            .strategy(DeploymentStrategy.ROLLING)
            .healthCheckEnabled(true)
            .build();
            
        DeploymentResult result = deploymentService.deploy(request);
        return ResponseEntity.ok(result);
    }
    
    // 更新插件
    @PostMapping("/update")
    public ResponseEntity&lt;DeploymentResult&gt; updatePlugin(
            @RequestParam String pluginName,
            @RequestParam String newVersion) {
        
        UpdateRequest request = UpdateRequest.builder()
            .pluginName(pluginName)
            .newVersion(newVersion)
            .rollbackOnFailure(true)
            .build();
            
        DeploymentResult result = deploymentService.update(request);
        return ResponseEntity.ok(result);
    }
    
    // 卸载插件
    @DeleteMapping("/uninstall/{pluginName}")
    public ResponseEntity&lt;UninstallResult&gt; uninstallPlugin(
            @PathVariable String pluginName,
            @RequestParam(defaultValue = "true") boolean graceful) {
        
        UninstallRequest request = UninstallRequest.builder()
            .pluginName(pluginName)
            .gracefulShutdown(graceful)
            .build();
            
        UninstallResult result = deploymentService.uninstall(request);
        return ResponseEntity.ok(result);
    }
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">部署配置示例</h3>
        <pre><code class="yaml"># application.yml
brick-bootkit:
  deployment:
    # 全局配置
    global:
      default-strategy: rolling
      timeout: 300s
      retry-attempts: 3
      health-check:
        enabled: true
        interval: 10s
        timeout: 30s
        
    # 蓝绿部署配置
    blue-green:
      environments:
        blue:
          label: "stable"
          weight: 80
        green:
          label: "candidate"
          weight: 20
      auto-promote:
        enabled: false
        threshold: 95%
        
    # 滚动部署配置
    rolling:
      batch-size: 25%
      max-unavailable: 1
      min-ready-time: 10s
      
    # 金丝雀部署配置
    canary:
      steps:
        - weight: 10
          duration: 5m
        - weight: 25
          duration: 10m
        - weight: 50
          duration: 15m
        - weight: 100
          duration: 20m</code></pre>
      </div>
    </section>

    <!-- Monitoring and Health Check -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">监控和健康检查</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">健康检查</h3>
        <p class="text-gray-700">
          系统提供多层次的健康检查机制：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">基础检查</h4>
            <ul class="text-gray-700 text-sm space-y-1">
              <li>• JVM内存使用</li>
              <li>• 线程池状态</li>
              <li>• 文件句柄数</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">应用检查</h4>
            <ul class="text-gray-700 text-sm space-y-1">
              <li>• 数据库连接</li>
              <li>• 缓存服务</li>
              <li>• 外部API调用</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">插件检查</h4>
            <ul class="text-gray-700 text-sm space-y-1">
              <li>• 插件状态</li>
              <li>• 接口响应</li>
              <li>• 业务指标</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">性能监控</h3>
        <pre><code class="java">@Component
public class DeploymentMetrics {
    
    @EventListener
    public void onPluginDeployed(PluginDeployedEvent event) {
        // 记录部署成功指标
        meterRegistry.counter("plugin.deployment.success",
            "plugin", event.getPluginName(),
            "version", event.getVersion()).increment();
            
        // 记录部署耗时
        Timer.Sample sample = Timer.start(meterRegistry);
        sample.stop(Timer.builder("plugin.deployment.duration")
            .description("插件部署耗时")
            .register(meterRegistry,
                event.getPluginName(), event.getVersion()));
    }
    
    @EventListener
    public void onDeploymentFailed(DeploymentFailedEvent event) {
        // 记录部署失败指标
        meterRegistry.counter("plugin.deployment.failure",
            "plugin", event.getPluginName(),
            "version", event.getVersion(),
            "reason", event.getFailureReason()).increment();
    }
}</code></pre>
      </div>
    </section>

    <!-- Rollback Strategy -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">回滚策略</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">自动回滚</h3>
        <p class="text-gray-700">
          当部署后的健康检查失败时，系统自动触发回滚：
        </p>
        <pre><code class="yaml"># 回滚策略配置
rollback:
  auto:
    enabled: true
    triggers:
      - health_check_failed
      - error_rate_exceeded
      - response_time_degraded
    thresholds:
      error_rate: 5%
      response_time: 1000ms
      success_rate: 95%
      
  timeout: 5m      # 回滚超时时间
  parallel: false  # 是否并行回滚</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">手动回滚</h3>
        <p class="text-gray-700">
          通过API手动触发回滚操作：
        </p>
        <pre><code class="bash"># 回滚到上一版本
curl -X POST "/api/plugins/rollback/user-service" \
  -d '{"reason": "manual_rollback"}'

# 回滚到指定版本
curl -X POST "/api/plugins/rollback/user-service" \
  -d '{"targetVersion": "1.0.0", "reason": "emergency_rollback"}'</code></pre>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">最佳实践</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">部署前准备</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 完整备份当前状态</li>
            <li>• 测试环境预演部署</li>
            <li>• 验证依赖和配置</li>
            <li>• 准备回滚方案</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">部署执行</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 选择合适的部署策略</li>
            <li>• 监控关键指标</li>
            <li>• 及时处理异常</li>
            <li>• 记录详细日志</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">资源管理</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 合理分配系统资源</li>
            <li>• 监控内存和CPU使用</li>
            <li>• 及时清理无用资源</li>
            <li>• 优化类加载策略</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">安全考虑</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 验证插件来源可信</li>
            <li>• 限制插件权限范围</li>
            <li>• 加密敏感配置信息</li>
            <li>• 审计部署操作日志</li>
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
            <h4 class="font-semibold text-gray-900">部署失败</h4>
            <p class="text-gray-700 text-sm">问题：插件部署过程中出现错误</p>
            <p class="text-gray-600 text-sm">解决：检查依赖兼容性、系统资源充足性和网络连通性</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">健康检查失败</h4>
            <p class="text-gray-700 text-sm">问题：部署后健康检查不通过</p>
            <p class="text-gray-600 text-sm">解决：检查插件配置、数据库连接和外部服务依赖</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">类冲突</h4>
            <p class="text-gray-700 text-sm">问题：多个插件使用不同版本的同类库</p>
            <p class="text-gray-600 text-sm">解决：使用类隔离和依赖版本统一管理</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">内存泄漏</h4>
            <p class="text-gray-700 text-sm">问题：频繁部署导致内存使用增长</p>
            <p class="text-gray-600 text-sm">解决：检查类加载器清理和资源释放逻辑</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>