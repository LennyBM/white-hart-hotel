import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    target: 'es2020',
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — cached independently across all route chunks
          'vendor-react': ['react', 'react-dom'],
          // Router — changes less often than app code
          'vendor-router': ['react-router-dom'],
          // Helmet — rarely updated
          'vendor-helmet': ['react-helmet-async'],
        },
      },
    },
  },
  esbuild: {
    // Strip legal comments from output (saves a few KB)
    legalComments: 'none',
  },
})
