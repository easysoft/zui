import type {ComponentType} from 'preact';

const components: Record<string, ComponentType> = {};

export function registerComponent<P = {}>(name: string, component?: ComponentType<P>): void;

export function registerComponent<P = {}>(componentMap: Record<string, ComponentType<P>>): void;

export function registerComponent<P = {}>(nameOrMap: string | Record<string, ComponentType<P>>, component?: ComponentType<P>): void {
    if (typeof nameOrMap === 'object') {
        Object.keys(nameOrMap).forEach(name => {
            registerComponent(name, nameOrMap[name]);
        });
    } else if (component) {
        components[nameOrMap.toLowerCase()] = component as ComponentType;
    }
}

export function getComponent<P = {}>(name: string): ComponentType<P> | undefined {
    return components[name.toLowerCase()] as (ComponentType<P> | undefined);
}
