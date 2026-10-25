import {fileURLToPath} from 'node:url';
import type {StorybookConfig} from '@storybook/html-vite';
import {getStorybookLibraries, getStorybookPatterns} from './libraries';

const config: StorybookConfig = {
    framework: {
        name: '@storybook/html-vite',
        options: {
            builder: {
                viteConfigPath: fileURLToPath(new URL('./vite.config.ts', import.meta.url)),
            },
        },
    },
    stories: async () => getStorybookPatterns(await getStorybookLibraries()),
};

export default config;
