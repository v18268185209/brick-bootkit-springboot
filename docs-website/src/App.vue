<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="container">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-4">
            <router-link to="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">BB</span>
              </div>
              <span class="text-xl font-bold text-gray-900">Brick BootKit</span>
            </router-link>
            <span class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">4.0.1</span>
          </div>
          <nav class="hidden md:flex items-center space-x-6">
            <router-link 
              v-for="item in navItems" 
              :key="item.name"
              :to="item.path"
              class="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              {{ item.name }}
            </router-link>
          </nav>
        </div>
      </div>
    </header>

    <div class="flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16">
        <nav class="p-4">
          <div v-for="section in sidebarItems" :key="section.title" class="mb-6">
            <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              {{ section.title }}
            </h3>
            <ul class="space-y-1">
              <li v-for="item in section.items" :key="item.name">
                <router-link 
                  :to="item.path"
                  :class="[
                    'sidebar-item',
                    $route.path === item.path ? 'sidebar-item-active' : 'sidebar-item-inactive'
                  ]"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1">
        <div class="container py-8">
          <router-view />
        </div>
      </main>

      <!-- TOC -->
      <aside class="w-64 hidden xl:block">
        <div class="sticky top-16 p-4">
          <h3 class="text-sm font-semibold text-gray-900 mb-3">目录</h3>
          <nav id="toc" class="toc-nav">
            <!-- TOC content will be generated dynamically -->
          </nav>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navItems = ref([
  { name: '介绍', path: '/introduction' },
  { name: '快速开始', path: '/quickstart' },
  { name: '配置', path: '/configuration' },
  { name: '插件开发', path: '/plugins' },
  { name: 'API', path: '/api' },
  { name: '示例', path: '/examples' },
  { name: '使用企业', path: '/enterprise-users' },
  { name: '联系我们', path: '/contact' },
])

const sidebarItems = ref([
  {
    title: '入门指南',
    items: [
      { name: '功能介绍', path: '/introduction' },
      { name: '快速开始', path: '/quickstart' },
      { name: '项目目录结构', path: '/project-structure' },
    ]
  },
  {
    title: '开发指南',
    items: [
      { name: '主程序配置', path: '/configuration' },
      { name: '插件开发', path: '/plugins' },
      { name: '插件打包', path: '/plugins-packaging' },
      { name: '动态部署', path: '/dynamic-deployment' },
    ]
  },
  {
    title: '核心功能',
    items: [
      { name: '插件生命周期管理', path: '/plugin-lifecycle' },
      { name: '配置管理', path: '/configuration-management' },
      { name: '性能监控', path: '/performance-monitoring' },
      { name: '安全机制', path: '/security' },
    ]
  },
  {
    title: 'API参考',
    items: [
      { name: 'API文档', path: '/api' },
      { name: '注解说明', path: '/annotations' },
      { name: '配置参数', path: '/config-parameters' },
    ]
  },
  {
    title: '其他',
    items: [
      { name: '示例项目', path: '/examples' },
      { name: '使用企业', path: '/enterprise-users' },
      { name: '版本升级说明', path: '/changelog' },
      { name: '常见问题', path: '/faq' },
      { name: '联系我们', path: '/contact' },
    ]
  }
])
</script>
