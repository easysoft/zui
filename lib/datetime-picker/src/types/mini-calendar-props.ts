import type {DateLike} from '@zui/helpers';

export type MiniCalendarProps = {
    weekStart?: number;
    weekNames?: string[];
    monthNames?: string[];
    year?: number;
    month?: number;
    selections?: DateLike | DateLike[];
    highlights?: DateLike | DateLike[];
    onClickDate?: (date: string) => void;
};
