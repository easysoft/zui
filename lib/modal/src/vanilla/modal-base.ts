import {$, JSX} from '@zui/core';
import {Component} from '@zui/core';
import type {ModalBaseOptions, ModalEvents, ModalPositionSetting, ModalSizeSetting} from '../types';

const CLASS_SHOW = 'show';

const CLASS_SHOWN = 'in';

const DISMISS_SELECTOR = '[data-dismiss="modal"]';

export class ModalBase<T extends ModalBaseOptions = ModalBaseOptions> extends Component<T, ModalEvents, HTMLElement> {
    static NAME = 'Modal';

    static MULTI_INSTANCE = true;

    static DEFAULT: Partial<ModalBaseOptions> = {
        position: 'fit',
        show: true,
        keyboard: true,
        animation: true,
        backdrop: true,
        responsive: true,
        transTime: 300,
    };

    static zIndex = 2000;

    #transitionTimer = 0;

    #rob?: ResizeObserver;

    #lastDialogSize?: [width: number, height: number];

    get modalElement() {
        return this.element;
    }

    get shown() {
        return this.modalElement.classList.contains(CLASS_SHOW);
    }

    get dialog(): HTMLElement | null {
        return this.modalElement.querySelector('.modal-dialog');
    }

    get rob() {
        return this.#rob;
    }

    protected _observeResize() {
        if (!this.options.responsive) {
            return;
        }
        if (typeof ResizeObserver !== 'undefined') {
            this.#rob?.disconnect();
            const {dialog} = this;
            if (dialog) {
                const rob = new ResizeObserver(() => {
                    if (!this.shown) {
                        return;
                    }
                    const width = dialog.clientWidth;
                    const height = dialog.clientHeight;
                    const [lastWidth, lastHeight] = this.#lastDialogSize || [];
                    if (lastWidth !== width || lastHeight !== height) {
                        this.#lastDialogSize = [width, height];
                        this.layout();
                    }
                });
                rob.observe(dialog);
                this.#rob = rob;
            }
        }
    }

    afterInit() {
        this.on('click', this.#handleClick);
        if (this.options.show) {
            this.show();
        }

        this._observeResize();
    }

    destroy(): void {
        super.destroy();
        this.#rob?.disconnect();
        this.#rob = undefined;
    }

    show(options?: Partial<T>) {
        const {modalElement} = this;
        if (this.shown) {
            $(modalElement).css('z-index', `${ModalBase.zIndex++}`);
            return false;
        }

        this.setOptions(options);
        const {animation, backdrop, className, style} = this.options;
        $(modalElement).setClass({
            'modal-trans': animation,
            'modal-no-backdrop': !backdrop,
        }, CLASS_SHOW, className).css({
            zIndex: `${ModalBase.zIndex++}`,
            ...style,
        });


        this.layout();
        this.emit('show');

        this.#resetTransTimer(() => {
            $(modalElement).addClass(CLASS_SHOWN);
            this.#resetTransTimer(() => {
                this.emit('shown');
            });
        }, 50);
        return true;
    }

    hide() {
        if (!this.shown) {
            return false;
        }

        $(this.modalElement).removeClass(CLASS_SHOWN);
        this.emit('hide');

        this.#resetTransTimer(() => {
            $(this.modalElement).removeClass(CLASS_SHOW);
            this.emit('hidden');
        });
        return true;
    }

    layout(position?: ModalPositionSetting, size?: ModalSizeSetting) {
        if (!this.shown) {
            return;
        }

        const {dialog} = this;
        if (!dialog) {
            return;
        }

        const $dialog = $(dialog);
        size = size ?? this.options.size;
        if (size) {
            $dialog.removeAttr('data-size');
            const sizeStyle: Record<string, number | string> = {width: '', height: ''};
            if (typeof size === 'object') {
                sizeStyle.width = size.width;
                sizeStyle.height = size.height;
            } else if (typeof size === 'string' && ['md', 'sm', 'lg', 'full'].includes(size)) {
                $dialog.attr('data-size', size);
            } else if (size) {
                sizeStyle.width = size;
            }
            $dialog.css(sizeStyle);
        }

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

        $dialog.css(style);
        $(this.modalElement).css('justifyContent', style.left ? 'flex-start' : 'center');
    }

    #handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const modal = target.closest('.modal');
        if (!modal || modal !== this.modalElement) {
            return;
        }
        if (target.closest(DISMISS_SELECTOR) || (this.options.backdrop === true && target === modal)) {
            event.stopPropagation();
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

    static hide(target?: HTMLDivElement | string) {
        ModalBase.query(target)?.hide();
    }

    static show(target?: HTMLDivElement | string) {
        ModalBase.query(target)?.show();
    }
}

$(window).on('resize.modal.zui', () => {
    ModalBase.getAll().forEach((modal) => {
        const m = (modal as ModalBase);
        if (m.shown && m.options.responsive) {
            m.layout();
        }
    });
});

$(document).on('to-hide.modal.zui', (_: Event, data?: {target?: HTMLDivElement | string}) => {
    ModalBase.hide(data?.target);
});
