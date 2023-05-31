import {ComponentOptions} from './component-options';

/**
 * The component events.
 */
export interface ComponentEvents {
    [event: string]: unknown[];
}

/**
 * The component events definition.
 */
export type ComponentEventsDefnition = ComponentEvents | [ComponentEvents, ComponentEvents];

/**
 * The component base events.
 */
export interface ComponentBaseEvents {
    inited: [ComponentOptions];
    destroyed: [];
}

/**
 * The event name for component.
 */
export type ComponentEventName<E extends ComponentEventsDefnition> = ((E extends [infer E1, infer E2] ? (keyof E1 | keyof E2) : keyof E) | keyof ComponentBaseEvents | keyof HTMLElementEventMap) & string;

/**
 * The event arguments for component.
 */
export type ComponentEventArgs<E extends ComponentEventsDefnition, N extends ComponentEventName<E>> = [
    ...(N extends keyof ComponentBaseEvents ? ComponentBaseEvents[N] : never),
] | (
    E extends [infer E1, infer E2] ? (
        [...(N extends keyof E1 ? (E1[N] extends unknown[] ? E1[N] : never) : never)] | [...(N extends keyof E2 ? (E2[N] extends unknown[] ? E2[N] : never) : never)]
    ) : [
        ...(N extends keyof E ? (E[N] extends unknown[] ? E[N] : never) : never),
    ]
) | [
    ...(N extends keyof HTMLElementEventMap ? [] : never),
];
