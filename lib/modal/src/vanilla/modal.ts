import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import type {ModalOptions, ModalEvents} from '../types';

export class Modal extends ComponentBase<ModalOptions, ModalEvents, HTMLElement> {
    static NAME = 'modal';

    static EVENTS = true;

    static DEFAULT = {
        position: 'fit',
        show: true,
        keyboard: true,
        animation: true,
        backdrop: true,
        transTime: 300,
    } as Partial<ModalOptions>;

    static CLASS_SHOW = 'show';

    static CLASS_SHOWN = 'in';

    static TOGGLE_SELECTOR = '[data-toggle="modal"]';

    static DISMISS_SELECTOR = '[data-dismiss="modal"]';

    static zIndex = 2000;

    #transitionTimer = 0;

    get isShown() {
        return this.element.classList.contains(Modal.CLASS_SHOW);
    }

    init() {
        this.on('click', this._handleClick.bind(this));
        if (this.options.show) {
            requestAnimationFrame(() => this.show());
        }
    }

    show() {
        if (this.isShown) {
            return;
        }

        this.element.classList.toggle('modal-trans', !!this.options.animation);
        this.element.classList.add(Modal.CLASS_SHOW);
        this.element.style.zIndex = `${Modal.zIndex++}`;
        this.emit('show', this);

        this.#resetTransitionTimer(() => {
            this.element.classList.add(Modal.CLASS_SHOWN);
            this.#resetTransitionTimer(() => {
                this.emit('shown', this);
            });
        }, 50);
    }

    hide() {
        if (!this.isShown) {
            return;
        }

        this.element.classList.remove(Modal.CLASS_SHOWN);
        this.emit('hide', this);

        this.#resetTransitionTimer(() => {
            this.element.classList.remove(Modal.CLASS_SHOW);
            this.emit('hidden', this);
        });
    }

    _handleClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (target.closest(Modal.DISMISS_SELECTOR) || (this.options.backdrop === true && target.closest('.modal'))) {
            this.hide();
            return;
        }
    }

    #resetTransitionTimer(callback?: () => void, time?: number) {
        if (this.#transitionTimer) {
            clearTimeout(this.#transitionTimer);
            this.#transitionTimer = 0;
        }
        if (callback) {
            if (this.options.animation) {
                this.#transitionTimer = window.setTimeout(callback, time ?? this.options.transTime);
            } else {
                callback();
            }
        }
    }
}
