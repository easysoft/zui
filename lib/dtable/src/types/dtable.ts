import type {DTable} from '../components/dtable';

export type DTableState = {
    scrollTop: number;
    scrollLeft: number;
    renderCount: number,
    [prop: string]: unknown;
};

export type DTableHTMLEvent = keyof HTMLElementEventMap;

export type DTableEventListener<T = DTable, E extends Event = Event> = (this: T, event: E) => void | false;

export type DTableEventTarget = '' | 'window' | 'document';

export type DTablePointerInfo = {
    cellElement: HTMLElement,
    rowElement: HTMLElement,
    colName: string,
    rowID: string,
    target: HTMLElement,
};
