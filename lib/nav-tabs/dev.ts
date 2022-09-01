import '@zui/nav';
import {NavTabs} from './src/main';

window.addEventListener('tab', function (e) {
    new NavTabs(e.target).show();
}, true);

setTimeout(() => {
    document.getElementById('tab4Content2').dispatchEvent(new CustomEvent('tab'));
}, 1000);

window.addEventListener('show.zui3.tab', function () {
    console.log('标签显示完成。');
}, true);

window.addEventListener('shown.zui3.tab', function (e) {
    console.log('动画执行完成了！');
}, true);

