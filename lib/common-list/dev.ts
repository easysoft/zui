import 'zui-dev';
import '@zui/icons';
import '@zui/button';
import '@zui/avatar';
import '@zui/checkbox';
import {CommonList} from './src/main';

onPageUpdate(() => {
    const commonList = new CommonList('#commonList', {
        items: [
            {children: '文本', onClick: () => console.log('ok')},
            {children: '标题'},
            {type: 'heading', children: '标题', className: 'text-primary'},
            {type: 'divider'},
            {children: '大标题'},
            {children: '链接'},
            {children: '超复杂情况'},
            {children: '超复杂情况'},
        ],
    });
    console.log('> commonList', commonList);
});
