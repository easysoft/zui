import '@zui/segmented';
import '@zui/css-icons';
import {Segmented} from '@zui/segmented/react';
import {action} from 'storybook/actions';
import {createPreactRender} from '../../.storybook/zui';
import type {Meta, StoryObj} from '@storybook/html-vite';
import type {SegmentedOptions, SegmentedValue} from '@zui/segmented';

const onChange = action('segmented change');
const meta = {
    title: '控件/Segmented 分段选择器',
    args: {
        items: [{value: 'list', text: '列表'}, {value: 'board', text: '看板', disabled: true}, {value: 'card', text: '卡片'}],
        value: 'list', disabled: false, block: false, vertical: false, shape: 'default',
    },
    argTypes: {
        value: {control: 'select', options: ['list', 'board', 'card'], name: '当前值'},
        items: {control: 'object', name: '选项'},
        size: {control: 'select', options: [undefined, 'xs', 'sm', 'md', 'lg', 'xl'], name: '尺寸'},
        shape: {control: 'select', options: ['default', 'round'], name: '形状'},
        block: {control: 'boolean', name: '等宽'},
        vertical: {control: 'boolean', name: '纵向'},
        disabled: {control: 'boolean', name: '禁用'},
    },
    render: createPreactRender(Segmented, {
        props: (args: SegmentedOptions, api) => ({
            ...args,
            attrs: {'aria-label': '视图'},
            onChange: api.guard((value: SegmentedValue) => {
                api.updateArgs({value});
                onChange(value);
            }),
        }),
    }),
} satisfies Meta<SegmentedOptions>;

export default meta;
type Story = StoryObj<SegmentedOptions>;

export const Playground: Story = {name: '受控选择与 Controls'};
export const Block: Story = {name: '等宽', args: {block: true}};
export const Vertical: Story = {name: '纵向', args: {vertical: true}};
export const Round: Story = {name: '圆角', args: {shape: 'round'}};
export const Disabled: Story = {name: '禁用', args: {disabled: true}};
export const Empty: Story = {name: '空选项', args: {items: []}};
export const Icons: Story = {name: '纯图标', args: {items: [
    {value: 'list', icon: {className: 'i-menu'}, 'aria-label': '列表', title: '列表'},
    {value: 'card', icon: {className: 'i-calendar'}, 'aria-label': '日历', title: '日历'},
]}};
export const CustomContent: Story = {name: '自定义内容', args: {items: [
    {value: 'list', text: (
        <span className="col py-2">
            <strong>每日</strong>
            <small>按天汇总</small>
        </span>
    )},
    {value: 'card', text: (
        <span className="col py-2">
            <strong>每周</strong>
            <small>按周汇总</small>
        </span>
    )},
]}};
export const LongText: Story = {name: '窄屏长文案', args: {block: true, items: [
    {value: 'list', text: '展示所有项目中的未完成工作', title: '展示所有项目中的未完成工作'},
    {value: 'card', text: '仅展示分配给我的工作', title: '仅展示分配给我的工作'},
]}};
