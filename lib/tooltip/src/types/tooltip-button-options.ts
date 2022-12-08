import {ButtonProps} from '@zui/button/src/types';
import {TooltipTriggerOptions} from './tooltip-trigger-options';

export interface TooltipButtonOptions extends TooltipTriggerOptions, ButtonProps {
    children?: TooltipTriggerOptions['children'];
}
