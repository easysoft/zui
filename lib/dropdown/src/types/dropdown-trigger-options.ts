import type {ComponentChildren, JSX} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {DropdownOptions} from './dropdown-options';
import type {DropdownTriggerState} from './dropdown-trigger-state';
import type {MenuItemOptions} from '@zui/menu/src/types';
import type {ContextMenu} from '@zui/contextmenu/src/component/contextmenu';

export interface DropdownTriggerOptions {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    dropdown?: DropdownOptions;
    items?: MenuItemOptions[] | ((menu: ContextMenu) => MenuItemOptions[]),
    children?: ComponentChildren | ((state: DropdownTriggerState) => ComponentChildren);
}
