import {$} from '../cash';

/**
 * Cash event.
 */
type CashEvent = Exclude<Parameters<typeof $.fn.trigger>[0], string>;

/* Declare types. */
declare module 'cash-dom' {
    interface CashStatic {
        Event(event: string, data?: unknown): CashEvent;
    }
}

/* Extend as $.Event() to create custom event for cash. */
$.Event = (event: string, data?: unknown): CashEvent => {
    const [name, ...namespaces] = event.split('.');
    const eventObject = new Event(name, {
        bubbles: true,
        cancelable: true,
    });
    (eventObject as Event & {namespace: string}).namespace = namespaces.join('.');
    (eventObject as Event & {___ot: string}).___ot = name;
    (eventObject as Event & {___td: unknown}).___td = data;
    return eventObject as unknown as CashEvent;
};
