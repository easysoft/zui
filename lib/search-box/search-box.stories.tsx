import '@zui/button/css';
import '@zui/input-control';
import '@zui/search-box';
import {SearchBox} from '@zui/search-box/react';
import {action} from 'storybook/actions';
import {createPreactRender} from '../../.storybook/zui';

import type {Meta, StoryObj} from '@storybook/html-vite';
import type {SearchBoxOptions} from '@zui/search-box';

type SearchArgs = {
    value: string;
    placeholder: string;
    delay: number;
    disabled: boolean;
    readonly: boolean;
    compact: boolean;
    mergeIcon: boolean;
    hotkeys: boolean;
};

const onChange = action('search change');
const onEnter = action('search enter');
const onClear = action('search clear');
const onSubmit = action('search submit');

function SearchPreview({options, submit}: {options: SearchBoxOptions; submit(values: [string, FormDataEntryValue][]): void}) {
    return (
        <form
            className="col gap-3 w-80 max-w-full"
            onSubmit={(event) => {
                event.preventDefault();
                submit([...new FormData(event.currentTarget).entries()]);
            }}
        >
            <label htmlFor="storybook-search-box">搜索项目</label>
            <SearchBox {...options} />
            <output aria-live="polite">
                最近通知值：
                {options.value || '空'}
            </output>
            <button type="submit" className="btn">提交</button>
        </form>
    );
}

const meta = {
    title: '组件/SearchBox 搜索框',
    args: {
        value: '', placeholder: '输入项目名称', delay: 500, disabled: false, readonly: false,
        compact: false, mergeIcon: false, hotkeys: true,
    },
    argTypes: {
        value: {control: 'text', name: '当前值'},
        placeholder: {control: 'text', name: '占位提示'},
        delay: {control: {type: 'number', min: 0, max: 3000, step: 100}, name: '通知延迟（毫秒）'},
        disabled: {control: 'boolean', name: '禁用'},
        readonly: {control: 'boolean', name: '只读'},
        compact: {control: 'boolean', name: '紧凑'},
        mergeIcon: {control: 'boolean', name: '合并图标'},
        hotkeys: {control: 'boolean', name: '键盘快捷键'},
    },
    render: createPreactRender(SearchPreview, {
        key: (args: SearchArgs) => String(args.hotkeys),
        props: (args: SearchArgs, api) => ({
            options: {
                ...args,
                id: 'storybook-search-box',
                name: 'query',
                onChange: api.guard((value: string) => {
                    api.updateArgs({value});
                    onChange({value});
                }),
                onEnter: api.guard((value: string) => onEnter({value})),
                onClear: api.guard(() => onClear()),
            },
            submit: api.guard((values: [string, FormDataEntryValue][]) => onSubmit(values)),
        }),
    }),
} satisfies Meta<SearchArgs>;

export default meta;
type Story = StoryObj<SearchArgs>;

export const Playground: Story = {name: '防抖输入与 Controls'};
export const Clearable: Story = {name: '清空与键盘操作', args: {value: 'ZUI 组件库'}};
export const Disabled: Story = {name: '禁用与恢复', args: {value: '已停用项目', disabled: true}};
export const ReadOnly: Story = {name: '只读', args: {value: '只读项目', readonly: true}};
export const Compact: Story = {name: '紧凑与合并图标', args: {compact: true, mergeIcon: true}};
export const LongValue: Story = {
    name: '长内容与窄屏',
    args: {value: '跨部门协作项目：需求评审、设计交付、研发联调、测试验收与版本发布'},
};
