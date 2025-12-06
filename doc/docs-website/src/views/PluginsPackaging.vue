<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">插件打包</h1>
      <p class="text-lg text-gray-600 mb-8">
        详细介绍如何将自定义插件打包为可分发的JAR文件，包括Maven配置、打包流程和最佳实践。
      </p>
    </div>

    <!-- Packaging Overview -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">打包概述</h2>
      <div class="card space-y-4">
        <p class="text-gray-700">
          Brick BootKit提供了专门的Maven插件来帮助开发者将插件项目打包为标准的JAR文件。
          打包后的插件可以独立分发和部署，支持动态加载和卸载。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-semibold text-blue-900 mb-2">独立分发</h3>
            <p class="text-blue-700 text-sm">生成的JAR文件可以独立分发和部署</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-900 mb-2">动态加载</h3>
            <p class="text-green-700 text-sm">支持在运行时动态加载和卸载插件</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="font-semibold text-purple-900 mb-2">版本管理</h3>
            <p class="text-purple-700 text-sm">内置版本管理和依赖冲突检测</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Maven Plugin Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">Maven插件配置</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件配置</h3>
        <p class="text-gray-700">
          在插件项目的pom.xml中配置Brick BootKit的Maven打包插件：
        </p>
        <pre><code class="xml">&lt;build&gt;
  &lt;plugins&gt;
    &lt;plugin&gt;
      &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot3-brick-bootkit-maven-packager&lt;/artifactId&gt;
      &lt;version&gt;4.0.1&lt;/version&gt;
      &lt;configuration&gt;
        &lt;!-- 插件元数据配置 --&gt;
        &lt;pluginName&gt;my-custom-plugin&lt;/pluginName&gt;
        &lt;version&gt;1.0.0&lt;/version&gt;
        &lt;description&gt;自定义功能插件&lt;/description&gt;
        &lt;author&gt;开发团队&lt;/author&gt;
        
        &lt;!-- 依赖配置 --&gt;
        &lt;includeDependencies&gt;true&lt;/includeDependencies&gt;
        &lt;dependencyScope&gt;runtime&lt;/dependencyScope&gt;
        
        &lt;!-- 输出配置 --&gt;
        &lt;outputDirectory&gt;${project.build.directory}/plugins&lt;/outputDirectory&gt;
        &lt;finalName&gt;${project.artifactId}-${project.version}&lt;/finalName&gt;
      &lt;/configuration&gt;
      &lt;executions&gt;
        &lt;execution&gt;
          &lt;phase&gt;package&lt;/phase&gt;
          &lt;goals&gt;
            &lt;goal&gt;package&lt;/goal&gt;
          &lt;/goals&gt;
        &lt;/execution&gt;
      &lt;/executions&gt;
    &lt;/plugin&gt;
  &lt;/plugins&gt;
&lt;/build&gt;</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置参数说明</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">基本配置</h4>
            <ul class="space-y-2 text-gray-700">
              <li><code>pluginName</code> - 插件名称</li>
              <li><code>version</code> - 插件版本</li>
              <li><code>description</code> - 插件描述</li>
              <li><code>author</code> - 插件作者</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">高级配置</h4>
            <ul class="space-y-2 text-gray-700">
              <li><code>includeDependencies</code> - 是否包含依赖</li>
              <li><code>dependencyScope</code> - 依赖范围</li>
              <li><code>outputDirectory</code> - 输出目录</li>
              <li><code>finalName</code> - 最终文件名</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Packaging Process -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">打包流程</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">执行打包</h3>
        <p class="text-gray-700">
          使用Maven命令执行插件打包：
        </p>
        <pre><code class="bash"># 完整打包
mvn clean package

# 只执行打包插件
mvn brick-bootkit:package

# 包含依赖的完整打包
mvn clean package -DincludeDependencies=true

# 跳过测试
mvn clean package -DskipTests</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">打包过程</h3>
        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm">1</div>
            <div>
              <h4 class="font-semibold text-gray-900">编译阶段</h4>
              <p class="text-gray-700 text-sm">编译Java源代码和资源文件</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm">2</div>
            <div>
              <h4 class="font-semibold text-gray-900">测试阶段</h4>
              <p class="text-gray-700 text-sm">执行单元测试和集成测试</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm">3</div>
            <div>
              <h4 class="font-semibold text-gray-900">依赖分析</h4>
              <p class="text-gray-700 text-sm">分析插件依赖关系和版本冲突</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm">4</div>
            <div>
              <h4 class="font-semibold text-gray-900">资源打包</h4>
              <p class="text-gray-700 text-sm">收集和打包插件资源文件</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm">5</div>
            <div>
              <h4 class="font-semibold text-gray-900">生成插件</h4>
              <p class="text-gray-700 text-sm">生成标准的JAR文件和元数据</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plugin Manifest -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件清单</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件元数据</h3>
        <p class="text-gray-700">
          打包过程中会生成插件清单文件，包含插件的基本信息和依赖关系：
        </p>
        <pre><code class="json">{
  "pluginName": "my-custom-plugin",
  "version": "1.0.0",
  "description": "自定义功能插件",
  "author": "开发团队",
  "mainClass": "com.example.plugin.MyPlugin",
  "dependencies": [
    {
      "groupId": "org.springframework.boot",
      "artifactId": "spring-boot-starter",
      "version": "3.2.0",
      "scope": "runtime"
    }
  ],
  "resources": [
    "META-INF/spring.factories",
    "static/plugin-config.json"
  ],
  "entryPoints": [
    {
      "type": "listener",
      "class": "com.example.plugin.MyListener"
    }
  ],
  "exportedPackages": [
    "com.example.plugin.api"
  ]
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">清单文件位置</h3>
        <p class="text-gray-700">
          插件清单文件会打包到JAR的 <code>META-INF/plugin.json</code> 路径：
        </p>
        <pre><code class="bash">jar -tf my-custom-plugin-1.0.0.jar
# 输出包含:
# META-INF/MANIFEST.MF
# META-INF/plugin.json    # 插件清单
# com/example/plugin/MyPlugin.class
# ...</code></pre>
      </div>
    </section>

    <!-- Dependencies Management -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">依赖管理</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">依赖打包策略</h3>
        <p class="text-gray-700">
          插件可以采用不同的依赖打包策略：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">包含依赖 (Fat JAR)</h4>
            <ul class="text-gray-700 text-sm space-y-1">
              <li>• 所有依赖打包到JAR内部</li>
              <li>• 优点：独立性强，部署简单</li>
              <li>• 缺点：文件体积大，可能存在冲突</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">外部依赖 (Thin JAR)</h4>
            <ul class="text-gray-700 text-sm space-y-1">
              <li>• 只打包插件代码，不包含依赖</li>
              <li>• 优点：文件体积小，便于更新</li>
              <li>• 缺点：需要确保依赖环境</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">依赖冲突检测</h3>
        <p class="text-gray-700">
          打包过程中会自动检测依赖冲突：
        </p>
        <pre><code class="bash"># 依赖冲突示例
WARNING: 发现依赖冲突:
  - spring-core: 6.1.2 (插件需要) vs 6.1.1 (系统已有)
  建议解决方案: 使用 &lt;dependencyManagement&gt; 统一版本</code></pre>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">最佳实践</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">命名规范</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 使用有意义的插件名称</li>
            <li>• 遵循语义化版本规范</li>
            <li>• 包含清晰的描述信息</li>
            <li>• 指定明确的作者信息</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">版本管理</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 使用语义化版本号</li>
            <li>• 及时更新依赖版本</li>
            <li>• 维护向后兼容性</li>
            <li>• 记录变更日志</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">性能优化</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 只包含必要的依赖</li>
            <li>• 移除未使用的资源</li>
            <li>• 优化资源文件大小</li>
            <li>• 使用ProGuard混淆代码</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">安全考虑</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 验证依赖的安全性</li>
            <li>• 避免包含敏感信息</li>
            <li>• 使用代码签名</li>
            <li>• 限制插件权限</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Testing and Deployment -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">测试和部署</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件测试</h3>
        <p class="text-gray-700">
          在部署前对插件进行全面测试：
        </p>
        <pre><code class="bash"># 本地测试插件
mvn test
mvn integration-test

# 插件功能验证
java -cp target/plugins/my-plugin-1.0.0.jar com.zqzqq.bootkits.test.PluginTest

# 依赖验证
java -cp target/plugins/my-plugin-1.0.0.jar com.zqzqq.bootkits.test.DependencyCheck</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">部署策略</h3>
        <div class="space-y-3">
          <div class="flex items-start space-x-3">
            <div class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-semibold">✓</div>
            <div>
              <h4 class="font-semibold text-gray-900">本地测试环境</h4>
              <p class="text-gray-700 text-sm">先在本地环境验证插件功能</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-semibold">✓</div>
            <div>
              <h4 class="font-semibold text-gray-900">开发环境部署</h4>
              <p class="text-gray-700 text-sm">在开发环境进行集成测试</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-semibold">✓</div>
            <div>
              <h4 class="font-semibold text-gray-900">生产环境发布</h4>
              <p class="text-gray-700 text-sm">通过审核后发布到生产环境</p>
            </div>
          </div>
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
            <h4 class="font-semibold text-gray-900">依赖冲突</h4>
            <p class="text-gray-700 text-sm">问题：打包时出现依赖版本冲突</p>
            <p class="text-gray-600 text-sm">解决：使用dependencyManagement统一版本或排除冲突依赖</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">主类未找到</h4>
            <p class="text-gray-700 text-sm">问题：插件JAR无法找到主类</p>
            <p class="text-gray-600 text-sm">解决：确保主类配置正确且在MANIFEST.MF中声明</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">资源文件缺失</h4>
            <p class="text-gray-700 text-sm">问题：插件运行时找不到资源文件</p>
            <p class="text-gray-600 text-sm">解决：检查资源路径和打包配置</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>