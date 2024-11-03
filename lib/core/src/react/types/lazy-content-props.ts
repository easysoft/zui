import type {FetcherSetting} from '../../ajax';
import type {CustomContentType} from './custom-content-type';

export type LazyContentProps<T = string | CustomContentType, A extends unknown[] = unknown[], THIS = unknown> = {
    fetcher: FetcherSetting<T, A, THIS>;
    fetcherArgs: A;
    fetcherThis?: THIS;
    loadingText?: string;
    errorText?: string;
    type?: 'html' | 'text' | 'custom';
};
