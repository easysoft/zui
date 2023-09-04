import 'preact/debug';
import 'zui-dev';
import '@zui/dropdown';
import '@zui/icons';
import '@zui/button';
import {BtnGroup} from './src/main';

onPageLoad(() => {
    const btnGroup = new BtnGroup('#btnGroup', {
        items: [
            {text: '复制', icon: 'icon-copy'},
            {text: '粘贴', icon: 'icon-paste'},
            {text: '剪切'},
            {type: 'dropdown', text: '导入', icon: 'icon-upload-alt', items: [
                {text: '导入文件'},
                {text: '导入目录'},
            ]},
            {text: '导出', icon: 'icon-download-alt'},
            {text: '保存', icon: 'icon-save', onClick: (event) => console.log('> btnGroupItem.clicked', event)},
        ],
        onClickItem: (info) => {
            console.log('> btnGroup.onClickItem', info);
        },
    });
    console.log('> btnGroup', btnGroup);
});
