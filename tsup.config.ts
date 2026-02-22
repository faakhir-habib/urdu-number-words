import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs', 'iife'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
  globalName: 'UrduNumberWords',
  target: 'es2019',
  outDir: 'dist',
  outExtension({ format }) {
    let js: string;
    if (format === 'cjs') {
      js = '.cjs';
    } else if (format === 'iife') {
      js = '.iife.js';
    } else {
      js = '.js';
    }
    return { js };
  },
});
