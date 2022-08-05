export type ClassNameLike = null | undefined | string | {[key: string]: unknown} | (() => ClassNameLike) | ClassNameLike[];

export const classes = (...args: ClassNameLike[]): string => (
    args.map(arg => {
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
    }).filter(x => (typeof x === 'string') && x.length).join(' ')
);
