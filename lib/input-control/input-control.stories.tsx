import '@zui/input-control';
import {action} from 'storybook/actions';
import {createPreactRender} from '../../.storybook/zui';

import type {Meta, StoryObj} from '@storybook/html-vite';

type InputArgs = {
    value: string;
    label: string;
    placeholder: string;
    type: 'text' | 'email';
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    required: boolean;
    error: string;
};

const onInput = action('input change');
const onClear = action('input clear');
const onSubmit = action('input submit');

function validationHint(input: HTMLInputElement) {
    return input.validity.valueMissing ? '请填写此字段。' : '请输入有效的邮箱地址。';
}

function InputPreview({args, change, clear, invalid, submit}: {
    args: InputArgs;
    change(value: string, error: string): void;
    clear(): void;
    invalid(error: string): void;
    submit(values: Record<string, FormDataEntryValue>): void;
}) {
    return (
        <form
            className="col gap-3 w-80 max-w-full"
            onSubmit={(event) => {
                event.preventDefault();
                submit(Object.fromEntries(new FormData(event.currentTarget)));
            }}
        >
            <label for="storybook-input-control">{args.label}</label>
            <div className={`input-control has-prefix-icon${args.clearable ? ' has-suffix-icon' : ''}${args.error ? ' has-error' : ''}`}>
                <input
                    id="storybook-input-control"
                    name="project"
                    className="form-control"
                    type={args.type}
                    value={args.value}
                    placeholder={args.placeholder}
                    disabled={args.disabled}
                    readOnly={args.readonly}
                    required={args.required}
                    autoComplete="off"
                    aria-invalid={!!args.error}
                    aria-describedby={args.error ? 'storybook-input-error' : undefined}
                    onInput={({currentTarget}) => change(currentTarget.value, args.error && !currentTarget.validity.valid ? validationHint(currentTarget) : '')}
                    onInvalid={(event) => {
                        event.preventDefault();
                        invalid(validationHint(event.currentTarget));
                        event.currentTarget.focus();
                    }}
                />
                <span className="input-control-prefix" aria-hidden="true">{args.type === 'email' ? '@' : <span className="magnifier" />}</span>
                {args.clearable && (
                    <button
                        type="button"
                        className="btn ghost square input-control-suffix"
                        aria-label="清空输入"
                        disabled={args.disabled || args.readonly || !args.value}
                        onClick={(event) => {
                            event.currentTarget.form?.querySelector('input')?.focus();
                            clear();
                        }}
                    >
                        <span className="close" aria-hidden="true" />
                    </button>
                )}
            </div>
            {args.error && <p id="storybook-input-error" className="text-danger" role="alert">{args.error}</p>}
            <button type="submit" className="btn" disabled={args.disabled}>提交</button>
        </form>
    );
}

const meta = {
    title: '控件/InputControl 输入框',
    args: {
        value: '', label: '项目名称', placeholder: '请输入项目名称', type: 'text',
        disabled: false, readonly: false, clearable: false, required: false, error: '',
    },
    argTypes: {
        value: {control: 'text', name: '当前值'},
        label: {control: 'text', name: '字段名称'},
        placeholder: {control: 'text', name: '占位提示'},
        type: {control: 'select', options: ['text', 'email'], name: '输入类型'},
        disabled: {control: 'boolean', name: '禁用'},
        readonly: {control: 'boolean', name: '只读'},
        clearable: {control: 'boolean', name: '清空按钮'},
        required: {control: 'boolean', name: '必填'},
        error: {control: 'text', name: '校验提示'},
    },
    render: createPreactRender(InputPreview, {
        props: (args: InputArgs, api) => ({
            args,
            change: api.guard((value: string, error: string) => {
                api.updateArgs({value, error});
                onInput({value});
            }),
            clear: api.guard(() => {
                api.updateArgs({value: '', error: ''});
                onClear();
            }),
            invalid: api.guard((error: string) => api.updateArgs({error})),
            submit: api.guard((values: Record<string, FormDataEntryValue>) => {
                api.updateArgs({error: ''});
                onSubmit(values);
            }),
        }),
    }),
} satisfies Meta<InputArgs>;

export default meta;
type Story = StoryObj<InputArgs>;

export const Playground: Story = {name: '原生输入与 Controls'};
export const Clearable: Story = {name: '可清空', args: {value: 'ZUI 组件库', clearable: true}};
export const Disabled: Story = {name: '禁用', args: {value: '已停用项目', disabled: true, clearable: true}};
export const ReadOnly: Story = {name: '只读', args: {value: '只读项目', readonly: true, clearable: true}};
export const Invalid: Story = {
    name: '邮箱校验与恢复',
    args: {label: '通知邮箱', type: 'email', value: 'invalid-email', placeholder: 'name@example.com', required: true, clearable: true, error: '请输入有效的邮箱地址。'},
};
export const LongValue: Story = {
    name: '长内容与窄屏',
    args: {value: 'https://example.com/projects/zui/components/input-control/settings?section=notifications&returnTo=project-overview', clearable: true},
};
