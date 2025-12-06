<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">版本升级说明</h1>
      <p class="text-lg text-gray-600 mb-8">
        详细记录Brick BootKit框架的版本变更历史、升级指南和迁移步骤。
      </p>
    </div>

    <!-- Version Navigation -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">版本导航</h2>
      <div class="card space-y-4">
        <p class="text-gray-700">
          选择目标版本查看详细的升级指南和变更说明：
        </p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            v-for="version in versions" 
            :key="version"
            @click="selectedVersion = version"
            :class="[
              'p-3 rounded-lg text-sm font-medium transition-colors',
              selectedVersion === version 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ version }}
          </button>
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p class="text-blue-700">
            <strong>当前版本：</strong>4.0.1
                        <strong>发布日期：</strong>2025年12月5日
          </p>
        </div>
      </div>
    </section>

    <!-- 4.0.1 (Current) -->
    <section v-if="selectedVersion === '4.0.1'" class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">版本 4.0.1 (当前版本)</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">发布日期</h3>
        <p class="text-gray-700">2025年12月5日</p>
        
        <h3 class="text-xl font-semibold text-gray-900">主要特性</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• 增强的插件隔离机制</li>
          <li>• 改进的性能监控功能</li>
          <li>• 新的注解支持</li>
          <li>• 安全机制优化</li>
          <li>• 更好的开发工具支持</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900">新功能</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• <strong>插件生命周期管理</strong>：完整的插件启动、停止、重新加载流程</li>
          <li>• <strong>动态部署</strong>：支持热插拔和零停机部署</li>
          <li>• <strong>性能监控</strong>：内置监控指标收集和导出</li>
          <li>• <strong>安全增强</strong>：权限控制和资源隔离</li>
          <li>• <strong>配置管理</strong>：动态配置更新和验证</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900">改进</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• 优化了类加载器性能</li>
          <li>• 改进了错误处理和日志记录</li>
          <li>• 增强了API稳定性</li>
          <li>• 提供了更好的文档和示例</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900">破坏性变更</h3>
        
      </div>

      <!-- 4.0.1 Upgrade Guide -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">从 4.0.0 升级到 4.0.1</h3>
        
        <h4 class="font-semibold text-gray-900">升级步骤</h4>
        <div class="space-y-4">
          <div class="bg-green-50 p-4 rounded-lg">
            <h5 class="font-semibold text-green-900 mb-2">1. 备份现有项目</h5>
            <p class="text-green-700 text-sm">在升级前，请备份您的插件项目和数据</p>
          </div>
          
          <div class="bg-blue-50 p-4 rounded-lg">
            <h5 class="font-semibold text-blue-900 mb-2">2. 更新依赖版本</h5>
            <pre><code class="yaml"># pom.xml 依赖更新
&lt;dependency&gt;
    &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot3-brick-bootkit&lt;/artifactId&gt;
    &lt;version&gt;4.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
          </div>
          
          <div class="bg-blue-50 p-4 rounded-lg">
            <h5 class="font-semibold text-blue-900 mb-2">3. 更新插件打包配置</h5>
            <pre><code class="xml">&lt;build&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit-maven-packager&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;</code></pre>
          </div>
          
          <div class="bg-blue-50 p-4 rounded-lg">
            <h5 class="font-semibold text-blue-900 mb-2">4. 重新构建项目</h5>
            <pre><code class="bash"># 清理和重新构建
mvn clean install</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 4.0.0 -->
    <section v-if="selectedVersion === '4.0.0'" class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">版本 4.0.0</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">发布日期</h3>
        <p class="text-gray-700">2025年12月1日</p>
        
        <h3 class="text-xl font-semibold text-gray-900">主要特性</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• 完全重写的插件系统</li>
          <li>• Spring Boot 3.x 完整支持</li>
          <li>• 新的插件生命周期管理</li>
          <li>• 增强的安全性</li>
          <li>• 改进的开发体验</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900">新功能</h3>
        <ul class="space-y-2 text-gray-700">
          <li>• <strong>@PluginComponent 注解</strong>：自动扫描和注册插件组件</li>
          <li>• <strong>@PluginRestController</strong>：插件REST控制器</li>
          <li>• <strong>@PluginScheduled</strong>：插件定时任务</li>
          <li>• <strong>插件隔离机制</strong>：内存、线程、类加载器隔离</li>
          <li>• <strong>权限控制</strong>：细粒度权限验证</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-gray-900">破坏性变更</h3>
        <div class="bg-red-50 border-l-4 border-red-400 p-4">
          <p class="text-red-700"><strong>重大变更：</strong>4.0.0是完全重写的版本，与3.x系列不兼容</p>
          <ul class="mt-2 text-red-700 text-sm space-y-1">
            <li>• 移除了旧版插件API</li>
            <li>• 更改了配置文件格式</li>
            <li>• 新的注解系统</li>
            <li>• 需要Spring Boot 3.x</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Breaking Changes -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">破坏性变更详细说明</h2>
      
      
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置变更</h3>
        
        
        
        <h4 class="font-semibold text-gray-900">4.x 配置格式</h4>
        <pre><code class="yaml"># 新格式
plugin:
  enabled: true
  mainPackage: com.example.main
  lifecycle:
    autoStart: true</code></pre>
      </div>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">依赖变更</h3>
        
        <h4 class="font-semibold text-gray-900">Spring Boot 版本要求</h4>
        <ul class="space-y-2 text-gray-700">
          <li>• <strong>4.x</strong>：Spring Boot 3.0.x 及以上版本</li>
        </ul>
        
        <h4 class="font-semibold text-gray-900">Java 版本要求</h4>
        <ul class="space-y-2 text-gray-700">
          <li>• <strong>4.x</strong>：Java 17+</li>
        </ul>
      </div>
    </section>

    <!-- Rollback Guide -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">回滚指南</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">紧急回滚步骤</h3>
        <p class="text-gray-700">
          如果升级后遇到严重问题，可以按以下步骤进行回滚：
        </p>
        
        <div class="space-y-4">
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">1. 停止服务</h4>
            <pre><code class="bash"># 停止当前服务
sudo systemctl stop brick-bootkit</code></pre>
          </div>
          
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">2. 恢复备份</h4>
            <pre><code class="bash"># 恢复备份
cp -r /backup/brick-bootkit-backup/* /opt/brick-bootkit/
cp /backup/application.yml /opt/brick-bootkit/config/</code></pre>
          </div>
          
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">3. 恢复数据库</h4>
            <pre><code class="bash"># 如果使用外部数据库
mysql -u root -p &lt; /backup/database_backup.sql</code></pre>
          </div>
          
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-900 mb-2">4. 重启服务</h4>
            <pre><code class="bash"># 重启服务
sudo systemctl start brick-bootkit
sudo systemctl status brick-bootkit</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Testing and Validation -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">测试和验证</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">升级后验证清单</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">功能验证</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• 所有插件正常启动</li>
              <li>• REST接口正常工作</li>
              <li>• 定时任务正常执行</li>
              <li>• 数据库连接正常</li>
              <li>• 配置文件正确加载</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">性能验证</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• 内存使用正常</li>
              <li>• 响应时间在预期范围内</li>
              <li>• 没有明显的性能下降</li>
              <li>• 监控指标正常收集</li>
              <li>• 日志输出正常</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">安全验证</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• 权限验证正常工作</li>
              <li>• 插件隔离有效</li>
              <li>• 网络访问控制正常</li>
              <li>• 安全审计日志正常</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">兼容性验证</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• 现有插件功能完整</li>
              <li>• API接口兼容</li>
              <li>• 配置格式正确</li>
              <li>• 第三方依赖正常</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Support -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">技术支持</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">获取帮助</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <h4 class="font-semibold text-gray-900 mb-2">文档</h4>
            <p class="text-gray-700 text-sm">查看完整的升级文档和FAQ</p>
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm">访问文档 →</a>
          </div>
          
          <div class="text-center">
            <h4 class="font-semibold text-gray-900 mb-2">社区</h4>
            <p class="text-gray-700 text-sm">在GitHub讨论区提问</p>
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm">访问讨论 →</a>
          </div>
          
          <div class="text-center">
            <h4 class="font-semibold text-gray-900 mb-2">企业支持</h4>
            <p class="text-gray-700 text-sm">商业用户可以获得专业技术支持</p>
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm">联系支持 →</a>
          </div>
        </div>
        
        <h4 class="font-semibold text-gray-900 mt-6 mb-3">升级报告模板</h4>
        <p class="text-gray-700 mb-3">
          如果您在升级过程中遇到问题，请提供以下信息：
        </p>
        <pre><code class="text-sm"># 升级报告模板
## 环境信息
- Brick BootKit版本: 4.0.1
- Spring Boot版本: 3.1.x
- Java版本: 17
- 操作系统: Linux/Windows/Mac

## 升级内容
- 从版本: 3.2.x
- 到版本: 4.0.1
- 插件数量: N
- 自定义配置: 是/否

## 问题描述
[详细描述遇到的问题]

## 日志信息
[相关错误日志]

## 复现步骤
1. 步骤一
2. 步骤二
3. 步骤三

## 期望结果
[描述期望的结果]

## 实际结果
[描述实际的结果]</code></pre>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Changelog',
  data() {
    return {
      selectedVersion: '4.0.1',
      versions: ['4.0.1', '4.0.0']
    }
  }
}
</script>