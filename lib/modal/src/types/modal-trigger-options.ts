import {ModalOptions} from './modal-options';

export interface ModalTriggerOptions extends ModalOptions {
    container?: string | HTMLElement;
    type: 'static' | 'custom' | 'iframe' | 'ajax';
    target?: string;
    url?: string;
}
