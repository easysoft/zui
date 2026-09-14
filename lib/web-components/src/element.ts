import type {ElementProperty} from './properties';

export type PropertyChangeSource = 'attribute' | 'property' | 'internal';

/** Browser-only base for Light DOM custom elements. Registration is explicit. */
export abstract class ZuiElement<P extends object = Record<string, unknown>> extends HTMLElement {
    static properties: Record<string, ElementProperty> = {};

    static get observedAttributes(): string[] {
        return [...new Set([
            ...Object.values(this.properties).flatMap(property => property.attribute ? [property.attribute] : []),
            'aria-label', 'aria-labelledby', 'aria-describedby', 'title',
        ])];
    }

    protected _values: Record<string, unknown> = {};

    protected _container?: HTMLElement;

    private _upgrades = new Map<string, unknown>();

    private _scheduled = false;

    private _reflecting = false;

    private _readySettled = false;

    private _resolveReady!: () => void;

    private _rejectReady!: (error: unknown) => void;

    private _readyPromise: Promise<void>;

    constructor() {
        super();
        this._readyPromise = this._createReady();
        for (const [name, property] of Object.entries(this._properties)) {
            this._values[name] = property.defaultValue;
            // Properties assigned before customElements.define() must not mask accessors.
            if (Object.hasOwn(this, name)) {
                this._upgrades.set(name, Reflect.get(this, name));
                Reflect.deleteProperty(this, name);
            }
        }
    }

    private get _properties() {
        return (this.constructor as typeof ZuiElement).properties;
    }

    /** Resolves after the first render of the current connection. */
    get ready(): Promise<void> {
        return this._readyPromise;
    }

    /** A snapshot; use properties or setOptions() to update the element. */
    get options(): Readonly<P> {
        return {...this._values} as P;
    }

    setOptions(options: Partial<P>): void {
        for (const name of Object.keys(options)) {
            if (!Object.hasOwn(this._properties, name)) {
                throw new TypeError(`[ZUI] Unknown element option: ${name}`);
            }
        }
        for (const [name, value] of Object.entries(options)) {
            this._setProperty(name, value);
        }
    }

    connectedCallback(): void {
        for (const [name, value] of this._upgrades) {
            this._setProperty(name, value);
        }
        this._upgrades.clear();
        this._requestUpdate();
    }

    disconnectedCallback(): void {
        // insertBefore/append can disconnect and reconnect in the same turn.
        queueMicrotask(() => {
            if (this.isConnected || !this._container) {
                return;
            }
            this._destroy();
            this._container?.remove();
            this._container = undefined;
            if (this._readySettled) {
                this._readyPromise = this._createReady();
            }
        });
    }

    attributeChangedCallback(name: string, oldValue: string | null, value: string | null): void {
        if (oldValue === value || this._reflecting) {
            return;
        }
        const entry = Object.entries(this._properties).find(([, property]) => property.attribute === name);
        if (entry) {
            const [key, property] = entry;
            this._setProperty(key, property.fromAttribute ? property.fromAttribute(value) : value, 'attribute');
        } else {
            this._requestUpdate();
        }
    }

    focus(options?: FocusOptions): void {
        this._focusTarget()?.focus(options);
    }

    protected _focusTarget(): HTMLElement | null | undefined {
        return this._container?.querySelector<HTMLElement>('button:not(:disabled), a[href], input:not([type="hidden"]):not(:disabled), [tabindex="0"]');
    }

    protected _accessibleAttributes(): Record<string, string> {
        const attrs: Record<string, string> = {};
        for (const name of ['aria-label', 'aria-labelledby', 'aria-describedby', 'title']) {
            const value = this.getAttribute(name);
            if (value !== null) {
                attrs[name] = value;
            }
        }
        return attrs;
    }

    protected _setProperty(name: string, value: unknown, source: PropertyChangeSource = 'property'): void {
        const property = this._properties[name];
        const nextValue = property.normalize ? property.normalize(value) : value;
        const previous = this._values[name];
        this._values[name] = nextValue;
        if (source !== 'attribute' && property.reflect && property.attribute) {
            const attribute = property.toAttribute ? property.toAttribute(nextValue) : nextValue == null ? null : String(nextValue);
            this._reflecting = true;
            try {
                if (attribute === null) {
                    this.removeAttribute(property.attribute);
                } else {
                    this.setAttribute(property.attribute, attribute);
                }
            } finally {
                this._reflecting = false;
            }
        }
        if (!Object.is(previous, nextValue)) {
            this._propertyChanged(name, previous, source);
            this._requestUpdate();
        }
    }

    protected _propertyChanged(_name: string, _previous: unknown, _source: PropertyChangeSource): void {
        // Specialized adapters can synchronize form state or controlled values.
    }

    protected _emit<T>(name: string, detail: T, cancelable = false): boolean {
        return this.dispatchEvent(new CustomEvent(name, {detail, bubbles: true, composed: true, cancelable}));
    }

    protected _requestUpdate(): void {
        if (this._scheduled) {
            return;
        }
        this._scheduled = true;
        queueMicrotask(() => {
            this._scheduled = false;
            if (!this.isConnected) {
                return;
            }
            try {
                if (!this._container) {
                    this._container = this.ownerDocument.createElement('span');
                    this._container.className = 'zui-webc-mount';
                    this.append(this._container);
                }
                this._render();
            } catch (error) {
                this._readySettled = true;
                this._rejectReady(error);
                this._emit('zui-error', {error});
            }
        });
    }

    protected _markReady(): void {
        if (this.isConnected) {
            this._readySettled = true;
            this._resolveReady();
        }
    }

    private _createReady(): Promise<void> {
        this._readySettled = false;
        const ready = new Promise<void>((resolve, reject) => {
            this._resolveReady = resolve;
            this._rejectReady = reject;
        });
        // Errors are also surfaced as zui-error, even when callers do not await ready.
        void ready.catch(() => undefined);
        return ready;
    }

    protected abstract _render(): void;

    protected abstract _destroy(): void;

    /** Install accessors before registration so frameworks can discover properties. */
    static define(name: string): void {
        const constructor = this as unknown as CustomElementConstructor;
        const existing = customElements.get(name);
        if (existing) {
            if (existing !== constructor) {
                throw new Error(`[ZUI] A different custom element is already registered as ${name}.`);
            }
            return;
        }
        for (const key of Object.keys(this.properties)) {
            if (key in this.prototype) {
                throw new Error(`[ZUI] Element option conflicts with an existing property: ${key}`);
            }
            Object.defineProperty(this.prototype, key, {
                configurable: true,
                get(this: ZuiElement) {
                    return this._values[key];
                },
                set(this: ZuiElement, value: unknown) {
                    this._setProperty(key, value);
                },
            });
        }
        customElements.define(name, constructor);
    }
}
