import 'zui-dev';
import '@zui/base';
import '@zui/utilities';
import '@zui/button';
import '@zui/css-icons';
import '@zui/form-builder';
import {h, render} from 'preact';
import {FormBuilder} from '@zui/form-builder/react';
import {Segmented} from './src/main';
import type {SegmentedOptions} from './src/main';

const instances: Segmented[] = [];
let builderHost: HTMLElement | null = null;

function cleanup() {
    instances.splice(0).forEach(instance => instance.destroy());
    if (builderHost) {
        render(null, builderHost);
        builderHost = null;
    }
}

function setup() {
    cleanup();
    const items = [{value: 'list', text: '列表'}, {value: 'board', text: '看板', disabled: true}, {value: 'card', text: '卡片'}];
    const add = (id: string, options: SegmentedOptions = {}) => {
        const instance = new Segmented(`#${id}`, {items, attrs: {'aria-label': '视图'}, ...options});
        instances.push(instance);
        return instance;
    };
    add('segmentedBasic');
    add('segmentedSmall', {size: 'sm'});
    add('segmentedLarge', {size: 'lg'});
    add('segmentedRound', {shape: 'round'});
    add('segmentedBlock', {block: true});
    add('segmentedVertical', {vertical: true});
    add('segmentedDisabled', {disabled: true, defaultValue: 'card'});
    add('segmentedIcons', {items: [
        {value: 'list', icon: {className: 'i-menu'}, 'aria-label': '列表', title: '列表'},
        {value: 'calendar', icon: {className: 'i-calendar'}, 'aria-label': '日历', title: '日历'},
    ]});
    add('segmentedCustom', {items: [
        {value: 'day', text: {tag: 'span', className: 'col py-2', children: ['每日', {tag: 'small', children: '按天汇总'}]}},
        {value: 'week', text: {tag: 'span', className: 'col py-2', children: ['每周', {tag: 'small', children: '按周汇总'}]}},
    ]});
    const controlled = add('segmentedControlled', {value: 'list', onChange: (value) => {
        controlled.render({value});
        document.querySelector<HTMLOutputElement>('#segmentedControlledValue')!.value = String(value);
    }});
    const dynamic = add('segmentedDynamic', {items: []});
    let loaded = false;
    document.querySelector<HTMLButtonElement>('#segmentedLoad')!.onclick = () => {
        loaded = !loaded;
        dynamic.render({items: loaded ? items : [{value: 'table', text: '表格'}, {value: 'card', text: '卡片'}]});
    };
    add('segmentedField', {name: 'view', defaultValue: 'card'});
    const form = document.querySelector<HTMLFormElement>('#segmentedForm')!;
    form.onsubmit = (event) => {
        event.preventDefault();
        form.querySelector('output')!.value = JSON.stringify(Object.fromEntries(new FormData(form)));
    };
    builderHost = document.getElementById('segmentedBuilder')!;
    render(h(FormBuilder, {
        schema: {type: 'object', properties: {
            view: {type: 'string', title: '视图', widget: 'Segmented', props: {items, attrs: {'aria-label': '视图'}}},
        }},
        defaultData: {view: 'card'},
        onDataChange: (data) => {document.querySelector<HTMLOutputElement>('#segmentedBuilderValue')!.value = JSON.stringify(data);},
    }), builderHost);
}

onPageUpdate(setup);
import.meta.hot?.dispose(() => {
    cleanup();
    document.removeEventListener('dev-page-load', setup);
    document.removeEventListener('dev-page-update', setup);
});
