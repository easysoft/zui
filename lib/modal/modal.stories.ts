import '@zui/button/css';
import {ModalBase} from '@zui/modal';
import {ModalDialog} from '@zui/modal/react';
import {action} from 'storybook/actions';
import {createPreactRender, createZuiRender} from '../../.storybook/zui';

import type {Meta, StoryObj} from '@storybook/html-vite';
import type {ModalBaseOptions, ModalSizePreset} from '@zui/modal';

type ModalArgs = Required<Pick<ModalBaseOptions, 'backdrop' | 'keyboard'>> & {
    title: string;
    body: string;
    size: ModalSizePreset;
};

const onShow = action('show');
const onHide = action('hide');
const onConfirm = action('confirm');
const onCancel = action('cancel');

function makeModalRender(scenario: 'playground' | 'confirmation' | 'long-content') {
    return createZuiRender(ModalBase<ModalBaseOptions>, {
        host(args: ModalArgs) {
            const root = document.createElement('div');
            root.className = 'flex items-center gap-3';
            root.innerHTML = `
        <button type="button" class="btn primary" disabled>打开对话框</button>
        <output aria-live="polite">等待打开</output>
        <div class="modal">
            <div class="modal-dialog" role="dialog" tabindex="-1">
                <div class="modal-content">
                    <div class="modal-header"><h2 class="modal-title"></h2></div>
                    <div class="modal-actions">
                        <button type="button" class="btn square ghost" data-dismiss="modal" aria-label="关闭对话框"><span class="close" aria-hidden="true"></span></button>
                    </div>
                    <div class="modal-body"></div>
                    <div class="modal-footer"><button type="button" class="btn" data-dismiss="modal" autofocus>关闭</button></div>
                </div>
            </div>
        </div>`;
            const trigger = root.querySelector<HTMLButtonElement>(':scope > button')!;
            const output = root.querySelector('output')!;
            const target = root.querySelector<HTMLElement>('.modal')!;
            const dialog = root.querySelector<HTMLElement>('.modal-dialog')!;
            const body = root.querySelector<HTMLElement>('.modal-body')!;
            const footer = root.querySelector<HTMLElement>('.modal-footer')!;
            root.querySelector('.modal-title')!.textContent = args.title;
            dialog.setAttribute('aria-label', args.title || '对话框');
            dialog.setAttribute('aria-modal', String(args.backdrop !== false));
            body.textContent = args.body;
            if (scenario === 'long-content') {
                for (let index = 1; index <= 48; index++) {
                    const paragraph = document.createElement('p');
                    paragraph.textContent = `第 ${index} 项：确认界面文字、键盘操作和滚动位置。所有内容均为本地演示数据，滚动正文后仍可通过页脚关闭对话框。`;
                    body.append(paragraph);
                }
            }
            const confirm = document.createElement('button');
            confirm.type = 'button';
            confirm.className = 'btn primary';
            confirm.textContent = '确认';
            if (scenario === 'confirmation') {
                trigger.textContent = '打开确认对话框';
                footer.querySelector('button')!.textContent = '取消';
                footer.append(confirm);
            }
            return {root, target, trigger, output, confirm, confirmed: false};
        },
        options: (args, api, host) => ({
            size: args.size,
            backdrop: args.backdrop,
            keyboard: args.keyboard,
            show: false,
            animation: false,
            hideOthers: false,
            onShow: api.guard(() => {
                host.output.textContent = '对话框已打开';
                onShow({title: args.title});
            }),
            onHide: api.guard(() => {
                if (scenario === 'confirmation' && !host.confirmed) {
                    host.output.textContent = '已取消';
                    onCancel();
                } else if (!host.confirmed) {
                    host.output.textContent = '已关闭';
                }
                onHide();
            }),
        }),
        update: 'recreate',
        ready(modal, _args, host, api) {
            const {trigger, confirm} = host;
            const open = api.guard(() => {
                host.confirmed = false;
                trigger.focus();
                modal.show();
            });
            const accept = api.guard(() => {
                host.confirmed = true;
                host.output.textContent = '已确认';
                onConfirm();
                modal.hide();
            });
            trigger.addEventListener('click', open);
            confirm.addEventListener('click', accept);
            trigger.disabled = false;
            api.onCleanup(() => {
                trigger.disabled = true;
                trigger.removeEventListener('click', open);
                confirm.removeEventListener('click', accept);
            });
        },
        beforeDestroy(modal) {
            // Hiding releases the scroll lock before the owned DOM is removed.
            modal.hide();
        },
    });
}

const meta = {
    title: '组件/Modal 对话框',
    args: {
        title: '项目设置',
        body: '在独立对话框中查看内容。使用关闭按钮、Esc 或点击遮罩返回，关闭后焦点回到打开按钮。',
        size: 'md',
        backdrop: true,
        keyboard: true,
    },
    argTypes: {
        title: {control: 'text', name: '标题'},
        body: {control: 'text', name: '正文'},
        size: {control: 'select', options: ['sm', 'md', 'lg', 'full'], name: '尺寸'},
        backdrop: {control: {type: 'select', labels: {true: '点击遮罩关闭', static: '静态遮罩', false: '无遮罩'}}, options: [true, 'static', false], name: '遮罩'},
        keyboard: {control: 'boolean', name: 'Esc 关闭'},
    },
    render: makeModalRender('playground'),
} satisfies Meta<ModalArgs>;

export default meta;
type Story = StoryObj<ModalArgs>;

export const Playground: Story = {
    name: '尺寸与关闭方式',
};

export const Confirmation: Story = {
    name: '确认与取消',
    args: {title: '保存设置', body: '确认保存本次设置？这里仅记录操作结果，不会提交数据。', backdrop: 'static'},
    render: makeModalRender('confirmation'),
};

export const LongContent: Story = {
    name: '长内容滚动',
    args: {title: '检查清单', body: '滚动查看完整清单，页头与页脚保持可见。', size: 'lg'},
    render: makeModalRender('long-content'),
};

export const PreactContent: Story = {
    name: 'Preact 内容布局',
    args: {body: '直接预览 ModalDialog 的内容布局，调整标题、正文和尺寸查看变化。'},
    argTypes: {
        backdrop: {control: false, table: {disable: true}},
        keyboard: {control: false, table: {disable: true}},
    },
    render: createPreactRender(ModalDialog, {
        props: (args: ModalArgs) => ({
            title: args.title,
            body: args.body,
            className: args.size === 'md' ? '' : `size-${args.size}`,
            closeBtn: false,
        }),
    }),
};
