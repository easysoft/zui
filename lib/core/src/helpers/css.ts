import {JSX} from 'preact';

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        css(style: JSX.CSSProperties): Cash;
    }
}
