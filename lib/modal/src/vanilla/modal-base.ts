import {$, JSX} from '@zui/core';
import {Component} from '@zui/core';
import type {ModalBaseOptions, ModalEvents, ModalPositionSetting, ModalSizeSetting} from '../types';

const CLASS_SHOW = 'show';

const CLASS_SHOWN = 'in';

const DISMISS_SELECTOR = '[data-dismiss="modal"]';

const HIDE_CLASS = 'modal-hide';

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

    static hideOthers = true;

    static get SELECTOR() {
        return '.modal';
    }

    static zIndex = 1500;

    protected _timer = 0;

    protected _rob?: ResizeObserver;

    protected _lastDialogSize?: [width: number, height: number];

    protected declare _shown: boolean;

    get modalElement() {
        return this.element;
    }

    get shown() {
        return this._shown;
    }

    get dialog(): HTMLElement | null {
        return this.modalElement.querySelector('.modal-dialog');
    }

    get rob() {
        return this._rob;
    }

    protected _observeResize() {
        if (!this.options.responsive) {
            return;
        }
        if (typeof ResizeObserver !== 'undefined') {
            this._rob?.disconnect();
            const {dialog} = this;
            if (dialog) {
                const rob = new ResizeObserver(() => {
                    if (!this._shown) {
                        return;
                    }
                    const width = dialog.clientWidth;
                    const height = dialog.clientHeight;
                    const [lastWidth, lastHeight] = this._lastDialogSize || [];
                    if (lastWidth !== width || lastHeight !== height) {
                        this._lastDialogSize = [width, height];
                        this.layout();
                    }
                });
                rob.observe(dialog);
                this._rob = rob;
            }
        }
    }

    afterInit() {
        this.on('click', this._handleClick);
        if (this.options.show) {
            this.show();
        }

        this._observeResize();

        this.on('hidden', (event) => {
            const {modalElement} = this;
            if (!modalElement.parentNode) {
                return this.destroy();
            }
            if ((event.target as HTMLElement).closest('.modal') === modalElement && !ModalBase.getAll().some((modal) => modal.shown)) {
                $('html').enableScroll();
            }
        });
        this.on('show', (event) => {
            const {modalElement} = this;
            if (!modalElement.parentNode) {
                return this.destroy();
            }
            if ((event.target as HTMLElement).closest('.modal') === modalElement) {
                $('html').disableScroll();
            }
        });
        if (this.shown) {
            $('html').disableScroll();
        }
    }

    destroy(): void {
        super.destroy();
        if (this._rob) {
            this._rob.disconnect();
            this._rob = undefined;
        }
    }

    show(options?: Partial<T>) {
        const {modalElement} = this;
        const $modal = $(modalElement);
        if (this._shown && $modal.hasClass(CLASS_SHOWN)) {
            $modal.removeClass(HIDE_CLASS).css('z-index', `${ModalBase.zIndex++}`);
            return false;
        }

        this._shown = true;
        this.setOptions(options);
        const {animation, backdrop, className, style} = this.options;
        $modal.setClass({
            'modal-trans': animation,
            'modal-no-backdrop': !backdrop,
            [HIDE_CLASS]: false,
        }, CLASS_SHOW, className).css({
            zIndex: `${ModalBase.zIndex++}`,
            ...style,
        });

        /* Hide other shown modals. */
        const constructor = this.constructor as typeof ModalBase;
        if (constructor.hideOthers && this.options.hideOthers !== false) {
            constructor.getAll().forEach((modal) => {
                if (modal !== this && modal.shown && !$modal.closest(modal.modalElement).length) {
                    modal.hideForOther();
                }
            });
        }

        if (this.options.closeOthers) {
            constructor.getAll().forEach((modal) => {
                if (modal !== this && !$modal.closest(modal.modalElement).length) {
                    modal.hide();
                }
            });
        }

        this.layout();
        this.options.onShow?.call(this);
        this.emit('show');

        this._setTimer(() => {
            $modal.addClass(CLASS_SHOWN);
            this._setTimer(() => {
                $modal.find('[autofocus]')[0]?.focus();
                this.options.onShown?.call(this);
                this.emit('shown');
            });
        }, 50);
        return true;
    }

    hideForOther() {
        $(this.modalElement).addClass(HIDE_CLASS);
    }

    hide() {
        if (!this._shown) {
            return false;
        }

        this._shown = false;
        $(this.modalElement).removeClass(CLASS_SHOWN);
        this.options.onHide?.call(this);
        this.emit('hide');

        this._setTimer(() => {
            $(this.modalElement).removeClass(CLASS_SHOW);
            this.options.onHidden?.call(this);
            this.emit('hidden');
        });

        /* Show other hidden modals. */
        const constructor = this.constructor as typeof ModalBase;
        if (constructor.hideOthers && this.options.hideOthers !== false) {
            constructor.getAll().forEach(x => {
                if (x.shown && x !== this) {
                    $(x.modalElement).removeClass(HIDE_CLASS);
                }
            });
        }
        return true;
    }

    layout(position?: ModalPositionSetting, size?: ModalSizeSetting) {
        if (!this._shown) {
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
        this._lastDialogSize = [width, height];
        if (typeof position === 'function') {
            position = position({width, height});
        }

        const style: JSX.CSSProperties = {
            left: null,
            bottom: null,
            right: null,
        };
        let top: number | string | null = null;
        let alignSelf: string | number | null | undefined = 'center';
        if (typeof position === 'number') {
            alignSelf = 'flex-start';
            top = position;
        } else if (typeof position === 'object' && position) {
            Object.assign(style, position);
            top = style.top ?? top;
            alignSelf = style.alignSelf ?? 'flex-start';
        } else if (position === 'fit') {
            alignSelf = 'flex-start';
            top = `${Math.max(0, Math.floor((window.innerHeight - height) / 3))}px`;
        } else if (position === 'bottom') {
            alignSelf = 'flex-end';
        } else if (position === 'top') {
            alignSelf = 'flex-start';
        } else if (position !== 'center' && typeof position === 'string') {
            alignSelf = 'flex-start';
            top = position;
        }
        style.top = top;
        style.alignSelf = alignSelf;

        $dialog.css(style);
        $(this.modalElement).css('justifyContent', style.left ? 'flex-start' : 'center');
    }

    protected _handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const modal = target.closest('.modal');
        if (!modal || modal !== this.modalElement) {
            return;
        }
        if (target.closest(DISMISS_SELECTOR) || (this.options.backdrop === true && target === modal)) {
            event.preventDefault();
            this.hide();
        }
    };

    protected _setTimer(callback?: () => void, time?: number) {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = 0;
        }
        if (callback) {
            if (this.options.animation) {
                this._timer = window.setTimeout(callback, time ?? this.options.transTime);
            } else {
                callback();
            }
        }
    }

    static last(target?: HTMLDivElement | string) {
        return ModalBase.query(target, undefined, modal => modal.shown);
    }

    static hide(target?: HTMLDivElement | string) {
        ModalBase.last(target)?.hide();
    }

    static show(target?: HTMLDivElement | string) {
        ModalBase.query(target, undefined, modal => !modal.shown)?.show();
    }
}

$(window).on(`resize.${ModalBase.NAMESPACE}`, () => {
    ModalBase.getAll().forEach((modal) => {
        const m = (modal as ModalBase);
        if (m.shown && m.options.responsive) {
            m.layout();
        }
    });
});
