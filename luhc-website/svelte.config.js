import adapter from '@sveltejs/adapter-cloudflare';
import { relative, sep } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    inlineStyleThreshold: 0,
    csp: {
      mode: 'auto',
      directives: {
        'default-src': ['none'],
        'script-src': ['self'],
        'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
        'font-src': ['self', 'https://fonts.gstatic.com'],
        'img-src': ['self', 'https://cdn.sanity.io'],
        'form-action': ['none'],
        'connect-src': [
          'self',
          'https://gmsfeed.co.uk',
          'https://*.api.sanity.io',
          'wss://*.api.sanity.io',
        ],
        'frame-src': ['https://www.youtube-nocookie.com'],
        'object-src': ['none'],
        'base-uri': ['none'],
        'frame-ancestors': ['none'],
      },
    },
  },
  compilerOptions: {
    // defaults to rune mode for the project, except for `node_modules`. Can be removed in svelte 6.
    runes: ({ filename }) => {
      const relativePath = relative(import.meta.dirname, filename);
      const pathSegments = relativePath.toLowerCase().split(sep);
      const isExternalLibrary = pathSegments.includes('node_modules');

      return isExternalLibrary ? undefined : true;
    },
  },
};

export default config;
