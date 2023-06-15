import 'zui-dev';
import '@zui/button';
import '@zui/menu';
import '@zui/icons';
import '@zui/form-control';
import '@zui/checkbox';
import {Tree} from './src/main';

onPageUpdate(() => {
    const items = [
        {
            text: '研发',
            url: '#研发',
            items: [
                {
                    text: '大产品',
                    url: '#大产品',
                    items: [
                        {text: '前端', url: '#前端'},
                        {text: '后端', url: '#后端'},
                    ],
                },
                {text: '桌面端', url: '#桌面端'},
                {text: '移动端', url: '#移动端'},
                {text: '测试', url: '#测试'},
                {text: '运维', url: '#运维'},
            ],
        },
        {text: '市场', url: '#市场'},
        {text: '技术支持', url: '#技术支持'},
        {text: '财务', url: '#财务'},
        {text: '行政', url: '#行政'},
    ];
    const tree = new Tree('#tree', {
        // checkbox: true,
        indent: 20,
        collapsedIcon: 'folder-close',
        expandedIcon: 'folder-open',
        normalIcon: 'file-o',
        hover: true,
        itemActions: {
            items: [
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
        },
        items,
    });
    console.log('> tree', tree);
});
