import 'zui-dev';
import {defineButton} from '@zui/button';
import {definePicker} from '../src/main';

let controller: AbortController | undefined;
let resetFrame = 0;

function updateWebComponentExamples(): void {
    controller?.abort();
    cancelAnimationFrame(resetFrame);
    controller = new AbortController();
    const {signal} = controller;
    if (!customElements.get('zui-button')) {
        defineButton();
    }
    if (!customElements.get('zui-picker')) {
        definePicker();
    }
    const form = document.querySelector<HTMLFormElement>('#webcForm')!;
    const fields = document.querySelector<HTMLFieldSetElement>('#webcFields')!;
    const owner = document.querySelector('#webcOwner') as HTMLElementTagNameMap['zui-picker'];
    const reviewers = document.querySelector('#webcReviewers') as HTMLElementTagNameMap['zui-picker'];
    const state = document.querySelector<HTMLOutputElement>('#webcFormState')!;
    const cancel = document.querySelector<HTMLInputElement>('#webcCancelChange')!;
    const items = [{value: 'hao', text: 'Hao'}, {value: 'tom', text: 'Tom'}, {value: 'amy', text: 'Amy'}, {value: 'lee', text: 'Lee'}];
    owner.items = items;
    reviewers.items = items;
    const showForm = (source: string) => {
        state.value = `${source}：${JSON.stringify(Object.fromEntries(new FormData(form)))}`;
    };
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        showForm('已提交');
    }, {signal});
    form.addEventListener('reset', () => {
        cancelAnimationFrame(resetFrame);
        resetFrame = requestAnimationFrame(() => {
            fields.disabled = false;
            owner.readonly = false;
            showForm('已重置');
        });
    }, {signal});
    form.addEventListener('zui-change', () => showForm('zui-change'), {signal});
    owner.addEventListener('zui-before-change', (event) => {
        if (cancel.checked) {
            event.preventDefault();
            cancel.checked = false;
            showForm('已取消修改');
        }
    }, {signal});
    document.querySelector('#webcSetOwner')!.addEventListener('click', () => {
        owner.value = 'tom';
        showForm('property 更新');
    }, {signal});
    document.querySelector('#webcClearOwner')!.addEventListener('click', () => {
        owner.value = '';
        showForm('已清空');
    }, {signal});
    document.querySelector('#webcDisableFields')!.addEventListener('change', (event) => {
        fields.disabled = (event.target as HTMLInputElement).checked;
        showForm('fieldset 更新');
    }, {signal});
    document.querySelector('#webcReadonlyOwner')!.addEventListener('change', (event) => {
        owner.readonly = (event.target as HTMLInputElement).checked;
    }, {signal});
    void Promise.all([owner.ready, reviewers.ready]).then(() => {
        if (!signal.aborted) {
            showForm('初始状态');
        }
    });
}

onPageUpdate(updateWebComponentExamples);

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        controller?.abort();
        cancelAnimationFrame(resetFrame);
        document.removeEventListener('dev-page-load', updateWebComponentExamples);
        document.removeEventListener('dev-page-update', updateWebComponentExamples);
    });
    import.meta.hot.accept(() => window.location.reload());
}
