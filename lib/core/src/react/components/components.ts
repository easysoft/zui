import type {ComponentType} from 'preact';

export const reactComponents: Record<string, ComponentType> = {};

export function registerReactComponent<P = {}>(name: string, component?: ComponentType<P>): void;

export function registerReactComponent(componentMap: Record<string, unknown>): void;

export function registerReactComponent(nameOrMap: string | Record<string, unknown>, component?: ComponentType): void {
    if (typeof nameOrMap === 'object') {
        Object.keys(nameOrMap).forEach(name => {
            registerReactComponent(name, nameOrMap[name] as ComponentType);
        });
    } else if (component) {
        reactComponents[nameOrMap.toLowerCase()] = component;
    }
}

export function getReactComponent<P = {}>(name: string): ComponentType<P> | undefined {
    return reactComponents[name.toLowerCase()] as (ComponentType<P> | undefined);
}
