declare class ZUIComponentClass {
    constructor(element: HTMLElement, options: Record<string, unknown>);
}

interface ZUIComponent {
    new (element: HTMLElement, options: Record<string, unknown>): ZUIComponentClass;
}

export const componentsMap = new Map<string, ZUIComponent>();

export function create(name: string, element: HTMLElement, options: Record<string, ZUIComponent>) {
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
