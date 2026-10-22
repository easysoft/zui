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
        label.className = ['label max-w-full', appearance, size && `size-${size}`].filter(Boolean).join(' ');
        label.title = text;
        const content = document.createElement('span');
        content.className = 'text-ellipsis';
        content.textContent = text;
        label.append(content);
        return label;
    },
} satisfies Meta<LabelArgs>;

export default meta;
type Story = StoryObj<LabelArgs>;

export const Playground: Story = {
    name: '外观与尺寸',
};

export const LongText: Story = {
    name: '长文本省略',
    args: {text: '等待项目负责人完成全部验收条目并确认本次版本的发布计划，包含跨团队协作、风险检查与最终交付确认'},
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
