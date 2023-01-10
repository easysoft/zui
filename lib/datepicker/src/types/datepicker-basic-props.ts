import type {JSX} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';

export type DatepickerBasicProps = Partial<{
    className: ClassNameLike;
    style: JSX.CSSProperties;
    format: string;
    minDate: string;
    maxDate: string;
    tagDate: string[];
    showOtherMonth: boolean;
}>;
