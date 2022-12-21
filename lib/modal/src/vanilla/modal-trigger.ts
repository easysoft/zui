import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import type {ModalTriggerOptions, ModalEvents} from '../types';
import {Modal} from './modal';

export class ModalTrigger extends ComponentBase<ModalTriggerOptions, ModalEvents, HTMLElement> {
    static NAME = 'modalTrigger';

    static EVENTS = true;

    static DEFAULT = {
        ...Modal.DEFAULT,
        type: 'static',
    } as Partial<ModalTriggerOptions>;

    static TOGGLE_SELECTOR = '[data-toggle="modal"]';

    #modal?: Modal;

    get modal() {
        return this.#modal;
    }

    get container() {
        const {container} = this.options;
        if (typeof container === 'string') {
            return document.querySelector(container) as HTMLElement;
        }
        if (container instanceof HTMLElement) {
            return container;
        }
        return document.body;
    }

    show() {
        const modal = this._initModal();
        return modal.show();
    }

    hide() {
        this.#modal?.hide();
    }

    _getModalOptions() {
        const {
            size,
            position,
            backdrop,
            show,
            keyboard,
            moveable,
            animation,
            transTime,
            responsive,
        } = this.options;
        return {
            size,
            position,
            backdrop,
            show,
            keyboard,
            moveable,
            animation,
            transTime,
            responsive,
        };
    }

    _initModal() {
        const options = this._getModalOptions();
        let modal = this.#modal;
        if (modal) {
            modal.setOptions(options);
        } else {
            modal = new Modal(this._getModalElement(), options);
            this.#modal = modal;
        }
        return modal;
    }

    _getModalElement(): HTMLElement {
        if (this.#modal) {
            return this.#modal.element;
        }
        const {type, target} = this.options;
        if (type === 'static') {
            let targetSelector = target;
            if (!targetSelector) {
                const {element} = this;
                if (element.tagName === 'A') {
                    const href = element.getAttribute('href');
                    if (href?.startsWith('#')) {
                        targetSelector = href;
                    }
                }
            }
            return this.container.querySelector<HTMLElement>(targetSelector || '.modal') as HTMLElement;
        }
    }
}

window.addEventListener('click', (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    const toggleBtn = element.closest<HTMLElement>(ModalTrigger.TOGGLE_SELECTOR);
    if (toggleBtn) {
        const modalTrigger = ModalTrigger.ensure(toggleBtn) as ModalTrigger;
        if (modalTrigger) {
            modalTrigger.show();
        }
    }
});
