import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  server: {
    proxy: {
      '/feedback': {
        target: 'http://localhost:5050',
        changeOrigin: true,
      }
    }
  },
  plugins: [react()]
})
