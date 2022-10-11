const elementMap = new Map<Element, Map<string, unknown>>();

export function getElementData<T>(element: Element, key: string): T | undefined {
    return elementMap.get(element)?.get(key) as T | undefined;
}

export function setElementData(element: Element, key: string, value: unknown) {
    let map = elementMap.get(element);
    if (!map) {
        map = new Map();
        elementMap.set(element, map);
    }
    map.set(key, value);
}

export function removeElementData(element: Element, key: string) {
    if (!elementMap.has(element)) {
        return false;
    }
    const map = elementMap.get(element);
    if (!map) {
        return false;
    }
    map.delete(key);
    if (!map.size) {
        elementMap.delete(element);
    }
    return true;
}

export const Data = {
    get: getElementData,
    set: setElementData,
    remove: removeElementData,
};
