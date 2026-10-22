import 'preact/debug';
import 'zui-dev';
import '@zui/label';
import '@zui/css-icons';
import '@zui/button';
import '@zui/list';
import '@zui/menu';
import '@zui/dropdown';
import {CardList, Card} from './src/main';

onPageUpdate(() => {
    const card = new Card('#card', {
        header: '提示',
        title: '15.5 看板持续迭代',
        prefix: '迭代',
        prefixClass: 'text-sm text-gray',
        icon: {className: 'example-icon example-icon-flag', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2022V3h14l-3%205%203%205H5%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}},
        suffix: '迭代',
        suffixClass: 'label rounded-full size-sm',
        subtitle: {component: 'span', className: 'text-gray', children: '这是副标题'},
        content: '主要内容',
        footer: '自定义内容',
        actions: [
            {icon: {className: 'example-icon example-icon-cog text-gray', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M9%202h6l1%204%204%201%202%205-3%203v4l-5%203-4-2-4%201-4-5%202-4-1-4%204-3zM9%2012a3%203%200%201%200%206%200%203%203%200%201%200-6%200%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, title: '设置'},
            {
                type: 'dropdown',
                icon: {className: 'more-vert text-gray', 'aria-hidden': true},
                caret: false,
                placement: 'bottom-end',
                items: [ // 下拉菜单内容
                    {text: '编辑', icon: {className: 'i-edit', 'aria-hidden': true}},
                ],
            },
        ],
    });
    console.log('> card', card);

    const cards = new CardList('#cards', {
        countPerRow: 2,
        items: [
            {title: 'Card title0'},
            {title: 'Card title1'},
            {title: 'Card title2'},
            {title: 'Card title3'},
            {title: 'Card title4'},
            {title: 'Card title5', subtitle: 'Card subtitle'},
            {title: 'Card title6', subtitle: 'Card subtitle'},
            {title: 'Card title7'},
            {title: 'Card title8'},
            {title: 'Card title9'},
            {title: 'Card title10'},
            {title: 'Card title11', subtitle: 'Card subtitle'},
            {title: 'Card title12', subtitle: 'Card subtitle'},
            {
                title: '15.5 看板持续迭代',
                prefix: '迭代',
                prefixClass: 'text-sm text-gray',
                icon: {className: 'example-icon example-icon-flag', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2022V3h14l-3%205%203%205H5%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}},
                suffix: '迭代',
                suffixClass: 'label rounded-full size-sm',
                subtitle: {component: 'span', className: 'text-gray', children: '这是副标题'},
                content: '主要内容',
                footer: '自定义内容',
                actions: [
                    {icon: {className: 'example-icon example-icon-cog text-gray', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M9%202h6l1%204%204%201%202%205-3%203v4l-5%203-4-2-4%201-4-5%202-4-1-4%204-3zM9%2012a3%203%200%201%200%206%200%203%203%200%201%200-6%200%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, title: '设置'},
                    {
                        type: 'dropdown',
                        icon: {className: 'more-vert text-gray', 'aria-hidden': true},
                        caret: false,
                        placement: 'bottom-end',
                        items: [ // 下拉菜单内容
                            {text: '编辑', icon: {className: 'i-edit', 'aria-hidden': true}},
                        ],
                    },
                ],
            },
            {
                header: '提示',
                title: '15.5 看板持续迭代',
                prefix: '迭代',
                prefixClass: 'text-sm text-gray',
                icon: {className: 'example-icon example-icon-flag', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2022V3h14l-3%205%203%205H5%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}},
                suffix: '迭代',
                suffixClass: 'label rounded-full size-sm',
                subtitle: {component: 'span', className: 'text-gray', children: '这是副标题'},
                content: '主要内容',
                footer: '自定义内容',
                actions: [
                    {icon: {className: 'example-icon example-icon-cog text-gray', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M9%202h6l1%204%204%201%202%205-3%203v4l-5%203-4-2-4%201-4-5%202-4-1-4%204-3zM9%2012a3%203%200%201%200%206%200%203%203%200%201%200-6%200%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, title: '设置'},
                    {
                        type: 'dropdown',
                        icon: {className: 'more-vert text-gray', 'aria-hidden': true},
                        caret: false,
                        placement: 'bottom-end',
                        items: [ // 下拉菜单内容
                            {text: '编辑', icon: {className: 'i-edit', 'aria-hidden': true}},
                        ],
                    },
                ],
            },
        ],
    });
    console.log('> cards', cards);
});
