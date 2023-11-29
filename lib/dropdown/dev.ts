import '@zui/button';
import '@zui/list';
import '@zui/menu';
import '@zui/icons';
import '@zui/input-control';
import 'zui-dev';
import {Dropdown} from './src/main';

onPageUpdate(() => {
    const dropdown = new Dropdown('#dropdownToggle', {
        arrow: true,
        menu: {
            searchBox: true,
            searchPlacement: 'top',
            items: [
                {text: '复制', icon: 'icon-copy'},
                {text: '粘贴', icon: 'icon-paste'},
                {text: '剪切'},
                {type: 'heading', text: '更多操作'},
                {type: 'divider'},
                {text: '导入', icon: 'icon-upload-alt'},
                {
                    text: '导出',
                    icon: 'icon-download-alt',
                    items: [
                        {text: '导出为 PDF'},
                        {text: '导出为 PNG'},
                        {text: '导出为 JPG'},
                        {text: '导出为 Excel'},
                        {text: '导出为 Word'},
                    ],
                },
                {
                    text: '保存',
                    icon: 'icon-save',
                    onClick: (event) => console.log('> menuItem.clicked', event),
                    items: [
                        {text: '保存到云端'},
                        {
                            text: '下载到本地',
                            items: [
                                {text: '下载为 PDF'},
                                {text: '下载为 Excel'},
                                {text: '下载为 Word'},
                                {text: '下载为 PNG'},
                                {text: '下载为 JPG'},
                                {text: '下载为 SVG'},
                            ],
                        },
                    ],
                },
                {text: '点击此项不关闭菜单', className: 'not-hide-menu'},
            ],
            onClickItem: (info) => {
                console.log('> dropdown.onClickItem', info);
            },
        },
    });
    console.log('> dropdown', dropdown);
});
