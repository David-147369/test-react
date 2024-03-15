import { defineConfig } from 'vite'
import { plugins } from './build'
import * as path from 'path'
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    // host: "0.0.0.0", //ip地址
    // port: 80, // 设置服务启动端口号
    host: '0.0.0.0', //打开显示本地地址
    open: true, // 是否自动启动浏览器
    port: 3000, //端口号
    //代理解决跨域
    proxy: {
      // 本地开发环境通过代理实现跨域
      // 正则表达式写法
      '/api': {
        target: 'https://api.oioweb.cn/api/ocr/RecognizeIdcard', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
