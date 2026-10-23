import '@zui/button/css';
import '@zui/checkbox';
import {Checkbox} from '@zui/checkbox/react';
import {action} from 'storybook/actions';
import {createPreactRender} from '../../.storybook/zui';

import type {Meta, StoryObj} from '@storybook/html-vite';
import type {CheckboxProps, CheckedType} from '@zui/checkbox';

type CheckboxArgs = {
    checked: CheckedType;
    disabled: boolean;
    label: string;
    type: 'checkbox' | 'switch';
};

const onChange = action('checkbox change');
const onSubmit = action('checkbox submit');

function CheckboxPreview({options, submit}: {options: CheckboxProps; submit(values: [string, FormDataEntryValue][]): void}) {
    return (
        <form
            className="col gap-3 w-80 max-w-full"
            onSubmit={(event) => {
                event.preventDefault();
                submit([...new FormData(event.currentTarget).entries()]);
            }}
        >
            <Checkbox {...options} />
            <output aria-live="polite">
                当前状态：
                {options.checked === 'indeterminate' ? '半选' : (options.checked ? '已选' : '未选')}
            </output>
            <button type="submit" className="btn">提交</button>
        </form>
    );
}

const meta = {
    title: '控件/Checkbox 复选框',
    args: {checked: false, disabled: false, label: '接收项目更新通知', type: 'checkbox'},
    argTypes: {
        checked: {
            control: {type: 'select', labels: {false: '未选', true: '已选', indeterminate: '半选'}},
            options: [false, true, 'indeterminate'],
            name: '选中状态',
        },
        disabled: {control: 'boolean', name: '禁用'},
        label: {control: 'text', name: '文字'},
        type: {control: 'select', options: ['checkbox', 'switch'], name: '外观'},
    },
    render: createPreactRender(CheckboxPreview, {
        props: (args: CheckboxArgs, api) => ({
            options: {
                ...args,
                id: 'storybook-checkbox',
                name: 'notifications',
                value: 'enabled',
                onChange: api.guard((_event: Event, checked: CheckedType) => {
                    api.updateArgs({checked});
                    onChange({checked});
                }),
            },
            submit: api.guard((values: [string, FormDataEntryValue][]) => onSubmit(values)),
        }),
    }),
} satisfies Meta<CheckboxArgs>;

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Playground: Story = {name: '未选与 Controls'};
export const Checked: Story = {name: '已选与表单提交', args: {checked: true}};
export const Indeterminate: Story = {name: '半选与键盘切换', args: {checked: 'indeterminate'}};
export const Disabled: Story = {name: '禁用与恢复', args: {checked: true, disabled: true}};
export const Switch: Story = {name: '开关', args: {type: 'switch'}};
export const LongLabel: Story = {
    name: '长文案与窄屏',
    args: {label: '接收当前项目的需求变更、测试验收和版本发布通知，并同步通知负责跨部门协作的所有成员'},
};
