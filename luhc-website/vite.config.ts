import adapter from '@sveltejs/adapter-cloudflare';
import tailwindcss from '@tailwindcss/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    enhancedImages(),
    sveltekit({
      compilerOptions: { runes: true },
      adapter: adapter(),
      inlineStyleThreshold: 0,
      csp: {
        mode: 'auto',
        directives: {
          'upgrade-insecure-requests': true,
          'default-src': ['none'],
          'script-src': ['self'],
          'style-src': [
            'self',
            'unsafe-hashes',
            'sha256-S8qMpvofolR8Mpjy4kQvEm7m1q8clzU4dfDH0AmvZjo=',
          ],
          'font-src': ['self'],
          'img-src': ['self', 'https://cdn.sanity.io'],
          'form-action': ['none'],
          'connect-src': [
            'self',
            'https://rplgcrto.api.sanity.io',
            'https://rplgcrto.apicdn.sanity.io',
            'wss://rplgcrto.api.sanity.io',
          ],
          'frame-src': ['https://www.youtube-nocookie.com'],
          'object-src': ['none'],
          'base-uri': ['none'],
          'frame-ancestors': ['none'],
        },
      },
    }),
  ],
});
