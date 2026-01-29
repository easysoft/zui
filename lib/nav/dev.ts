import 'zui-dev';
import '@zui/icons';
import '@zui/button';
import '@zui/list';
import '@zui/btn-group';
import '@zui/dropdown';
import '@zui/menu';
import {Nav} from './src/main';

onPageUpdate(() => {
    const nav = new Nav('#nav', {
        items: [
            {text: '首页', icon: 'icon-home', active: true},
            {text: '动态'},
            {text: '论坛'},
            {type: 'divider'},
            {
                type: 'dropdown',
                text: '博客',
                icon: 'icon-rss',
                items: [
                    {text: '博客1'},
                    {text: '博客2'},
                    {text: '博客3'},
                ],
            },
            {text: '关注我们', icon: 'icon-group'},
        ],
        onClickItem: (info) => {
            console.log('> nav.onClickItem', info);
        },
    });
    console.log('> nav', nav);
});
