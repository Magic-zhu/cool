import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
      },
    },
  },
  build: {
    lib: {
        entry: path.resolve(__dirname, 'src/main.ts'),
        name: 'cool-ui',
        fileName: (format) => `lib.${format}.js`
    },
    rollupOptions: {
        external: ['vue'],
        output: {
            globals: {
                vue: 'Vue'
            }
        }
    }
 },
})
