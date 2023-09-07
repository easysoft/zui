import {$, Cash, Selector} from '../cash';

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        z(): Record<string, unknown> | undefined;
        z(name: string): unknown | undefined;
        z(name: string, value: unknown): Cash;
        z(data: Record<string, unknown>): Cash;
    }
}

export function getZData(selector: Selector): Record<string, unknown> | undefined {
    const element = $(selector)[0];
    if (!element) {
        return;
    }
    return Array.from(element.attributes).reduce<Record<string, unknown>>((data, attribute) => {
        let {name, value} = attribute;
        if (name.startsWith('z-')) {
            name = name.slice(2).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            try {
                value = JSON.parse(value);
            } catch (error) {
                // Ignore.
            }
            data[name] = value;
        }
        return data;
    }, {});
}

export function setZData(selector: Selector, data: Record<string, unknown>) {
    const $element = $(selector);
    Object.keys(data).forEach((name) => {
        let value = data[name];
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        name = name.replace(/[A-Z]/g, (g) => `-${g.toLowerCase()}`);
        $element.attr(`z-${name}`, value as string);
    });
}

function z(): Record<string, unknown> | undefined;
function z(name: string): unknown | undefined;
function z(name: string, value: unknown): Cash;
function z(data: Record<string, unknown>): Cash;
function z(this: Cash, ...args: unknown[]): Record<string, unknown> | unknown | Cash | undefined {
    const argsLength = args.length;
    if (!argsLength) {
        return getZData(this);
    }
    if (argsLength === 1) {
        const [nameOrData] = args;
        if (typeof nameOrData === 'string') {
            return getZData(this)?.[nameOrData];
        }
        if ($.isPlainObject(nameOrData)) {
            setZData(this, nameOrData);
        }
        return this;
    }
    setZData(this, {[args[0] as string]: args[1]});
}

/* Extend as $.fn.z() */
$.fn.z = z;
