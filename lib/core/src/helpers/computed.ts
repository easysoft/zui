/**
 * Computed value.
 */
export class Computed<T = unknown, D extends unknown[] = unknown[]> {
    static DIRTY_VALUE = Symbol();

    protected _dependencies: D | (() => D);

    protected _compute: () => T;

    protected _value: T | typeof Computed.DIRTY_VALUE  = Computed.DIRTY_VALUE;

    protected _lastDependencies: D | undefined;

    constructor(compute: () => T, dependencies: D | (() => D)) {
        this._compute = compute;
        this._dependencies = dependencies;
    }

    get value(): T {
        return this.compute();
    }

    forceCompute(dependencies?: D | (() => D)) {
        this._value = Computed.DIRTY_VALUE;
        return this.compute(dependencies);
    }

    compute(dependencies?: D | (() => D)): T {
        if (dependencies !== undefined) {
            this._dependencies = dependencies;
        }

        dependencies = this._dependencies;
        if (typeof dependencies === 'function') {
            dependencies = dependencies();
        }

        // Check if dependencies changed
        if (this._value === Computed.DIRTY_VALUE || !this._lastDependencies || dependencies.some((dep, i) => dep !== this._lastDependencies![i])) {
            this._value = this._compute();
            this._lastDependencies = dependencies;
        }

        return this._value as T;
    }
}
