import 'preact/debug';
import '@zui/icons';
import '@zui/avatar';
import '@zui/nav';
import 'zui-dev';
import {ActionMenu, ActionMenuNested} from './src/main';
import {ActionMenuItemOptions, ActionMenuNestedItemOptions} from './src/types';

onPageUpdate(() => {
    const menu = new ActionMenu<ActionMenuItemOptions>('#actionMenu', {
        items: [
            {text: '复制', icon: 'icon-copy'},
            {text: '粘贴', icon: 'icon-paste'},
            {text: '剪切'},
            {type: 'divider'},
            {type: 'heading', text: '更多操作'},
            {text: '导入', icon: 'icon-upload-alt'},
            {text: '导出', icon: 'icon-download-alt'},
        ],
        onClickItem: (info) => {
            console.log('> menu.onClickItem', info);
        },
    });
    console.log('> menu', menu);

    const nestedMenu = new ActionMenuNested<ActionMenuNestedItemOptions>('#nestedActionMenu', {
        nestedTrigger: 'click',
        items: [
            {type: 'heading', text: '更多操作'},
            {text: '导入', icon: 'icon-upload-alt'},
            {type: 'divider'},
            {text: '导出', icon: 'icon-download-alt'},
            {
                text: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event),
                items: [
                    {text: '保存到云端'},
                    {
                        text: '下载到本地',
                        items: [
                            {text: '下载为 PDF'},
                            {text: '下载为 Excel'},
                        ],
                    },
                ],
            },
        ],
        onClickItem: (info) => {
            console.log('> menu.onClickItem', info);
        },
    });
    console.log('> nestedMenu', nestedMenu);

    const nav = new ActionMenu('#nav', {
        name: 'nav',
        items: [
            {text: '首页', icon: 'icon-home'},
            {text: '动态'},
            {text: '论坛'},
            {type: 'divider'},
            {text: '博客', icon: 'icon-rss'},
            {text: '关注我们', icon: 'icon-group'},
        ],
        onClickItem: (info) => {
            console.log('> nav.onClickItem', info);
        },
    });
    console.log('> nav', nav);

    const navExample = new ActionMenu<ActionMenuItemOptions>('#navExample', {
        name: 'nav',
        items: [
            {text: '首页', icon: 'icon-home'},
            {text: '动态'},
            {text: '论坛'},
            {type: 'divider'},
            {text: '博客', icon: 'icon-rss'},
            {text: '关注我们', icon: 'icon-group'},
        ],
        onClickItem: (info) => {
            console.log('> nav.onClickItem', info);
        },
    });
    console.log('> navExample', navExample);
});
