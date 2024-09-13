import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { vitePluginForArco } from '@arco-plugins/vite-vue'

export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    AutoImport({
      resolvers: [ArcoResolver()]
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        })
      ]
    }),
    vitePluginForArco({
      style: 'css'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 代理
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
