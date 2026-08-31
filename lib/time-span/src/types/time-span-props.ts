import type {CSSProperties} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {DateLike, DateFormatter} from '@zui/helpers';

export interface TimeSpanProps {
    style?: CSSProperties;
    time: DateLike;
    format?: string | DateFormatter;
    invalidText?: string;
    className?: ClassNameLike;
}
