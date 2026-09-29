import {act, render} from '@testing-library/preact';
import type {ComponentType} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {ZUI} from '@zui/core';
import '@zui/datetime-picker';
import {DatePicker, DatetimePicker, TimePicker} from '@zui/datetime-picker/react';
import '@zui/picker';
import {Picker} from '@zui/picker/react';
import {FormControl} from '@zui/form-control/react';
import '@zui/form-builder';
import {FormHelper} from '@zui/form-helper';

const widgets: Record<string, ComponentType> = {datePicker: DatePicker, datetimePicker: DatetimePicker, timePicker: TimePicker, picker: Picker as ComponentType};

function renderControl(widget: string, props: Record<string, unknown>, vanilla = false) {
    return render(<form>{vanilla ? <ZUI $use={widget} $options={props} /> : <FormControl widget={widgets[widget]} props={props} />}</form>);
}

async function flushControls() {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(0);
    });
}

describe('FormHelper picker synchronization', () => {
    it.each([
        ['datePicker', '2026-09-01', '2026-09-28', '2026-09-28'],
        ['datetimePicker', '2026-09-01 08:30', '2026-09-28 12:45', '2026-09-28 12:45'],
        ['timePicker', '08:30', '9:5', '09:05'],
    ] as const)('synchronizes %s values and events through both render paths', async (widget, initial, value, expected) => {
        for (const vanilla of [false, true]) {
            const onChange = vi.fn();
            const view = renderControl(widget, {name: 'due', id: 'due', defaultValue: initial, onChange}, vanilla);
            await flushControls();
            const form = view.container.querySelector('form')!;
            const input = form.querySelector<HTMLInputElement>('input.form-control')!;
            const onInputChange = vi.fn();
            form.querySelector('[name="due"]')!.addEventListener('change', onInputChange);
            const helper = new FormHelper(form);

            await act(async () => {
                helper.setFormData({due: value});
            });

            expect(input).toHaveValue(expected);
            expect(helper.getFieldVal('due')).toBe(expected);
            expect(new FormData(form).get('due')).toBe(expected);
            expect(onChange).toHaveBeenCalledExactlyOnceWith(expected, initial);
            expect(onInputChange).toHaveBeenCalledTimes(1);
            view.unmount();
        }
    });

    it.each([false, true])('updates picker selections with multiple=%s', async (multiple) => {
        for (const vanilla of [false, true]) {
            const onChange = vi.fn();
            const view = renderControl('picker', {
                name: 'repository',
                id: 'repository',
                items: [{value: 'pms', text: 'PMS'}, {value: 'zui', text: 'ZUI'}],
                defaultValue: 'pms',
                multiple,
                search: false,
                onChange,
            }, vanilla);
            await flushControls();
            const form = view.container.querySelector('form')!;
            const helper = new FormHelper(form);

            await act(async () => {
                helper.setFieldVal('repository', multiple ? ['pms', 'zui'] : 'zui');
                await vi.advanceTimersByTimeAsync(0);
            });

            expect(view.getByText('ZUI')).toBeInTheDocument();
            expect(new FormData(form).getAll(multiple ? 'repository[]' : 'repository')).toEqual(multiple ? ['pms', 'zui'] : ['zui']);
            expect(onChange).toHaveBeenCalledExactlyOnceWith(multiple ? 'pms,zui' : 'zui', 'pms');
            view.unmount();
        }
    });

    it('preserves date validation and internal date state when assigning values', async () => {
        const onChange = vi.fn();
        const beforeChange = vi.fn(async (value: string) => value !== 'blocked');
        const view = renderControl('datePicker', {
            name: 'due',
            id: 'due',
            defaultValue: '2026-09-01',
            beforeChange,
            display: (_value: string, date: Date | null) => date ? String(date.getDate()) : '',
            onChange,
        });
        const form = view.container.querySelector('form')!;
        const helper = new FormHelper(form);
        const input = form.querySelector<HTMLInputElement>('input.form-control')!;

        await act(async () => {
            helper.setFieldVal('due', 'blocked');
        });
        expect(input).toHaveValue('1');
        expect(new FormData(form).get('due')).toBe('2026-09-01');
        expect(onChange).not.toHaveBeenCalled();

        await act(async () => {
            helper.setFieldVal('due', '2026-09-28');
        });
        expect(input).toHaveValue('28');
        expect(helper.getFieldVal('due')).toBe('2026-09-28');

        await act(async () => {
            helper.setFieldVal('due', 'invalid');
        });
        expect(input).toHaveValue('');
        expect(new FormData(form).get('due')).toBe('');
        expect(beforeChange).toHaveBeenCalledTimes(3);
        expect(onChange).toHaveBeenCalledTimes(2);
    });

    it('does not mistake an enclosing FormBuilder instance for the date picker', async () => {
        const view = renderControl('formBuilder', {
            widgets: {datePicker: [DatePicker]},
            schema: {
                type: 'object',
                properties: {due: {type: 'string', widget: 'datePicker', defaultValue: '2026-09-01'}},
            },
        }, true);
        await flushControls();
        const form = view.container.querySelector('form')!;
        const helper = new FormHelper(form);

        await act(async () => {
            helper.setFieldVal('due', '2026-09-28');
        });

        expect(form.querySelector('input.form-control')).toHaveValue('2026-09-28');
        expect(new FormData(form).get('due')).toBe('2026-09-28');
    });

    it('keeps ordinary input assignment silent', () => {
        const onChange = vi.fn();
        const view = render(<form><input name="title" defaultValue="Before" onChange={onChange} /></form>);
        const form = view.container.querySelector('form')!;

        new FormHelper(form).setFieldVal('title', 'After');

        expect(new FormData(form).get('title')).toBe('After');
        expect(onChange).not.toHaveBeenCalled();
    });
});
