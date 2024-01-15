import { defineConfig, Plugin } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts', // Adjust entry point if needed
            formats: ['es', 'cjs'], // Build for both ESM and CommonJS
        },
    },
    plugins : [dts({}) as Plugin]
});