import '@zui/nav';
import {$} from '@zui/core';
import 'zui-dev';
import './src/main';

window.addEventListener('show.zui3.tab', function () {
    console.log('标签显示完成。');
}, true);

window.addEventListener('shown.zui3.tab', function () {
    console.log('动画执行完成了！');
}, true);

onPageUpdate(() => {
    $('#tabs').on('show shown', (event, target) => {
        console.log(event.type, target);
    });
});
