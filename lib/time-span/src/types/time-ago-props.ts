import type {CSSProperties} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {DateLike} from '@zui/helpers';

export interface TimeAgoProps {
    style?: CSSProperties;
    className?: ClassNameLike;
    time: DateLike;
    lang?: string;
    invalidText?: string;
    hint?: string | boolean;
    hintFormat?: string;
    now?: DateLike;
}
