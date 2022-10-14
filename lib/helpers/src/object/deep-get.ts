/**
 * Get all values in path from an object
 * @param object The object to access
 * @param pathName Access path
 * @returns All values in path
 * @example
 * const object = {
 *     a: [{b: {c: 1}, d: 2}]
 * };
 *
 * deepGetPath('a[0].b.c'); // Output [[{b: {c: 1}, d: 2}], {b: {c: 1}, {c: 1}, 1]
 */
export function deepGetPath(object: object, pathName: string | string[]): (object | undefined)[] {
    if (object === null || object === undefined) {
        return [object, undefined];
    }

    if (typeof pathName === 'string') {
        pathName = pathName.split('.');
    }

    const fullPath = pathName.join('.');
    let context = object;
    const way = [context];
    while (typeof context === 'object' && context !== null && pathName.length) {
        let name = pathName.shift()!;
        let subName: string | undefined;
        const bracketIndex = name.indexOf('[');
        if (bracketIndex > 0 && bracketIndex < (name.length - 1) && name.endsWith(']')) {
            subName = name.substring(bracketIndex + 1, name.length - 1);
            name = name.substring(0, bracketIndex);
        }

        context = context[name];
        way.push(context);
        if (subName !== undefined) {
            if (typeof context === 'object' && context !== null) {
                if (context instanceof Map) {
                    context = context.get(subName);
                } else {
                    context = context[subName];
                }
                way.push(context);
            } else {
                throw new Error(`Cannot access property "${name}[${subName}]", the full path is "${fullPath}".`);
            }
        }
    }

    if (pathName.length) {
        throw new Error(`Cannot access property with rest path "${pathName.join('.')}", the full path is "${fullPath}".`);
    }

    return way;
}

/**
 * Get object inner value with dot-strings
 * @param object The object to access
 * @param pathName Access path
 * @param defaultValue Default value
 * @returns Final value
 * @example
 * const object = {
 *     a: [{b: {c: 1}, d: 2}]
 * };
 *
 * deepGetPath('a[0].b.c'); // Output 1
 * deepGetPath('a[0].d');   // Output 2
 * deepGetPath('a');        // Output [{b: {c: 1}, d: 2}]
 */
export function deepGet<T>(object: object, pathName: string | string[], defaultValue?: T): T | undefined {
    const way = deepGetPath(object, pathName);
    const lastValue = way[way.length - 1] as T | undefined;
    return lastValue === undefined ? defaultValue : lastValue;
}
