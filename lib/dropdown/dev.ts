import '@zui/button';
import '@zui/menu';
import '@zui/icons';
import 'zui-dev';
import {Dropdown} from './src/main';

onPageUpdate(() => {
    const dropdown = new Dropdown('#dropdownToggle', {
        menu: {
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
                console.log('> dropdown.onClickItem', info);
            },
        },
    });
    console.log('> dropdown', dropdown);
});
