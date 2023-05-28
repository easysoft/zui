import type {JSX} from 'preact';
import {$} from '@zui/core';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {setAttr, setClass, setStyle} from '@zui/com-helpers/src/helpers/element-helper';
import type {ModalBaseOptions, ModalEvents, ModalPositionSetting, ModalSizeSetting} from '../types';

export class ModalBase<T extends ModalBaseOptions = ModalBaseOptions> extends ComponentBase<T, ModalEvents, HTMLElement> {
    static NAME = 'Modal';

    static EVENTS = true;

    static DEFAULT = {
        position: 'fit',
        show: true,
        keyboard: true,
        animation: true,
        backdrop: true,
        responsive: true,
        transTime: 300,
    } as Partial<ModalBaseOptions>;

    static CLASS_SHOW = 'show';

    static CLASS_SHOWN = 'in';

    static DISMISS_SELECTOR = '[data-dismiss="modal"]';

    static zIndex = 2000;

    #transitionTimer = 0;

    #rob?: ResizeObserver;

    #lastDialogSize?: [width: number, height: number];

    get modalElement() {
        return this.element;
    }

    get isShown() {
        return this.modalElement.classList.contains(ModalBase.CLASS_SHOW);
    }

    get dialog(): HTMLElement | null {
        return this.modalElement.querySelector('.modal-dialog');
    }

    afterInit() {
        this.on('click', this.#handleClick);

        if (this.options.responsive) {
            if (typeof ResizeObserver !== 'undefined') {
                const {dialog} = this;
                if (dialog) {
                    const rob = new ResizeObserver(() => {
                        if (!this.isShown) {
                            return;
                        }
                        const width = dialog.clientWidth;
                        const height = dialog.clientHeight;
                        if (!this.#lastDialogSize || this.#lastDialogSize[0] !== width || this.#lastDialogSize[1] !== height) {
                            this.#lastDialogSize = [width, height];
                            this.layout();
                        }
                    });
                    rob.observe(dialog);
                    this.#rob = rob;
                }
            }
        }

        if (this.options.show) {
            this.show();
        }
    }

    destroy(): void {
        super.destroy();
        this.#rob?.disconnect();
    }

    show(options?: Partial<ModalBaseOptions>) {
        if (this.isShown) {
            return false;
        }

        this.setOptions(options);

        const {modalElement} = this;
        const {animation, backdrop, className, style} = this.options;
        setClass(modalElement, [{
            'modal-trans': animation,
            'modal-no-backdrop': !backdrop,
        }, ModalBase.CLASS_SHOW, className]);
        setStyle(modalElement, {
            zIndex: `${ModalBase.zIndex++}`,
            ...style,
        });

        this.layout();
        this.emit('show', this);

        this.#resetTransTimer(() => {
            modalElement.classList.add(ModalBase.CLASS_SHOWN);
            this.#resetTransTimer(() => {
                this.emit('shown', this);
            });
        }, 50);
        return true;
    }

    hide() {
        if (!this.isShown) {
            return false;
        }

        this.modalElement.classList.remove(ModalBase.CLASS_SHOWN);
        this.emit('hide', this);

        this.#resetTransTimer(() => {
            this.modalElement.classList.remove(ModalBase.CLASS_SHOW);
            this.emit('hidden', this);
        });
        return true;
    }

    layout(position?: ModalPositionSetting, size?: ModalSizeSetting) {
        if (!this.isShown) {
            return;
        }

        const {dialog} = this;
        if (!dialog) {
            return;
        }

        size = size ?? this.options.size;
        setAttr(dialog, 'data-size', null);
        const sizeStyle: JSX.CSSProperties = {width: null, height: null};
        if (typeof size === 'object') {
            sizeStyle.width = size.width;
            sizeStyle.height = size.height;
        } else if (typeof size === 'string' && ['md', 'sm', 'lg', 'full'].includes(size)) {
            setAttr(dialog, 'data-size', size);
        } else if (size) {
            sizeStyle.width = size;
        }
        setStyle(dialog, sizeStyle);

        position = position ?? this.options.position ?? 'fit';
        const width = dialog.clientWidth;
        const height = dialog.clientHeight;
        this.#lastDialogSize = [width, height];
        if (typeof position === 'function') {
            position = position({width, height});
        }

        const style: JSX.CSSProperties = {
            top: null,
            left: null,
            bottom: null,
            right: null,
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
        } else if (position !== 'center' && typeof position === 'string') {
            style.alignSelf = 'flex-start';
            style.top = position;
        }

        setStyle(dialog, style);
        setStyle(this.modalElement, 'justifyContent', style.left ? 'flex-start' : 'center');
    }

    #handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest(ModalBase.DISMISS_SELECTOR) || (this.options.backdrop === true && !target.closest('.modal-dialog') && target.closest('.modal'))) {
            this.hide();
        }
    };

    #resetTransTimer(callback?: () => void, time?: number) {
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

    static query(target?: HTMLDivElement | string): ModalBase | undefined {
        if (target === undefined) {
            target = document.querySelector(`.modal.${ModalBase.CLASS_SHOW}`) as HTMLDivElement;
            return Array.from(ModalBase.getAll().values()).find(x => x.isShown);
        }
        if (typeof target === 'string') {
            target = document.querySelector(target) as HTMLDivElement;
        }
        if (!target) {
            return;
        }
        if (!target.classList.contains('modal')) {
            target = target.closest('.modal') as HTMLDivElement;
        }
        return Array.from(ModalBase.getAll().values()).find(x => x.modalElement === target);
    }

    static hide(target?: HTMLDivElement | string) {
        ModalBase.query(target)?.hide();
    }

    static show(target?: HTMLDivElement | string) {
        ModalBase.query(target)?.show();
    }
}

$(window).on('resize', () => {
    ModalBase.all.forEach((modal) => {
        const m = (modal as ModalBase);
        if (m.isShown && m.options.responsive) {
            m.layout();
        }
    });
});

$(document).on('zui.modal.hide', (_: Event, data?: {target?: HTMLDivElement | string}) => {
    ModalBase.hide(data?.target);
});
