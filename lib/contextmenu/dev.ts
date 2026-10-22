import '@zui/button';
import '@zui/list';
import '@zui/menu';
import '@zui/css-icons';
import 'zui-dev';
import 'preact/debug';
import {ContextMenu} from './src/main';

onPageUpdate(() => {
    const contextMenu = new ContextMenu('#menuToggle1', {
        menu: {
            items: [
                {text: '复制', icon: {className: 'i-copy', 'aria-hidden': true}},
                {text: '粘贴', icon: {className: 'i-paste', 'aria-hidden': true}},
                {text: '剪切'},
                {type: 'heading', text: '更多操作'},
                {text: '导入', icon: {className: 'i-upload', 'aria-hidden': true}},
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
            triggerEvent: event,
            menu: {
                items: [
                    {text: '复制', icon: {className: 'i-copy', 'aria-hidden': true}},
                    {text: '粘贴', icon: {className: 'i-paste', 'aria-hidden': true}},
                    {text: '剪切'},
                    {type: 'heading', text: '更多操作'},
                    {text: '导入', icon: {className: 'i-upload', 'aria-hidden': true}},
                    {text: '导出', icon: {className: 'i-download', 'aria-hidden': true}},
                    {text: '保存', icon: {className: 'example-icon example-icon-save', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%203h13l4%204v14H3V3zM7%203v6h9V3M7%2021v-8h10v8%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, onClick: e => console.log('> menuItem.clicked', e)},
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
