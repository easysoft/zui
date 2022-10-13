import {EventEmitter} from './event-emitter';

export interface CustomEventListener<E extends Event = Event> extends EventListener {
    (evt: E): void;
}

export type CustomEventMap = {[event: string]: Event};

export const nativeEvents = new Set([
    'click',
    'dblclick',
    'mouseup',
    'mousedown',
    'contextmenu',
    'mousewheel',
    'DOMMouseScroll',
    'mouseover',
    'mouseout',
    'mousemove',
    'selectstart',
    'selectend',
    'keydown',
    'keypress',
    'keyup',
    'orientationchange',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointerleave',
    'pointercancel',
    'gesturestart',
    'gesturechange',
    'gestureend',
    'focus',
    'blur',
    'change',
    'reset',
    'select',
    'submit',
    'focusin',
    'focusout',
    'load',
    'unload',
    'beforeunload',
    'resize',
    'move',
    'DOMContentLoaded',
    'readystatechange',
    'error',
    'abort',
    'scroll',
]);

export class EventBus<E extends CustomEventMap = {}, TYPES extends string = Extract<keyof E, string>> extends EventEmitter {
    on<T extends TYPES>(type: T, listener: CustomEventListener<E[T]>, options?: AddEventListenerOptions) {
        super.on(type, listener, options);
    }

    off<T extends TYPES>(type: T, listener: CustomEventListener<E[T]>, options?: AddEventListenerOptions) {
        super.off(type, listener, options);
    }

    once<T extends TYPES>(type: T, listener: CustomEventListener<E[T]>, options?: AddEventListenerOptions) {
        super.once(type, listener, options);
    }

    emit<T extends TYPES>(event: T, detail?: E[T] extends CustomEvent ? E[T]['detail'] : never): E[T];
    emit<T extends TYPES>(event: E[T]): E[T];
    emit<T extends TYPES>(event: T | E[T], detail?: E[T] extends CustomEvent ? E[T]['detail'] : never): E[T] {
        if (typeof event === 'string') {
            if (nativeEvents.has(event)) {
                event = new Event(event) as E[T];
                Object.assign(event, {detail});
            } else {
                event = new CustomEvent(event, {detail}) as unknown as E[T];
            }
        }
        return super.emit(EventBus.createEvent(event, detail)) as E[T];
    }

    static createEvent<T extends Event = Event>(event: string | T, detail?: T extends CustomEvent ? T['detail'] : never): T {
        if (typeof event === 'string') {
            if (nativeEvents.has(event)) {
                event = new Event(event) as T;
                Object.assign(event, {detail});
            } else {
                event = new CustomEvent(event, {detail}) as unknown as T;
            }
        }
        return event;
    }
}
