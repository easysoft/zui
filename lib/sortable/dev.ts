import '@zui/menu';
import '@zui/list';
import '@zui/icons';
import '@zui/button';
import '@zui/avatar';
import '@zui/checkbox';
import 'zui-dev';
import {$} from '@zui/core';
import {Sortable, SortableList} from './src/main';

$.registerLib('sortablejs', {
    src: '/lib/sortable/public/sortable.min.js',
    name: 'Sortable',
});

onPageUpdate(() => {
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
