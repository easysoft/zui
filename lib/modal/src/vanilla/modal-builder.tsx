import {render} from 'preact';
import {nanoid} from 'nanoid';
import {Modal} from './modal';
import {ModalBuilderOptions, ModalDialogOptions, ModalCustomBuilder, ModalAjaxBuilder} from '../types';
import {setAttr, setClass} from '@zui/com-helpers/src/helpers/element-helper';
import {ModalDialog} from '../component';
import {ModalIframeContent} from '../component/modal-iframe-content';

type ModalDialogHTML = [html: string];

type ModalBuilderFunction = (element: HTMLElement, options: ModalBuilderOptions) => Promise<ModalDialogOptions | ModalDialogHTML | boolean | undefined>;

function buildCustomModal(_element: HTMLElement, options: ModalCustomBuilder): ModalDialogOptions | boolean | undefined {
    const {custom, title, content} = options;
    return {
        body: content,
        title,
        ...(typeof custom === 'function' ? custom() : custom),
    };
}

async function buildAjaxModal(_element: HTMLElement, options: ModalAjaxBuilder): Promise<ModalDialogOptions | ModalDialogHTML | boolean | undefined> {
    const {dataType, url, request, custom, title} = options;
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
    if (options.replace !== false && dataType === 'html') {
        return [text];
    }
    return {
        title,
        ...custom,
        body: dataType === 'html' ? (
            <div className="modal-body" dangerouslySetInnerHTML={{__html: text}}></div>
        ) : text,
    };
}

async function buildIframeModal(_element: HTMLElement, options: ModalAjaxBuilder): Promise<ModalDialogOptions | boolean | undefined> {
    const {url, custom, title} = options;
    return {
        title,
        ...custom,
        body: <ModalIframeContent url={url} />,
    };
}

const builders: Record<string, ModalBuilderFunction> = {
    custom: buildCustomModal as ModalBuilderFunction,
    ajax: buildAjaxModal as ModalBuilderFunction,
    iframe: buildIframeModal as ModalBuilderFunction,
};

export class ModalBuilder<T extends ModalBuilderOptions = ModalBuilderOptions> extends Modal<T> {
    static LOADING_CLASS = 'loading';

    static DEFAULT = {
        ...Modal.DEFAULT,
        loadTimeout: 10000,
    } as Partial<ModalBuilderOptions>;

    #modal?: HTMLElement;

    #id?: string;

    #loadingTimer?: number;

    get id() {
        return this.#id as string;
    }

    get loading() {
        return this.modalElement.classList.contains(ModalBuilder.LOADING_CLASS);
    }

    get modalElement() {
        let modal: HTMLElement | null | undefined = this.#modal;
        if (!modal) {
            const {id} = this;
            modal = this.element.querySelector<HTMLElement>(`#${id}`);
            if (!modal) {
                modal = document.createElement('div');
                setAttr(modal, {
                    id,
                    style: this.options.style,
                });
                setClass(modal, ['modal modal-async', this.options.className]);
                this.element.appendChild(modal);
            }
            this.#modal = modal;
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
        modalElement.classList.add(ModalBuilder.LOADING_CLASS);

        await this.#renderLoading();

        if (loadTimeout) {
            this.#loadingTimer = window.setTimeout(() => {
                this.#loadingTimer = 0;
                this.#renderLoadFail(this.options.timeoutTip);
            }, loadTimeout);
        }

        const result = await build(modalElement, options);

        if (result === false) {
            await this.#renderLoadFail(this.options.failedTip);
        } else if (result && typeof result === 'object') {
            await this.#renderDialog(result);
        }

        if (this.#loadingTimer) {
            clearTimeout(this.#loadingTimer);
            this.#loadingTimer = 0;
        }

        modalElement.classList.remove(ModalBuilder.LOADING_CLASS);

        return true;
    }
}
