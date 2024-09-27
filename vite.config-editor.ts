import { resolve } from 'path';

import { defineConfig } from 'vite';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { InputOption } from 'rollup';

import { config } from './config';

const isProd = process.env.NODE_ENV === 'production';

// @ts-ignore:next line
export default defineConfig(({ command, mode }) => {
  const { editorTsPath } = config;

  const inputOptions: InputOption = {
    editorTsPath: resolve(__dirname, editorTsPath),
  };

  return {
    build: {
      sourcemap: true,
      minify: true,
      emptyOutDir: true,
      rollupOptions: {
        cache: false,
        preserveEntrySignatures: 'strict',
        input: inputOptions,
        output: {
          dir: 'scripts',
          entryFileNames: 'editor-support.js',
        },
        plugins: [isProd && minifyHTML()],
      },
    },
  };
});
