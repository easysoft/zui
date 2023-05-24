import {ComponentChildren, isValidElement} from 'preact';

export function renderIcon(icon: string | ComponentChildren) {
    if (isValidElement(icon)) {
        return icon;
    }
    if (typeof icon === 'string') {
        if (!icon.startsWith('icon-')) {
            icon = `icon-${icon}`;
        }
        return <i class={`icon ${icon}`} />;
    }
}
