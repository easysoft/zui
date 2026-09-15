import {describe, expect, it, vi} from 'vitest';
import {defineButton} from '@zui/button';

defineButton();

describe('zui-button', () => {
    it('renders and updates the existing button without replacing the host', async () => {
        document.body.innerHTML = '<zui-button text="Save" type="primary"></zui-button>';
        const element = document.querySelector('zui-button')!;
        await element.ready;
        const button = element.querySelector('button')!;
        expect(button).toHaveTextContent('Save');
        expect(button).toHaveClass('btn', 'primary');
        element.text = 'Saved';
        element.type = 'secondary';
        await Promise.resolve();
        expect(element.querySelector('button')).toBe(button);
        expect(button).toHaveTextContent('Saved');
        expect(button).toHaveClass('secondary');
        expect(element.shadowRoot).toBeNull();
    });

    it('delegates native focus and click while respecting disabled and loading states', async () => {
        const element = document.createElement('zui-button');
        element.text = 'Save';
        element.setAttribute('aria-label', 'Save changes');
        document.body.append(element);
        await element.ready;
        const button = element.querySelector('button')!;
        expect(button).toHaveAccessibleName('Save changes');
        const onClick = vi.fn();
        element.addEventListener('click', onClick);
        element.focus();
        expect(document.activeElement).toBe(button);
        element.click();
        expect(onClick).toHaveBeenCalledOnce();
        element.disabled = true;
        await Promise.resolve();
        element.click();
        expect(button).toBeDisabled();
        expect(onClick).toHaveBeenCalledOnce();
        element.disabled = false;
        element.loading = true;
        await Promise.resolve();
        expect(button).toBeDisabled();
    });

    it('uses native submit and external form association', async () => {
        document.body.innerHTML = '<form id="editor"></form><zui-button text="Save" btn-type="submit" form="editor" name="action" value="save"></zui-button>';
        const form = document.querySelector('form')!;
        const element = document.querySelector('zui-button')!;
        await element.ready;
        const button = element.querySelector('button')!;
        const onSubmit = vi.fn((event: Event) => event.preventDefault());
        form.addEventListener('submit', onSubmit);
        expect(button.form).toBe(form);
        element.click();
        expect(onSubmit).toHaveBeenCalledOnce();
        expect(new FormData(form, button).get('action')).toBe('save');
    });
});
