import {EventBus, CustomEventMap, CustomEventListener, nativeEvents} from './event-bus';

/**
 * 单次监听注册记录。为每次 `on`/`once` 记录归一化后的事件类型、原始回调、实际绑定到
 * `EventTarget` 的回调（`once` 时为包装回调）以及选项，便于精确移除。
 */
type HandlerRecord = {
    type: string;
    listener: CustomEventListener;
    actual: CustomEventListener;
    options?: AddEventListenerOptions;
};

/**
 * 带自定义事件后缀和批量移除能力的事件总线。
 */
export class EventHub<E extends CustomEventMap = CustomEventMap, TYPES extends string = Extract<keyof E, string>> extends EventBus<E, TYPES> {
    #handlers: HandlerRecord[] = [];

    #suffix?: string;

    /**
     * @param descOrTarget 事件目标或描述注释节点内容
     * @param options.customEventSuffix 自定义事件后缀，非原生事件会自动追加该后缀
     */
    constructor(descOrTarget: EventTarget | string = '', options?: {customEventSuffix?: string}) {
        super(descOrTarget);
        this.#suffix = options?.customEventSuffix;
    }

    /**
     * 绑定事件监听。
     */
    on<T extends TYPES>(type: T, listener: CustomEventListener<E[T]>, options?: AddEventListenerOptions) {
        type = this.#normalizeType(type) as T;
        super.on(type, listener, options);
        this.#handlers.push({type, listener: listener as CustomEventListener, actual: listener as CustomEventListener, options});
    }

    /**
     * 移除事件监听，会移除所有与「事件类型 + 原始回调 + capture」匹配的记录，包括通过
     * `once` 绑定的一次性监听。
     */
    off<T extends TYPES>(type: T, listener: CustomEventListener<E[T]>, options?: AddEventListenerOptions) {
        type = this.#normalizeType(type) as T;
        const capture = this.#capture(options);
        for (let i = this.#handlers.length - 1; i >= 0; i--) {
            const record = this.#handlers[i];
            if (record.type === type && record.listener === (listener as CustomEventListener) && this.#capture(record.options) === capture) {
                super.off(type, record.actual as CustomEventListener<E[T]>, record.options);
                this.#handlers.splice(i, 1);
            }
        }
    }

    /**
     * 绑定一次性事件监听，触发一次后自动移除，可用原始回调通过 `off` 提前取消。
     */
    once<T extends TYPES>(type: T, listener: CustomEventListener<E[T]>, options?: AddEventListenerOptions) {
        type = this.#normalizeType(type) as T;
        const onceListener: CustomEventListener<E[T]> = (event) => {
            // 触发后同步清理注册记录，底层 `once: true` 会自动移除 EventTarget 上的监听。
            this.#deleteByActual(onceListener as CustomEventListener);
            listener(event);
        };
        super.once(type, onceListener, options);
        this.#handlers.push({type, listener: listener as CustomEventListener, actual: onceListener as CustomEventListener, options});
    }

    emit<T extends TYPES>(event: T, detail?: E[T] extends CustomEvent ? E[T]['detail'] : never): E[T];
    emit<T extends TYPES>(event: E[T]): E[T];
    emit<T extends TYPES>(event: T | E[T], detail?: (E[T] extends CustomEvent ? E[T]['detail'] : never)): E[T] {
        if (typeof event === 'string') {
            event = this.#normalizeType(event) as T;
        }
        return super.emit(event as T, detail) as E[T];
    }

    /**
     * 移除通过本实例绑定的所有监听，即使同一回调被复用于多个事件类型也不会遗漏。
     */
    offAll() {
        this.#handlers.forEach(({type, actual, options}) => {
            super.off(type as TYPES, actual as CustomEventListener, options);
        });
        this.#handlers = [];
    }

    #deleteByActual(actual: CustomEventListener) {
        const index = this.#handlers.findIndex(record => record.actual === actual);
        if (index >= 0) {
            this.#handlers.splice(index, 1);
        }
    }

    #capture(options?: AddEventListenerOptions): boolean {
        return !!options?.capture;
    }

    #normalizeType(type: string): string {
        const suffix = this.#suffix;
        if (nativeEvents.has(type) || typeof suffix !== 'string' || type.endsWith(suffix)) {
            return type;
        }
        return `${type}${suffix}`;
    }
}
