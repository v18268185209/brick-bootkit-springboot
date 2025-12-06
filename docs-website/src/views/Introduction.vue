<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">功能介绍</h1>
      <p class="text-lg text-gray-600 mb-8">
        Brick BootKit SpringBoot 是一个强大的插件式开发框架，专为SpringBoot应用设计。
        它允许开发者在不重启主程序的前提下，动态扩展系统功能，实现低耦合、高内聚的系统架构。
      </p>
    </div>

    <!-- Background -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">项目背景</h2>
      <div class="card space-y-4">
        <p class="text-gray-700">
          在当下后端市场，还是以 <code>spring-boot</code> 为核心框架进行系统开发，本框架可以在 
          <code>spring-boot</code> 系统上进行插件式的开发，将插件当做一个 
          <code>mini</code> 版本的 <code>spring-boot</code> 进行系统扩展开发。
        </p>
        <p class="text-gray-700">
          在项目开发中，使用到了原作者的框架，但升级到SpringBoot 3.5之后，无法使用，原作者也已经多年未更新，
          因此针对此项目进行二次修改后进行开源，希望有技术能力的一起把该插件继续维护下去。
        </p>
      </div>
    </section>

    <!-- Features -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">核心特性</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="card space-y-4">
          <h3 class="text-xl font-semibold text-gray-900">开发特性</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span>
              简化了框架的集成步骤，更容易上手
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span>
              插件开发更加贴近Spring Boot原生开发
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span>
              支持两种模式开发：隔离模式、共享模式
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span>
              使用Maven打包插件，支持对插件的自主打包编译
            </li>
          </ul>
        </div>
        
        <div class="card space-y-4">
          <h3 class="text-xl font-semibold text-gray-900">技术特性</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span>
              自主的开发的类加载器，支持插件定义各种依赖jar包
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span>
              支持集成各种spring-boot-xxx-starter
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span>
              动态安装、卸载、启动、停止插件
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></span>
              主程序和插件类隔离，有效避免类冲突
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Pain Points Solved -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">解决的痛点</h2>
      <div class="space-y-4">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">To-B系统场景</h3>
          <p class="text-gray-700 mb-3">
            在To-B系统场景中，不同甲方会有不同的需求，在不打分支和改动系统核心代码的前提下，
            可以在插件中进行扩展开发特定功能，不同甲方使用不同插件。
          </p>
          <div class="bg-green-50 border-l-4 border-green-400 p-4">
            <p class="text-green-700 text-sm">
              <strong>完美解决非核心系统的扩展功能开发</strong>，例如扩展中台系统的不同需求
            </p>
          </div>
        </div>

        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">To-C系统场景</h3>
          <p class="text-gray-700 mb-3">
            在To-C系统场景中，可以在主程序通过定义java-interface，在插件中做不同实现，
            来达到动态扩展系统功能。
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p class="text-blue-700 text-sm">
              通过插件模式实现功能的<strong>动态扩展</strong>，提升系统灵活性
            </p>
          </div>
        </div>

        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">依赖版本冲突</h3>
          <p class="text-gray-700 mb-3">
            由于引入了不同版本的依赖，导致系统无法运行，本框架可以完美解决在不同插件中定义不同版本的依赖，
            从底层进行隔离。
          </p>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="text-yellow-700 text-sm">
              可以完美解决系统同时连接数据库<strong>mysql-5和mysql-8版本</strong>
            </p>
          </div>
        </div>

        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">模块化组装</h3>
          <p class="text-gray-700 mb-3">
            在插件中，可以任意集成不同的非web类型的springboot-xx-starter，
            然后将不同插件功能组装起来，以达到一个统一对外提供服务的完整系统。
          </p>
          <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
            <p class="text-purple-700 text-sm">
              实现<strong>系统组装化、插拔化开发</strong>，提升开发效率
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Version Compatibility -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">版本兼容性</h2>
      <div class="card">
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  框架版本
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SpringBoot版本
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3.0.x</td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  2.3.1.RELEASE - 2.3.12.RELEASE<br>
                  2.4.0 - 2.4.13<br>
                  2.5.0 - 2.5.11<br>
                  2.6.0 - 2.6.14<br>
                  2.7.0 - 2.7.6
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p class="text-yellow-700 text-sm">
            <strong>注意：</strong>spring-boot升级到2.6.0+后启动时swagger会报错。（swagger和springboot2.6.0+不兼容）
          </p>
        </div>
      </div>
    </section>

    <!-- Runtime Requirements -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">运行环境</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card text-center">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-blue-600 font-bold text-lg">JDK</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">JDK</h3>
          <p class="text-gray-600">JDK 1.8+</p>
        </div>
        
        <div class="card text-center">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-green-600 font-bold text-lg">Maven</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Maven</h3>
          <p class="text-gray-600">Apache Maven 3.6+</p>
        </div>
        
        <div class="card text-center">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-purple-600 font-bold text-lg">Spring</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">SpringBoot</h3>
          <p class="text-gray-600">SpringBoot 2.3.1 ~ 3.5+</p>
        </div>
      </div>
    </section>

    <!-- Current Version -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">当前版本</h2>
      <div class="card">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-2xl font-bold text-gray-900">4.0.1</h3>
            <p class="text-gray-600">最新稳定版本</p>
          </div>
          <div class="text-right">
            <div class="text-sm text-gray-500">发布日期</div>
            <div class="font-semibold text-gray-900">2025年12月</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>