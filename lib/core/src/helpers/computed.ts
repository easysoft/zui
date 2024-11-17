import {isDiff} from './is-diff';

/**
 * A class representing a computed value that can be cached and recomputed when its dependencies change.
 * @template T The type of the computed value.
 * @template D The type of the dependencies array.
 */
export class Computed<T = unknown, D extends unknown[] = unknown[]> {
    /**
     * The dependencies of the computed value.
     */
    protected _dependencies: D | (() => D);

    /**
     * The function that computes the value.
     */
    protected _compute: () => T;

    /**
     * The cached value of the computed value.
     */
    protected _value?: T;

    /**
     * The last dependencies array used to compute the value.
     */
    protected _lastDependencies: D | undefined;

    /**
     * Creates a new Computed instance.
     * @param compute      The function that computes the value.
     * @param dependencies The dependencies of the computed value.
     */
    constructor(compute: () => T, dependencies: D | (() => D)) {
        this._compute = compute;
        this._dependencies = dependencies;
    }

    /**
     * Gets the computed value.
     */
    get value(): T {
        return this.compute();
    }

    /**
     * Gets the cached value of the computed value.
     */
    get cache(): T {
        return this._lastDependencies ? this._value as T : this.compute();
    }

    /**
     * Set the dependencies of the computed value.
     *
     * @param dependencies The dependencies of the computed value.
     * @returns The computed value.
     */
    depends(dependencies: D | (() => D)) {
        this._dependencies = dependencies;
        return this;
    }

    /**
     * Forces the computed value to be recomputed.
     * @param dependencies The new dependencies to use for recomputing the value.
     * @returns The recomputed value.
     */
    forceCompute(dependencies?: D | (() => D)) {
        this._lastDependencies = undefined;
        return this.compute(dependencies);
    }

    /**
     * Computes the value of the computed value.
     * @param dependencies The dependencies to use for computing the value.
     * @returns The computed value.
     */
    compute(dependencies?: D | (() => D)): T {
        if (dependencies !== undefined) {
            this._dependencies = dependencies;
        }

        dependencies = this._dependencies;
        if (typeof dependencies === 'function') {
            dependencies = dependencies();
        }

        // Check if dependencies changed.
        const lastDependencies = this._lastDependencies;
        if (!lastDependencies || dependencies.some((dept, index) => {
            if (dept instanceof Computed) {
                return dept.value !== lastDependencies[index];
            }
            return isDiff(dept, lastDependencies[index]);
        })) {
            this._value = this._compute();
            this._lastDependencies = dependencies.map(x => x instanceof Computed ? x.cache : x) as D;
        }

        return this._value as T;
    }
}
