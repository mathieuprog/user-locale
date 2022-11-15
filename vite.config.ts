/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    // if you have few tests, try commenting one
    // or both out to improve performance:
    threads: false,
    isolate: true,
  },
  resolve: {
    conditions: ['development']
  }
});
