let timer = 0;
const callbacks = [];

export function onZUIReady(callback) {
    if (timer) {
        cancelAnimationFrame(timer);
        timer = 0;
    }
    if (callback) {
        callbacks.push(callback);
    }

    if (typeof window === 'object' && window.zui) {
        callbacks.forEach(x => x());
        callbacks.length = 0;
        return;
    }

    timer = requestAnimationFrame(() => onZUIReady());
}
