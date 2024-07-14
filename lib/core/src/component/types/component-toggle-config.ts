import type {Comparator} from '../../cash';
import type {Component} from '../component';
import type {ComponentOptions} from './component-options';

export type ComponentToggleTrigger = 'click' | 'hover';

export type ComponentToggleConfig = {
    name?: string;
    trigger?: ComponentToggleTrigger | ComponentToggleTrigger[];
    skip?: Comparator;
    check?: (this: typeof Component, element: HTMLElement, type: ComponentToggleTrigger, event: Event) => boolean;
    handler?: (this: typeof Component, element: HTMLElement, type: ComponentToggleTrigger, event: Event) => void;
    getOptions?: (this: typeof Component, element: HTMLElement, event: Event) => Record<string, unknown>;
    setOptions?: boolean;
    prevent?: boolean;
    onGet?: (this: typeof Component, element: HTMLElement) => Component | void;
    onCreate?: (this: typeof Component, element: HTMLElement, event: Event, options: ComponentOptions) => Component | false;
    onToggle?: (this: typeof Component, component: Component, element: HTMLElement, event: Event) => void | false;
};
