<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">API 参考文档</h1>
      <p class="text-lg text-gray-600 mb-8">
        Brick BootKit SpringBoot 提供的核心API接口和注解说明。
      </p>
    </div>

    <!-- Core Classes -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">核心类</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">SpringMainBootstrap</h3>
        <p class="text-gray-700">主程序启动引导类，用于启动插件框架。</p>
        <pre><code>public class SpringMainBootstrap {
    
    /**
     * 启动主程序
     * @param mainClass 主程序启动类
     * @param args 启动参数
     */
    public static void launch(Class&lt;?&gt; mainClass, String[] args)
    
    /**
     * 启动主程序（异步）
     * @param mainClass 主程序启动类
     * @param args 启动参数
     * @param callback 启动完成回调
     */
    public static void launchAsync(Class&lt;?&gt; mainClass, 
                                 String[] args, 
                                 BootstrapCallback callback)
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">SpringPluginBootstrap</h3>
        <p class="text-gray-700">插件引导基类，所有插件都必须继承此类。</p>
        <pre><code>public abstract class SpringPluginBootstrap {
    
    /**
     * 插件运行入口
     * @param args 启动参数
     */
    public abstract void run(String[] args)
    
    /**
     * 插件初始化
     */
    protected abstract void initialize() throws Exception
    
    /**
     * 插件关闭
     */
    protected abstract void shutdown() throws Exception
    
    /**
     * 获取插件信息
     */
    public abstract PluginInfo getPluginInfo()
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">PluginManager</h3>
        <p class="text-gray-700">插件管理器，提供插件的动态管理功能。</p>
        <pre><code>public interface PluginManager {
    
    /**
     * 安装插件
     */
    PluginResult install(PluginInfo pluginInfo)
    
    /**
     * 卸载插件
     */
    PluginResult uninstall(String pluginId)
    
    /**
     * 启动插件
     */
    PluginResult start(String pluginId)
    
    /**
     * 停止插件
     */
    PluginResult stop(String pluginId)
    
    /**
     * 重载插件
     */
    PluginResult reload(String pluginId)
    
    /**
     * 获取插件状态
     */
    PluginState getPluginState(String pluginId)
    
    /**
     * 获取所有插件
     */
    List&lt;PluginInfo&gt; getAllPlugins()
}</code></pre>
      </div>
    </section>

    <!-- Annotations -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">注解说明</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@PluginComponent</h3>
        <p class="text-gray-700">标记一个类为插件组件，该类会被插件加载器识别并注册。</p>
        <pre><code>@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD, ElementType.FIELD})
public @interface PluginComponent {
    
    /**
     * 组件名称
     */
    String value() default "";
    
    /**
     * 是否单例
     */
    boolean singleton() default true;
    
    /**
     * 初始化顺序，数值越小越早初始化
     */
    int order() default 0;
}</code></pre>
        
        <h4 class="font-semibold text-gray-900 mt-4">使用示例：</h4>
        <pre><code>@PluginComponent("exampleService")
public class ExampleService {
    // 服务实现
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@AutowiredType</h3>
        <p class="text-gray-700">指定依赖注入的类型，特别是在插件中注入主程序Bean时使用。</p>
        <pre><code>@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD, ElementType.PARAMETER, ElementType.CONSTRUCTOR})
public @interface AutowiredType {
    
    /**
     * 注入类型
     */
    Class&lt;?&gt; value();
    
    /**
     * 是否包含主程序Bean
     */
    boolean includeMainBeans() default false;
}</code></pre>
        
        <h4 class="font-semibold text-gray-900 mt-4">使用示例：</h4>
        <pre><code>@AutowiredType(MainConfiguration.class)
@Autowired
private MainConfigService mainConfigService;</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">@PluginRestController</h3>
        <p class="text-gray-700">专门用于插件的REST控制器，自动添加插件路径前缀。</p>
        <pre><code>@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@RestController
@RequestMapping
public @interface PluginRestController {
    
    /**
     * 请求映射路径
     */
    String[] value() default {};
    
    /**
     * 是否启用插件路径前缀
     */
    boolean enablePluginPath() default true;
}</code></pre>
        
        <h4 class="font-semibold text-gray-900 mt-4">使用示例：</h4>
        <pre><code>@PluginRestController("/example")
public class ExampleController {
    // 控制器实现
}</code></pre>
      </div>
    </section>

    <!-- Plugin Context -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件上下文</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">PluginContextHolder</h3>
        <p class="text-gray-700">提供插件上下文的访问接口。</p>
        <pre><code>public class PluginContextHolder {
    
    /**
     * 获取当前插件ID
     */
    public static String getCurrentPluginId()
    
    /**
     * 获取当前插件信息
     */
    public static PluginInfo getCurrentPluginInfo()
    
    /**
     * 获取当前插件ClassLoader
     */
    public static ClassLoader getCurrentClassLoader()
    
    /**
     * 获取插件Bean
     */
    public static &lt;T&gt; T getBean(String name, Class&lt;T&gt; type)
    
    /**
     * 设置插件上下文
     */
    public static void setPluginContext(PluginContext context)
    
    /**
     * 清除插件上下文
     */
    public static void clearPluginContext()
}</code></pre>
      </div>
    </section>

    <!-- Plugin Info -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件信息</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">PluginInfo</h3>
        <p class="text-gray-700">描述插件的基本信息。</p>
        <pre><code>public class PluginInfo {
    
    /**
     * 插件ID
     */
    private String id;
    
    /**
     * 插件名称
     */
    private String name;
    
    /**
     * 插件版本
     */
    private String version;
    
    /**
     * 插件描述
     */
    private String description;
    
    /**
     * 插件入口类
     */
    private String bootstrapClass;
    
    /**
     * 插件作者
     */
    private String author;
    
    /**
     * 插件依赖
     */
    private List&lt;PluginDependency&gt; dependencies;
    
    /**
     * 插件配置
     */
    private Map&lt;String, Object&gt; configuration;
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">PluginState</h3>
        <p class="text-gray-700">描述插件的当前状态。</p>
        <pre><code>public enum PluginState {
    
    /**
     * 未解析
     */
    UNPARSED,
    
    /**
     * 已解析
     */
    PARSED,
    
    /**
     * 已加载
     */
    LOADED,
    
    /**
     * 已启动
     */
    STARTED,
    
    /**
     * 已停止
     */
    STOPPED,
    
    /**
     * 已卸载
     */
    UNLOADED,
    
    /**
     * 启动失败
     */
    STARTED_FAILURE,
    
    /**
     * 停止失败
     */
    STOPPED_FAILURE,
    
    /**
     * 卸载失败
     */
    UNLOADED_FAILURE
}</code></pre>
      </div>
    </section>

    <!-- Plugin Events -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件事件</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">PluginLifecycleEvent</h3>
        <p class="text-gray-700">插件生命周期事件。</p>
        <pre><code>public class PluginLifecycleEvent extends ApplicationEvent {
    
    /**
     * 插件ID
     */
    private String pluginId;
    
    /**
     * 插件状态
     */
    private PluginState state;
    
    /**
     * 插件信息
     */
    private PluginInfo pluginInfo;
    
    /**
     * 异常信息（如果有）
     */
    private Exception exception;
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">PluginConfigurationChangeEvent</h3>
        <p class="text-gray-700">插件配置变更事件。</p>
        <pre><code>public class PluginConfigurationChangeEvent extends PluginLifecycleEvent {
    
    /**
     * 配置键
     */
    private String key;
    
    /**
     * 旧值
     */
    private Object oldValue;
    
    /**
     * 新值
     */
    private Object newValue;
}</code></pre>
      </div>
    </section>

    <!-- Plugin Operations -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件操作</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">PluginResult</h3>
        <p class="text-gray-700">插件操作结果封装类。</p>
        <pre><code>public class PluginResult {
    
    /**
     * 是否成功
     */
    private boolean success;
    
    /**
     * 结果代码
     */
    private int code;
    
    /**
     * 结果消息
     */
    private String message;
    
    /**
     * 插件信息
     */
    private PluginInfo pluginInfo;
    
    /**
     * 异常信息
     */
    private Exception exception;
    
    /**
     * 创建成功结果
     */
    public static PluginResult success(PluginInfo pluginInfo)
    
    /**
     * 创建失败结果
     */
    public static PluginResult failure(String message)
    public static PluginResult failure(int code, String message)
}</code></pre>
      </div>
    </section>

    <!-- Utility Classes -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">工具类</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">PluginUser</h3>
        <p class="text-gray-700">提供插件用户操作的工具类。</p>
        <pre><code>public class PluginUser {
    
    /**
     * 获取Bean
     */
    public static &lt;T&gt; T getBean(String name, Class&lt;T&gt; type)
    public static &lt;T&gt; T getBean(Class&lt;T&gt; type)
    
    /**
     * 获取主程序Bean
     */
    public static &lt;T&gt; T getMainBean(String name, Class&lt;T&gt; type)
    public static &lt;T&gt; T getMainBean(Class&lt;T&gt; type)
    
    /**
     * 是否包含Bean
     */
    public static boolean containsBean(String name)
    
    /**
     * 获取配置文件属性
     */
    public static String getProperty(String key)
    public static &lt;T&gt; T getProperty(String key, Class&lt;T&gt; type)
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">PluginClassLoaderUtils</h3>
        <p class="text-gray-700">插件类加载器工具类。</p>
        <pre><code>public class PluginClassLoaderUtils {
    
    /**
     * 加载插件类
     */
    public static Class&lt;?&gt; loadClass(String pluginId, String className)
    
    /**
     * 获取插件资源
     */
    public static URL getResource(String pluginId, String resourcePath)
    
    /**
     * 获取插件资源输入流
     */
    public static InputStream getResourceAsStream(String pluginId, String resourcePath)
}</code></pre>
      </div>
    </section>

    <!-- Exception Classes -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">异常类</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">PluginException</h3>
        <p class="text-gray-700">插件框架的基础异常类。</p>
        <pre><code>public class PluginException extends RuntimeException {
    
    /**
     * 错误码
     */
    private String errorCode;
    
    /**
     * 错误参数
     */
    private Object[] args;
    
    public PluginException(String message)
    public PluginException(String message, Throwable cause)
    public PluginException(String errorCode, String message)
    public PluginException(String errorCode, String message, Object... args)
    
    /**
     * 获取错误码
     */
    public String getErrorCode()
    
    /**
     * 获取错误参数
     */
    public Object[] getArgs()
}</code></pre>
      </div>
    </section>

    <!-- REST API Endpoints -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">REST API 端点</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件管理接口</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">方法</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">路径</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">描述</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GET</td>
                <td class="px-6 py-4 text-sm text-gray-500">/api/plugins</td>
                <td class="px-6 py-4 text-sm text-gray-500">获取所有插件列表</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GET</td>
                <td class="px-6 py-4 text-sm text-gray-500">/api/plugins/{pluginId}</td>
                <td class="px-6 py-4 text-sm text-gray-500">获取指定插件信息</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">POST</td>
                <td class="px-6 py-4 text-sm text-gray-500">/api/plugins/{pluginId}/start</td>
                <td class="px-6 py-4 text-sm text-gray-500">启动插件</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">POST</td>
                <td class="px-6 py-4 text-sm text-gray-500">/api/plugins/{pluginId}/stop</td>
                <td class="px-6 py-4 text-sm text-gray-500">停止插件</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">POST</td>
                <td class="px-6 py-4 text-sm text-gray-500">/api/plugins/{pluginId}/reload</td>
                <td class="px-6 py-4 text-sm text-gray-500">重载插件</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DELETE</td>
                <td class="px-6 py-4 text-sm text-gray-500">/api/plugins/{pluginId}</td>
                <td class="px-6 py-4 text-sm text-gray-500">卸载插件</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>