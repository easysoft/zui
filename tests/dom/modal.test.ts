// @vitest-environment jsdom

import {describe, expect, it, vi} from 'vitest';
import {ModalBase} from '@zui/modal/src/vanilla/modal-base';
import {flushAnimationFrame} from '../setup/dom';

function createModal(options: {keyboard?: boolean; responsive?: boolean; show?: boolean} = {}) {
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.textContent = 'Open modal';

    const element = document.createElement('div');
    element.className = 'modal';
    element.innerHTML = `
        <div class="modal-dialog">
            <button type="button" data-dismiss="modal">Close</button>
        </div>
    `;
    document.body.append(trigger, element);

    const modal = new ModalBase(element, {
        animation: false,
        keyboard: options.keyboard ?? true,
        responsive: options.responsive ?? false,
        show: options.show ?? false,
    });
    return {element, modal, trigger};
}

describe('ModalBase keyboard and focus contracts', () => {
    it('does not reopen a modal dismissed before deferred initialization', async () => {
        const {element, modal, trigger} = createModal({show: true});
        trigger.focus();
        modal.show();
        modal.hide();

        await flushAnimationFrame();

        expect(modal.shown).toBe(false);
        expect(element).not.toHaveClass('show');
        expect(trigger).toHaveFocus();
    });

    it('still opens an untouched modal during deferred initialization', async () => {
        const {element, modal} = createModal({show: true});

        await flushAnimationFrame();

        expect(modal.shown).toBe(true);
        expect(element).toHaveClass('show');
    });

    it('observes resizing when opened before deferred initialization', async () => {
        const observe = vi.fn();
        vi.stubGlobal('ResizeObserver', class {
            observe = observe;
            disconnect = vi.fn();
        });
        const {modal} = createModal({responsive: true, show: true});
        modal.show();

        await flushAnimationFrame();

        expect(observe).toHaveBeenCalledWith(modal.dialog);
    });

    it('closes the topmost keyboard-enabled modal with Escape and restores focus', async () => {
        const {element, modal, trigger} = createModal();
        trigger.focus();
        await flushAnimationFrame();

        modal.show();
        element.querySelector<HTMLButtonElement>('[data-dismiss="modal"]')!.focus();
        document.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, key: 'Escape'}));

        expect(modal.shown).toBe(false);
        expect(element).not.toHaveClass('show');
        expect(trigger).toHaveFocus();
    });

    it('does not close the topmost modal when keyboard dismissal is disabled', async () => {
        const {modal, trigger} = createModal({keyboard: false});
        trigger.focus();
        await flushAnimationFrame();

        modal.show();
        document.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, key: 'Escape'}));

        expect(modal.shown).toBe(true);
    });

    it('closes the most recently shown modal when creation order differs from stacking order', async () => {
        const first = createModal();
        const second = createModal();
        await flushAnimationFrame();

        second.modal.show();
        first.modal.show();
        expect(Number(first.element.style.zIndex)).toBeGreaterThan(Number(second.element.style.zIndex));

        document.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, key: 'Escape'}));

        expect(first.modal.shown).toBe(false);
        expect(second.modal.shown).toBe(true);
        expect(second.element).not.toHaveClass('modal-hide');
    });
});
