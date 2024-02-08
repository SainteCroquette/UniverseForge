import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@styles': path.resolve(__dirname, './src/assets/styles'),
            '@core': path.resolve(__dirname, './src/core'),
            '@domain': path.resolve(__dirname, './src/domain'),
            '@pages': path.resolve(__dirname, './src/adapters/primary/pages'),
            '@atoms': path.resolve(__dirname, './src/adapters/primary/components/atoms'),
            '@molecules': path.resolve(__dirname, './src/adapters/primary/components/molecules'),
            '@organisms': path.resolve(__dirname, './src/adapters/primary/components/organisms'),
            '@templates': path.resolve(__dirname, './src/adapters/primary/components/templates'),
            '@gateways': path.resolve(__dirname, './src/adapters/secondary/gateways'),
            '@services': path.resolve(__dirname, './src/services'),
        },
    },
});
