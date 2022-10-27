import 'preact/debug';
import '@zui/dropdown';
import '@zui/icons';
import {BtnGroup} from './src/vanilla';
import 'zui-dev';

onPageLoad(() => {
    const btnGroup = new BtnGroup('#btnGroup', {
        items: [
            {text: '复制', icon: 'icon-copy'},
            {text: '粘贴', icon: 'icon-paste'},
            {text: '剪切'},
            {type: 'heading', text: '更多操作', caret: true},
            {text: '导入', icon: 'icon-upload-alt'},
            {text: '导出', icon: 'icon-download-alt'},
            {text: '保存', icon: 'icon-save', onClick: (event) => console.log('> btnGroupItem.clicked', event)},
        ],
        onClickItem: (info) => {
            console.log('> btnGroup.onClickItem', info);
        },
    });
    console.log('> btnGroup', btnGroup);
});
