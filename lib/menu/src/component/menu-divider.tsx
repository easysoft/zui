import {ClassNameLike, classes} from '@zui/browser-helpers/src/classes';
import '../style/menu-divider.css';

export type MenuDividerProps = {
    className?: ClassNameLike;
};

export function MenuDivider({className}: MenuDividerProps) {
    return (
        <div class={classes('menu-divider', className)} />
    );
}
