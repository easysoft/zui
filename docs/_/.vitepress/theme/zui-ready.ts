let timer = 0;
const callbacks: (() => void)[] = [];

export function onZUIReady(callback?: () => void) {
    if (timer) {
        cancelAnimationFrame(timer);
        timer = 0;
    }
    if (callback) {
        callbacks.push(callback);
    }

    if (typeof window === 'object' && 'zui' in window) {
        callbacks.forEach(x => x());
        callbacks.length = 0;
        return;
    }

    timer = requestAnimationFrame(() => onZUIReady());
}
