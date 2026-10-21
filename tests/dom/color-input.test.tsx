import {createRef} from 'preact';
import {fireEvent, render} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {ColorInput} from '@zui/color-picker/react';

describe('ColorInput empty values', () => {
    it.each([{}, {defaultValue: ''}, {value: '', defaultValue: '#123456'}])('keeps an empty value and form field for %j', (options) => {
        const ref = createRef<ColorInput>();
        const onChange = vi.fn();
        const {container, getByLabelText} = render(
            <form>
                <ColorInput {...options} ref={ref} name="accent" hint="Accent color" onChange={onChange} />
            </form>,
        );

        expect(ref.current?.value).toBe('');
        expect(container.querySelector('.color-input')).toHaveClass('is-empty');
        expect(new FormData(container.querySelector('form')!).getAll('accent')).toEqual(['']);
        expect(container.querySelector('label')).toHaveAttribute('for', getByLabelText('Accent color').id);
        expect(onChange).not.toHaveBeenCalled();
    });

    it('previews and commits a selected color from an empty value', () => {
        const onChange = vi.fn();
        const ref = createRef<ColorInput>();
        const {container, getByLabelText} = render(
            <form>
                <ColorInput ref={ref} name="accent" hint="Accent color" onChange={onChange} />
            </form>,
        );
        const input = getByLabelText('Accent color');

        fireEvent.input(input, {target: {value: '#123456'}});
        expect(ref.current?.value).toBe('#123456');
        expect(container.querySelector('.color-input')).not.toHaveClass('is-empty');
        expect(container.querySelector<HTMLElement>('.color-input')?.style.getPropertyValue('--color-input-value')).toBe('#123456');
        expect(new FormData(container.querySelector('form')!).getAll('accent')).toEqual(['#123456']);
        expect(onChange).not.toHaveBeenCalled();

        fireEvent.change(input);
        expect(onChange).toHaveBeenCalledExactlyOnceWith('#123456', expect.objectContaining({type: 'change', target: input}));
    });

    it('updates controlled colors and restores an empty value without emitting change', () => {
        const onChange = vi.fn();
        const ref = createRef<ColorInput>();
        const field = (value: string) => <form><ColorInput ref={ref} name="accent" hint="Accent color" value={value} onChange={onChange} /></form>;
        const {container, getByLabelText, rerender} = render(field('#123456'));
        expect(getByLabelText('Accent color')).toHaveValue('#123456');

        rerender(field(''));
        expect(ref.current?.value).toBe('');
        expect(container.querySelector('.color-input')).toHaveClass('is-empty');
        expect(container.querySelector<HTMLElement>('.color-input')?.style.getPropertyValue('--color-input-value')).toBe('');
        expect(new FormData(container.querySelector('form')!).getAll('accent')).toEqual(['']);

        rerender(field('#000000'));
        expect(container.querySelector('.color-input')).not.toHaveClass('is-empty');
        expect(container.querySelector<HTMLElement>('.color-input')?.style.getPropertyValue('--color-input-value')).toBe('#000000');
        expect(new FormData(container.querySelector('form')!).getAll('accent')).toEqual(['#000000']);
        expect(onChange).not.toHaveBeenCalled();
    });
});
