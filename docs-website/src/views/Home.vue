<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <section class="text-center space-y-6">
      <div class="w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto">
        <span class="text-white font-bold text-2xl">BB</span>
      </div>
      <h1 class="text-5xl font-bold text-gray-900">
        Brick BootKit SpringBoot
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        基于 SpringBoot 3.x 的插件式开发框架，支持动态热插拔、类隔离、版本独立管理等高级特性
      </p>
      <div class="flex items-center justify-center space-x-4">
        <router-link to="/quickstart" class="btn btn-primary">
          快速开始
        </router-link>
        <a href="https://github.com/v18268185209/brick-bootkit-springboot" target="_blank" class="btn btn-secondary">
          GitHub
        </a>
      </div>
      <div class="text-sm text-gray-500">
        <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full">v4.0.1</span>
        <span class="mx-2">•</span>
        <span>支持 SpringBoot 2.3.1+ 到 3.5+</span>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="space-y-8">
      <h2 class="text-3xl font-bold text-center text-gray-900">核心特性</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="feature in features" :key="feature.title" class="card">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <component :is="feature.icon" class="w-6 h-6 text-primary-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Architecture -->
    <section class="space-y-8">
      <h2 class="text-3xl font-bold text-center text-gray-900">架构设计</h2>
      <div class="card">
        <div class="bg-gray-50 rounded-lg p-8 text-center">
          <div class="text-gray-600 mb-4">系统架构图</div>
          <div class="text-sm text-gray-500">
            ┌─────────────────────────────────────────────────────────────┐<br>
            │ 主应用程序 (Main Application) │<br>
            ├─────────────────────────────────────────────────────────────┤<br>
            │ 插件A (隔离模式) │ 插件B (共享模式) │ 插件C (隔离模式) │<br>
            ├─────────────────────────────────────────────────────────────┤<br>
            │ 插件管理层 (Plugin Management) │<br>
            ├─────────────────────────────────────────────────────────────┤<br>
            │ 核心框架层 (Core Framework) │<br>
            ├─────────────────────────────────────────────────────────────┤<br>
            │ Spring Boot 3.x + Java 17 │<br>
            └─────────────────────────────────────────────────────────────┘
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="space-y-8">
      <h2 class="text-3xl font-bold text-center text-gray-900">适用场景</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="useCase in useCases" :key="useCase.title" class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ useCase.title }}</h3>
          <p class="text-gray-600 mb-3">{{ useCase.description }}</p>
          <ul class="text-sm text-gray-500 space-y-1">
            <li v-for="point in useCase.points" :key="point">• {{ point }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Quick Start Preview -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-center text-gray-900">快速开始</h2>
      <div class="card">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">1. 引入依赖</h3>
          <pre><code>&lt;dependency&gt;
  &lt;groupId&gt;com.zqzqq&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot3-brick-bootkit&lt;/artifactId&gt;
  &lt;version&gt;4.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
          
          <h3 class="text-lg font-semibold">2. 配置插件路径</h3>
          <pre><code>plugin:
  runMode: dev
  mainPackage: com.example.yourapp
  pluginPath:
    - /path/to/plugins</code></pre>
          
          <h3 class="text-lg font-semibold">3. 启动主程序</h3>
          <pre><code>@SpringBootApplication
public class Application implements SpringBootstrap {
    public static void main(String[] args) {
        SpringMainBootstrap.launch(Application.class, args);
    }
    
    @Override
    public void run(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }
}</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    title: '热插拔支持',
    description: '无需重启主程序，可动态安装、卸载、启动、停止插件',
    icon: 'PluginIcon'
  },
  {
    title: '类加载隔离',
    description: '自定义类加载器，完全隔离插件依赖，解决版本冲突',
    icon: 'LockIcon'
  },
  {
    title: 'Spring原生体验',
    description: '插件开发体验与Spring Boot完全一致，简单易用',
    icon: 'SpringIcon'
  },
  {
    title: '两种开发模式',
    description: '支持隔离模式和共享模式，灵活选择开发方式',
    icon: 'ModeIcon'
  },
  {
    title: '性能监控',
    description: '集成Micrometer，提供插件性能监控和管理',
    icon: 'ChartIcon'
  },
  {
    title: '安全管控',
    description: '完善的权限控制和安全扫描机制',
    icon: 'ShieldIcon'
  }
])

const useCases = ref([
  {
    title: 'To-B系统定制化',
    description: '不同客户需求差异化，通过插件实现个性化功能扩展',
    points: [
      '扩展中台系统的不同需求',
      '无需修改核心代码',
      '按需安装客户特定插件'
    ]
  },
  {
    title: 'To-C系统功能扩展',
    description: '动态增加新功能模块，提升系统灵活性和可扩展性',
    points: [
      '运行时动态功能加载',
      'A/B测试和灰度发布',
      '降低系统耦合度'
    ]
  },
  {
    title: '微服务架构演进',
    description: '从单体应用平滑过渡到插件化架构',
    points: [
      '平滑的系统重构',
      '团队协作开发',
      '降低系统复杂度'
    ]
  },
  {
    title: '依赖版本冲突解决',
    description: '不同插件使用不同版本依赖，完全隔离',
    points: [
      '同时支持不同版本的库',
      '避免依赖冲突问题',
      '灵活的依赖管理'
    ]
  }
])
</script>