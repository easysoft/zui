import type {Modal} from '../vanilla/modal';

export type ModalEvents = {
    show: CustomEvent<Modal>,
    shown: CustomEvent<Modal>,
    hide: CustomEvent<Modal>,
    hidden: CustomEvent<Modal>,
};
