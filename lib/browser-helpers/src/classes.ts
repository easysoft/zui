export type ClassNameLike = null | undefined | string | {[key: string]: unknown} | (() => ClassNameLike) | ClassNameLike[];

export const classes = (...args: ClassNameLike[]): (string | undefined) => {
    const classNames = args.map(arg => {
        if (Array.isArray(arg)) {
            return classes(...arg);
        }
        if (typeof arg === 'function') {
            return classes(arg());
        }
        if (arg !== null && typeof arg === 'object') {
            return Object.keys(arg).filter(className => {
                const condition = arg[className];
                if (typeof condition === 'function') {
                    return !!(condition as () => boolean)();
                }
                return !!condition;
            }).join(' ');
        }
        return arg;
    }).filter(x => (typeof x === 'string') && x.length);
    return classNames.length ? classNames.join(' ') : undefined;
};
