import {$} from '../cash';

type ZUIComponentOptions = Record<string, unknown>;

declare class ZUIComponentClass {
    constructor(element: HTMLElement, options: ZUIComponentOptions);
}

interface ZUIComponent {
    ZUI: string;
    NAME: string;
    defineFn(): void;
    new (element: HTMLElement, options: ZUIComponentOptions): ZUIComponentClass;
}

export const componentsMap = new Map<string, ZUIComponent>();

export function getComponent(name?: string): ZUIComponent | undefined {
    const {zui} = window as unknown as {zui: Record<string, ZUIComponent>};
    if (!componentsMap.size) {
        Object.keys(zui).forEach((n) => {
            const Component = zui[n];
            if (!Component.ZUI) {
                return;
            }
            componentsMap.set(n.toLowerCase(), Component);
        });
    }
    return name ? componentsMap.get(name.toLowerCase()) : undefined;
}

export function create(name: string, element: HTMLElement, options: ZUIComponentOptions) {
    const Component = getComponent(name);
    return Component ? new Component(element, options) : null;
}

export function defineFn(name?: string) {
    if (name) {
        const Component = getComponent(name);
        if (Component) {
            Component.defineFn();
        }
    } else {
        getComponent();
        componentsMap.forEach((Component) => {
            Component.defineFn();
        });
    }
}

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        zui(): Cash;
        zui(name: string): ZUIComponentClass;
        zui(name: string, options: ZUIComponentOptions | undefined | null): ZUIComponentClass;
    }
}

/** Auto call creator on elements match [data-zui]. */
$(() => {
    $('[data-zui]').each(function () {
        const $element = $(this);
        const options = $element.dataset() as Record<string, unknown>;
        const name = options.zui as string;
        delete options.zui;
        create(name, this, options);
    });
});
