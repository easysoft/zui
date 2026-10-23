import {act, render} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {Picker} from '@zui/picker/react';

import type {PickerItemOptions} from '@zui/picker';

function createLoader() {
    const requests: {search: string; resolve(items: PickerItemOptions[]): void; reject(error: Error): void}[] = [];
    const load = vi.fn((_picker: unknown, query: unknown) => new Promise<PickerItemOptions[]>((resolve, reject) => {
        requests.push({search: String(query ?? ''), resolve, reject});
    }));
    return {load, requests};
}

async function flushPicker() {
    // Let the scheduled update render loading before advancing the fetch debounce.
    for (let step = 0; step < 3; step++) {
        await act(async () => {
            await vi.advanceTimersByTimeAsync(300);
        });
    }
}

describe('Picker asynchronous items', () => {
    it('ignores an old response after search changes and loads the latest query', async () => {
        const ref = createRef<Picker>();
        const {load, requests} = createLoader();
        render(<Picker ref={ref} items={load} searchDelay={1} />);
        await flushPicker();
        expect(requests[0].search).toBe('');
        act(() => {
            void ref.current!.changeState({search: 'ZUI'});
        });
        await act(async () => {
            requests[0].resolve([{value: 'old', text: 'ZUI old'}]);
        });
        await flushPicker();
        expect(ref.current!.state.items).toEqual([]);
        expect(requests[1].search).toBe('ZUI');
        await act(async () => {
            requests[1].resolve([{value: 'new', text: 'ZUI latest'}]);
        });
        await flushPicker();
        expect(ref.current!.state.items).toEqual([expect.objectContaining({value: 'new'})]);
        expect(ref.current!.state.loading).toBe(false);
    });

    it('reloads when a pending query is changed and then restored', async () => {
        const ref = createRef<Picker>();
        const {load, requests} = createLoader();
        render(<Picker ref={ref} items={load} searchDelay={1} />);
        await flushPicker();
        act(() => {
            void ref.current!.changeState({search: 'ZUI'});
        });
        act(() => {
            void ref.current!.changeState({search: ''});
        });
        await act(async () => {
            requests[0].resolve([{value: 'old', text: 'Old response'}]);
        });
        await flushPicker();
        expect(ref.current!.state.items).toEqual([]);
        expect(requests).toHaveLength(2);
        expect(requests[1].search).toBe('');
        await act(async () => {
            requests[1].resolve([{value: 'new', text: 'Fresh response'}]);
        });
        await flushPicker();
        expect(ref.current!.state.items).toEqual([expect.objectContaining({value: 'new'})]);
        expect(ref.current!.state.loading).toBe(false);
    });

    it('ends loading after a failure and supports an explicit retry without changing the value', async () => {
        const ref = createRef<Picker>();
        const {load, requests} = createLoader();
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        const onChange = vi.fn();
        render(<Picker ref={ref} items={load} searchDelay={1} defaultValue="zui" onChange={onChange} />);
        await flushPicker();
        const failure = new Error('Failed to fetch members');
        await act(async () => {
            requests[0].reject(failure);
        });
        await flushPicker();
        expect(ref.current!.state.loading).toBe(false);
        expect(ref.current!.state.items).toEqual([]);
        expect(warn).toHaveBeenCalledWith('[ZUI] Picker: Failed to load items.', undefined, {error: failure});
        act(() => {
            void ref.current!.update(true);
        });
        await flushPicker();
        await act(async () => {
            requests[1].resolve([{value: 'zui', text: 'ZUI'}]);
        });
        await flushPicker();
        expect(ref.current!.state.selections).toEqual([expect.objectContaining({value: 'zui', text: 'ZUI'})]);
        expect(ref.current!.state.loading).toBe(false);
        expect(onChange).not.toHaveBeenCalled();
    });

    it('ignores an in-flight completion after unmount', async () => {
        const ref = createRef<Picker>();
        const {load, requests} = createLoader();
        const {unmount} = render(<Picker ref={ref} items={load} searchDelay={1} />);
        await flushPicker();
        const picker = ref.current!;
        unmount();
        const changeState = vi.spyOn(picker, 'changeState');
        await act(async () => {
            requests[0].resolve([{value: 'late', text: 'Late response'}]);
        });
        await flushPicker();
        expect(changeState).not.toHaveBeenCalled();
        expect(document.querySelector('.pick-pop, .picker-select')).not.toBeInTheDocument();
        expect(load).toHaveBeenCalledTimes(1);
    });

    it('keeps selected labels when successive filtered responses omit those values', async () => {
        const ref = createRef<Picker>();
        const {load, requests} = createLoader();
        render(<Picker ref={ref} items={load} searchDelay={1} multiple defaultValue="zui" />);
        await flushPicker();
        await act(async () => {
            requests[0].resolve([{value: 'zui', text: 'ZUI UI Library'}]);
        });
        await flushPicker();
        for (const [index, search] of ['PMS', 'ZDOO'].entries()) {
            act(() => {
                void ref.current!.changeState({search});
            });
            await flushPicker();
            await act(async () => {
                requests[index + 1].resolve([{value: search.toLowerCase(), text: search}]);
            });
            await flushPicker();
            expect(ref.current!.state.selections).toEqual([expect.objectContaining({value: 'zui', text: 'ZUI UI Library'})]);
        }
        act(() => {
            void ref.current!.changeState({search: 'ZUI'});
        });
        await flushPicker();
        await act(async () => {
            requests[3].resolve([{value: 'zui', text: 'Updated ZUI label'}]);
        });
        await flushPicker();
        expect(ref.current!.state.selections).toEqual([expect.objectContaining({value: 'zui', text: 'Updated ZUI label'})]);
    });
});
