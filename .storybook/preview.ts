import type {Preview} from '@storybook/html-vite';
import '@zui/base';
import '@zui/typography';
import '@zui/utilities';

document.documentElement.lang = 'zh-CN';

const preview: Preview = {
    parameters: {
        layout: 'padded',
        controls: {expanded: true},
        backgrounds: {
            options: {
                light: {name: '浅色', value: '#ffffff'},
                dark: {name: '深色', value: '#202328'},
            },
        },
        viewport: {
            options: {
                mobile: {name: '手机', styles: {width: '390px', height: '844px'}, type: 'mobile'},
                tablet: {name: '平板', styles: {width: '768px', height: '1024px'}, type: 'tablet'},
            },
        },
    },
    initialGlobals: {
        backgrounds: {value: 'light'},
    },
};

export default preview;
