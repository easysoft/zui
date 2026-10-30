import '@zui/button';
import '@zui/utilities';
import 'zui-dev';
import {h, render} from 'preact';
import {VTable, type VTableColumnDef, type VTableOptions} from './src/main';
import {VTable as VTableReact} from './src/main-react';
import {vtableSortingPlugin} from '@zui/vtable/plugins/sorting';
import {vtableRowSelectionPlugin, createVTableSelectionColumn} from '@zui/vtable/plugins/row-selection';
import {vtableColumnResizePlugin} from '@zui/vtable/plugins/column-resize';

import type {RowSelectionState, SortingState} from '@tanstack/table-core';

type DemoRow = {id: string; disabled: boolean; [key: `field-${number}`]: number};
type DemoLanguage = 'zh_cn' | 'zh_tw' | 'en';

const plugins = [vtableSortingPlugin, vtableRowSelectionPlugin, vtableColumnResizePlugin];
let table: VTable<DemoRow> | undefined;
let examples: VTable<DemoRow>[] = [];
let events: AbortController | undefined;
let preactRoot: HTMLElement | null = null;
let rowCount = 1000;
let columnCount = 20;
let revision = 0;
let lang: DemoLanguage = 'zh_cn';
let data: DemoRow[] = [];

function createData(rows: number, columns: number): DemoRow[] {
    return Array.from({length: rows}, (_, row) => {
        const item: DemoRow = {id: `row-${row}`, disabled: row === 7};
        for (let column = 0; column < columns; column++) {
            item[`field-${column}`] = (rows - row) * (column + 1) + revision;
        }
        return item;
    });
}

function createColumns(count: number): VTableColumnDef<DemoRow>[] {
    return Array.from({length: count}, (_, column) => ({
        id: `field-${column}`,
        accessorKey: `field-${column}`,
        header: `列 ${column + 1}`,
        size: 140,
        minSize: 70,
        maxSize: 500,
    }));
}

function status(message: string) {
    const output = document.getElementById('vtableStatus');
    if (output) {
        output.textContent = `${message} · ${data.length.toLocaleString()} 行 × ${columnCount} 数据列（另含选择列）`;
    }
}

function mainOptions(): VTableOptions<DemoRow> {
    return {
        data,
        columns: [createVTableSelectionColumn<DemoRow>(), ...createColumns(columnCount)],
        getRowId: row => row.id,
        plugins,
        enableRowSelection: row => !row.original.disabled,
        height: 360,
        lang,
        attrs: {'aria-label': 'VTable 大数据示例'},
    };
}

function disposeTable() {
    table?.destroy();
    table = undefined;
    status('已销毁');
}

function recreate() {
    disposeTable();
    if (document.getElementById('vtableDemo')) {
        data = createData(rowCount, columnCount);
        table = new VTable<DemoRow>('#vtableDemo', mainOptions());
        status('已创建');
    }
}

function setSize(rows: number, columns: number) {
    rowCount = rows;
    columnCount = columns;
    revision = 0;
    data = createData(rows, columns);
    if (table) {
        table.render(mainOptions(), true);
    } else {
        recreate();
    }
    status('已切换规模');
}

function replace() {
    revision++;
    data = createData(rowCount, columnCount);
    table?.render({data});
    status('已替换数据');
}

function clear() {
    data = [];
    table?.render({data});
    status('已清空');
}

function setLang(language: DemoLanguage) {
    lang = language;
    table?.render({lang});
    const select = document.querySelector<HTMLSelectElement>('#vtableLang');
    if (select) {
        select.value = lang;
    }
    status(`语言：${lang}`);
}

const demo = {
    get table() {return table;},
    get data() {return data;},
    setSize,
    replace,
    clear,
    recreate,
    dispose: disposeTable,
    setLang,
};

declare global {
    interface Window {
        vtableDemo?: typeof demo;
    }
}

function dispose() {
    events?.abort();
    events = undefined;
    disposeTable();
    examples.forEach(instance => instance.destroy());
    examples = [];
    if (preactRoot) {
        render(null, preactRoot);
        preactRoot = null;
    }
    if (window.vtableDemo === demo) {
        delete window.vtableDemo;
    }
}

function setup() {
    dispose();
    if (!document.getElementById('vtableDemo')) {
        return;
    }
    events = new AbortController();
    window.vtableDemo = demo;
    setSize(1000, 20);
    const bind = (id: string, handler: () => void) => {
        document.getElementById(id)?.addEventListener('click', handler, {signal: events!.signal});
    };
    bind('vtableSizeSmall', () => setSize(1000, 20));
    bind('vtableSizeLarge', () => setSize(100000, 20));
    bind('vtableSizeWide', () => setSize(10000, 200));
    bind('vtableReplace', replace);
    bind('vtableClear', clear);
    bind('vtableDispose', disposeTable);
    bind('vtableRecreate', recreate);
    bind('vtableStart', () => {
        table?.scrollToRow('row-0', {align: 'start'});
        table?.scrollToColumn('__selection', {align: 'start'});
    });
    bind('vtableEnd', () => {
        table?.scrollToRow(`row-${data.length - 1}`, {align: 'end'});
        table?.scrollToColumn(`field-${columnCount - 1}`, {align: 'end'});
    });
    bind('vtableResize', () => {
        const root = document.getElementById('vtableDemo')!;
        root.style.width = root.style.width === '65%' ? '100%' : '65%';
    });
    bind('vtableColumnWidth', () => {
        const engine = table?.table;
        const current = engine?.getColumn('field-0')?.getSize();
        engine?.setColumnSizing(previous => ({...previous, 'field-0': current === 240 ? 140 : 240}));
    });
    document.getElementById('vtableLang')?.addEventListener('change', (event) => {
        setLang((event.target as HTMLSelectElement).value as DemoLanguage);
    }, {signal: events.signal});

    const smallData = createData(20, 3);
    const basic = new VTable<DemoRow>('#vtableBasic', {
        data: smallData,
        getRowId: row => row.id,
        columns: [
            {id: 'id', accessorKey: 'id', header: {tag: 'strong', children: '稳定 ID'}, size: 160},
            {id: 'field-0', accessorKey: 'field-0', header: '元素描述', size: 180, cell: context => ({tag: 'strong', children: `${context.getValue()} 分`})},
            {id: 'field-1', accessorKey: 'field-1', header: 'Preact 节点', size: 180, cell: context => h('span', {title: context.row.id}, String(context.getValue()))},
        ],
        height: 220,
        attrs: {'aria-label': '无插件基础示例'},
    });

    let sorting: SortingState = [];
    let rowSelection: RowSelectionState = {};
    const showControlled = () => {
        document.getElementById('vtableControlledStatus')!.textContent = JSON.stringify({sorting, rowSelection});
    };
    const controlled = new VTable<DemoRow>('#vtableControlled', {
        data: smallData,
        columns: [createVTableSelectionColumn<DemoRow>(), ...createColumns(3)],
        getRowId: row => row.id,
        plugins: [vtableSortingPlugin, vtableRowSelectionPlugin],
        state: {sorting, rowSelection},
        onSortingChange(updater) {
            sorting = typeof updater === 'function' ? updater(sorting) : updater;
            controlled.render({state: {sorting, rowSelection}});
            showControlled();
        },
        onRowSelectionChange(updater) {
            rowSelection = typeof updater === 'function' ? updater(rowSelection) : updater;
            controlled.render({state: {sorting, rowSelection}});
            showControlled();
        },
        height: 220,
        attrs: {'aria-label': '受控排序与选择示例'},
    });
    showControlled();
    examples = [basic, controlled];
    preactRoot = document.getElementById('vtablePreact');
    if (preactRoot) {
        render(h(VTableReact<DemoRow>, {
            data: smallData,
            columns: createColumns(3),
            getRowId: row => row.id,
            height: 220,
            attrs: {'aria-label': 'Preact 直接挂载示例'},
        }), preactRoot);
    }
}

onPageUpdate(setup);

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        dispose();
        document.removeEventListener('dev-page-load', setup);
        document.removeEventListener('dev-page-update', setup);
    });
}
