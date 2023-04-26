import {ModalDialogOptions} from './modal-dialog-options';
import {ModalOptions} from './modal-options';

export type ModalBuilderOptions = ModalOptions & {
    type: string;
    id?: string;
    loadingText?: string;
    loadTimeout?: number;
    failedTip?: string;
    timeoutTip?: string;
    title?: string;
    [prop: string]: unknown;
};

export interface ModalCustomBuilder extends ModalBuilderOptions {
    type: 'custom',
    content?: string;
    custom: ModalDialogOptions | (() => ModalDialogOptions);
}

export interface ModalAjaxBuilder extends ModalBuilderOptions {
    type: 'ajax',
    url: string;
    request?: RequestInit;
    dataType?: 'json' | 'html' | 'text',
    replace?: boolean;
    custom?: Partial<ModalDialogOptions>;
    execScript?: boolean;
}

export interface ModalIframeBuilder extends ModalBuilderOptions {
    type: 'iframe',
    url: string;
    custom?: Partial<ModalDialogOptions>;
}

export type ModalBuilders = ModalCustomBuilder | ModalAjaxBuilder | ModalIframeBuilder;
