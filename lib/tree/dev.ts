import 'zui-dev';
import '@zui/button';
import '@zui/menu';
import '@zui/icons';
import '@zui/form-control';
import '@zui/checkbox';
import {Tree} from './src/main';

onPageUpdate(() => {
    const tree = new Tree('#tree', {
        checkbox: true,
        indent: 20,
        collapsedIcon: 'folder-close',
        expandedIcon: 'folder-open',
        normalIcon: 'file-o',
        hover: true,
        itemActions: [
            {
                key: 'edit',
                icon: 'edit',
                hint: '编辑',
                onClick: (e) => console.log(e),
            },
            {
                key: 'delete',
                icon: 'trash',
                hint: '删除',
                onClick: (e) => console.log(e),
            },
            {
                type: 'dropdown',
                key: 'more',
                icon: 'ellipsis-v',
                caret: false,
                hint: '删除',
                dropdown: {
                    placement: 'bottom-end',
                    items: [
                        {text: '分享'},
                        {text: '下载'},
                    ],
                },
            },
        ],
        items: [
            {
                text: '首页',
                icon: 'home',
                url: '#test',
            },
            {
                text: '动态',
                items: [
                    {
                        text: '新闻',
                        checked: true,
                    },
                    {
                        text: '行业',
                    },
                    {
                        text: '发布',
                        url: '#release',
                        items: [
                            {
                                text: '桌面端',
                            },
                            {
                                text: '移动端',
                            },
                        ],
                    },
                ],
            },
            {
                text: '博客',
            },
        ],
    });
    console.log('> tree', tree);
});
