import '@zui/icons';
import '@zui/button';
import '@zui/btn-group';
import '@zui/dropdown';
import 'zui-dev';
import {Toolbar} from './src/main-vanilla';

onPageUpdate(() => {
    const toolbar = new Toolbar('#toolbar', {
        items: [
            {text: '首页', icon: 'icon-home', active: true},
            {text: '动态'},
            {text: '论坛'},
            {type: 'divider'},
            {text: '博客', icon: 'icon-rss'},
            {text: '关注我们', icon: 'icon-user-group'},
        ],
        onClickItem: (info) => {
            console.log('> toolbar.onClickItem', info);
        },
    });
    console.log('> toolbar', toolbar);
});
