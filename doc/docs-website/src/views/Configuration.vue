<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">配置详细说明</h1>
      <p class="text-lg text-gray-600 mb-8">
        详细介绍主程序的配置选项，包括基础配置、高级配置和运行模式设置。
      </p>
    </div>

    <!-- Basic Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">基础配置</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">基本配置示例</h3>
        <p class="text-gray-700">以下是一个完整的基础配置示例：</p>
        <pre><code>plugin:
  # 运行模式：dev(开发环境) 或 prod(生产环境)
  runMode: dev
  
  # 主程序扫描的包名
  mainPackage: com.example.yourapp
  
  # 插件目录路径，支持多个路径
  pluginPath:
    - D://project/plugins
    - D://project/plugin-repository
  
  # 主程序版本（可选）
  version: 1.0.0
  
  # 是否启用插件ID作为访问路径前缀
  enablePluginIdRestPathPrefix: true</code></pre>
      </div>
    </section>

    <!-- Run Mode -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">运行模式</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">开发模式 (dev)</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
              适用于IDEA环境开发调试
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
              直接加载编译后的插件classes目录
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
              支持热部署，修改插件后无需重新打包
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
              日志信息更详细，便于调试
            </li>
          </ul>
          <div class="mt-4 bg-green-50 border-l-4 border-green-400 p-4">
            <p class="text-green-700 text-sm">仅适用于开发环境，不适用于生产环境</p>
          </div>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">生产模式 (prod)</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              适用于生产环境部署
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              只能加载打包后的插件（jar、zip等）
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              更严格的插件验证和安全检查
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              优化了性能和资源占用
            </li>
          </ul>
          <div class="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4">
            <p class="text-blue-700 text-sm">生产环境的推荐模式</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">高级配置</h2>
      
      <div class="space-y-6">
        <div class="card space-y-4">
          <h3 class="text-xl font-semibold text-gray-900">安全配置</h3>
          <pre><code>plugin:
  security:
    # 是否启用安全扫描
    enableScan: true
    
    # 安全扫描模式：STRICT(严格)、NORMAL(普通)、LENIENT(宽松)
    scanMode: NORMAL
    
    # 是否启用插件签名验证
    enableSignature: false
    
    # 最大插件大小限制（MB）
    maxPluginSize: 100</code></pre>
        </div>

        <div class="card space-y-4">
          <h3 class="text-xl font-semibold text-gray-900">性能监控配置</h3>
          <pre><code>plugin:
  monitoring:
    # 是否启用性能监控
    enable: true
    
    # 监控指标收集间隔（秒）
    metricsInterval: 60
    
    # 是否记录插件执行日志
    enableExecutionLog: true
    
    # 慢执行阈值（毫秒）
    slowExecutionThreshold: 1000</code></pre>
        </div>

        <div class="card space-y-4">
          <h3 class="text-xl font-semibold text-gray-900">资源限制配置</h3>
          <pre><code>plugin:
  resource:
    # 最大内存限制（MB）
    maxMemory: 512
    
    # 最大线程数
    maxThreads: 10
    
    # 是否启用资源限制
    enableLimits: false</code></pre>
        </div>
      </div>
    </section>

    <!-- Plugin Path Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件路径配置</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">支持的路径格式</h3>
        <p class="text-gray-700 mb-4">pluginPath支持多种路径格式：</p>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="inline-block w-6 h-6 bg-primary-100 text-primary-600 rounded-full text-xs text-center leading-6 font-bold mr-3 mt-0.5">1</span>
            <div>
              <strong>绝对路径：</strong>
              <code>D://project/plugins</code>
              <code>/usr/local/plugins</code>
            </div>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-6 h-6 bg-primary-100 text-primary-600 rounded-full text-xs text-center leading-6 font-bold mr-3 mt-0.5">2</span>
            <div>
              <strong>相对路径：</strong>
              <code>./plugins</code>
              <code>../external-plugins</code>
            </div>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-6 h-6 bg-primary-100 text-primary-600 rounded-full text-xs text-center leading-6 font-bold mr-3 mt-0.5">3</span>
            <div>
              <strong>环境变量：</strong>
              <code>${PLUGIN_HOME}/plugins</code>
            </div>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-6 h-6 bg-primary-100 text-primary-600 rounded-full text-xs text-center leading-6 font-bold mr-3 mt-0.5">4</span>
            <div>
              <strong>网络路径（生产环境）：</strong>
              <code>http://plugins.example.com/repository</code>
            </div>
          </li>
        </ul>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">目录结构要求</h3>
        <p class="text-gray-700 mb-4">插件目录的结构要求：</p>
        <pre><code>plugins/                    # 插件根目录
├── plugin-example-1.0.0-SNAPSHOT/    # 开发模式插件目录
│   ├── target/classes/               # 编译后的类文件
│   └── target/lib/                   # 插件依赖的jar文件
├── plugin-example-1.0.0-SNAPSHOT.jar # 生产模式插件jar包
├── plugin-another-1.0.0.zip         # 生产模式插件zip包
└── plugin-repository/               # 插件仓库目录
    └── official/                     # 官方插件目录
        └── plugin-official-1.0.0.jar</code></pre>
      </div>
    </section>

    <!-- Logging Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">日志配置</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件日志跟随主程序配置</h3>
        <p class="text-gray-700 mb-4">插件的日志可以配置为跟随主程序的日志配置：</p>
        <pre><code>plugin:
  logging:
    # 是否跟随主程序日志配置
    inheritFromMain: true
    
    # 插件日志级别
    level: INFO
    
    # 插件日志文件路径
    file: logs/plugins.log
    
    # 插件日志格式
    pattern: "%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n"</code></pre>
        
        <div class="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p class="text-yellow-700 text-sm">
            <strong>注意：</strong>在SpringBoot 2.6.0+版本中，可能需要额外配置以避免swagger相关错误。
          </p>
        </div>
      </div>
    </section>

    <!-- Configuration Validation -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置验证</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置验证规则</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">配置项</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">是否必需</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">runMode</td>
                <td class="px-6 py-4 text-sm text-gray-500">String</td>
                <td class="px-6 py-4 text-sm text-gray-500">是</td>
                <td class="px-6 py-4 text-sm text-gray-500">-</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">mainPackage</td>
                <td class="px-6 py-4 text-sm text-gray-500">String</td>
                <td class="px-6 py-4 text-sm text-gray-500">是</td>
                <td class="px-6 py-4 text-sm text-gray-500">-</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">pluginPath</td>
                <td class="px-6 py-4 text-sm text-gray-500">List&lt;String&gt;</td>
                <td class="px-6 py-4 text-sm text-gray-500">是</td>
                <td class="px-6 py-4 text-sm text-gray-500">-</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">enablePluginIdRestPathPrefix</td>
                <td class="px-6 py-4 text-sm text-gray-500">Boolean</td>
                <td class="px-6 py-4 text-sm text-gray-500">否</td>
                <td class="px-6 py-4 text-sm text-gray-500">true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Configuration Tips -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置建议</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">开发环境建议</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 使用dev模式进行开发调试</li>
            <li>• 配置详细的日志级别</li>
            <li>• 启用性能监控和执行日志</li>
            <li>• 使用本地插件目录</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">生产环境建议</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 使用prod模式确保稳定性</li>
            <li>• 禁用开发相关的功能</li>
            <li>• 启用安全扫描和签名验证</li>
            <li>• 配置资源限制</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>