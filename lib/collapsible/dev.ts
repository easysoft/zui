import '@zui/button';
import '@zui/list';
import '@zui/menu';
import '@zui/icons';
import '@zui/panel';
import 'zui-dev';
import 'preact/debug';
import {h} from 'preact';
import {Collapsible} from './src/main';

let instances: Collapsible[] = [];

function dispose() {
    instances.forEach(instance => instance.destroy());
    instances = [];
}

function setup() {
    dispose();
    if (!document.getElementById('collapsibleExample')) {
        return;
    }
    const collapsible = new Collapsible('#collapsibleExample', {
        title: '标题',
        content: '内容',
        caption: '描述',
        actions: [
            {text: '操作'},
        ],
        bordered: true,
        toggleButton: {attrs: {'aria-label': '展开或收起内容'}},
    });
    const buttonOnly = new Collapsible('#collapsibleButtonOnly', {
        title: '仅按钮切换',
        content: '点击标题不会切换，使用左侧按钮展开或收起。',
        toggleOnClickHeader: false,
        defaultCollapsed: true,
        bordered: true,
        toggleButton: {attrs: {'aria-label': '展开或收起仅按钮示例'}},
    });
    const controlled = new Collapsible('#collapsibleControlled', {
        title: '受控折叠区域',
        caption: '已收起',
        content: '显示状态由调用方更新 collapsed 控制。',
        collapsed: true,
        bordered: true,
        toggleButton: {attrs: {'aria-label': '展开或收起受控示例'}},
        onChange(collapsed) {
            controlled.render({collapsed, caption: collapsed ? '已收起' : '已展开'});
        },
    });
    const unmount = new Collapsible('#collapsibleUnmount', {
        title: '收起时卸载内容',
        onlyHideOnCollapsed: false,
        bordered: true,
        toggleButton: {attrs: {'aria-label': '展开或收起卸载示例'}},
        content: h('button', {
            type: 'button',
            className: 'btn',
            onClick(event: MouseEvent) {
                const button = event.currentTarget as HTMLButtonElement;
                const count = Number(button.dataset.count || 0) + 1;
                button.dataset.count = String(count);
                button.textContent = `点击次数：${count}`;
            },
        }, '点击次数：0'),
    });
    instances = [collapsible, buttonOnly, controlled, unmount];
}

onPageUpdate(setup);

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        dispose();
        document.removeEventListener('dev-page-load', setup);
        document.removeEventListener('dev-page-update', setup);
    });
}
