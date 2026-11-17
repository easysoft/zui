// @vitest-environment jsdom

import {act, fireEvent, render} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {getReactComponent} from '@zui/core';
import {Segmented as VanillaSegmented} from '@zui/segmented';
import {Segmented} from '@zui/segmented/react';
import {FormControl, FormGroup} from '@zui/form-control/react';
import {FormBuilder} from '@zui/form-builder/react';
import {flushAnimationFrame} from '../setup/dom';
import type {SegmentedItem} from '@zui/segmented';

const items: SegmentedItem[] = [
    {value: 'list', text: '列表'},
    {value: 'board', text: '看板', disabled: true},
    {value: 'card', text: '卡片'},
];

function mockAnimationLayout() {
    const layout = {
        visible: true,
        scale: 1,
        rects: [[2, 2, 60, 28], [66, 2, 100, 28], [170, 2, 128, 28]],
    };
    const observers: ResizeObserverMock[] = [];
    class ResizeObserverMock {
        observe = vi.fn();
        disconnect = vi.fn();
        unobserve = vi.fn();
        constructor(public callback: ResizeObserverCallback) {
            observers.push(this);
        }
    }
    vi.stubGlobal('ResizeObserver', ResizeObserverMock);
    const measure = vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement) {
        if (!layout.visible) return new DOMRect();
        if (this.classList.contains('segmented')) return new DOMRect(10, 20, 300 * layout.scale, 100 * layout.scale);
        const input = this.previousElementSibling as HTMLInputElement | null;
        if (!this.classList.contains('segmented-label') || !input) return new DOMRect();
        const [x, y, width, height] = layout.rects[Number(input.dataset.index)];
        return new DOMRect(10 + x * layout.scale, 20 + y * layout.scale, width * layout.scale, height * layout.scale);
    });
    vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(300);
    vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(100);
    const resize = () => {
        const observer = observers.at(-1)!;
        observer.callback([], observer as unknown as ResizeObserver);
    };
    return {layout, observers, measure, resize};
}

describe('Segmented', () => {
    it('owns a separate renderer and vanilla registration', async () => {
        expect(getReactComponent('Segmented')).toBe(Segmented);
        expect(getReactComponent('BtnSegmented')).toBeUndefined();
        const view = render(<form><div id="segmentedHost" /></form>);
        const onChange = vi.fn();
        const instance = new VanillaSegmented('#segmentedHost', {name: 'view', items, onChange});
        await act(flushAnimationFrame);
        expect(VanillaSegmented.get('#segmentedHost')).toBe(instance);
        expect(instance.value).toBe('list');
        fireEvent.click(view.getByText('卡片'));
        expect(instance.value).toBe('card');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('card', expect.any(Event));
        act(() => instance.render({value: 'list'}));
        expect(instance.value).toBe('list');
        expect(new FormData(view.container.querySelector('form')!).get('view')).toBe('list');
        act(() => instance.destroy());
        expect(view.queryByRole('radio')).not.toBeInTheDocument();
    });

    it('preserves native selection, form reset, cancelled reset and typed values', () => {
        const ref = createRef<Segmented>();
        const onChange = vi.fn();
        const options = [0, 1, '1'];
        const show = () => <form><Segmented ref={ref} name="period" items={options} onChange={onChange} /></form>;
        const view = render(show());
        const form = view.container.querySelector('form')!;
        const radios = view.getAllByRole('radio');
        expect(ref.current!.value).toBe(0);
        fireEvent.click(radios[1]);
        expect(ref.current!.value).toBe(1);
        expect(onChange).toHaveBeenLastCalledWith(1, expect.any(Event));
        fireEvent.click(radios[2]);
        expect(ref.current!.value).toBe('1');
        expect(onChange).toHaveBeenLastCalledWith('1', expect.any(Event));
        fireEvent.click(radios[2]);
        expect(onChange).toHaveBeenCalledTimes(2);
        view.rerender(show());
        expect(radios[2]).toBeChecked();
        form.addEventListener('reset', event => event.preventDefault(), {once: true});
        act(() => form.reset());
        expect(ref.current!.value).toBe('1');
        act(() => form.reset());
        expect(ref.current!.value).toBe(0);
        expect(new FormData(form).get('period')).toBe('0');
        expect(onChange).toHaveBeenCalledTimes(2);
    });

    it('restores rejected controlled changes and keeps current value on reset', () => {
        const onChange = vi.fn();
        const show = (value: string) => <form><Segmented name="view" items={items} value={value} defaultValue="list" onChange={onChange} /></form>;
        const view = render(show('list'));
        fireEvent.click(view.getByText('卡片'));
        expect(onChange).toHaveBeenCalledExactlyOnceWith('card', expect.any(Event));
        expect(view.getByRole('radio', {name: '列表'})).toBeChecked();
        view.rerender(show('card'));
        act(() => view.container.querySelector('form')!.reset());
        expect(view.getByRole('radio', {name: '卡片'})).toBeChecked();
        view.rerender(show('missing'));
        expect(view.container.querySelector('input:checked')).toBeNull();
    });

    it('supports empty, dynamic and reordered items without resetting the selection', () => {
        const ref = createRef<Segmented>();
        const onChange = vi.fn();
        const show = (nextItems: SegmentedItem[]) => <Segmented ref={ref} items={nextItems} onChange={onChange} />;
        const view = render(show([]));
        expect(ref.current!.value).toBeUndefined();
        view.rerender(show(items));
        const card = view.getByRole('radio', {name: '卡片'});
        const id = card.id;
        fireEvent.click(card);
        view.rerender(show([...items].reverse()));
        expect(view.getByRole('radio', {name: '卡片'})).toBeChecked();
        expect(card.id).toBe(id);
        view.rerender(show([{value: 'table', text: '表格'}, items[2]]));
        expect(ref.current!.value).toBe('card');
        view.rerender(show(items.slice(0, 2)));
        expect(ref.current!.value).toBe('list');
        view.rerender(show(items));
        expect(ref.current!.value).toBe('list');
        expect(onChange).toHaveBeenCalledTimes(1);
        view.rerender(show([]));
        expect(ref.current!.value).toBeUndefined();
    });

    it('isolates default names and keeps explicit form associations', () => {
        const view = render(
            <div>
                <form id="externalForm" />
                <Segmented form="externalForm" name="view" items={items} defaultValue="card" />
                <Segmented items={[1, 2]} />
                <Segmented items={[1, 2]} />
            </div>,
        );
        const groups = view.getAllByRole('radiogroup');
        const names = groups.map(group => group.querySelector('input')!.name);
        expect(new Set(names).size).toBe(3);
        const ids = Array.from(view.container.querySelectorAll('input'), input => input.id);
        expect(new Set(ids).size).toBe(ids.length);
        expect(new FormData(view.container.querySelector('form')!).get('view')).toBe('card');
        fireEvent.click(groups[1].querySelectorAll('input')[1]);
        expect(groups[2].querySelector('input')).toBeChecked();
    });

    it('honors group, item, fieldset and readonly disabling and native required', () => {
        const onChange = vi.fn();
        const show = (disabled = false, readonly = false, fieldset = false) => <form><fieldset disabled={fieldset}><Segmented name="view" items={items} value="" required disabled={disabled} readonly={readonly} onChange={onChange} /></fieldset></form>;
        const view = render(show());
        expect(view.container.querySelector('form')!.checkValidity()).toBe(false);
        expect(view.getByRole('radio', {name: '看板'})).toBeDisabled();
        for (const props of [[true, false, false], [false, true, false], [false, false, true]]) {
            view.rerender(show(...props));
            view.getAllByRole('radio').forEach(input => expect(input).toBeDisabled());
            fireEvent.click(view.getByText('卡片'));
            expect(onChange).not.toHaveBeenCalled();
            expect(new FormData(view.container.querySelector('form')!).has('view')).toBe(false);
        }
    });

    it('renders custom content, icon-only names and scoped styling', () => {
        const view = render(
            <Segmented
                block
                vertical
                shape="round"
                size="lg"
                className="custom-root"
                attrs={{'aria-label': '周期'}}
                items={[
                    {value: 'day', text: <strong>每日</strong>, icon: <svg viewBox="0 0 24 24" />, className: 'custom-item', style: {color: 'red'}, title: '按天汇总'},
                    {value: 'month', icon: {className: 'i-calendar'}, 'aria-label': '每月'},
                    {value: 'year', text: () => <em>每年</em>},
                ]}
            />,
        );
        expect(view.getByRole('radiogroup', {name: '周期'})).toHaveClass('segmented', 'segmented-block', 'segmented-vertical', 'segmented-round', 'size-lg', 'custom-root');
        expect(view.getByText('每日').tagName).toBe('STRONG');
        expect(view.getByText('每年').tagName).toBe('EM');
        expect(view.getByRole('radio', {name: '每月'})).toBeInTheDocument();
        expect(view.container.querySelector('.custom-item')).toHaveAttribute('title', '按天汇总');
        expect(view.container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    });

    it('integrates with FormControl labels and numeric FormBuilder data', () => {
        const onChange = vi.fn();
        const view = render(<FormGroup label="视图" name="view"><FormControl widget="Segmented" name="view" props={{id: 'view', items}} onChange={onChange} /></FormGroup>);
        expect(view.container.querySelector('label[for="view"]')).toBeInTheDocument();
        fireEvent.click(view.getByText('卡片'));
        expect(onChange).toHaveBeenCalledWith('card', expect.any(Event));
        const ref = createRef<FormBuilder>();
        view.rerender(<FormBuilder ref={ref} schema={{type: 'object', properties: {period: {type: 'number', title: '周期', widget: 'Segmented', props: {items: [0, 1, 2], attrs: {'aria-label': '周期'}}}}}} defaultData={{period: 0}} />);
        fireEvent.click(view.getByRole('radio', {name: '2'}));
        expect(ref.current!.formData).toEqual({period: 2});
    });

    it('opts into animation without changing typed selection and releases resources when disabled', async () => {
        const {observers} = mockAnimationLayout();
        const onChange = vi.fn();
        const show = (animation?: boolean) => <form><Segmented items={[0, 1, '1']} animation={animation} onChange={onChange} /></form>;
        const view = render(show());
        expect(view.container.querySelector('.segmented-thumb')).toBeNull();
        expect(observers).toHaveLength(0);
        fireEvent.click(view.getAllByRole('radio')[1]);
        view.rerender(show(true));
        await act(flushAnimationFrame);
        const thumb = view.container.querySelector<HTMLElement>('.segmented-thumb')!;
        expect(thumb).toHaveAttribute('aria-hidden', 'true');
        expect(thumb).not.toHaveAttribute('hidden');
        expect(thumb).not.toHaveClass('is-animated');
        expect(thumb.style.transform).toBe('translate(66px, 2px)');
        expect(observers[0].observe).toHaveBeenCalledTimes(4);
        fireEvent.click(view.getAllByRole('radio')[2]);
        await act(flushAnimationFrame);
        expect(thumb).toHaveClass('is-animated');
        expect(thumb.style.width).toBe('128px');
        expect(thumb.style.transform).toBe('translate(170px, 2px)');
        expect(onChange.mock.calls.map(([value]) => value)).toEqual([1, '1']);
        const form = view.container.querySelector('form')!;
        const removeListener = vi.spyOn(form, 'removeEventListener');
        const cancelFrame = vi.spyOn(globalThis, 'cancelAnimationFrame');
        fireEvent.click(view.getAllByRole('radio')[0]);
        view.rerender(show(false));
        expect(cancelFrame).toHaveBeenCalled();
        expect(observers[0].disconnect).toHaveBeenCalledOnce();
        expect(removeListener).toHaveBeenCalledWith('reset', expect.any(Function));
        expect(view.container.querySelector('.segmented-thumb')).toBeNull();
        expect(view.getAllByRole('radio')[0]).toBeChecked();
        view.rerender(show(true));
        await act(flushAnimationFrame);
        expect(view.container.querySelector('.segmented-thumb')).not.toHaveClass('is-animated');
    });

    it('follows reconciled controlled values, rapid updates and missing selections', async () => {
        mockAnimationLayout();
        const onChange = vi.fn();
        const show = (value: string | number) => <form><Segmented animation items={[0, 1, '1']} value={value} onChange={onChange} /></form>;
        const view = render(show(1));
        await act(flushAnimationFrame);
        const thumb = view.container.querySelector<HTMLElement>('.segmented-thumb')!;
        fireEvent.click(view.getAllByRole('radio')[2]);
        await act(flushAnimationFrame);
        expect(view.getAllByRole('radio')[1]).toBeChecked();
        expect(thumb.style.transform).toBe('translate(66px, 2px)');
        expect(thumb).not.toHaveClass('is-animated');
        view.rerender(show('1'));
        await act(flushAnimationFrame);
        expect(thumb.style.transform).toBe('translate(170px, 2px)');
        expect(thumb).toHaveClass('is-animated');
        act(() => view.container.querySelector('form')!.reset());
        await act(flushAnimationFrame);
        expect(view.getAllByRole('radio')[2]).toBeChecked();
        expect(thumb.style.transform).toBe('translate(170px, 2px)');
        view.rerender(show(0));
        view.rerender(show(1));
        await act(flushAnimationFrame);
        expect(thumb.style.transform).toBe('translate(66px, 2px)');
        view.rerender(show('missing'));
        await act(flushAnimationFrame);
        expect(thumb).toHaveAttribute('hidden');
        view.rerender(show(0));
        await act(flushAnimationFrame);
        expect(thumb).not.toHaveAttribute('hidden');
        expect(thumb).not.toHaveClass('is-animated');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('1', expect.any(Event));
    });

    it('tracks external forms after native reset, cancelled reset and reassociation', async () => {
        mockAnimationLayout();
        const onChange = vi.fn();
        const show = (form: string) => (
            <div>
                <form id="firstForm" />
                <form id="secondForm" />
                <Segmented animation form={form} name="period" items={[0, 1, '1']} onChange={onChange} />
            </div>
        );
        const view = render(show('firstForm'));
        await act(flushAnimationFrame);
        const [firstForm, secondForm] = view.container.querySelectorAll('form');
        const thumb = view.container.querySelector<HTMLElement>('.segmented-thumb')!;
        fireEvent.click(view.getAllByRole('radio')[2]);
        await act(flushAnimationFrame);
        firstForm.addEventListener('reset', event => event.preventDefault(), {once: true});
        act(() => firstForm.reset());
        await act(flushAnimationFrame);
        expect(thumb.style.transform).toBe('translate(170px, 2px)');
        act(() => firstForm.reset());
        await act(flushAnimationFrame);
        expect(thumb.style.transform).toBe('translate(2px, 2px)');
        expect(new FormData(firstForm).get('period')).toBe('0');
        const removeListener = vi.spyOn(firstForm, 'removeEventListener');
        view.rerender(show('secondForm'));
        await act(flushAnimationFrame);
        expect(removeListener).toHaveBeenCalledWith('reset', expect.any(Function));
        fireEvent.click(view.getAllByRole('radio')[1]);
        await act(flushAnimationFrame);
        act(() => secondForm.reset());
        await act(flushAnimationFrame);
        expect(thumb.style.transform).toBe('translate(2px, 2px)');
        expect(onChange).toHaveBeenCalledTimes(2);
    });

    it('snaps to resized and reordered layouts and recovers from hidden or empty content', async () => {
        const {layout, resize} = mockAnimationLayout();
        const show = (options: (string | number)[]) => <Segmented animation items={options} />;
        const view = render(show([0, 1, '1']));
        await act(flushAnimationFrame);
        const thumb = view.container.querySelector<HTMLElement>('.segmented-thumb')!;
        fireEvent.click(view.getAllByRole('radio')[2]);
        await act(flushAnimationFrame);
        layout.scale = 2;
        layout.rects[2] = [2, 70, 180, 40];
        resize();
        await act(flushAnimationFrame);
        expect(thumb.style.transform).toBe('translate(2px, 70px)');
        expect(thumb.style.width).toBe('180px');
        expect(thumb.style.height).toBe('40px');
        expect(thumb).not.toHaveClass('is-animated');
        layout.visible = false;
        resize();
        await act(flushAnimationFrame);
        expect(thumb).toHaveAttribute('hidden');
        layout.visible = true;
        resize();
        await act(flushAnimationFrame);
        expect(thumb).not.toHaveAttribute('hidden');
        expect(thumb).not.toHaveClass('is-animated');
        view.rerender(show(['1', 0, 1]));
        await act(flushAnimationFrame);
        expect(view.getAllByRole('radio')[0]).toBeChecked();
        expect(thumb.style.transform).toBe('translate(2px, 2px)');
        view.rerender(show([2, 0, 1]));
        await act(flushAnimationFrame);
        expect(thumb).not.toHaveAttribute('hidden');
        view.rerender(show([]));
        await act(flushAnimationFrame);
        expect(thumb).toHaveAttribute('hidden');
        view.rerender(show([0, 1, '1']));
        await act(flushAnimationFrame);
        expect(thumb).not.toHaveAttribute('hidden');
    });

    it('cleans up animation work and inherited lifecycle on unmount', async () => {
        const {observers, measure, resize} = mockAnimationLayout();
        const onUnmount = vi.fn();
        const view = render(<form><Segmented animation items={[0, 1, '1']} onUnmount={onUnmount} /></form>);
        await act(flushAnimationFrame);
        const form = view.container.querySelector('form')!;
        const removeListener = vi.spyOn(form, 'removeEventListener');
        resize();
        view.unmount();
        const calls = measure.mock.calls.length;
        await act(flushAnimationFrame);
        resize();
        await act(flushAnimationFrame);
        expect(measure).toHaveBeenCalledTimes(calls);
        expect(observers[0].disconnect).toHaveBeenCalledOnce();
        expect(removeListener).toHaveBeenCalledWith('reset', expect.any(Function));
        expect(onUnmount).toHaveBeenCalledOnce();
    });
});
