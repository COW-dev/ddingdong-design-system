import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
    dts({
      insertTypesEntry: true,
      include: ['src'],
      exclude: ['**/*.stories.*', '**/*.test.*', 'src/main.tsx'],
      rollupTypes: false,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/shared/index.ts'),
      name: 'ddingdong-design-system',
      fileName: (format) => `ddingdong-design-system.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'framer-motion',
        '@radix-ui/react-switch',
        'tailwindcss',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
  },
});
