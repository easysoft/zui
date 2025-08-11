export type DebounceOptions = {
    delay?: number;
    immediate?: boolean;
};

export function debounce<T extends (...args: unknown[]) => unknown>(func: T, optionsOrDelay?: DebounceOptions | number): T {
    const options = typeof optionsOrDelay === 'number' ? {delay: optionsOrDelay} : optionsOrDelay;
    const {delay = 0, immediate = false} = options ?? {};

    let timer: number | null = null;
    let result: unknown;

    const debounced = function (this: ThisType<T>, ...args: Parameters<T>) {
        if (timer) {
            clearTimeout(timer);
        }

        if (immediate) {
            if (timer) {
                timer = window.setTimeout(() => timer = null, delay);
            } else {
                result = func.apply(this, args);
                return result;
            }
        } else {
            timer = window.setTimeout(() => func.apply(this, args), delay);
        }

        return result as ReturnType<T>;
    };

    return debounced as T;
}
