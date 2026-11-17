import 'preact/debug';
import 'zui-dev';
import '@zui/menu';
import '@zui/dropdown';
import '@zui/css-icons';
import '@zui/button';
import '@zui/form-builder';
import {h, render} from 'preact';
import {FormBuilder} from '@zui/form-builder/react';
import {BtnGroup} from './src/main';
import {BtnGroup as BtnGroupReact, BtnSegmented} from './src/main-react';

onPageLoad(() => {
    const btnGroup = new BtnGroup('#btnGroup', {
        items: [
            {text: '复制', icon: {className: 'i-copy', 'aria-hidden': true}},
            {text: '粘贴', disabled: true},
            {text: '剪切'},
            {type: 'dropdown', text: '导入', icon: {className: 'i-upload', 'aria-hidden': true}, items: [
                {text: '导入文件'},
                {text: '导入目录'},
            ]},
            {text: '导出', icon: {className: 'i-download', 'aria-hidden': true}},
            {text: '保存', icon: {className: 'example-icon example-icon-save', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%203h13l4%204v14H3V3zM7%203v6h9V3M7%2021v-8h10v8%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, onClick: event => console.log('> btnGroupItem.clicked', event)},
        ],
        onClickItem: (info) => {
            console.log('> btnGroup.onClickItem', info);
        },
    });
    console.log('> btnGroup', btnGroup);
});

const radioRoots: HTMLElement[] = [];

function clearRadioExamples() {
    radioRoots.splice(0).forEach(root => render(null, root));
}

function setupRadioExamples() {
    clearRadioExamples();
    const items = [
        {text: '列表', value: 'list'},
        {text: '卡片', value: 'card'},
        {text: '看板', value: 'board', disabled: true},
    ];
    const form = document.querySelector<HTMLFormElement>('#btnGroupRadioForm');
    if (!form) {
        return;
    }
    for (const [id, Component, name] of [
        ['btnGroupRadio', BtnGroupReact, 'view'],
        ['btnSegmentedRadio', BtnSegmented, 'layout'],
    ] as const) {
        const host = document.getElementById(id)!;
        radioRoots.push(host);
        render(h(Component, {radio: true, name, defaultValue: 'card', items, attrs: {'aria-label': '视图'}}), host);
    }
    form.onsubmit = (event) => {
        event.preventDefault();
        form.querySelector('output')!.value = JSON.stringify(Object.fromEntries(new FormData(form)));
    };

    const controlledHost = document.getElementById('btnSegmentedControlled')!;
    radioRoots.push(controlledHost);
    const showControlled = (value: string) => {
        render(h(BtnSegmented, {radio: true, name: 'controlledView', value, items, attrs: {'aria-label': '受控视图'}, onChange: showControlled}), controlledHost);
        document.querySelector<HTMLOutputElement>('#btnSegmentedControlledValue')!.value = value;
    };
    showControlled('list');

    const builderHost = document.getElementById('btnGroupFormBuilder')!;
    radioRoots.push(builderHost);
    render(h(FormBuilder, {
        schema: {type: 'object', properties: {
            view: {type: 'string', title: '视图', required: true, widget: 'BtnSegmented', props: {radio: true, items, attrs: {'aria-label': '视图'}}},
        }},
        defaultData: {view: 'card'},
        onDataChange: (data) => {
            document.querySelector<HTMLOutputElement>('#btnGroupFormBuilderValue')!.value = JSON.stringify(data);
        },
    }), builderHost);
}

onPageUpdate(setupRadioExamples);
import.meta.hot?.dispose(() => {
    clearRadioExamples();
    document.removeEventListener('dev-page-load', setupRadioExamples);
    document.removeEventListener('dev-page-update', setupRadioExamples);
});
