import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3001,
    },
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './tests/setup.js',
        watch: false, // maybe a good option for CI
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
});
