import { createSSRApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

// 获取环境变量
console.log('环境变量', import.meta.env.VITE_BASE_URL)

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app,
  }
}
