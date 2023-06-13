import '@zui/nav';
import './src/main';

window.addEventListener('show.zui3.tab', function () {
    console.log('标签显示完成。');
}, true);

window.addEventListener('shown.zui3.tab', function () {
    console.log('动画执行完成了！');
}, true);
