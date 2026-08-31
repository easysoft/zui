/** Store type. */
export type StoreType = 'local' | 'session';

const STR_PREFIX = '```ZUI_STR\n';

/**
 * Store for using localStorage and sessionStorage.
 */
export class Store {
    protected _type: StoreType;

    protected _name: string;

    protected _id: string;

    protected _storage?: Storage;

    protected _altStorage?: Store;

    protected _cache = new Map<string, unknown>();

    /**
     * Create new store instance.
     * @param id   Store profile ID.
     * @param type Store type.
     */
    constructor(id = '', type: StoreType = 'local') {
        this._type = type;
        this._id = id;
        this._name = `ZUI_STORE:${this._id}`;
        this._storage = Store.getStorage(type);
    }

    /**
     * Safely acquire the underlying Storage object.
     *
     * Accessing `localStorage`/`sessionStorage` may throw in restricted
     * environments (disabled storage, sandboxed iframe, etc.). In that case the
     * store falls back to an in-memory cache instead of failing to construct.
     * @param type Store type.
     * @returns The Storage object, or undefined when it is not available.
     */
    protected static getStorage(type: StoreType): Storage | undefined {
        try {
            return type === 'local' ? localStorage : sessionStorage;
        } catch (error) {
            console.warn(`[ZUI] The ${type} storage is not available, use in-memory cache instead.`, error);
            return undefined;
        }
    }

    /**
     * Read a raw string value from the underlying storage with error protection.
     * @param fullKey Fully-qualified storage key.
     * @returns The raw string, or null when missing or unavailable.
     */
    protected _readRaw(fullKey: string): string | null {
        if (!this._storage) {
            return null;
        }
        try {
            return this._storage.getItem(fullKey);
        } catch (error) {
            console.warn(`[ZUI] Failed to read value from ${this._type} store: ${fullKey}.`, error);
            return null;
        }
    }

    /**
     * Get store type.
     */
    get type(): StoreType {
        return this._type;
    }

    /**
     * Get session type store instance.
     */
    get session(): Store {
        if (this.type === 'session') {
            return this;
        }
        if (!this._altStorage) {
            this._altStorage = new Store(this._id, 'session');
        }
        return this._altStorage;
    }

    protected _getKey(key: string): string {
        return `${this._name}:${key}`;
    }

    /**
     * Switch store profile.
     *
     * @param id Store profile ID.
     */
    switch(id: string) {
        this._id = id;
        this._name = `ZUI_STORE:${this._id}`;
        this._cache.clear();
        // 同步已经创建的 session 实例，避免切换后 session 仍写入旧配置名。
        if (this._altStorage) {
            this._altStorage.switch(id);
        }
    }

    /**
     * Get value from store.
     *
     * @param key Key to get
     * @returns Value of key or undefined if key is not found
     */
    get<T>(key: string): T | undefined;

    /**
     * Get value from store, if key is not found, return defaultValue.
     *
     * @param key          Key to get.
     * @param defaultValue Default value to return if key is not found.
     */
    get<T>(key: string, defaultValue: T): T;

    /**
     * Get value from store.
     *
     * @param key          Key to get.
     * @param defaultValue Default value to return if key is not found.
     * @returns Value of key or defaultValue if key is not found.
     */
    get<T>(key: string, defaultValue?: T): T | undefined {
        if (this._cache.has(key)) {
            return this._cache.get(key) as T;
        }
        const value = this._readRaw(this._getKey(key));
        if (typeof value === 'string') {
            return this.parseValue(value);
        }
        return (value as T) ?? defaultValue;
    }

    /**
     * Set cache value.
     * @param key Key to set.
     * @param value Value to set.
     */
    setCache(key: string, value: unknown): void {
        this._cache.set(key, value);
    }

    /**
     * Set key-value pair in store.
     *
     * @param key Key to set.
     * @param value Value to set.
     */
    set(key: string, value: unknown): void {
        if (value === undefined || value === null) {
            return this.remove(key);
        }
        const raw = typeof value === 'string' ? `${STR_PREFIX}${value}` : JSON.stringify(value);
        if (this._storage) {
            try {
                this._storage.setItem(this._getKey(key), raw);
                // 写入持久存储成功后清除同名回退缓存，避免陈旧缓存遮蔽后续读取。
                this._cache.delete(key);
                return;
            } catch (error) {
                console.warn(`[ZUI] Failed to set value to ${this._type} store: ${this._getKey(key)}, use cache instead.`, error);
            }
        }
        this.setCache(key, value);
    }

    /**
     * Remove key-value pair from store.
     *
     * @param key Key to remove.
     */
    remove(key: string): void {
        this._cache.delete(key);
        if (this._storage) {
            try {
                this._storage.removeItem(this._getKey(key));
            } catch (error) {
                console.warn(`[ZUI] Failed to remove value from ${this._type} store: ${this._getKey(key)}.`, error);
            }
        }
    }

    /**
     * Parse value from string.
     * @param value Value to parse.
     * @param throws Whether to throw an error if the value is not a string.
     * @returns Parsed value.
     */
    parseValue<T>(value: unknown, throws = false): T {
        if (typeof value === 'string') {
            if (value.startsWith(STR_PREFIX)) {
                return value.substring(STR_PREFIX.length) as T;
            }
            try {
                return JSON.parse(value);
            } catch (error) {
                if (throws) {
                    throw error;
                }
            }
        }
        return value as T;
    }

    /**
     * Iterate all key-value pairs in store.
     *
     * @param callback Callback function to call for each key-value pair in the store.
     */
    each(callback: (name: string, value: unknown) => void): void {
        const keys: string[] = [];
        // 使用带冒号的完整前缀过滤，避免配置 `foo` 读取到 `foobar` 的数据。
        const prefix = `${this._name}:`;
        if (this._storage) {
            try {
                for (let i = 0; i < this._storage.length; i++) {
                    const key = this._storage.key(i);
                    if (key?.startsWith(prefix)) {
                        const value = this._storage.getItem(key);
                        const name = key.substring(prefix.length);
                        if (typeof value === 'string') {
                            callback(name, this.parseValue(value));
                        }
                        keys.push(name);
                    }
                }
            } catch (error) {
                console.warn(`[ZUI] Failed to iterate ${this._type} store.`, error);
            }
        }
        for (const key of this._cache.keys()) {
            if (!keys.includes(key)) {
                callback(key, this._cache.get(key));
            }
        }
    }

    /**
     * Get all key values in store.
     *
     * @returns All key-value pairs in the store.
     */
    getAll(): Record<string, unknown> {
        const result: Record<string, unknown> = {};
        this.each((key, value) => {
            result[key] = value;
        });
        for (const key of this._cache.keys()) {
            result[key] = this._cache.get(key);
        }
        return result;
    }
}
