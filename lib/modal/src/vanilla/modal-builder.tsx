import {render} from 'preact';
import {nanoid} from 'nanoid';
import {Modal} from './modal';
import {ModalBuilderOptions, ModalDialogOptions, ModalCustomBuilder, ModalAjaxBuilder} from '../types';
import {setAttr, setClass} from '@zui/com-helpers/src/helpers/element-helper';
import {ModalDialog} from '../component';
import {ModalIframeContent} from '../component/modal-iframe-content';

type ModalBuilderFunction = (element: HTMLElement, options: ModalBuilderOptions) => Promise<ModalDialogOptions | boolean | undefined>;

function buildCustomModal(_element: HTMLElement, options: ModalCustomBuilder): ModalDialogOptions | boolean | undefined {
    const {custom} = options;
    if (typeof custom === 'function') {
        return custom();
    }
    return custom;
}

async function buildAjaxModal(element: HTMLElement, options: ModalAjaxBuilder): Promise<ModalDialogOptions | boolean | undefined> {
    const {dataType = 'html', url, request, custom} = options;
    const response = await fetch(url, request);
    const text = await response.text();
    if (dataType !== 'html') {
        try {
            const data = JSON.parse(text);
            return {
                ...custom,
                ...data,
            };
        // eslint-disable-next-line no-empty
        } catch (_) {}
    }
    element.innerHTML = text;
    return true;
}

async function buildIframeModal(_element: HTMLElement, options: ModalAjaxBuilder): Promise<ModalDialogOptions | boolean | undefined> {
    const {url, custom} = options;
    return {
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

    #modal?: HTMLElement;

    #id?: string;

    #loadingTimer?: number;

    static DEFAULT = {
        ...Modal.DEFAULT,
        loadTimeout: 10000,
    } as Partial<ModalBuilderOptions>;

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
            }
            this.#modal = modal;
        }
        return modal;
    }

    setOptions(newOptions?: Partial<T>) {
        const options = super.setOptions(newOptions);
        if (!options.type) {
            if (options.target) {
                options.type = 'static';
            }
        }
        return options;
    }

    init() {
        this.#id = this.options.id || `modal-${nanoid()}`;
        this.on('show', this.buildDialog.bind(this));
    }

    render(options?: Partial<T>) {
        super.render(options);
        this.buildDialog();
    }

    #renderDialog(dialogOptions: ModalDialogOptions): Promise<void> {
        return new Promise((resolve) => {
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

        console.log('> ModalBuilder.buildDialog', this);

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
