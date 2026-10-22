import {fileURLToPath} from 'node:url';
import type {StorybookConfig} from '@storybook/html-vite';

const config: StorybookConfig = {
    framework: {
        name: '@storybook/html-vite',
        options: {
            builder: {
                viteConfigPath: fileURLToPath(new URL('./vite.config.ts', import.meta.url)),
            },
        },
    },
    stories: ['../lib/*/*.stories.@(ts|tsx)'],
};

export default config;
