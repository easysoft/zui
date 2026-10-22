import '@zui/button/css';
import '@zui/dropdown/css';
import '@zui/icons';
import '@zui/list';
import '@zui/menu';
import {DropdownButton} from '@zui/dropdown/react';
import {action} from 'storybook/actions';
import {createPreactRender} from '../../.storybook/zui';

import type {Meta, StoryObj} from '@storybook/html-vite';
import type {ComponentOptions} from '@zui/core';
import type {Dropdown, DropdownButtonOptions, DropdownOptions} from '@zui/dropdown';

type DropdownArgs = {
    text: string;
    placement: NonNullable<DropdownOptions['placement']>;
    disabled: boolean;
    arrow: boolean;
    trigger: 'click' | 'hover';
};

const onShow = action('show');
const onHide = action('hide');
const onClickItem = action('menu action');

function renderDropdown(nested = false, longMenu = false) {
    return createPreactRender(DropdownButton, {
        // DropdownButton only merges options; remount when trigger bindings or the open panel change.
        key: (args: DropdownArgs) => JSON.stringify([args.trigger, args.placement, args.arrow, args.disabled]),
        props: (args: DropdownArgs, api): DropdownButtonOptions => {
            const dropdown: ComponentOptions<DropdownOptions> = {
                trigger: args.trigger,
                placement: args.placement,
                arrow: args.arrow,
                width: 220,
                $onCreate: api.guard(function (this: Dropdown) {
                    (this.element as HTMLButtonElement).disabled = true;
                }),
                $onInited: api.guard(function (this: Dropdown) {
                    (this.element as HTMLButtonElement).disabled = args.disabled;
                }),
                onShow: api.guard(function (this: Dropdown) {
                    if (!this.element.isConnected) return;
                    this.element.setAttribute('aria-expanded', 'true');
                    onShow({trigger: args.trigger});
                }),
                onHide: api.guard(function (this: Dropdown) {
                    if (!this.element.isConnected) return;
                    this.element.setAttribute('aria-expanded', 'false');
                    onHide({trigger: args.trigger});
                }),
            };
            return {
                text: args.text,
                type: 'primary',
                disabled: args.disabled,
                attrs: {'aria-haspopup': 'menu', 'aria-expanded': 'false'},
                trigger: args.trigger,
                placement: args.placement,
                dropdown,
                items: [
                    {key: 'copy', text: '复制', icon: 'copy'},
                    {key: 'paste', text: '粘贴', icon: 'paste'},
                    {type: 'divider'},
                    ...(nested ? [{
                        key: 'export', text: '导出', icon: 'download-alt', items: [
                            {key: 'pdf', text: '导出为 PDF'},
                            {key: 'png', text: '导出为 PNG'},
                        ],
                    }] : [{key: 'archive', text: '归档'}]),
                ].map(item => longMenu && item.key === 'copy' ? {
                    ...item,
                    text: '复制项目的完整配置、成员权限与通知设置（保留全部字段）',
                    hint: '复制项目的完整配置、成员权限与通知设置（保留全部字段）',
                } : item),
                menu: {nestedTrigger: 'click'},
                onClickItem: api.guard(({item}) => {
                    onClickItem({key: item.key, text: item.text});
                }),
            };
        },
    });
}

const meta = {
    title: '组件/Dropdown 下拉菜单',
    args: {text: '操作菜单', placement: 'bottom-start', disabled: false, arrow: false, trigger: 'click'},
    argTypes: {
        text: {control: 'text', name: '按钮文字'},
        placement: {
            control: 'select',
            options: ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'right-start', 'left-start'],
            name: '首选位置',
        },
        disabled: {control: 'boolean', name: '禁用按钮'},
        arrow: {control: 'boolean', name: '浮层箭头'},
        trigger: {control: 'select', options: ['click', 'hover'], name: '触发方式'},
    },
    render: renderDropdown(),
} satisfies Meta<DropdownArgs>;

export default meta;
type Story = StoryObj<DropdownArgs>;

export const Playground: Story = {
    name: '点击打开',
};

export const Disabled: Story = {
    name: '禁用触发按钮',
    args: {disabled: true},
};

export const LongMenu: Story = {
    name: '长菜单项',
    render: renderDropdown(false, true),
};

export const Nested: Story = {
    name: '嵌套菜单',
    args: {text: '导出菜单'},
    render: renderDropdown(true),
};

export const Hover: Story = {
    name: '悬停打开',
    args: {text: '悬停打开', trigger: 'hover'},
};
