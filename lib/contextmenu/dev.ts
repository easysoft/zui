import '@zui/button';
import '@zui/menu';
import '@zui/icons';
import 'zui-dev';
import 'preact/debug';
import {ContextMenu} from './src/main';

onPageLoad(() => {
    const contextMenu = new ContextMenu('#menuToggle1', {
        menu: {
            items: [
                {text: '复制', icon: 'icon-copy'},
                {text: '粘贴', icon: 'icon-paste'},
                {text: '剪切'},
                {type: 'heading', text: '更多操作'},
                {text: '导入', icon: 'icon-upload-alt'},
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
                console.log('> menu.onClickItem', info);
            },
        },
    });
    contextMenu.on('show', (e) => {
        console.log('> contextmenu.show', e);
    });
    contextMenu.on('shown', (e) => {
        console.log('> contextmenu.shown', e);
    });
    contextMenu.on('hide', (e) => {
        console.log('> contextmenu.hide', e);
    });
    contextMenu.on('hidden', (e) => {
        console.log('> contextmenu.hidden', e);
    });
    console.log('> contextMenu', contextMenu);

    document.getElementById('menuToggle2')?.addEventListener('click', (event) => {
        const contextmenu = ContextMenu.show({
            event,
            menu: {
                items: [
                    {text: '复制', icon: 'icon-copy'},
                    {text: '粘贴', icon: 'icon-paste'},
                    {text: '剪切'},
                    {type: 'heading', text: '更多操作'},
                    {text: '导入', icon: 'icon-upload-alt'},
                    {text: '导出', icon: 'icon-download-alt'},
                    {text: '保存', icon: 'icon-save', onClick: (e) => console.log('> menuItem.clicked', e)},
                ],
                onClickItem: (info) => {
                    console.log('> menu.onClickItem', info);
                },
            },
        });
        contextmenu.on('show', (e) => {
            console.log('>> contextmenu.show', e);
        });
        contextmenu.on('shown', (e) => {
            console.log('>> contextmenu.shown', e);
        });
        contextmenu.on('hide', (e) => {
            console.log('>> contextmenu.hide', e);
        });
        contextmenu.on('hidden', (e) => {
            console.log('>> contextmenu.hidden', e);
        });
        console.log('>> contextmenu', contextmenu);
    });
});
