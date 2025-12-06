<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">使用企业</h1>
      <p class="text-lg text-gray-600 mb-8">
        以下企业正在使用 Brick BootKit SpringBoot 框架构建其业务系统。
        我们感谢这些企业对开源项目的支持与信任。
      </p>
    </div>

    <!-- Enterprise List -->
    <section class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- 周口智汇企业咨询有限公司 -->
        <div class="card text-center">
          <div class="mb-6">
            <img 
              src="/zq-logo.svg" 
              alt="周口智汇企业咨询有限公司" 
              class="w-64 h-auto mx-auto"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">周口智汇企业咨询有限公司</h3>
          <p class="text-gray-600 mb-4">
            专业的企业咨询服务公司，致力于为企业提供全方位的数字化转型解决方案。
          </p>
          <div class="flex items-center justify-center space-x-4">
            <a 
              href="https://www.zqzqq.com" 
              target="_blank"
              class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              访问官网
            </a>
          </div>
        </div>

        <!-- 遇财（杭州）科技有限公司 -->
        <div class="card text-center">
          <div class="mb-6">
            <img 
              src="/yu-logo.svg" 
              alt="遇财（杭州）科技有限公司" 
              class="w-64 h-auto mx-auto"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">遇财（杭州）科技有限公司</h3>
          <p class="text-gray-600 mb-4">
            专注于企业科技、智能创新的科技公司，运用前沿科技技术为客户提供优质的软件开发服务。
          </p>
          <div class="flex items-center justify-center">
            <span class="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-lg">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              官网建设中
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Us Section -->
    <section class="space-y-6">
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">加入我们的企业用户名单</h2>
        <p class="text-gray-700 mb-6 max-w-2xl mx-auto">
          如果您的企业正在使用 Brick BootKit SpringBoot 框架，并且希望展示在企业用户名单中，
          欢迎通过邮件或微信联系我们。
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/contact" 
            class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            联系我们
          </router-link>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900 text-center">为什么选择 Brick BootKit？</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">高效开发</h3>
          <p class="text-gray-600">插件式架构显著提升开发效率，支持模块化部署和维护</p>
        </div>
        
        <div class="card text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">安全可靠</h3>
          <p class="text-gray-600">类隔离机制确保系统稳定性，有效避免依赖冲突</p>
        </div>
        
        <div class="card text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">开源免费</h3>
          <p class="text-gray-600">完全开源，无版权费用，支持企业级应用场景</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EnterpriseUsers'
}
</script>
