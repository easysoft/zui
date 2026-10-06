import {describe, expect, it, vi} from 'vitest';
import {Sortable} from '@zui/sortable';
import {flushAnimationFrame} from '../setup/dom';

import type {SortableClass, SortableEvent, SortableJSOptions, SortableOptions} from '@zui/sortable';

async function createSortable(options: SortableOptions) {
    const Module = vi.fn(function (_element: HTMLElement, _options: SortableJSOptions) {
        return {destroy: vi.fn()};
    });
    vi.spyOn(Sortable, 'loadModule').mockResolvedValue(Module as unknown as SortableClass);
    const element = document.createElement('div');
    element.innerHTML = '<div data-id="first">First item</div><div data-id="second">Second item</div>';
    document.body.append(element);
    const instance = new Sortable(element, options);
    await flushAnimationFrame();
    return {instance, options: Module.mock.calls[0][1], item: element.firstElementChild as HTMLElement};
}

describe('Sortable callback forwarding', () => {
    it.each([undefined, true, false, 'element'] as const)('forwards callbacks with dragShadow=%s and cleans its own shadow', async (mode) => {
        const customShadow = document.createElement('div');
        customShadow.textContent = 'Custom drag image';
        document.body.append(customShadow);
        const dragShadow = mode === 'element' ? customShadow : mode;
        const onEnd = vi.fn<NonNullable<SortableJSOptions['onEnd']>>();
        const setData = vi.fn<NonNullable<SortableJSOptions['setData']>>((transfer, item) => {
            transfer.setData('text/plain', item.dataset.id!);
        });
        const {instance, options, item} = await createSortable({dragShadow, onEnd, setData});
        const setDragImage = vi.fn();
        const transfer = {setData: vi.fn(), setDragImage} as unknown as DataTransfer;
        expect(options.onEnd).toEqual(expect.any(Function));
        expect(options.setData).toEqual(expect.any(Function));
        options.setData!.call(instance.module, transfer, item);

        expect(setData).toHaveBeenCalledExactlyOnceWith(transfer, item);
        expect(transfer.setData).toHaveBeenCalledExactlyOnceWith('text/plain', 'first');
        const emptyShadow = document.querySelector('.sortable-empty-shadow');
        if (mode === false) {
            expect(emptyShadow).toBeInTheDocument();
            expect(emptyShadow).not.toBe(item);
            expect(emptyShadow).toHaveTextContent('First item');
            expect(setDragImage).toHaveBeenCalledExactlyOnceWith(emptyShadow, 0, 0);
        } else if (mode === 'element') {
            expect(emptyShadow).toBeNull();
            expect(setDragImage).toHaveBeenCalledExactlyOnceWith(customShadow, 0, 0);
        } else {
            expect(emptyShadow).toBeNull();
            expect(setDragImage).not.toHaveBeenCalled();
            expect(options.onEnd).toBe(onEnd);
            expect(options.setData).toBe(setData);
        }

        const event = {item, from: instance.element, to: instance.element, oldIndex: 0, newIndex: 1} as SortableEvent;
        options.onEnd!.call(instance.module, event);
        expect(onEnd).toHaveBeenCalledExactlyOnceWith(event);
        expect(document.querySelector('.sortable-empty-shadow')).toBeNull();
        expect(customShadow).toBeInTheDocument();
        instance.destroy();
        expect(customShadow).toBeInTheDocument();
    });

    it.each([undefined, true])('retains SortableJS defaults when native callbacks are omitted and dragShadow=%s', async (dragShadow) => {
        const {options} = await createSortable({dragShadow});
        expect(options).not.toHaveProperty('setData');
        expect(options).not.toHaveProperty('onEnd');
    });

    it('removes an unfinished empty drag image on destroy', async () => {
        const {instance, options, item} = await createSortable({dragShadow: false});
        const transfer = {setDragImage: vi.fn()} as unknown as DataTransfer;
        options.setData!(transfer, item);
        expect(document.querySelectorAll('.sortable-empty-shadow')).toHaveLength(1);
        const destroy = instance.module!.destroy;
        instance.destroy();
        instance.destroy();
        expect(destroy).toHaveBeenCalledOnce();
        expect(document.querySelector('.sortable-empty-shadow')).toBeNull();
        expect(instance.module).toBeUndefined();
    });
});
