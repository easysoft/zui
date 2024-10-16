import type {DateLike} from '@zui/helpers';

export type MiniCalendarProps = {
    weekStart?: number;
    weekNames?: string[];
    monthNames?: string[];
    minDate?: DateLike;
    maxDate?: DateLike;
    isAllowDate?: (date: Date) => boolean | {allow: boolean, hint?: string};
    year?: number;
    month?: number;
    selections?: DateLike | DateLike[];
    highlights?: DateLike | DateLike[];
    onClickDate?: (date: string) => void;
};
