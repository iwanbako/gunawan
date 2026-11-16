// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Wajib diisi agar sitemap & canonical menghasilkan URL absolut yang benar
  site: 'https://kerabatweb.com',

  // 2. Memaksa semua URL menggunakan trailing slash (misal: /tentang-kami/)
  trailingSlash: 'always',
  build: {
    format: 'directory' // Memastikan output build berupa folder/index.html (direkomendasikan untuk trailingSlash)
  },

  integrations: [
    // 3. Mengaktifkan plugin sitemap otomatis tanpa filter
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});