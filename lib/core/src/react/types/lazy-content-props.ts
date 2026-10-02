import type {JSX} from 'preact/jsx-runtime';
import type {FetcherSetting} from '../../ajax';
import type {ClassNameLike} from '../../helpers';
import type {CustomContentType} from './custom-content-type';

export interface LazyContentProps<T = string | CustomContentType, A extends unknown[] = unknown[], THIS = unknown> {
    /** Native tag used by the loading container. Defaults to div. */
    tag?: keyof HTMLElementTagNameMap;
    id?: string;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    attrs?: Record<string, unknown>;
    contentClass?: ClassNameLike;
    contentStyle?: JSX.CSSProperties;
    contentAttrs?: Record<string, unknown>;
    loadingClass?: ClassNameLike;
    loadingIndicator?: boolean;
    clearBeforeLoad?: boolean;
    loadingContent?: CustomContentType;
    fetcher: FetcherSetting<T, A, THIS>;
    fetcherArgs?: A;
    fetcherThis?: THIS;
    loadingText?: string;
    errorText?: string;
    type?: 'html' | 'text' | 'custom';
    /** Defaults to true for legacy HTML rendering outside a content policy. */
    executeScript?: boolean;
    /** Synchronous host transformation; failures use the normal loading error state. */
    transformContent?: (content: T) => CustomContentType;
}
