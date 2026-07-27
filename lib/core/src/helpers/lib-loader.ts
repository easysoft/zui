import {getLib, registerLib, type GetLibOptions} from './get-lib';

export class LibLoader<T = unknown> {
    protected _module?: T;

    protected _name: string;

    protected _error?: Error;

    constructor(name: string, options?: GetLibOptions) {
        this._name = name;
        if (options) {
            this.register(options);
        }
    }

    get loaded() {
        return !!this._module;
    }

    get Module(): T {
        if (!this._module) {
            throw new Error('[ZUI] LibLoader.Module is not loaded.');
        }
        return this._module;
    }

    register(options: GetLibOptions) {
        registerLib(this._name, options);
    }

    async load(options?: {throwError?: boolean; noCache?: boolean}) {
        const {throwError, noCache} = options || {};
        if (!noCache) {
            if (this._module !== undefined) {
                return this._module;
            }
            if (this._error) {
                return;
            }
        }
        try {
            this._module = await getLib(this._name);
        } catch (error) {
            this._error = error as Error;
            if (throwError) {
                throw error;
            }
        }
        return this._module;
    }
}
