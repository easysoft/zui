/**
 * Get all values along an access path from an object.
 *
 * The returned array starts with the source object itself and appends every
 * intermediate value visited while walking the path, so the last element is the
 * final value. Values may be of any type (objects, arrays, numbers, strings…),
 * which is why the return type is `unknown[]`.
 *
 * The caller's `pathName` array is never mutated; the path segments are copied
 * internally before traversal.
 *
 * @param object The object to access
 * @param pathName Access path, either a dot string like `a[0].b.c` or an array of segments
 * @returns All values visited along the path, source object first, final value last
 * @throws When a bracket sub-path is applied to a non-object, or when the path cannot be fully resolved
 * @example
 * const object = {
 *     a: [{b: {c: 1}, d: 2}]
 * };
 *
 * deepGetPath(object, 'a[0].b.c'); // Output [object, [{b: {c: 1}, d: 2}], {b: {c: 1}, d: 2}, {c: 1}, 1]
 */
export function deepGetPath(object: object, pathName: string | string[]): unknown[] {
    if (object === null || object === undefined) {
        return [object, undefined];
    }

    const segments = typeof pathName === 'string' ? pathName.split('.') : [...pathName];

    const fullPath = segments.join('.');
    let context: unknown = object;
    const way: unknown[] = [context];
    while (typeof context === 'object' && context !== null && segments.length) {
        let name = segments.shift()!;
        let subName: string | undefined;
        const bracketIndex = name.indexOf('[');
        if (bracketIndex > 0 && bracketIndex < (name.length - 1) && name.endsWith(']')) {
            subName = name.substring(bracketIndex + 1, name.length - 1);
            name = name.substring(0, bracketIndex);
        }

        context = (context as Record<string, unknown>)[name];
        way.push(context);
        if (subName !== undefined) {
            if (typeof context === 'object' && context !== null) {
                if (context instanceof Map) {
                    context = context.get(subName);
                } else {
                    context = (context as Record<string, unknown>)[subName];
                }
                way.push(context);
            } else {
                throw new Error(`Cannot access property "${name}[${subName}]", the full path is "${fullPath}".`);
            }
        }
    }

    if (segments.length) {
        throw new Error(`Cannot access property with rest path "${segments.join('.')}", the full path is "${fullPath}".`);
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
 * deepGetPath(object, 'a[0].b.c'); // Output 1
 * deepGetPath(object, 'a[0].d');   // Output 2
 * deepGetPath(object, 'a');        // Output [{b: {c: 1}, d: 2}]
 */
export function deepGet<T>(object: object, pathName: string | string[], defaultValue?: T | undefined, onGetParent?: (parent: object, name: string) => void): T | undefined {
    const segments = typeof pathName === 'string' ? pathName.split('.') : pathName;

    try {
        const way = deepGetPath(object, segments);
        const length = way.length;
        const lastValue = way[length - 1] as T | undefined;
        if (onGetParent) {
            onGetParent(length > 1 ? way[length - 2] as object : object, segments[segments.length - 1]);
        }
        return lastValue === undefined ? defaultValue : lastValue;
    } catch (_) {
        return defaultValue;
    }
}

/**
 * 按访问路径取出对象中的函数并调用它。
 *
 * 若目标不是函数，则在 `throws` 为真时抛出错误，否则原样返回该值。调用时 `this`
 * 默认指向该函数所在的父对象，可通过 `thisObj` 覆盖。
 * @param object 要访问的对象
 * @param pathName 访问路径，点字符串或路径片段数组
 * @param args 调用函数时传入的参数
 * @param thisObj 调用时的 `this`，留空时使用函数所在的父对象
 * @param throws 目标不是函数时是否抛出错误
 * @returns 函数调用结果；目标非函数且不抛错时返回该值本身
 */
export function deepCall(object: object, pathName: string | string[], args?: unknown[], thisObj?: unknown, throws?: boolean): unknown {
    let parent: object | undefined;
    const callback = deepGet(object, pathName, undefined, (p) => {
        parent = p;
    }) as unknown;
    if (typeof callback === 'function') {
        return callback.apply(thisObj ?? parent, args);
    }
    if (throws) {
        throw new Error(`Cannot call function "${Array.isArray(pathName) ? pathName.join('.') : pathName}" on object:`, object);
    }
    return callback;
}
