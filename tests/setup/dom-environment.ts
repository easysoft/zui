import {vi} from 'vitest';

const memoryStorage = () => {
    const data = new Map<string, string>();
    return {
        get length() {
            return data.size;
        },
        clear() {
            data.clear();
        },
        getItem(key: string) {
            return data.get(key) ?? null;
        },
        key(index: number) {
            return [...data.keys()][index] ?? null;
        },
        removeItem(key: string) {
            data.delete(key);
        },
        setItem(key: string, value: string) {
            data.set(key, String(value));
        },
    } satisfies Storage;
};

Object.defineProperties(window, {
    localStorage: {configurable: true, value: memoryStorage()},
    sessionStorage: {configurable: true, value: memoryStorage()},
});

if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = vi.fn();
}

if (!globalThis.IntersectionObserver) {
    vi.stubGlobal('IntersectionObserver', class IntersectionObserverStub {
        disconnect() {
            return undefined;
        }

        observe() {
            return undefined;
        }

        unobserve() {
            return undefined;
        }
    });
}

if (!globalThis.ResizeObserver) {
    vi.stubGlobal('ResizeObserver', class ResizeObserverStub {
        disconnect() {
            return undefined;
        }

        observe() {
            return undefined;
        }

        unobserve() {
            return undefined;
        }
    });
}
