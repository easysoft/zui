import {$, Cash, Selector} from '../cash';
import {takeData} from './data';
import {getZData} from './z';

type ZUIComponentOptions = {
    $update?: boolean;
    [x: string]: unknown;
};

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
    const {zui = {}} = window as unknown as {zui: Record<string, ZUIComponent>};
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

export function create(name: string, element: HTMLElement, options: ZUIComponentOptions = {}) {
    const Component = getComponent(name);
    if (!Component) {
        return null;
    }
    if (!Component.MULTI_INSTANCE) {
        const component = Component.get(element);
        if (component) {
            if (options.$update) {
                delete options.$update;
                component.render(options);
            } else {
                console.warn(`[ZUI] cannot create component "${name}" on element which already has a component instance.`, {element, options});
            }
            return component;
        }
    }
    return new Component(element, options);
}

function createInAnimationFrame(name: string, element: HTMLElement, options: ZUIComponentOptions = {}) {
    requestAnimationFrame(() => create(name, element, options));
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
        zuiCall(this: Cash, method: string, args?: unknown[]): Cash;
    }
}

/**
 * Create zui component instance from elements which match [zui-create], [data-zui], [data-zui] is deprecated, use [zui-create] instead.
 * 为匹配 [zui-create], [data-zui] 的元素创建 zui 组件实例，[data-zui] 被弃用，优先使用 [zui-create]。
 *
 * @param element - The element to create zui components. 要创建 zui 组件的元素。
 * @param options - The options. 选项。
 *
 * @example
 * ```html
 * <div zui-create="list" zui-create-list='{"items": [{"text": "item1"}, {"text": "item2"}]}'></div>
 * <menu zui-create zui-create-list='{$replace: true, items: [{text: "item1"}, {text: "item2"}], onClickItem: (item) => console.log("click item", item)}'></menu>
 * <menu zui-create="list,sortable" zui-create-list='{$replace: true, items: [{"text": "item1"}, {"text": "item2"}]}' zui-create-sortable="{dragShadow: false}">Create multiple components</menu>
 *
 * <div data-zui="list" data-items='[{"text": "item1"}, {"text": "item2"}]'>Deprecated usage</div>
 * ```
 */
function initCreators(element: HTMLElement, options: {update?: boolean} = {}): void {
    const $element = $(element);
    let createNames = $element.attr('zui-create');
    const $update = options.update;
    const defaultCreateOptions = {
        $update,
        $optionsFromDataset: false,
    };
    if (typeof createNames === 'string') {
        createNames = createNames.trim();
        const names = createNames.length ? createNames.split(',').map((name) => name.trim()) : [];
        const createOptionsMap = getZData(element, {prefix: 'zui-create-', evalValue: true})!;
        const createOptionsNames = Object.keys(createOptionsMap);
        if (!createOptionsNames.length && names.length === 1) {
            createInAnimationFrame(names[0], element, {
                ...defaultCreateOptions,
                ...$element.dataset(),
            });
        } else {
            const initedNames = new Set<string>();
            [...names, ...createOptionsNames].forEach(name => {
                if (initedNames.has(name)) {
                    return;
                }
                const createOptions = createOptionsMap[name] as ZUIComponentOptions | undefined;
                createInAnimationFrame(name, element, {
                    ...defaultCreateOptions,
                    ...createOptions,
                });
                delete createOptionsMap[name];
                initedNames.add(name);
            });
        }
    } else {
        const initOptions = $element.dataset();
        const name = initOptions?.zui as string;
        if (!name) {
            return;
        }
        console.warn('[ZUI] create component instance with [data-zui] is deprecated, use [zui-create] instead.', {element, options});
        delete initOptions!.zui;
        createInAnimationFrame(name, element, {
            ...defaultCreateOptions,
            ...initOptions,
        });
    }
}

/** Define the $.fn.zuiInit method. */
$.fn.zuiInit = function (this: Cash) {
    this.find('[zui-create],[data-zui]').each(function () {
        initCreators(this);
    });
    this.find('[zui-init]').each(function () {
        const $element = $(this);
        if ($element.z('zuiInited')) {
            return;
        }
        $.runJS($element.z('zuiInited', true).attr('zui-init') as string, ['$element', $element]);
    });
    this.find('.hide-before-init').removeClass('invisible hidden opacity-0');
    this.find('.scroll-into-view').scrollIntoView();
    this.find('[data-on="inited"]').each((_, ele) => {
        const $ele = $(ele);
        if (!$ele.zui()) {
            $ele.trigger('inited');
        }
    });
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
        return $(element).data(`zui.${name}`);
    }
    if (key === true) {
        return Component.getAll(element);
    }
    return Component.query(element, key);
};

$.fn.zuiCall = function (this: Cash, componentMethod: string, args: unknown[] = []) {
    this.each(function () {
        const parts = componentMethod.split('.');
        const name = parts.length > 1 ? parts[0] : undefined;
        const method = parts[parts.length > 1 ? 1 : 0];
        const component = $(this).zui(name) as (ZUIComponent | undefined);
        const methodFunc = component?.[method as keyof ZUIComponent];
        if (typeof methodFunc === 'function') {
            (methodFunc as ((...args: unknown[]) => void)).apply(component, args);
        }
    });
    return this;
};

/** Auto call creator on elements match [data-zui]. */
$(() => {
    $('body').zuiInit();
});
