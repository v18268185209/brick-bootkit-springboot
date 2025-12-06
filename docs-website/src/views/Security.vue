<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">安全机制</h1>
      <p class="text-lg text-gray-600 mb-8">
        详细介绍Brick BootKit的安全防护体系，包括插件隔离、权限控制、安全认证、代码签名和数据保护等安全机制。
      </p>
    </div>

    <!-- Overview -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">安全机制概述</h2>
      <div class="card space-y-4">
        <p class="text-gray-700">
          Brick BootKit构建了全方位的安全防护体系，确保插件系统的安全性和稳定性。
          通过多层安全机制保护系统免受恶意插件和攻击的威胁。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-semibold text-blue-900 mb-2">多层防护</h3>
            <p class="text-blue-700 text-sm">多层次安全防护机制</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-900 mb-2">权限控制</h3>
            <p class="text-green-700 text-sm">精细化的权限管理系统</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="font-semibold text-purple-900 mb-2">安全隔离</h3>
            <p class="text-purple-700 text-sm">插件间安全隔离</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Architecture -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">安全架构</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">安全架构图</h3>
        <p class="text-gray-700">
          Brick BootKit采用分层安全架构，从底层到应用层提供全方位保护：
        </p>
        <pre><code class="text-sm">┌─────────────────────────────────────────────────────────┐
│                   应用层安全 (Application Layer)           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 权限验证     │  │ 安全审计     │  │ 输入验证     │     │
│  │ Auth        │  │ Audit       │  │ Validation  │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   插件层安全 (Plugin Layer)               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 插件隔离     │  │ 资源限制     │  │ 接口控制     │     │
│  │ Isolation   │  │ Limits      │  │ Interface   │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   容器层安全 (Container Layer)           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 类加载器     │  │ 沙箱环境     │  │ 访问控制     │     │
│  │ ClassLoader │  │ Sandbox     │  │ Access Ctrl │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   系统层安全 (System Layer)              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 进程隔离     │  │ 内存保护     │  │ 文件系统     │     │
│  │ Process     │  │ Memory      │  │ File System │     │
│  │ Isolation   │  │ Protection  │  │ Security    │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">安全组件</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">隔离机制</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 类加载器隔离</li>
              <li>• 线程隔离</li>
              <li>• 内存空间隔离</li>
              <li>• 资源访问隔离</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">访问控制</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 权限验证</li>
              <li>• 资源限制</li>
              <li>• 接口访问控制</li>
              <li>• 网络访问控制</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">安全审计</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 操作日志记录</li>
              <li>• 安全事件监控</li>
              <li>• 审计报告生成</li>
              <li>• 异常行为检测</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-3">威胁防护</h4>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• 代码签名验证</li>
              <li>• 恶意代码检测</li>
              <li>• 注入攻击防护</li>
              <li>• 资源耗尽防护</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Plugin Isolation -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">插件隔离</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">类加载器隔离</h3>
        <p class="text-gray-700">
          通过自定义类加载器实现插件间的完全隔离：
        </p>
        <pre><code class="java">public class PluginClassLoader extends URLClassLoader {
    
    private final PluginSecurityManager securityManager;
    private final AccessControlContext accessContext;
    private final Set&lt;String&gt; permittedClasses;
    
    public PluginClassLoader(PluginInfo pluginInfo, SecurityManager securityManager) {
        super(pluginInfo.getClasspath(), null);
        this.securityManager = securityManager;
        this.accessContext = createAccessControlContext(pluginInfo);
        this.permittedClasses = initializePermittedClasses(pluginInfo);
    }
    
    @Override
    protected Class&lt;?&gt; loadClass(String name, boolean resolve) throws ClassNotFoundException {
        synchronized (getClassLoadingLock(name)) {
            // 1. 检查是否已加载
            Class&lt;?&gt; clazz = findLoadedClass(name);
            if (clazz != null) {
                return clazz;
            }
            
            // 2. 检查允许的类
            if (!isClassPermitted(name)) {
                throw new SecurityException("类访问被拒绝: " + name);
            }
            
            // 3. 使用插件类加载器加载
            try {
                clazz = findClass(name);
                
                // 4. 安全检查
                securityManager.validateClassLoad(pluginId, name, clazz);
                
                if (resolve) {
                    resolveClass(clazz);
                }
                
                return clazz;
                
            } catch (ClassNotFoundException e) {
                // 5. 委派给父类加载器
                return super.loadClass(name, resolve);
            }
        }
    }
    
    private boolean isClassPermitted(String className) {
        // 检查类是否在允许列表中
        return permittedClasses.contains(className) || 
               permittedClasses.stream().anyMatch(className::startsWith);
    }
    
    private AccessControlContext createAccessControlContext(PluginInfo pluginInfo) {
        PermissionCollection permissions = new Permissions();
        
        // 添加基本权限
        permissions.add(new FilePermission("&lt;&lt;ALL FILES&gt;&gt;", "read"));
        permissions.add(new SocketPermission("*", "connect,listen,accept"));
        permissions.add(new PropertyPermission("*", "read"));
        
        // 根据插件配置添加特定权限
        if (pluginInfo.hasDatabaseAccess()) {
            permissions.add(new SQLPermission("setLoginTimeout", null));
        }
        
        if (pluginInfo.hasNetworkAccess()) {
            permissions.add(new SocketPermission("localhost", "connect"));
        }
        
        return new AccessControlContext(new ProtectionDomain[] {
            new ProtectionDomain(null, permissions)
        });
    }
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">资源访问控制</h3>
        <pre><code class="java">@PluginComponent
public class ResourceAccessController {
    
    @ResourceAccessControl(maxMemory = "256MB", maxThreads = 10)
    public class PluginResourceManager {
        
        private final ConcurrentHashMap&lt;String, ResourceQuota&gt; resourceQuotas = new ConcurrentHashMap&lt;&gt;();
        private final ScheduledExecutorService monitorExecutor = Executors.newScheduledThreadPool(1);
        
        public ResourceAccessController() {
            // 定期监控资源使用情况
            monitorExecutor.scheduleAtFixedRate(this::monitorResourceUsage, 0, 30, TimeUnit.SECONDS);
        }
        
        public void allocateResource(String pluginId, ResourceType type, long size) {
            ResourceQuota quota = resourceQuotas.get(pluginId);
            if (quota == null) {
                quota = new ResourceQuota();
                resourceQuotas.put(pluginId, quota);
            }
            
            switch (type) {
                case MEMORY:
                    quota.allocateMemory(size);
                    break;
                case THREAD:
                    quota.allocateThreads(1);
                    break;
                case FILE_HANDLE:
                    quota.allocateFileHandles(1);
                    break;
                default:
                    throw new UnsupportedOperationException("不支持的资源类型: " + type);
            }
            
            // 检查是否超出配额
            if (quota.isExceeded()) {
                throw new ResourceQuotaExceededException("插件 " + pluginId + " 超出资源配额");
            }
        }
        
        private void monitorResourceUsage() {
            resourceQuotas.forEach((pluginId, quota) -> {
                long currentMemory = getCurrentMemoryUsage(pluginId);
                int currentThreads = getCurrentThreadCount(pluginId);
                int currentFileHandles = getCurrentFileHandleCount(pluginId);
                
                if (quota.shouldAlert(currentMemory, currentThreads, currentFileHandles)) {
                    handleResourceAlert(pluginId, quota, currentMemory, currentThreads, currentFileHandles);
                }
            });
        }
    }
    
    public enum ResourceType {
        MEMORY, THREAD, FILE_HANDLE, NETWORK_CONNECTION
    }
    
    public static class ResourceQuota {
        private long maxMemory = 256 * 1024 * 1024; // 256MB
        private int maxThreads = 10;
        private int maxFileHandles = 100;
        private int maxNetworkConnections = 5;
        
        private AtomicLong currentMemory = new AtomicLong(0);
        private AtomicInteger currentThreads = new AtomicInteger(0);
        private AtomicInteger currentFileHandles = new AtomicInteger(0);
        private AtomicInteger currentNetworkConnections = new AtomicInteger(0);
        
        public void allocateMemory(long size) {
            currentMemory.addAndGet(size);
        }
        
        public void allocateThreads(int count) {
            currentThreads.addAndGet(count);
        }
        
        public boolean isExceeded() {
            return currentMemory.get() > maxMemory ||
                   currentThreads.get() > maxThreads ||
                   currentFileHandles.get() > maxFileHandles ||
                   currentNetworkConnections.get() > maxNetworkConnections;
        }
        
        public boolean shouldAlert(long memory, int threads, int fileHandles) {
            double memoryUsage = (double) memory / maxMemory;
            return memoryUsage > 0.8 || threads > maxThreads * 0.8 || fileHandles > maxFileHandles * 0.8;
        }
    }
}</code></pre>
      </div>
    </section>

    <!-- Permission Control -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">权限控制</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">权限系统设计</h3>
        <p class="text-gray-700">
          实现细粒度的权限控制系统：
        </p>
        <pre><code class="java">@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface RequirePermission {
    String value();
    PermissionScope scope() default PermissionScope.GLOBAL;
    boolean adminOnly() default false;
}

// 权限枚举
public enum Permission {
    // 插件管理权限
    PLUGIN_INSTALL("plugin:install", "安装插件"),
    PLUGIN_UNINSTALL("plugin:uninstall", "卸载插件"),
    PLUGIN_START("plugin:start", "启动插件"),
    PLUGIN_STOP("plugin:stop", "停止插件"),
    PLUGIN_UPDATE("plugin:update", "更新插件"),
    
    // 系统权限
    SYSTEM_CONFIG("system:config", "系统配置"),
    SYSTEM_MONITOR("system:monitor", "系统监控"),
    SYSTEM_AUDIT("system:audit", "系统审计"),
    
    // 数据权限
    DATA_READ("data:read", "读取数据"),
    DATA_WRITE("data:write", "写入数据"),
    DATA_DELETE("data:delete", "删除数据"),
    
    // 网络权限
    NETWORK_CONNECT("network:connect", "网络连接"),
    NETWORK_LISTEN("network:listen", "网络监听");
    
    private final String key;
    private final String description;
    
    Permission(String key, String description) {
        this.key = key;
        this.description = description;
    }
    
    public String getKey() { return key; }
    public String getDescription() { return description; }
}

// 权限检查器
@Component
@PluginComponent
public class PermissionChecker {
    
    public boolean hasPermission(String pluginId, Permission permission) {
        PluginInfo plugin = pluginRepository.findById(pluginId);
        if (plugin == null) {
            return false;
        }
        
        // 检查插件是否被禁用
        if (plugin.isDisabled()) {
            return false;
        }
        
        // 检查插件权限
        Set&lt;Permission&gt; pluginPermissions = plugin.getPermissions();
        return pluginPermissions.contains(permission);
    }
    
    public boolean hasPermission(String pluginId, String permissionKey) {
        Permission permission = Permission.valueOf(permissionKey.toUpperCase());
        return hasPermission(pluginId, permission);
    }
    
    public void checkPermission(String pluginId, Permission permission) {
        if (!hasPermission(pluginId, permission)) {
            throw new AccessDeniedException("插件 " + pluginId + " 缺少权限: " + permission);
        }
    }
    
    public void checkPermission(String pluginId, String permissionKey) {
        if (!hasPermission(pluginId, permissionKey)) {
            throw new AccessDeniedException("插件 " + pluginId + " 缺少权限: " + permissionKey);
        }
    }
    
    public void checkMultiplePermissions(String pluginId, Permission... permissions) {
        for (Permission permission : permissions) {
            checkPermission(pluginId, permission);
        }
    }
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">权限注解使用</h3>
        <pre><code class="java">@PluginComponent
public class SecurePluginService {
    
    @Autowired
    private PermissionChecker permissionChecker;
    
    @RequirePermission(Permission.PLUGIN_INSTALL)
    public PluginInfo installPlugin(InputStream pluginPackage, String pluginId) {
        permissionChecker.checkPermission(pluginId, Permission.PLUGIN_INSTALL);
        
        // 执行插件安装逻辑
        return performInstallation(pluginPackage, pluginId);
    }
    
    @RequirePermission(Permission.PLUGIN_START)
    public void startPlugin(String pluginId) {
        permissionChecker.checkPermission(pluginId, Permission.PLUGIN_START);
        
        // 执行插件启动逻辑
        performStart(pluginId);
    }
    
    @RequirePermission(value = Permission.DATA_WRITE, adminOnly = true)
    public void updateSystemConfiguration(Map&lt;String, Object&gt; config) {
        // 检查管理员权限
        UserInfo currentUser = SecurityContextHolder.getContext().getAuthentication();
        if (!currentUser.isAdmin()) {
            throw new AccessDeniedException("只有管理员可以修改系统配置");
        }
        
        permissionChecker.checkPermission(currentUser.getPluginId(), Permission.DATA_WRITE);
        
        // 执行配置更新逻辑
        performConfigurationUpdate(config);
    }
    
    @RequirePermission(Permission.NETWORK_CONNECT)
    public String makeHttpRequest(String url, Object requestData) {
        permissionChecker.checkPermission(currentPluginId(), Permission.NETWORK_CONNECT);
        
        // 检查URL是否在白名单中
        if (!isUrlAllowed(url)) {
            throw new SecurityException("URL不在允许列表中: " + url);
        }
        
        // 执行HTTP请求
        return performHttpRequest(url, requestData);
    }
    
    private boolean isUrlAllowed(String url) {
        Set&lt;String&gt; allowedUrls = currentPlugin().getAllowedUrls();
        return allowedUrls.stream().anyMatch(url::startsWith);
    }
}

// 权限检查切面
@Aspect
@Component
public class PermissionCheckAspect {
    
    @Autowired
    private PermissionChecker permissionChecker;
    
    @Around("@annotation(requirePermission)")
    public Object checkPermission(ProceedingJoinPoint joinPoint, RequirePermission requirePermission) throws Throwable {
        String methodName = joinPoint.getSignature().getName();
        Object[] args = joinPoint.getArgs();
        
        // 获取当前插件ID
        String pluginId = PluginContextHolder.getCurrentPluginId();
        if (pluginId == null) {
            throw new SecurityException("无法获取当前插件ID");
        }
        
        // 检查权限
        Permission permission = Permission.valueOf(requirePermission.value());
        permissionChecker.checkPermission(pluginId, permission);
        
        // 检查管理员权限
        if (requirePermission.adminOnly()) {
            checkAdminPermission(pluginId);
        }
        
        // 记录权限检查
        auditLogService.logPermissionCheck(pluginId, permission, methodName, true);
        
        return joinPoint.proceed();
    }
    
    private void checkAdminPermission(String pluginId) {
        // 检查插件是否为管理员插件
        PluginInfo plugin = pluginRepository.findById(pluginId);
        if (plugin == null || !plugin.isAdmin()) {
            throw new AccessDeniedException("只有管理员插件可以执行此操作");
        }
    }
}</code></pre>
      </div>
    </section>

    <!-- Security Authentication -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">安全认证</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件身份认证</h3>
        <p class="text-gray-700">
          实现插件身份的验证和认证机制：
        </p>
        <pre><code class="java">@PluginComponent
public class PluginAuthenticationService {
    
    public PluginIdentity authenticatePlugin(String pluginId, String authToken) {
        // 1. 验证插件是否存在
        PluginInfo plugin = pluginRepository.findById(pluginId);
        if (plugin == null) {
            throw new AuthenticationException("插件不存在: " + pluginId);
        }
        
        // 2. 验证插件是否被禁用
        if (plugin.isDisabled()) {
            throw new AuthenticationException("插件已被禁用: " + pluginId);
        }
        
        // 3. 验证认证令牌
        if (!isValidAuthToken(plugin, authToken)) {
            logSecurityEvent("认证令牌验证失败", pluginId);
            throw new AuthenticationException("认证令牌无效");
        }
        
        // 4. 验证证书签名
        if (!verifyPluginSignature(plugin)) {
            logSecurityEvent("插件签名验证失败", pluginId);
            throw new AuthenticationException("插件签名验证失败");
        }
        
        // 5. 创建插件身份
        PluginIdentity identity = new PluginIdentity(pluginId);
        identity.setPermissions(plugin.getPermissions());
        identity.setValidUntil(calculateExpiryTime(plugin));
        
        logSecurityEvent("插件认证成功", pluginId);
        return identity;
    }
    
    private boolean isValidAuthToken(PluginInfo plugin, String authToken) {
        String expectedToken = generateExpectedToken(plugin);
        return ConstantTimeComparator.equal(authToken, expectedToken);
    }
    
    private String generateExpectedToken(PluginInfo plugin) {
        String data = plugin.getId() + ":" + plugin.getVersion() + ":" + plugin.getSecretKey();
        return DigestUtils.sha256Hex(data);
    }
    
    private boolean verifyPluginSignature(PluginInfo plugin) {
        try {
            // 获取插件证书
            Certificate certificate = plugin.getCertificate();
            if (certificate == null) {
                return plugin.isTrustworthy(); // 如果没有证书，检查是否可信
            }
            
            // 验证签名
            String pluginHash = plugin.getHash();
            byte[] signature = plugin.getSignature();
            
            Signature verifier = Signature.getInstance("SHA256withRSA");
            verifier.initVerify(certificate);
            verifier.update(pluginHash.getBytes());
            
            return verifier.verify(signature);
            
        } catch (Exception e) {
            log.error("插件签名验证异常: " + plugin.getId(), e);
            return false;
        }
    }
    
    private Date calculateExpiryTime(PluginInfo plugin) {
        // 认证令牌有效期：24小时
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.HOUR_OF_DAY, 24);
        return calendar.getTime();
    }
}

// 插件身份上下文
public class PluginIdentity {
    private final String pluginId;
    private final Set&lt;Permission&gt; permissions;
    private Date validUntil;
    private Map&lt;String, Object&gt; attributes;
    
    public boolean isValid() {
        return validUntil != null && new Date().before(validUntil);
    }
    
    public boolean hasPermission(Permission permission) {
        return permissions.contains(permission);
    }
}

// 插件上下文持有者
public class PluginContextHolder {
    private static final ThreadLocal&lt;PluginIdentity&gt; currentIdentity = new ThreadLocal&lt;&gt;();
    
    public static void setCurrentIdentity(PluginIdentity identity) {
        currentIdentity.set(identity);
    }
    
    public static PluginIdentity getCurrentIdentity() {
        return currentIdentity.get();
    }
    
    public static String getCurrentPluginId() {
        PluginIdentity identity = getCurrentIdentity();
        return identity != null ? identity.getPluginId() : null;
    }
    
    public static void clear() {
        currentIdentity.remove();
    }
}</code></pre>
      </div>

      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">插件注册和信任</h3>
        <pre><code class="java">@PluginComponent
public class PluginRegistrationService {
    
    public PluginInfo registerPlugin(PluginRegistrationRequest request) {
        // 1. 验证插件包
        PluginPackageValidationResult validation = validatePluginPackage(request.getPackageData());
        if (!validation.isValid()) {
            throw new PluginValidationException("插件包验证失败: " + validation.getErrors());
        }
        
        // 2. 生成插件ID
        String pluginId = generatePluginId(request);
        
        // 3. 创建插件信息
        PluginInfo pluginInfo = new PluginInfo();
        pluginInfo.setId(pluginId);
        pluginInfo.setName(request.getName());
        pluginInfo.setVersion(request.getVersion());
        pluginInfo.setDescription(request.getDescription());
        pluginInfo.setAuthor(request.getAuthor());
        
        // 4. 设置信任级别
        pluginInfo.setTrustLevel(determineTrustLevel(request));
        pluginInfo.setTrustworthy(isPluginTrustworthy(request));
        
        // 5. 设置权限
        pluginInfo.setPermissions(analyzeRequiredPermissions(request));
        
        // 6. 验证证书（如果存在）
        if (request.hasCertificate()) {
            pluginInfo.setCertificate(validateCertificate(request.getCertificate()));
        }
        
        // 7. 保存插件信息
        PluginInfo savedPlugin = pluginRepository.save(pluginInfo);
        
        logSecurityEvent("插件注册成功", pluginId, "trustLevel=" + pluginInfo.getTrustLevel());
        
        return savedPlugin;
    }
    
    private TrustLevel determineTrustLevel(PluginRegistrationRequest request) {
        if (request.hasCertificate()) {
            Certificate cert = request.getCertificate();
            
            // 验证证书有效期
            if (isCertificateValid(cert)) {
                // 检查证书颁发者
                if (isTrustedCA(cert.getIssuer())) {
                    return TrustLevel.TRUSTED;
                }
                return TrustLevel.SIGNED;
            }
        }
        
        // 无证书的插件为未知信任级别
        return TrustLevel.UNKNOWN;
    }
    
    private boolean isPluginTrustworthy(PluginRegistrationRequest request) {
        TrustLevel trustLevel = determineTrustLevel(request);
        
        // 只有已签名的可信证书插件才被认为是可信的
        return trustLevel == TrustLevel.TRUSTED;
    }
    
    private Set&lt;Permission&gt; analyzeRequiredPermissions(PluginRegistrationRequest request) {
        Set&lt;Permission&gt; requiredPermissions = new HashSet&lt;&gt;();
        
        // 分析插件的依赖和功能来确定所需权限
        List&lt;String&gt; dependencies = request.getDependencies();
        for (String dependency : dependencies) {
            if (dependency.contains("database")) {
                requiredPermissions.add(Permission.DATA_READ);
                requiredPermissions.add(Permission.DATA_WRITE);
            }
            
            if (dependency.contains("network")) {
                requiredPermissions.add(Permission.NETWORK_CONNECT);
            }
            
            if (dependency.contains("filesystem")) {
                requiredPermissions.add(Permission.DATA_WRITE);
            }
        }
        
        // 分析插件的注解和配置
        Set&lt;String&gt; annotatedMethods = analyzeAnnotatedMethods(request.getPackageData());
        for (String method : annotatedMethods) {
            if (method.contains("start")) {
                requiredPermissions.add(Permission.PLUGIN_START);
            }
            if (method.contains("stop")) {
                requiredPermissions.add(Permission.PLUGIN_STOP);
            }
        }
        
        return requiredPermissions;
    }
    
    public enum TrustLevel {
        TRUSTED("trusted", "可信"),
        SIGNED("signed", "已签名"),
        UNKNOWN("unknown", "未知");
        
        private final String key;
        private final String description;
        
        TrustLevel(String key, String description) {
            this.key = key;
            this.description = description;
        }
    }
}</code></pre>
      </div>
    </section>

    <!-- Code Signature -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">代码签名</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">签名验证</h3>
        <p class="text-gray-700">
          实现代码签名验证机制，确保插件的完整性和可信度：
        </p>
        <pre><code class="java">@PluginComponent
public class CodeSignatureVerifier {
    
    public SignatureVerificationResult verifyPluginSignature(PluginInfo plugin, InputStream pluginData) {
        try {
            // 1. 计算插件哈希
            String pluginHash = calculatePluginHash(pluginData);
            
            // 2. 验证哈希一致性
            if (!pluginHash.equals(plugin.getHash())) {
                return SignatureVerificationResult.failed("插件哈希值不匹配");
            }
            
            // 3. 验证数字签名
            if (plugin.hasSignature()) {
                SignatureVerificationResult signatureResult = verifySignature(plugin);
                if (!signatureResult.isValid()) {
                    return signatureResult;
                }
            }
            
            // 4. 验证证书链
            if (plugin.hasCertificate()) {
                CertificateVerificationResult certResult = verifyCertificateChain(plugin.getCertificate());
                if (!certResult.isValid()) {
                    return SignatureVerificationResult.failed("证书链验证失败: " + certResult.getError());
                }
            }
            
            return SignatureVerificationResult.success();
            
        } catch (Exception e) {
            return SignatureVerificationResult.failed("签名验证异常: " + e.getMessage());
        }
    }
    
    private SignatureVerificationResult verifySignature(PluginInfo plugin) {
        try {
            PublicKey publicKey = plugin.getCertificate().getPublicKey();
            
            Signature signature = Signature.getInstance("SHA256withRSA");
            signature.initVerify(publicKey);
            
            // 使用插件哈希进行签名验证
            signature.update(plugin.getHash().getBytes());
            
            boolean isValid = signature.verify(plugin.getSignature());
            
            if (isValid) {
                logSecurityEvent("插件签名验证成功", plugin.getId());
                return SignatureVerificationResult.success();
            } else {
                logSecurityEvent("插件签名验证失败", plugin.getId());
                return SignatureVerificationResult.failed("数字签名无效");
            }
            
        } catch (Exception e) {
            return SignatureVerificationResult.failed("签名验证异常: " + e.getMessage());
        }
    }
    
    private CertificateVerificationResult verifyCertificateChain(Certificate certificate) {
        try {
            // 验证证书有效期
            if (!isCertificateValid(certificate)) {
                return CertificateVerificationResult.failed("证书已过期或尚未生效");
            }
            
            // 验证证书颁发者
            String issuer = certificate.getIssuerDN().getName();
            if (!isTrustedCA(issuer)) {
                return CertificateVerificationResult.failed("不受信任的证书颁发者");
            }
            
            // 验证证书用途
            if (!hasKeyUsage(certificate, KeyUsage.digitalSignature)) {
                return CertificateVerificationResult.failed("证书缺少数字签名用途");
            }
            
            return CertificateVerificationResult.success();
            
        } catch (Exception e) {
            return CertificateVerificationResult.failed("证书验证异常: " + e.getMessage());
        }
    }
    
    private String calculatePluginHash(InputStream pluginData) throws Exception {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        
        byte[] buffer = new byte[8192];
        int bytesRead;
        while ((bytesRead = pluginData.read(buffer)) != -1) {
            digest.update(buffer, 0, bytesRead);
        }
        
        byte[] hashBytes = digest.digest();
        return Hex.encodeHexString(hashBytes);
    }
    
    private boolean isCertificateValid(Certificate certificate) {
        Date now = new Date();
        return certificate.getNotBefore().before(now) && certificate.getNotAfter().after(now);
    }
    
    private boolean isTrustedCA(String issuer) {
        Set&lt;String&gt; trustedCAs = getTrustedCAs();
        return trustedCAs.stream().anyMatch(issuer::contains);
    }
    
    private Set&lt;String&gt; getTrustedCAs() {
        // 返回系统信任的证书颁发者列表
        return new HashSet&lt;&gt;(Arrays.asList(
            "CN=Brick BootKit Root CA",
            "CN=Oracle",
            "CN=Microsoft"
        ));
    }
}

// 签名验证结果
public class SignatureVerificationResult {
    private final boolean valid;
    private final String message;
    private final String error;
    
    private SignatureVerificationResult(boolean valid, String message, String error) {
        this.valid = valid;
        this.message = message;
        this.error = error;
    }
    
    public static SignatureVerificationResult success() {
        return new SignatureVerificationResult(true, "签名验证成功", null);
    }
    
    public static SignatureVerificationResult failed(String error) {
        return new SignatureVerificationResult(false, null, error);
    }
    
    public boolean isValid() { return valid; }
    public String getMessage() { return message; }
    public String getError() { return error; }
}</code></pre>
      </div>
    </section>

    <!-- Security Audit -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">安全审计</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">安全事件监控</h3>
        <p class="text-gray-700">
          监控和记录安全相关的事件：
        </p>
        <pre><code class="java">@PluginComponent
public class SecurityAuditService {
    
    @EventListener
    public void handleSecurityEvent(SecurityEvent event) {
        // 1. 记录安全事件
        SecurityAuditLog auditLog = createAuditLog(event);
        auditLogRepository.save(auditLog);
        
        // 2. 实时告警
        if (event.getSeverity() == SecuritySeverity.HIGH || 
            event.getSeverity() == SecuritySeverity.CRITICAL) {
            sendSecurityAlert(event);
        }
        
        // 3. 分析威胁模式
        analyzeThreatPattern(event);
    }
    
    private SecurityAuditLog createAuditLog(SecurityEvent event) {
        SecurityAuditLog log = new SecurityAuditLog();
        log.setTimestamp(event.getTimestamp());
        log.setPluginId(event.getPluginId());
        log.setEventType(event.getType());
        log.setSeverity(event.getSeverity());
        log.setDescription(event.getDescription());
        log.setSourceIp(getSourceIp());
        log.setUserAgent(getUserAgent());
        log.setRequestId(generateRequestId());
        return log;
    }
    
    private void sendSecurityAlert(SecurityEvent event) {
        SecurityAlert alert = new SecurityAlert();
        alert.setEvent(event);
        alert.setCreatedAt(new Date());
        alert.setStatus(AlertStatus.NEW);
        
        // 发送到安全告警系统
        securityAlertService.sendAlert(alert);
        
        // 记录告警发送日志
        log.warn("发送安全告警: {} - {}", event.getType(), event.getDescription());
    }
    
    private void analyzeThreatPattern(SecurityEvent event) {
        // 检查是否为重复攻击模式
        List&lt;SecurityEvent&gt; recentEvents = getRecentEvents(event.getPluginId(), 5, TimeUnit.MINUTES);
        
        long securityViolations = recentEvents.stream()
            .filter(e -&gt; e.getType() == SecurityEventType.PERMISSION_VIOLATION ||
                       e.getType() == SecurityEventType.UNAUTHORIZED_ACCESS)
            .count();
        
        if (securityViolations >= 3) {
            handlePotentialAttack(event.getPluginId(), securityViolations);
        }
    }
    
    private void handlePotentialAttack(String pluginId, long violationCount) {
        // 临时禁用插件
        PluginInfo plugin = pluginRepository.findById(pluginId);
        if (plugin != null) {
            plugin.setTemporarilyDisabled(true);
            plugin.setDisabledReason("检测到潜在攻击行为");
            plugin.setDisabledUntil(DateUtils.addMinutes(new Date(), 30)); // 禁用30分钟
            pluginRepository.save(plugin);
            
            log.warn("插件因潜在攻击被临时禁用: {}, 违规次数: {}", pluginId, violationCount);
            
            // 发送高级别告警
            SecurityEvent alertEvent = new SecurityEvent(
                SecurityEventType.SUSPICIOUS_ACTIVITY,
                SecuritySeverity.CRITICAL,
                "检测到潜在攻击行为，插件已被临时禁用",
                pluginId
            );
            
            sendSecurityAlert(alertEvent);
        }
    }
    
    public List&lt;SecurityAuditLog&gt; getAuditLogs(String pluginId, Date startTime, Date endTime) {
        return auditLogRepository.findByPluginIdAndTimestampBetween(pluginId, startTime, endTime);
    }
    
    public SecurityReport generateSecurityReport(Date startTime, Date endTime) {
        SecurityReport report = new SecurityReport();
        report.setPeriod(startTime, endTime);
        
        // 统计安全事件
        List&lt;SecurityEvent&gt; events = getEventsInPeriod(startTime, endTime);
        report.setTotalEvents(events.size());
        report.setHighSeverityEvents(getEventsBySeverity(events, SecuritySeverity.HIGH).size());
        report.setCriticalEvents(getEventsBySeverity(events, SecuritySeverity.CRITICAL).size());
        
        // 分析攻击模式
        Map&lt;String, Long&gt; attackPatterns = analyzeAttackPatterns(events);
        report.setAttackPatterns(attackPatterns);
        
        // 生成建议
        report.setRecommendations(generateSecurityRecommendations(events));
        
        return report;
    }
}</code></pre>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">最佳实践</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">插件开发安全</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 使用代码签名工具签名插件</li>
            <li>• 避免在插件中包含敏感信息</li>
            <li>• 验证用户输入和参数</li>
            <li>• 使用安全的通信协议</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">权限管理</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 遵循最小权限原则</li>
            <li>• 定期审查插件权限</li>
            <li>• 及时撤销不必要权限</li>
            <li>• 记录权限变更日志</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">安全监控</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 实施实时安全监控</li>
            <li>• 配置智能告警规则</li>
            <li>• 定期分析安全报告</li>
            <li>• 建立应急响应流程</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">系统维护</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• 及时更新安全补丁</li>
            <li>• 定期备份安全配置</li>
            <li>• 测试安全防护机制</li>
            <li>• 培训开发人员安全意识</li>
          </ul>
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
            <h4 class="font-semibold text-gray-900">插件启动被拒绝</h4>
            <p class="text-gray-700 text-sm">问题：插件无法启动，提示权限不足</p>
            <p class="text-gray-600 text-sm">解决：检查插件权限配置，确保拥有必要的启动权限</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">签名验证失败</h4>
            <p class="text-gray-700 text-sm">问题：插件签名验证失败，无法安装</p>
            <p class="text-gray-600 text-sm">解决：检查插件签名是否正确，证书是否在信任列表中</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">资源访问被阻止</h4>
            <p class="text-gray-700 text-sm">问题：插件访问资源被安全策略阻止</p>
            <p class="text-gray-600 text-sm">解决：检查资源访问权限配置，添加相应的访问权限</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">安全告警频繁触发</h4>
            <p class="text-gray-700 text-sm">问题：正常操作触发过多安全告警</p>
            <p class="text-gray-600 text-sm">解决：调整告警阈值，优化告警规则，检查权限配置</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>