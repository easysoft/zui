import {nanoid} from 'nanoid';

/** Store type */
export type StoreType = 'local' | 'session';

const STR_PREFIX = '```ZUI_STR\n';

/**
 * Store for using localStorage and sessionStorage
 */
export class Store {
    #type: StoreType;

    #name: string;

    #userName: string;

    #storage: Storage;

    #alterStorage?: Store;

    /**
     * Create new store instance
     * @param name Name of store
     * @param type Store type
     */
    constructor(name?: string, type: StoreType = 'local') {
        this.#type = type;
        this.#userName = name ?? nanoid();
        this.#name = `ZUI_STORE:${this.#userName}`;
        this.#storage = type === 'local' ? localStorage : sessionStorage;
    }

    /**
     * Get store type
     */
    get type(): StoreType {
        return this.#type;
    }

    /**
     * Get session type store instance
     */
    get session(): Store {
        if (this.type === 'session') {
            return this;
        }
        if (!this.#alterStorage) {
            this.#alterStorage = new Store(this.#userName, 'session');
        }
        return this.#alterStorage;
    }

    #getActualKey(key: string): string {
        return `${this.#name}:${key}`;
    }

    /**
     * Get value from store.
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
        const value = this.#storage.getItem(this.#getActualKey(key));
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
     * Set key-value pair in store
     * @param key Key to set
     * @param value Value to set
     */
    set(key: string, value: unknown): void {
        if (value === undefined || value === null) {
            return this.remove(key);
        }
        this.#storage.setItem(this.#getActualKey(key), typeof value === 'string' ? `${STR_PREFIX}${value}` : JSON.stringify(value));
    }

    /**
     * Remove key-value pair from store
     * @param key Key to remove
     */
    remove(key: string): void {
        this.#storage.removeItem(this.#getActualKey(key));
    }

    /**
     * Iterate all key-value pairs in store
     * @param callback Callback function to call for each key-value pair in the store
     */
    each(callback: (name: string, value: unknown) => void): void {
        for (let i = 0; i < this.#storage.length; i++) {
            const key = this.#storage.key(i);
            if (key?.startsWith(this.#name)) {
                const value = this.#storage.getItem(key);
                if (typeof value === 'string') {
                    callback(key.substring(this.#name.length + 1), JSON.parse(value));
                }
            }
        }
    }

    /**
     * Get all key values in store
     * @returns All key-value pairs in the store
     */
    getAll(): Record<string, unknown> {
        const result: Record<string, unknown> = {};
        this.each((key, value) => {
            result[key] = value;
        });
        return result;
    }
}
