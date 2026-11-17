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
});
