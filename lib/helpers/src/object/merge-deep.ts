import {isObject} from './is-object';

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 * @see https://stackoverflow.com/a/34749873
 */
export function mergeDeep(target: object, ...sources: object[]): object {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, {[key]: {}});
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, {[key]: source[key]});
            }
        }
    }

    return mergeDeep(target, ...sources);
}
