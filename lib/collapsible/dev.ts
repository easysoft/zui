import '@zui/button';
import '@zui/list';
import '@zui/menu';
import '@zui/icons';
import 'zui-dev';
import 'preact/debug';
import {Collapsible} from './src/main';

onPageUpdate(() => {
    const collapsible = new Collapsible('#collapsibleExample', {
        title: '标题',
        content: '内容',
        caption: '描述',
        actions: [
            {text: '操作'},
        ],
        bordered: true,
    });
    console.log('> collapsible', collapsible);
});
