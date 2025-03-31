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

    protected _storage: Storage;

    protected _altStorage?: Store;

    protected _cache = new Map<string, unknown>();

    /**
     * Create new store instance.
     * @param id   Store profile ID.
     * @param type Store type.
     */
    constructor(id: string = '', type: StoreType = 'local') {
        this._type = type;
        this._id = id;
        this._name = `ZUI_STORE:${this._id}`;
        this._storage = type === 'local' ? localStorage : sessionStorage;
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
        const value = this._storage.getItem(this._getKey(key));
        if (typeof value === 'string') {
            if (value.startsWith(STR_PREFIX)) {
                return value.substring(STR_PREFIX.length) as T;
            }
            try {
                return JSON.parse(value);
            // eslint-disable-next-line no-empty
            } catch (_error) {}
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
        try {
            this._storage.setItem(this._getKey(key), typeof value === 'string' ? `${STR_PREFIX}${value}` : JSON.stringify(value));
        } catch (error) {
            this.setCache(key, value);
            console.warn(`[ZUI] Failed to set value to ${this._type} store: ${this._getKey(key)}, use cache instead.`, error);
        }
    }

    /**
     * Remove key-value pair from store.
     *
     * @param key Key to remove.
     */
    remove(key: string): void {
        this._cache.delete(key);
        this._storage.removeItem(this._getKey(key));
    }

    /**
     * Iterate all key-value pairs in store.
     *
     * @param callback Callback function to call for each key-value pair in the store.
     */
    each(callback: (name: string, value: unknown) => void): void {
        const keys: string[] = [];
        for (let i = 0; i < this._storage.length; i++) {
            const key = this._storage.key(i);
            if (key?.startsWith(this._name)) {
                const value = this._storage.getItem(key);
                const name = key.substring(this._name.length + 1);
                if (typeof value === 'string') {
                    callback(name, JSON.parse(value));
                }
                keys.push(name);
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
