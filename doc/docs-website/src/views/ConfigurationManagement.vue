<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">配置管理</h1>
      <p class="text-lg text-gray-600 mb-8">
        详细介绍如何管理Brick BootKit的配置信息，包括配置源、动态配置、配置热更新和配置验证等功能。
      </p>
    </div>

    <!-- Overview -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置管理概述</h2>
      <div class="card space-y-4">
        <p class="text-gray-700">
          Brick BootKit提供了强大的配置管理系统，支持多种配置源、动态配置更新、配置验证和配置热加载，
          确保插件能够在不同环境下灵活配置运行参数。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-semibold text-blue-900 mb-2">多源配置</h3>
            <p class="text-blue-700 text-sm">支持多种配置来源</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-900 mb-2">动态更新</h3>
            <p class="text-green-700 text-sm">运行时配置热更新</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="font-semibold text-purple-900 mb-2">配置验证</h3>
            <p class="text-purple-700 text-sm">强类型配置验证</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Configuration Sources -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置源</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置源类型</h3>
        <p class="text-gray-700">
          Brick BootKit支持多种配置源，可以根据不同场景选择合适的配置方式：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">文件配置源</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li><strong>Properties文件</strong> - 传统的键值对配置文件</li>
              <li><strong>YAML文件</strong> - 结构化的配置文件</li>
              <li><strong>JSON文件</strong> - JSON格式的配置文件</li>
              <li><strong>XML文件</strong> - XML格式的配置文件</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">系统配置源</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li><strong>环境变量</strong> - 系统环境变量配置</li>
              <li><strong>命令行参数</strong> - JVM启动参数</li>
              <li><strong>系统属性</strong> - System.getProperties()</li>
              <li><strong>JVM参数</strong> - JVM启动配置</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">外部配置源</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li><strong>数据库</strong> - 数据库中的配置表</li>
              <li><strong>Redis</strong> - Redis缓存配置</li>
              <li><strong>Nacos</strong> - Nacos配置中心</li>
              <li><strong>Apollo</strong> - Apollo配置中心</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">自定义配置源</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li><strong>HTTP配置</strong> - 远程HTTP配置源</li>
              <li><strong>Kafka配置</strong> - 基于消息的配置</li>
              <li><strong>ZooKeeper</strong> - ZooKeeper配置</li>
              <li><strong>Consul</strong> - Consul配置</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置源配置</h3>
        <p class="text-gray-700">
          通过配置文件启用和管理不同的配置源：
        </p>
        <pre><code class="yaml"># application.yml
brick-bootkit:
  config:
    # 默认配置源
    sources:
      - name: application-yml
        type: file
        priority: 100
        enabled: true
        config-location: classpath:application.yml
        
      - name: plugin-yaml
        type: file  
        priority: 90
        enabled: true
        config-location: classpath:plugin-config.yml
        
      - name: environment
        type: environment
        priority: 80
        enabled: true
        prefix: "BRICK_"
        
      - name: system-properties
        type: system
        priority: 70
        enabled: true
        
      - name: redis
        type: redis
        priority: 60
        enabled: false
        host: localhost
        port: 6379
        database: 0
        key-prefix: "brick-config:"
        
      - name: nacos
        type: nacos
        priority: 50
        enabled: false
        server-addr: "nacos-server:8848"
        namespace: "brick-config"
        group: "DEFAULT_GROUP"
        data-id: "brick-config.yaml"
        
    # 配置优先级（数字越大优先级越高）
    priority-order: nacos, redis, application-yml, plugin-yaml, environment, system-properties
    
    # 缓存配置
    cache:
      enabled: true
      ttl: 300s  # 缓存时间
      max-size: 1000 # 最大缓存数量
      
    # 监控配置
    monitoring:
      enabled: true
      metrics-enabled: true
      health-check-enabled: true</code></pre>
      </div>
    </section>

    <!-- Configuration Properties -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置属性</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置属性定义</h3>
        <p class="text-gray-700">
          使用注解定义配置属性，支持默认值、验证、描述等特性：
        </p>
        <pre><code class="java">@ConfigProperties(prefix = "brick.plugin.user")
@Component
public class UserPluginConfig {
    
    @NotBlank(message = "用户名不能为空")
    @Length(min = 3, max = 50, message = "用户名长度必须在3-50字符之间")
    private String username;
    
    @NotNull(message = "年龄不能为null")
    @Min(value = 18, message = "年龄必须大于等于18岁")
    @Max(value = 100, message = "年龄必须小于等于100岁")
    private Integer age;
    
    @Email(message = "邮箱格式不正确")
    private String email;
    
    @Pattern(regexp = "^(1[3-9]\\d{9})$", message = "手机号格式不正确")
    private String phone;
    
    @Valid
    private List&lt;@Valid UserSettings&gt; settings;
    
    @DefaultValue("true")
    private Boolean enabled;
    
    @DefaultValue("1000")
    @Min(value = 100, message = "超时时间不能小于100ms")
    private Long timeout;
    
    // Getters and Setters
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">嵌套配置对象</h3>
        <pre><code class="java">@ConfigProperties(prefix = "brick.plugin.database")
@Component
public class DatabaseConfig {
    
    @NotNull
    private String url;
    
    @NotBlank
    private String username;
    
    @NotBlank
    private String password;
    
    @DefaultValue("5")
    @Min(value = 1)
    @Max(value = 100)
    private Integer poolSize;
    
    @DefaultValue("30s")
    private Duration connectionTimeout;
    
    @Valid
    private ConnectionPoolConfig pool;
    
    @Valid
    private List&lt;@Valid ReadReplicaConfig&gt; readReplicas;
    
    @Getter
    @Setter
    @ConfigProperties(prefix = "pool")
    public static class ConnectionPoolConfig {
        
        @DefaultValue("10")
        private Integer minSize;
        
        @DefaultValue("50")
        private Integer maxSize;
        
        @DefaultValue("5m")
        private Duration maxLifetime;
        
        @DefaultValue("2m")
        private Duration idleTimeout;
    }
    
    @Getter
    @Setter
    @ConfigProperties(prefix = "read-replica")
    public static class ReadReplicaConfig {
        
        @NotBlank
        private String name;
        
        @NotBlank
        private String url;
        
        @DefaultValue("true")
        private Boolean enabled;
        
        @DefaultValue("100")
        private Integer weight;
    }
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置验证</h3>
        <p class="text-gray-700">
          使用Hibernate Validator进行配置验证：
        </p>
        <pre><code class="java">@ConfigProperties(prefix = "brick.plugin")
@Component
public class PluginConfig {
    
    // 字符串验证
    @NotBlank(message = "插件名称不能为空")
    @Length(min = 1, max = 100, message = "插件名称长度必须在1-100字符之间")
    private String name;
    
    // 数值验证
    @Min(value = 1, message = "端口号必须大于0")
    @Max(value = 65535, message = "端口号不能超过65535")
    private Integer port;
    
    // 集合验证
    @Size(min = 1, max = 10, message = "集群节点数量必须在1-10之间")
    private List&lt;String&gt; clusterNodes;
    
    // 正则验证
    @Pattern(regexp = "^(https?|ftp)://.*", message = "URL必须以http、https或ftp开头")
    private String serviceUrl;
    
    // 枚举验证
    @NotNull
    private LogLevel logLevel;
    
    // 自定义验证
    @ValidURL(message = "无效的URL格式")
    private String healthCheckUrl;
    
    @ValidEmail(message = "无效的邮箱格式")
    private String notificationEmail;
    
    // Getters and Setters
    public enum LogLevel {
        DEBUG, INFO, WARN, ERROR
    }
}</code></pre>
      </div>
    </section>

    <!-- Configuration Injection -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置注入</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">使用配置注入</h3>
        <p class="text-gray-700">
          通过配置注入器自动加载和注入配置值：
        </p>
        <pre><code class="java">@PluginComponent
public class UserService {
    
    @ConfigurationValue("brick.plugin.user.username")
    private String username;
    
    @ConfigurationValue("brick.plugin.user.timeout")
    @DefaultValue("1000")
    private Long timeout;
    
    @ConfigurationValue("brick.plugin.user.enabled")
    @DefaultValue("true")
    private Boolean enabled;
    
    @ConfigurationValue("brick.plugin.database.url")
    private String databaseUrl;
    
    @ConfigurationValue("brick.plugin.database.pool.size")
    @DefaultValue("10")
    private Integer poolSize;
    
    @ConfigurationValue("brick.plugin.cluster.nodes")
    private List&lt;String&gt; clusterNodes;
    
    @ConfigurationValue("brick.plugin.features.cache-enabled")
    @DefaultValue("false")
    private Boolean cacheEnabled;
    
    public void initialize() {
        log.info("配置加载完成:");
        log.info("  用户名: {}", username);
        log.info("  超时时间: {}ms", timeout);
        log.info("  启用状态: {}", enabled);
        log.info("  数据库URL: {}", databaseUrl);
        log.info("  连接池大小: {}", poolSize);
        log.info("  集群节点: {}", clusterNodes);
        log.info("  缓存启用: {}", cacheEnabled);
    }
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">对象配置注入</h3>
        <pre><code class="java">@PluginComponent
public class DatabaseService {
    
    @ConfigurationValue("brick.plugin.database")
    @Validated
    private DatabaseConfig databaseConfig;
    
    @ConfigurationValue("brick.plugin.http")
    @Validated
    private HttpConfig httpConfig;
    
    @ConfigurationValue("brick.plugin")
    @Validated
    private PluginConfig pluginConfig;
    
    public void initialize() {
        // 使用配置对象
        DataSource dataSource = createDataSource(databaseConfig);
        
        // 使用配置值
        int port = pluginConfig.getPort();
        String serviceUrl = pluginConfig.getServiceUrl();
        
        // 使用配置验证
        List&lt;String&gt; validationErrors = validateConfig(pluginConfig);
        if (!validationErrors.isEmpty()) {
            throw new ConfigurationException("配置验证失败: " + validationErrors);
        }
        
        log.info("数据库服务初始化完成，配置信息: {}", databaseConfig);
    }
}</code></pre>
      </div>
    </section>

    <!-- Dynamic Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">动态配置</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置变更监听</h3>
        <p class="text-gray-700">
          支持监听配置变更，实时更新插件配置：
        </p>
        <pre><code class="java">@PluginComponent
public class ConfigChangeHandler {
    
    @ConfigurationListener(path = "brick.plugin.user.username")
    public void onUsernameChanged(String oldValue, String newValue) {
        log.info("用户名配置变更: {} -> {}", oldValue, newValue);
        
        // 通知相关组件配置变更
        notifyUsernameChange(newValue);
    }
    
    @ConfigurationListener(path = "brick.plugin.database.*")
    public void onDatabaseConfigChanged(ConfigChangeEvent event) {
        String key = event.getKey();
        String oldValue = event.getOldValue();
        String newValue = event.getNewValue();
        
        log.info("数据库配置变更 [{}]: {} -> {}", key, oldValue, newValue);
        
        // 根据不同配置项执行相应逻辑
        if ("url".equals(key)) {
            updateDatabaseConnection(newValue);
        } else if ("pool.size".equals(key)) {
            updateConnectionPoolSize(Integer.valueOf(newValue));
        }
    }
    
    @ConfigurationListener(path = "brick.plugin.features.*", async = true)
    public void onFeatureConfigChanged(ConfigChangeEvent event) {
        // 异步处理功能配置变更
        CompletableFuture.runAsync(() -> {
            handleFeatureToggle(event);
        });
    }
    
    @ConfigurationListener(path = "brick.plugin.cluster.*", debounce = "3s")
    public void onClusterConfigChanged(ConfigChangeEvent event) {
        // 防抖处理，3秒内的多次变更只会执行一次
        updateClusterConfig(event);
    }
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置更新API</h3>
        <pre><code class="java">@RestController
@RequestMapping("/api/config")
public class ConfigManagementController {
    
    @Autowired
    private ConfigService configService;
    
    @GetMapping("/{key}")
    public ResponseEntity&lt;?&gt; getConfig(@PathVariable String key) {
        Object value = configService.getValue(key);
        return ResponseEntity.ok(value);
    }
    
    @PutMapping("/{key}")
    public ResponseEntity&lt;?&gt; updateConfig(@PathVariable String key, @RequestBody Object value) {
        configService.setValue(key, value);
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("/batch")
    public ResponseEntity&lt;?&gt; batchUpdateConfig(@RequestBody Map&lt;String, Object&gt; configs) {
        configs.forEach(configService::setValue);
        return ResponseEntity.ok().build();
    }
    
    @DeleteMapping("/{key}")
    public ResponseEntity&lt;?&gt; deleteConfig(@PathVariable String key) {
        configService.removeValue(key);
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/history/{key}")
    public ResponseEntity&lt;List&lt;ConfigHistory&gt;&gt; getConfigHistory(
            @PathVariable String key,
            @RequestParam(defaultValue = "10") int limit) {
        
        List&lt;ConfigHistory&gt; history = configService.getConfigHistory(key, limit);
        return ResponseEntity.ok(history);
    }
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置热更新</h3>
        <p class="text-gray-700">
          配置变更后自动触发组件重新配置：
        </p>
        <pre><code class="java">@PluginComponent
public class HotReloadService {
    
    @ConfigurationValue("brick.plugin.cache.ttl")
    private Long cacheTtl;
    
    private CacheManager cacheManager;
    
    @PostConstruct
    public void initialize() {
        initializeCache();
    }
    
    @ConfigurationListener(path = "brick.plugin.cache.ttl")
    public void onCacheConfigChanged(Long newTtl) {
        log.info("缓存TTL配置变更: {}ms -> {}ms", cacheTtl, newTtl);
        
        // 更新缓存配置
        updateCacheConfiguration(newTtl);
        
        // 重新初始化缓存
        reinitializeCache();
    }
    
    private void updateCacheConfiguration(Long ttl) {
        // 更新内存中的配置
        cacheTtl = ttl;
        
        // 更新缓存管理器配置
        cacheManager.updateTtl(ttl);
        
        // 清理过期缓存
        cacheManager.clearExpiredEntries();
    }
    
    private void reinitializeCache() {
        log.info("重新初始化缓存...");
        cacheManager.clearAll();
        initializeCache();
    }
    
    private void initializeCache() {
        // 根据配置初始化缓存
        this.cacheManager = new CacheManager(cacheTtl, TimeUnit.MILLISECONDS);
    }
}</code></pre>
      </div>
    </section>

    <!-- Configuration Profile -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置环境</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">环境配置</h3>
        <p class="text-gray-700">
          支持多环境配置，根据运行环境自动切换配置：
        </p>
        <pre><code class="yaml"># application.yml (默认配置)
brick:
  plugin:
    database:
      url: "jdbc:mysql://localhost:3306/default_db"
      username: "dev_user"
      password: "dev_password"
      
# application-dev.yml (开发环境)
brick:
  plugin:
    database:
      url: "jdbc:mysql://localhost:3306/dev_db"
      username: "dev_user"
      password: "dev_password"
    logging:
      level: DEBUG
      
# application-test.yml (测试环境)
brick:
  plugin:
    database:
      url: "jdbc:mysql://test-db:3306/test_db"
      username: "test_user"
      password: "test_password"
    logging:
      level: INFO
      
# application-prod.yml (生产环境)
brick:
  plugin:
    database:
      url: "jdbc:mysql://prod-db:3306/prod_db"
      username: ${DATABASE_USERNAME}
      password: ${DATABASE_PASSWORD}
    logging:
      level: WARN
    security:
      enabled: true</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">条件配置</h3>
        <p class="text-gray-700">
          根据条件启用或禁用配置：
        </p>
        <pre><code class="java">@PluginComponent
public class ConditionalConfigService {
    
    @ConfigurationValue("brick.plugin.debug.enabled")
    @ConditionalOnProperty(name = "brick.plugin.debug.enabled", havingValue = "true")
    private Boolean debugEnabled;
    
    @ConfigurationValue("brick.plugin.cluster.enabled")
    @ConditionalOnProperty(name = "brick.plugin.cluster.enabled", havingValue = "true")
    @ConditionalOnMissingBean
    private ClusterService clusterService;
    
    @ConfigurationValue("brick.plugin.cache.provider")
    @ConditionalOnProperty(name = "brick.plugin.cache.provider", matchIfMissing = true)
    private String cacheProvider;
    
    @ConditionalOnBean(type = "RedisTemplate")
    @ConfigurationValue("brick.plugin.redis.enabled")
    private Boolean redisEnabled;
    
    @PostConstruct
    public void initialize() {
        if (Boolean.TRUE.equals(debugEnabled)) {
            log.info("调试模式已启用");
            enableDebugMode();
        }
        
        log.info("缓存提供商: {}", cacheProvider);
        log.info("Redis启用状态: {}", redisEnabled);
    }
}</code></pre>
      </div>
    </section>

    <!-- Configuration Security -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置安全</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">敏感信息加密</h3>
        <p class="text-gray-700">
          对敏感配置信息进行加密存储和解密使用：
        </p>
        <pre><code class="java">@ConfigProperties(prefix = "brick.plugin.database")
@Component
public class SecureDatabaseConfig {
    
    @ConfigurationValue("brick.plugin.database.username")
    private String username;
    
    // 加密存储的密码
    @ConfigurationValue("brick.plugin.database.password")
    @Encrypted
    private String password;
    
    // 解密后的密码
    public String getDecryptedPassword() {
        return decryptPassword(this.password);
    }
    
    // 加密配置值
    public void setEncryptedPassword(String encryptedPassword) {
        this.password = encryptedPassword;
    }
    
    private String decryptPassword(String encryptedPassword) {
        return encryptionService.decrypt(encryptedPassword);
    }
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置访问控制</h3>
        <pre><code class="java">@PreAuthorize("hasRole('ADMIN')")
@PostAuthorize("hasRole('ADMIN')")
@Controller
public class ConfigAdminController {
    
    @PreAuthorize("hasPermission(#key, 'CONFIG_READ')")
    @GetMapping("/{key}")
    public Object getConfig(@PathVariable String key) {
        return configService.getValue(key);
    }
    
    @PreAuthorize("hasPermission(#config, 'CONFIG_WRITE')")
    @PutMapping("/{key}")
    public void setConfig(@PathVariable String key, @RequestBody Object config) {
        configService.setValue(key, config);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{key}")
    public void deleteConfig(@PathVariable String key) {
        configService.removeValue(key);
    }
    
    // 配置变更审计
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/audit/{key}")
    public List&lt;ConfigHistory&gt; getConfigHistory(@PathVariable String key) {
        return configService.getConfigHistory(key);
    }
}</code></pre>
      </div>
    </section>

    <!-- Configuration Monitoring -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置监控</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置指标</h3>
        <p class="text-gray-700">
          监控配置相关的指标和统计信息：
        </p>
        <pre><code class="java">@Component
public class ConfigMetrics {
    
    private final MeterRegistry meterRegistry;
    private final Counter configLoadCounter;
    private final Timer configLoadTimer;
    private final Gauge configCountGauge;
    
    public ConfigMetrics(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
        
        this.configLoadCounter = Counter.builder("config.load.count")
            .description("配置加载次数")
            .register(meterRegistry);
            
        this.configLoadTimer = Timer.builder("config.load.duration")
            .description("配置加载耗时")
            .register(meterRegistry);
            
        this.configCountGauge = Gauge.builder("config.count")
            .description("配置项数量")
            .register(meterRegistry, this, ConfigMetrics::getConfigCount);
    }
    
    public void recordConfigLoad(String source, boolean success, long duration) {
        configLoadCounter
            .tag("source", source)
            .tag("success", String.valueOf(success))
            .increment();
            
        configLoadTimer
            .tag("source", source)
            .record(duration, TimeUnit.MILLISECONDS);
    }
    
    private int getConfigCount() {
        return configService.getAllKeys().size();
    }
    
    @EventListener
    public void onConfigChanged(ConfigChangedEvent event) {
        meterRegistry.counter("config.change.count",
            "key", event.getKey(),
            "change_type", event.getChangeType().name()).increment();
    }
}</code></pre>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">最佳实践</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">配置组织</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 使用有意义的配置键名</li>
            <li>• 采用分层命名约定</li>
            <li>• 按功能模块组织配置</li>
            <li>• 提供配置说明文档</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">配置验证</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 使用强类型配置对象</li>
            <li>• 添加配置验证注解</li>
            <li>• 提供合理的默认值</li>
            <li>• 验证配置完整性</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">配置更新</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 实现优雅的配置更新</li>
            <li>• 记录配置变更历史</li>
            <li>• 支持配置回滚</li>
            <li>• 通知相关组件配置变更</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">安全考虑</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 加密敏感配置信息</li>
            <li>• 限制配置访问权限</li>
            <li>• 审计配置操作日志</li>
            <li>• 定期更新配置密钥</li>
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
            <h4 class="font-semibold text-gray-900">配置加载失败</h4>
            <p class="text-gray-700 text-sm">问题：配置文件无法加载或解析</p>
            <p class="text-gray-600 text-sm">解决：检查配置文件格式、路径和权限</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">配置值类型错误</h4>
            <p class="text-gray-700 text-sm">问题：配置值类型与期望不符</p>
            <p class="text-gray-600 text-sm">解决：使用正确的配置属性类型，添加类型转换</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">配置验证失败</h4>
            <p class="text-gray-700 text-sm">问题：配置验证规则不通过</p>
            <p class="text-gray-600 text-sm">解决：检查配置值范围和格式要求</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">配置缓存问题</h4>
            <p class="text-gray-700 text-sm">问题：配置更新后未生效</p>
            <p class="text-gray-600 text-sm">解决：检查缓存配置和缓存清理逻辑</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>