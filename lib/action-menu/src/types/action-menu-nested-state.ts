import {ActionMenuItemKey} from './action-menu-item-key';

export type ActionMenuNestedState = {
    nestedShow?: boolean | Record<ActionMenuItemKey, boolean>;
};
