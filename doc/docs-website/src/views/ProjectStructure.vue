<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">项目目录结构</h1>
      <p class="text-lg text-gray-600 mb-8">
        详细介绍Brick BootKit SpringBoot项目的目录结构、各模块作用和组织方式。
      </p>
    </div>

    <!-- Root Structure -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">根目录结构</h2>
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">主项目根目录</h3>
        <pre><code>brick-bootkit-springboot/
├── spring-boot3-brick-bootkit/          # 主程序启动器模块
├── spring-boot3-brick-bootkit-bootstrap/  # 插件启动器模块
├── spring-boot3-brick-bootkit-core/      # 核心功能模块
├── spring-boot3-brick-bootkit-common/    # 公共组件模块
├── spring-boot3-brick-bootkit-loader/    # 类加载器模块
├── spring-boot3-brick-bootkit-maven-packager/  # Maven打包插件模块
├── doc/                                  # 文档目录
│   ├── docs-website/                     # 文档网站
│   └── updates/                          # 更新日志
├── .git/                                 # Git版本控制
├── .idea/                                # IntelliJ IDEA配置
├── pom.xml                               # 主项目POM文件
├── LICENSE                               # Apache 2.0许可证
├── readme.md                             # 项目说明文档
├── check-version.sh                      # 版本检查脚本
├── update-version.sh                     # 版本更新脚本
├── checkstyle.xml                        # 代码风格配置
├── pmd-ruleset.xml                       # PMD代码分析规则
└── sonar-project.properties              # SonarQube配置</code></pre>
      </div>
    </section>

    <!-- Module Structure -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">模块结构</h2>
      
      <!-- Main Module -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">spring-boot3-brick-bootkit (主程序启动器)</h3>
        <p class="text-gray-700">主程序的启动器，提供Spring Boot集成和插件管理功能。</p>
        <pre><code>spring-boot3-brick-bootkit/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/zqzqq/bootkits/
│   │   │       └── auto/                    # 自动配置类
│   │   └── resources/
│   │       └── META-INF/
│   │           └── spring.factories         # Spring Boot自动配置
│   └── test/                               # 测试代码
├── pom.xml                                # 模块POM文件
└── README.md                              # 模块说明</code></pre>
      </div>

      <!-- Bootstrap Module -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">spring-boot3-brick-bootkit-bootstrap (插件启动器)</h3>
        <p class="text-gray-700">插件的启动器，提供插件环境初始化和生命周期管理。</p>
        <pre><code>spring-boot3-brick-bootkit-bootstrap/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/zqzqq/bootkits/bootstrap/
│   │   │       ├── annotation/               # 插件相关注解
│   │   │       ├── coexist/                 # 插件共存处理
│   │   │       ├── launcher/                # 插件启动器
│   │   │       ├── listener/                # 插件监听器
│   │   │       └── processor/               # 处理器
│   │   │           └── interceptor/         # 拦截器
│   │   └── resources/
│   └── test/                               # 测试代码
└── pom.xml                                # 模块POM文件</code></pre>
      </div>

      <!-- Core Module -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">spring-boot3-brick-bootkit-core (核心功能模块)</h3>
        <p class="text-gray-700">框架的核心功能模块，提供配置管理、生命周期管理、性能监控等。</p>
        <pre><code>spring-boot3-brick-bootkit-core/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/zqzqq/bootkits/core/
│   │   │       ├── config/                   # 配置管理
│   │   │       ├── dependency/               # 依赖管理
│   │   │       ├── exception/                # 异常处理
│   │   │       ├── health/                   # 健康检查
│   │   │       │   └── impl/                 # 健康检查实现
│   │   │       ├── isolation/                # 隔离机制
│   │   │       ├── lifecycle/                # 生命周期管理
│   │   │       ├── logging/                  # 日志管理
│   │   │       ├── monitoring/               # 监控管理
│   │   │       ├── performance/              # 性能监控
│   │   │       ├── plugin/                   # 插件管理
│   │   │       ├── security/                 # 安全机制
│   │   │       ├── state/                    # 状态管理
│   │   │       └── version/                  # 版本管理
│   │   └── resources/                        # 配置文件
│   └── test/                                # 测试代码
└── pom.xml                                 # 模块POM文件</code></pre>
      </div>

      <!-- Loader Module -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">spring-boot3-brick-bootkit-loader (类加载器模块)</h3>
        <p class="text-gray-700">自定义类加载器模块，处理插件的类加载和资源管理。</p>
        <pre><code>spring-boot3-brick-bootkit-loader/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/zqzqq/bootkits/loader/
│   │   │       ├── archive/                  # 归档文件处理
│   │   │       ├── classloader/              # 类加载器
│   │   │       │   ├── filter/               # 类过滤器
│   │   │       │   └── resource/             # 资源管理
│   │   │       │       ├── cache/            # 资源缓存
│   │   │       │       ├── loader/           # 资源加载器
│   │   │       │       └── storage/          # 资源存储
│   │   │       ├── jar/                      # JAR文件处理
│   │   │       ├── launcher/                 # 启动器
│   │   │       │   ├── classpath/            # 类路径处理
│   │   │       │   ├── coexist/              # 共存处理
│   │   │       │   ├── isolation/            # 隔离处理
│   │   │       │   ├── runner/               # 运行器
│   │   │       └── utils/                    # 工具类
│   │   └── resources/                        # 配置文件
│   └── test/                                # 测试代码
└── pom.xml                                 # 模块POM文件</code></pre>
      </div>

      <!-- Common Module -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">spring-boot3-brick-bootkit-common (公共组件模块)</h3>
        <p class="text-gray-700">公共组件模块，提供通用工具类和基础功能。</p>
        <pre><code>spring-boot3-brick-bootkit-common/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/zqzqq/bootkits/common/
│   │   │       ├── annotation/               # 通用注解
│   │   │       ├── constant/                 # 常量定义
│   │   │       ├── exception/                # 通用异常
│   │   │       └── utils/                    # 通用工具类
│   │   └── resources/                        # 配置文件
│   └── test/                                # 测试代码
└── pom.xml                                 # 模块POM文件</code></pre>
      </div>

      <!-- Maven Packager Module -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">spring-boot3-brick-bootkit-maven-packager (Maven打包插件)</h3>
        <p class="text-gray-700">Maven打包插件，提供插件的构建和打包功能。</p>
        <pre><code>spring-boot3-brick-bootkit-maven-packager/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/zqzqq/bootkits/packager/
│   │   │       ├── config/                   # 打包配置
│   │   │       ├── goal/                     # Maven目标
│   │   │       ├── model/                    # 数据模型
│   │   │       └── processor/                # 打包处理器
│   │   └── resources/
│   │       └── META-INF/
│   │           └── maven/
│   │               └── plugin.xml            # Maven插件描述符
│   └── test/                                # 测试代码
└── pom.xml                                 # 模块POM文件</code></pre>
      </div>
    </section>

    <!-- Documentation Structure -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">文档结构</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">doc/docs-website (文档网站)</h3>
        <p class="text-gray-700">基于Vue 3 + Vite的在线文档网站。</p>
        <pre><code>doc/docs-website/
├── src/
│   ├── views/                    # 页面组件
│   │   ├── Home.vue             # 首页
│   │   ├── Introduction.vue     # 功能介绍
│   │   ├── QuickStart.vue       # 快速开始
│   │   ├── Configuration.vue    # 配置说明
│   │   ├── Plugins.vue          # 插件开发
│   │   ├── API.vue              # API参考
│   │   └── Examples.vue         # 示例
│   ├── components/               # 通用组件
│   ├── assets/                   # 静态资源
│   ├── App.vue                  # 主应用组件
│   ├── main.js                  # 应用入口
│   └── style.css                # 全局样式
├── public/                       # 公共资源
├── dist/                        # 构建输出目录
├── index.html                   # HTML模板
├── package.json                 # NPM配置
├── vite.config.js              # Vite配置
├── tailwind.config.js          # Tailwind配置
└── README.md                   # 文档说明</code></pre>
      </div>
    </section>

    <!-- Configuration Files -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">配置文件说明</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">代码质量配置</h3>
          <ul class="space-y-2 text-gray-700">
            <li><code>checkstyle.xml</code> - 代码风格检查</li>
            <li><code>pmd-ruleset.xml</code> - PMD静态分析规则</li>
            <li><code>spotbugs-exclude.xml</code> - SpotBugs排除规则</li>
            <li><code>sonar-project.properties</code> - SonarQube配置</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">构建和部署</h3>
          <ul class="space-y-2 text-gray-700">
            <li><code>pom.xml</code> - Maven项目配置</li>
            <li><code>check-version.sh</code> - 版本检查脚本</li>
            <li><code>update-version.sh</code> - 版本更新脚本</li>
            <li><code>Dockerfile</code> - Docker镜像构建</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Module Dependencies -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">模块依赖关系</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">依赖层次结构</h3>
        <pre><code>spring-boot3-brick-bootkit (主程序启动器)
├── spring-boot3-brick-bootkit-core (核心功能)
│   ├── spring-boot3-brick-bootkit-common (公共组件)
│   └── spring-boot3-brick-bootkit-loader (类加载器)
└── spring-boot3-brick-bootkit-bootstrap (插件启动器)
    └── spring-boot3-brick-bootkit-common (公共组件)

spring-boot3-brick-bootkit-maven-packager (Maven打包插件)
└── spring-boot3-brick-bootkit-core (核心功能)</code></pre>
      </div>
    </section>

    <!-- Build Process -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">构建流程</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">Maven构建顺序</h3>
        <ol class="space-y-2 text-gray-700">
          <li>1. <strong>spring-boot3-brick-bootkit-common</strong> - 公共组件最先构建</li>
          <li>2. <strong>spring-boot3-brick-bootkit-loader</strong> - 类加载器模块</li>
          <li>3. <strong>spring-boot3-brick-bootkit-core</strong> - 核心功能模块</li>
          <li>4. <strong>spring-boot3-brick-bootkit-bootstrap</strong> - 插件启动器</li>
          <li>5. <strong>spring-boot3-brick-bootkit-maven-packager</strong> - Maven打包插件</li>
          <li>6. <strong>spring-boot3-brick-bootkit</strong> - 主程序启动器最后构建</li>
        </ol>
      </div>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">构建命令</h3>
        <pre><code class="bash"># 完整构建
mvn clean install

# 只构建特定模块
mvn clean install -pl spring-boot3-brick-bootkit-core

# 跳过测试构建
mvn clean install -DskipTests

# 生成文档
mvn clean install -DgenerateDocs=true</code></pre>
      </div>
    </section>

    <!-- Development Guidelines -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">开发指南</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">编码规范</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 遵循阿里巴巴Java开发手册</li>
            <li>• 使用CheckStyle检查代码风格</li>
            <li>• 使用PMD进行静态代码分析</li>
            <li>• 使用SpotBugs检查潜在bug</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">测试要求</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 单元测试覆盖率 ≥ 80%</li>
            <li>• 使用JUnit 5进行单元测试</li>
            <li>• 使用Mockito进行模拟测试</li>
            <li>• 集成测试覆盖主要功能</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>