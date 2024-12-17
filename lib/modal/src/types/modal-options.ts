import type {CustomContentType} from '@zui/core';
import type {ToolbarItemOptions} from '@zui/toolbar';
import type {ModalDialogOptions} from './modal-dialog-options';
import type {ModalBaseOptions} from './modal-base-options';
import type {Modal} from '../vanilla/modal';

export type ModalOptions = ModalBaseOptions & {
    type: string;
    id?: string;
    key?: string;
    loadingText?: string;
    loadTimeout?: number;
    loadingClass?: string;
    failedTip?: string;
    timeoutTip?: string;
    title?: string;
    destroyOnHide?: boolean;
    modal?: boolean;
    [prop: string]: unknown;
};

export interface ModalCustomOptions extends ModalOptions {
    type: 'custom',
    closeBtn?: boolean;
    content?: CustomContentType;
    custom: ModalDialogOptions | (() => ModalDialogOptions);
}

export interface ModalAjaxOptions extends ModalOptions {
    type: 'ajax',
    url: string;
    request?: RequestInit;
    dataType?: 'json' | 'html' | 'text',
    replace?: boolean;
    custom?: Partial<ModalDialogOptions>;
    executeScript?: boolean;
}

export interface ModalIframeOptions extends ModalOptions {
    type: 'iframe',
    url: string;
    custom?: Partial<ModalDialogOptions>;
}

export interface ModalAlertOptions extends ModalCustomOptions {
    message: string | {html: string};
    icon?: string;
    iconClass?: string;
    actions?: ToolbarItemOptions[] | string | string[];
    onClickAction?: (item: ToolbarItemOptions, modal: Modal) => false | void;
}

export interface ModalConfirmOptions extends ModalAlertOptions {
    onResult?: (confirmed: boolean, modal: Modal) => void;
}

export interface ModalPromptOptions extends ModalAlertOptions {
    defaultValue?: string;
    placeholder?: string;
    onResult?: (value: string, modal: Modal) => void;
}

export type ModalTypedOptions = ModalCustomOptions | ModalAjaxOptions | ModalIframeOptions;
