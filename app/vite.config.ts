import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@core': path.resolve(__dirname, './src/core'),
            '@domain': path.resolve(__dirname, './src/domain'),
            '@views': path.resolve(__dirname, './src/adapters/primary/views'),
            '@components': path.resolve(__dirname, './src/adapters/primary/components'),
            '@gateways': path.resolve(__dirname, './src/adapters/secondary/gateways'),
            '@services': path.resolve(__dirname, './src/services')
        },
    },
});
