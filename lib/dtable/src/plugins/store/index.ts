import {Store} from '@zui/store/src/store';
import {definePlugin} from '../../helpers/shared-plugins';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';

export interface DTableStoreTypes {
    options: {
        store: boolean;
    };
    data: {
        store: Store;
    },
}

export type DTableStore = DTableWithPlugin<DTableStoreTypes>;

const storePlugin: DTablePlugin<DTableStoreTypes> = {
    name: 'store',
    defaultOptions: {
        store: true,
    },
    when: options => !!options.store,
    data() {
        return {store: new Store(`DTable:${this.id}`)};
    },
};

export const store = definePlugin(storePlugin);
