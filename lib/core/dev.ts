import 'zui-dev';
import {h} from 'preact';
import * as core from './src/main';

import type {ComponentChildren} from 'preact';

function SlotSection({heading, children, actions}: {heading?: ComponentChildren; children?: ComponentChildren; actions?: ComponentChildren}) {
    return h('section', {className: 'p-4 border rounded'},
        h('header', {className: 'mb-3'}, heading),
        h('div', {className: 'mb-3'}, children),
        h('footer', null, actions));
}

function updateSlotExamples(): void {
    if (!customElements.get('zui-slot-example')) {
        core.defineWebComponent(SlotSection, {
            tagName: 'zui-slot-example',
            properties: {},
            slots: {'': 'children', heading: 'heading', actions: 'actions'},
        });
    }
    document.querySelectorAll<HTMLButtonElement>('[data-slot-action]').forEach((button) => {
        let count = 0;
        button.onclick = () => {
            button.textContent = `已点击 ${++count} 次`;
        };
    });
}

onPageUpdate(updateSlotExamples);

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        document.removeEventListener('dev-page-load', updateSlotExamples);
        document.removeEventListener('dev-page-update', updateSlotExamples);
    });
    import.meta.hot.accept(() => window.location.reload());
}

console.log('core', core);
