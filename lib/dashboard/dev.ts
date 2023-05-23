import 'preact/debug';
import 'zui-dev';
import '@zui/toolbar';
import '@zui/panel';
import '@zui/table';
import '@zui/dtable';
import {Dashboard} from './src/main';

onPageLoad(() => {
    const dashboard = new Dashboard('#dashboard', {
        blocks: [
            {id: 1, size: [3, 8], left: 0, top: 20},
            {id: 2, size: 'lg'},
            {id: 3, size: {width: 3, height: 3}},
            {id: 4, placeholder: 'placeholder'},
            {id: 5},
            {id: 6, left: 2, top: 0},
            {id: 7, size: 'smWide'},
            {id: 8, size: 'xsLong'},
            {id: 9, size: 'xs'},
        ],
        blockFetch: '/lib/dashboard/public/block-{id}.html',
    });
    console.log('> dashboard', dashboard);
});
