import type {FetcherSetting} from '../../ajax';
import type {CustomContentType} from './custom-content-type';

export type LazyContentProps = {
    fetcher: FetcherSetting<string | CustomContentType>;
    loadingText?: string;
    errorText?: string;
    type?: 'html' | 'text' | 'custom';
};
