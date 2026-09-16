import {act, fireEvent, render} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {$} from '@zui/core';
import {Picker} from '@zui/picker/react';

const items = [{value: 'pms', text: 'PMS'}, {value: 'zui', text: 'ZUI'}];

function mockTriggerLayout(id: string) {
    const trigger = document.getElementById(`pick-${id}`)!;
    vi.spyOn(trigger, 'getBoundingClientRect').mockReturnValue(new DOMRect(120, 180, 320, 32));
    Object.defineProperties(trigger, {offsetWidth: {value: 320}, offsetHeight: {value: 32}});
    return trigger;
}

async function flushPicker() {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(300);
    });
}

describe('Picker field IDs', () => {
    it.each(['repository', 'inputs.repository', 'inputs.repositories[0]'])('positions and sizes the popup for %s', async (id) => {
        const {unmount} = render(<Picker id={id} name={id} items={items} popPlacement="bottom-start" />);
        const trigger = mockTriggerLayout(id);

        fireEvent.click(trigger);
        await flushPicker();

        const pop = document.getElementById(`pick-pop-${id}`)!;
        expect(pop).toHaveStyle({width: '320px'});
        await vi.waitFor(() => expect(pop.style.top).toBe('213px'));
        expect(pop.style.left).not.toBe('');

        unmount();
        expect(pop).not.toBeInTheDocument();
        expect(document.querySelector('.pick-pop')).not.toBeInTheDocument();
    });

    it('keeps the popup open for clicks inside the dotted-ID trigger and popup, and closes it outside', async () => {
        const id = 'inputs.repository';
        const {getByRole} = render(<Picker id={id} items={items} popHeader={<button type="button">Options</button>} />);
        const trigger = mockTriggerLayout(id);

        fireEvent.click(trigger);
        await flushPicker();
        fireEvent.click(trigger.querySelector('input')!);
        await flushPicker();
        expect(document.getElementById(`pick-pop-${id}`)).toBeInTheDocument();

        fireEvent.click(getByRole('button', {name: 'Options'}));
        await flushPicker();
        expect(document.getElementById(`pick-pop-${id}`)).toBeInTheDocument();

        fireEvent.click(document.body);
        await flushPicker();
        expect(document.getElementById(`pick-pop-${id}`)).not.toBeInTheDocument();
    });

    it('selects and dismisses a dotted-ID popup using the keyboard', async () => {
        const id = 'inputs.repository';
        render(<Picker id={id} name={id} items={items} />);
        const trigger = mockTriggerLayout(id);

        fireEvent.click(trigger);
        await flushPicker();
        const search = trigger.querySelector('input[type="text"]')!;
        fireEvent.keyDown(search, {key: 'ArrowDown', code: 'ArrowDown'});
        fireEvent.keyDown(search, {key: 'Enter', code: 'Enter'});
        await flushPicker();

        expect(document.getElementById(id)).toHaveValue('zui');
        expect(document.getElementById(`pick-pop-${id}`)).not.toBeInTheDocument();

        fireEvent.click(trigger);
        await flushPicker();
        fireEvent.keyDown(trigger.querySelector('input[type="text"]')!, {key: 'Escape', code: 'Escape'});
        await flushPicker();
        expect(document.getElementById(`pick-pop-${id}`)).not.toBeInTheDocument();
    });

    it('reuses an existing dotted-ID input and synchronizes its value and change events', async () => {
        const id = 'inputs.repository';
        const input = document.createElement('input');
        input.id = id;
        input.name = id;
        document.body.append(input);
        const ref = createRef<Picker>();
        const {unmount} = render(<Picker ref={ref} id={id} name={id} items={items} defaultValue="pms" />);
        const picker = ref.current!;

        expect(document.querySelectorAll('[id="inputs.repository"]')).toHaveLength(1);
        expect(input).toHaveValue('pms');
        const onChange = vi.fn();
        input.addEventListener('change', onChange);

        act(() => {
            void picker.setValue('zui');
        });
        await flushPicker();
        expect(input).toHaveValue('zui');
        expect(onChange).toHaveBeenCalledTimes(1);

        fireEvent.change(input, {target: {value: 'pms'}});
        expect(picker.value).toBe('pms');
        act(() => {
            $(input).trigger('syncValue', {setValue: 'zui'});
        });
        expect(picker.value).toBe('zui');

        unmount();
        const changeState = vi.spyOn(picker, 'changeState');
        fireEvent.change(input, {target: {value: 'pms'}});
        expect(changeState).not.toHaveBeenCalled();
    });

    it('synchronizes an array-field multi-select with submitted values and change events', async () => {
        const id = 'inputs.repositories[0]';
        const ref = createRef<Picker>();
        const {container} = render(<form><Picker ref={ref} id={id} name={id} multiple items={items} defaultValue="pms" search={false} /></form>);
        const select = document.getElementById(id) as HTMLSelectElement;
        const form = container.querySelector('form')!;
        const onChange = vi.fn();
        select.addEventListener('change', onChange);
        expect(new FormData(form).getAll(`${id}[]`)).toEqual(['pms']);

        act(() => {
            void ref.current!.setValue(['pms', 'zui']);
        });
        await flushPicker();
        expect(new FormData(form).getAll(`${id}[]`)).toEqual(['pms', 'zui']);
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
