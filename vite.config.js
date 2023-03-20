import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Fix for [Vue warn]: 
      // Component provided template option but runtime compilation
      //  is not supported in this build of Vue.
      //  Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
      vue: "vue/dist/vue.esm-bundler.js"
    }
  }
})
