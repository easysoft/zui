import {describe, expect, it, vi} from 'vitest';
import {EventBus, EventEmitter, EventHub} from '@zui/event-bus';

type BusEvents = {
    click: Event;
    ping: CustomEvent<{source: string} | undefined>;
};

describe('@zui/event-bus', () => {
    it('delegates EventEmitter listeners to an explicit EventTarget', () => {
        const target = new EventTarget();
        const emitter = new EventEmitter(target);
        const listener = vi.fn();
        const event = new Event('ping');

        emitter.on('ping', listener);
        expect(emitter.emit(event)).toBe(event);
        expect(listener).toHaveBeenCalledOnce();

        emitter.off('ping', listener);
        emitter.emit(new Event('ping'));
        expect(listener).toHaveBeenCalledOnce();
    });

    it('enforces once semantics even when options request otherwise', () => {
        const emitter = new EventEmitter(new EventTarget());
        const listener = vi.fn();

        emitter.once('ping', listener, {once: false});
        emitter.emit(new Event('ping'));
        emitter.emit(new Event('ping'));

        expect(listener).toHaveBeenCalledOnce();
    });

    it('dispatches listeners in subscription order', () => {
        const emitter = new EventEmitter(new EventTarget());
        const calls: string[] = [];

        emitter.on('ping', () => calls.push('first'));
        emitter.on('ping', () => calls.push('second'));
        emitter.emit(new Event('ping'));

        expect(calls).toEqual(['first', 'second']);
    });

    it('creates CustomEvent instances for custom names and Event instances for native names', () => {
        const bus = new EventBus<BusEvents>(new EventTarget());
        const pingListener = vi.fn();
        const clickListener = vi.fn();
        bus.on('ping', pingListener);
        bus.on('click', clickListener);

        const ping = bus.emit('ping', {source: 'test'});
        const click = bus.emit('click');

        expect(ping).toBeInstanceOf(CustomEvent);
        expect(ping.detail).toEqual({source: 'test'});
        expect(click).toBeInstanceOf(Event);
        expect(click).not.toBeInstanceOf(CustomEvent);
        expect(pingListener).toHaveBeenCalledWith(ping);
        expect(clickListener).toHaveBeenCalledWith(click);
    });

    it('dispatches existing event objects unchanged', () => {
        const bus = new EventBus<BusEvents>(new EventTarget());
        const listener = vi.fn();
        const event = new CustomEvent('ping', {detail: {source: 'existing'}});
        bus.on('ping', listener);

        expect(bus.emit(event)).toBe(event);
        expect(listener).toHaveBeenCalledWith(event);
    });

    it('suffixes custom EventHub events but leaves native event names unchanged', () => {
        const target = new EventTarget();
        const hub = new EventHub<BusEvents>(target, {customEventSuffix: '.scope'});
        const pingListener = vi.fn();
        const clickListener = vi.fn();
        const suffixedListener = vi.fn();
        target.addEventListener('ping.scope', suffixedListener);

        hub.on('ping', pingListener);
        hub.on('click', clickListener);
        hub.emit('ping', {source: 'hub'});
        hub.emit('click');

        expect(pingListener).toHaveBeenCalledOnce();
        expect(suffixedListener).toHaveBeenCalledOnce();
        expect(clickListener).toHaveBeenCalledOnce();
    });

    it('can cancel once listeners by their original callback and remove all listeners', () => {
        const hub = new EventHub<BusEvents>(new EventTarget());
        const onceListener = vi.fn();
        const regularListener = vi.fn();

        hub.once('ping', onceListener);
        hub.off('ping', onceListener);
        hub.emit('ping');
        expect(onceListener).not.toHaveBeenCalled();

        hub.on('ping', regularListener);
        hub.once('ping', onceListener);
        hub.offAll();
        hub.emit('ping');
        expect(regularListener).not.toHaveBeenCalled();
        expect(onceListener).not.toHaveBeenCalled();
    });
});
