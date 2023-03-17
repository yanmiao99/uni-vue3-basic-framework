import {defineConfig} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
import path from 'path'

export default defineConfig({
  transpileDependencies: ['@dcloudio/uni-ui'],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "api": path.resolve(__dirname, "./src/api"),
      "config": path.resolve(__dirname, "./src/config"),
      "static": path.resolve(__dirname, "./src/static"),
      "store": path.resolve(__dirname, "./src/store"),
      "utils": path.resolve(__dirname, "./src/utils"),
    }
  },
  plugins: [
    uni(),
  ],
})
