import '@zui/button';
import '@zui/menu';
import '@zui/form-control';
import '@zui/utilities';
import 'zui-dev';
import {JsonUI, validateJsonUI} from './src/main';

import type {JsonUINode} from './src/main';

const samples: Record<string, JsonUINode> = {
    basic: {
        tag: 'section',
        props: {className: 'col gap-4'},
        children: [
            {tag: 'h3', children: '个人设置'},
            {
                component: 'Button',
                key: 'save',
                props: {attrs: {id: 'jsonUISave'}, text: '保存', type: 'primary'},
                events: {onClick: 'saveProfile'},
            },
            {
                tag: 'button',
                props: {id: 'jsonUINativeButton', type: 'button'},
                children: '原生按钮',
                events: {onClick: 'nativeClick'},
            },
            {
                component: 'Menu',
                props: {items: [{text: '账户信息'}, {text: '通知设置'}]},
                events: {onClickItem: 'selectItem'},
            },
        ],
    },
    html: {tag: 'section', html: '<p>HTML 中的 <strong>格式化内容</strong>。</p>'},
    lazy: {
        fetcher: new URL('./assets/lazy-ui.json', import.meta.url).href,
        type: 'custom',
        loadingContent: {tag: 'p', children: '正在读取 JSON UI…'},
    },
    lazyHTML: {
        fetcher: new URL('./assets/lazy-content.html', import.meta.url).href,
        type: 'html',
        loadingContent: {tag: 'p', children: '正在读取 HTML…'},
    },
};

let view: JsonUI | undefined;
let listeners: AbortController | undefined;

function dispose() {
    listeners?.abort();
    view?.destroy();
    view = undefined;
}

function initialize() {
    dispose();
    const source = document.querySelector<HTMLTextAreaElement>('#jsonUISource');
    const scenario = document.querySelector<HTMLSelectElement>('#jsonUIScenario');
    const allowHTML = document.querySelector<HTMLInputElement>('#jsonUIAllowHTML');
    const allowLazyHTML = document.querySelector<HTMLInputElement>('#jsonUIAllowLazyHTML');
    const errors = document.querySelector<HTMLElement>('#jsonUIErrors');
    const events = document.querySelector<HTMLOutputElement>('#jsonUIEvents');
    const preview = document.querySelector<HTMLElement>('#jsonUIPreview');
    const applyButton = document.querySelector<HTMLButtonElement>('#jsonUIApply');
    if (!source || !scenario || !allowHTML || !allowLazyHTML || !errors || !events || !preview || !applyButton) {
        return;
    }
    listeners = new AbortController();
    const {signal} = listeners;
    let actionCount = 0;
    const recordAction = (name: string) => {
        events.value = `已执行 ${name}（${++actionCount}）`;
    };
    const actions = {
        saveProfile: () => recordAction('saveProfile'),
        nativeClick: () => recordAction('nativeClick'),
        selectItem: () => recordAction('selectItem'),
    };
    const createOptions = () => ({
        actions,
        capabilities: {html: allowHTML.checked, lazyHtml: allowLazyHTML.checked},
        onError: (error: Error) => {
            errors.textContent = error.message;
        },
    });
    const apply = () => {
        errors.textContent = '';
        try {
            const schema: unknown = JSON.parse(source.value);
            const options = createOptions();
            const issues = validateJsonUI(schema, options);
            if (issues.length) {
                errors.textContent = issues.map(error => error.message).join('\n');
                return;
            }
            if (view) {
                view.render({schema: schema as JsonUINode});
            } else {
                view = new JsonUI(preview, {schema: schema as JsonUINode, ...options});
            }
        } catch (error) {
            errors.textContent = error instanceof Error ? error.message : String(error);
        }
    };
    const selectSample = () => {
        source.value = JSON.stringify(samples[scenario.value], null, 2);
        apply();
    };
    const resetPermissions = () => {
        view?.destroy();
        view = new JsonUI(preview, {schema: null, ...createOptions()});
        apply();
    };
    applyButton.addEventListener('click', apply, {signal});
    scenario.addEventListener('change', selectSample, {signal});
    allowHTML.addEventListener('change', resetPermissions, {signal});
    allowLazyHTML.addEventListener('change', resetPermissions, {signal});
    selectSample();
}

onPageUpdate(initialize);

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        dispose();
        document.removeEventListener('dev-page-load', initialize);
        document.removeEventListener('dev-page-update', initialize);
    });
}
