export function createUniqList<T extends unknown[]>(list: T): T {
    const set = new Set();
    return list.reduce<T>((uniqList, item) => {
        if (!set.has(item)) {
            set.add(item);
            uniqList.push(item);
        }
        return uniqList;
    }, [] as unknown as T);
}
