/** @format */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
server: {
  host: '  ',
    {
      host: '  ',
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:5173/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    };
}
