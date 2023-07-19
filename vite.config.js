import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: path.resolve(__dirname, './src/components/'),
      hooks: path.resolve(__dirname, './src/hooks/'),
      data: path.resolve(__dirname, './src/data/'),
      utils: path.resolve(__dirname, './src/utils/'),
      public: path.resolve(__dirname, './public/'),

      '@GoCorona': path.resolve(__dirname, './src/pages/GoCorona/'),
      '@Home': path.resolve(__dirname, './src/pages/Home/'),
      '@NotFound': path.resolve(__dirname, './src/pages/NotFound/'),
      '@SpaceX': path.resolve(__dirname, './src/pages/SpaceX/'),
    },
  },

  // resolve: {
  //   alias: {
  //     src: '/src',
  //     hooks: '/src/hooks',
  //     components: '/src/components',
  //     data: '/src/data',
  //     utils: '/src/utils',
  //     '@GoCorona': '/src/pages/GoCorona',
  //     '@Home': ['/src/pages/Home'],
  //     '@NotFound': ['/src/pages/NotFound'],
  //     '@SpaceX': ['/src/pages/SpaceX'],
  //   },
  // },
});
