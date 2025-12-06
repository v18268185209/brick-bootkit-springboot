<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">快速开始</h1>
      <p class="text-lg text-gray-600 mb-8">
        通过以下步骤，您可以在5分钟内搭建一个完整的插件式SpringBoot应用。
      </p>
    </div>

    <!-- Prerequisites -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">前置要求</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">JDK版本</h3>
          <p class="text-gray-600">JDK 1.8+ (推荐JDK 17)</p>
        </div>
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Maven</h3>
          <p class="text-gray-600">Apache Maven 3.6+</p>
        </div>
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">SpringBoot</h3>
          <p class="text-gray-600">SpringBoot 2.3.1+ 或 3.x</p>
        </div>
      </div>
    </section>

    <!-- Step 1: Create Main Application -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">步骤1：创建主程序</h2>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">1.1 添加依赖</h3>
        <div class="card">
          <p class="text-gray-700 mb-4">在主程序的pom.xml中添加框架依赖：</p>
          <pre><code>&lt;dependency&gt;
    &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot3-brick-bootkit&lt;/artifactId&gt;
    &lt;version&gt;4.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
        </div>

        <h3 class="text-xl font-semibold text-gray-900">1.2 配置文件</h3>
        <div class="card">
          <p class="text-gray-700 mb-4">在application.yml中添加插件配置：</p>
          <pre><code>plugin:
  # 运行模式：dev(开发) 或 prod(生产)
  runMode: dev
  # 主程序扫描包名
  mainPackage: com.example.yourapp
  # 插件路径
  pluginPath:
    - D://your/project/plugins
    - D://your/project/plugin-repository</code></pre>
          
          <div class="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4">
            <p class="text-blue-700 text-sm">
              <strong>配置说明：</strong>
              <br>• runMode: 开发环境使用dev，生产环境使用prod
              <br>• mainPackage: 主程序扫描的包名
              <br>• pluginPath: 插件目录，支持多个路径
            </p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-900">1.3 修改启动类</h3>
        <div class="card">
          <p class="text-gray-700 mb-4">修改SpringBoot启动类，实现SpringBootstrap接口：</p>
          <pre><code>import com.zqzqq.bootkits.loader.launcher.SpringMainBootstrap;
import com.zqzqq.bootkits.loader.launcher.SpringBootstrap;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application implements SpringBootstrap {

    public static void main(String[] args) {
        // 使用SpringMainBootstrap引导启动
        SpringMainBootstrap.launch(Application.class, args);
    }

    @Override
    public void run(String[] args) throws Exception {
        // 在这里启动SpringBoot应用
        SpringApplication.run(Application.class, args);
    }
}</code></pre>
        </div>

        <h3 class="text-xl font-semibold text-gray-900">1.4 打包主程序</h3>
        <div class="card">
          <p class="text-gray-700 mb-4">使用Maven命令打包主程序：</p>
          <pre><code class="bash">mvn clean install</code></pre>
        </div>
      </div>
    </section>

    <!-- Step 2: Create Plugin -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">步骤2：创建插件</h2>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">2.1 添加依赖</h3>
        <div class="card">
          <p class="text-gray-700 mb-4">在插件的pom.xml中添加必要依赖：</p>
          <pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;
    &lt;version&gt;${和主程序一致的springboot版本}&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot3-brick-bootkit-bootstrap&lt;/artifactId&gt;
    &lt;version&gt;4.0.1&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;主程序的groupId&lt;/groupId&gt;
    &lt;artifactId&gt;主程序的artifactId&lt;/artifactId&gt;
    &lt;version&gt;主程序的version&lt;/version&gt;
    &lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;</code></pre>
        </div>

        <h3 class="text-xl font-semibold text-gray-900">2.2 定义插件引导类</h3>
        <div class="card">
          <p class="text-gray-700 mb-4">创建插件主入口，继承SpringPluginBootstrap：</p>
          <pre><code>import com.zqzqq.bootkits.bootstrap.SpringPluginBootstrap;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExamplePlugin extends SpringPluginBootstrap {
    
    public static void main(String[] args) {
        new ExamplePlugin().run(args);
    }
    
}</code></pre>
          
          <div class="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="text-yellow-700 text-sm">
              <strong>注意事项：</strong>插件包名不能和主程序包名一致。如需一致，插件包名范围须小于等于主程序包名。
            </p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-900">2.3 配置Maven打包插件</h3>
        <div class="card">
          <p class="text-gray-700 mb-4">在插件的pom.xml中添加打包配置：</p>
          <pre><code>&lt;build&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;com.zqzqq.bootkits&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot3-brick-bootkit-maven-packager&lt;/artifactId&gt;
            &lt;version&gt;4.0.1&lt;/version&gt;
            &lt;configuration&gt;
                &lt;!-- 当前打包模式：开发模式 --&gt;
                &lt;mode&gt;dev&lt;/mode&gt;
                &lt;!-- 插件信息定义 --&gt;
                &lt;pluginInfo&gt;
                    &lt;!-- 插件id --&gt;
                    &lt;id&gt;plugin-example&lt;/id&gt;
                    &lt;!-- 插件入口类 --&gt;
                    &lt;bootstrapClass&gt;com.example.plugin.ExamplePlugin&lt;/bootstrapClass&gt;
                    &lt;!-- 插件版本 --&gt;
                    &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
                &lt;/pluginInfo&gt;
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
&lt;/build&gt;</code></pre>
        </div>

        <h3 class="text-xl font-semibold text-gray-900">2.4 创建示例Controller</h3>
        <div class="card">
          <p class="text-gray-700 mb-4">创建一个简单的REST接口：</p>
          <pre><code>import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/example")
public class ExampleController {
    @GetMapping
    public String hello(){
        return "Hello from plugin!";
    }
}</code></pre>
        </div>

        <h3 class="text-xl font-semibold text-gray-900">2.5 编译插件</h3>
        <div class="card">
          <p class="text-gray-700 mb-4">使用Maven命令编译插件：</p>
          <pre><code class="bash">mvn clean package</code></pre>
        </div>
      </div>
    </section>

    <!-- Step 3: Test -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">步骤3：启动测试</h2>
      
      <div class="space-y-4">
        <div class="card">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">3.1 启动主程序</h3>
          <p class="text-gray-700 mb-4">启动主程序后，在控制台日志中查看关键信息：</p>
          <pre><code>插件加载环境: dev
插件[plugin-example@1.0.0-SNAPSHOT]加载成功
插件[plugin-example]注册接口: {GET [/plugins/plugin-example/example]}
插件[plugin-example@1.0.0-SNAPSHOT]启动成功
插件初始化完成</code></pre>
        </div>

        <div class="card">
          <h3 class="text-xl font-semibold text-gray-900 mb-3">3.2 测试插件接口</h3>
          <p class="text-gray-700 mb-4">在浏览器中访问插件接口：</p>
          <div class="bg-green-50 border border-green-200 rounded-lg p-4">
            <code class="text-green-800">http://127.0.0.1:8080/plugins/plugin-example/example</code>
          </div>
          <p class="text-gray-600 text-sm mt-2">
            如果返回 "Hello from plugin!"，说明插件集成成功！
          </p>
        </div>
      </div>
    </section>

    <!-- Next Steps -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">下一步</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link to="/configuration" class="card hover:shadow-lg transition-shadow duration-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">详细配置</h3>
          <p class="text-gray-600">了解更多配置选项和高级功能</p>
        </router-link>
        
        <router-link to="/plugins" class="card hover:shadow-lg transition-shadow duration-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">插件开发</h3>
          <p class="text-gray-600">深入学习插件开发和高级特性</p>
        </router-link>
        
        <router-link to="/examples" class="card hover:shadow-lg transition-shadow duration-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">示例项目</h3>
          <p class="text-gray-600">查看完整的示例代码和最佳实践</p>
        </router-link>
      </div>
    </section>
  </div>
</template>