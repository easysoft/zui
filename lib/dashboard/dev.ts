import 'preact/debug';
import 'zui-dev';
import '@zui/toolbar';
import '@zui/panel';
import {Dashboard} from './src/main';

onPageLoad(() => {
    const dashboard = new Dashboard('#dashboard', {
        blocks: [
            {id: 1, title: '1'},
            {id: 2, title: '2', size: 'md'},
            {id: 3, title: '3', size: {width: 4, height: 4}},
            {id: 4, title: '4', placeholder: 'placeholder'},
            {id: 5, title: '5'},
            {id: 6, title: '6', left: 8, top: 0},
            {id: 7, title: '7', size: 'smWide'},
            {id: 8, title: '8', size: 'xs'},
            {id: 9, title: '9', size: 'xsLong'},
        ],
        // blockFetch: '/lib/dashboard/public/block.html?block={id}',
    });
    console.log('> dashboard', dashboard);
});
