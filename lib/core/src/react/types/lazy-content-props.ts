import type {JSX} from 'preact/jsx-runtime';
import type {FetcherSetting} from '../../ajax';
import type {ClassNameLike} from '../../helpers';
import type {CustomContentType} from './custom-content-type';

export type LazyContentProps<T = string | CustomContentType, A extends unknown[] = unknown[], THIS = unknown> = {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    attrs?: Record<string, unknown>;
    loadingClass?: ClassNameLike;
    loadingIndicator?: boolean;
    loadingContent?: CustomContentType;
    fetcher: FetcherSetting<T, A, THIS>;
    fetcherArgs: A;
    fetcherThis?: THIS;
    loadingText?: string;
    errorText?: string;
    type?: 'html' | 'text' | 'custom';
};
