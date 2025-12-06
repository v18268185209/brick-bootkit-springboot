<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">示例项目</h1>
      <p class="text-lg text-gray-600 mb-8">
        通过实际的代码示例，了解如何在项目中使用 Brick BootKit SpringBoot 框架。
      </p>
    </div>

    <!-- Official Examples -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">官方示例</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">示例项目地址</h3>
        <p class="text-gray-700">
          官方提供了一个完整的示例项目，展示了如何使用框架的各种特性：
        </p>
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p class="text-blue-700">
            <strong>GitHub: </strong>
            <a href="https://github.com/v18268185209/brick-bootkit-springboot-demo.git" 
               target="_blank" 
               class="underline hover:text-blue-800">
              https://github.com/v18268185209/brick-bootkit-springboot-demo.git
            </a>
          </p>
        </div>
        <p class="text-gray-600 text-sm">
          包含完整的主程序和插件示例，覆盖了开发、生产环境的使用场景。
        </p>
      </div>
    </section>

    <!-- Basic Examples -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">基础示例</h2>
      
      <!-- Main Application Example -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">主程序完整示例</h3>
        
        <h4 class="font-semibold text-gray-900">1. pom.xml 依赖配置</h4>
        <pre><code>&lt;project&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;groupId&gt;com.example&lt;/groupId&gt;
    &lt;artifactId&gt;springboot-demo&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;
    
    &lt;name&gt;springboot-demo&lt;/name&gt;
    &lt;description&gt;Spring Boot 3.5.5最小框架示例&lt;/description&gt;
    
    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;3.5.5&lt;/version&gt;
        &lt;relativePath/&gt;
    &lt;/parent&gt;
    
    &lt;properties&gt;
        &lt;java.version&gt;17&lt;/java.version&gt;
    &lt;/properties&gt;
    
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;io.micrometer&lt;/groupId&gt;
            &lt;artifactId&gt;micrometer-registry-prometheus&lt;/artifactId&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit-core&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit-common&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit-bootstrap&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
            &lt;artifactId&gt;lombok&lt;/artifactId&gt;
            &lt;optional&gt;true&lt;/optional&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
    
    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot3-brick-bootkit-maven-packager&lt;/artifactId&gt;
                &lt;version&gt;4.0.1&lt;/version&gt;
                &lt;configuration&gt;
                    &lt;mode&gt;main&lt;/mode&gt;
                    &lt;mainConfig&gt;
                        &lt;mainClass&gt;com.example.demo.DemoApplication&lt;/mainClass&gt;
                        &lt;packageType&gt;jar&lt;/packageType&gt;
                    &lt;/mainConfig&gt;
                &lt;/configuration&gt;
                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;repackage&lt;/goal&gt;
                        &lt;/goals&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;</code></pre>
        
        <h4 class="font-semibold text-gray-900">2. application.yml 配置</h4>
        <pre><code>server:
  port: 8080

spring:
  application:
    name: brick-bootkit-example

plugin:
  # 运行模式：dev(开发) 或 prod(生产)
  runMode: dev
  
  # 主程序扫描包名
  mainPackage: com.example.main
  
  # 插件路径
  pluginPath:
    - D://project/plugins
    - ./plugins-dev
  
  # 是否启用插件ID作为路径前缀
  enablePluginIdRestPathPrefix: true
  
  # 插件管理接口端口
  management:
    port: 8081

# 日志配置
logging:
  level:
    com.zqzqq.bootkits: DEBUG
    com.example: INFO</code></pre>
        
        <h4 class="font-semibold text-gray-900">3. 主程序启动类</h4>
        <pre><code>import com.zqzqq.bootkits.loader.launcher.SpringMainBootstrap;
import com.zqzqq.bootkits.loader.launcher.SpringBootstrap;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MainApplication implements SpringBootstrap {

    public static void main(String[] args) {
        SpringMainBootstrap.launch(MainApplication.class, args);
    }

    @Override
    public void run(String[] args) throws Exception {
        SpringApplication.run(MainApplication.class, args);
    }
    
    @GetMapping("/")
    public String home() {
        return "主程序运行中，插件框架已启动";
    }
    
    @GetMapping("/plugins")
    public String plugins() {
        return "插件管理界面可以通过 /actuator/plugins 访问";
    }
}</code></pre>
      </div>

      <!-- Plugin Example -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件完整示例</h3>
        
        <h4 class="font-semibold text-gray-900">1. 插件 pom.xml 配置</h4>
        <pre><code>&lt;project&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;3.5.5&lt;/version&gt;
        &lt;relativePath/&gt;
    &lt;/parent&gt;

    &lt;groupId&gt;com.example&lt;/groupId&gt;
    &lt;artifactId&gt;springboot-monitor-plus&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;
    
    &lt;name&gt;springboot-monitor-plus&lt;/name&gt;
    &lt;description&gt;Spring Boot 3.5.5 springboot-monitor-plus&lt;/description&gt;
    
    &lt;properties&gt;
        &lt;java.version&gt;17&lt;/java.version&gt;
    &lt;/properties&gt;
    
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.example&lt;/groupId&gt;
            &lt;artifactId&gt;springboot-demo&lt;/artifactId&gt;
            &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
            &lt;scope&gt;provided&lt;/scope&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
            &lt;artifactId&gt;lombok&lt;/artifactId&gt;
            &lt;scope&gt;provided&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
    
    &lt;build&gt;
        &lt;resources&gt;
            &lt;resource&gt;
                &lt;directory&gt;src/main/resources&lt;/directory&gt;
                &lt;includes&gt;
                    &lt;include&gt;**/**&lt;/include&gt;
                &lt;/includes&gt;
            &lt;/resource&gt;
        &lt;/resources&gt;

        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot3-brick-bootkit-maven-packager&lt;/artifactId&gt;
                &lt;version&gt;4.0.0&lt;/version&gt;
                &lt;configuration&gt;
                    &lt;mode&gt;dev&lt;/mode&gt;
                    &lt;pluginInfo&gt;
                        &lt;id&gt;monitorPlugins&lt;/id&gt;
                        &lt;bootstrapClass&gt;com.example.demo.monitor.MonitorPlugin&lt;/bootstrapClass&gt;
                        &lt;version&gt;0.0.1&lt;/version&gt;
                        &lt;provider&gt;jove&lt;/provider&gt;
                        &lt;description&gt;monitor,提供demo&lt;/description&gt;
                    &lt;/pluginInfo&gt;
                    &lt;prodConfig&gt;
                        &lt;packageType&gt;jar&lt;/packageType&gt;
                    &lt;/prodConfig&gt;
                    &lt;includeSystemScope&gt;true&lt;/includeSystemScope&gt;
                &lt;/configuration&gt;

                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;repackage&lt;/goal&gt;
                        &lt;/goals&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;</code></pre>
        
        <h4 class="font-semibold text-gray-900">2. 插件启动类</h4>
        <pre><code>package com.example.demo.monitor;

import com.zqzqq.bootkits.bootstrap.SpringPluginBootstrap;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Slf4j
public class MonitorPlugin extends SpringPluginBootstrap {

    public static void main(String[] args) {
        new MonitorPlugin().run(args);
    }
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">3. 插件控制器</h4>
        <pre><code>package com.example.demo.monitor.controller;

import com.example.demo.monitor.service.MonitorService;
import com.zqzqq.bootkits.core.isolation.ResourceQuota;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/hello/")
public class HelloController {

    @Autowired
    MonitorService monitorService;

    @GetMapping("hello")
    public String hello(String name) {
        return "hello " + name;
    }

    @GetMapping("getTotalSystemMemory")
    public Map&lt;String, ResourceQuota&gt; getTotalSystemMemory() {
        return monitorService.getQuotaManager().getAllPluginQuotas();
    }
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">4. 插件服务类</h4>
        <pre><code>package com.example.demo.monitor.service;

import com.zqzqq.bootkits.core.isolation.QuotaManager;
import com.zqzqq.bootkits.core.isolation.ResourceQuota;
import jakarta.annotation.PostConstruct;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class MonitorService {

    @Getter
    private QuotaManager quotaManager;

    @PostConstruct
    public void init() {
        ResourceQuota resourceQuota = ResourceQuota.strictQuota();
        quotaManager = new QuotaManager(resourceQuota);
        log.info("quotaManager init");
    }
}</code></pre>
      </div>
    </section>

    <!-- Running and Testing -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">运行和测试</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">如何运行示例</h3>
        
        <h4 class="font-semibold text-gray-900">1. 克隆示例项目</h4>
        <pre><code>git clone https://github.com/v18268185209/brick-bootkit-springboot-demo.git
cd brick-bootkit-springboot-demo/springboot3demo</code></pre>
        
        <h4 class="font-semibold text-gray-900">2. 构建主程序</h4>
        <pre><code>mvn clean package -pl springboot-demo -am</code></pre>
        
        <h4 class="font-semibold text-gray-900">3. 构建插件</h4>
        <pre><code>cd plugins/monitor-plus
mvn clean package</code></pre>
        
        <h4 class="font-semibold text-gray-900">4. 启动主程序</h4>
        <pre><code>cd springboot-demo
java -jar target/springboot-demo-0.0.1-SNAPSHOT.jar</code></pre>
      </div>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">测试插件接口</h3>
        
        <p class="text-gray-700">启动成功后，您可以通过以下方式测试插件：</p>
        
        <h4 class="font-semibold text-gray-900">1. 简单Hello接口</h4>
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p class="text-sm text-gray-600 mb-2">浏览器访问或使用curl:</p>
          <code class="text-blue-600">
            http://localhost:8081/plugins/monitorPlugins/hello/hello?name=你好
          </code>
          <p class="text-sm text-gray-600 mt-2">返回结果: "hello 你好"</p>
        </div>
        
        <h4 class="font-semibold text-gray-900">2. 系统资源监控接口</h4>
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p class="text-sm text-gray-600 mb-2">浏览器访问或使用curl:</p>
          <code class="text-blue-600">
            http://localhost:8081/plugins/monitorPlugins/hello/getTotalSystemMemory
          </code>
          <p class="text-sm text-gray-600 mt-2">返回JSON格式的系统资源配额信息</p>
        </div>
        
        <h4 class="font-semibold text-gray-900">3. 管理API测试</h4>
        <pre><code># 查看已安装的插件
curl http://localhost:8081/api/plugins

# 查看插件状态
curl http://localhost:8081/api/plugins/monitorPlugins

# 查看插件详细信息
curl http://localhost:8081/api/plugins/monitorPlugins/info</code></pre>
      </div>
    </section>

    <!-- Advanced Examples -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">高级示例</h2>
      
      <!-- Plugin with Database -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">带数据库的插件示例</h3>
        
        <h4 class="font-semibold text-gray-900">1. 数据库配置 (插件内 application.yml)</h4>
        <pre><code>spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
    username: sa
    password: 
  
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true

plugin:
  feature:
    enabled: true
    cache-ttl: 300</code></pre>
        
        <h4 class="font-semibold text-gray-900">2. JPA 实体类</h4>
        <pre><code>import javax.persistence.*;

@Entity
@Table(name = "plugin_products")
@PluginComponent
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false, unique = true)
    private String sku;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
    
    @Column(length = 1000)
    private String description;
    
    @Column(nullable = false)
    private Boolean active = true;
    
    // getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    // ... other getters and setters
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">3. JPA Repository</h4>
        <pre><code>import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@PluginComponent
public interface ProductRepository extends JpaRepository&lt;Product, Long&gt; {
    
    Product findBySku(String sku);
    
    List&lt;Product&gt; findByActiveTrue();
    
    List&lt;Product&gt; findByNameContainingIgnoreCase(String name);
}</code></pre>
        
        <h4 class="font-semibold text-gray-900">4. 数据库服务类</h4>
        <pre><code>import com.zqzqq.bootkits.core.annotation.PluginComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@PluginComponent
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;
    
    public List&lt;Product&gt; getAllProducts() {
        return productRepository.findByActiveTrue();
    }
    
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }
    
    public Product getProductBySku(String sku) {
        return productRepository.findBySku(sku);
    }
    
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}</code></pre>
      </div>

      <!-- Plugin with External Service -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">调用外部服务的插件</h3>
        
        <pre><code>import com.zqzqq.bootkits.core.annotation.PluginComponent;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;

@Service
@PluginComponent
public class ExternalApiService {
    
    @Value("${external.api.base-url}")
    private String baseUrl;
    
    @Autowired
    private RestTemplate restTemplate;
    
    public ExternalUser getUserInfo(String userId) {
        String url = baseUrl + "/users/" + userId;
        return restTemplate.getForObject(url, ExternalUser.class);
    }
    
    public List&lt;ExternalUser&gt; searchUsers(String keyword) {
        String url = baseUrl + "/users/search?keyword=" + keyword;
        ExternalUser[] users = restTemplate.getForObject(url, ExternalUser[].class);
        return Arrays.asList(users != null ? users : new ExternalUser[0]);
    }
}</code></pre>
      </div>

      <!-- Plugin Interceptor Example -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件拦截器示例</h3>
        
        <pre><code>import com.zqzqq.bootkits.core.context.PluginContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;

@Component
@PluginComponent
public class LoggingInterceptor implements HandlerInterceptor {
    
    @Override
    public boolean preHandle(HttpServletRequest request, 
                           HttpServletResponse response, 
                           Object handler) throws Exception {
        
        String pluginId = PluginContextHolder.getCurrentPluginId();
        String uri = request.getRequestURI();
        
        System.out.println(String.format(
            "[%s] Plugin %s handling request: %s at %s",
            Thread.currentThread().getName(),
            pluginId, 
            uri, 
            LocalDateTime.now()
        ));
        
        // 可以在这里添加访问控制逻辑
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
        // 请求完成后的清理逻辑
    }
}</code></pre>
      </div>
    </section>

    <!-- Integration Examples -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">集成示例</h2>
      
      <!-- Security Integration -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">与 Spring Security 集成</h3>
        
        <pre><code>import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;

@Service
@PluginComponent
public class SecurityService {
    
    public String getCurrentUserId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth instanceof JwtAuthenticationToken) {
            JwtAuthenticationToken jwtAuth = (JwtAuthenticationToken) auth;
            return jwtAuth.getToken().getClaim("user_id");
        }
        return "anonymous";
    }
    
    public boolean hasPermission(String permission) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth != null && auth.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals(permission));
    }
}</code></pre>
      </div>

      <!-- Message Queue Integration -->
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">与消息队列集成</h3>
        
        <pre><code>import com.zqzqq.bootkits.core.annotation.PluginComponent;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;

@Service
@PluginComponent
public class MessageService {
    
    @Autowired
    private RabbitTemplate rabbitTemplate;
    
    @Value("${rabbitmq.exchange}")
    private String exchange;
    
    @Value("${rabbitmq.queue}")
    private String queue;
    
    public void sendMessage(String message) {
        rabbitTemplate.convertAndSend(exchange, "plugin.message", message);
    }
    
    @RabbitListener(queues = "#{@queue}")
    public void handleMessage(String message) {
        System.out.println("插件接收消息: " + message);
        // 处理消息逻辑
    }
}</code></pre>
      </div>
    </section>

    <!-- Build and Deploy -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">构建和部署</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">开发环境构建</h3>
          <h4 class="font-semibold text-gray-900 mb-2">主程序构建：</h4>
          <pre><code class="bash"># 构建主程序
mvn clean install

# 运行主程序
java -jar target/main-application-1.0.0.jar</code></pre>
          
          <h4 class="font-semibold text-gray-900 mb-2">插件构建：</h4>
          <pre><code class="bash"># 构建插件（开发模式）
mvn clean package

# 插件将被输出到 target/ 目录
# 插件ID将自动解析为 artifactId-version</code></pre>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">生产环境构建</h3>
          <h4 class="font-semibold text-gray-900 mb-2">插件打包配置：</h4>
          <pre><code>&lt;mode&gt;prod&lt;/mode&gt;
&lt;pluginInfo&gt;
    &lt;id&gt;monitorPlugins&lt;/id&gt;
    &lt;bootstrapClass&gt;com.example.plugin.UserServicePlugin&lt;/bootstrapClass&gt;
    &lt;version&gt;1.0.0&lt;/version&gt;
    &lt;requires&gt;
        &lt;require&gt;
            &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit-bootstrap&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
        &lt;/require&gt;
    &lt;/requires&gt;
&lt;/pluginInfo&gt;</code></pre>
          
          <h4 class="font-semibold text-gray-900 mb-2">生产部署：</h4>
          <pre><code class="bash"># 插件将被打包为 jar 文件
# 可以通过 REST API 或管理界面安装

curl -X POST http://localhost:8081/api/plugins/install \
     -H "Content-Type: application/json" \
     -d '{"filePath": "/path/to/monitorPlugins-1.0.0.jar"}'</code></pre>
        </div>
      </div>
    </section>

    <!-- Testing -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">测试插件</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">API 测试示例</h3>
        
        <h4 class="font-semibold text-gray-900">1. 检查插件状态</h4>
        <pre><code class="bash"># 获取所有插件状态
curl http://localhost:8081/api/plugins

# 获取特定插件信息
curl http://localhost:8081/api/plugins/monitorPlugins</code></pre>
        
        <h4 class="font-semibold text-gray-900">2. 测试插件接口</h4>
        <pre><code class="bash"># 获取用户列表
curl http://localhost:8080/plugins/monitorPlugins/user

# 创建用户
curl -X POST http://localhost:8080/plugins/monitorPlugins/user \
     -H "Content-Type: application/json" \
     -d '{"name": "王五", "email": "wangwu@example.com"}'

# 更新用户
curl -X PUT http://localhost:8080/plugins/monitorPlugins/user/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "王五", "email": "wangwu2@example.com"}'

# 删除用户
curl -X DELETE http://localhost:8080/plugins/monitorPlugins/user/1</code></pre>
        
        <h4 class="font-semibold text-gray-900">3. 插件生命周期管理</h4>
        <pre><code class="bash"># 启动插件
curl -X POST http://localhost:8081/api/plugins/monitorPlugins/start

# 停止插件
curl -X POST http://localhost:8081/api/plugins/monitorPlugins/stop

# 重载插件
curl -X POST http://localhost:8081/api/plugins/monitorPlugins/reload

# 卸载插件
curl -X DELETE http://localhost:8081/api/plugins/monitorPlugins</code></pre>
      </div>
    </section>
  </div>
</template>