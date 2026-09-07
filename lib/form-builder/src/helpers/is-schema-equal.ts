import {isValidElement} from 'preact';
import {$} from '@zui/core';

/** Compare schema values without inspecting VNode internals or function source/closures. */
export function isSchemaEqual(a: unknown, b: unknown, orderedKeys = false): boolean {
    if (Object.is(a, b)) {
        return true;
    }
    if (isValidElement(a) || isValidElement(b)) {
        return false;
    }
    if (Array.isArray(a) && Array.isArray(b) && a.length !== b.length) {
        return false;
    }
    if (!(Array.isArray(a) && Array.isArray(b)) && !($.isPlainObject(a) && $.isPlainObject(b))) {
        return false;
    }
    const aKeys = Object.keys(a as object);
    const bKeys = Object.keys(b as object);
    // Property insertion order determines field order when no explicit order is given.
    return aKeys.length === bKeys.length && aKeys.every((key, index) => (orderedKeys ? key === bKeys[index] : Object.hasOwn(b as object, key)) && isSchemaEqual((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key], key === 'properties'));
}
