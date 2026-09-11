import {act, fireEvent, render, within} from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import {createRef, type RenderableProps} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {CardList} from '@zui/cards/react';
import {List, Listitem, NestedList} from '@zui/list/react';
import {SearchMenu} from '@zui/menu/react';
import {Nav} from '@zui/nav/react';
import {Tree} from '@zui/tree/react';

import type {Item} from '@zui/common-list';
import type {ListProps, ListitemProps} from '@zui/list';

function makeItems(count: number, prefix = 'Item') {
    return Array.from({length: count}, (_, index) => ({id: String(index), text: `${prefix} ${index}`}));
}

function listElement(list: List): HTMLElement {
    return list.element as HTMLElement;
}

function directItems(element: Element | null) {
    return element!.querySelectorAll(':scope > [z-item]');
}

describe('List incremental display', () => {
    it('only prepares and mounts the initial batch of a 10,000 item list', () => {
        const created = vi.fn();
        class CountingItem extends Listitem {
            constructor(props: ListitemProps) {
                super(props);
                created();
            }
        }
        class CountingList extends List {
            static ItemComponents = {...List.ItemComponents, item: CountingItem};

            prepared = 0;

            protected _getItem(props: RenderableProps<ListProps>, item: Item, index: number) {
                this.prepared++;
                return super._getItem(props, item, index);
            }
        }
        const ref = createRef<CountingList>();
        const items = makeItems(10_000);
        const {getByRole} = render(<CountingList ref={ref} lang="zh_cn" items={items} maxVisibleItems={100} />);

        expect(ref.current!.prepared).toBe(100);
        expect(created).toHaveBeenCalledTimes(100);
        expect(directItems(listElement(ref.current!))).toHaveLength(100);
        expect(ref.current!.getItems()).toBe(items);
        expect(getByRole('button', {name: '剩余9900项没有显示，点击显示更多'})).toHaveAttribute('type', 'button');

        ref.current!.prepared = 0;
        fireEvent.click(getByRole('button', {name: '剩余9900项没有显示，点击显示更多'}));

        expect(ref.current!.prepared).toBe(200);
        expect(created).toHaveBeenCalledTimes(200);
        expect(directItems(listElement(ref.current!))).toHaveLength(200);
        expect(getByRole('button', {name: '剩余9800项没有显示，点击显示更多'})).toBeInTheDocument();
        expect(listElement(ref.current!).querySelector('[z-item="199"]')).toHaveAttribute('z-key', '199');
    });

    it.each([undefined, 0, -1, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])('does not limit items for %s', (maxVisibleItems) => {
        const {container, queryByRole} = render(<List items={makeItems(3)} maxVisibleItems={maxVisibleItems} />);

        expect(container.querySelectorAll('[z-item]')).toHaveLength(3);
        expect(queryByRole('button')).not.toBeInTheDocument();
    });

    it.each([[0.5, 1], [2.9, 2], [3, 3], [4, 3]])('normalizes a positive limit of %s to an initial %s items', (maxVisibleItems, expected) => {
        const {container, queryByRole} = render(<List items={makeItems(3)} maxVisibleItems={maxVisibleItems} showMoreText="More {count}" />);

        expect(container.querySelectorAll('[z-item]')).toHaveLength(expected);
        expect(queryByRole('button') !== null).toBe(expected < 3);
    });

    it('supports a custom template and keyboard activation without selecting a list item', async () => {
        const onClickItem = vi.fn();
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const {container, getByRole, queryByRole} = render(
            <List items={makeItems(5)} maxVisibleItems={2} showMoreText="Show more ({count} remaining)" onClickItem={onClickItem} />,
        );
        const button = getByRole('button', {name: 'Show more (3 remaining)'});
        expect(button.closest('[z-item]')).toBeNull();
        button.focus();

        await user.keyboard('{Enter}');

        expect(container.querySelectorAll('[z-item]')).toHaveLength(4);
        expect(container.querySelector('[z-item="2"]')).toHaveFocus();
        expect(onClickItem).not.toHaveBeenCalled();

        getByRole('button', {name: 'Show more (1 remaining)'}).focus();
        await user.keyboard(' ');

        expect(container.querySelectorAll('[z-item]')).toHaveLength(5);
        expect(queryByRole('button')).not.toBeInTheDocument();
        expect(container.querySelector('[z-item="4"]')).toHaveFocus();
        expect(onClickItem).not.toHaveBeenCalled();
    });

    it('renders custom callback content with the exact remaining count', () => {
        const showMoreText = vi.fn((count: number) => <strong>{`Another ${count}`}</strong>);
        const {getByRole} = render(<List items={makeItems(5)} maxVisibleItems={2} showMoreText={showMoreText} />);

        expect(showMoreText).toHaveBeenLastCalledWith(3);
        expect(getByRole('button', {name: 'Another 3'}).querySelector('strong')).toBeInTheDocument();
        fireEvent.click(getByRole('button', {name: 'Another 3'}));
        expect(showMoreText).toHaveBeenLastCalledWith(1);
        expect(getByRole('button', {name: 'Another 1'})).toBeInTheDocument();
    });

    it('uses translated defaults, falls back to Chinese and accepts an instance i18n override', () => {
        const items = makeItems(4);
        const {getByRole, rerender} = render(<List items={items} maxVisibleItems={1} lang="en" />);
        expect(getByRole('button', {name: '3 items remaining. Click to show more'})).toBeInTheDocument();

        rerender(<List items={items} maxVisibleItems={1} lang="zh_tw" />);
        expect(getByRole('button', {name: '剩餘3項沒有顯示，點擊顯示更多'})).toBeInTheDocument();

        rerender(<List items={items} maxVisibleItems={1} lang="fr" />);
        expect(getByRole('button', {name: '剩余3项没有显示，点击显示更多'})).toBeInTheDocument();

        rerender(<List items={items} maxVisibleItems={1} lang="en" i18n={{en: {showMore: 'Load the next batch ({count} remaining)'}}} />);
        expect(getByRole('button', {name: 'Load the next batch (3 remaining)'})).toBeInTheDocument();
    });

    it('resets the batch when the data source or limit changes, and keeps it for unrelated props', () => {
        const firstItems = makeItems(6);
        const secondItems = makeItems(7, 'Replacement');
        const {container, getByRole, rerender} = render(<List items={firstItems} maxVisibleItems={2} showMoreText="More {count}" />);
        fireEvent.click(getByRole('button', {name: 'More 4'}));
        expect(container.querySelectorAll('[z-item]')).toHaveLength(4);

        rerender(<List items={firstItems} maxVisibleItems={2} showMoreText="Remaining {count}" />);
        expect(container.querySelectorAll('[z-item]')).toHaveLength(4);

        rerender(<List items={secondItems} maxVisibleItems={2} showMoreText="More {count}" />);
        expect(container.querySelectorAll('[z-item]')).toHaveLength(2);
        rerender(<List items={firstItems} maxVisibleItems={2} showMoreText="More {count}" />);
        expect(container.querySelectorAll('[z-item]')).toHaveLength(2);
        fireEvent.click(getByRole('button', {name: 'More 4'}));

        rerender(<List items={firstItems} maxVisibleItems={0} showMoreText="More {count}" />);
        expect(container.querySelectorAll('[z-item]')).toHaveLength(6);
        rerender(<List items={firstItems} maxVisibleItems={2} showMoreText="More {count}" />);
        expect(container.querySelectorAll('[z-item]')).toHaveLength(2);

        rerender(<List items={secondItems} maxVisibleItems={2} showMoreText="More {count}" />);
        expect(container.querySelectorAll('[z-item]')).toHaveLength(2);
        expect(getByRole('button', {name: 'More 5'})).toBeInTheDocument();
        fireEvent.click(getByRole('button', {name: 'More 5'}));

        rerender(<List items={secondItems} maxVisibleItems={3} showMoreText="More {count}" />);
        expect(container.querySelectorAll('[z-item]')).toHaveLength(3);
        expect(getByRole('button', {name: 'More 4'})).toBeInTheDocument();
    });

    it('limits asynchronously loaded items and reapplies the limit to setItems replacements', async () => {
        let resolveItems!: (items: ReturnType<typeof makeItems>) => void;
        const items = vi.fn(() => new Promise<ReturnType<typeof makeItems>>((resolve) => {
            resolveItems = resolve;
        }));
        const ref = createRef<List>();
        const {container, getByRole, queryByRole} = render(<List ref={ref} items={items} maxVisibleItems={2} showMoreText="More {count}" />);
        expect(queryByRole('button')).not.toBeInTheDocument();
        await act(async () => {
            resolveItems(makeItems(5));
            await vi.advanceTimersByTimeAsync(0);
        });

        expect(items).toHaveBeenCalledTimes(1);
        expect(container.querySelectorAll('[z-item]')).toHaveLength(2);
        fireEvent.click(getByRole('button', {name: 'More 3'}));
        expect(container.querySelectorAll('[z-item]')).toHaveLength(4);

        act(() => {
            void ref.current!.setItems(makeItems(6, 'Replacement'));
        });

        expect(container.querySelectorAll('[z-item]')).toHaveLength(2);
        expect(getByRole('button', {name: 'More 4'})).toBeInTheDocument();
    });

    it('preserves queries, checked state and select-all for undisplayed data', () => {
        const ref = createRef<List>();
        const items = makeItems(5).map((item, index) => ({...item, checked: index === 4}));
        const {getByRole} = render(<List ref={ref} items={items} checkbox maxVisibleItems={2} showMoreText="More {count}" />);

        expect(ref.current!.getItem('4')).toBe(items[4]);
        expect(ref.current!.getItemIndex('4')).toBe(4);
        expect(ref.current!.getKey(4)).toBe('4');
        expect(ref.current!.getChecks()).toEqual(['4']);
        expect(ref.current!.isAllChecked()).toBe(false);
        expect(ref.current!.getNextItem('1')?.key).toBe('0');

        act(() => {
            void ref.current!.toggleAllChecked(true);
        });

        expect(ref.current!.getChecks()).toEqual(['0', '1', '2', '3', '4']);
        expect(ref.current!.isAllChecked()).toBe(true);
        expect(directItems(listElement(ref.current!))).toHaveLength(2);
        fireEvent.click(getByRole('button', {name: 'More 3'}));
        expect(listElement(ref.current!).querySelector('[z-item="3"] input')).toBeChecked();

        act(() => {
            void ref.current!.toggleAllChecked(false);
        });

        expect(ref.current!.getChecks()).toEqual([]);
        expect(ref.current!.isAllChecked()).toBe(false);
    });

    it('counts custom filtered items precisely while keeping their original DOM indices', () => {
        const ref = createRef<List>();
        const getItem = vi.fn((item: Item, index: number) => index % 2 ? false : item);
        const itemRender = vi.fn(() => undefined);
        const onClickItem = vi.fn();
        const {getByRole, getByText} = render(
            <List ref={ref} items={makeItems(10)} maxVisibleItems={2} getItem={getItem} itemRender={itemRender} onClickItem={onClickItem} showMoreText="More {count}" />,
        );

        expect(getItem).toHaveBeenCalledTimes(10);
        expect(itemRender).toHaveBeenCalledTimes(2);
        expect([...directItems(listElement(ref.current!))].map(item => item.getAttribute('z-item'))).toEqual(['0', '2']);
        expect(getByRole('button', {name: 'More 3'})).toBeInTheDocument();
        fireEvent.click(getByText('Item 2'));
        expect(onClickItem).toHaveBeenLastCalledWith(expect.objectContaining({key: '2', index: 2, item: expect.objectContaining({id: '2'})}));

        itemRender.mockClear();
        fireEvent.click(getByRole('button', {name: 'More 3'}));

        expect(itemRender).toHaveBeenCalledTimes(4);
        expect([...directItems(listElement(ref.current!))].map(item => item.getAttribute('z-item'))).toEqual(['0', '2', '4', '6']);
        expect(getByRole('button', {name: 'More 1'})).toBeInTheDocument();
    });

    it('skips raw hidden rows when counting a batch without losing complete data access', () => {
        const ref = createRef<List>();
        const items = makeItems(5).map((item, index) => ({...item, hidden: index === 0 || index === 3}));
        const {getByRole} = render(<List ref={ref} items={items} maxVisibleItems={1} showMoreText="More {count}" />);

        expect([...directItems(listElement(ref.current!))].map(item => item.getAttribute('z-item'))).toEqual(['1']);
        expect(getByRole('button', {name: 'More 2'})).toBeInTheDocument();
        expect(ref.current!.getItem('3')).toBe(items[3]);
        expect(ref.current!.getItem('4')).toBe(items[4]);
        expect(ref.current!.getNextItem('1')?.key).toBe('1');

        fireEvent.click(getByRole('button', {name: 'More 2'}));

        expect([...directItems(listElement(ref.current!))].map(item => item.getAttribute('z-item'))).toEqual(['1', '2']);
        expect(getByRole('button', {name: 'More 1'})).toBeInTheDocument();
        act(() => {
            void ref.current!.toggleAllChecked(true);
        });
        expect(ref.current!.getChecks()).toEqual(['0', '1', '2', '3', '4']);
    });

    it('respects explicit falsy hidden values over item defaults without preparing undisplayed rows', () => {
        const prepared = vi.fn();
        class HiddenDefaultsList extends List {
            protected _getItem(props: RenderableProps<ListProps>, item: Item, index: number) {
                prepared(index);
                return super._getItem(props, item, index);
            }
        }
        const items = makeItems(4);
        Object.assign(items[1], {hidden: undefined});
        Object.assign(items[2], {hidden: null});
        Object.assign(items[3], {hidden: false});
        const {container, getByRole, queryByRole} = render(
            <HiddenDefaultsList items={items} itemProps={{hidden: true}} maxVisibleItems={1} showMoreText="More {count}" />,
        );

        expect(prepared).toHaveBeenCalledExactlyOnceWith(1);
        expect([...container.querySelectorAll('[z-item]')].map(item => item.getAttribute('z-item'))).toEqual(['1']);
        fireEvent.click(getByRole('button', {name: 'More 2'}));
        expect([...container.querySelectorAll('[z-item]')].map(item => item.getAttribute('z-item'))).toEqual(['1', '2']);
        fireEvent.click(getByRole('button', {name: 'More 1'}));
        expect([...container.querySelectorAll('[z-item]')].map(item => item.getAttribute('z-item'))).toEqual(['1', '2', '3']);
        expect(queryByRole('button')).not.toBeInTheDocument();
    });

    it('keeps rewritten item keys and filtered gaps safe for queries and select-all', () => {
        const ref = createRef<List>();
        const items = makeItems(6).map((item, index) => ({...item, hidden: index === 0}));
        const getItem = (item: Item, index: number) => index === 1 ? false : {...item, key: `custom:${item.key}`};
        const {getByRole} = render(<List ref={ref} items={items} getItem={getItem} maxVisibleItems={1} showMoreText="More {count}" />);

        expect([...directItems(listElement(ref.current!))].map(item => item.getAttribute('z-item'))).toEqual(['2']);
        expect(getByRole('button', {name: 'More 3'})).toBeInTheDocument();
        expect(ref.current!.getItem('custom:5')).toBe(items[5]);
        expect(ref.current!.getItemIndex('custom:5')).toBe(5);
        expect(ref.current!.getKey(5)).toBe('custom:5');
        expect(ref.current!.getItem('custom:1')).toBeUndefined();
        expect(ref.current!.getRenderedItem('missing')).toBeUndefined();
        expect(ref.current!.getNextItem('custom:2')?.key).toBe('custom:2');

        act(() => {
            void ref.current!.toggleAllChecked(true);
        });

        expect(ref.current!.getChecks()).toEqual(['custom:0', 'custom:2', 'custom:3', 'custom:4', 'custom:5']);
        expect(ref.current!.isAllChecked()).toBe(true);
        fireEvent.click(getByRole('button', {name: 'More 3'}));
        expect([...directItems(listElement(ref.current!))].map(item => item.getAttribute('z-key'))).toEqual(['custom:2', 'custom:3']);
    });
});

describe('inherited List incremental display', () => {
    it('keeps List translations available when a subclass provides its own i18n keys', () => {
        class CustomI18nList extends List {
            static i18n = {en: {ownLabel: 'Custom label'}};
        }
        const ref = createRef<CustomI18nList>();
        const {getByRole} = render(<CustomI18nList ref={ref} items={makeItems(4)} maxVisibleItems={1} lang="en" />);

        expect(ref.current!.i18n('ownLabel')).toBe('Custom label');
        expect(getByRole('button', {name: '3 items remaining. Click to show more'})).toBeInTheDocument();
    });

    it('does not activate a parent when hovering the nested show-more prompt', () => {
        const ref = createRef<NestedList>();
        const onActive = vi.fn();
        const {getByText, getByRole} = render(
            <NestedList
                ref={ref}
                defaultNestedShow
                activeOnHover
                maxVisibleItems={1}
                showMoreText="More {count}"
                onActive={onActive}
                items={[{id: 'p', text: 'Parent', items: makeItems(3, 'Child')}]}
            />,
        );
        fireEvent.mouseOver(getByText('Child 0'), {relatedTarget: document.body});
        expect(ref.current!.getActiveKeys()).toEqual(['p:0']);
        onActive.mockClear();

        fireEvent.mouseOver(getByRole('button', {name: 'More 2'}), {relatedTarget: document.body});

        expect(ref.current!.getActiveKeys()).toEqual(['p:0']);
        expect(onActive).not.toHaveBeenCalled();
    });

    it('increments nested lists independently and excludes undisplayed branches from navigation', () => {
        const ref = createRef<NestedList>();
        const onClickItem = vi.fn();
        const onToggle = vi.fn();
        const {getByText, queryByText} = render(
            <NestedList
                ref={ref}
                defaultNestedShow
                maxVisibleItems={1}
                showMoreText="More {count}"
                onClickItem={onClickItem}
                onToggle={onToggle}
                items={[
                    {id: 'p:branch', text: 'Parent', items: makeItems(3, 'Child')},
                    {id: 'q:branch', text: 'Second', items: [{id: 'leaf', text: 'Unrendered descendant'}]},
                    {id: 'r', text: 'Third'},
                ]}
            />,
        );
        const root = listElement(ref.current!);
        const childList = getByText('Child 0').closest('[z-item]')!.parentElement!;
        expect(directItems(root)).toHaveLength(1);
        expect(directItems(childList)).toHaveLength(1);
        expect(queryByText('Unrendered descendant')).not.toBeInTheDocument();
        expect(ref.current!.getItem('q:branch:leaf')?.text).toBe('Unrendered descendant');
        expect(ref.current!.getNextItem('p:branch')?.key).toBe('p:branch:0');
        expect(ref.current!.getNextItem('p:branch:0')?.key).toBe('p:branch');

        fireEvent.click(within(childList).getByRole('button', {name: 'More 2'}));

        expect(directItems(root)).toHaveLength(1);
        expect(directItems(childList)).toHaveLength(2);
        expect(ref.current!.getNextItem('p:branch:0')?.key).toBe('p:branch:1');
        expect(ref.current!.getNextItem('p:branch:1')?.key).toBe('p:branch');
        expect(onClickItem).not.toHaveBeenCalled();
        expect(onToggle).not.toHaveBeenCalled();

        const rootButton = within(root).getAllByRole('button', {name: 'More 2'}).find(button => !childList.contains(button))!;
        fireEvent.click(rootButton);

        expect(directItems(root)).toHaveLength(2);
        expect(directItems(childList)).toHaveLength(2);
        expect(getByText('Unrendered descendant')).toBeInTheDocument();
        expect(onClickItem).not.toHaveBeenCalled();
        expect(onToggle).not.toHaveBeenCalled();
    });

    it('supports Nav and the non-ul CardList root', () => {
        const nav = createRef<Nav>();
        const cards = createRef<CardList>();
        render(
            <div>
                <Nav ref={nav} items={makeItems(3)} maxVisibleItems={1} showMoreText="More {count}" />
                <CardList ref={cards} items={makeItems(3)} maxVisibleItems={1} showMoreText="More {count}" />
            </div>,
        );

        expect(directItems(listElement(nav.current!))).toHaveLength(1);
        expect(listElement(cards.current!).tagName).toBe('DIV');
        expect(directItems(listElement(cards.current!))).toHaveLength(1);
        expect(listElement(cards.current!).querySelector('li')).toBeNull();

        fireEvent.click(within(listElement(cards.current!)).getByRole('button', {name: 'More 2'}));

        expect(directItems(listElement(cards.current!))).toHaveLength(2);
        expect(directItems(listElement(nav.current!))).toHaveLength(1);
    });

    it('keeps Tree parent-child checks complete while child and root batches are limited', () => {
        const ref = createRef<Tree>();
        const {getByText} = render(
            <Tree
                ref={ref}
                defaultNestedShow
                checkbox
                maxVisibleItems={1}
                showMoreText="More {count}"
                items={[
                    {id: 'p', text: 'Parent', items: makeItems(3, 'Child')},
                    {id: 'q', text: 'Other parent', items: [{id: 'leaf', text: 'Hidden leaf'}]},
                ]}
            />,
        );
        const root = listElement(ref.current!);
        const children = getByText('Child 0').closest('[z-item]')!.parentElement!;
        expect(directItems(root)).toHaveLength(1);
        expect(directItems(children)).toHaveLength(1);

        act(() => {
            void ref.current!.toggleChecked('p', true);
        });

        expect(ref.current!.getChecks()).toEqual(['p', 'p:0', 'p:1', 'p:2']);
        expect(ref.current!.isChecked('p:2')).toBe(true);
        expect(ref.current!.isAllChecked()).toBe(false);
        fireEvent.click(within(children).getByRole('button', {name: 'More 2'}));
        expect(children.querySelector('[z-item="1"] input')).toBeChecked();

        act(() => {
            void ref.current!.toggleAllChecked(true);
        });

        expect(ref.current!.getChecks()).toEqual(['p', 'p:0', 'p:1', 'p:2', 'q', 'q:leaf']);
        expect(ref.current!.isAllChecked()).toBe(true);
        expect(directItems(root)).toHaveLength(1);
        expect(directItems(children)).toHaveLength(2);
    });

    it('limits matching SearchMenu results without changing the existing result limit', () => {
        const ref = createRef<SearchMenu>();
        const items = makeItems(12).map((item, index) => ({...item, text: `${index % 2 ? 'Other' : 'Match'} ${index}`}));
        const itemRender = vi.fn(() => undefined);
        const {getByRole, queryByRole, rerender} = render(
            <SearchMenu ref={ref} items={items} search="Match" limit={5} maxVisibleItems={2} itemRender={itemRender} showMoreText="More {count}" />,
        );

        expect(directItems(listElement(ref.current!))).toHaveLength(2);
        expect(itemRender).toHaveBeenCalledTimes(2);
        expect(getByRole('button', {name: 'More 3'})).toBeInTheDocument();
        expect([...directItems(listElement(ref.current!))].map(item => item.getAttribute('z-item'))).toEqual(['0', '2']);

        fireEvent.click(getByRole('button', {name: 'More 3'}));
        expect(directItems(listElement(ref.current!))).toHaveLength(4);
        fireEvent.click(getByRole('button', {name: 'More 1'}));
        expect(directItems(listElement(ref.current!))).toHaveLength(5);
        expect(queryByRole('button')).not.toBeInTheDocument();
        expect(listElement(ref.current!).textContent).not.toContain('Match 10');

        rerender(<SearchMenu ref={ref} items={items} search="Other" limit={5} maxVisibleItems={2} itemRender={itemRender} showMoreText="More {count}" />);

        expect(directItems(listElement(ref.current!))).toHaveLength(2);
        expect([...directItems(listElement(ref.current!))].map(item => item.getAttribute('z-item'))).toEqual(['1', '3']);
        expect(getByRole('button', {name: 'More 3'})).toBeInTheDocument();
    });
});
