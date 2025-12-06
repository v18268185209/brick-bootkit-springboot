import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// Import components
import Home from './views/Home.vue'
import Introduction from './views/Introduction.vue'
import QuickStart from './views/QuickStart.vue'
import ProjectStructure from './views/ProjectStructure.vue'
import Configuration from './views/Configuration.vue'
import Plugins from './views/Plugins.vue'
import PluginsPackaging from './views/PluginsPackaging.vue'
import DynamicDeployment from './views/DynamicDeployment.vue'
import PluginLifecycle from './views/PluginLifecycle.vue'
import ConfigurationManagement from './views/ConfigurationManagement.vue'
import PerformanceMonitoring from './views/PerformanceMonitoring.vue'
import Security from './views/Security.vue'
import Annotations from './views/Annotations.vue'
import ConfigParameters from './views/ConfigParameters.vue'
import Changelog from './views/Changelog.vue'
import FAQ from './views/FAQ.vue'
import API from './views/API.vue'
import Examples from './views/Examples.vue'
import Contact from './views/Contact.vue'
import EnterpriseUsers from './views/EnterpriseUsers.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/introduction', component: Introduction, name: 'introduction' },
  { path: '/quickstart', component: QuickStart, name: 'quickstart' },
  { path: '/project-structure', component: ProjectStructure, name: 'project-structure' },
  { path: '/configuration', component: Configuration, name: 'configuration' },
  { path: '/plugins', component: Plugins, name: 'plugins' },
  { path: '/plugins-packaging', component: PluginsPackaging, name: 'plugins-packaging' },
  { path: '/dynamic-deployment', component: DynamicDeployment, name: 'dynamic-deployment' },
  { path: '/plugin-lifecycle', component: PluginLifecycle, name: 'plugin-lifecycle' },
  { path: '/configuration-management', component: ConfigurationManagement, name: 'configuration-management' },
  { path: '/performance-monitoring', component: PerformanceMonitoring, name: 'performance-monitoring' },
  { path: '/security', component: Security, name: 'security' },
  { path: '/api', component: API, name: 'api' },
  { path: '/annotations', component: Annotations, name: 'annotations' },
  { path: '/config-parameters', component: ConfigParameters, name: 'config-parameters' },
  { path: '/examples', component: Examples, name: 'examples' },
  { path: '/changelog', component: Changelog, name: 'changelog' },
  { path: '/faq', component: FAQ, name: 'faq' },
  { path: '/contact', component: Contact, name: 'contact' },
  { path: '/enterprise-users', component: EnterpriseUsers, name: 'enterprise-users' },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
