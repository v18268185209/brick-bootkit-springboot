<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">插件开发指南</h1>
      <p class="text-lg text-gray-600 mb-8">
        详细介绍插件的开发模式、生命周期管理和高级特性。
      </p>
    </div>

    <!-- Development Modes -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">开发模式</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">隔离模式</h3>
          <p class="text-gray-700 mb-4">
            每个插件使用独立的类加载器，完全隔离插件之间的依赖，适合有依赖冲突的场景。
          </p>
          <h4 class="font-semibold text-gray-900 mb-2">特性：</h4>
          <ul class="space-y-1 text-gray-700">
            <li>• 插件之间完全隔离</li>
            <li>• 支持不同版本的同一依赖</li>
            <li>• 内存占用相对较大</li>
            <li>• 适合生产环境</li>
          </ul>
          <div class="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4">
            <p class="text-blue-700 text-sm">推荐模式，特别是在生产环境中</p>
          </div>
        </div>
        
        <div class="card">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">共享模式</h3>
          <p class="text-gray-700 mb-4">
            插件共享主程序的类加载器，依赖统一管理，内存占用较小。
          </p>
          <h4 class="font-semibold text-gray-900 mb-2">特性：</h4>
          <ul class="space-y-1 text-gray-700">
            <li>• 依赖统一管理</li>
            <li>• 内存占用较小</li>
            <li>• 依赖版本必须统一</li>
            <li>• 适合开发环境</li>
          </ul>
          <div class="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="text-yellow-700 text-sm">开发调试时推荐使用</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Plugin Lifecycle -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件生命周期</h2>
      
      <div class="card">
        <h3 class="text-xl font-semibold text-gray-900 mb-4">生命周期状态</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">描述</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">触发操作</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">PARSED</td>
                <td class="px-6 py-4 text-sm text-gray-500">插件已解析，尚未加载</td>
                <td class="px-6 py-4 text-sm text-gray-500">插件文件识别</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">LOADED</td>
                <td class="px-6 py-4 text-sm text-gray-500">插件已加载，类已初始化</td>
                <td class="px-6 py-4 text-sm text-gray-500">调用load()方法</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">STARTED</td>
                <td class="px-6 py-4 text-sm text-gray-500">插件已启动，可以提供服务</td>
                <td class="px-6 py-4 text-sm text-gray-500">调用start()方法</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">STOPPED</td>
                <td class="px-6 py-4 text-sm text-gray-500">插件已停止，不能提供服务</td>
                <td class="px-6 py-4 text-sm text-gray-500">调用stop()方法</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">UNLOADED</td>
                <td class="px-6 py-4 text-sm text-gray-500">插件已卸载，资源已释放</td>
                <td class="px-6 py-4 text-sm text-gray-500">调用unload()方法</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Plugin Bootstrap -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件引导类</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">基本结构</h3>
        <p class="text-gray-700">插件引导类需要继承SpringPluginBootstrap：</p>
        <pre><code>import com.zqzqq.bootkits.bootstrap.SpringPluginBootstrap;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExamplePlugin extends SpringPluginBootstrap {
    
    public static void main(String[] args) {
        new ExamplePlugin().run(args);
    }
    
    @Override
    protected void initialize() throws Exception {
        // 插件初始化逻辑
        System.out.println("插件初始化中...");
    }
    
    @Override
    protected void shutdown() throws Exception {
        // 插件关闭逻辑
        System.out.println("插件关闭中...");
    }
}</code></pre>
      </div>
    </section>

    <!-- Plugin Controller -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件控制器</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">REST API示例</h3>
        <p class="text-gray-700">插件中的控制器会自动注册到主程序中：</p>
        <pre><code>@RestController
@RequestMapping("/example")
public class ExampleController {
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello from plugin!";
    }
    
    @PostMapping("/process")
    public Map&lt;String, Object&gt; processData(@RequestBody Map&lt;String, Object&gt; data) {
        // 处理业务逻辑
        Map&lt;String, Object&gt; result = new HashMap&lt;&gt;();
        result.put("status", "success");
        result.put("data", data);
        return result;
    }
    
    @GetMapping("/status")
    public PluginStatus getStatus() {
        return new PluginStatus("plugin-example", "running");
    }
}</code></pre>
      </div>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">访问路径</h3>
        <p class="text-gray-700">插件控制器的访问路径格式：</p>
        <pre><code>http://localhost:8080/plugins/{plugin-id}/{controller-path}

# 示例
http://localhost:8080/plugins/plugin-example/example/hello</code></pre>
      </div>
    </section>

    <!-- Plugin Dependencies -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件依赖管理</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">隔离模式依赖</h3>
        <p class="text-gray-700">在隔离模式下，插件可以包含所有必要的依赖：</p>
        <pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;com.oracle.database.jdbc&lt;/groupId&gt;
    &lt;artifactId&gt;ojdbc8&lt;/artifactId&gt;
    &lt;version&gt;21.1.0.0&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt;
    &lt;artifactId&gt;elasticsearch-rest-high-level-client&lt;/artifactId&gt;
    &lt;version&gt;7.15.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
      </div>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">共享模式依赖</h3>
        <p class="text-gray-700">在共享模式下，主要依赖应该由主程序提供：</p>
        <pre><code>&lt;!-- 由主程序提供的依赖 --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;

&lt;!-- 插件特有的依赖 --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;com.example&lt;/groupId&gt;
    &lt;artifactId&gt;custom-library&lt;/artifactId&gt;
    &lt;version&gt;1.0.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
      </div>
    </section>

    <!-- Plugin Services -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件服务</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">创建插件服务</h3>
        <p class="text-gray-700">插件中的服务类会作为Spring Bean注册：</p>
        <pre><code>@Service
public class ExampleService {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    public void saveData(DataModel data) {
        jdbcTemplate.update(
            "INSERT INTO example_table (name, value) VALUES (?, ?)",
            data.getName(), data.getValue()
        );
    }
    
    public List&lt;DataModel&gt; getAllData() {
        return jdbcTemplate.query(
            "SELECT * FROM example_table",
            new BeanPropertyRowMapper&lt;&gt;(DataModel.class)
        );
    }
}</code></pre>
      </div>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">主程序 Bean 注入</h3>
        <p class="text-gray-700">在插件中注入主程序的 Bean：</p>
        <pre><code>@AutowiredType(MainConfiguration.class)
@Autowired
private MainConfigService mainConfigService;

@PluginComponent
public class ExampleComponent {
    
    @Autowired
    private MainApplicationService mainService;
    
    public void useMainService() {
        String config = mainService.getConfig("key");
        System.out.println("从主程序获取的配置: " + config);
    }
}</code></pre>
      </div>
    </section>

    <!-- Plugin Configuration -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件配置</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件配置文件</h3>
        <p class="text-gray-700">插件可以有自己的配置文件，支持Spring Boot的配置机制：</p>
        <pre><code># application.yml (在插件的resources目录下)
plugin:
  database:
    url: jdbc:mysql://localhost:3306/plugin_db
    username: plugin_user
    password: plugin_password
  
  features:
    enabled: true
    cache-timeout: 300

spring:
  profiles:
    active: dev</code></pre>
      </div>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">配置获取</h3>
        <pre><code>@Configuration
@ConfigurationProperties(prefix = "plugin.database")
public class DatabaseConfig {
    
    private String url;
    private String username;
    private String password;
    
    // getters and setters
    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
    // ... other getters and setters
}</code></pre>
      </div>
    </section>

    <!-- Plugin Interceptors -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件拦截器</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">Web拦截器</h3>
        <p class="text-gray-700">插件可以注册Web拦截器来拦截请求：</p>
        <pre><code>@PluginComponent
public class ExampleInterceptor implements HandlerInterceptor {
    
    @Override
    public boolean preHandle(HttpServletRequest request, 
                           HttpServletResponse response, 
                           Object handler) throws Exception {
        
        String pluginId = PluginContextHolder.getCurrentPluginId();
        System.out.println("插件 " + pluginId + " 处理请求: " + request.getRequestURI());
        
        // 添加插件特定的逻辑
        return true;
    }
    
    @Override
    public void postHandle(HttpServletRequest request, 
                          HttpServletResponse response, 
                          Object handler, 
                          ModelAndView modelAndView) throws Exception {
        // 请求处理后的逻辑
    }
    
    @Override
    public void afterCompletion(HttpServletRequest request, 
                               HttpServletResponse response, 
                               Object handler, 
                               Exception ex) throws Exception {
        // 请求完成后的逻辑
    }
}</code></pre>
      </div>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">拦截器注册</h3>
        <pre><code>@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Autowired
    private ExampleInterceptor exampleInterceptor;
    
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(exampleInterceptor)
                .addPathPatterns("/example/**")
                .excludePathPatterns("/example/public/**");
    }
}</code></pre>
      </div>
    </section>

    <!-- Plugin Events -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件事件监听</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">ApplicationEvent监听</h3>
        <pre><code>@PluginComponent
public class ExampleEventListener {
    
    @EventListener
    public void handlePluginStart(PluginLifecycleEvent event) {
        if (PluginLifecycleState.STARTED.equals(event.getState())) {
            System.out.println("插件 " + event.getPluginId() + " 已启动");
            // 执行插件启动后的初始化逻辑
        }
    }
    
    @EventListener
    public void handleConfigChange(PluginConfigurationChangeEvent event) {
        System.out.println("插件配置已变更: " + event.getPluginId());
        // 处理配置变更逻辑
    }
}</code></pre>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">最佳实践</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">开发建议</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 使用@PluginComponent注解标记插件特有组件</li>
            <li>• 通过PluginContextHolder获取插件上下文</li>
            <li>• 实现proper的异常处理</li>
            <li>• 使用配置文件管理插件参数</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">性能建议</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 避免在插件中执行耗时操作</li>
            <li>• 使用连接池管理数据库连接</li>
            <li>• 实现proper的资源释放</li>
            <li>• 监控插件内存使用</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>