<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">注解说明</h1>
      <p class="text-lg text-gray-600 mb-8">
        详细介绍Brick BootKit框架提供的所有注解及其使用方法，帮助开发者快速构建插件。
      </p>
    </div>

    <!-- Overview -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">注解概述</h2>
      <div class="card space-y-4">
        <p class="text-gray-700">
          Brick BootKit提供了丰富的注解体系，用于插件开发、配置管理、权限控制等各个方面。
          通过这些注解，开发者可以快速构建功能完整的插件应用。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-semibold text-blue-900 mb-2">插件注解</h3>
            <p class="text-blue-700 text-sm">插件组件和控制器</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-900 mb-2">配置注解</h3>
            <p class="text-green-700 text-sm">配置参数注入</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="font-semibold text-purple-900 mb-2">权限注解</h3>
            <p class="text-purple-700 text-sm">权限验证和限制</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg">
            <h3 class="font-semibold text-orange-900 mb-2">监控注解</h3>
            <p class="text-orange-700 text-sm">性能监控指标</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Plugin Annotations -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件注解</h2>
      
      <!-- PluginComponent -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@PluginComponent</h3>
        <p class="text-gray-700">
          用于标识插件中的组件，支持Spring Bean的自动装配和管理。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginComponent
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List&lt;User&gt; getAllUsers() {
        return userRepository.findAll();
    }
}

// 支持构造函数注入
@PluginComponent
public class OrderService {
    
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    
    public OrderService(UserRepository userRepository, 
                       ProductRepository productRepository) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">特性说明：</h4>
        <ul class="space-y-2 text-gray-700">
          <li>• 支持@Scope("singleton")、@Scope("prototype")等作用域注解</li>
          <li>• 自动处理依赖注入和循环依赖</li>
          <li>• 支持JSR-330注解(@Inject、@Named等)</li>
          <li>• 提供插件级别的Bean管理</li>
        </ul>
      </div>

      <!-- PluginRestController -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@PluginRestController</h3>
        <p class="text-gray-700">
          插件REST控制器注解，继承Spring MVC的@RestController功能。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginRestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public List&lt;User&gt; getAllUsers() {
        return userService.getAllUsers();
    }
    
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
    
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        user.setId(id);
        return userService.updateUser(user);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity&lt;Void&gt; deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">URL访问规则：</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2">根据配置<code>enablePluginIdRestPathPrefix</code>的值：</p>
          <ul class="space-y-1 text-gray-700">
            <li>• <strong>true</strong>: <code>/plugins/{pluginId}/user</code></li>
            <li>• <strong>false</strong>: <code>/user</code> (可能有路径冲突风险)</li>
          </ul>
        </div>
      </div>

      <!-- PluginScheduled -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@PluginScheduled</h3>
        <p class="text-gray-700">
          插件定时任务注解，支持cron表达式和固定频率执行。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginComponent
public class ScheduledTaskService {
    
    // 每分钟执行一次
    @PluginScheduled(cron = "0 * * * * ?")
    public void perMinuteTask() {
        System.out.println("每分钟执行的任务: " + LocalDateTime.now());
    }
    
    // 每5秒执行一次
    @PluginScheduled(fixedRate = 5000)
    public void fixedRateTask() {
        System.out.println("固定频率任务: " + LocalDateTime.now());
    }
    
    // 上次任务完成后等待10秒再执行
    @PluginScheduled(fixedDelay = 10000)
    public void fixedDelayTask() {
        System.out.println("延迟执行任务: " + LocalDateTime.now());
        try {
            Thread.sleep(2000); // 模拟任务耗时
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    // 初始延迟3秒，然后每10秒执行
    @PluginScheduled(initialDelay = 3000, fixedRate = 10000)
    public void initialDelayTask() {
        System.out.println("初始延迟任务: " + LocalDateTime.now());
    }
    
    // 使用SpEL表达式配置定时任务
    @PluginScheduled(cron = "#{@cronExpression}")
    public void dynamicCronTask() {
        System.out.println("动态Cron任务: " + LocalDateTime.now());
    }
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">配置说明：</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-semibold text-gray-900 mb-2">Cron表达式格式：</h5>
            <pre><code class="text-sm">秒 分 时 日 月 星期
0 0 12 * * ?     // 每天12:00执行
0 */5 * * * ?    // 每5分钟执行
0 0 8-18/2 * * ? // 8点到18点每2小时执行
0 0 8 ? * MON    // 每周一8点执行</code></pre>
          </div>
          <div>
            <h5 class="font-semibold text-gray-900 mb-2">任务配置：</h5>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li>• <strong>cron</strong>: Cron表达式</li>
              <li>• <strong>fixedRate</strong>: 固定频率(毫秒)</li>
              <li>• <strong>fixedDelay</strong>: 固定延迟(毫秒)</li>
              <li>• <strong>initialDelay</strong>: 初始延迟(毫秒)</li>
              <li>• <strong>zone</strong>: 时区</li>
              <li>• <strong>enable</strong>: 是否启用</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Configuration Annotations -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置注解</h2>
      
      <!-- ConfigurationValue -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@ConfigurationValue</h3>
        <p class="text-gray-700">
          用于从插件配置文件或环境变量中注入配置值。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginComponent
public class ConfigService {
    
    // 从配置文件注入
    @ConfigurationValue("plugin.database.url")
    private String databaseUrl;
    
    @ConfigurationValue("plugin.database.username")
    private String username;
    
    @ConfigurationValue("plugin.database.password")
    private String password;
    
    // 带默认值
    @ConfigurationValue("plugin.cache.enabled", defaultValue = "true")
    private boolean cacheEnabled;
    
    @ConfigurationValue("plugin.cache.ttl", defaultValue = "300")
    private int cacheTtl;
    
    // 从环境变量注入
    @ConfigurationValue("${PLUGIN_ENV_VAR}")
    private String envVar;
    
    // 支持复杂类型
    @ConfigurationValue("plugin.whitelist.ips")
    private List&lt;String&gt; allowedIps;
    
    @ConfigurationValue("plugin.config")
    private Map&lt;String, Object&gt; configMap;
    
    // 方法注入
    @ConfigurationValue("plugin.retry.maxAttempts")
    public void setMaxRetries(@Value("3") int maxAttempts) {
        this.maxRetries = maxAttempts;
    }
    
    // 构造函数注入
    @ConfigurationValue("plugin.api.key")
    public ApiService(@Value("${api.timeout:5000}") int timeout,
                     @Value("true") boolean enableLogging) {
        this.timeout = timeout;
        this.enableLogging = enableLogging;
    }
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">配置文件格式：</h4>
        <pre><code class="yaml"># application.yml (插件配置)
plugin:
  database:
    url: jdbc:mysql://localhost:3306/mydb
    username: plugin_user
    password: ${DB_PASSWORD}  # 环境变量
    pool:
      maxSize: 20
      minSize: 5
  
  cache:
    enabled: true
    ttl: 300
    type: redis
  
  api:
    key: your-api-key
    timeout: 5000
  
  whitelist:
    ips:
      - 127.0.0.1
      - 192.168.1.0/24</code></pre>
      </div>

      <!-- ConfigProperties -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@ConfigProperties</h3>
        <p class="text-gray-700">
          用于将配置文件中的属性绑定到Java对象。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@ConfigProperties(prefix = "plugin.database")
public class DatabaseConfig {
    
    private String url;
    private String username;
    private String password;
    private PoolConfig pool = new PoolConfig();
    
    // getters and setters
    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
    
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    
    public PoolConfig getPool() { return pool; }
    public void setPool(PoolConfig pool) { this.pool = pool; }
    
    @ConfigProperties(prefix = "plugin.database.pool")
    public static class PoolConfig {
        private int maxSize = 20;
        private int minSize = 5;
        private long maxWait = 30000;
        
        // getters and setters
        public int getMaxSize() { return maxSize; }
        public void setMaxSize(int maxSize) { this.maxSize = maxSize; }
        
        public int getMinSize() { return minSize; }
        public void setMinSize(int minSize) { this.minSize = minSize; }
        
        public long getMaxWait() { return maxWait; }
        public void setMaxWait(long maxWait) { this.maxWait = maxWait; }
    }
}

// 使用配置属性
@PluginComponent
public class DatabaseService {
    
    @Autowired
    private DatabaseConfig databaseConfig;
    
    public void initialize() {
        System.out.println("数据库配置: " + databaseConfig.getUrl());
        System.out.println("连接池配置: " + databaseConfig.getPool().getMaxSize());
    }
}</code></pre>
      </div>

      <!-- DefaultValue -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@DefaultValue</h3>
        <p class="text-gray-700">
          为配置属性提供默认值，当配置文件缺失时使用。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@ConfigProperties(prefix = "plugin.settings")
public class SettingsConfig {
    
    @DefaultValue("8080")
    private int serverPort;
    
    @DefaultValue("localhost")
    private String serverHost;
    
    @DefaultValue("true")
    private boolean enableSecurity;
    
    @DefaultValue("INFO")
    private String logLevel;
    
    @DefaultValue("1000")
    private int maxConnections;
    
    // 数组类型默认值
    @DefaultValue("localhost,127.0.0.1")
    private List&lt;String&gt; allowedHosts;
    
    @DefaultValue("300") // 秒
    private long sessionTimeout;
    
    // getters and setters...
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">支持的数据类型：</h4>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ul class="space-y-1 text-gray-700 text-sm">
            <li>• 基本类型: int, long, double, boolean</li>
            <li>• 包装类型: Integer, Long, Double, Boolean</li>
            <li>• 字符串: String</li>
          </ul>
          <ul class="space-y-1 text-gray-700 text-sm">
            <li>• 集合: List&lt;T&gt;, Set&lt;T&gt;</li>
            <li>• Map: Map&lt;K,V&gt;</li>
            <li>• 枚举: Enum</li>
          </ul>
          <ul class="space-y-1 text-gray-700 text-sm">
            <li>• 复杂对象</li>
            <li>• TimeUnit</li>
            <li>• Duration</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Security Annotations -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">权限注解</h2>
      
      <!-- RequirePermission -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@RequirePermission</h3>
        <p class="text-gray-700">
          用于方法级别的权限验证，限制特定权限才能访问。
        </p>
        
        <h4 class="font-semibold text-gray-900">权限定义：</h4>
        <pre><code class="java">public enum Permission {
    // 插件管理权限
    PLUGIN_INSTALL("plugin:install", "安装插件"),
    PLUGIN_UNINSTALL("plugin:uninstall", "卸载插件"),
    PLUGIN_START("plugin:start", "启动插件"),
    PLUGIN_STOP("plugin:stop", "停止插件"),
    PLUGIN_UPDATE("plugin:update", "更新插件"),
    
    // 系统权限
    SYSTEM_CONFIG("system:config", "系统配置"),
    SYSTEM_MONITOR("system:monitor", "系统监控"),
    SYSTEM_AUDIT("system:audit", "系统审计"),
    
    // 数据权限
    DATA_READ("data:read", "读取数据"),
    DATA_WRITE("data:write", "写入数据"),
    DATA_DELETE("data:delete", "删除数据"),
    
    // 网络权限
    NETWORK_CONNECT("network:connect", "网络连接"),
    NETWORK_LISTEN("network:listen", "网络监听");
    
    private final String key;
    private final String description;
    
    Permission(String key, String description) {
        this.key = key;
        this.description = description;
    }
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginComponent
public class PluginManagementService {
    
    @RequirePermission(Permission.PLUGIN_INSTALL)
    public PluginInfo installPlugin(String pluginFile) {
        // 安装插件逻辑
        return pluginInstaller.install(pluginFile);
    }
    
    @RequirePermission(Permission.PLUGIN_UNINSTALL)
    public void uninstallPlugin(String pluginId) {
        // 卸载插件逻辑
        pluginManager.uninstall(pluginId);
    }
    
    @RequirePermission(Permission.PLUGIN_START)
    public void startPlugin(String pluginId) {
        // 启动插件逻辑
        pluginManager.start(pluginId);
    }
    
    @RequirePermission(Permission.PLUGIN_STOP)
    public void stopPlugin(String pluginId) {
        // 停止插件逻辑
        pluginManager.stop(pluginId);
    }
    
    // 组合权限要求
    @RequirePermission(Permission.DATA_WRITE)
    @RequirePermission(Permission.SYSTEM_CONFIG)
    public void updateConfiguration(Map&lt;String, Object&gt; config) {
        // 需要同时具备DATA_WRITE和SYSTEM_CONFIG权限
        configurationService.update(config);
    }
}</code></pre>
      </div>

      <!-- SecureConfiguration -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@SecureConfiguration</h3>
        <p class="text-gray-700">
          用于保护配置更新方法，只有具备特定权限的用户才能修改配置。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginComponent
public class ConfigurationService {
    
    @SecureConfiguration(permission = Permission.SYSTEM_CONFIG)
    public void updateSystemConfig(Map&lt;String, Object&gt; newConfig) {
        // 只有具备SYSTEM_CONFIG权限的插件才能修改系统配置
        validateConfiguration(newConfig);
        saveConfiguration(newConfig);
        logConfigurationChange(newConfig);
    }
    
    @SecureConfiguration(permission = Permission.DATA_WRITE, 
                       requireAdmin = true)
    public void updateDatabaseConfig(DatabaseConfig config) {
        // 需要DATA_WRITE权限且管理员级别的插件
        if (!isAdminPlugin()) {
            throw new AccessDeniedException("需要管理员权限");
        }
        databaseConfigService.update(config);
    }
    
    @SecureConfiguration(permission = Permission.NETWORK_CONNECT,
                       allowedHosts = {"localhost", "127.0.0.1"})
    public void configureNetwork(String host, int port) {
        // 限制只能连接到特定的Host
        if (!isHostAllowed(host)) {
            throw new AccessDeniedException("不允许连接到主机: " + host);
        }
        networkConfigService.update(host, port);
    }
}</code></pre>
      </div>
    </section>

    <!-- Monitoring Annotations -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">监控注解</h2>
      
      <!-- Monitored -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@Monitored</h3>
        <p class="text-gray-700">
          用于方法或类的性能监控，自动收集执行时间和调用次数。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginComponent
public class UserService {
    
    @Monitored("user.getAll")
    public List&lt;User&gt; getAllUsers() {
        // 性能监控: 执行时间、调用次数
        return userRepository.findAll();
    }
    
    @Monitored(value = "user.create", 
              tags = {"type=create", "layer=service"})
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    @Monitored(value = "user.search",
              tags = {"operation=search", "complexity=O(log n)"})
    public List&lt;User&gt; searchUsers(String keyword) {
        return userRepository.findByNameContaining(keyword);
    }
}

// 类级别监控
@Monitored(value = "order.service", 
          tags = {"component=order-service", "version=v1.0"})
@PluginComponent
public class OrderService {
    
    public void createOrder(Order order) {
        // 整个类的方法都会被监控
        validateOrder(order);
        processPayment(order);
        updateInventory(order);
        sendNotification(order);
    }
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">监控指标：</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul class="space-y-2 text-gray-700">
            <li>• <strong>执行时间</strong>: 方法平均、最大、最小执行时间</li>
            <li>• <strong>调用次数</strong>: 方法被调用的总次数</li>
            <li>• <strong>并发数</strong>: 同一时刻的并发调用数</li>
          </ul>
          <ul class="space-y-2 text-gray-700">
            <li>• <strong>错误率</strong>: 方法执行失败的百分比</li>
            <li>• <strong>吞吐量</strong>: 每秒处理请求数</li>
            <li>• <strong>自定义标签</strong>: 业务维度的监控指标</li>
          </ul>
        </div>
      </div>

      <!-- Timed -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@Timed</h3>
        <p class="text-gray-700">
          专门用于时间测量的注解，支持详细的时间统计。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginComponent
public class PerformanceService {
    
    @Timed(name = "database.query", 
          description = "数据库查询耗时")
    public List&lt;User&gt; queryUsers() {
        return userRepository.findAll();
    }
    
    @Timed(name = "api.call",
          description = "外部API调用时间",
          percentile = {50, 90, 95, 99})
    public String callExternalApi(String url) {
        return restTemplate.getForObject(url, String.class);
    }
    
    @Timed(name = "complex.operation",
          description = "复杂业务操作",
          histogram = true)
    public void complexBusinessLogic() {
        // 复杂的业务逻辑
        step1();
        step2();
        step3();
    }
}</code></pre>
      </div>

      <!-- Counted -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@Counted</h3>
        <p class="text-gray-700">
          用于计数统计，记录方法调用次数和特定事件的发生次数。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginComponent
public class MetricsService {
    
    @Counted(name = "api.requests",
            description = "API请求计数")
    public void handleRequest(HttpServletRequest request) {
        // 处理请求逻辑
        processRequest(request);
    }
    
    @Counted(name = "user.actions",
            description = "用户操作计数",
            tags = {"action=login"})
    public void userLogin(String username) {
        // 用户登录逻辑
        authenticateUser(username);
    }
    
    @Counted(name = "errors",
            description = "错误计数",
            tags = {"type=validation"})
    public void handleValidationError(String error) {
        // 验证错误处理
        log.error("验证失败: " + error);
    }
    
    @Counted(name = "cache.operations",
            description = "缓存操作计数",
            tags = {"operation=hits"})
    public Object getFromCache(String key) {
        return cache.get(key);
    }
}</code></pre>
      </div>

      <!-- Gauge -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@Gauge</h3>
        <p class="text-gray-700">
          用于测量指标，记录当前的状态值，如内存使用量、队列长度等。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginComponent
public class SystemMetricsService {
    
    @Gauge(name = "memory.usage",
          description = "内存使用量(MB)",
          tags = {"type=heap"})
    public double getHeapMemoryUsage() {
        MemoryMXBean memoryBean = ManagementFactory.getMemoryMXBean();
        return memoryBean.getHeapMemoryUsage().getUsed() / (1024 * 1024);
    }
    
    @Gauge(name = "thread.count",
          description = "活跃线程数")
    public int getActiveThreadCount() {
        ThreadMXBean threadBean = ManagementFactory.getThreadMXBean();
        return threadBean.getThreadCount();
    }
    
    @Gauge(name = "queue.size",
          description = "队列长度")
    public int getQueueSize() {
        return taskQueue.size();
    }
    
    @Gauge(name = "connection.pool.size",
          description = "数据库连接池大小")
    public int getConnectionPoolSize() {
        return dataSource.getHikariPoolMXBean().getActiveConnections();
    }
}</code></pre>
      </div>
    </section>

    <!-- Event Annotations -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">事件注解</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@EventListener</h3>
        <p class="text-gray-700">
          用于监听插件生命周期事件和自定义事件。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginComponent
public class EventHandler {
    
    // 监听插件启动事件
    @EventListener
    public void handlePluginStarted(PluginStartedEvent event) {
        String pluginId = event.getPluginId();
        log.info("插件启动完成: " + pluginId);
        
        // 可以在这里进行初始化操作
        initializePluginData(pluginId);
    }
    
    // 监听插件停止事件
    @EventListener
    public void handlePluginStopped(PluginStoppedEvent event) {
        String pluginId = event.getPluginId();
        log.info("插件停止: " + pluginId);
        
        // 清理资源
        cleanupResources(pluginId);
    }
    
    // 监听自定义事件
    @EventListener
    public void handleCustomEvent(CustomPluginEvent event) {
        String pluginId = event.getSource();
        String eventType = event.getType();
        Object data = event.getData();
        
        log.info("收到自定义事件: {} from plugin: {}", eventType, pluginId);
        
        // 处理自定义业务逻辑
        processCustomEvent(event);
    }
    
    // 监听系统事件
    @EventListener
    public void handleSystemEvent(SystemEvent event) {
        switch (event.getType()) {
            case SYSTEM_SHUTDOWN:
                handleSystemShutdown();
                break;
            case SYSTEM_RESTART:
                handleSystemRestart();
                break;
            case CONFIG_CHANGED:
                handleConfigChanged(event.getConfig());
                break;
        }
    }
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">事件类型：</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-semibold text-gray-900 mb-2">插件生命周期事件：</h5>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li>• PluginInstallEvent - 插件安装</li>
              <li>• PluginStartedEvent - 插件启动</li>
              <li>• PluginStoppedEvent - 插件停止</li>
              <li>• PluginUninstalledEvent - 插件卸载</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-gray-900 mb-2">系统事件：</h5>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li>• SystemShutdownEvent - 系统关闭</li>
              <li>• SystemRestartEvent - 系统重启</li>
              <li>• ConfigChangedEvent - 配置变更</li>
              <li>• CustomPluginEvent - 自定义事件</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Conditional Annotations -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">条件注解</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@ConditionalOnProperty</h3>
        <p class="text-gray-700">
          根据配置属性值决定是否创建Bean或执行方法。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginComponent
public class ConditionalConfigService {
    
    // 当 plugin.feature.cache.enabled = true 时创建
    @ConditionalOnProperty(name = "plugin.feature.cache.enabled", 
                         havingValue = "true")
    @Bean
    public CacheService cacheService() {
        return new RedisCacheService();
    }
    
    // 当 plugin.feature.cache.enabled = false 或不存在时创建
    @ConditionalOnProperty(name = "plugin.feature.cache.enabled", 
                         havingValue = "false")
    @Bean
    public CacheService simpleCacheService() {
        return new SimpleCacheService();
    }
    
    // 当 plugin.database.type = mysql 时创建
    @ConditionalOnProperty(name = "plugin.database.type", 
                         havingValue = "mysql")
    @Bean
    public DatabaseService mysqlDatabaseService() {
        return new MySqlDatabaseService();
    }
    
    // 当 plugin.database.type = postgresql 时创建
    @ConditionalOnProperty(name = "plugin.database.type", 
                         havingValue = "postgresql")
    @Bean
    public DatabaseService postgresqlDatabaseService() {
        return new PostgreSqlDatabaseService();
    }
    
    // 方法级别条件注解
    @ConditionalOnProperty(name = "plugin.feature.metrics.enabled", 
                         havingValue = "true")
    public void enableMetrics() {
        metricsService.start();
    }
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@ConditionalOnBean</h3>
        <p class="text-gray-700">
          当指定类型的Bean存在时才创建当前Bean。
        </p>
        
        <h4 class="font-semibold text-gray-900">使用示例：</h4>
        <pre><code class="java">@PluginComponent
public class AutoConfiguration {
    
    // 当存在UserService Bean时创建UserController
    @ConditionalOnBean(UserService.class)
    @Bean
    public UserController userController(UserService userService) {
        return new UserController(userService);
    }
    
    // 当存在RedisTemplate Bean时创建CacheService
    @ConditionalOnBean(name = "redisTemplate")
    @Bean
    public CacheService redisCacheService(RedisTemplate redisTemplate) {
        return new RedisCacheService(redisTemplate);
    }
    
    // 当存在DataSource Bean时创建DatabaseService
    @ConditionalOnBean(DataSource.class)
    @Bean
    public DatabaseService databaseService(DataSource dataSource) {
        return new DatabaseServiceImpl(dataSource);
    }
    
    // 方法级别条件注解
    @ConditionalOnBean(JpaRepository.class)
    public void initializeRepository() {
        repositoryManager.initialize();
    }
}</code></pre>
      </div>
    </section>

    <!-- Custom Annotations -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">自定义注解</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">定义自定义注解</h3>
        <p class="text-gray-700">
          开发者可以根据业务需求定义自己的注解。
        </p>
        
        <h4 class="font-semibold text-gray-900">示例：业务日志注解</h4>
        <pre><code class="java">// 定义注解
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface BusinessLog {
    
    String value() default "";
    
    LogLevel level() default LogLevel.INFO;
    
    boolean includeParams() default false;
    
    boolean includeResult() default false;
}

// 注解处理器
@Aspect
@Component
@PluginComponent
public class BusinessLogAspect {
    
    @Around("@annotation(businessLog)")
    public Object logBusinessOperation(ProceedingJoinPoint joinPoint, 
                                     BusinessLog businessLog) throws Throwable {
        
        long startTime = System.currentTimeMillis();
        String methodName = joinPoint.getSignature().getName();
        
        // 记录方法参数
        if (businessLog.includeParams()) {
            Object[] args = joinPoint.getArgs();
            log.debug("方法参数: {} = {}", methodName, Arrays.toString(args));
        }
        
        try {
            // 执行方法
            Object result = joinPoint.proceed();
            
            // 记录成功日志
            long duration = System.currentTimeMillis() - startTime;
            log.log(businessLog.level(), 
                   "业务操作: {} 执行成功，耗时: {}ms", methodName, duration);
            
            // 记录返回结果
            if (businessLog.includeResult()) {
                log.debug("方法返回: {} = {}", methodName, result);
            }
            
            return result;
            
        } catch (Exception e) {
            // 记录错误日志
            log.error("业务操作: {} 执行失败: {}", methodName, e.getMessage(), e);
            throw e;
        }
    }
    
    public enum LogLevel {
        DEBUG, INFO, WARN, ERROR
    }
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">使用自定义注解：</h4>
        <pre><code class="java">@PluginComponent
public class OrderService {
    
    @BusinessLog(value = "创建订单", 
                level = LogLevel.INFO,
                includeParams = true)
    public Order createOrder(OrderRequest request) {
        // 创建订单逻辑
        Order order = new Order();
        order.setUserId(request.getUserId());
        order.setAmount(request.getAmount());
        // ... 其他逻辑
        return orderRepository.save(order);
    }
    
    @BusinessLog(value = "支付订单", 
                level = LogLevel.WARN,
                includeParams = true,
                includeResult = true)
    public PaymentResult payOrder(Long orderId, PaymentRequest request) {
        // 支付逻辑
        return paymentService.processPayment(orderId, request);
    }
}</code></pre>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">最佳实践</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">注解使用建议</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 合理使用注解，保持代码简洁</li>
            <li>• 避免过度注解导致性能问题</li>
            <li>• 注解参数要有默认值</li>
            <li>• 使用有意义的注解名称</li>
            <li>• 及时更新注解文档</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">性能优化</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 避免在注解中进行复杂计算</li>
            <li>• 监控注解的执行性能</li>
            <li>• 合理设置缓存策略</li>
            <li>• 异步处理监控和日志</li>
            <li>• 避免循环依赖和无限递归</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">安全考虑</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 使用权限注解保护敏感操作</li>
            <li>• 验证注解参数的有效性</li>
            <li>• 避免在注解中暴露敏感信息</li>
            <li>• 定期审计权限配置</li>
            <li>• 记录权限检查日志</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">测试建议</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 为自定义注解编写单元测试</li>
            <li>• 测试注解处理器的逻辑</li>
            <li>• 验证配置注入的正确性</li>
            <li>• 测试权限验证的功能</li>
            <li>• 集成测试验证完整流程</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Troubleshooting -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">常见问题</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">常见问题解决</h3>
        
        <h4 class="font-semibold text-gray-900">1. 注解无法正常工作</h4>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p class="text-yellow-700"><strong>问题：</strong>自定义注解没有生效</p>
          <p class="text-yellow-700"><strong>解决：</strong></p>
          <ul class="mt-2 text-yellow-700 text-sm">
            <li>• 检查是否添加了@Aspect和@Component注解</li>
            <li>• 确认切点表达式正确</li>
            <li>• 检查组件扫描路径</li>
            <li>• 验证Spring Boot自动配置是否启用</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-gray-900">2. 配置注入失败</h4>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p class="text-yellow-700"><strong>问题：</strong>@ConfigurationValue注解无法注入配置值</p>
          <p class="text-yellow-700"><strong>解决：</strong></p>
          <ul class="mt-2 text-yellow-700 text-sm">
            <li>• 检查配置文件格式和路径</li>
            <li>• 确认配置键名拼写正确</li>
            <li>• 验证数据类型匹配</li>
            <li>• 检查是否存在循环依赖</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-gray-900">3. 权限验证失败</h4>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p class="text-yellow-700"><strong>问题：</strong>@RequirePermission注解总是抛出权限异常</p>
          <p class="text-yellow-700"><strong>解决：</strong></p>
          <ul class="mt-2 text-yellow-700 text-sm">
            <li>• 检查插件权限配置</li>
            <li>• 验证Permission枚举值</li>
            <li>• 确认权限检查器正常工作</li>
            <li>• 查看审计日志定位问题</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-gray-900">4. 监控指标异常</h4>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p class="text-yellow-700"><strong>问题：</strong>@Monitored注解收集不到监控数据</p>
          <p class="text-yellow-700"><strong>解决：</strong></p>
          <ul class="mt-2 text-yellow-700 text-sm">
            <li>• 检查监控服务是否正常启动</li>
            <li>• 确认监控配置正确</li>
            <li>• 验证指标上报端点</li>
            <li>• 检查防火墙和网络设置</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>