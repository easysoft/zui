import {$} from '../cash';
import {ClassNameLike, classes} from './classes';

export function mergeProps(props: Record<string, unknown>, ...args: unknown[]) {
    args.forEach(arg => {
        if (!$.isPlainObject(arg)) {
            return;
        }
        Object.keys(arg).forEach(key => {
            let value = arg[key];
            if (key === 'className' || key.endsWith('Class')) {
                value = props[key] ? classes(props[key] as ClassNameLike, value) : value;
            } else if (key === 'style' || key.endsWith('Style')) {
                value = props[key] ? $.extend(props[key] as ClassNameLike, value) : value;
            }
            props[key] = value;
        });
    });
    return props;
}
