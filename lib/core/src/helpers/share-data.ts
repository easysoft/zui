import {$} from '../cash';

export const shareData: Record<string, unknown> = {};

/* Declare types. */
declare module 'cash-dom' {
    interface CashStatic {
        share: Record<string, unknown>;
    }
}

/** Define $.share helper. */
$.share = shareData;
