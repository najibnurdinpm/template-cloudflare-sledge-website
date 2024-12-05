import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from 'vite-plugin-node-polyfills'

declare module "@remix-run/cloudflare" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    nodePolyfills({
      // Include node polyfills
      include: [
        'assert',
        'buffer',
        'console',
        'constants',
        'crypto',
        'domain',
        'events',
        'fs',
        'http',
        'https',
        'os',
        'path',
        'process',
        'punycode',
        'querystring',
        'stream',
        'string_decoder',
        'sys',
        'timers',
        'tty',
        'url',
        'util',
        'vm',
        'zlib'
      ],
      // Tambahkan polyfill untuk protokol node:
      protocolImports: true

    }),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    exclude: [
      '@resvg/resvg-js', 
      'assert',
      'buffer',
      'console',
      'constants',
      'crypto',
      'domain',
      'events',
      'fs',
      'http',
      'https',
      'os',
      'path',
      'process',
      'punycode',
      'querystring',
      'stream',
      'string_decoder',
      'sys',
      'timers',
      'tty',
      'url',
      'util',
      'vm',
      'zlib'
    ]
  },
});