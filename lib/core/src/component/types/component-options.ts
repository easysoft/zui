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
export type ComponentOptions<O extends {} = {}> = ComponentBaseOptions & O;
