import '@zui/form-control';
import '@zui/list';
import '@zui/menu';
import '@zui/pick';
import '@zui/picker';
import {Picker} from '@zui/picker/react';
import {action} from 'storybook/actions';
import {createPreactRender} from '../../.storybook/zui';

import type {Meta, StoryObj} from '@storybook/html-vite';
import type {PickerItemOptions, PickerOptions} from '@zui/picker';

type PickerArgs = {
    value: string;
    multiple: boolean;
    disabled: boolean;
    readonly: boolean;
    search: boolean;
};

const members: PickerItemOptions[] = [
    {value: 'linyue', text: '林悦 · 产品', keys: '产品 product linyue'},
    {value: 'chenchen', text: '陈晨 · 研发', keys: '研发 developer chenchen'},
    {value: 'wangning', text: '王宁 · 测试', keys: '测试 qa wangning'},
    {value: 'heyu', text: '何雨 · 客户支持（休假中）', keys: '客户支持 support heyu', disabled: true},
];
const longMembers: PickerItemOptions[] = [
    {value: 'long', text: '项目协作成员 · 负责跨部门需求评审、版本验收与全部发布通知的协调工作'},
    ...members,
];
const onChange = action('picker change');
const onSubmit = action('picker submit');

function PickerPreview({options, submit}: {options: PickerOptions; submit(values: [string, FormDataEntryValue][]): void}) {
    return (
        <form
            className="col gap-3 w-80 max-w-full"
            onSubmit={(event) => {
                event.preventDefault();
                submit([...new FormData(event.currentTarget).entries()]);
            }}
        >
            <span id="storybook-picker-label">项目成员</span>
            <Picker {...options} />
            <output aria-live="polite">
                当前值：
                {options.value || '未选择'}
            </output>
            <button type="submit" className="btn">提交</button>
        </form>
    );
}

function renderPicker(items: PickerItemOptions[] = members) {
    return createPreactRender(PickerPreview, {
        // Recreate the trigger when its kind or interactivity changes, releasing any open popup.
        key: (args: PickerArgs) => JSON.stringify([args.multiple, args.disabled, args.readonly]),
        props: (args: PickerArgs, api) => ({
            options: {
                ...args,
                id: 'storybook-picker',
                name: 'owner',
                attrs: {'aria-labelledby': 'storybook-picker-label'},
                items,
                checkbox: args.multiple,
                placeholder: '请选择项目成员',
                searchHint: '搜索姓名或部门',
                searchEmptyHint: '无匹配选项',
                popHeader: items.length ? undefined : '暂无可选成员',
                onChange: api.guard((value: string, oldValue: string) => {
                    // Controls also update component state; only user changes go back to args and Actions.
                    if (value === args.value) return;
                    api.updateArgs({value});
                    onChange({value, oldValue});
                }),
            },
            submit: api.guard((values: [string, FormDataEntryValue][]) => onSubmit(values)),
        }),
    });
}

const meta = {
    title: '组件/Picker 下拉选择器',
    args: {value: '', multiple: false, disabled: false, readonly: false, search: true},
    argTypes: {
        value: {control: 'text', name: '当前值（多选用逗号分隔）'},
        multiple: {control: 'boolean', name: '多选'},
        disabled: {control: 'boolean', name: '禁用'},
        readonly: {control: 'boolean', name: '只读'},
        search: {control: 'boolean', name: '搜索'},
    },
    render: renderPicker(),
} satisfies Meta<PickerArgs>;

export default meta;
type Story = StoryObj<PickerArgs>;

export const Single: Story = {name: '单选、搜索与清空'};
export const Multiple: Story = {name: '多选与取消', args: {multiple: true, value: 'linyue,chenchen'}};
export const Disabled: Story = {name: '禁用', args: {value: 'chenchen', disabled: true}};
export const ReadOnly: Story = {name: '只读', args: {value: 'chenchen', readonly: true}};
export const Empty: Story = {name: '空数据', render: renderPicker([])};
export const LongLabels: Story = {name: '长选项与窄屏', args: {value: 'long'}, render: renderPicker(longMembers)};
