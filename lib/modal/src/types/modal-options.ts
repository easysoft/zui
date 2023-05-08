import {ModalDialogOptions} from './modal-dialog-options';
import {ModalBaseOptions} from './modal-base-options';

export type ModalOptions = ModalBaseOptions & {
    type: string;
    id?: string;
    loadingText?: string;
    loadTimeout?: number;
    failedTip?: string;
    timeoutTip?: string;
    title?: string;
    [prop: string]: unknown;
};

export interface ModalCustomBuilder extends ModalOptions {
    type: 'custom',
    content?: string;
    custom: ModalDialogOptions | (() => ModalDialogOptions);
}

export interface ModalAjaxBuilder extends ModalOptions {
    type: 'ajax',
    url: string;
    request?: RequestInit;
    dataType?: 'json' | 'html' | 'text',
    replace?: boolean;
    custom?: Partial<ModalDialogOptions>;
    execScript?: boolean;
}

export interface ModalIframeBuilder extends ModalOptions {
    type: 'iframe',
    url: string;
    custom?: Partial<ModalDialogOptions>;
}

export type ModalBuilders = ModalCustomBuilder | ModalAjaxBuilder | ModalIframeBuilder;
