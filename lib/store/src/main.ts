import {Store, StoreType} from './store';

export type {Store} from './store';

export const store = new Store('DEFAULT');

function createStore(name?: string, type: StoreType = 'local') {
    return new Store(name, type);
}

Object.assign(store, {create: createStore});
