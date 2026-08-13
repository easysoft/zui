import '@testing-library/jest-dom/vitest';
import {cleanup} from '@testing-library/preact';
import {afterEach, beforeEach, vi} from 'vitest';
import {Component} from '@zui/core/src/component/component';

/** Flush the requestAnimationFrame queue used by Component.afterInit(). */
export async function flushAnimationFrame(): Promise<void> {
    await vi.advanceTimersByTimeAsync(0);
}

beforeEach(() => {
    vi.useFakeTimers();
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
        return window.setTimeout(() => callback(performance.now()), 0);
    });
    vi.stubGlobal('cancelAnimationFrame', (handle: number) => {
        window.clearTimeout(handle);
    });

    document.body.replaceChildren();
    document.documentElement.removeAttribute('class');
    document.documentElement.removeAttribute('style');
    window.localStorage?.clear?.();
    window.sessionStorage?.clear?.();
    window.history.replaceState({}, '', '/');
});

afterEach(() => {
    const instances = [...Component.ALL.values()].flatMap(components => [...components]);
    instances.reverse().forEach((component) => {
        component.destroy();
    });

    cleanup();

    Component.ALL.clear();
    Component.TYPED_ALL.clear();
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();

    document.body.replaceChildren();
    document.documentElement.removeAttribute('class');
    document.documentElement.removeAttribute('style');
});
