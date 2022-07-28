import {nanoid} from 'nanoid';

/** Store type */
export type StoreType = 'local' | 'session';

/**
 * Store for using localStorage and sessionStorage
 */
export class Store {
    #type: StoreType;

    #name: string;

    #storage: Storage;

    #alterStorage: Store;

    /**
     * Create new store instance
     * @param name Name of store
     * @param type Store type
     */
    constructor(name?: string, type: StoreType = 'local') {
        this.#type = type;
        this.#name = `ZUI_STORE:${name ?? nanoid()}`;
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
            this.#alterStorage = new Store(this.#name, 'session');
        }
        return this.#alterStorage;
    }

    #getActualKey(key: string): string {
        return `${this.#name}:${key}`;
    }

    /**
     * Get value from store
     * @param key Key to get
     * @param defaultValue default value to return if key is not found
     * @returns Value of key or defaultValue if key is not found
     */
    get(key: string, defaultValue?: unknown): unknown {
        const value = this.#storage.getItem(this.#getActualKey(key));
        if (typeof value === 'string') {
            return JSON.parse(value);
        }
        return value ?? defaultValue;
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
        this.#storage.setItem(this.#getActualKey(key), JSON.stringify(value));
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
