import 'zui-dev';
import '@zui/css-icons';
import '@zui/button';
import {Popover} from './src/main';

onPageLoad(() => {
    const popover1 = new Popover('#popoverTrigger1', {
        target: '#popover1',
    });
    console.log('> popover1', popover1);

    const popover2 = new Popover('#popoverTrigger2', {
        title: '这是提示消息',
        content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
    });
    console.log('> popover2', popover2);

    const popover3 = new Popover('#popoverTrigger3', {
        trigger: 'hover',
        title: '这是提示消息',
        content: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
    });
    console.log('> popover3', popover3);
});
