import '@zui/menu';
import '@zui/list';
import '@zui/tree';
import '@zui/icons';
import '@zui/button';
import '@zui/avatar';
import '@zui/checkbox';
import 'zui-dev';
import {$} from '@zui/core';
import {Sortable, SortableList, SortableTree} from './src/main';

$.registerLib('sortablejs', {
    src: '/lib/sortable/public/sortable.min.js',
    name: 'Sortable',
});

onPageUpdate(() => {
    const sortableTree = new SortableTree('#sortableTree', {
        items: [
            {
                text: '研发',
                url: '#研发',
                items: [
                    {
                        text: '大产品',
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
            {text: '市场', url: '#市场', active: true},
            {text: '技术支持', url: '#技术支持'},
            {text: '财务', url: '#财务'},
            {text: '行政', url: '#行政'},
        ],
        itemProps: {
            icon: 'move muted',
        },
        sortable: {
            handle: '.icon-move',
        },
        onSort: function (event, orders, parentKey) {
            console.log('> onSort', event, orders, parentKey);
        },
    });
    console.log('> sortableTree', sortableTree);

    const sortableList = new SortableList('#sortableList', {
        items: [
            {text: '文本', onClick: () => console.log('ok')},
            {title: '标题'},
            {type: 'heading', title: 'heading'},
            {type: 'divider'},
            {title: '大标题', subtitle: '副标题'},
            {title: '链接', subtitle: 'https://openzui.com', url: 'https://openzui.com'},
            {title: '超复杂情况', subtitle: '这是副标题', url: 'https://openzui.com', icon: 'star', trailingIcon: 'arrow-right', avatar: {icon: 'flag', className: 'primary'}},
            {title: '超复杂情况', subtitle: '这是副标题', icon: 'star', trailingIcon: 'arrow-right', avatar: {icon: 'flag', className: 'success'}, checked: true, actions: [{icon: 'check'}]},
        ],
        itemProps: {
            icon: 'move muted',
        },
        onSort: function (event, orders) {
            console.log('> onSort', event, orders);
        },
    });
    console.log('> sortableList', sortableList);

    const sortable1 = new Sortable('#example1', {
        animation: 150,
        ghostClass: 'bg-primary-pale',
    });
    console.log('> sortable1', sortable1);
});
