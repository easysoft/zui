import 'preact/debug';
import '@zui/icons';
import '@zui/avatar';
import 'zui-dev';
import {Menu} from './src/main';

onPageUpdate(() => {
    const menu = new Menu('#menu', {
        items: [
            {text: '复制', icon: 'icon-copy'},
            {text: '粘贴', icon: 'icon-paste'},
            {text: '剪切'},
            {type: 'heading', text: '更多操作'},
            {text: '导入', icon: 'icon-upload-alt'},
            {text: '导出', icon: 'icon-download-alt'},
            {text: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
        ],
        onClickItem: (info) => {
            console.log('> menu.onClickItem', info);
        },
    });
    console.log('> menu', menu);

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
