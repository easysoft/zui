import 'zui-dev';
import '@zui/css-icons';
import '@zui/button';
import '@zui/list';
import '@zui/btn-group';
import '@zui/dropdown';
import '@zui/menu';
import {Nav} from './src/main';

onPageUpdate(() => {
    const nav = new Nav('#nav', {
        items: [
            {text: '首页', icon: {className: 'example-icon example-icon-home', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, active: true},
            {text: '动态'},
            {text: '论坛'},
            {type: 'divider'},
            {
                type: 'dropdown',
                text: '博客',
                icon: {className: 'example-icon example-icon-rss', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%204a16%2016%200%200%201%2016%2016M4%2010a10%2010%200%200%201%2010%2010M4%2018h2v2H4z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}},
                items: [
                    {text: '博客1'},
                    {text: '博客2'},
                    {text: '博客3'},
                ],
            },
            {text: '关注我们', icon: {className: 'example-icon example-icon-group', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M7%207a3%203%200%201%200%206%200%203%203%200%201%200-6%200M3%2021v-3c0-6%2014-6%2014%200v3zM17%204a3%203%200%200%201%200%206m2%204c3%201%203%204%203%207%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}},
        ],
        onClickItem: (info) => {
            console.log('> nav.onClickItem', info);
        },
    });
    console.log('> nav', nav);
});
