import {$, Cash, Selector} from '../cash';
import {evalValue} from './raw-data';

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        z(): Record<string, unknown> | undefined;
        z(name: string): unknown | undefined;
        z(name: string, value: unknown): Cash;
        z(data: Record<string, unknown>): Cash;
    }
}

type ZDataGetterOptions = {
    prefix?: string;
    evalValue?: boolean;
    evalArgs?: unknown[];
    json?: boolean;
    getter?: (name: string, value: unknown) => unknown;
};

export function getZData(selector: Selector, prefixOrOptions?: ZDataGetterOptions | string): Record<string, unknown> | undefined {
    const element = $(selector)[0];
    if (!element) {
        return;
    }
    const {prefix, getter, evalValue: evalValueSetting, json = true, evalArgs = []} = {
        prefix: 'z-',
        ...(typeof prefixOrOptions === 'string' ? {prefix: prefixOrOptions} : prefixOrOptions),
    };
    return Array.from(element.attributes).reduce<Record<string, unknown>>((data, attribute) => {
        let {name} = attribute;
        const {value} = attribute;
        let finalValue: unknown = value;
        if (name.startsWith(prefix)) {
            name = name.slice(prefix.length).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            if (getter) {
                finalValue = getter(name, value);
            } else {
                try {
                    if (evalValueSetting || (evalValueSetting === undefined && value.includes('RAWJS'))) {
                        finalValue = evalValue(value, ...evalArgs);
                    } else if (json) {
                        finalValue = JSON.parse(value);
                    }
                } catch (error) {
                    // Ignore.
                }
            }
            data[name] = finalValue;
        }
        return data;
    }, {});
}

export function setZData(selector: Selector, data: Record<string, unknown>, prefix = 'z-') {
    const $element = $(selector);
    Object.keys(data).forEach((name) => {
        let value = data[name];
        if (typeof value === 'function') {
            value = `RAWJS<${value}>RAWJS`;
        }
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        name = name.replace(/[A-Z]/g, (g) => `-${g.toLowerCase()}`);
        $element.attr(`${prefix}${name}`, value as string);
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
    return this;
}

/* Extend as $.fn.z() */
$.fn.z = z;
