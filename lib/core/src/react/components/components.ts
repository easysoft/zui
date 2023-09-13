import type {ComponentType} from 'preact';

const components: Record<string, ComponentType> = {};

export function registerComponent<P = {}>(name: string, component?: ComponentType<P>): void;

export function registerComponent(componentMap: Record<string, unknown>): void;

export function registerComponent(nameOrMap: string | Record<string, unknown>, component?: ComponentType): void {
    if (typeof nameOrMap === 'object') {
        Object.keys(nameOrMap).forEach(name => {
            registerComponent(name, nameOrMap[name] as ComponentType);
        });
    } else if (component) {
        components[nameOrMap.toLowerCase()] = component;
    }
}

export function getComponent<P = {}>(name: string): ComponentType<P> | undefined {
    return components[name.toLowerCase()] as (ComponentType<P> | undefined);
}
