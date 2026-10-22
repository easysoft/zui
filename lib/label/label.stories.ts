import '@zui/label';

import type {Meta, StoryObj} from '@storybook/html-vite';

type LabelArgs = {
    text: string;
    appearance: string;
    size: '' | 'sm' | 'lg';
};

const meta = {
    title: '控件/Label 标签',
    args: {text: '标签', appearance: 'primary', size: ''},
    argTypes: {
        text: {control: 'text', name: '文字'},
        appearance: {control: 'select', options: ['', 'primary', 'success', 'danger', 'primary-outline'], name: '外观'},
        size: {control: 'select', options: ['', 'sm', 'lg'], name: '尺寸'},
    },
    render({text, appearance, size}) {
        const label = document.createElement('span');
        label.className = ['label', appearance, size && `size-${size}`].filter(Boolean).join(' ');
        label.textContent = text;
        return label;
    },
} satisfies Meta<LabelArgs>;

export default meta;
type Story = StoryObj<LabelArgs>;

export const Playground: Story = {
    name: '外观与尺寸',
};

export const StatusDot: Story = {
    name: '状态圆点',
    args: {text: '在线', appearance: 'success'},
    render({text, appearance, size}) {
        const root = document.createElement('span');
        root.className = 'inline-flex items-center gap-2';
        const dot = document.createElement('span');
        dot.className = ['label label-dot', appearance, size && `size-${size}`].filter(Boolean).join(' ');
        dot.setAttribute('aria-hidden', 'true');
        root.append(dot, document.createTextNode(text));
        return root;
    },
};
