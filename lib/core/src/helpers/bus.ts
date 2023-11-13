import {$, type Cash} from '../cash';

type EventCallback = {
    (event: unknown, data?: unknown): unknown;
    guid?: number;
};

export class Bus {
    protected _$target: Cash;

    constructor(descOrTarget: Node | string = '') {
        const target = typeof descOrTarget === 'object' ? descOrTarget : document.querySelector(descOrTarget);
        this._$target = $(target);
    }

    on(events: Record<string, EventCallback>): this;
    on(events: Record<string, EventCallback>, selector: string): this;
    on(events: Record<string, EventCallback>, data: unknown): this;
    on(events: Record<string, EventCallback>, selector: string | null | undefined, data: unknown): this;
    on(events: string, callback: EventCallback): this;
    on(events: string, selector: string, callback: EventCallback): this;
    on(events: string, data: unknown, callback: EventCallback): this;
    on(events: string, selector: string | null | undefined, data: unknown, callback: EventCallback, _one?: boolean): this;
    on(...args: unknown[]): this {
        this._$target.on(...(args as Parameters<Cash['on']>));
        return this;
    }

    one(events: Record<string, EventCallback>): this;
    one(events: Record<string, EventCallback>, selector: string): this;
    one(events: Record<string, EventCallback>, data: unknown): this;
    one(events: Record<string, EventCallback>, selector: string | null | undefined, data: unknown): this;
    one(events: string, callback: EventCallback): this;
    one(events: string, selector: string, callback: EventCallback): this;
    one(events: string, data: unknown, callback: EventCallback): this;
    one(events: string, selector: string | null | undefined, data: unknown, callback: EventCallback): this;
    one(...args: unknown[]): this {
        this._$target.one(...(args as Parameters<Cash['one']>));
        return this;
    }

    off(): this;
    off(events: string): this;
    off(events: Record<string, EventCallback>): this;
    off(events: string, callback: EventCallback): this;
    off(events: string, selector: string, callback: EventCallback): this;
    off(...args: unknown[]): this {
        this._$target.off(...(args as Parameters<Cash['off']>));
        return this;
    }

    trigger(event: Event | string, data?: unknown): this;
    trigger(...args: unknown[]): this {
        this._$target.trigger(...(args as Parameters<Cash['trigger']>));
        return this;
    }
}

export const bus = new Bus('zui bus target');

/* Declare types. */
declare module 'cash-dom' {
    interface CashStatic {
        bus: Bus;

        on(events: Record<string, EventCallback>): Bus;
        on(events: Record<string, EventCallback>, selector: string): Bus;
        on(events: Record<string, EventCallback>, data: unknown): Bus;
        on(events: Record<string, EventCallback>, selector: string | null | undefined, data: unknown): Bus;
        on(events: string, callback: EventCallback): Bus;
        on(events: string, selector: string, callback: EventCallback): Bus;
        on(events: string, data: unknown, callback: EventCallback): Bus;
        on(events: string, selector: string | null | undefined, data: unknown, callback: EventCallback, _one?: boolean): Bus;

        one(events: Record<string, EventCallback>): Bus;
        one(events: Record<string, EventCallback>, selector: string): Bus;
        one(events: Record<string, EventCallback>, data: unknown): Bus;
        one(events: Record<string, EventCallback>, selector: string | null | undefined, data: unknown): Bus;
        one(events: string, callback: EventCallback): Bus;
        one(events: string, selector: string, callback: EventCallback): Bus;
        one(events: string, data: unknown, callback: EventCallback): Bus;
        one(events: string, selector: string | null | undefined, data: unknown, callback: EventCallback): Bus;

        off(): Bus;
        off(events: string): Bus;
        off(events: Record<string, EventCallback>): Bus;
        off(events: string, callback: EventCallback): Bus;
        off(events: string, selector: string, callback: EventCallback): Bus;

        trigger(event: Event | string, data?: unknown): Bus;
    }
}

$.bus = bus;
$.on = bus.on.bind(bus);
$.one = bus.one.bind(bus);
$.off = bus.off.bind(bus);
$.trigger = bus.trigger.bind(bus);
