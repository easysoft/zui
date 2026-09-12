import '@zui/button';
import '@zui/utilities';
import 'zui-dev';
import {h} from 'preact';
import {VirtualList} from './src/main';

let instances: VirtualList[] = [];
let events: AbortController | undefined;

function dispose() {
    events?.abort();
    events = undefined;
    instances.forEach(instance => instance.destroy());
    instances = [];
}

function setup() {
    dispose();
    if (!document.getElementById('virtualListFixed')) {
        return;
    }
    events = new AbortController();

    const createRows = (count: number, replaced = false) => Array.from({length: count}, (_, index) => ({
        id: `${replaced ? 'replacement' : 'initial'}-${index}`,
        text: `${replaced ? '替换条目' : '条目'} ${index + 1}`,
    }));
    let rows = createRows(10000);
    const status = document.getElementById('virtualListStatus');
    const updateStatus = (virtualizer: NonNullable<VirtualList['virtualizer']>) => {
        if (!status) {
            return;
        }
        const items = virtualizer.getVirtualItems();
        const range = items.length ? `${items[0].index + 1}–${items[items.length - 1].index + 1}` : '空';
        status.textContent = `共 ${rows.length.toLocaleString()} 条 · 已渲染 ${items.length} 条 · 渲染范围 ${range}`;
    };
    const fixed = new VirtualList('#virtualListFixed', {
        count: rows.length,
        estimateSize: () => 36,
        getItemKey: index => rows[index].id,
        overscan: 5,
        height: 288,
        className: 'border rounded',
        attrs: {'aria-label': '固定高度虚拟列表'},
        itemClassName: 'flex items-center px-3 border-b',
        renderItem: item => rows[item.index].text,
        onChange: updateStatus,
    });

    const bind = (id: string, handler: () => void) => {
        document.getElementById(id)?.addEventListener('click', handler, {signal: events!.signal});
    };
    const replaceRows = (count: number, replaced = false) => {
        rows = createRows(count, replaced);
        fixed.render({
            count: rows.length,
            getItemKey: index => rows[index].id,
            renderItem: item => rows[item.index].text,
        });
        fixed.scrollToOffset(0);
        if (fixed.virtualizer) {
            updateStatus(fixed.virtualizer);
        }
    };

    bind('virtualListStart', () => fixed.scrollToOffset(0));
    bind('virtualListMiddle', () => {
        if (rows.length) {
            fixed.scrollToIndex(Math.floor(rows.length / 2), {align: 'center'});
        }
    });
    bind('virtualListEnd', () => {
        if (rows.length) {
            fixed.scrollToIndex(rows.length - 1, {align: 'end'});
        }
    });
    bind('virtualListReplace', () => replaceRows(250, true));
    bind('virtualListClear', () => replaceRows(0));
    bind('virtualListReset', () => replaceRows(10000));

    let expanded = false;
    const dynamicContent = (index: number) => h('div', {className: 'p-3'}, [
        h('strong', null, `动态条目 ${index + 1}`),
        h('p', {className: 'mt-2', style: {whiteSpace: 'pre-wrap'}}, Array.from(
            {length: expanded ? (index % 5) + 5 : (index % 5) + 1},
            (_, line) => `第 ${line + 1} 段：内容决定行高，滚动时按实际尺寸更新布局。`,
        ).join('\n')),
    ]);
    const dynamic = new VirtualList('#virtualListDynamic', {
        count: 500,
        estimateSize: () => 84,
        dynamic: true,
        overscan: 3,
        height: 320,
        className: 'border rounded',
        attrs: {'aria-label': '动态高度虚拟列表'},
        itemClassName: 'border-b',
        renderItem: item => dynamicContent(item.index),
    });
    bind('virtualListDynamicExpand', () => {
        expanded = !expanded;
        const button = document.getElementById('virtualListDynamicExpand');
        button?.setAttribute('aria-pressed', `${expanded}`);
        if (button) {
            button.textContent = expanded ? '收起长文本' : '展开长文本';
        }
        dynamic.render({renderItem: item => dynamicContent(item.index)});
    });

    const horizontal = new VirtualList('#virtualListHorizontal', {
        count: 1000,
        estimateSize: () => 180,
        horizontal: true,
        height: 120,
        gap: 8,
        paddingStart: 8,
        paddingEnd: 8,
        className: 'border rounded',
        attrs: {'aria-label': '水平虚拟列表'},
        itemClassName: 'flex items-center justify-center bg-surface rounded',
        renderItem: item => `卡片 ${item.index + 1}`,
    });

    const lanes = new VirtualList('#virtualListLanes', {
        count: 600,
        estimateSize: index => 72 + (index % 4) * 24,
        lanes: 3,
        gap: 8,
        paddingStart: 8,
        paddingEnd: 8,
        height: 320,
        className: 'border rounded',
        attrs: {'aria-label': '三列瀑布流虚拟列表'},
        itemClassName: 'flex items-center justify-center bg-surface rounded',
        renderItem: item => `第 ${item.lane + 1} 列 · 条目 ${item.index + 1}`,
    });

    instances = [fixed, dynamic, horizontal, lanes];
}

onPageUpdate(setup);

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        dispose();
        document.removeEventListener('dev-page-load', setup);
        document.removeEventListener('dev-page-update', setup);
    });
}
