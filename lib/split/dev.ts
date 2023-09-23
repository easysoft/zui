import '@zui/menu';
import 'zui-dev';
import '@zui/core';
import '@zui/button';
import {Split} from './src/main';

onPageUpdate(() => {
    const split1 = new Split('#splitExample1', {
        minSize: 0,
        toggleBtn: true,
        sizes: [50, 125, 'auto', 'auto'],
        animation: true,
    });
    console.log('> split1', split1);

    const split2 = new Split('#splitExample2', {
        minSize: 0,
        vertical: true,
        toggleBtn: true,
    });
    console.log('> split2', split2);
});
