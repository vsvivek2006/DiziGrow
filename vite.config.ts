import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps for smaller build size
    chunkSizeWarningLimit: 1000, // Increase limit to avoid warnings
    rollupOptions: {
      external: [], // ✅ Ensure nothing is externalized
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true // Allow external access if needed
  },
  preview: {
    port: 5173,
    host: true
  },
  // ✅ ADD THESE FOR VERCEL + PAYMENT GATEWAY
  define: {
    'process.env': process.env, // ✅ Pass environment variables properly
    global: 'globalThis' // ✅ Fix global object for Razorpay
  },
  resolve: {
    alias: {
      // ✅ Add any necessary aliases
    }
  }
});