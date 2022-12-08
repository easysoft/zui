import type {ComponentChildren, JSX} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {TooltipTriggerState} from './tooltip-trigger-state';
import {TooltipOptions} from './tooltip-options';

export interface TooltipTriggerOptions {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    tooltip?: TooltipOptions;
    children?: ComponentChildren | ((state: TooltipTriggerState) => ComponentChildren);
}
