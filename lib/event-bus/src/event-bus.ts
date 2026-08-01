import {EventEmitter} from './event-emitter';

/**
 * 自定义事件监听回调。
 */
export type CustomEventListener<E extends Event = Event> = (evt: E) => void;

/**
 * 事件类型到事件对象的映射，用于为 `EventBus`/`EventHub` 提供事件类型推断。
 */
export type CustomEventMap = Record<string, Event>;

/**
 * 已知的原生 DOM 事件名集合。`emit` 这些事件时创建原生 `Event`（并附加 `detail`），
 * 其余事件名则创建 `CustomEvent`。`EventHub` 也据此判断是否追加自定义事件后缀。
 */
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

/**
 * 类型安全的事件总线。在 `EventEmitter` 之上提供带类型推断的 `on`/`once`/`off`/`emit`，
 * 并在 `emit` 字符串事件时自动创建原生 `Event` 或 `CustomEvent`。
 */
export class EventBus<E extends CustomEventMap = CustomEventMap, TYPES extends string = Extract<keyof E, string>> extends EventEmitter {
    on<T extends TYPES>(type: T, listener: CustomEventListener<E[T]>, options?: AddEventListenerOptions) {
        super.on(type, listener as EventListener, options);
    }

    off<T extends TYPES>(type: T, listener: CustomEventListener<E[T]>, options?: AddEventListenerOptions) {
        super.off(type, listener as EventListener, options);
    }

    once<T extends TYPES>(type: T, listener: CustomEventListener<E[T]>, options?: AddEventListenerOptions) {
        super.once(type, listener as EventListener, options);
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

    /**
     * 根据事件名或事件对象创建事件。原生事件名创建 `Event` 并附加 `detail`，其余创建 `CustomEvent`；
     * 传入事件对象时原样返回。
     */
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
