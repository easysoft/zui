import {$, Cash} from '../cash';

/**
 * Classname like.
 */
export type ClassNameLike = string | null | undefined | boolean | {[key: string]: unknown} | (() => ClassNameLike) | ClassNameLike[];

/**
 * Classname setting.
 */
export type ClassNameSetting = [name: string, toggle: boolean];

/**
 * Get class name setting list from arguments.
 *
 * @param args Classname like arguments.
 * @returns Classname setting list.
 */
export function getClassList(...args: ClassNameLike[]): ClassNameSetting[] {
    const settings: ClassNameSetting[] = [];

    /* Indexes map to keep classname's order. */
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

/**
 * Get classname string from arguments.
 *
 * @param args Classname like arguments.
 * @returns Classname string.
 */
export const classes = (...args: ClassNameLike[]): string => {
    return getClassList(...args).reduce<string[]>((classList, [name, toggle]) => {
        if (toggle) {
            classList.push(name);
        }
        return classList;
    }, []).join(' ');
};

/* Declare types. */
declare module 'cash-dom' {
    interface CashStatic {
        classes(...args: ClassNameLike[]): string;
    }

    interface Cash {
        setClass(merge: ClassNameLike | boolean, ...args: ClassNameLike[]): Cash;
    }
}

/* Extend as $.classes() */
$.classes = classes;

/* Extend as $.fn.setClass() */
$.fn.setClass = function (this: Cash, merge: ClassNameLike | boolean, ...args: ClassNameLike[]): Cash {
    return this.each((_, ele) => {
        const $ele = $(ele);
        if (merge === true) {
            $ele.attr('class', classes($ele.attr('class'), ...args));
        } else {
            $ele.addClass(classes(merge, ...args));
        }
    });
};
