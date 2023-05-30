import {render} from 'preact';
import {nanoid} from 'nanoid';
import {getLang} from '@zui/core';
import {$, HtmlContent} from '@zui/core';
import {ModalBase} from './modal-base';
import {ModalOptions, ModalDialogOptions, ModalCustomOptions, ModalAjaxOptions, ModalAlertOptions, ModalTypedOptions, ModalConfirmOptions} from '../types';
import type {ToolbarOptions, ToolbarItemProps} from '@zui/toolbar/src/types';
import {ModalDialog} from '../component';
import {ModalIframeContent} from '../component/modal-iframe-content';

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
    const response = await fetch(url, request);
    const text = await response.text();
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
    const {url, custom, title} = options;
    return {
        title,
        ...custom,
        body: <ModalIframeContent url={url} />,
    };
}

const builders: Record<string, ModalBuildFunction> = {
    custom: buildCustomModal as ModalBuildFunction,
    ajax: buildAjaxModal as ModalBuildFunction,
    iframe: buildIframeModal as ModalBuildFunction,
};

export class Modal<T extends ModalOptions = ModalOptions> extends ModalBase<T> {
    static LOADING_CLASS = 'loading';

    static DEFAULT = {
        ...ModalBase.DEFAULT,
        loadTimeout: 10000,
    } as Partial<ModalOptions>;

    #modal?: HTMLElement;

    #id?: string;

    #loadingTimer?: number;

    get id() {
        return this.#id as string;
    }

    get loading() {
        return this.modalElement.classList.contains(Modal.LOADING_CLASS);
    }

    get modalElement() {
        let modal: HTMLElement | null | undefined = this.#modal;
        if (!modal) {
            const {id} = this;
            modal = this.element.querySelector<HTMLElement>(`#${id}`);
            if (!modal) {
                modal = $('<div>').attr('id', id)
                    .css(this.options.style || {})
                    .setClass('modal modal-async', this.options.className)
                    .appendTo(this.element)[0];
            }
            this.#modal = modal!;
        }
        return modal;
    }

    afterInit() {
        super.afterInit();
        this.#id = this.options.id || `modal-${nanoid()}`;
    }

    show(options?: Partial<T>) {
        if (super.show(options)) {
            this.buildDialog();
            return true;
        }
        return false;
    }

    render(options?: Partial<T>) {
        super.render(options);
        this.buildDialog();
    }

    #renderDialog(dialogOptions: ModalDialogOptions | ModalDialogHTML): Promise<void> {
        return new Promise((resolve) => {
            if (Array.isArray(dialogOptions)) {
                this.modalElement.innerHTML = dialogOptions[0];
                $(this.modalElement).runJS();
                return resolve();
            }
            const {afterRender, ...others} = dialogOptions;
            dialogOptions = {
                afterRender: (info) => {
                    this.layout();
                    afterRender?.(info);
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

    #renderLoading() {
        const {loadingText} = this.options;
        return this.#renderDialog({
            body: (
                <div className="modal-loading-indicator">
                    <span className="spinner"></span>
                    {loadingText ? <span className="modal-loading-text">{loadingText}</span> : null}
                </div>
            ),
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
        const {type, loadTimeout} = options;
        const build = builders[type];

        if (!build) {
            console.warn(`Modal: Cannot build modal with type "${type}"`);
            return false;
        }
        modalElement.classList.add(Modal.LOADING_CLASS);

        await this.#renderLoading();

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

        modalElement.classList.remove(Modal.LOADING_CLASS);

        return true;
    }

    static open(options: ModalTypedOptions & {container?: string | HTMLElement}): Promise<Modal> {
        return new Promise((resolve) => {
            const {container = document.body, ...others} = options;
            const modal = new Modal(container, {show: true, ...others} as ModalOptions);
            modal.once('hidden', () => resolve(modal));
            modal.show();
        });
    }

    static alert(options: string | ModalAlertOptions): Promise<string | undefined> {
        if (typeof options === 'string') {
            options = {message: options} as ModalAlertOptions;
        }
        const {type, message, icon, iconClass = 'icon-lg muted', actions = 'confirm', onClickAction, custom, ...otherOptions} = options;
        let content = <div>{message}</div>;
        if (icon) {
            content = (
                <div className="modal-body row gap-4 items-center">
                    <div className={`icon ${icon} ${iconClass}`} />
                    {content}
                </div>
            );
        } else {
            content = <div className="modal-body">{content}</div>;
        }
        const actionItems: ToolbarItemProps[] = [];
        (Array.isArray(actions) ? actions : [actions]).forEach((item) => {
            item = {
                ...(typeof item === 'string' ? {key: item} : item),
            } as ToolbarItemProps;
            if (typeof item.key === 'string') {
                if (!item.text) {
                    item.text = getLang(item.key, item.key);
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
                const modal = Modal.query(event.target as HTMLDivElement) as Modal;
                result = item.key as string;
                const actionResult = onClickAction?.(item, modal);
                if (actionResult !== false && modal) {
                    modal.hide();
                }
            },
        } : undefined;

        return Modal.open({
            type: 'custom',
            size: 400,
            className: 'modal-alert',
            content,
            backdrop: 'static',
            custom: {footerActions, ...(typeof custom === 'function' ? custom() : custom)},
            ...otherOptions,
        }).then(() => result);
    }

    static confirm(options: string | ModalConfirmOptions) {
        if (typeof options === 'string') {
            options = {message: options} as ModalConfirmOptions;
        }
        const {onClickAction, onResult, ...otherOptions} = options;
        return Modal.alert({
            actions: ['confirm', 'cancel'],
            onClickAction: (item, modal) => {
                onResult?.(item.key === 'confirm', modal);
                onClickAction?.(item, modal);
            },
            ...otherOptions,
        }).then((result) => result === 'confirm');
    }
}
