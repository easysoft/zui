import type {JSX} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';

export interface DatetimepickerBasicProps {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    minYear?: number;
    maxYear?: number;
    format?: string;
    minDate?: string;
    maxDate?: string;
    tagDate?: string[];
    showOtherMonth?: boolean;
}
