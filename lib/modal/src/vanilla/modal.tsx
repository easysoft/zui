import {render} from 'preact';
import {delay, i18n, $, nextGid, HtmlContent, classes} from '@zui/core';
import {ModalBase} from './modal-base';
import {ModalOptions, ModalDialogOptions, ModalCustomOptions, ModalAjaxOptions, ModalAlertOptions, ModalTypedOptions, ModalConfirmOptions} from '../types';
import {ModalDialog} from '../component';
import {ModalIframeContent} from '../component/modal-iframe-content';

import type {ToolbarOptions, ToolbarItemOptions} from '@zui/toolbar';

type ModalDialogHTML = [html: string];

type ModalBuildFunction = (this: Modal, element: HTMLElement, options: ModalOptions) => Promise<ModalDialogOptions | ModalDialogHTML | boolean | undefined>;

function buildCustomModal(this: Modal, _element: HTMLElement, options: ModalCustomOptions): ModalDialogOptions | boolean | undefined {
    const {custom, title, content} = options;
    return {
        body: content,
        title,
        ...(typeof custom === 'function' ? custom() : custom),
    };
}

async function buildAjaxModal(this: Modal, _element: HTMLElement, options: ModalAjaxOptions): Promise<ModalDialogOptions | ModalDialogHTML | boolean | undefined> {
    const {dataType = 'html', url, request, custom, title, replace = true, executeScript = true} = options;
    const text = await $.ajax({
        url,
        headers: {
            'X-ZUI-Modal': 'true',
        },
        ...request,
    }) as string;
    if (dataType !== 'html') {
        try {
            const data = JSON.parse(text);
            return {
                title,
                ...custom,
                ...data,
            };
        // eslint-disable-next-line no-empty
        } catch (_) {}
    }
    if (replace !== false && dataType === 'html') {
        return [text];
    }
    return {
        title,
        ...custom,
        body: dataType === 'html' ? (
            <HtmlContent className="modal-body" html={text} executeScript={executeScript} />
        ) : text,
    };
}

async function buildIframeModal(this: Modal, _element: HTMLElement, options: ModalAjaxOptions): Promise<ModalDialogOptions | boolean | undefined> {
    const {url, custom, title, size} = options;
    const hasHeight = typeof size === 'object' && typeof size.height === 'number';
    return {
        title,
        ...custom,
        body: <ModalIframeContent url={url} watchHeight={!hasHeight} />,
    };
}

const builders: Record<string, ModalBuildFunction> = {
    custom: buildCustomModal as ModalBuildFunction,
    ajax: buildAjaxModal as ModalBuildFunction,
    iframe: buildIframeModal as ModalBuildFunction,
};

const LOADING_CLASS = 'loading';

export class Modal<T extends ModalOptions = ModalOptions> extends ModalBase<T> {
    static DEFAULT = {
        ...ModalBase.DEFAULT,
        loadTimeout: 10000,
        destoryOnHide: true,
    } as Partial<ModalOptions>;

    #modal?: HTMLElement;

    #id?: string;

    #loadingTimer?: number;

    get id() {
        return this.#id as string;
    }

    get loading() {
        return this.#modal?.classList.contains(LOADING_CLASS);
    }

    get shown() {
        return !!this.#modal?.classList.contains('show');
    }

    get modalElement() {
        let modal = this.#modal;
        if (!modal) {
            const {options} = this;
            let id = this.#id;
            if (!id) {
                id = options.id || `modal-${nextGid()}`;
                this.#id = id;
            }
            const {$element} = this;
            modal = $element.find(`#${id}`)[0];
            if (!modal) {
                const key = this.key as string;
                modal = $('<div>')
                    .attr({
                        id,
                        'data-key': key,
                    })
                    .data(this.constructor.KEY, this)
                    .css(options.style || {})
                    .setClass('modal modal-async load-indicator', options.className)
                    .appendTo($element)[0];
            }
            this.#modal = modal!;
        }
        return modal!;
    }

    get $emitter() {
        const modal = this.#modal;
        return modal ? $(modal) : this.$element;
    }

    afterInit() {
        super.afterInit();
        if (this.options.destoryOnHide) {
            this.on('hidden', () => {
                this.destroy();
            });
        }
    }

    show(options?: Partial<T>) {
        if (super.show(options)) {
            this.buildDialog();
            return true;
        }
        return false;
    }

    destroy() {
        super.destroy();
        const modal = this.#modal;
        if (modal) {
            $(modal).removeData(this.constructor.KEY).remove();
            this.#modal = undefined;
        }
    }

    render(options?: Partial<T>) {
        super.render(options);
        return this.buildDialog();
    }

    #renderDialog(dialogOptions: ModalDialogOptions | ModalDialogHTML): Promise<void> {
        return new Promise((resolve) => {
            if (Array.isArray(dialogOptions)) {
                $(this.modalElement).html(dialogOptions[0]);
                this.layout();
                this._observeResize();
                return resolve();
            }
            const {afterRender, ...others} = dialogOptions;
            dialogOptions = {
                afterRender: (info) => {
                    this.layout();
                    afterRender?.(info);
                    this._observeResize();
                    resolve();
                },
                ...others,
            };
            render(
                <ModalDialog {...dialogOptions} />,
                this.modalElement,
            );
        });
    }

    #renderLoadFail(failedTip?: string) {
        if (!failedTip) {
            return;
        }
        return this.#renderDialog({
            body: (
                <div className="modal-load-failed">
                    {failedTip}
                </div>
            ),
        });
    }

    async buildDialog() {
        if (this.loading) {
            return false;
        }


        if (this.#loadingTimer) {
            clearTimeout(this.#loadingTimer);
        }

        const {modalElement, options} = this;
        const $modal = $(modalElement);
        const {type, loadTimeout, loadingText = null} = options;
        const build = builders[type];

        if (!build) {
            console.warn(`Modal: Cannot build modal with type "${type}"`);
            return false;
        }
        $modal.attr('data-loading', loadingText).addClass(LOADING_CLASS);

        if (loadTimeout) {
            this.#loadingTimer = window.setTimeout(() => {
                this.#loadingTimer = 0;
                this.#renderLoadFail(this.options.timeoutTip);
            }, loadTimeout);
        }

        const result = await build.call(this, modalElement, options);

        if (result === false) {
            await this.#renderLoadFail(this.options.failedTip);
        } else if (result && typeof result === 'object') {
            await this.#renderDialog(result);
        }

        if (this.#loadingTimer) {
            clearTimeout(this.#loadingTimer);
            this.#loadingTimer = 0;
        }

        this.layout();

        await delay(100);

        $modal.removeClass(LOADING_CLASS);

        return true;
    }

    static open(options: ModalTypedOptions & {container?: string | HTMLElement}): Promise<Modal> {
        return new Promise((resolve) => {
            const {container = document.body, ...others} = options;
            const modalOptions = {show: true, ...others} as ModalOptions;
            if (!modalOptions.type && modalOptions.url) {
                modalOptions.type = 'ajax';
            }
            if (modalOptions.key === undefined) {
                modalOptions.key = modalOptions.id;
            }
            const modal = Modal.ensure(container, modalOptions);
            const namespace = `${Modal.NAMESPACE}.open${nextGid()}`;
            modal.on(`hidden${namespace}`, () => {
                modal.off(namespace);
                resolve(modal);
            });
            modal.show();
        });
    }

    static async alert(options: string | ModalAlertOptions): Promise<string | undefined> {
        if (typeof options === 'string') {
            options = {message: options} as ModalAlertOptions;
        }
        const {type, message, icon, iconClass = 'icon-lg muted', actions = 'confirm', onClickAction, custom, key = '__alert', ...otherOptions} = options;
        const customOptions = (typeof custom === 'function' ? custom() : custom) || {};
        let content = typeof message === 'object' && message.html ? <div dangerouslySetInnerHTML={{__html: message.html}}></div> : (<div>{message}</div>);
        if (icon) {
            content = (
                <div className={classes('modal-body row gap-4 items-center', customOptions.bodyClass)}>
                    <div className={`icon ${icon} ${iconClass}`} />
                    {content}
                </div>
            );
        } else {
            content = <div className={classes('modal-body', customOptions.bodyClass)}>{content}</div>;
        }
        const actionItems: ToolbarItemOptions[] = [];
        (Array.isArray(actions) ? actions : [actions]).forEach((item) => {
            item = {
                ...(typeof item === 'string' ? {key: item} : item),
            } as ToolbarItemOptions;
            if (typeof item.key === 'string') {
                if (!item.text) {
                    item.text = i18n.getLang(item.key, item.key);
                }
                if (!item.btnType) {
                    item.btnType = `btn-wide ${item.key === 'confirm' ? 'primary' : 'btn-default'}`;
                }
            }

            if (item) {
                actionItems.push(item);
            }
        }, []);
        let result: string | undefined;
        const footerActions: ToolbarOptions | undefined = actionItems.length ? {
            gap: 4,
            items: actionItems,
            onClickItem: ({item, event}) => {
                const modal = Modal.query(event.target as HTMLDivElement, key) as Modal;
                result = item.key as string;
                const actionResult = onClickAction?.(item, modal);
                if (actionResult !== false && modal) {
                    modal.hide();
                }
            },
        } : undefined;

        await Modal.open({
            key,
            type: 'custom',
            size: 400,
            className: 'modal-alert',
            content,
            backdrop: 'static',
            hideOthersOnShow: false,
            custom: {footerActions, ...customOptions},
            ...otherOptions,
        });
        return result;
    }

    static async confirm(options: string | ModalConfirmOptions): Promise<boolean> {
        if (typeof options === 'string') {
            options = {message: options} as ModalConfirmOptions;
        }
        const {onClickAction, onResult, ...otherOptions} = options;
        const result = await Modal.alert({
            actions: ['confirm', 'cancel'],
            onClickAction: (item, modal) => {
                onResult?.(item.key === 'confirm', modal);
                onClickAction?.(item, modal);
            },
            ...otherOptions,
        });
        return result === 'confirm';
    }
}
