import '@zui/menu';
import '@zui/list';
import '@zui/tree';
import '@zui/css-icons';
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
            icon: {className: 'i-move muted', 'aria-hidden': true},
        },
        sortable: {
            handle: '.i-move',
        },
        canSortTo: function (_event, _from, to) {
            if (to.text === '技术支持') {
                return false;
            }
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
            {title: '超复杂情况', subtitle: '这是副标题', url: 'https://openzui.com', icon: {className: 'example-icon example-icon-star', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%202l3%206%207%201-5%205%201%208-6-4-6%204%201-8-5-5%207-1z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, trailingIcon: {className: 'chevron-right', 'aria-hidden': true}, avatar: {icon: {className: 'example-icon example-icon-flag', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2022V3h14l-3%205%203%205H5%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, className: 'primary'}},
            {title: '超复杂情况', subtitle: '这是副标题', icon: {className: 'example-icon example-icon-star', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%202l3%206%207%201-5%205%201%208-6-4-6%204%201-8-5-5%207-1z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, trailingIcon: {className: 'chevron-right', 'aria-hidden': true}, avatar: {icon: {className: 'example-icon example-icon-flag', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2022V3h14l-3%205%203%205H5%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, className: 'success'}, checked: true, actions: [{icon: {className: 'i-check', 'aria-hidden': true}}]},
        ],
        itemProps: {
            icon: {className: 'i-move muted', 'aria-hidden': true},
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
