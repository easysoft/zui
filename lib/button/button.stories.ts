import '@zui/icons';
import '@zui/button/css';
import {Button} from '@zui/button/react';
import {action} from 'storybook/actions';
import {useEffect} from 'storybook/preview-api';
import {createPreactRender} from '../../.storybook/zui';
import {defineButton} from './src/web-component';

import type {Meta, StoryObj} from '@storybook/html-vite';
import type {ButtonProps} from '@zui/button';
import type {ButtonElementOptions} from './src/web-component';

type ButtonArgs = Required<Pick<ButtonElementOptions, 'text' | 'type' | 'size' | 'disabled' | 'active' | 'loading' | 'loadingText'>>;

defineButton();
const onClick = action('click');
const onSubmit = action('submit');

function createWebButton(args: ButtonArgs) {
    const button = document.createElement('zui-button');
    button.setOptions(args);
    button.addEventListener('click', onClick);
    useEffect(() => () => button.removeEventListener('click', onClick), [button]);
    return button;
}

const meta = {
    title: '控件/Button 按钮',
    args: {
        text: '保存',
        type: 'primary',
        size: '',
        disabled: false,
        active: false,
        loading: false,
        loadingText: '保存中…',
    },
    argTypes: {
        text: {control: 'text', name: '文字'},
        type: {control: 'select', options: ['', 'primary', 'secondary', 'danger', 'primary-outline'], name: '外观'},
        size: {control: 'select', options: ['', 'xs', 'sm', 'md', 'lg', 'xl'], name: '尺寸'},
        disabled: {control: 'boolean', name: '禁用'},
        active: {control: 'boolean', name: '激活'},
        loading: {control: 'boolean', name: '加载中'},
        loadingText: {control: 'text', name: '加载文字'},
    },
    render: createPreactRender(Button, {
        props: (args: ButtonArgs, api): ButtonProps => ({
            ...args,
            size: args.size || undefined,
            onClick: api.guard(onClick),
        }),
    }),
} satisfies Meta<ButtonArgs>;

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Preact: Story = {
    name: 'Preact 组件',
};

export const Native: Story = {
    name: '原生 HTML',
    argTypes: {
        loading: {control: false, table: {disable: true}},
        loadingText: {control: false, table: {disable: true}},
    },
    render({text, type, size, disabled, active}) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = ['btn', type, size && `size-${size}`, active && 'active'].filter(Boolean).join(' ');
        button.textContent = text;
        button.disabled = disabled;
        button.addEventListener('click', onClick);
        useEffect(() => () => button.removeEventListener('click', onClick), [button]);
        return button;
    },
};

export const WebComponent: Story = {
    name: 'Web Component',
    render: args => createWebButton(args),
};

export const Form: Story = {
    name: '表单提交',
    render(args) {
        const form = document.createElement('form');
        form.className = 'inline-flex items-center gap-3';
        const button = createWebButton(args);
        button.btnType = 'submit';
        const output = document.createElement('output');
        output.setAttribute('aria-live', 'polite');
        output.textContent = '等待提交';
        form.append(button, output);
        let count = 0;
        const submit = (event: SubmitEvent) => {
            event.preventDefault();
            output.textContent = `已提交 ${++count} 次`;
            onSubmit({count});
        };
        // Prevent native navigation even before Storybook runs preview effects.
        form.addEventListener('submit', submit);
        useEffect(() => () => form.removeEventListener('submit', submit), [form]);
        return form;
    },
};
