import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    inlineStyleThreshold: 0,
    csp: {
      mode: 'auto',
      directives: {
        'upgrade-insecure-requests': true,
        'default-src': ['none'],
        'script-src': ['self'],
        'style-src': ['self', 'unsafe-inline'],
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
  },
  compilerOptions: {
    runes: true,
  },
};

export default config;
