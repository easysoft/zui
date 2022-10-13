export class EventEmitter {
    #eventTarget: EventTarget;

    constructor(descOrTarget: EventTarget | string = '') {
        if (typeof descOrTarget === 'object') {
            this.#eventTarget = descOrTarget;
        } else {
            this.#eventTarget = document.appendChild(document.createComment(descOrTarget));
        }
    }

    on(type: string, listener: EventListener, options?: AddEventListenerOptions) {
        this.#eventTarget.addEventListener(type, listener, options);
    }

    once(type: string, listener: EventListener, options?: AddEventListenerOptions) {
        this.#eventTarget.addEventListener(type, listener, {once: true, ...options});
    }

    off(type: string, listener: EventListener, options?: AddEventListenerOptions) {
        this.#eventTarget.removeEventListener(type, listener, options);
    }

    emit(event: Event) {
        this.#eventTarget.dispatchEvent(event);
        return event;
    }
}
