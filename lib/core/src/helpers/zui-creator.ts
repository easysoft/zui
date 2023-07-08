import {$} from '../cash';

type ZUIComponentOptions = Record<string, unknown>;

declare class ZUIComponentClass {
    constructor(element: HTMLElement, options: ZUIComponentOptions);
}

interface ZUIComponent {
    new (element: HTMLElement, options: ZUIComponentOptions): ZUIComponentClass;
}

export const componentsMap = new Map<string, ZUIComponent>();

export function create(name: string, element: HTMLElement, options: ZUIComponentOptions) {
    const {zui} = window as unknown as {zui: Record<string, ZUIComponent>};
    if (!componentsMap.size) {
        Object.keys(zui).forEach((n) => {
            if (n[0] !== n[0].toUpperCase()) {
                return;
            }
            componentsMap.set(n.toLowerCase(), zui[n]);
        });
    }
    const Component = componentsMap.get(name.toLowerCase());
    return Component ? new Component(element, options) : null;
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
