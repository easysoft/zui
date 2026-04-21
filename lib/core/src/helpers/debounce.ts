/* eslint-disable @typescript-eslint/no-explicit-any */
export type DebounceOptions = {
    delay?: number;
    immediate?: boolean;
};

export type DebouncedFunction<T extends (...args: any[]) => any> = T & {
    cancel: () => void;
};

/**
 * Creates a debounced function that delays invoking func until after delay milliseconds
 * have elapsed since the last time the debounced function was invoked.
 *
 * @param func - The function to debounce
 * @param optionsOrDelay - The delay in milliseconds or options object
 * @returns The debounced function with a cancel method
 */
export function debounce<T extends (...args: any[]) => any>(func: T, optionsOrDelay?: DebounceOptions | number): DebouncedFunction<T> {
    const options = typeof optionsOrDelay === 'number' ? {delay: optionsOrDelay} : optionsOrDelay;
    const {delay = 0, immediate = false} = options ?? {};

    let timer: number | null = null;

    const debounced = function (this: ThisType<T>, ...args: Parameters<T>) {
        const callNow = immediate && !timer;

        if (timer) {
            clearTimeout(timer);
        }

        timer = window.setTimeout(() => {
            timer = null;
            if (!immediate) {
                func.apply(this, args);
            }
        }, delay);

        if (callNow) {
            return func.apply(this, args);
        }
    } as DebouncedFunction<T>;

    // Add cancel method to allow manual cancellation
    debounced.cancel = function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    };

    return debounced;
}
