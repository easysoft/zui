/**
 * 基于原生 `EventTarget` 的事件发射器，可绑定到已有的 `EventTarget`，或以一个挂载在
 * `document` 上的注释节点作为内部事件目标。
 */
export class EventEmitter {
    #eventTarget: EventTarget;

    /**
     * @param descOrTarget 传入 `EventTarget` 时直接作为事件目标；传入字符串时创建一个描述注释节点作为事件目标
     */
    constructor(descOrTarget: EventTarget | string = '') {
        if (typeof descOrTarget === 'object') {
            this.#eventTarget = descOrTarget;
        } else {
            this.#eventTarget = document.appendChild(document.createComment(descOrTarget));
        }
    }

    /**
     * 绑定事件监听。
     * @param type 事件类型
     * @param listener 事件监听回调
     * @param options 原生 `addEventListener` 选项
     */
    on(type: string, listener: EventListener, options?: AddEventListenerOptions) {
        this.#eventTarget.addEventListener(type, listener, options);
    }

    /**
     * 绑定一次性事件监听，监听触发一次后自动移除。
     * @param type 事件类型
     * @param listener 事件监听回调
     * @param options 原生 `addEventListener` 选项，其中的 `once` 始终被强制为 `true`
     */
    once(type: string, listener: EventListener, options?: AddEventListenerOptions) {
        // once 必须放在展开之后，避免调用方传入的 `{once: false}` 覆盖掉一次性语义。
        this.#eventTarget.addEventListener(type, listener, {...options, once: true});
    }

    /**
     * 移除事件监听。
     * @param type 事件类型
     * @param listener 事件监听回调
     * @param options 原生 `removeEventListener` 选项
     */
    off(type: string, listener: EventListener, options?: AddEventListenerOptions) {
        this.#eventTarget.removeEventListener(type, listener, options);
    }

    /**
     * 派发事件。
     * @param event 要派发的事件对象
     * @returns 派发的事件对象
     */
    emit(event: Event) {
        this.#eventTarget.dispatchEvent(event);
        return event;
    }
}
