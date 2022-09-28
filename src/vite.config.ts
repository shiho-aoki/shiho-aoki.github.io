import { resolve } from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import mpa from 'vite-plugin-mpa';

// https://vitejs.dev/config/
export default defineConfig({
  base: (process.env.NODE_ENV === 'poduction')
    ? '/shiho-aoki/view/' : './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    },
    outDir: '../docs'
  },
  plugins: [vue(), mpa()],
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src')
  //   }
  // }
})
