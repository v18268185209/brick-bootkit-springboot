<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">联系我们</h1>
      <p class="text-lg text-gray-600 mb-8">
        如果您在使用过程中遇到问题，或者希望参与项目贡献，欢迎通过以下方式联系我们。
      </p>
    </div>

    <!-- Contact Methods -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">联系方式</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <!-- GitHub -->
        <div class="card text-center">
          <div class="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
          <p class="text-gray-600 mb-4">提交Issue或参与项目开发</p>
          <a 
            href="https://github.com/v18268185209/brick-bootkit-springboot" 
            target="_blank"
            class="text-blue-600 hover:text-blue-800 font-medium"
          >
            访问GitHub →
          </a>
        </div>

        

        <!-- QQ Group -->
        <div class="card text-center">
          <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">技术交流群</h3>
          <p class="text-gray-600 mb-4">加入微信群参与讨论</p>
          <p class="text-sm text-gray-500">群号见下方二维码</p>
        </div>
      </div>
    </section>

    <!-- QR Codes -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">二维码</h2>
      <p class="text-gray-600">
        扫描以下二维码快速联系我们或加入技术交流群，点击图片可放大查看。
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Personal QR Code -->
        <div class="card text-center">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">作者微信</h3>
          <div class="mb-4">
            <img 
              src="/me.jpg" 
              alt="作者微信二维码" 
              class="w-48 h-48 mx-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
              @click="openImageModal('/me.jpg', '作者微信二维码')"
            />
          </div>
          <p class="text-gray-600 text-sm">扫码添加作者微信</p>
        </div>

        <!-- Public Account QR Code -->
        <div class="card text-center">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">公众号</h3>
          <div class="mb-4">
            <img 
              src="/me-public.jpg" 
              alt="公众号二维码" 
              class="w-48 h-48 mx-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
              @click="openImageModal('/me-public.jpg', '公众号二维码')"
            />
          </div>
          <p class="text-gray-600 text-sm">关注公众号获取最新资讯</p>
        </div>

        <!-- Chat Room QR Code -->
        <div class="card text-center">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">技术交流群</h3>
          <div class="mb-4">
            <img 
              src="/chatroom.jpg" 
              alt="技术交流群二维码" 
              class="w-48 h-48 mx-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
              @click="openImageModal('/chatroom.jpg', '技术交流群二维码')"
            />
          </div>
          <p class="text-gray-600 text-sm">扫码加入技术交流群</p>
        </div>

        <!-- Project Logo -->
        <div class="card text-center">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">项目标志</h3>
          <div class="mb-4">
            <img 
              src="/logo.svg" 
              alt="Brick BootKit Logo" 
              class="w-64 h-auto mx-auto rounded-lg shadow-sm cursor-pointer hover:shadow-xl transition-shadow duration-200"
              style="max-height: 80px; object-fit: contain;"
              @click="openImageModal('/logo.svg', 'Brick BootKit Logo')"
            />
          </div>
          <p class="text-gray-600 text-sm">Brick BootKit 官方标志</p>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div v-if="showImageModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeImageModal">
      <div class="relative max-w-2xl max-h-full flex flex-col items-center">
        <button 
          @click="closeImageModal"
          class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200 z-10"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="bg-white rounded-lg overflow-hidden max-w-full max-h-[80vh]">
          <img 
            :src="modalImageSrc" 
            :alt="modalImageAlt" 
            class="w-full h-full object-contain"
            style="max-height: 70vh;"
            @click.stop
          />
        </div>
        <div class="text-center mt-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          <p class="text-white text-base">{{ modalImageAlt }}</p>
        </div>
      </div>
    </div>

    <!-- Contributing -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">参与贡献</h2>
      
      <div class="card space-y-4">
        <h3 class="text-xl font-semibold text-gray-900">我们欢迎任何形式的贡献</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">🐛 报告Bug</h4>
            <p class="text-gray-600 text-sm mb-2">
              如果您发现了问题，请在GitHub上提交Issue，详细描述问题现象和重现步骤。
            </p>
            <a 
              href="https://github.com/v18268185209/brick-bootkit-springboot/issues" 
              target="_blank"
              class="text-blue-600 hover:text-blue-800 text-sm"
            >
              提交Bug报告 →
            </a>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">💡 功能建议</h4>
            <p class="text-gray-600 text-sm mb-2">
              我们很乐意听取您的功能建议和改进意见，请在GitHub上提交Feature Request。
            </p>
            <a 
              href="https://github.com/v18268185209/brick-bootkit-springboot/issues" 
              target="_blank"
              class="text-blue-600 hover:text-blue-800 text-sm"
            >
              提出功能建议 →
            </a>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">📖 完善文档</h4>
            <p class="text-gray-600 text-sm mb-2">
              帮助完善项目文档，添加示例或改进现有文档内容。
            </p>
            <a 
              href="https://github.com/v18268185209/brick-bootkit-springboot/pulls" 
              target="_blank"
              class="text-blue-600 hover:text-blue-800 text-sm"
            >
              完善文档 →
            </a>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">🔧 提交代码</h4>
            <p class="text-gray-600 text-sm mb-2">
              修复Bug、添加功能或优化代码，我们欢迎各种形式的代码贡献。
            </p>
            <a 
              href="https://github.com/v18268185209/brick-bootkit-springboot/pulls" 
              target="_blank"
              class="text-blue-600 hover:text-blue-800 text-sm"
            >
              提交代码 →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Acknowledgments -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-900">致谢</h2>
      
      <div class="card space-y-4">
        <p class="text-gray-700">
          Brick BootKit的发展离不开社区的支持和贡献者的努力。特别感谢：
        </p>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>所有提交Bug报告的用户</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>提供功能建议和改进意见的开发者</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>参与代码贡献的开发者和测试者</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2">✓</span>
            <span>使用并推荐Brick BootKit的团队和个人</span>
          </li>
        </ul>
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
          <p class="text-blue-700">
            <strong>特别感谢</strong>：感谢所有对Brick BootKit项目给予支持和建议的用户，
            您的反馈帮助我们不断完善和改进这个框架。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      showImageModal: false,
      modalImageSrc: '',
      modalImageAlt: ''
    }
  },
  methods: {
    openImageModal(src, alt) {
      this.modalImageSrc = src
      this.modalImageAlt = alt
      this.showImageModal = true
      document.body.style.overflow = 'hidden'
    },
    closeImageModal() {
      this.showImageModal = false
      this.modalImageSrc = ''
      this.modalImageAlt = ''
      document.body.style.overflow = 'auto'
    },
    handleEscapeKey(event) {
      if (event.key === 'Escape') {
        this.closeImageModal()
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleEscapeKey)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKey)
  }
}
</script>