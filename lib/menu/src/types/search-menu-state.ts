import {MenuState} from './menu-state';

export type SearchMenuState = MenuState & {
    search: string;
};
