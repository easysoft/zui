import {act, fireEvent, render} from '@testing-library/preact';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {List, NestedList} from '@zui/list/react';
import {Menu, SearchMenu} from '@zui/menu/react';
import {Tree} from '@zui/tree/react';

import type {ComponentType} from 'preact';
import type {ListProps, NestedListProps} from '@zui/list';

const observers: MockIntersectionObserver[] = [];

class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null;

    readonly rootMargin: string;

    readonly thresholds: readonly number[];

    readonly observe = vi.fn<(target: Element) => void>();

    readonly unobserve = vi.fn<(target: Element) => void>();

    readonly disconnect = vi.fn<() => void>();

    readonly takeRecords = vi.fn<() => IntersectionObserverEntry[]>(() => []);

    constructor(private readonly callback: IntersectionObserverCallback, options: IntersectionObserverInit = {}) {
        this.root = options.root ?? null;
        this.rootMargin = options.rootMargin ?? '0px';
        this.thresholds = Array.isArray(options.threshold) ? options.threshold : [options.threshold ?? 0];
        observers.push(this);
    }

    emit(target: Element, isIntersecting: boolean) {
        this.callback([{target, isIntersecting, intersectionRatio: isIntersecting ? 1 : 0} as IntersectionObserverEntry], this);
    }
}

function makeItems(count: number, prefix = 'Item') {
    return Array.from({length: count}, (_, index) => ({id: String(index), text: `${prefix} ${index}`}));
}

function makeHierarchy(listProps?: Pick<ListProps, 'maxVisibleItems' | 'showMoreStep' | 'showMoreText' | 'autoShowMore'>) {
    return [
        {id: 'root-branch', text: 'Root branch', listProps, items: [
            {id: 'middle-branch', text: 'Middle branch', items: makeItems(8, 'Leaf')},
            ...makeItems(7, 'Middle row'),
        ]},
        ...makeItems(7, 'Root row'),
    ];
}

function nestedLists(container: Element) {
    return [0, 1, 2].map((level) => {
        const list = container.querySelector<HTMLElement>(`[z-level="${level}"]`);
        expect(list).not.toBeNull();
        return list!;
    });
}

function itemCounts(lists: HTMLElement[]) {
    return lists.map(list => list.querySelectorAll(':scope > [z-item]').length);
}

function showMoreButton(list: HTMLElement) {
    const button = list.querySelector<HTMLButtonElement>(':scope > .list-show-more button');
    expect(button).not.toBeNull();
    return button!;
}

function observerFor(target: Element) {
    const observer = observers.findLast(instance => instance.observe.mock.calls.some(([element]) => element === target));
    expect(observer).toBeDefined();
    return observer!;
}

function observeCount() {
    return observers.reduce((count, observer) => count + observer.observe.mock.calls.length, 0);
}

async function flushFrame() {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(0);
    });
}

beforeEach(() => {
    observers.length = 0;
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
    // jsdom has no layout; supply the rendered box paired with the mocked intersection entries.
    vi.spyOn(HTMLElement.prototype, 'getClientRects').mockReturnValue([new DOMRect(0, 0, 100, 20)] as unknown as DOMRectList);
});

describe('List automatic incremental display', () => {
    it('does not observe by default, when disabled or when no rows remain', () => {
        const items = makeItems(4);
        const {rerender} = render(<List items={items} maxVisibleItems={2} />);
        expect(observers).toHaveLength(0);

        rerender(<List items={items} maxVisibleItems={2} autoShowMore={false} />);
        expect(observers).toHaveLength(0);

        rerender(<List items={items} maxVisibleItems={4} autoShowMore />);
        expect(observers).toHaveLength(0);
    });

    it('coalesces visible notifications, observes the next batch and preserves outside focus', async () => {
        const {container, getByRole, queryByRole} = render(
            <div>
                <input aria-label="Current input" />
                <List items={makeItems(7)} maxVisibleItems={2} showMoreStep={3} autoShowMore showMoreText="More {count}" />
            </div>,
        );
        const input = getByRole('textbox', {name: 'Current input'});
        input.focus();
        const button = getByRole('button', {name: 'More 5'});
        const observer = observerFor(button);
        expect(observer.root).toBeNull();
        expect(observer.thresholds).toEqual([0.01]);

        observer.emit(button, false);
        await flushFrame();
        expect(container.querySelectorAll('[z-item]')).toHaveLength(2);

        observer.emit(button, true);
        observer.emit(button, true);
        observer.emit(button, true);
        expect(container.querySelectorAll('[z-item]')).toHaveLength(2);
        const initialObservations = observeCount();
        await flushFrame();

        expect(container.querySelectorAll('[z-item]')).toHaveLength(5);
        expect(input).toHaveFocus();
        expect(observeCount()).toBeGreaterThan(initialObservations);
        const nextButton = getByRole('button', {name: 'More 2'});
        const nextObserver = observerFor(nextButton);
        nextObserver.emit(nextButton, true);
        await flushFrame();

        expect(container.querySelectorAll('[z-item]')).toHaveLength(7);
        expect(queryByRole('button')).not.toBeInTheDocument();
        expect(nextObserver.disconnect).toHaveBeenCalled();
        expect(input).toHaveFocus();
        nextObserver.emit(nextButton, true);
        await flushFrame();
        expect(container.querySelectorAll('[z-item]')).toHaveLength(7);
    });

    it('cancels a pending batch when the prompt leaves the viewport', async () => {
        const {container, getByRole} = render(<List items={makeItems(7)} maxVisibleItems={2} autoShowMore showMoreText="More {count}" />);
        const button = getByRole('button', {name: 'More 5'});
        const observer = observerFor(button);

        observer.emit(button, true);
        observer.emit(button, false);
        await flushFrame();
        expect(container.querySelectorAll('[z-item]')).toHaveLength(2);

        observer.emit(button, true);
        await flushFrame();
        expect(container.querySelectorAll('[z-item]')).toHaveLength(4);
        expect(getByRole('button', {name: 'More 3'})).toBeInTheDocument();
    });

    it('does not append if the prompt becomes hidden before the queued frame runs', async () => {
        const {container, getByRole} = render(<List items={makeItems(7)} maxVisibleItems={2} autoShowMore showMoreText="More {count}" />);
        const button = getByRole('button', {name: 'More 5'});
        observerFor(button).emit(button, true);
        vi.spyOn(button, 'getClientRects').mockReturnValue([] as unknown as DOMRectList);

        await flushFrame();

        expect(container.querySelectorAll('[z-item]')).toHaveLength(2);
    });

    it('cancels queued work and ignores old callbacks after automatic display is disabled', async () => {
        const items = makeItems(7);
        const {container, getByRole, rerender} = render(<List items={items} maxVisibleItems={2} autoShowMore showMoreText="More {count}" />);
        const button = getByRole('button', {name: 'More 5'});
        const observer = observerFor(button);
        observer.emit(button, true);

        rerender(<List items={items} maxVisibleItems={2} autoShowMore={false} showMoreText="More {count}" />);
        expect(observer.disconnect).toHaveBeenCalled();
        observer.emit(button, true);
        await flushFrame();
        expect(container.querySelectorAll('[z-item]')).toHaveLength(2);

        fireEvent.click(getByRole('button', {name: 'More 5'}));
        expect(container.querySelectorAll('[z-item]')).toHaveLength(4);
    });

    it('invalidates the old observer and pending frame when the source changes', async () => {
        const firstItems = makeItems(7);
        const secondItems = makeItems(8, 'Replacement');
        const {container, getByRole, getByText, rerender} = render(<List items={firstItems} maxVisibleItems={2} autoShowMore showMoreText="More {count}" />);
        const oldButton = getByRole('button', {name: 'More 5'});
        const oldObserver = observerFor(oldButton);
        oldObserver.emit(oldButton, true);

        rerender(<List items={secondItems} maxVisibleItems={2} autoShowMore showMoreText="More {count}" />);
        expect(oldObserver.disconnect).toHaveBeenCalled();
        oldObserver.emit(oldButton, true);
        await flushFrame();
        expect(container.querySelectorAll('[z-item]')).toHaveLength(2);
        expect(getByText('Replacement 0')).toBeInTheDocument();

        const nextButton = getByRole('button', {name: 'More 6'});
        observerFor(nextButton).emit(nextButton, true);
        await flushFrame();
        expect(container.querySelectorAll('[z-item]')).toHaveLength(4);
    });

    it('disconnects and cancels queued work on unmount', async () => {
        const itemRender = vi.fn(() => undefined);
        const {getByRole, unmount} = render(<List items={makeItems(7)} itemRender={itemRender} maxVisibleItems={2} autoShowMore showMoreText="More {count}" />);
        const button = getByRole('button', {name: 'More 5'});
        const observer = observerFor(button);
        const scheduleFrame = vi.spyOn(globalThis, 'requestAnimationFrame');
        const cancelFrame = vi.spyOn(globalThis, 'cancelAnimationFrame');
        observer.emit(button, true);
        const frame = scheduleFrame.mock.results.at(-1)?.value;
        expect(frame).toBeDefined();

        unmount();
        expect(observer.disconnect).toHaveBeenCalled();
        expect(cancelFrame).toHaveBeenCalledWith(frame);
        scheduleFrame.mockClear();
        itemRender.mockClear();
        observer.emit(button, true);
        await flushFrame();
        expect(itemRender).not.toHaveBeenCalled();
        expect(scheduleFrame).not.toHaveBeenCalled();
    });

    it('keeps manual display available when IntersectionObserver is unavailable', () => {
        vi.stubGlobal('IntersectionObserver', undefined);
        const {container, getByRole} = render(<List items={makeItems(7)} maxVisibleItems={2} showMoreStep={3} autoShowMore showMoreText="More {count}" />);

        expect(observers).toHaveLength(0);
        fireEvent.click(getByRole('button', {name: 'More 5'}));
        expect(container.querySelectorAll('[z-item]')).toHaveLength(5);
        expect(getByRole('button', {name: 'More 2'})).toBeInTheDocument();
    });
});

const nestedComponents: [string, ComponentType<NestedListProps>][] = [
    ['NestedList', NestedList],
    ['Tree', Tree],
    ['Menu', Menu],
    ['SearchMenu', SearchMenu],
];

describe.each(nestedComponents)('%s recursive incremental display', (_name, NestedComponent) => {
    it('inherits all four display options through three levels and advances each level independently', async () => {
        const {container} = render(
            <NestedComponent items={makeHierarchy()} defaultNestedShow maxVisibleItems={2} showMoreStep={3} showMoreText="Unseen {count}" autoShowMore />,
        );
        expect(itemCounts(nestedLists(container))).toEqual([2, 2, 2]);
        nestedLists(container).forEach((list) => {
            const button = showMoreButton(list);
            expect(button).toHaveTextContent('Unseen 6');
            observerFor(button);
        });

        const expectedCounts = [2, 2, 2];
        for (const level of [2, 1, 0]) {
            const button = showMoreButton(nestedLists(container)[level]);
            observerFor(button).emit(button, true);
            await flushFrame();

            expectedCounts[level] += 3;
            const lists = nestedLists(container);
            expect(itemCounts(lists)).toEqual(expectedCounts);
            lists.forEach((list, index) => {
                expect(showMoreButton(list)).toHaveTextContent(`Unseen ${8 - expectedCounts[index]}`);
            });
        }
    });

    it('passes a middle-list override of all four options down to its descendants', async () => {
        const items = makeHierarchy({maxVisibleItems: 1, showMoreStep: 2, showMoreText: 'Branch {count}', autoShowMore: false});
        const {container} = render(
            <NestedComponent items={items} defaultNestedShow maxVisibleItems={2} showMoreStep={3} showMoreText="Root {count}" autoShowMore />,
        );
        const lists = nestedLists(container);
        expect(itemCounts(lists)).toEqual([2, 1, 1]);
        expect(showMoreButton(lists[0])).toHaveTextContent('Root 6');
        observerFor(showMoreButton(lists[0]));
        for (const list of lists.slice(1)) {
            const button = showMoreButton(list);
            expect(button).toHaveTextContent('Branch 7');
            expect(observers.some(observer => observer.observe.mock.calls.some(([target]) => target === button))).toBe(false);
        }

        fireEvent.click(showMoreButton(lists[2]));
        expect(itemCounts(nestedLists(container))).toEqual([2, 1, 3]);
        expect(showMoreButton(nestedLists(container)[2])).toHaveTextContent('Branch 5');
        fireEvent.click(showMoreButton(nestedLists(container)[1]));
        expect(itemCounts(nestedLists(container))).toEqual([2, 3, 3]);
        expect(showMoreButton(nestedLists(container)[1])).toHaveTextContent('Branch 5');

        const rootButton = showMoreButton(nestedLists(container)[0]);
        observerFor(rootButton).emit(rootButton, true);
        await flushFrame();
        expect(itemCounts(nestedLists(container))).toEqual([5, 3, 3]);
    });

    it('uses updated parent options when collapsed levels open and when mounted descendants update', async () => {
        const items = makeHierarchy();
        const {container, getByText, rerender} = render(
            <NestedComponent items={items} defaultNestedShow={false} maxVisibleItems={2} showMoreStep={3} showMoreText="Old {count}" autoShowMore />,
        );
        expect(container.querySelector('[z-level="1"]')).toBeNull();

        rerender(<NestedComponent items={items} defaultNestedShow={false} maxVisibleItems={3} showMoreStep={1} showMoreText="Updated {count}" autoShowMore={false} />);
        expect(container.querySelector('[z-level="1"]')).toBeNull();
        const initialObservations = observeCount();
        fireEvent.click(getByText('Root branch').closest('[z-item]')!.querySelector('.nested-toggle-icon')!);
        expect(container.querySelector('[z-level="2"]')).toBeNull();
        fireEvent.click(getByText('Middle branch').closest('[z-item]')!.querySelector('.nested-toggle-icon')!);

        let lists = nestedLists(container);
        expect(itemCounts(lists)).toEqual([3, 3, 3]);
        expect(observeCount()).toBe(initialObservations);
        lists.forEach(list => expect(showMoreButton(list)).toHaveTextContent('Updated 5'));
        fireEvent.click(showMoreButton(lists[2]));
        expect(itemCounts(nestedLists(container))).toEqual([3, 3, 4]);

        rerender(<NestedComponent items={items} defaultNestedShow={false} maxVisibleItems={3} showMoreStep={2} showMoreText="Current {count}" autoShowMore />);
        lists = nestedLists(container);
        expect(itemCounts(lists)).toEqual([3, 3, 4]);
        lists.forEach((list, index) => {
            expect(showMoreButton(list)).toHaveTextContent(`Current ${index === 2 ? 4 : 5}`);
            observerFor(showMoreButton(list));
        });
        const deepestButton = showMoreButton(lists[2]);
        observerFor(deepestButton).emit(deepestButton, true);
        await flushFrame();
        expect(itemCounts(nestedLists(container))).toEqual([3, 3, 6]);
    });
});
