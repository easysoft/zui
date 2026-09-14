import 'zui-dev';
import './src/main-css';
import {defineButton, definePager, definePicker} from './src/all';

let controller: AbortController | undefined;
let resetFrame = 0;

function updatePage(): void {
    controller?.abort();
    cancelAnimationFrame(resetFrame);
    controller = new AbortController();
    const {signal} = controller;
    // A hot update reloads the page because the platform cannot replace registered classes.
    if (!customElements.get('zui-button')) {
        defineButton();
    }
    if (!customElements.get('zui-pager')) {
        definePager();
    }
    if (!customElements.get('zui-picker')) {
        definePicker();
    }
    const pager = document.querySelector('#webcPager') as HTMLElementTagNameMap['zui-pager'];
    const pageState = document.querySelector<HTMLOutputElement>('#webcPagerState')!;
    const showPage = (source: string) => {
        pageState.value = `${source}：第 ${pager.page} 页，共 ${pager.pageTotal} 页，${pager.recTotal} 条记录`;
    };
    pager.addEventListener('zui-change', () => showPage('zui-change'), {signal});
    document.querySelector('#webcPageNext')!.addEventListener('click', () => {
        pager.page = Math.min(pager.page + 1, pager.pageTotal);
        showPage('property 更新');
    }, {signal});
    document.querySelector('#webcPageEmpty')!.addEventListener('click', async () => {
        pager.recTotal = pager.recTotal ? 0 : 123;
        await Promise.resolve();
        showPage('property 更新');
    }, {signal});
    void pager.ready.then(() => showPage('初始状态'));

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
    void Promise.all([owner.ready, reviewers.ready]).then(() => showForm('初始状态'));
}

onPageUpdate(updatePage);

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        controller?.abort();
        cancelAnimationFrame(resetFrame);
        document.removeEventListener('dev-page-load', updatePage);
        document.removeEventListener('dev-page-update', updatePage);
    });
    import.meta.hot.accept(() => window.location.reload());
}
