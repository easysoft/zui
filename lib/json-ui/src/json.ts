import {JsonUIError} from './types';
import type {JsonUIValue} from './types';

export const forbiddenKeys = new Set(['__proto__', 'prototype', 'constructor', '__k', '__v', '__e']);

export function fail(path: string, message: string): never {
    throw new JsonUIError(path, message);
}

export function isRecord(value: unknown): value is Record<string, unknown> {
    return !!value && typeof value === 'object' && !Array.isArray(value) && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
}

export function checkJSON(value: unknown, path: string, ancestors = new Set<object>(), depth = 0, budget = {remaining: 10000}): asserts value is JsonUIValue {
    if (--budget.remaining < 0 || depth > 100) {
        fail(path, 'JSON exceeds the 100-level or 10000-value limit.');
    }
    if (value === null || typeof value === 'string' || typeof value === 'boolean' || (typeof value === 'number' && Number.isFinite(value))) {
        return;
    }
    if ((!Array.isArray(value) && !isRecord(value)) || ancestors.has(value as object)) {
        fail(path, 'Expected finite, acyclic JSON data.');
    }
    ancestors.add(value as object);
    for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(value))) {
        if (Array.isArray(value) && key === 'length') continue;
        if (forbiddenKeys.has(key) || !Object.hasOwn(descriptor, 'value')) {
            fail(`${path}.${key}`, 'Reserved properties and accessors are not allowed.');
        }
        checkJSON(descriptor.value, `${path}.${key}`, ancestors, depth + 1, budget);
    }
    if (Object.getOwnPropertySymbols(value).length) fail(path, 'Symbol properties are not JSON data.');
    ancestors.delete(value as object);
}

export function checkFields(value: Record<string, unknown>, fields: string[], path: string) {
    for (const key of Object.keys(value)) {
        if (!fields.includes(key)) fail(`${path}.${key}`, 'Unknown field.');
    }
}

export function parsePath(value: unknown, path: string, roots?: string[]): string[] {
    if (typeof value !== 'string' || !/^[\w$-]+(?:\.[\w$-]+)*$/.test(value)) {
        fail(path, 'Expected a dot-separated data path.');
    }
    const parts = value.split('.');
    if (parts.some(part => forbiddenKeys.has(part)) || (roots && !roots.includes(parts[0]))) {
        fail(path, 'This data path is not allowed.');
    }
    return parts;
}

/** Never traverses prototypes, getters, DOM objects or callable values. */
export function readPath(root: unknown, parts: string[], path: string): unknown {
    let value = root;
    for (const part of parts) {
        if (value == null) return undefined;
        if ((!isRecord(value) && !Array.isArray(value)) || forbiddenKeys.has(part)) {
            fail(path, 'Only JSON data properties can be read.');
        }
        const descriptor = Object.getOwnPropertyDescriptor(value, part);
        if (!descriptor) return undefined;
        if (!Object.hasOwn(descriptor, 'value')) fail(path, 'Accessors are not allowed.');
        value = descriptor.value;
    }
    return value;
}

/** Writes into an owned draft. State parents must exist; property bindings can create objects. */
export function writePath(root: Record<string, JsonUIValue>, parts: string[], value: JsonUIValue, path: string, create = false) {
    let target: Record<string, JsonUIValue> | JsonUIValue[] = root;
    for (const [index, part] of parts.entries()) {
        if (forbiddenKeys.has(part) || (Array.isArray(target) && (!/^(0|[1-9]\d*)$/.test(part) || Number(part) >= target.length))) {
            fail(path, 'Invalid write path.');
        }
        if (index === parts.length - 1) {
            (target as Record<string, JsonUIValue>)[part] = structuredClone(value);
            return;
        }
        let child = Object.hasOwn(target, part) ? (target as Record<string, JsonUIValue>)[part] : undefined;
        if (child === undefined && create) {
            child = {};
            (target as Record<string, JsonUIValue>)[part] = child;
        }
        if (!isRecord(child) && !Array.isArray(child)) fail(path, 'The parent of a write path must exist.');
        target = child as Record<string, JsonUIValue> | JsonUIValue[];
    }
}

export function sameJSON(a: unknown, b: unknown): boolean {
    if (Object.is(a, b)) return true;
    if (!a || !b || typeof a !== 'object' || typeof b !== 'object' || Array.isArray(a) !== Array.isArray(b)) return false;
    const keys = Object.keys(a);
    return keys.length === Object.keys(b).length && keys.every(key => Object.hasOwn(b, key) && sameJSON((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key]));
}

export function overlaps(a: string, b: string) {
    return a === b || a.startsWith(`${b}.`) || b.startsWith(`${a}.`);
}
