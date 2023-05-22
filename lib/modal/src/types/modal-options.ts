import type {ComponentChild} from 'preact';
import type {ToolbarItemOptions} from '@zui/toolbar/src/types';
import type {ModalDialogOptions} from './modal-dialog-options';
import type {ModalBaseOptions} from './modal-base-options';
import type {Modal} from '../vanilla/modal';

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

export interface ModalCustomOptions extends ModalOptions {
    type: 'custom',
    content?: ComponentChild;
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
    message: string;
    icon?: string;
    iconClass?: string;
    actions?: ToolbarItemOptions[] | string | string[];
    onClickAction?: (item: ToolbarItemOptions, modal: Modal) => false | void;
}

export interface ModalConfirmOptions extends ModalAlertOptions {
    onResult?: (confirmed: boolean, modal: Modal) => void;
}

export type ModalTypedOptions = ModalCustomOptions | ModalAjaxOptions | ModalIframeOptions;
