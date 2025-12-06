<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">常见问题</h1>
      <p class="text-lg text-gray-600 mb-8">
        收集了Brick BootKit框架使用过程中的常见问题和解决方案，帮助您快速解决问题。
      </p>
    </div>

    <!-- Search -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">问题搜索</h2>
      <div class="card space-y-4">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索问题或关键词..."
            class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div class="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <span class="text-sm text-gray-600">热门标签:</span>
          <button
            v-for="tag in popularTags"
            :key="tag"
            @click="addTag(tag)"
            class="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </section>

    <!-- Category Navigation -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">问题分类</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          :class="[
            'p-4 rounded-lg text-left transition-colors',
            selectedCategory === category.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          <h3 class="font-semibold">{{ category.name }}</h3>
          <p class="text-sm opacity-75">{{ category.description }}</p>
          <p class="text-xs mt-2">{{ category.count }} 个问题</p>
        </button>
      </div>
    </section>

    <!-- FAQ Items -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">问题列表</h2>
      
      <!-- Filtered FAQ Items -->
      <div class="space-y-4">
        <div
          v-for="item in filteredFAQItems"
          :key="item.id"
          class="card cursor-pointer"
          @click="toggleExpanded(item.id)"
        >
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ item.question }}</h3>
              <div class="flex flex-wrap gap-2 mb-3">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="ml-4 flex-shrink-0">
              <svg
                :class="[
                  'w-5 h-5 text-gray-400 transition-transform',
                  expandedItems.has(item.id) ? 'rotate-180' : ''
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          
          <div
            v-if="expandedItems.has(item.id)"
            class="mt-4 pt-4 border-t border-gray-200"
          >
            <div class="prose max-w-none">
              <div v-for="section in item.sections" :key="section.title" class="mb-4">
                <h4 v-if="section.title" class="font-semibold text-gray-900 mb-2">{{ section.title }}</h4>
                <p v-if="section.content" class="text-gray-700 mb-2">{{ section.content }}</p>
                <div v-if="section.code" class="bg-gray-50 p-4 rounded-lg mb-4">
                  <pre><code>{{ section.code }}</code></pre>
                </div>
                <ul v-if="section.list" class="list-disc list-inside text-gray-700 mb-2">
                  <li v-for="listItem in section.list" :key="listItem">{{ listItem }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- No Results -->
      <div v-if="filteredFAQItems.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.88-6.07-2.33l-2.93 2.93m1.17 4.17l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="text-gray-500 text-lg">没有找到相关问题</p>
        <p class="text-gray-400">请尝试其他关键词或浏览不同分类</p>
      </div>
    </section>

    <!-- Still Need Help -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">仍然需要帮助？</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card text-center">
          <svg class="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">查看文档</h3>
          <p class="text-gray-600 mb-4">浏览完整的技术文档和API参考</p>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">查看文档 →</a>
        </div>
        
        <div class="card text-center">
          <svg class="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z"></path>
          </svg>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">社区讨论</h3>
          <p class="text-gray-600 mb-4">加入GitHub讨论区与其他用户交流</p>
          <a href="#" class="text-green-600 hover:text-green-800 font-medium">参与讨论 →</a>
        </div>
        
        <div class="card text-center">
          <svg class="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">提交问题</h3>
          <p class="text-gray-600 mb-4">提交新的问题或建议改进</p>
          <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">提交问题 →</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      expandedItems: new Set(),
      popularTags: ['插件开发', '配置问题', '性能优化', '安全设置', '部署', '故障排查'],
      categories: [
        { id: 'all', name: '全部问题', description: '所有分类', count: 0 },
        { id: 'getting-started', name: '入门指南', description: '基本使用和快速开始', count: 0 },
        { id: 'plugin-development', name: '插件开发', description: '插件编写和开发', count: 0 },
        { id: 'configuration', name: '配置管理', description: '配置相关问题', count: 0 },
        { id: 'deployment', name: '部署运维', description: '部署和运维', count: 0 },
        { id: 'performance', name: '性能优化', description: '性能和监控', count: 0 },
        { id: 'troubleshooting', name: '故障排查', description: '问题解决', count: 0 }
      ],
      faqItems: [
        {
          id: 1,
          question: '如何创建一个新的插件？',
          category: 'plugin-development',
          tags: ['插件开发', '入门'],
          sections: [
            {
              title: '创建新插件的基本步骤：',
              content: '',
              list: [
                '创建Maven项目并添加依赖',
                '创建插件启动类',
                '添加业务组件',
                '配置打包插件'
              ]
            },
            {
              title: '1. 添加依赖',
              content: '在插件项目的pom.xml中添加以下依赖：',
              code: `<dependency>
    <groupId>com.zqzqq.bootkits</groupId>
    <artifactId>spring-boot3-brick-bootkit-bootstrap</artifactId>
    <version>4.0.1</version>
</dependency>`
            },
            {
              title: '2. 创建插件启动类',
              content: '继承SpringPluginBootstrap并添加@PluginComponent注解：',
              code: `@PluginComponent
public class MyPlugin extends SpringPluginBootstrap {
    
    @Override
    protected void initialize() throws Exception {
        // 插件初始化逻辑
    }
}`
            },
            {
              title: '3. 添加业务组件',
              content: '使用@PluginComponent注解自动注册组件：',
              code: `@PluginComponent
@RestController
@RequestMapping("/api")
public class MyController {
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello from plugin!";
    }
}`
            },
            {
              title: '4. 配置Maven打包插件',
              content: '在pom.xml中添加打包配置：',
              code: `<plugin>
    <groupId>com.zqzqq.bootkits</groupId>
    <artifactId>spring-boot3-brick-bootkit-maven-packager</artifactId>
    <version>4.0.1</version>
</plugin>`
            }
          ]
        },
        {
          id: 2,
          question: '插件启动失败怎么办？',
          category: 'troubleshooting',
          tags: ['插件开发', '故障排查'],
          sections: [
            {
              title: '插件启动失败的常见原因和解决方法：'
            },
            {
              title: '1. 检查插件依赖',
              content: '确保所有依赖都标记为provided作用域，由主程序提供：',
              code: `<dependency>
    <groupId>com.example</groupId>
    <artifactId>main-application</artifactId>
    <version>1.0.0</version>
    <scope>provided</scope>
</dependency>`
            },
            {
              title: '2. 检查插件配置',
              content: '验证application.yml中的插件配置是否正确：',
              code: `plugin:
  pluginPath:
    - ./plugins-dev
  management:
    port: 8081`
            },
            {
              title: '3. 查看启动日志',
              content: '检查控制台输出的错误信息，常见问题包括：',
              list: [
                '类加载错误：检查jar包冲突',
                '依赖注入失败：检查@Component和@Autowired注解',
                '端口占用：检查插件管理接口端口'
              ]
            },
            {
              title: '4. 启用调试模式',
              content: '在配置文件中启用详细的调试信息：',
              code: `plugin:
  devTools:
    enabled: true
    debug:
      enabled: true
      verbose: true`
            }
          ]
        },
        {
          id: 3,
          question: '如何配置插件的REST接口路径？',
          category: 'configuration',
          tags: ['配置问题', 'API'],
          sections: [
            {
              title: 'Brick BootKit提供了两种REST接口路径配置方式：'
            },
            {
              title: '1. 使用插件ID前缀（推荐）',
              content: '当enablePluginIdRestPathPrefix为true时：',
              code: `plugin:
  enablePluginIdRestPathPrefix: true`,
            },
            {
              content: '插件的接口路径格式：/plugins/{pluginId}/{controllerPath}',
              list: [
                '例如：插件ID为"user-service"，控制器路径为"/api/user"',
                '完整路径为：/plugins/user-service/api/user',
                '这种方式可以避免路径冲突'
              ]
            },
            {
              title: '2. 直接路径（可能有冲突）',
              content: '当enablePluginIdRestPathPrefix为false时：',
              code: `plugin:
  enablePluginIdRestPathPrefix: false`,
            },
            {
              content: '注意：多个插件可能有相同的控制器路径，导致冲突'
            },
            {
              title: '3. 自定义路径前缀',
              content: '在插件中可以通过@RequestMapping注解自定义前缀：',
              code: `@PluginRestController
@RequestMapping("/custom-prefix/my-api")
public class MyController {
    // 接口路径为 /plugins/plugin-id/custom-prefix/my-api
}`
            }
          ]
        },
        {
          id: 4,
          question: '插件之间如何共享数据？',
          category: 'plugin-development',
          tags: ['插件开发', '数据共享'],
          sections: [
            {
              title: '插件之间数据共享的几种方式：'
            },
            {
              title: '1. 通过数据库共享',
              content: '所有插件可以使用同一个数据库：',
              code: `plugin:
  database:
    enabled: true
    shared: true
    url: jdbc:mysql://localhost:3306/shared_db`
            },
            {
              title: '2. 通过插件间通信API',
              content: '使用内置的插件通信服务：',
              code: `@PluginComponent
public class DataShareService {
    
    @Autowired
    private PluginCommunicationService commService;
    
    public void sendDataToPlugin(String targetPluginId, Object data) {
        commService.sendMessage(targetPluginId, "data-share", data);
    }
}`
            },
            {
              title: '3. 通过共享缓存',
              content: '使用Redis等共享缓存：',
              code: `@PluginComponent
public class CacheService {
    
    @Value("cache.type:redis")
    private String cacheType;
    
    public void putSharedData(String key, Object value) {
        redisTemplate.opsForValue().set("shared:" + key, value);
    }
}`
            },
            {
              title: '4. 通过事件系统',
              content: '使用Spring的事件机制：',
              code: `@PluginComponent
public class EventService {
    
    public void publishEvent(String eventType, Object data) {
        applicationEventPublisher.publishEvent(new PluginEvent(eventType, data));
    }
}`
            }
          ]
        },
        {
          id: 5,
          question: '如何监控插件的性能？',
          category: 'performance',
          tags: ['性能优化', '监控'],
          sections: [
            {
              title: 'Brick BootKit提供了内置的性能监控功能：'
            },
            {
              title: '1. 启用监控',
              content: '在配置文件中启用监控功能：',
              code: `plugin:
  monitoring:
    enabled: true
    collectionInterval: 30s`
            },
            {
              title: '2. 使用监控注解',
              content: '使用内置注解自动收集性能指标：',
              code: `@PluginComponent
public class MyService {
    
    @Monitored("service.method1")
    public void method1() {
        // 业务逻辑
    }
    
    @Timed("database.query")
    public List<User> queryUsers() {
        return userRepository.findAll();
    }
}`
            },
            {
              title: '3. 查看监控数据',
              content: '监控数据可以通过以下方式查看：',
              list: [
                '管理API：http://localhost:8081/api/metrics',
                'Prometheus格式：http://localhost:8081/actuator/prometheus',
                'Web界面：开发模式下可访问监控界面'
              ]
            },
            {
              title: '4. 导出到监控系统',
              content: '配置监控数据导出：',
              code: `plugin:
  monitoring:
    export:
      prometheus:
        enabled: true
        port: 9090
      influxdb:
        enabled: true
        url: http://localhost:8086`
            }
          ]
        },
        {
          id: 6,
          question: '插件的安全机制是如何工作的？',
          category: 'configuration',
          tags: ['安全设置', '权限控制'],
          sections: [
            {
              title: 'Brick BootKit提供了多层安全机制：'
            },
            {
              title: '1. 插件隔离',
              content: '每个插件在独立的隔离环境中运行：',
              code: `plugin:
  isolation:
    enabled: true
    memoryLimit: 256MB
    threadLimit: 50`
            },
            {
              title: '2. 权限控制',
              content: '使用注解进行权限验证：',
              code: `@RequirePermission(Permission.DATA_WRITE)
public void sensitiveOperation() {
    // 只有具备DATA_WRITE权限的插件才能执行此操作
}`
            },
            {
              title: '3. 网络访问控制',
              content: '限制插件的网络访问范围：',
              code: `plugin:
  security:
    network:
      allowedHosts:
        - localhost
        - 127.0.0.1
        - "*.company.com"
      blockedPorts:
        - 22    # SSH
        - 3389  # RDP`
            },
            {
              title: '4. 资源限制',
              content: '每个插件都有资源使用限制：',
              list: [
                '内存使用限制',
                '线程数量限制',
                '网络连接数限制',
                '文件句柄数量限制'
              ]
            }
          ]
        },
        {
          id: 7,
          question: '如何进行插件的动态部署和更新？',
          category: 'deployment',
          tags: ['部署', '热更新'],
          sections: [
            {
              title: 'Brick BootKit支持插件的动态部署和更新：'
            },
            {
              title: '1. 动态部署插件',
              content: '通过管理API部署插件：',
              code: `curl -X POST http://localhost:8081/api/plugins/install \\
     -H "Content-Type: multipart/form-data" \\
     -F "file=@my-plugin-1.0.0.jar"`
            },
            {
              title: '2. 插件生命周期管理',
              content: '使用API管理插件生命周期：',
              code: `# 启动插件
curl -X POST http://localhost:8081/api/plugins/my-plugin/start

# 停止插件
curl -X POST http://localhost:8081/api/plugins/my-plugin/stop

# 卸载插件
curl -X DELETE http://localhost:8081/api/plugins/my-plugin`
            },
            {
              title: '3. 插件更新',
              content: '更新插件到新版本：',
              code: `# 停止插件
curl -X POST http://localhost:8081/api/plugins/my-plugin/stop

# 上传新版本
curl -X POST http://localhost:8081/api/plugins/my-plugin/update \\
     -F "file=@my-plugin-1.1.0.jar"

# 重新启动
curl -X POST http://localhost:8081/api/plugins/my-plugin/start`
            },
            {
              title: '4. 热更新配置',
              content: '开发环境下支持热更新：',
              code: `plugin:
  hotReload:
    enabled: true
    watchPaths:
      - src/main/java
      - src/main/resources`
            },
            {
              title: '5. 零停机更新',
              content: '在生产环境中实现零停机更新的步骤：',
              list: [
                '部署新版本插件为不同ID',
                '测试新版本功能',
                '切换流量到新版本',
                '停用旧版本插件'
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    filteredFAQItems() {
      let items = this.faqItems;
      
      // 按分类过滤
      if (this.selectedCategory !== 'all') {
        items = items.filter(item => item.category === this.selectedCategory);
      }
      
      // 按搜索词过滤
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase().trim();
        items = items.filter(item => 
          item.question.toLowerCase().includes(query) ||
          item.sections.some(section => 
            (section.title && section.title.toLowerCase().includes(query)) ||
            (section.content && section.content.toLowerCase().includes(query))
          ) ||
          item.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
      
      return items;
    }
  },
  methods: {
    toggleExpanded(itemId) {
      if (this.expandedItems.has(itemId)) {
        this.expandedItems.delete(itemId);
      } else {
        this.expandedItems.add(itemId);
      }
    },
    addTag(tag) {
      this.searchQuery = tag;
    }
  },
  mounted() {
    // 更新分类计数
    this.categories.forEach(category => {
      if (category.id === 'all') {
        category.count = this.faqItems.length;
      } else {
        category.count = this.faqItems.filter(item => item.category === category.id).length;
      }
    });
  }
}
</script>