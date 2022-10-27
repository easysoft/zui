import 'preact/debug';
import '@zui/icons';
import '@zui/avatar';
import '@zui/nav';
import 'zui-dev';
import {ActionMenu} from './src/main';
import {CommonActionItem} from './src/types/common-action-item';

onPageLoad(() => {
    const menu = new ActionMenu<CommonActionItem>('#actionMenu', {
        className: 'row gap-3 items-center',
        items: [
            {title: '复制', icon: 'icon-copy'},
            {title: '粘贴', icon: 'icon-paste'},
            {title: '剪切'},
            {type: 'heading', title: '更多操作'},
            {title: '导入', icon: 'icon-upload-alt'},
            {title: '导出', icon: 'icon-download-alt'},
            {title: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
        ],
        itemDefaultProps: {
            item: {
                className: 'flex-inline row items-center gap-1 state',
            },
        },
        onClickItem: (info) => {
            console.log('> menu.onClickItem', info);
        },
    });
    console.log('> menu', menu);


    const nav = new ActionMenu<CommonActionItem>('#nav', {
        name: 'nav',
        items: [
            {title: '首页', icon: 'icon-home'},
            {title: '动态'},
            {title: '论坛'},
            {type: 'divier'},
            {title: '博客', icon: 'icon-rss'},
            {title: '关注我们', icon: 'icon-user-group'},
        ],
        onClickItem: (info) => {
            console.log('> nav.onClickItem', info);
        },
    });
    console.log('> nav', nav);
});
