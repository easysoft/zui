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
    stories: [
        '../lib/label/label.stories.@(ts|tsx)',
        '../lib/button/button.stories.@(ts|tsx)',
        '../lib/pager/pager.stories.@(ts|tsx)',
        '../lib/dropdown/dropdown.stories.@(ts|tsx)',
        '../lib/modal/modal.stories.@(ts|tsx)',
        '../lib/tabs/tabs.stories.@(ts|tsx)',
    ],
};

export default config;
