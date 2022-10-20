import '@zui/button';
import '@zui/menu';
import '@zui/icons';
import 'zui-dev';
import 'preact/debug';
import {ContextMenu} from './src/main';

onPageLoad(() => {
    const contextMenu = new ContextMenu('#menuToggle1', {
        items: [
            {title: '复制', icon: 'icon-copy'},
            {title: '粘贴', icon: 'icon-paste'},
            {title: '剪切'},
            {type: 'heading', title: '更多操作'},
            {title: '导入', icon: 'icon-upload-alt'},
            {title: '导出', icon: 'icon-download-alt'},
            {
                title: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event),
                items: [
                    {title: '保存到云端'},
                    {
                        title: '下载到本地',
                        items: [
                            {title: '下载为 PDF'},
                            {title: '下载为 Excel'},
                        ],
                    },
                ],
            },
        ],
        menu: {
            onClickItem: (info) => {
                console.log('> menu.onClickItem', info);
            },
        },
    });
    console.log('> contextMenu', contextMenu);

    document.getElementById('menuToggle2')?.addEventListener('click', (event) => {
        const contextmenu = ContextMenu.show({
            event,
            items: [
                {title: '复制', icon: 'icon-copy'},
                {title: '粘贴', icon: 'icon-paste'},
                {title: '剪切'},
                {type: 'heading', title: '更多操作'},
                {title: '导入', icon: 'icon-upload-alt'},
                {title: '导出', icon: 'icon-download-alt'},
                {title: '保存', icon: 'icon-save', onClick: (e) => console.log('> menuItem.clicked', e)},
            ],
            menu: {
                onClickItem: (info) => {
                    console.log('> menu.onClickItem', info);
                },
            },
        });
        console.log('> contextmenu', contextmenu);
    });
});
