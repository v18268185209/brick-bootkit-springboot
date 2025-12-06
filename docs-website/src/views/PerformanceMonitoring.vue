<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">性能监控</h1>
      <p class="text-lg text-gray-600 mb-8">
        详细介绍Brick BootKit的性能监控体系，包括指标收集、性能分析、告警机制和性能优化方案。
      </p>
    </div>

    <!-- Overview -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">性能监控概述</h2>
      <div class="card space-y-4">
        <p class="text-gray-700">
          Brick BootKit提供了全面的性能监控解决方案，实时监控系统资源使用情况、插件性能指标和应用健康状态，
          帮助开发者和运维人员及时发现和解决性能问题。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-semibold text-blue-900 mb-2">实时监控</h3>
            <p class="text-blue-700 text-sm">实时采集系统各项指标</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-900 mb-2">智能告警</h3>
            <p class="text-green-700 text-sm">基于阈值的智能告警</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="font-semibold text-purple-900 mb-2">性能分析</h3>
            <p class="text-purple-700 text-sm">深度性能分析和报告</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Monitoring Architecture -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">监控架构</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">监控架构图</h3>
        <p class="text-gray-700">
          Brick BootKit的性能监控采用分层架构，支持多维度的性能数据收集和分析：
        </p>
        <pre><code class="text-sm">┌─────────────────────────────────────────────────────────┐
│                   展示层 (Presentation Layer)              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │  实时面板    │  │  性能报告   │  │  告警中心   │     │
│  │ Dashboard   │  │  Reports    │  │  Alerts     │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   应用层 (Application Layer)              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │  指标收集器  │  │  数据聚合器  │  │  告警引擎   │     │
│  │ Metrics     │  │ Aggregator  │  │ Alert       │     │
│  │ Collector   │  │             │  │ Engine      │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   数据层 (Data Layer)                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │  时序数据库  │  │  缓存系统   │  │  日志存储   │     │
│  │ Time Series │  │ Cache       │  │ Log Store   │     │
│  │ Database    │  │ System      │  │             │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   采集层 (Collection Layer)              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │  JVM监控    │  │ 应用监控     │  │  插件监控    │     │
│  │ JVM Monitor │  │ App Monitor │  │ Plugin      │     │
│  │             │  │             │  │ Monitor     │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">核心组件</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">数据采集层</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• JVM指标采集（内存、线程、GC等）</li>
              <li>• 应用指标采集（HTTP、数据库、缓存）</li>
              <li>• 插件指标采集（生命周期、性能）</li>
              <li>• 系统指标采集（CPU、磁盘、网络）</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">数据处理层</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 指标聚合和计算</li>
              <li>• 异常检测和分析</li>
              <li>• 数据清洗和格式化</li>
              <li>• 实时流处理</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">告警系统</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 阈值告警规则</li>
              <li>• 趋势分析告警</li>
              <li>• 告警分级和抑制</li>
              <li>• 多渠道通知</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">展示系统</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 实时监控面板</li>
              <li>• 历史趋势图表</li>
              <li>• 性能分析报告</li>
              <li>• 告警状态展示</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Metrics Collection -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">指标收集</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">JVM指标</h3>
        <p class="text-gray-700">
          监控Java虚拟机的各项性能指标：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">内存指标</h4>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li><code>heap.used</code> - 已使用的堆内存</li>
              <li><code>heap.max</code> - 最大堆内存</li>
              <li><code>heap.committed</code> - 提交的堆内存</li>
              <li><code>nonheap.used</code> - 非堆内存使用量</li>
              <li><code>metaspace.used</code> - Metaspace使用量</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">GC指标</h4>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li><code>gc.count</code> - GC次数</li>
              <li><code>gc.time</code> - GC耗时</li>
              <li><code>gc.young.count</code> - Young GC次数</li>
              <li><code>gc.old.count</code> - Old GC次数</li>
              <li><code>gc.pause.time</code> - GC暂停时间</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">线程指标</h4>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li><code>threads.count</code> - 线程总数</li>
              <li><code>threads.daemon.count</code> - 守护线程数</li>
              <li><code>threads.peak.count</code> - 峰值线程数</li>
              <li><code>threads.states.blocked</code> - 阻塞线程数</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">类加载指标</h4>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li><code>classes.loaded</code> - 已加载类数</li>
              <li><code>classes.unloaded</code> - 已卸载类数</li>
              <li><code>classes.total</code> - 总类数</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">应用指标</h3>
        <p class="text-gray-700">
          监控Spring Boot应用的业务指标：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">HTTP指标</h4>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li><code>http.server.requests.count</code> - HTTP请求总数</li>
              <li><code>http.server.requests.duration</code> - HTTP请求耗时</li>
              <li><code>http.server.errors.count</code> - HTTP错误数</li>
              <li><code>http.server.requests.rate</code> - 请求速率</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">数据库指标</h4>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li><code>database.connections.active</code> - 活跃连接数</li>
              <li><code>database.connections.idle</code> - 空闲连接数</li>
              <li><code>database.queries.duration</code> - 查询耗时</li>
              <li><code>database.transactions.count</code> - 事务数</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">缓存指标</h4>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li><code>cache.hits.count</code> - 缓存命中数</li>
              <li><code>cache.misses.count</code> - 缓存未命中数</li>
              <li><code>cache.hit.rate</code> - 缓存命中率</li>
              <li><code>cache.size</code> - 缓存大小</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">消息队列指标</h4>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li><code>mq.messages.produced</code> - 发送消息数</li>
              <li><code>mq.messages.consumed</code> - 接收消息数</li>
              <li><code>mq.queue.size</code> - 队列大小</li>
              <li><code>mq.processing.time</code> - 处理时间</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件指标</h3>
        <p class="text-gray-700">
          专门针对插件系统的性能指标：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">生命周期指标</h4>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li><code>plugin.startup.time</code> - 插件启动时间</li>
              <li><code>plugin.shutdown.time</code> - 插件关闭时间</li>
              <li><code>plugin.lifetime.duration</code> - 插件运行时间</li>
              <li><code>plugin.restart.count</code> - 重启次数</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">资源使用指标</h4>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li><code>plugin.memory.usage</code> - 内存使用量</li>
              <li><code>plugin.cpu.usage</code> - CPU使用率</li>
              <li><code>plugin.threads.count</code> - 线程数</li>
              <li><code>plugin.filehandles.open</code> - 打开的文件句柄</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">接口性能指标</h4>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li><code>plugin.api.request.count</code> - API请求数</li>
              <li><code>plugin.api.response.time</code> - API响应时间</li>
              <li><code>plugin.api.error.rate</code> - API错误率</li>
              <li><code>plugin.api.throughput</code> - API吞吐量</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">健康状态指标</h4>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li><code>plugin.health.score</code> - 健康分数</li>
              <li><code>plugin.status.duration</code> - 状态持续时间</li>
              <li><code>plugin.failure.count</code> - 故障次数</li>
              <li><code>plugin.recovery.time</code> - 恢复时间</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Monitoring Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">监控配置</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置文件</h3>
        <p class="text-gray-700">
          通过配置文件启用和配置监控功能：
        </p>
        <pre><code class="yaml"># application.yml
brick-bootkit:
  monitoring:
    # 全局监控开关
    enabled: true
    
    # 监控数据存储
    storage:
      # 时序数据库配置
      time-series:
        enabled: true
        type: influxdb  # influxdb, prometheus, elasticsearch
        host: localhost
        port: 8086
        database: brick_monitoring
        retention: 30d  # 数据保留时间
        
      # 缓存配置
      cache:
        enabled: true
        max-size: 10000
        ttl: 300s
        
    # 指标收集配置
    metrics:
      # JVM指标
      jvm:
        enabled: true
        collection-interval: 10s
        
      # 应用指标
      application:
        enabled: true
        collection-interval: 5s
        
      # 插件指标
      plugin:
        enabled: true
        collection-interval: 15s
        
      # 自定义指标
      custom:
        enabled: true
        collection-interval: 30s
        
    # 告警配置
    alerting:
      enabled: true
      
      # 告警规则
      rules:
        - name: "HighMemoryUsage"
          condition: "jvm.memory.usage > 0.8"
          duration: "2m"
          severity: "warning"
          action: "notify_admin"
          
        - name: "PluginFailure"
          condition: "plugin.health.score < 0.5"
          duration: "30s"
          severity: "critical"
          action: "restart_plugin"
          
        - name: "HighResponseTime"
          condition: "http.server.requests.duration.p95 > 2000ms"
          duration: "5m"
          severity: "warning"
          action: "performance_analysis"
          
      # 告警通知
      notification:
        channels:
          - type: "email"
            enabled: true
            recipients: ["admin@example.com"]
            
          - type: "webhook"
            enabled: true
            url: "https://hooks.slack.com/services/..."
            
          - type: "sms"
            enabled: false
            recipients: ["+1234567890"]
            
    # 监控面板配置
    dashboard:
      enabled: true
      refresh-interval: 5s
      auto-refresh: true
      
      # 面板布局
      layout:
        - row: 1
          widgets:
            - type: "chart"
              title: "JVM内存使用情况"
              metrics: ["jvm.memory.used", "jvm.memory.max"]
              chart-type: "line"
              
            - type: "chart"
              title: "HTTP请求速率"
              metrics: ["http.server.requests.rate"]
              chart-type: "area"</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">代码配置</h3>
        <p class="text-gray-700">
          通过Java注解和配置类来启用监控功能：
        </p>
        <pre><code class="java">@Configuration
@EnableBrickMonitoring
@EnableMetrics
@EnableActuator
public class MonitoringConfig {
    
    @Bean
    public PluginMetricsCollector pluginMetricsCollector() {
        return new PluginMetricsCollector();
    }
    
    @Bean
    public JVMMetricsCollector jvmMetricsCollector() {
        return new JVMMetricsCollector();
    }
    
    @Bean
    public AlertingService alertingService() {
        return new AlertingService();
    }
}

// 插件组件监控
@PluginComponent
@Monitored
public class MonitoredPluginService {
    
    @Timed(name = "user.service.find.by.id")
    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    
    @Counted(name = "user.service.create")
    @Timed(name = "user.service.create.duration")
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    @Gauge(name = "user.service.total.users")
    public int getTotalUsers() {
        return userRepository.count();
    }
}

// 自定义指标
@Component
@PluginComponent
public class CustomMetrics {
    
    private final MeterRegistry meterRegistry;
    
    public CustomMetrics(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }
    
    public void recordBusinessMetric(String operation, long duration) {
        Timer.Sample sample = Timer.start(meterRegistry);
        sample.stop(Timer.builder("business.operation.duration")
            .description("业务操作耗时")
            .register(meterRegistry, 
                Tags.of("operation", operation), 
                duration, TimeUnit.MILLISECONDS));
    }
    
    public void incrementErrorCount(String service, String errorType) {
        meterRegistry.counter("business.error.count",
            Tags.of("service", service, "type", errorType)).increment();
    }
}</code></pre>
      </div>
    </section>

    <!-- Performance Analysis -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">性能分析</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">性能分析工具</h3>
        <p class="text-gray-700">
          提供多种性能分析工具和方法：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">实时分析</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 实时性能仪表板</li>
              <li>• 实时告警和通知</li>
              <li>• 实时性能趋势</li>
              <li>• 实时瓶颈检测</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">历史分析</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 历史性能报告</li>
              <li>• 性能趋势分析</li>
              <li>• 容量规划分析</li>
              <li>• 性能基线对比</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">深度分析</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 性能剖析(Profiling)</li>
              <li>• 内存分析</li>
              <li>• 线程分析</li>
              <li>• 调用链分析</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">预测分析</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 资源使用预测</li>
              <li>• 性能趋势预测</li>
              <li>• 故障预警</li>
              <li>• 容量需求预测</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">性能分析示例</h3>
        <pre><code class="java">@Service
@PluginComponent
public class PerformanceAnalyzer {
    
    @Autowired
    private MetricsRepository metricsRepository;
    
    @Autowired
    private PluginManager pluginManager;
    
    public PerformanceReport generateReport(String pluginId, TimeRange timeRange) {
        PerformanceReport report = new PerformanceReport();
        report.setPluginId(pluginId);
        report.setTimeRange(timeRange);
        
        // 收集性能数据
        List&lt;MetricData&gt; metrics = metricsRepository.findMetrics(pluginId, timeRange);
        
        // 分析性能指标
        report.setMemoryAnalysis(analyzeMemoryUsage(metrics));
        report.setCpuAnalysis(analyzeCpuUsage(metrics));
        report.setResponseTimeAnalysis(analyzeResponseTime(metrics));
        report.setThroughputAnalysis(analyzeThroughput(metrics));
        
        // 生成建议
        report.setRecommendations(generateRecommendations(report));
        
        return report;
    }
    
    private MemoryAnalysis analyzeMemoryUsage(List&lt;MetricData&gt; metrics) {
        MemoryAnalysis analysis = new MemoryAnalysis();
        
        // 提取内存使用数据
        List&lt;Double&gt; heapUsage = metrics.stream()
            .filter(m -&gt; "jvm.memory.used".equals(m.getName()))
            .map(MetricData::getValue)
            .map(Double::parseDouble)
            .collect(Collectors.toList());
        
        analysis.setAvgUsage(calculateAverage(heapUsage));
        analysis.setMaxUsage(Collections.max(heapUsage));
        analysis.setMinUsage(Collections.min(heapUsage));
        analysis.setTrend(calculateTrend(heapUsage));
        
        // 检测内存泄漏
        if (isMemoryLeak(heapUsage)) {
            analysis.setIssue(MemoryIssue.POTENTIAL_LEAK);
            analysis.setSeverity(Severity.HIGH);
        }
        
        return analysis;
    }
    
    private List&lt;String&gt; generateRecommendations(PerformanceReport report) {
        List&lt;String&gt; recommendations = new ArrayList&lt;&gt;();
        
        // 基于内存分析的建议
        if (report.getMemoryAnalysis().getAvgUsage() > 0.8) {
            recommendations.add("建议优化内存使用，考虑增加堆内存大小");
        }
        
        // 基于响应时间分析的建议
        if (report.getResponseTimeAnalysis().getP95() > 2000) {
            recommendations.add("响应时间较长，建议优化慢查询和增加缓存");
        }
        
        // 基于吞吐量分析的建议
        if (report.getThroughputAnalysis().getDecliningTrend() > 0.1) {
            recommendations.add("吞吐量呈下降趋势，建议检查系统瓶颈");
        }
        
        return recommendations;
    }
}</code></pre>
      </div>
    </section>

    <!-- Alerting System -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">告警系统</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">告警规则配置</h3>
        <p class="text-gray-700">
          定义灵活的告警规则和条件：
        </p>
        <pre><code class="yaml"># 告警规则配置
alerting:
  rules:
    # JVM内存告警
    - name: "JVM内存使用告警"
      enabled: true
      metric: "jvm.memory.usage"
      condition: "value > 0.85"      # 内存使用率超过85%
      duration: "3m"                 # 持续3分钟
      severity: "warning"            # 告警级别：info, warning, critical
      message: "JVM内存使用率过高: {value}"
      
    # 插件健康告警
    - name: "插件健康状态告警"
      enabled: true
      metric: "plugin.health.score"
      condition: "value < 0.5"       # 健康分数低于0.5
      duration: "1m"
      severity: "critical"
      message: "插件健康分数过低: {value}"
      
    # HTTP响应时间告警
    - name: "HTTP响应时间告警"
      enabled: true
      metric: "http.server.requests.duration.p95"
      condition: "value > 2000"      # P95响应时间超过2秒
      duration: "5m"
      severity: "warning"
      message: "HTTP响应时间过长: {value}ms"
      
    # 插件启动失败告警
    - name: "插件启动失败告警"
      enabled: true
      metric: "plugin.startup.failure.count"
      condition: "value > 0"         # 有启动失败
      duration: "30s"
      severity: "critical"
      message: "插件启动失败"
      
    # 告警抑制规则
    suppressions:
      - name: "维护窗口抑制"
        enabled: false
        time-range: "02:00-04:00"     # 凌晨2-4点抑制告警
        weekdays: ["sat", "sun"]      # 周末抑制告警
        
    # 告警聚合
    aggregation:
      enabled: true
      time-window: "5m"              # 5分钟窗口聚合
      max-alerts: 100                # 最大聚合告警数</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">告警处理</h3>
        <pre><code class="java">@Service
@PluginComponent
public class AlertingService {
    
    @Autowired
    private NotificationService notificationService;
    
    @Autowired
    private PluginManager pluginManager;
    
    @EventListener
    public void handleMetricAlert(MetricAlertEvent event) {
        Alert alert = event.getAlert();
        
        // 记录告警
        logAlert(alert);
        
        // 执行告警动作
        executeAlertAction(alert);
        
        // 发送通知
        sendNotification(alert);
        
        // 更新告警状态
        updateAlertState(alert);
    }
    
    private void executeAlertAction(Alert alert) {
        switch (alert.getRule().getAction()) {
            case "restart_plugin":
                if (alert.getMetric().contains("plugin.health")) {
                    String pluginId = extractPluginId(alert.getMetric());
                    restartPlugin(pluginId);
                }
                break;
                
            case "scale_up":
                if (alert.getMetric().contains("cpu.usage")) {
                    scaleUpResources();
                }
                break;
                
            case "performance_analysis":
                startPerformanceAnalysis(alert.getPluginId());
                break;
                
            case "notify_admin":
                notifyAdministrators(alert);
                break;
                
            default:
                log.warn("未知的告警动作: {}", alert.getRule().getAction());
        }
    }
    
    private void restartPlugin(String pluginId) {
        try {
            log.info("重启插件: {}", pluginId);
            pluginManager.stopPlugin(pluginId, false);
            Thread.sleep(5000); // 等待5秒
            pluginManager.startPlugin(pluginId);
            
            log.info("插件重启成功: {}", pluginId);
            
        } catch (Exception e) {
            log.error("插件重启失败: {}", pluginId, e);
        }
    }
    
    private void startPerformanceAnalysis(String pluginId) {
        // 启动性能分析任务
        PerformanceAnalysisTask task = new PerformanceAnalysisTask(pluginId);
        taskScheduler.schedule(task, new Date(System.currentTimeMillis() + 30000)); // 30秒后执行
    }
}</code></pre>
      </div>
    </section>

    <!-- Monitoring Dashboard -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">监控面板</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">实时监控面板</h3>
        <p class="text-gray-700">
          提供直观的实时监控面板：
        </p>
        <pre><code class="java">@RestController
@RequestMapping("/api/monitoring")
@PluginComponent
public class MonitoringController {
    
    @GetMapping("/dashboard")
    public DashboardData getDashboardData() {
        DashboardData dashboard = new DashboardData();
        
        // 系统概览
        dashboard.setSystemOverview(getSystemOverview());
        
        // JVM状态
        dashboard.setJvmStatus(getJvmStatus());
        
        // 插件状态
        dashboard.setPluginStatus(getPluginStatus());
        
        // 性能指标
        dashboard.setPerformanceMetrics(getPerformanceMetrics());
        
        // 告警状态
        dashboard.setAlertStatus(getAlertStatus());
        
        return dashboard;
    }
    
    @GetMapping("/metrics/{pluginId}")
    public List&lt;MetricData&gt; getPluginMetrics(
            @PathVariable String pluginId,
            @RequestParam(defaultValue = "5m") String timeRange) {
        
        TimeRange range = TimeRange.parse(timeRange);
        return metricsService.getPluginMetrics(pluginId, range);
    }
    
    @GetMapping("/alerts")
    public List&lt;Alert&gt; getActiveAlerts() {
        return alertingService.getActiveAlerts();
    }
    
    @PostMapping("/alerts/{alertId}/acknowledge")
    public void acknowledgeAlert(@PathVariable String alertId) {
        alertingService.acknowledgeAlert(alertId);
    }
}</code></pre>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">最佳实践</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">指标设计</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 选择关键业务指标</li>
            <li>• 避免过度监控</li>
            <li>• 合理设置指标标签</li>
            <li>• 使用标准指标命名</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">告警配置</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 设置合理的告警阈值</li>
            <li>• 避免告警风暴</li>
            <li>• 配置告警抑制规则</li>
            <li>• 提供有意义的告警信息</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">性能优化</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 定期清理历史数据</li>
            <li>• 使用聚合指标</li>
            <li>• 优化数据采集频率</li>
            <li>• 实施数据压缩</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">监控覆盖</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 监控所有关键组件</li>
            <li>• 覆盖用户体验指标</li>
            <li>• 监控安全相关指标</li>
            <li>• 定期审查监控策略</li>
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
            <h4 class="font-semibold text-gray-900">监控数据缺失</h4>
            <p class="text-gray-700 text-sm">问题：某些指标没有数据或数据不准确</p>
            <p class="text-gray-600 text-sm">解决：检查监控配置、指标收集器和网络连接</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">告警频繁触发</h4>
            <p class="text-gray-700 text-sm">问题：告警过于频繁，影响正常运维</p>
            <p class="text-gray-600 text-sm">解决：调整告警阈值、添加抑制规则或聚合告警</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">性能监控影响性能</h4>
            <p class="text-gray-700 text-sm">问题：监控系统本身影响应用性能</p>
            <p class="text-gray-600 text-sm">解决：调整采集频率、使用异步采集、优化收集器</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">监控数据存储问题</h4>
            <p class="text-gray-700 text-sm">问题：时序数据库性能下降或存储不足</p>
            <p class="text-gray-600 text-sm">解决：实施数据清理策略、增加存储空间或优化查询</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>