import {TimepickerPlacement} from './timepicker-placement';
import type {JSX} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';

export interface TimepickerProps {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    showSeconds?: boolean;
    value?: string | Date;
    placement?: TimepickerPlacement;
    arrow?: boolean | number;
    onChange?: (value: string) => void;
}
