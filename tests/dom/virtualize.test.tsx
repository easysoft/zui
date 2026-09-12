import {act, render, within} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {Component} from '@zui/core/src/component/component';
import {VirtualList as VirtualListNative} from '@zui/virtualize';
import {VirtualList} from '@zui/virtualize/react';
import {flushAnimationFrame} from '../setup/dom';

import type {Rect, VirtualItem, VirtualizerOptions} from '@tanstack/virtual-core';

type Observers = Pick<VirtualizerOptions<HTMLElement, HTMLElement>, 'initialRect' | 'observeElementRect' | 'observeElementOffset' | 'scrollToFn'>;

function createViewport(rect: Rect = {width: 320, height: 120}) {
    let notifyOffset: ((offset: number, isScrolling: boolean) => void) | undefined;
    let offset = 0;
    const disconnectRect = vi.fn();
    const disconnectOffset = vi.fn();
    const options: Observers = {
        initialRect: rect,
        observeElementRect: (_instance, callback) => {
            callback(rect);
            return disconnectRect;
        },
        observeElementOffset: (_instance, callback) => {
            notifyOffset = callback;
            callback(offset, false);
            return () => {
                notifyOffset = undefined;
                disconnectOffset();
            };
        },
        scrollToFn: (nextOffset, {adjustments = 0}) => {
            offset = nextOffset + adjustments;
            notifyOffset?.(offset, false);
        },
    };

    return {
        options,
        disconnectRect,
        disconnectOffset,
        scrollTo(nextOffset: number) {
            offset = nextOffset;
            notifyOffset?.(offset, true);
        },
    };
}

const estimateSize = () => 30;
const renderItem = (item: VirtualItem) => <span>{`Row ${item.index}`}</span>;

describe('VirtualList', () => {
    it('renders a bounded range from 10,000 items and updates it when the viewport scrolls', () => {
        const viewport = createViewport();
        const ref = createRef<VirtualList>();
        const view = render(<VirtualList ref={ref} {...viewport.options} count={10_000} estimateSize={estimateSize} renderItem={renderItem} overscan={2} height={120} />);
        const list = view.getByRole('list');
        const initialRows = within(list).getAllByRole('listitem');
        const core = ref.current!.virtualizer;

        expect(initialRows.length).toBeGreaterThan(0);
        expect(initialRows.length).toBeLessThan(20);
        expect(list.querySelector<HTMLElement>('.virtual-list-content')!.style.height).toBe('300000px');
        expect(within(list).getByText('Row 0')).toBeInTheDocument();
        expect(within(list).queryByText('Row 500')).not.toBeInTheDocument();

        act(() => viewport.scrollTo(15_000));

        expect(ref.current!.virtualizer).toBe(core);
        expect(within(list).getByText('Row 500')).toBeInTheDocument();
        expect(within(list).queryByText('Row 0')).not.toBeInTheDocument();
        expect(within(list).getAllByRole('listitem').length).toBeLessThan(20);
    });

    it('refreshes the total size when count changes without changing the visible range', () => {
        const viewport = createViewport();
        const ref = createRef<VirtualList>();
        const view = render(<VirtualList ref={ref} {...viewport.options} count={100} estimateSize={estimateSize} renderItem={renderItem} overscan={0} />);
        const core = ref.current!.virtualizer;
        const firstIndices = view.getAllByRole('listitem').map(item => item.getAttribute('data-index'));

        view.rerender(<VirtualList ref={ref} {...viewport.options} count={200} estimateSize={estimateSize} renderItem={renderItem} overscan={0} />);

        expect(ref.current!.virtualizer).toBe(core);
        expect(view.getAllByRole('listitem').map(item => item.getAttribute('data-index'))).toEqual(firstIndices);
        expect(view.container.querySelector<HTMLElement>('.virtual-list-content')!.style.height).toBe('6000px');
    });

    it('renders an empty list and recovers when items are supplied again', () => {
        const viewport = createViewport();
        const view = render(<VirtualList {...viewport.options} count={0} estimateSize={estimateSize} renderItem={renderItem} />);

        expect(view.getByRole('list')).toBeInTheDocument();
        expect(view.queryAllByRole('listitem')).toHaveLength(0);
        expect(view.container.querySelector<HTMLElement>('.virtual-list-content')!.style.height).toBe('0px');

        view.rerender(<VirtualList {...viewport.options} count={3} estimateSize={estimateSize} renderItem={renderItem} />);
        expect(view.getAllByRole('listitem')).toHaveLength(3);

        view.rerender(<VirtualList {...viewport.options} count={0} estimateSize={estimateSize} renderItem={renderItem} />);
        expect(view.queryAllByRole('listitem')).toHaveLength(0);
        expect(view.container.querySelector<HTMLElement>('.virtual-list-content')!.style.height).toBe('0px');
    });

    it('uses horizontal item sizes and scroll offsets', () => {
        const viewport = createViewport({width: 180, height: 80});
        const ref = createRef<VirtualList>();
        const view = render(<VirtualList ref={ref} {...viewport.options} count={100} estimateSize={() => 60} renderItem={renderItem} horizontal overscan={0} width={180} height={80} />);
        const list = view.getByRole('list');

        expect(list.style.width).toBe('180px');
        expect(list.style.height).toBe('80px');
        expect(list.querySelector<HTMLElement>('.virtual-list-content')!.style.width).toBe('6000px');
        expect(view.getAllByRole('listitem')[0].style.width).toBe('60px');

        act(() => viewport.scrollTo(600));

        expect(view.getByText('Row 10')).toBeInTheDocument();
        expect(view.queryByText('Row 0')).not.toBeInTheDocument();
        expect(ref.current!.virtualizer.getVirtualItems()[0].start).toBe(600);
    });

    it('measures dynamic rows through core and leaves their height unconstrained', () => {
        const viewport = createViewport();
        const ref = createRef<VirtualList>();
        const measureElement = vi.fn((element: HTMLElement) => Number(element.firstElementChild?.getAttribute('data-height')));
        const view = render(
            <VirtualList
                ref={ref}
                {...viewport.options}
                count={10}
                estimateSize={estimateSize}
                renderItem={item => <span data-height={item.index === 0 ? 70 : 30}>{`Dynamic ${item.index}`}</span>}
                measureElement={measureElement}
                dynamic
            />,
        );
        const items = ref.current!.virtualizer.getVirtualItems();

        expect(measureElement).toHaveBeenCalled();
        expect(items[0].size).toBe(70);
        expect(items[1].start).toBe(70);
        expect(ref.current!.virtualizer.getTotalSize()).toBe(340);
        expect(view.getAllByRole('listitem')[0].style.height).toBe('');
        expect(view.container.querySelector<HTMLElement>('.virtual-list-content')!.style.height).toBe('340px');
    });

    it('releases measured item elements when switching from dynamic to fixed sizing', () => {
        const observed = new Set<Element>();
        const unobserve = vi.fn((element: Element) => observed.delete(element));
        vi.stubGlobal('ResizeObserver', class {
            observe(element: Element) {
                observed.add(element);
            }

            unobserve = unobserve;

            disconnect() {
                observed.clear();
            }
        });
        const viewport = createViewport();
        const ref = createRef<VirtualList>();
        const measureElement = vi.fn(() => 45);
        const props = {...viewport.options, count: 100, estimateSize, renderItem, measureElement};
        const view = render(<VirtualList ref={ref} {...props} dynamic />);
        const core = ref.current!.virtualizer;
        const measuredRows = [...core.elementsCache.values()];

        expect(measuredRows.length).toBeGreaterThan(0);
        expect(observed.size).toBe(measuredRows.length);
        measureElement.mockClear();

        view.rerender(<VirtualList ref={ref} {...props} dynamic={false} />);

        expect(ref.current!.virtualizer).toBe(core);
        expect(core.elementsCache.size).toBe(0);
        expect(observed.size).toBe(0);
        for (const element of measuredRows) {
            expect(element.isConnected).toBe(false);
            expect(unobserve).toHaveBeenCalledWith(element);
        }
        expect(measureElement).not.toHaveBeenCalled();
        expect(core.getTotalSize()).toBe(3000);
        expect(view.getAllByRole('listitem')[0].style.height).toBe('30px');
    });

    it('recalculates fixed row sizes when the estimate function changes at the same count', () => {
        const viewport = createViewport();
        const ref = createRef<VirtualList>();
        const view = render(<VirtualList ref={ref} {...viewport.options} count={100} estimateSize={estimateSize} renderItem={renderItem} />);
        const core = ref.current!.virtualizer;

        view.rerender(<VirtualList ref={ref} {...viewport.options} count={100} estimateSize={() => 60} renderItem={renderItem} />);

        expect(ref.current!.virtualizer).toBe(core);
        expect(core.getTotalSize()).toBe(6000);
        expect(view.container.querySelector<HTMLElement>('.virtual-list-content')!.style.height).toBe('6000px');
        expect(view.getAllByRole('listitem')[0].style.height).toBe('60px');
        expect(core.getVirtualItems()[1].start).toBe(60);
    });

    it('remeasures dynamic items on the new axis when horizontal changes', () => {
        const viewport = createViewport();
        const ref = createRef<VirtualList>();
        const measureElement: NonNullable<VirtualizerOptions<HTMLElement, HTMLElement>['measureElement']> = (_element, _entry, core) => core.options.horizontal ? 80 : 30;
        const props = {...viewport.options, count: 3, estimateSize, renderItem, measureElement, dynamic: true};
        const view = render(<VirtualList ref={ref} {...props} />);
        const core = ref.current!.virtualizer;

        expect(core.getTotalSize()).toBe(90);

        view.rerender(<VirtualList ref={ref} {...props} horizontal />);

        expect(ref.current!.virtualizer).toBe(core);
        expect(core.getVirtualItems().map(item => item.size)).toEqual([80, 80, 80]);
        expect(core.getTotalSize()).toBe(240);
        expect(view.container.querySelector<HTMLElement>('.virtual-list-content')!.style.width).toBe('240px');
        expect(view.getAllByRole('listitem')[0].style.height).toBe('100%');
    });

    it('moves the scroll element between changed forward refs and clears removed refs', () => {
        const viewport = createViewport();
        const firstRef = createRef<HTMLElement>();
        const secondRef = createRef<HTMLElement>();
        const props = {...viewport.options, count: 3, estimateSize, renderItem};
        const view = render(<VirtualList {...props} forwardRef={firstRef} />);
        const element = view.getByRole('list');

        expect(firstRef.current).toBe(element);

        view.rerender(<VirtualList {...props} forwardRef={secondRef} />);

        expect(firstRef.current).toBeNull();
        expect(secondRef.current).toBe(element);

        view.rerender(<VirtualList {...props} />);

        expect(secondRef.current).toBeNull();
        expect(view.getByRole('list')).toBe(element);
    });

    it('keeps keyed row DOM with its data when records are reordered and replaced', () => {
        const viewport = createViewport();
        const records = [{id: 'a', title: 'Alpha'}, {id: 'b', title: 'Beta'}];
        const props = (items: typeof records) => ({
            ...viewport.options,
            count: items.length,
            estimateSize,
            getItemKey: (index: number) => items[index].id,
            renderItem: (item: VirtualItem) => <span>{items[item.index].title}</span>,
        });
        const view = render(<VirtualList {...props(records)} />);
        const betaRow = view.getByText('Beta').closest('.virtual-list-item');

        view.rerender(<VirtualList {...props([{id: 'b', title: 'Beta updated'}, {id: 'a', title: 'Alpha updated'}])} />);

        expect(view.getByText('Beta updated').closest('.virtual-list-item')).toBe(betaRow);
        expect(betaRow).toHaveAttribute('data-index', '0');
        expect(view.queryByText('Beta')).not.toBeInTheDocument();
        expect(view.getByText('Alpha updated').closest('.virtual-list-item')).toHaveAttribute('data-index', '1');
    });

    it('uses core lanes, gaps and padding to position rows', () => {
        const viewport = createViewport();
        const ref = createRef<VirtualList>();
        render(<VirtualList ref={ref} {...viewport.options} count={6} estimateSize={estimateSize} renderItem={renderItem} lanes={2} gap={8} paddingStart={10} paddingEnd={20} />);
        const core = ref.current!.virtualizer;
        const items = core.getVirtualItems();

        expect(items[0]).toMatchObject({lane: 0, start: 10});
        expect(items[1]).toMatchObject({lane: 1, start: 10});
        expect(items[2].start).toBe(48);
        expect(core.getTotalSize()).toBe(136);
    });

    it('disconnects core observers when the Preact view unmounts', () => {
        const viewport = createViewport();
        const onChange = vi.fn();
        const view = render(<VirtualList {...viewport.options} count={100} estimateSize={estimateSize} renderItem={renderItem} onChange={onChange} />);

        view.unmount();

        expect(viewport.disconnectRect).toHaveBeenCalledOnce();
        expect(viewport.disconnectOffset).toHaveBeenCalledOnce();
        onChange.mockClear();
        act(() => viewport.scrollTo(600));
        expect(onChange).not.toHaveBeenCalled();
    });

    it('supports vanilla initialization, scrolling, rerendering and idempotent destruction', async () => {
        const viewport = createViewport();
        const host = document.createElement('div');
        document.body.appendChild(host);
        const list = new VirtualListNative(host, {...viewport.options, count: 100, estimateSize, renderItem});

        expect(list.virtualizer).toBeUndefined();
        await act(() => flushAnimationFrame());

        const core = list.virtualizer!;
        const scrollElement = within(host).getByRole('list');
        Object.defineProperties(scrollElement, {
            scrollHeight: {configurable: true, get: () => core.getTotalSize()},
            clientHeight: {configurable: true, value: 120},
        });
        expect(VirtualListNative.get(host)).toBe(list);
        expect(Component.ALL.get(host)?.has(list)).toBe(true);
        expect(within(host).getByText('Row 0')).toBeInTheDocument();

        act(() => list.scrollToIndex(42, {align: 'start'}));
        expect(within(host).getByText('Row 42')).toBeInTheDocument();
        act(() => list.scrollToOffset(0));
        expect(within(host).getByText('Row 0')).toBeInTheDocument();

        act(() => list.render({count: 200}));
        expect(list.virtualizer).toBe(core);
        expect(core.getTotalSize()).toBe(6000);
        act(() => list.measure());

        list.destroy();
        list.destroy();

        expect(list.virtualizer).toBeUndefined();
        expect(within(host).queryByRole('list')).not.toBeInTheDocument();
        expect(Component.ALL.get(host)).toBeUndefined();
        expect(VirtualListNative.get(host)).toBeUndefined();
        expect(viewport.disconnectRect).toHaveBeenCalledOnce();
        expect(viewport.disconnectOffset).toHaveBeenCalledOnce();
    });
});
