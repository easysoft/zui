import '@zui/button';
import '@zui/list';
import '@zui/menu';
import '@zui/list';
import '@zui/icons';
import '@zui/checkbox';
import '@zui/input-control';
import '@zui/toolbar';
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
                    listProps: {
                        searchBox: true,
                    },
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
                    onClick: event => console.log('> menuItem.clicked', event),
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

    const dropdown2 = new Dropdown('#dropdownToggle2', {
        arrow: true,
        menu: {
            checkOnClick: '.has-checkbox .item',
            items: [
                {text: 'V1', key: '1', actions: [{text: '编辑', onClick: () => console.log('> 编辑了版本1')}]},
                {text: 'V2', key: '2'},
                {text: 'V3', key: '3'},
                {text: 'V4', key: '4'},
            ],
            header() {
                return {
                    component: 'Listitem',
                    className: 'not-hide-menu',
                    props: {
                        text: '全部版本',
                        titleClass: 'text-gray',
                        actions: [
                            {icon: 'exchange', text: '对比', className: this.state.showCheckbox ? 'invisible pointer-events-none' : 'text-primary', onClick: () => this.setState({showCheckbox: true})},
                        ],
                    },
                };
            },
            footer() {
                if (!this.state.showCheckbox) {
                    return null;
                }
                return {
                    component: 'Toolbar',
                    props: {
                        gap: 4,
                        className: 'p-1 pt-0',
                        items: [
                            {text: '确定', size: 'sm', disabled: this.getChecks().length < 2, type: 'primary', onClick: () => console.log('点击了确认，已选中对比版本', this.getChecks())},
                            {text: '取消对比', size: 'sm', className: 'not-hide-menu', type: 'default', onClick: () => this.setState({showCheckbox: false})},
                        ],
                    },
                };
            },
            getItem(item) {
                if (!this.state.showCheckbox) return item;
                item = $.extend({checked: !!this.state.checked[item.key]}, item);
                if (!item.checked && item.disabled === undefined) item = $.extend({disabled: this.getChecks().length >= 2}, item);
                return item;
            },
            onClickItem(info) {
                if (this.state.showCheckbox) {
                    info.event.stopPropagation();
                } else {
                    console.log('> 选择了版本', info.item.key);
                }
            },
        },
        width: 200,
    });

    console.log('> dropdown2', dropdown2);
});
