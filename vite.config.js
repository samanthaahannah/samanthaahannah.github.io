import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        portfolio: 'portfolio/index.html',
        publications: 'publications/index.html',
        blog: 'blog/index.html',
        contact: 'contact/index.html',
        blogpost: 'blog/post.html'
      }
    }
  }
})