/**
 * The component base events.
 */
export type ComponentBaseEvents = {
    inited: [];
    destroyed: [];
};

/**
 * The custom event type for component.
 */
export type ComponentCustomEvent = {[P in string]: unknown[]};

/**
 * The event map for component.
 */
export type ComponentEventMap<E extends ComponentCustomEvent> = ComponentBaseEvents & E;

/**
 * The event name for component.
 */
export type ComponentEventName<E extends ComponentCustomEvent> = keyof ComponentEventMap<E> extends string ? keyof ComponentEventMap<E> : never;

/**
 * The event callback arguments for component.
 */
export type ComponentEventArgs<E extends ComponentCustomEvent, N extends ComponentEventName<E>> = ComponentEventMap<E>[N];
