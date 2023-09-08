import 'zui-dev';
import * as core from './src/main';
import {HListVanilla} from './dev/h-list-vanilla';

console.log('core', core);

onPageUpdate(() => {
    const hList = new HListVanilla('#hList', {
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
    console.log('> hList', hList);
});
