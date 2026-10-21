import {act, fireEvent, render} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {ColorPicker} from '@zui/color-picker/react';

async function flushPicker() {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(300);
    });
}

async function openPicker() {
    fireEvent.click(document.querySelector('.color-picker')!);
    await vi.waitFor(async () => {
        await flushPicker();
        expect(document.querySelector('.color-picker-pop')).toHaveClass('in');
    });
    return document.querySelector('.color-picker-pop')!;
}

describe('ColorPicker custom colors', () => {
    it.each([undefined, false])('keeps the preset-only panel when custom is %s', async (custom) => {
        render(<ColorPicker colors={['#ef4444', '#22c55e']} custom={custom} />);

        const pop = await openPicker();
        expect(pop.querySelector('input[type="color"]')).not.toBeInTheDocument();
        expect(pop.querySelectorAll('[data-pick-value]')).toHaveLength(3);
    });

    it('commits a custom color, syncs the field and target, and preserves preset and clear actions', async () => {
        const onChange = vi.fn();
        const {container} = render(
            <form>
                <ColorPicker id="accent" name="accent" custom defaultValue="#ef4444" syncValue="#colorValue" syncBackground="#colorPreview" onChange={onChange} />
                <output id="colorValue" />
                <div id="colorPreview" />
            </form>,
        );
        const pop = await openPicker();
        const input = pop.querySelector('input[type="color"]')!;
        expect(input).toHaveValue('#ef4444');
        expect(input).toHaveAttribute('aria-label');

        fireEvent.click(input);
        await flushPicker();
        expect(pop).toBeInTheDocument();

        fireEvent.input(input, {target: {value: '#123456'}});
        expect(onChange).not.toHaveBeenCalled();
        fireEvent.change(input);
        await flushPicker();

        expect(onChange).toHaveBeenCalledExactlyOnceWith('#123456', '#ef4444');
        expect(new FormData(container.querySelector('form')!).get('accent')).toBe('#123456');
        expect(document.getElementById('colorValue')).toHaveTextContent('#123456');
        expect(document.getElementById('colorPreview')).toHaveStyle({backgroundColor: '#123456'});
        await vi.waitFor(async () => {
            await flushPicker();
            expect(pop).not.toBeInTheDocument();
        });
        expect(document.querySelector('.color-picker')).toHaveStyle({color: '#123456'});

        const reopened = await openPicker();
        expect(reopened.querySelector('input[type="color"]')).toHaveValue('#123456');
        fireEvent.click(reopened.querySelector('[data-pick-value="#22c55e"]')!);
        await flushPicker();
        expect(onChange).toHaveBeenLastCalledWith('#22c55e', '#123456');

        const presetPop = await openPicker();
        expect(presetPop.querySelector('input[type="color"]')).toHaveValue('#22c55e');
        fireEvent.click(presetPop.querySelector('[data-pick-value=""]')!);
        await flushPicker();
        expect(onChange).toHaveBeenLastCalledWith('', '#22c55e');
        expect(document.getElementById('colorValue')).toBeEmptyDOMElement();
        expect(new FormData(container.querySelector('form')!).get('accent')).toBe('');
    });

    it.each(['value', 'defaultValue'] as const)('forwards ColorInput options and callbacks with an initial %s', async (valueOption) => {
        const onChange = vi.fn();
        const onCustomChange = vi.fn();
        const {getByLabelText} = render(
            <ColorPicker
                custom={{
                    id: 'customColor',
                    name: 'customAccent',
                    className: 'custom-swatch',
                    hint: 'Custom color',
                    [valueOption]: '#3b82f6',
                    onChange: onCustomChange,
                }}
                onChange={onChange}
            />,
        );

        await openPicker();
        const input = getByLabelText('Custom color');
        expect(input).toHaveValue('#3b82f6');
        expect(input).toHaveAttribute('name', 'customAccent');
        expect(document.getElementById('customColor')).toHaveClass('color-input', 'color-picker-item', 'custom-swatch');

        fireEvent.change(input, {target: {value: '#abcdef'}});
        await flushPicker();
        expect(onChange).toHaveBeenCalledExactlyOnceWith('#abcdef', '');
        expect(onCustomChange).toHaveBeenCalledExactlyOnceWith('#abcdef', expect.objectContaining({type: 'change', target: input}));

        await openPicker();
        expect(getByLabelText('Custom color')).toHaveValue('#abcdef');
    });

    it.each([
        ['#ef4444', false],
        ['', false],
        ['#ef4444', '#654321'],
    ] as const)('respects beforeChange from %s returning %s', async (defaultValue, result) => {
        const beforeChange = vi.fn(async () => result);
        const onChange = vi.fn();
        render(<ColorPicker custom defaultValue={defaultValue} beforeChange={beforeChange} onChange={onChange} />);
        const pop = await openPicker();
        const input = pop.querySelector('input[type="color"]')!;

        fireEvent.change(input, {target: {value: '#123456'}});
        await flushPicker();

        expect(beforeChange).toHaveBeenCalledExactlyOnceWith('#123456', defaultValue);
        if (result === false) {
            expect(onChange).not.toHaveBeenCalled();
            expect(pop).toBeInTheDocument();
            expect((document.querySelector('.color-picker') as HTMLElement).style.color).toBe(defaultValue ? 'rgb(239, 68, 68)' : '');
            expect(input).toHaveValue(defaultValue || '#000000');
            expect((pop.querySelector('.color-input') as HTMLElement).style.getPropertyValue('--color-input-value')).toBe(defaultValue);
        } else {
            expect(onChange).toHaveBeenCalledExactlyOnceWith(result, '#ef4444');
            await vi.waitFor(async () => {
                await flushPicker();
                expect(pop).not.toBeInTheDocument();
            });
            expect(document.querySelector('.color-picker')).toHaveStyle({color: result});
        }
    });
});
