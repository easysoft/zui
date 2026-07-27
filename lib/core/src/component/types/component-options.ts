import type {JSX} from 'preact';
import type {FetcherSetting} from '../../ajax';
import type {ClassNameLike} from '../../helpers';
import type {I18nLangMap} from '../../i18n';

/**
 * The component base options.
 */
export type ComponentBaseOptions = {
    key?: string | number;
    lang?: string;
    i18n?: I18nLangMap;
    $optionsFromDataset?: boolean;
    $reset?: boolean;
    $notDestroyOnDetach?: boolean;
};

/**
 * The component options.
 */
export type ComponentOptions<O extends object = object> = ComponentBaseOptions & O & {
    $options?: Partial<O> | ((element: HTMLElement, options: Partial<O>) => Partial<O> | undefined);
    $fetcher?: FetcherSetting<Partial<O>>;
    $onCreate?: () => void;
    $onInited?: () => void;
    $onDestroy?: () => void;
    $class?: ClassNameLike;
    $style?: JSX.CSSProperties;
};
