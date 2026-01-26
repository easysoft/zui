import type {CSSProperties} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {DateLike, DateFormatter} from '@zui/helpers/src/date-helper';

export interface TimeSpanProps {
    style?: CSSProperties;
    time: DateLike;
    format?: string | DateFormatter;
    invalidText?: string;
    className?: ClassNameLike;
}
