import type {Preview} from '@storybook/html-vite';
import {useEffect} from 'storybook/preview-api';
import {applyTheme} from './theme';
import '@zui/base';
import '@zui/typography';
import '@zui/utilities';

document.documentElement.lang = 'zh-CN';

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'ZUI 组件主题',
            toolbar: {
                icon: 'circlehollow',
                dynamicTitle: true,
                items: [
                    {value: 'light', title: '浅色'},
                    {value: 'dark', title: '深色'},
                    {value: 'system', title: '跟随系统'},
                ],
            },
        },
    },
    decorators: [(story, {globals}) => {
        useEffect(() => applyTheme(globals.theme), [globals.theme]);
        return story();
    }],
    parameters: {
        layout: 'padded',
        controls: {expanded: true},
        backgrounds: {disable: true},
        viewport: {
            options: {
                mobile: {name: '手机', styles: {width: '390px', height: '844px'}, type: 'mobile'},
                tablet: {name: '平板', styles: {width: '768px', height: '1024px'}, type: 'tablet'},
            },
        },
    },
    initialGlobals: {
        theme: 'system',
    },
};

export default preview;
