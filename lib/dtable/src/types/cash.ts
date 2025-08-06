import type {DTableOptions} from './options';

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        dtable(method: string, ...args: unknown[]): Cash;
        dtable(options: DTableOptions): Cash;
    }
}
