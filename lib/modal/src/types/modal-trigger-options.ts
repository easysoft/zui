import {ModalBuilderOptions} from './modal-builder-options';
import {ModalOptions} from './modal-options';

export type ModalTriggerStaticOptions = ModalOptions & {target?: string};

export type ModalTriggerOptions = (ModalBuilderOptions | ModalTriggerStaticOptions) & {
    container?: string | HTMLElement;
};
