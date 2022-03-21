import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root:resolve(__dirname, 'src/render'),//vue项目的根目录
  base:'./', //决定index.html文件中的引用的资源路径是以什么位置开始的，如果不配置默认为/，这个index.html运行在electron中，打包后，是以file://协议加载的，如果使用默认值会加载不到.js文件
  build: {
    outDir:resolve(__dirname, 'dist/render'),
    emptyOutDir: true
  },
  plugins: [vue()]
})
