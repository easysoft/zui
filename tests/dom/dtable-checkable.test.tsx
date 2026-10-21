import {act, fireEvent, render} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {DTable} from '@zui/dtable/react';
import {checkable, nested, pager} from '@zui/dtable/src/plugins';

import type {DTableCheckable, DTablePager} from '@zui/dtable/src/plugins';

const data = Array.from({length: 12}, (_, index) => ({id: `r${index + 1}`, name: `Row ${index + 1}`}));
const ids = data.map(row => row.id);

function mountTable(options: Partial<DTableCheckable['options']> = {}) {
    const ref = createRef<DTableCheckable & DTablePager>();
    const view = render(
        <DTable
            ref={ref}
            width={500}
            height="auto"
            lang="zh_cn"
            cols={[{name: 'id', checkbox: true}, {name: 'name'}]}
            data={data}
            plugins={[checkable, pager]}
            localPager={{page: 1, recPerPage: 5}}
            footer={['checkbox', 'checkedInfo']}
            {...options}
        />,
    );
    return {...view, table: ref.current!};
}

function selectAll(container: Element, section = 'header') {
    fireEvent.click(container.querySelector<HTMLInputElement>(`.dtable-${section} input[type="checkbox"]`)!);
}

function expectSelection(container: Element, table: DTableCheckable, selected: string[], allChecked: boolean) {
    expect(table.getChecks()).toEqual(selected);
    expect(table.isAllRowChecked()).toBe(allChecked);
    for (const section of ['header', 'footer']) {
        expect(container.querySelector<HTMLInputElement>(`.dtable-${section} input[type="checkbox"]`)!.checked).toBe(allChecked);
    }
    expect(container.querySelector('.dtable-check-info')).toHaveTextContent(selected.length ? `已选择 ${selected.length} 项, 共 12 项` : '共 12 项');
}

describe('DTable checkable pagination', () => {
    it('selects and clears only the current page while reporting the actual selection across pages', () => {
        const onCheckChange = vi.fn();
        const {container, table} = mountTable({onCheckChange});
        const goToPage = (page: number) => act(() => table.update({dirtyType: 'layout', state: {pager: {page, recPerPage: 5}}}));

        selectAll(container);
        expectSelection(container, table, ids.slice(0, 5), true);
        expect(onCheckChange).toHaveBeenLastCalledWith(Object.fromEntries(ids.slice(0, 5).map(id => [id, true])));

        goToPage(2);
        expectSelection(container, table, ids.slice(0, 5), false);
        selectAll(container, 'footer');
        expectSelection(container, table, ids.slice(0, 10), true);
        selectAll(container, 'footer');
        expectSelection(container, table, ids.slice(0, 5), false);
        expect(onCheckChange).toHaveBeenLastCalledWith(Object.fromEntries(ids.slice(5, 10).map(id => [id, false])));

        goToPage(3);
        expectSelection(container, table, ids.slice(0, 5), false);
        selectAll(container);
        expectSelection(container, table, [...ids.slice(0, 5), ...ids.slice(10)], true);
        fireEvent.click(container.querySelector<HTMLInputElement>('[data-row="r11"] input[type="checkbox"]')!);
        expectSelection(container, table, [...ids.slice(0, 5), 'r12'], false);

        goToPage(1);
        expectSelection(container, table, [...ids.slice(0, 5), 'r12'], true);
        selectAll(container);
        expectSelection(container, table, ['r12'], false);
    });

    it.each([false, true])('selects the whole page beyond the scroll viewport (localPager=%s)', (localPager) => {
        const {container, table} = mountTable({height: 105, localPager: localPager ? {page: 1, recPerPage: 5} : false});
        expect(table.layout.visibleRows.length).toBeLessThan(table.layout.rows.length);
        selectAll(container);
        expectSelection(container, table, localPager ? ids.slice(0, 5) : ids, true);
    });

    it.each([false, true])('checks eligible row identities and honors allowCheckDisabled=%s', (allowCheckDisabled) => {
        const {container, table} = mountTable({
            checkedRows: ids.slice(5),
            canRowCheckable: id => id === 'r2' ? false : id === 'r3' ? 'disabled' : true,
            allowCheckDisabled,
        });
        expectSelection(container, table, ids.slice(5), false);
        selectAll(container, 'footer');
        expectSelection(container, table, [...ids.slice(5), 'r1', ...(allowCheckDisabled ? ['r3'] : []), 'r4', 'r5'], true);
        act(() => {
            table.toggleCheckRows('r1', false);
        });
        expect(table.isAllRowChecked()).toBe(false);
    });

    it('does not mark an empty page or a page without eligible rows as fully checked', () => {
        const {table, rerender} = mountTable({canRowCheckable: () => false, checkedRows: ids});
        expect(table.isAllRowChecked()).toBe(false);
        rerender(<DTable width={500} cols={[]} data={[]} plugins={[checkable, pager]} checkable={true} localPager={true} />);
        expect(table.isAllRowChecked()).toBe(false);
        expect(table.getChecks()).toEqual([]);
    });

    it('keeps explicit row selection available across pages and excludes removed rows from the count', () => {
        const {container, table, rerender} = mountTable();
        act(() => {
            table.toggleCheckRows(['r1', 'r12'], true);
        });
        expectSelection(container, table, ['r1', 'r12'], false);
        rerender(<DTable width={500} cols={[{name: 'id', checkbox: true}]} data={data.slice(0, 5)} plugins={[checkable, pager]} localPager={true} footer={['checkedInfo']} lang="zh_cn" />);
        expect(table.getChecks()).toEqual(['r1']);
        expect(container.querySelector('.dtable-check-info')).toHaveTextContent('已选择 1 项, 共 5 项');
    });

    it('preserves selection of collapsed child rows without local pagination', () => {
        const {container, table} = mountTable({
            data: [{id: 'parent'}, {id: 'child', parent: 'parent'}],
            plugins: [checkable, nested],
            nested: true,
            localPager: false,
            preserveNested: false,
            defaultNestedState: {parent: true},
        });
        expect(table.layout.rows.map(row => row.id)).toEqual(['parent']);
        selectAll(container);
        expect(table.getChecks()).toEqual(['parent', 'child']);
        expect(table.isAllRowChecked()).toBe(true);
    });
});
