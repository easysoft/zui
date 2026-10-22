import {defineConfig} from 'vite';

export default defineConfig({
    build: {outDir: 'dist/storybook'},
    preview: {host: '127.0.0.1', port: 6007, strictPort: true},
});
