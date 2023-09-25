import {$, Cash, Selector} from '../cash';
import {takeData} from './data';
import {getZData} from './z';

type ZUIComponentOptions = Record<string, unknown>;

declare class ZUIComponentClass {
    gid: number;
    constructor(element: HTMLElement, options: ZUIComponentOptions);
    setOptions(options: ZUIComponentOptions): void;
    render(options?: ZUIComponentOptions): void;
    destroy(): void;
}

interface ZUIComponent {
    ZUI: string;
    NAME: string;
    MULTI_INSTANCE: boolean;
    defineFn(): void;
    get(selector?: Selector): ZUIComponentClass;
    getAll(selector?: Selector): ZUIComponentClass[];
    query(selector?: Selector, key?: string | number): ZUIComponentClass | undefined;
    new (element: HTMLElement, options: ZUIComponentOptions): ZUIComponentClass;
}

export const componentsMap = new Map<string, ZUIComponent>();

export function getComponent(name?: string): ZUIComponent | undefined {
    const {zui} = window as unknown as {zui: Record<string, ZUIComponent>};
    if (!componentsMap.size || (name && !componentsMap.has(name.toUpperCase()))) {
        Object.keys(zui).forEach((n) => {
            const Component = zui[n];
            if (!Component.NAME || !Component.ZUI) {
                return;
            }
            componentsMap.set(n.toLowerCase(), Component);
        });
    }
    return name ? componentsMap.get(name.toLowerCase()) : undefined;
}

export function create(name: string, element: HTMLElement, options: ZUIComponentOptions) {
    const Component = getComponent(name);
    if (!Component) {
        return null;
    }
    if (!Component.MULTI_INSTANCE && Component.get(element)) {
        console.error(`[ZUI] cannot create component "${name}" on element which already has a component instance.`, {element, options});
        return null;
    }
    return new Component(element, options);
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
        zuiInit(this: Cash): Cash;
        zui(this: Cash, name?: string, key?: string | number | true): ZUIComponentClass | ZUIComponentClass[] | Record<string, ZUIComponentClass> | undefined;
    }
}

/** Define the $.fn.zuiInit method. */
$.fn.zuiInit = function (this: Cash) {
    this.find('[data-zui]').each(function () {
        const $element = $(this);
        let options = getZData($element, 'data-')!;
        const [name, optionsName] = (options.zui as string).split(':');
        if ($element.zui(name)) {
            return;
        }
        if (optionsName) {
            options = $.share[optionsName] as Record<string, unknown>;
        } else {
            delete options.zui;
        }
        requestAnimationFrame(() => create(name, this, options));
    });
    this.find('.hide-before-init').removeClass('invisible hidden opacity-0');
    this.find('.scroll-into-view').scrollIntoView();
    return this;
};

/** Define the $.fn.zui method. */
$.fn.zui = function (this: Cash, name?: string | true, key?: string | number | true) {
    const element = this[0];
    if (!element) {
        return;
    }
    if (typeof name !== 'string') {
        const data = takeData(element, undefined, true) as Record<string, ZUIComponentClass>;
        const result: Record<string, ZUIComponentClass> = {};
        let lastComponent: ZUIComponentClass | undefined;
        Object.keys(data).forEach((dataKey) => {
            if (dataKey.startsWith('zui.')) {
                const component = data[dataKey] as ZUIComponentClass;
                result[dataKey] = component;
                if (!lastComponent || lastComponent.gid < component.gid) {
                    lastComponent = result[dataKey];
                }
            }
        });
        return name === true ? result : lastComponent;
    }
    const Component = getComponent(name);
    if (!Component) {
        return;
    }
    if (key === true) {
        return Component.getAll(element);
    }
    return Component.query(element, key);
};

/** Auto call creator on elements match [data-zui]. */
$(() => {
    $('body').zuiInit();
});
