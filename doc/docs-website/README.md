# Brick BootKit SpringBoot 文档网站

这是 Brick BootKit SpringBoot 项目的官方文档网站，使用 Vue 3 + Vite + Tailwind CSS 构建。

## 功能特性

- 📖 完整的文档内容，包括介绍、快速开始、配置、插件开发、API 参考和示例
- 🎨 现代化的设计，使用 Tailwind CSS 构建的响应式界面
- 🧭 清晰的导航结构，支持侧边栏导航和面包屑
- 📱 移动端友好的响应式设计
- ⚡ 基于 Vite 的快速开发体验
- 🌙 优雅的代码高亮和排版

## 项目结构

```
src/
├── views/              # 页面组件
│   ├── Home.vue       # 首页
│   ├── Introduction.vue # 功能介绍
│   ├── QuickStart.vue # 快速开始
│   ├── Configuration.vue # 配置说明
│   ├── Plugins.vue    # 插件开发
│   ├── API.vue        # API 参考
│   └── Examples.vue   # 示例
├── App.vue            # 主应用组件
├── main.js            # 应用入口
└── style.css          # 全局样式
```

## 开发

### 环境要求

- Node.js 16+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

开发服务器将在 http://localhost:5173 启动。

### 构建

```bash
npm run build
```

构建文件将输出到 `dist` 目录。

### 预览

```bash
npm run preview
```

## 文档内容

### 1. 首页 (/)
介绍 Brick BootKit SpringBoot 的核心特性、架构设计和使用场景。

### 2. 功能介绍 (/introduction)
详细介绍框架的功能特性、解决的痛点和版本兼容性信息。

### 3. 快速开始 (/quickstart)
从零开始创建主程序和插件的完整步骤指南。

### 4. 配置说明 (/configuration)
详细的配置选项说明，包括基础配置、高级配置和安全配置。

### 5. 插件开发 (/plugins)
插件开发指南，包括开发模式、生命周期、控制器、服务和拦截器等。

### 6. API 参考 (/api)
完整的 API 文档，包括核心类、注解、工具类和 REST 接口。

### 7. 示例 (/examples)
丰富的代码示例，涵盖基础用法、数据库集成、外部服务调用等场景。

## 技术栈

- **Vue 3**: 现代化的前端框架
- **Vite**: 快速的构建工具
- **Vue Router**: 路由管理
- **Tailwind CSS**: 实用程序优先的 CSS 框架
- **PostCSS**: CSS 处理工具

## 贡献

欢迎提交 Pull Request 来改进文档内容。

## 许可证

本项目遵循 Apache 2.0 许可证。