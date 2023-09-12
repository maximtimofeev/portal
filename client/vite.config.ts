import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lib: path.resolve(__dirname, './src/lib'),
      utils: path.resolve(__dirname, './src/lib/utils'),
      constants: path.resolve(__dirname, './src/lib/constants'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      static: path.resolve(__dirname, './static'),
      hooks: path.resolve(__dirname, './src/lib/hooks'),
    },
  },
  server: {
    port: 3000,
  },
})
