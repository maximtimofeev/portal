import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [RubyPlugin(), FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 200 }), react()],
  resolve: {
    alias: {
      admin: path.resolve(__dirname, './app/frontend/apps/AdminApp'),
      client: path.resolve(__dirname, './app/frontend/apps/ClientApp'),
      components: path.resolve(__dirname, './app/frontend/components'),
      lib: path.resolve(__dirname, './app/frontend/lib'),
      utils: path.resolve(__dirname, './app/frontend/lib/utils'),
      constants: path.resolve(__dirname, './app/frontend/lib/constants'),
      images: path.resolve(__dirname, './app/frontend/images'),
      hooks: path.resolve(__dirname, './app/frontend/lib/hooks'),
      styles: path.resolve(__dirname, './app/frontend/styles'),
    },
  },
  build: {
    target: 'esnext',
    manifest: true,
    rollupOptions: {
      input: '/app/frontend/entrypoints/client.tsx',
    },
  },
})
