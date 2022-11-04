import type {ComponentChildren, JSX} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {DropdownOptions} from './dropdown-options';

export interface DropdownTriggerOptions extends DropdownOptions {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    attrs?: JSX.HTMLAttributes;
    children?: ComponentChildren | (() => ComponentChildren);
}
