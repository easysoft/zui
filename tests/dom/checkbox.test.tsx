// @vitest-environment jsdom

import {render} from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import {describe, expect, it, vi} from 'vitest';
import {Checkbox} from '@zui/checkbox/src/component/checkbox';
import {CheckList} from '@zui/checkbox/src/component/check-list';
import {Radio} from '@zui/checkbox/src/component/radio';

const items = [
    {value: 'a', text: 'Alpha'},
    {value: 'b', text: 'Beta'},
];

function setup() {
    return userEvent.setup({advanceTimers: vi.advanceTimersByTime});
}

describe('Checkbox', () => {
    it('toggles an uncontrolled checkbox and reports the change once', async () => {
        const user = setup();
        const onChange = vi.fn();
        const {container} = render(<Checkbox defaultChecked={false} label="Alpha" onChange={onChange} />);
        const input = container.querySelector<HTMLInputElement>('input')!;

        await user.click(input);

        expect(input.checked).toBe(true);
        expect(container.firstElementChild!.classList.contains('checked')).toBe(true);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith(expect.any(Event), true);
    });

    it('keeps a controlled checkbox in sync with props when the caller ignores the change', async () => {
        const user = setup();
        const onChange = vi.fn();
        const {container} = render(<Checkbox checked={false} label="Alpha" onChange={onChange} />);
        const input = container.querySelector<HTMLInputElement>('input')!;

        await user.click(input);

        expect(input.checked).toBe(false);
        expect(container.firstElementChild!.classList.contains('checked')).toBe(false);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith(expect.any(Event), true);
    });

    it('keeps separately rendered controlled radios in sync when the caller ignores the change', async () => {
        const user = setup();
        const onChange = vi.fn();
        const {container} = render(
            <div>
                <Radio name="choice" checked label="Alpha" />
                <Radio name="choice" checked={false} label="Beta" onChange={onChange} />
            </div>,
        );
        const inputs = container.querySelectorAll<HTMLInputElement>('input');

        await user.click(inputs[1]);

        expect([...inputs].map(input => input.checked)).toEqual([true, false]);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith(expect.any(Event), true);
    });

    it('follows the controlled value written back by the caller', async () => {
        const {container, rerender} = render(<Checkbox checked={false} label="Alpha" />);
        const input = container.querySelector<HTMLInputElement>('input')!;

        rerender(<Checkbox checked label="Alpha" />);

        expect(input.checked).toBe(true);
        expect(container.firstElementChild!.classList.contains('checked')).toBe(true);
    });

    it('switches to the controlled value provided after the first render', () => {
        const {container, rerender} = render(<Checkbox label="Alpha" />);
        const input = container.querySelector<HTMLInputElement>('input')!;

        rerender(<Checkbox checked label="Alpha" />);

        expect(input.checked).toBe(true);
        expect(container.firstElementChild!.classList.contains('checked')).toBe(true);
    });

    it('restores the indeterminate state kept by the caller', async () => {
        const user = setup();
        const onChange = vi.fn();
        const {container} = render(<Checkbox checked="indeterminate" label="Alpha" onChange={onChange} />);
        const input = container.querySelector<HTMLInputElement>('input')!;

        expect(input.indeterminate).toBe(true);
        expect(container.firstElementChild!.classList.contains('indeterminate')).toBe(true);

        await user.click(input);

        expect(input.indeterminate).toBe(true);
        expect(input.checked).toBe(false);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith(expect.any(Event), true);
    });

    it('drops the indeterminate state of an uncontrolled checkbox on change', async () => {
        const user = setup();
        const {container} = render(<Checkbox defaultChecked="indeterminate" label="Alpha" />);
        const input = container.querySelector<HTMLInputElement>('input')!;

        expect(input.indeterminate).toBe(true);

        await user.click(input);

        expect(input.indeterminate).toBe(false);
        expect(input.checked).toBe(true);
    });
});

describe('CheckList', () => {
    it('accumulates the checked values of an uncontrolled list', async () => {
        const user = setup();
        const onChange = vi.fn();
        const {container} = render(<CheckList defaultChecked={['a']} items={items} onChange={onChange} />);
        const inputs = container.querySelectorAll<HTMLInputElement>('input');

        await user.click(inputs[1]);

        expect([...inputs].map(input => input.checked)).toEqual([true, true]);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith(['a', 'b'], expect.any(Event));
    });

    it('keeps a controlled list in sync with props when the caller ignores the change', async () => {
        const user = setup();
        const onChange = vi.fn();
        const {container} = render(<CheckList checked={['a']} items={items} onChange={onChange} />);
        const inputs = container.querySelectorAll<HTMLInputElement>('input');

        await user.click(inputs[1]);

        expect([...inputs].map(input => input.checked)).toEqual([true, false]);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith(['a', 'b'], expect.any(Event));
    });

    it('keeps a controlled radio list in sync with props, including the deselected item', async () => {
        const user = setup();
        const onChange = vi.fn();
        const {container} = render(<CheckList checked="a" items={items} type="radio" onChange={onChange} />);
        const inputs = container.querySelectorAll<HTMLInputElement>('input');

        await user.click(inputs[1]);

        expect([...inputs].map(input => input.checked)).toEqual([true, false]);
        expect(onChange).toHaveBeenLastCalledWith('b', expect.any(Event));
    });
});
