import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3JS_Demo_Site/',
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})
