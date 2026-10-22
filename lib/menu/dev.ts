import 'preact/debug';
import '@zui/css-icons';
import '@zui/avatar';
import '@zui/checkbox';
import '@zui/form-control';
import '@zui/input-control';
import '@zui/list';
import 'zui-dev';
import {Menu, SearchMenu} from './src/main';

onPageUpdate(() => {
    const searchMenuItems = [
        {text: '复制', icon: {className: 'i-copy', 'aria-hidden': true}, keys: 'fuzhi fz'},
        {text: '粘贴', icon: {className: 'i-paste', 'aria-hidden': true}, keys: 'zhantie zt', disabled: true},
        {text: '剪切'},
        {type: 'heading', text: '更多操作'},
        {
            text: '导入',
            icon: {className: 'i-upload', 'aria-hidden': true},
            listProps: {compact: true, searchBox: true},
            items: [
                {text: '从本地导入'},
                {text: '从网络导入'},
            ],
        },
        {text: '导出', icon: {className: 'i-download', 'aria-hidden': true}},
        {type: 'divider'},
        {
            text: '保存', icon: {className: 'example-icon example-icon-save', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%203h13l4%204v14H3V3zM7%203v6h9V3M7%2021v-8h10v8%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, onClick: event => console.log('> menuItem.clicked', event),
            items: [
                {text: '保存到云端'},
                {
                    listProps: {searchBox: true},
                    text: '下载到本地',
                    items: [
                        {text: '下载为 PDF'},
                        {text: '下载为 Excel'},
                    ],
                },
            ],
        },
    ];
    const searchMenu1 = new SearchMenu('#searchMenu1', {
        wrap: true,
        popup: true,
        searchBox: true,
        searchPlacement: 'bottom',
        underlineKeys: true,
        items: searchMenuItems,
        nestedSearch: false,
        maxHeight: 200,
        onClickItem: (info) => {
            console.log('> menu.onClickItem', info);
        },
    });
    console.log('> searchMenu1', searchMenu1);

    const searchMenu2 = new SearchMenu('#searchMenu2', {
        popup: true,
        searchBox: true,
        underlineKeys: true,
        search: '载',
        items: searchMenuItems,
        onClickItem: (info) => {
            console.log('> menu.onClickItem', info);
        },
    });
    console.log('> searchMenu2', searchMenu2);

    const menu = new Menu('#menu', {
        popup: true,
        items: [
            {text: '复制', icon: {className: 'i-copy', 'aria-hidden': true}},
            {text: '粘贴', icon: {className: 'i-paste', 'aria-hidden': true}},
            {text: '剪切'},
            {type: 'heading', text: '更多操作'},
            {text: '导入', icon: {className: 'i-upload', 'aria-hidden': true}},
            {text: '导出', icon: {className: 'i-download', 'aria-hidden': true}},
            {type: 'divider'},
            {text: '保存', icon: {className: 'example-icon example-icon-save', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%203h13l4%204v14H3V3zM7%203v6h9V3M7%2021v-8h10v8%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, onClick: event => console.log('> menuItem.clicked', event)},
        ],
        onClickItem: (info) => {
            console.log('> menu.onClickItem', info);
        },
    });
    console.log('> menu', menu);

    const checkableMenu = new Menu('#checkableMenu', {
        items: [
            {text: '复制', active: true},
            {text: '粘贴', active: false},
            {text: '剪切'},
            {type: 'heading', text: '更多操作'},
            {text: '导入', active: false},
            {text: '导出', checked: true},
            {text: '保存', active: true, onClick: event => console.log('> menuItem.clicked', event)},
        ],
        checkbox: true,
        checkOnClick: true,
        onClickItem: (info) => {
            console.log('> checkableMenu.onClickItem', info);
        },
    });
    console.log('> checkableMenu', checkableMenu);

    const nestedMenu = new Menu('#nestedMenu', {
        items: [
            {type: 'heading', text: '更多操作'},
            {text: '导出', icon: {className: 'i-download', 'aria-hidden': true}},
            {
                text: '保存', icon: {className: 'example-icon example-icon-save', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%203h13l4%204v14H3V3zM7%203v6h9V3M7%2021v-8h10v8%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, onClick: event => console.log('> menuItem.clicked', event),
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
            console.log('> nestedMenu.onClickItem', info);
        },
    });
    console.log('> nestedMenu', nestedMenu);
});
