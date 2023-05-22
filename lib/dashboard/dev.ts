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
            {id: 1},
            {id: 2, size: 'md'},
            {id: 3, size: {width: 4, height: 4}},
            {id: 4, placeholder: 'placeholder'},
            {id: 5},
            {id: 6, left: 8, top: 0},
            {id: 7, size: 'smWide'},
            {id: 8, size: 'xsLong'},
            {id: 9, size: 'xs'},
        ],
        blockFetch: '/lib/dashboard/public/block-{id}.html',
    });
    console.log('> dashboard', dashboard);
});
