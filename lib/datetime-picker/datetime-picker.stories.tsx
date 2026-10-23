import '@zui/button/css';
import '@zui/form-control';
import '@zui/input-control';
import '@zui/list';
import '@zui/menu';
import '@zui/toolbar';
import '@zui/datetime-picker/css';
import {DatetimePicker} from '@zui/datetime-picker/react';
import {action} from 'storybook/actions';
import {createPreactRender} from '../../.storybook/zui';

import type {Meta, StoryObj} from '@storybook/html-vite';
import type {DatetimePickerOptions} from '@zui/datetime-picker/react';

type DatetimeArgs = {
    value: string;
    disabled: boolean;
    readonly: boolean;
    minDate: string;
    maxDate: string;
    minuteStep: number;
};

const onChange = action('datetime change');
const onInvalid = action('datetime invalid');
const onSubmit = action('datetime submit');

function DatetimePreview({options, submit}: {options: DatetimePickerOptions; submit(values: [string, FormDataEntryValue][]): void}) {
    return (
        <form
            className="col gap-3 w-80 max-w-full"
            onSubmit={(event) => {
                event.preventDefault();
                submit([...new FormData(event.currentTarget).entries()]);
            }}
        >
            <label htmlFor="date-picker-storybook-datetime">计划开始时间</label>
            <DatetimePicker {...options} />
            <output aria-live="polite">
                当前值：
                {options.value || '未选择'}
            </output>
            <button type="submit" className="btn">提交</button>
        </form>
    );
}

const meta = {
    title: '组件/DatetimePicker 日期时间选择器',
    args: {value: '2026-10-15 09:30', disabled: false, readonly: false, minDate: '', maxDate: '', minuteStep: 5},
    argTypes: {
        value: {control: 'text', name: '日期时间'},
        disabled: {control: 'boolean', name: '禁用'},
        readonly: {control: 'boolean', name: '只读'},
        minDate: {control: 'text', name: '最早时间'},
        maxDate: {control: 'text', name: '最晚时间'},
        minuteStep: {control: 'select', options: [1, 5, 15, 30], name: '分钟步长'},
    },
    render: createPreactRender(DatetimePreview, {
        key: (args: DatetimeArgs) => JSON.stringify([args.disabled, args.readonly]),
        props: (args: DatetimeArgs, api) => ({
            options: {
                ...args,
                id: 'storybook-datetime',
                name: 'start',
                format: 'yyyy-MM-dd hh:mm',
                placeholder: '请选择日期时间',
                actions: [],
                limitPopInScreen: true,
                popMaxWidth: 'calc(100vw - 32px)',
                popStyle: {overflowX: 'auto'},
                onChange: api.guard((value: string, oldValue: string) => {
                    if (value === args.value) return;
                    api.updateArgs({value});
                    onChange({value, oldValue});
                }),
                onInvalid: api.guard((value: string) => {
                    if (value) onInvalid({value});
                }),
            },
            submit: api.guard((values: [string, FormDataEntryValue][]) => onSubmit(values)),
        }),
    }),
} satisfies Meta<DatetimeArgs>;

export default meta;
type Story = StoryObj<DatetimeArgs>;

export const Playground: Story = {name: '日期时间与 Controls'};
export const Empty: Story = {name: '空值与清空', args: {value: ''}};
export const Disabled: Story = {name: '禁用', args: {disabled: true}};
export const ReadOnly: Story = {name: '只读', args: {readonly: true}};
export const DateRange: Story = {
    name: '范围限制',
    args: {minDate: '2026-10-10 08:00', maxDate: '2026-10-20 18:00'},
};
export const MinuteStep: Story = {name: '分钟步长与窄屏', args: {minuteStep: 15}};
