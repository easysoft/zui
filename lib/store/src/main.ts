import {Store, type StoreType} from './store';

export {Store} from './store';
export type {StoreType} from './store';

/**
 * 创建一个独立的存储实例。
 * @param name 存储配置 ID
 * @param type 存储类型，`local`（默认）或 `session`
 * @returns 新的 `Store` 实例
 */
function createStore(name?: string, type: StoreType = 'local'): Store {
    return new Store(name, type);
}

/**
 * 默认的持久存储实例，并附带用于创建独立实例的 `create` 方法。
 */
export const store: Store & {create: typeof createStore} = Object.assign(new Store('DEFAULT'), {create: createStore});
