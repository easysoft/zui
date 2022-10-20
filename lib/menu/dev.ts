import 'preact/debug';
import '@zui/icons';
import '@zui/avatar';
import 'zui-dev';
import {Menu} from './src/main';

onPageLoad(() => {
    const menu = new Menu('#menu', {
        items: [
            {title: '复制', icon: 'icon-copy'},
            {title: '粘贴', icon: 'icon-paste'},
            {title: '剪切'},
            {type: 'heading', title: '更多操作'},
            {title: '导入', icon: 'icon-upload-alt'},
            {title: '导出', icon: 'icon-download-alt'},
            {title: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
        ],
        onClickItem: (info) => {
            console.log('> menu.onClickItem', info);
        },
    });
    console.log('> menu', menu);
});
