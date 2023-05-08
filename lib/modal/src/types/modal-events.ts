import type {ModalBase} from '../vanilla/modal-base';

export type ModalEvents = {
    show: CustomEvent<ModalBase>,
    shown: CustomEvent<ModalBase>,
    hide: CustomEvent<ModalBase>,
    hidden: CustomEvent<ModalBase>,
};
