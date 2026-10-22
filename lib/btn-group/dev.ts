import 'preact/debug';
import 'zui-dev';
import '@zui/menu';
import '@zui/dropdown';
import '@zui/css-icons';
import '@zui/button';
import {BtnGroup} from './src/main';

onPageLoad(() => {
    const btnGroup = new BtnGroup('#btnGroup', {
        items: [
            {text: '复制', icon: {className: 'i-copy', 'aria-hidden': true}},
            {text: '粘贴', icon: {className: 'i-paste', 'aria-hidden': true}, disabled: true},
            {text: '剪切'},
            {type: 'dropdown', text: '导入', icon: {className: 'i-upload', 'aria-hidden': true}, items: [
                {text: '导入文件'},
                {text: '导入目录'},
            ]},
            {text: '导出', icon: {className: 'i-download', 'aria-hidden': true}},
            {text: '保存', icon: {className: 'example-icon example-icon-save', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%203h13l4%204v14H3V3zM7%203v6h9V3M7%2021v-8h10v8%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, onClick: event => console.log('> btnGroupItem.clicked', event)},
        ],
        onClickItem: (info) => {
            console.log('> btnGroup.onClickItem', info);
        },
    });
    console.log('> btnGroup', btnGroup);
});
