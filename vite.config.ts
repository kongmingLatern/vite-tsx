import { defineConfig } from 'vite'
import { resolve } from "path"; // 此处如果报错则安装 node/path依赖
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
