import {afterEach, describe, expect, it, vi} from 'vitest';
import {elementScroll, observeElementOffset, observeElementRect, observeWindowOffset, observeWindowRect, windowScroll} from '@tanstack/virtual-core';
import {createVirtualizer, createWindowVirtualizer} from '@zui/virtualize/virtualizer';

const controllers: {destroy: () => void}[] = [];

function createScrollElement() {
    const element = document.createElement('div');
    Object.defineProperties(element, {
        offsetWidth: {value: 200},
        offsetHeight: {value: 100},
        clientWidth: {value: 200},
        clientHeight: {value: 100},
        scrollHeight: {value: 2000},
        scrollWidth: {value: 2000},
        scrollTo: {
            value: vi.fn((options: ScrollToOptions) => {
                element.scrollTop = options.top ?? element.scrollTop;
                element.scrollLeft = options.left ?? element.scrollLeft;
            }),
        },
    });
    document.body.append(element);
    return element;
}

afterEach(() => {
    controllers.splice(0).forEach(controller => controller.destroy());
});

describe('virtualizer controllers', () => {
    it('defers observation until mount and computes the viewport range after scrolling', () => {
        const element = createScrollElement();
        const getScrollElement = vi.fn(() => element);
        const onChange = vi.fn();
        const controller = createVirtualizer({count: 100, estimateSize: () => 20, getScrollElement, onChange});
        controllers.push(controller);

        controller.update();
        expect(getScrollElement).not.toHaveBeenCalled();
        expect(controller.instance.scrollElement).toBeNull();
        expect(controller.instance.options.observeElementRect).toBe(observeElementRect);
        expect(controller.instance.options.observeElementOffset).toBe(observeElementOffset);
        expect(controller.instance.options.scrollToFn).toBe(elementScroll);

        controller.mount();
        controller.mount();
        expect(getScrollElement).toHaveBeenCalledTimes(1);
        expect(controller.instance.getTotalSize()).toBe(2000);
        expect(controller.instance.getVirtualItems().map(item => item.index)).toEqual([0, 1, 2, 3, 4, 5]);

        element.scrollTop = 400;
        element.dispatchEvent(new Event('scroll'));

        expect(controller.instance.getVirtualItems().map(item => item.index)).toEqual([19, 20, 21, 22, 23, 24, 25]);
        expect(onChange).toHaveBeenLastCalledWith(controller.instance, true);
    });

    it('replaces options and callbacks without losing the factory defaults', () => {
        const element = createScrollElement();
        const options = {count: 100, estimateSize: () => 20, getScrollElement: () => element};
        const firstChange = vi.fn();
        const secondChange = vi.fn();
        const customScroll = vi.fn();
        const controller = createVirtualizer({...options, onChange: firstChange, overscan: 7, scrollToFn: customScroll});
        controllers.push(controller);
        controller.mount();
        firstChange.mockClear();

        controller.setOptions({...options, count: 20, onChange: secondChange, scrollToFn: undefined});
        expect(controller.instance.options.count).toBe(20);
        expect(controller.instance.options.overscan).toBe(1);
        expect(controller.instance.options.scrollToFn).toBe(elementScroll);
        expect(secondChange).not.toHaveBeenCalled();

        controller.update();
        element.scrollTop = 100;
        element.dispatchEvent(new Event('scroll'));
        expect(secondChange).toHaveBeenCalledTimes(1);
        expect(firstChange).not.toHaveBeenCalled();

        controller.setOptions({...controller.instance.options, count: 30});
        controller.instance.options.onChange(controller.instance, false);
        expect(secondChange).toHaveBeenCalledTimes(2);
        expect(secondChange).toHaveBeenLastCalledWith(controller.instance, false);

        controller.setOptions(options);
        controller.update();
        element.scrollTop = 200;
        element.dispatchEvent(new Event('scroll'));
        expect(secondChange).toHaveBeenCalledTimes(2);
    });

    it('translates logical RTL offsets and adjustments to negative scrollLeft values', () => {
        const element = createScrollElement();
        const options = {
            count: 100,
            estimateSize: () => 20,
            getScrollElement: () => element,
            horizontal: true,
            isRtl: true,
        };
        const controller = createVirtualizer(options);
        controllers.push(controller);
        controller.mount();

        controller.instance.scrollToOffset(400, {behavior: 'instant'});
        expect(element.scrollTo).toHaveBeenLastCalledWith({left: -400, behavior: 'instant'});
        element.dispatchEvent(new Event('scroll'));
        expect(controller.instance.scrollOffset).toBe(400);

        controller.instance.options.scrollToFn(400, {adjustments: 25, behavior: 'auto'}, controller.instance);
        expect(element.scrollTo).toHaveBeenLastCalledWith({left: -425, behavior: 'auto'});

        const customScroll = vi.fn();
        controller.setOptions({...options, scrollToFn: customScroll});
        controller.instance.options.scrollToFn(600, {adjustments: 10}, controller.instance);
        expect(customScroll).toHaveBeenCalledWith(600, {adjustments: 10}, controller.instance);

        controller.setOptions({...options, isRtl: false});
        expect(controller.instance.options.scrollToFn).toBe(elementScroll);
    });

    it('switches containers only after update and detaches the previous listeners', () => {
        const first = createScrollElement();
        const second = createScrollElement();
        const onChange = vi.fn();
        const removeListener = vi.spyOn(first, 'removeEventListener');
        const options = {count: 100, estimateSize: () => 20, onChange};
        const controller = createVirtualizer({...options, getScrollElement: () => first});
        controllers.push(controller);
        controller.mount();

        controller.setOptions({...options, getScrollElement: () => second});
        expect(controller.instance.scrollElement).toBe(first);
        controller.update();
        expect(controller.instance.scrollElement).toBe(second);
        expect(removeListener).toHaveBeenCalledWith('scroll', expect.any(Function));
        onChange.mockClear();

        first.scrollTop = 500;
        first.dispatchEvent(new Event('scroll'));
        expect(onChange).not.toHaveBeenCalled();

        second.scrollTop = 600;
        second.dispatchEvent(new Event('scroll'));
        expect(controller.instance.scrollOffset).toBe(600);
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('can disable and re-enable observation after committed option updates', () => {
        const element = createScrollElement();
        const onChange = vi.fn();
        const options = {count: 100, estimateSize: () => 20, getScrollElement: () => element, onChange};
        const controller = createVirtualizer(options);
        controllers.push(controller);
        controller.mount();

        controller.setOptions({...options, enabled: false});
        controller.update();
        expect(controller.instance.scrollElement).toBeNull();
        expect(controller.instance.getVirtualItems()).toEqual([]);
        onChange.mockClear();
        element.scrollTop = 500;
        element.dispatchEvent(new Event('scroll'));
        expect(onChange).not.toHaveBeenCalled();

        controller.setOptions(options);
        controller.update();
        expect(controller.instance.scrollElement).toBe(element);
        expect(controller.instance.getVirtualItems()).not.toHaveLength(0);
    });

    it('releases observers, DOM references and pending callbacks permanently on destroy', async () => {
        const observe = vi.fn();
        const unobserve = vi.fn();
        const disconnect = vi.fn();
        vi.stubGlobal('ResizeObserver', class {
            observe = observe;

            unobserve = unobserve;

            disconnect = disconnect;
        });
        const element = createScrollElement();
        const item = document.createElement('div');
        item.setAttribute('data-index', '0');
        element.append(item);
        const onChange = vi.fn();
        const options = {count: 100, estimateSize: () => 20, getScrollElement: () => element, onChange};
        const controller = createVirtualizer(options);
        controllers.push(controller);
        controller.mount();
        controller.instance.measureElement(item);
        expect(observe).toHaveBeenCalledWith(item, {box: 'border-box'});

        element.scrollTop = 200;
        element.dispatchEvent(new Event('scroll'));
        onChange.mockClear();
        controller.destroy();
        controller.destroy();
        controller.mount();
        controller.update();
        controller.setOptions({...options, count: 5});
        await vi.advanceTimersByTimeAsync(200);
        element.dispatchEvent(new Event('scroll'));

        expect(unobserve).toHaveBeenCalledWith(element);
        expect(disconnect).toHaveBeenCalledTimes(1);
        expect(controller.instance.elementsCache.size).toBe(0);
        expect(controller.instance.scrollElement).toBeNull();
        expect(controller.instance.options.count).toBe(100);
        expect(onChange).not.toHaveBeenCalled();
    });

    it('supports window scrolling and restores the window defaults on replacement', () => {
        vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
        vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(100);
        vi.spyOn(window, 'scrollY', 'get').mockReturnValue(400);
        const onChange = vi.fn();
        const options = {count: 100, estimateSize: () => 20, onChange};
        const controller = createWindowVirtualizer(options);
        controllers.push(controller);

        controller.mount();
        expect(controller.instance.scrollElement).toBe(window);
        expect(controller.instance.scrollOffset).toBe(400);
        expect(controller.instance.getVirtualItems().map(item => item.index)).toEqual([19, 20, 21, 22, 23, 24, 25]);
        expect(controller.instance.options.observeElementRect).toBe(observeWindowRect);
        expect(controller.instance.options.observeElementOffset).toBe(observeWindowOffset);
        expect(controller.instance.options.scrollToFn).toBe(windowScroll);

        controller.setOptions({...options, getScrollElement: undefined, initialOffset: undefined});
        controller.update();
        expect(controller.instance.scrollElement).toBe(window);
        onChange.mockClear();
        vi.spyOn(window, 'scrollY', 'get').mockReturnValue(600);
        window.dispatchEvent(new Event('scroll'));
        expect(controller.instance.scrollOffset).toBe(600);
        expect(onChange).toHaveBeenCalledTimes(1);

        controller.destroy();
        onChange.mockClear();
        window.dispatchEvent(new Event('resize'));
        window.dispatchEvent(new Event('scroll'));
        expect(onChange).not.toHaveBeenCalled();
    });

    it('suppresses observer animation-frame callbacks that were queued before destruction', async () => {
        const observers: ResizeObserverCallback[] = [];
        vi.stubGlobal('ResizeObserver', class {
            constructor(callback: ResizeObserverCallback) {
                observers.push(callback);
            }

            observe = vi.fn();

            unobserve = vi.fn();

            disconnect = vi.fn();
        });
        const element = createScrollElement();
        const onChange = vi.fn();
        const controller = createVirtualizer({
            count: 100,
            estimateSize: () => 20,
            getScrollElement: () => element,
            useAnimationFrameWithResizeObserver: true,
            onChange,
        });
        controllers.push(controller);
        controller.mount();
        const entry = {target: element, borderBoxSize: [{inlineSize: 200, blockSize: 300}]} as unknown as ResizeObserverEntry;
        observers[0]([entry], {} as ResizeObserver);

        controller.destroy();
        onChange.mockClear();
        await vi.advanceTimersByTimeAsync(0);

        expect(onChange).not.toHaveBeenCalled();
        expect(controller.instance.scrollElement).toBeNull();
    });

    it('reads the horizontal initial offset from a supplied window', () => {
        const alternateWindow = {scrollX: 120, scrollY: 400} as Window;
        const controller = createWindowVirtualizer({
            count: 100,
            estimateSize: () => 20,
            horizontal: true,
            initialRect: {width: 100, height: 100},
            getScrollElement: () => alternateWindow,
        });
        controllers.push(controller);

        expect(controller.instance.getVirtualItems().map(item => item.index)).toEqual([5, 6, 7, 8, 9, 10, 11]);
        expect(controller.instance.scrollOffset).toBe(120);
    });

    it('allows construction, reading estimates and destruction without a browser window', () => {
        vi.stubGlobal('window', undefined);
        const controller = createWindowVirtualizer({count: 50, estimateSize: () => 20});
        controllers.push(controller);

        expect(controller.instance.getTotalSize()).toBe(1000);
        expect(controller.instance.getVirtualItems()).toEqual([]);
        expect(controller.instance.options.getScrollElement()).toBeNull();
        controller.mount();
        controller.destroy();
        expect(controller.instance.scrollElement).toBeNull();
        vi.unstubAllGlobals();
    });
});
