import type {SearchBoxOptions} from '@zui/search-box';
import type {MenuOptions} from './menu-options';

export interface SearchMenuOptions extends MenuOptions {
    search?: SearchBoxOptions | boolean;
    searchPlacement?: 'bottom' | 'top';
}
