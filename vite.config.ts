import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'http://ec2-3-39-239-224.ap-northeast-2.compute.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})