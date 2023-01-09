import type {Messager} from '../vanilla/messager';

export type MessagerEvents = {
    show: CustomEvent<Messager>,
    shown: CustomEvent<Messager>,
    hide: CustomEvent<Messager>,
    hidden: CustomEvent<Messager>,
};
