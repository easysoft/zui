import type {JSX} from 'preact';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {setClass, setStyle} from '@zui/com-helpers/src/helpers/element-helper';
import type {ModalOptions, ModalEvents, ModalPositionSetting} from '../types';

export class Modal extends ComponentBase<ModalOptions, ModalEvents, HTMLElement> {
    static NAME = 'modal';

    static EVENTS = true;

    static DEFAULT = {
        position: 'fit',
        show: true,
        keyboard: true,
        animation: true,
        backdrop: true,
        responsive: true,
        transTime: 300,
    } as Partial<ModalOptions>;

    static CLASS_SHOW = 'show';

    static CLASS_SHOWN = 'in';

    static DISMISS_SELECTOR = '[data-dismiss="modal"]';

    static zIndex = 2000;

    #transitionTimer = 0;

    #rob?: ResizeObserver;

    get isShown() {
        return this.element.classList.contains(Modal.CLASS_SHOW);
    }

    get dialog(): HTMLElement | null {
        return this.element.querySelector('.modal-dialog');
    }

    init() {
        this.on('click', this._handleClick);

        if (this.options.responsive) {
            if (typeof ResizeObserver !== 'undefined') {
                const {dialog} = this;
                if (dialog) {
                    const rob = new ResizeObserver(this.adjustPosition.bind(this, undefined));
                    rob.observe(dialog);
                    this.#rob = rob;
                }
            }
        }

        if (this.options.show) {
            requestAnimationFrame(() => this.show());
        }
    }

    destroy(): void {
        super.destroy();
        this.#rob?.disconnect();
    }

    show() {
        console.log('show', this._handleClick);
        if (this.isShown) {
            return;
        }

        const {animation, backdrop} = this.options;
        setClass(this.element, [{
            'modal-trans': animation,
            'modal-no-backdrop': !backdrop,
        }, Modal.CLASS_SHOW]);
        this.element.style.zIndex = `${Modal.zIndex++}`;

        this.adjustPosition();
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

    adjustPosition(position?: ModalPositionSetting) {
        position = position || this.options.position || 'fit';

        const {dialog} = this;
        if (!dialog) {
            return;
        }
        const {width, height} = dialog.getBoundingClientRect();
        if (typeof position === 'function') {
            position = position({width, height});
        }

        const style: JSX.CSSProperties = {
            top: null,
            left: null,
            bottom: null,
            right: null,
            width: null,
            height: null,
            alignSelf: 'center',
        };

        if (typeof position === 'number') {
            style.alignSelf = 'flex-start';
            style.top = position;
        } else if (typeof position === 'object' && position) {
            style.alignSelf = 'flex-start';
            Object.assign(style, position);
        } else if (position === 'fit') {
            style.alignSelf = 'flex-start';
            style.top = `${Math.max(0, Math.floor((window.innerHeight - height) / 3))}px`;
        } else if (position === 'bottom') {
            style.alignSelf = 'flex-end';
        } else if (position === 'top') {
            style.alignSelf = 'flex-start';
        }

        setStyle(dialog, style);
        setStyle(this.element, 'justifyContent', style.left ? 'flex-start' : 'center');
    }

    _handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest(Modal.DISMISS_SELECTOR) || (this.options.backdrop === true && !target.closest('.modal-dialog') && target.closest('.modal'))) {
            this.hide();
            return;
        }
    };

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

window.addEventListener('resize', () => {
    Modal.all.forEach((modal) => {
        const m = (modal as Modal);
        if (m.isShown && m.options.responsive) {
            m.adjustPosition();
        }
    });
});
