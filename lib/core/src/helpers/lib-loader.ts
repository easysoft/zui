import {getLib, registerLib, type GetLibOptions} from './get-lib';

export class LibLoader<T = unknown> {
    protected _module?: T;

    protected _name: string;

    constructor(name: string, options?: GetLibOptions) {
        this._name = name;
        if (options) {
            this.register(options);
        }
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

    async load() {
        this._module = await getLib(this._name);
        if (!this._module) {
            throw new Error(`[ZUI] Failed to load lib: ${this._name}`);
        }
        return this._module!;
    }
}
