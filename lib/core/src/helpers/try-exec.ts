// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function tryExec<F extends (...args: any[]) => any>(fn: F, args: Parameters<F>, onError?: (error: Error) => void): ReturnType<F> | undefined {
    try {
        return fn(...args);
    } catch (error) {
        onError?.(error as Error);
    }
}
