import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      src: '/src',
      hooks: '/src/hooks',
      comComponents: '/src/components',
      data: '/src/data',
      utils: '/src/utils',
      '@GoCorona': '/src/pages/GoCorona',
      '@Home': ['/src/pages/Home'],
      '@NotFound': ['/src/pages/NotFound'],
      '@SpaceX': ['/src/pages/SpaceX'],
    },
  },
});
