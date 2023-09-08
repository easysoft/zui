import {$} from '../cash';

export function mergeProps<T extends Record<string, unknown> = Record<string, unknown>>(props: Record<string, unknown>, ...args: unknown[]) {
    args.forEach(arg => {
        if (!$.isPlainObject(arg)) {
            return;
        }
        Object.keys(arg as Partial<T>).forEach(key => {
            let value = arg[key];
            const oldValue = props[key];
            if (oldValue !== undefined) {
                if (key === 'className' || key.endsWith('Class')) {
                    value = [oldValue, value];
                } else if (key === 'children') {
                    value = [...(Array.isArray(oldValue) ? oldValue : [oldValue]), ...(Array.isArray(value) ? value : [value])];
                } else if ($.isPlainObject(oldValue) && (key === 'style' || key.endsWith('Style') || key === 'attrs' || key.endsWith('Attrs'))) {
                    value = $.extend(oldValue, value);
                }
            }
            props[key] = value;
        });
    });
    return props;
}

export function removeUndefinedProps(props: Record<string, unknown>) {
    Object.keys(props).forEach(key => {
        if (props[key] === undefined) {
            delete props[key];
        }
    });
    return props;
}
