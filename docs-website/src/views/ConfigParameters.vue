<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">配置参数</h1>
      <p class="text-lg text-gray-600 mb-8">
        详细介绍Brick BootKit框架的所有配置参数，包括主程序配置、插件配置、性能监控、安全设置等各个方面。
      </p>
    </div>

    <!-- Overview -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置参数概述</h2>
      <div class="card space-y-4">
        <p class="text-gray-700">
          Brick BootKit通过配置参数实现灵活的系统定制和插件管理。
          所有配置项都支持环境变量注入、默认值设置和动态更新。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-semibold text-blue-900 mb-2">主程序配置</h3>
            <p class="text-blue-700 text-sm">系统级配置参数</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-900 mb-2">插件配置</h3>
            <p class="text-green-700 text-sm">插件专用配置项</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="font-semibold text-purple-900 mb-2">性能配置</h3>
            <p class="text-purple-700 text-sm">监控和优化参数</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg">
            <h3 class="font-semibold text-orange-900 mb-2">安全配置</h3>
            <p class="text-orange-700 text-sm">权限和安全设置</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Program Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">主程序配置</h2>
      
      <!-- Basic Configuration -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">基本配置</h3>
        
        <h4 class="font-semibold text-gray-900">plugin.runMode</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>插件运行模式</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>String</p>
          <p class="text-gray-700 mb-2"><strong>可选值：</strong>dev, prod</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>dev</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  runMode: prod</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>dev模式提供开发友好的功能，prod模式优化性能和安全性</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.mainPackage</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>主程序扫描包名，用于插件发现</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>String</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>com.example.main</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  mainPackage: com.company.main</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>插件加载器会扫描此包及其子包下的组件</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.enablePluginIdRestPathPrefix</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用插件ID作为REST接口路径前缀</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  enablePluginIdRestPathPrefix: true</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>true时URL为/plugins/user-service/user，false时为/user（可能有冲突）</p>
        </div>
      </div>

      <!-- Plugin Path Configuration -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件路径配置</h3>
        
        <h4 class="font-semibold text-gray-900">plugin.pluginPath</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>插件文件存放路径列表</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>List&lt;String&gt;</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  pluginPath:
    - D://project/plugins
    - ./plugins-dev
    - /opt/plugins</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>支持多个路径，插件加载器会依次扫描这些目录</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.pluginScanInterval</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>插件目录扫描间隔时间（毫秒）</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Integer</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>30000 (30秒)</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  pluginScanInterval: 60000  # 1分钟</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>用于监控插件目录变化，自动发现新插件或插件更新</p>
        </div>
      </div>

      <!-- Management Configuration -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">管理接口配置</h3>
        
        <h4 class="font-semibold text-gray-900">plugin.management.port</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>插件管理接口端口</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Integer</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>8081</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  management:
    port: 8081</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>插件管理REST API的监听端口</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.management.contextPath</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>管理接口的上下文路径</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>String</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>/api</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  management:
    contextPath: /plugin-api</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>管理API的基础路径，最终URL为 http://host:port/contextPath</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.management.security.enabled</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用管理接口安全认证</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>false</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  management:
    security:
      enabled: true
      token: ${MANAGEMENT_TOKEN}</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>启用后需要Token认证访问管理接口</p>
        </div>
      </div>
    </section>

    <!-- Plugin Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件配置</h2>
      
      <!-- Plugin Lifecycle -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件生命周期配置</h3>
        
        <h4 class="font-semibold text-gray-900">plugin.lifecycle.startTimeout</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>插件启动超时时间（毫秒）</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Integer</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>60000 (1分钟)</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  lifecycle:
    startTimeout: 120000  # 2分钟</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>插件启动超过此时间将被标记为启动失败</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.lifecycle.stopTimeout</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>插件停止超时时间（毫秒）</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Integer</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>30000 (30秒)</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  lifecycle:
    stopTimeout: 60000  # 1分钟</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>插件停止超过此时间将被强制终止</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.lifecycle.autoStart</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>插件安装后是否自动启动</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  lifecycle:
    autoStart: false</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>设置为false后需要手动启动插件</p>
        </div>
      </div>

      <!-- Plugin Isolation -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件隔离配置</h3>
        
        <h4 class="font-semibold text-gray-900">plugin.isolation.enabled</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用插件隔离</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  isolation:
    enabled: true
    classLoaderType: ISOLATED</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>禁用后所有插件在同一个类加载器中运行</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.isolation.memoryLimit</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>单个插件内存使用限制</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>String</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>256MB</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  isolation:
    memoryLimit: 512MB</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>格式支持KB、MB、GB，超出限制的插件将被重启</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.isolation.threadLimit</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>单个插件线程数量限制</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Integer</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>50</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  isolation:
    threadLimit: 100</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>防止插件创建过多线程影响系统性能</p>
        </div>
      </div>
    </section>

    <!-- Performance Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">性能监控配置</h2>
      
      <!-- Monitoring Settings -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">监控设置</h3>
        
        <h4 class="font-semibold text-gray-900">plugin.monitoring.enabled</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用性能监控</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  monitoring:
    enabled: true
    collectionInterval: 30s</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>关闭后不再收集性能指标数据</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.monitoring.metrics</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>监控指标配置</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Map&lt;String, Object&gt;</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  monitoring:
    metrics:
      jvm:
        enabled: true
        memory: true
        gc: true
        threads: true
      plugin:
        enabled: true
        executionTime: true
        errorRate: true
        throughput: true
      system:
        enabled: true
        cpu: true
        disk: true
        network: true</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>可以精确控制收集哪些指标</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.monitoring.export</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>监控数据导出配置</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  monitoring:
    export:
      prometheus:
        enabled: true
        port: 9090
        path: /metrics
      influxdb:
        enabled: false
        url: http://localhost:8086
        database: plugin_metrics
      elasticsearch:
        enabled: false
        hosts: localhost:9200
        index: plugin-metrics</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>支持多种监控数据导出格式</p>
        </div>
      </div>

      <!-- Performance Tuning -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">性能调优</h3>
        
        <h4 class="font-semibold text-gray-900">plugin.performance.classLoadingCache</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>类加载器缓存配置</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  performance:
    classLoadingCache:
      enabled: true
      maxSize: 1000
      ttl: 3600s</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>缓存已加载的类以提高类加载性能</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.performance.resourcePool</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>资源池配置</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  performance:
    resourcePool:
      threadPool:
        coreSize: 10
        maxSize: 50
        queueSize: 1000
      connectionPool:
        maxSize: 20
        minSize: 5
        maxWait: 30s</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>管理插件使用的各种资源池</p>
        </div>
      </div>
    </section>

    <!-- Security Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">安全配置</h2>
      
      <!-- Security Settings -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">安全设置</h3>
        
        <h4 class="font-semibold text-gray-900">plugin.security.enabled</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用安全机制</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  security:
    enabled: true
    strictMode: false</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>严格模式下会拒绝所有未明确授权的操作</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.security.permissions</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>权限配置</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  security:
    permissions:
      default:
        - data:read
        - system:monitor
      admin:
        - "*"
      trusted:
        - plugin:*
        - system:*
        - data:*</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>定义不同信任级别的默认权限</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.security.network</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>网络安全配置</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  security:
    network:
      allowedHosts:
        - localhost
        - 127.0.0.1
        - "*.company.com"
      blockedPorts:
        - 22    # SSH
        - 3389  # RDP
      maxConnections: 100</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>控制插件的网络访问权限</p>
        </div>
      </div>
    </section>

    <!-- Database Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">数据库配置</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件数据库配置</h3>
        
        <h4 class="font-semibold text-gray-900">plugin.database.enabled</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用插件数据库功能</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  database:
    enabled: true
    type: h2
    connectionPool:
      maximumPoolSize: 20
      minimumIdle: 5
      connectionTimeout: 30s</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>每个插件可以有独立的数据库实例</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.database.h2</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>H2数据库配置</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  database:
    h2:
      mode: file
      dbName: plugin_db
      location: ./data/plugins
      options:
        AUTO_SERVER: "TRUE"
        CACHE_SIZE: 65536</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>轻量级数据库，适合开发和小型应用</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.database.mysql</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>MySQL数据库配置</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  database:
    mysql:
      url: jdbc:mysql://localhost:3306/plugin_db
      username: ${DB_USERNAME}
      password: ${DB_PASSWORD}
      driverClassName: com.mysql.cj.jdbc.Driver
      pool:
        maximumPoolSize: 20
        minimumIdle: 5
        connectionTimeout: 30s
        idleTimeout: 600000
        maxLifetime: 1800000</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>生产环境推荐使用MySQL等关系型数据库</p>
        </div>
      </div>
    </section>

    <!-- Logging Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">日志配置</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">日志设置</h3>
        
        <h4 class="font-semibold text-gray-900">plugin.logging.enabled</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用插件日志</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>true</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  logging:
    enabled: true
    level: INFO
    pattern: "%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n"</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>每个插件有独立的日志配置</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.logging.file</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>日志文件配置</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  logging:
    file:
      name: ./logs/plugins.log
      maxSize: 100MB
      maxHistory: 30
      totalSize: 1GB</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>支持日志文件轮转和归档</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.logging.plugins</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>特定插件日志配置</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Map&lt;String, Object&gt;</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  logging:
    plugins:
      user-service:
        level: DEBUG
        file:
          name: ./logs/user-service.log
      order-service:
        level: WARN
        file:
          name: ./logs/order-service.log</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>可以为特定插件单独设置日志级别和文件</p>
        </div>
      </div>
    </section>

    <!-- Advanced Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">高级配置</h2>
      
      <!-- Hot Reload -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">热更新配置</h3>
        
        <h4 class="font-semibold text-gray-900">plugin.hotReload.enabled</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用插件热更新</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>false (prod模式), true (dev模式)</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  hotReload:
    enabled: true
    watchPaths:
      - src/main/java
      - src/main/resources
    excludePaths:
      - "*.class"
      - "*.jar"</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>开发模式下自动检测文件变化并重新加载插件</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.hotReload.debounceTime</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>文件变化防抖时间（毫秒）</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Integer</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>3000 (3秒)</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  hotReload:
    debounceTime: 5000  # 5秒</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>防止频繁的文件变化触发多次重载</p>
        </div>
      </div>

      <!-- Development Tools -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">开发工具配置</h3>
        
        <h4 class="font-semibold text-gray-900">plugin.devTools.enabled</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>是否启用开发工具</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Boolean</p>
          <p class="text-gray-700 mb-2"><strong>默认值：</strong>false (prod模式), true (dev模式)</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  devTools:
    enabled: true
    webInterface:
      enabled: true
      port: 9090
    remoteDebug:
      enabled: false
      port: 5005</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>提供Web界面和远程调试功能</p>
        </div>

        <h4 class="font-semibold text-gray-900">plugin.devTools.debug</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700 mb-2"><strong>说明：</strong>调试配置</p>
          <p class="text-gray-700 mb-2"><strong>类型：</strong>Object</p>
          <p class="text-gray-700 mb-2"><strong>示例值：</strong></p>
          <pre><code class="yaml">plugin:
  devTools:
    debug:
      enabled: true
      verbose: true
      logClassLoading: true
      logMethodCalls: false</code></pre>
          <p class="text-gray-700"><strong>说明：</strong>详细的调试信息，帮助定位问题</p>
        </div>
      </div>
    </section>

    <!-- Environment Variables -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">环境变量支持</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">环境变量配置</h3>
        <p class="text-gray-700">
          Brick BootKit支持通过环境变量覆盖配置文件中的值：
        </p>
        
        <h4 class="font-semibold text-gray-900">语法格式：</h4>
        <pre><code class="yaml">plugin:
  runMode: ${PLUGIN_RUN_MODE:dev}      # 默认值为 dev
  management:
    port: ${PLUGIN_MANAGEMENT_PORT}    # 无默认值
  database:
    password: ${DB_PASSWORD}            # 无默认值</code></pre>
        
        <h4 class="font-semibold text-gray-900">常用环境变量：</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 class="font-semibold text-gray-900 mb-2">基本配置：</h5>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li>• PLUGIN_RUN_MODE - 插件运行模式</li>
              <li>• PLUGIN_MAIN_PACKAGE - 主程序包名</li>
              <li>• PLUGIN_MANAGEMENT_PORT - 管理接口端口</li>
              <li>• PLUGIN_MANAGEMENT_TOKEN - 管理接口Token</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-gray-900 mb-2">数据库配置：</h5>
            <ul class="space-y-1 text-gray-700 text-sm">
              <li>• DB_USERNAME - 数据库用户名</li>
              <li>• DB_PASSWORD - 数据库密码</li>
              <li>• DB_URL - 数据库连接URL</li>
              <li>• DB_DRIVER - 数据库驱动</li>
            </ul>
          </div>
        </div>
        
        <h4 class="font-semibold text-gray-900">设置环境变量示例：</h4>
        <pre><code class="bash"># Linux/Mac
export PLUGIN_RUN_MODE=prod
export PLUGIN_MANAGEMENT_PORT=8081
export DB_USERNAME=plugin_user
export DB_PASSWORD=secure_password

# Windows
set PLUGIN_RUN_MODE=prod
set PLUGIN_MANAGEMENT_PORT=8081

# Docker
docker run -e PLUGIN_RUN_MODE=prod -e DB_PASSWORD=secure_password myapp</code></pre>
      </div>
    </section>

    <!-- Configuration Best Practices -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置最佳实践</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">开发环境配置</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 启用热更新和开发工具</li>
            <li>• 使用DEBUG级别的日志</li>
            <li>• 禁用严格的安全模式</li>
            <li>• 使用H2内存数据库</li>
            <li>• 启用详细的性能监控</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">生产环境配置</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 关闭热更新和开发工具</li>
            <li>• 使用WARN/ERROR级别的日志</li>
            <li>• 启用严格的安全模式</li>
            <li>• 使用MySQL/PostgreSQL数据库</li>
            <li>• 配置日志文件轮转</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">安全考虑</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 使用强密码和加密存储</li>
            <li>• 限制网络访问范围</li>
            <li>• 定期更新和轮转密钥</li>
            <li>• 审计权限配置</li>
            <li>• 监控异常访问</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">性能优化</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 合理设置内存和线程限制</li>
            <li>• 配置连接池参数</li>
            <li>• 启用类加载器缓存</li>
            <li>• 调优JVM参数</li>
            <li>• 监控资源使用情况</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Troubleshooting -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置问题排查</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">常见问题解决</h3>
        
        <h4 class="font-semibold text-gray-900">1. 配置不生效</h4>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p class="text-yellow-700"><strong>问题：</strong>修改配置后没有生效</p>
          <p class="text-yellow-700"><strong>解决：</strong></p>
          <ul class="mt-2 text-yellow-700 text-sm">
            <li>• 检查配置文件格式和路径</li>
            <li>• 确认环境变量名称正确</li>
            <li>• 重启应用程序</li>
            <li>• 查看启动日志中的配置加载信息</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-gray-900">2. 插件启动失败</h4>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p class="text-yellow-700"><strong>问题：</strong>插件因为配置问题无法启动</p>
          <p class="text-yellow-700"><strong>解决：</strong></p>
          <ul class="mt-2 text-yellow-700 text-sm">
            <li>• 检查插件特有的配置项</li>
            <li>• 验证数据库连接配置</li>
            <li>• 查看插件启动日志</li>
            <li>• 检查权限和资源限制</li>
          </ul>
        </div>
        
        <h4 class="font-semibold text-gray-900">3. 性能问题</h4>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p class="text-yellow-700"><strong>问题：</strong>系统性能不佳</p>
          <p class="text-yellow-700"><strong>解决：</strong></p>
          <ul class="mt-2 text-yellow-700 text-sm">
            <li>• 检查内存和线程配置</li>
            <li>• 调整连接池参数</li>
            <li>• 优化监控指标收集频率</li>
            <li>• 调整日志级别减少I/O</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>