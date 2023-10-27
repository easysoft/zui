import 'preact/debug';
import '@zui/icons';
import '@zui/avatar';
import '@zui/checkbox';
import '@zui/form-control';
import '@zui/input-control';
import '@zui/list';
import 'zui-dev';
import {Menu, SearchMenu} from './src/main';

onPageUpdate(() => {
    const searchMenuItems = [
        {text: '复制', icon: 'icon-copy', keys: 'fuzhi fz'},
        {text: '粘贴', icon: 'icon-paste', keys: 'zhantie zt'},
        {text: '剪切'},
        {type: 'heading', text: '更多操作'},
        {
            text: '导入',
            icon: 'icon-upload-alt',
            items: [
                {text: '从本地导入'},
                {text: '从网络导入'},
            ],
        },
        {text: '导出', icon: 'icon-download-alt'},
        {type: 'divider'},
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
    ];
    const searchMenu1 = new SearchMenu('#searchMenu1', {
        popup: true,
        searchBox: true,
        searchPlacement: 'bottom',
        underlineKeys: true,
        items: searchMenuItems,
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
            {text: '复制', icon: 'icon-copy'},
            {text: '粘贴', icon: 'icon-paste'},
            {text: '剪切'},
            {type: 'heading', text: '更多操作'},
            {text: '导入', icon: 'icon-upload-alt'},
            {text: '导出', icon: 'icon-download-alt'},
            {type: 'divider'},
            {text: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
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
            {text: '保存', active: true, onClick: (event) => console.log('> menuItem.clicked', event)},
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
            console.log('> nestedMenu.onClickItem', info);
        },
    });
    console.log('> nestedMenu', nestedMenu);
});
