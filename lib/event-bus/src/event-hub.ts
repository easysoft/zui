import {EventBus, CustomEventMap, CustomEventListener, nativeEvents} from './event-bus';

export class EventHub<E extends CustomEventMap = {}, TYPES extends string = Extract<keyof E, string>> extends EventBus<E, TYPES> {
    #handlers = new Map<CustomEventListener, [type: TYPES, options?: AddEventListenerOptions]>();

    #suffix?: string;

    constructor(descOrTarget: EventTarget | string = '', options?: {customEventSuffix?: string}) {
        super(descOrTarget);
        this.#suffix = options?.customEventSuffix;
    }

    on<T extends TYPES>(type: T, listener: CustomEventListener<E[T]>, options?: AddEventListenerOptions) {
        type = this.#normalizeType(type) as T;
        super.on(type, listener, options);
        this.#handlers.set(listener as CustomEventListener, [type, options]);
    }

    off<T extends TYPES>(type: T, listener: CustomEventListener<E[T]>, options?: AddEventListenerOptions) {
        type = this.#normalizeType(type) as T;
        super.off(type, listener, options);
        this.#handlers.delete(listener as CustomEventListener);
    }

    once<T extends TYPES>(type: T, listener: CustomEventListener<E[T]>, options?: AddEventListenerOptions) {
        type = this.#normalizeType(type) as T;
        const onceListener: CustomEventListener<E[T]> = (event) => {
            listener(event);
            this.#handlers.delete(onceListener as CustomEventListener);
        };
        super.once(type, onceListener, options);
        this.#handlers.set(onceListener as CustomEventListener, [type, options]);
    }

    emit<T extends TYPES>(event: T, detail?: E[T] extends CustomEvent ? E[T]['detail'] : never): E[T];
    emit<T extends TYPES>(event: E[T]): E[T];
    emit<T extends TYPES>(event: T | E[T], detail?: (E[T] extends CustomEvent ? E[T]['detail'] : never)): E[T] {
        if (typeof event === 'string') {
            event = this.#normalizeType(event) as T;
        }
        return super.emit(event as T, detail) as E[T];
    }

    offAll() {
        Array.from(this.#handlers.entries()).forEach(([handler, [type, options]]) => {
            super.off(type, handler, options);
        });
        this.#handlers.clear();
    }

    #normalizeType(type: string): string {
        const suffix = this.#suffix;
        if (nativeEvents.has(type) || typeof suffix !== 'string' || type.endsWith(suffix)) {
            return type;
        }
        return `${type}${suffix}`;
    }
}
