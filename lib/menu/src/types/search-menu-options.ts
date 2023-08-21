import type {ActionBasicProps} from '@zui/action-menu/src/types';
import type {SearchBoxOptions} from '@zui/search-box';
import type {MenuOptions} from './menu-options';
import type {MenuItemOptions} from './menu-item-options';

export interface SearchMenuOptions<T extends ActionBasicProps = MenuItemOptions> extends MenuOptions<T> {
    search?: SearchBoxOptions | boolean;
    searchPlacement?: 'bottom' | 'top';
}
