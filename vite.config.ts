import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import electron from 'vite-plugin-electron/simple';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: './',   // 👈 THIS is the key fix
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        tailwindcss(),
        electron({
          main: {
            entry: 'electron/main.ts',
          },
          preload: {
            input: 'electron/preload.ts',
          },
          renderer: {},
        }),
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});