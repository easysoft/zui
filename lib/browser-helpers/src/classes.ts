export type ClassNameLike = null | undefined | string | {[key: string]: unknown} | (() => ClassNameLike) | ClassNameLike[];

export type ClassNameSetting = [name: string, toggle: boolean];

export function getClassList(...args: ClassNameLike[]): ClassNameSetting[] {
    const settings: ClassNameSetting[] = [];

    /* Indexes map to keep classname's order */
    const indexes = new Map<string, number>();

    const setSetting = (name: string | [name: string, toggle?: unknown], toggle?: unknown) => {
        if (Array.isArray(name)) {
            toggle = name[1];
            name = name[0];
        }
        if (!name.length) {
            return;
        }
        const index = indexes.get(name);
        if (typeof index === 'number') {
            settings[index][1] = !!toggle;
        } else {
            indexes.set(name, settings.length);
            settings.push([name, !!toggle]);
        }
    };

    args.forEach((arg) => {
        if (typeof arg === 'function') {
            arg = arg();
        }

        if (Array.isArray(arg)) {
            getClassList(...arg).forEach(setSetting);
        } else if (arg && typeof arg === 'object') {
            Object.entries(arg).forEach(setSetting);
        } else if (typeof arg === 'string') {
            arg.split(' ').forEach(name => setSetting(name, true));
        }
    });

    return settings.sort((a, b) => (indexes.get(a[0]) || 0) - (indexes.get(b[0]) || 0));
}

export const classes = (...args: ClassNameLike[]): string => {
    return getClassList(...args).reduce<string[]>((classList, [name, toggle]) => {
        if (toggle) {
            classList.push(name);
        }
        return classList;
    }, []).join(' ');
};
