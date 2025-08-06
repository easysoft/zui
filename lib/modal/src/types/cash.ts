import type {ModalOptions} from './modal-options';
import type {ModalTriggerOptions} from './modal-trigger-options';

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        modal<T = unknown>(method: string, ...args: unknown[]): T;
        modal(options: ModalOptions): Cash;

        modalTrigger<T = unknown>(method: string, ...args: unknown[]): T;
        modalTrigger(options: ModalTriggerOptions): Cash;
    }
}
