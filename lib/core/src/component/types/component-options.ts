import type {I18nLangMap} from '../../i18n';

/**
 * The component base options.
 */
export type ComponentBaseOptions = {
    lang?: string;
    i18n?: I18nLangMap;
};

/**
 * The component options.
 */
export type ComponentOptions<O extends {} = {}> = ComponentBaseOptions & O;
