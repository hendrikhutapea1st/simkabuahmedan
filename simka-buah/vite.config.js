import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/[name].[hash].css'
          }
          if (assetInfo.name.endsWith('.js')) {
            return 'assets/[name].[hash].js'
          }
          return 'assets/[name].[hash][extname]'
        }
      }
    }
  }
})