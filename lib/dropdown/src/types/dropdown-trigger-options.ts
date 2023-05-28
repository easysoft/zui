import type {ComponentChildren, JSX} from 'preact';
import type {ClassNameLike} from '@zui/core';
import {DropdownOptions} from './dropdown-options';
import {DropdownTriggerState} from './dropdown-trigger-state';

export interface DropdownTriggerOptions {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    dropdown?: DropdownOptions;
    children?: ComponentChildren | ((state: DropdownTriggerState) => ComponentChildren);
}
