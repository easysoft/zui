import 'zui-dev';
import '@zui/button';
import '@zui/menu';
import '@zui/css-icons';
import '@zui/form-control';
import '@zui/checkbox';
import '@zui/input-control';
import '@zui/list';
import {Tree, SearchTree} from './src/main';

onPageUpdate(() => {
    const items = [
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
    ];
    const tree = new Tree('#tree', {
        checkbox: true,
        indent: 20,
        lines: true,
        collapsedIcon: {className: 'example-icon example-icon-folder-close', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%204h7l2%203h9v14H3z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}},
        expandedIcon: {className: 'example-icon example-icon-folder-open', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2013V4h7l2%203h8v4M3%2011h20l-4%2010H1z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}},
        normalIcon: {className: 'example-icon example-icon-file', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M14%203H5v18h14V8zM14%203v5h5%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}},
        defaultNestedShow: true,
        checkOnClick: true,
        preserve: 'myTree',
        itemActions: {
            items: [
                {
                    key: 'edit',
                    icon: {className: 'i-edit', 'aria-hidden': true},
                    hint: '编辑',
                    onClick: e => console.log(e),
                },
                {
                    key: 'delete',
                    icon: {className: 'i-trash', 'aria-hidden': true},
                    hint: '删除',
                    onClick: e => console.log(e),
                },
                {
                    type: 'dropdown',
                    key: 'more',
                    icon: {className: 'more-vert', 'aria-hidden': true},
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
        maxVisibleItems: 2,
    });
    console.log('> tree', tree);

    const searchTree = new SearchTree('#searchTree', {
        searchBox: true,
        checkbox: true,
        collapsedIcon: {className: 'example-icon example-icon-folder-close', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%204h7l2%203h9v14H3z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}},
        expandedIcon: {className: 'example-icon example-icon-folder-open', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2013V4h7l2%203h8v4M3%2011h20l-4%2010H1z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}},
        normalIcon: {className: 'example-icon example-icon-file', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M14%203H5v18h14V8zM14%203v5h5%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}},
        // hover: true,
        itemActions: {
            items: [
                {
                    key: 'edit',
                    icon: {className: 'i-edit', 'aria-hidden': true},
                    hint: '编辑',
                    onClick: e => console.log(e),
                },
                {
                    key: 'delete',
                    icon: {className: 'i-trash', 'aria-hidden': true},
                    hint: '删除',
                    onClick: e => console.log(e),
                },
                {
                    type: 'dropdown',
                    key: 'more',
                    icon: {className: 'more-vert', 'aria-hidden': true},
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
    console.log('> searchTree', searchTree);
});
