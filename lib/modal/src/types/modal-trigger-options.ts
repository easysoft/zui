import {ModalOptions} from './modal-options';
import {ModalBaseOptions} from './modal-base-options';

export type ModalTriggerStaticOptions = ModalBaseOptions & {target?: string};

export type ModalTriggerOptions = (ModalOptions | ModalTriggerStaticOptions) & {
    container?: string | HTMLElement;
};
