import type {DTableOptions} from './options';

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        dtable<T = unknown>(method: string, ...args: unknown[]): T;
        dtable(options: DTableOptions): Cash;
    }
}
