/* eslint-disable @typescript-eslint/no-explicit-any */
import {$, type Cash} from '../cash';

type EventCallback = {
    (event: any, data?: any): any;
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
    on(events: Record<string, EventCallback>, data: any): this;
    on(events: Record<string, EventCallback>, selector: string | null | undefined, data: any): this;
    on(events: string, callback: EventCallback): this;
    on(events: string, selector: string, callback: EventCallback): this;
    on(events: string, data: any, callback: EventCallback): this;
    on(events: string, selector: string | null | undefined, data: any, callback: EventCallback, _one?: boolean): this;
    on(...args: any[]): this {
        this._$target.on(...(args as Parameters<Cash['on']>));
        return this;
    }

    one(events: Record<string, EventCallback>): this;
    one(events: Record<string, EventCallback>, selector: string): this;
    one(events: Record<string, EventCallback>, data: any): this;
    one(events: Record<string, EventCallback>, selector: string | null | undefined, data: any): this;
    one(events: string, callback: EventCallback): this;
    one(events: string, selector: string, callback: EventCallback): this;
    one(events: string, data: any, callback: EventCallback): this;
    one(events: string, selector: string | null | undefined, data: any, callback: EventCallback): this;
    one(...args: any[]): this {
        this._$target.one(...(args as Parameters<Cash['one']>));
        return this;
    }

    off(): this;
    off(events: string): this;
    off(events: Record<string, EventCallback>): this;
    off(events: string, callback: EventCallback): this;
    off(events: string, selector: string, callback: EventCallback): this;
    off(...args: any[]): this {
        this._$target.off(...(args as Parameters<Cash['off']>));
        return this;
    }

    trigger(event: Event | string, data?: any): this;
    trigger(...args: any[]): this {
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
        on(events: Record<string, EventCallback>, data: any): Bus;
        on(events: Record<string, EventCallback>, selector: string | null | undefined, data: any): Bus;
        on(events: string, callback: EventCallback): Bus;
        on(events: string, selector: string, callback: EventCallback): Bus;
        on(events: string, data: any, callback: EventCallback): Bus;
        on(events: string, selector: string | null | undefined, data: any, callback: EventCallback, _one?: boolean): Bus;

        one(events: Record<string, EventCallback>): Bus;
        one(events: Record<string, EventCallback>, selector: string): Bus;
        one(events: Record<string, EventCallback>, data: any): Bus;
        one(events: Record<string, EventCallback>, selector: string | null | undefined, data: any): Bus;
        one(events: string, callback: EventCallback): Bus;
        one(events: string, selector: string, callback: EventCallback): Bus;
        one(events: string, data: any, callback: EventCallback): Bus;
        one(events: string, selector: string | null | undefined, data: any, callback: EventCallback): Bus;

        off(): Bus;
        off(events: string): Bus;
        off(events: Record<string, EventCallback>): Bus;
        off(events: string, callback: EventCallback): Bus;
        off(events: string, selector: string, callback: EventCallback): Bus;

        trigger(event: Event | string, data?: any): Bus;
    }
}

$.bus = bus;
$.on = bus.on.bind(bus);
$.one = bus.one.bind(bus);
$.off = bus.off.bind(bus);
$.trigger = bus.trigger.bind(bus);
