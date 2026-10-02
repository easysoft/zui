import {JSDOM} from 'jsdom';
import {vi} from 'vitest';

export async function withBrowserGlobals<T>(callback: (dom: JSDOM) => Promise<T>): Promise<T> {
    vi.useFakeTimers({toFake: ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval']});
    const dom = new JSDOM('<!doctype html><html><body></body></html>', {
        runScripts: 'outside-only',
        url: 'http://localhost/',
    });
    const descriptors = new Map<PropertyKey, PropertyDescriptor | undefined>();
    const defineGlobal = (key: PropertyKey, value: unknown) => {
        descriptors.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
        Object.defineProperty(globalThis, key, {configurable: true, value, writable: true});
    };

    defineGlobal('window', dom.window);
    defineGlobal('document', dom.window.document);
    defineGlobal('localStorage', dom.window.localStorage);
    defineGlobal('sessionStorage', dom.window.sessionStorage);
    defineGlobal('navigator', dom.window.navigator);
    defineGlobal('HTMLElement', dom.window.HTMLElement);
    defineGlobal('Element', dom.window.Element);
    defineGlobal('Node', dom.window.Node);
    defineGlobal('Event', dom.window.Event);
    defineGlobal('CustomEvent', dom.window.CustomEvent);
    defineGlobal('MutationObserver', dom.window.MutationObserver);
    defineGlobal('getComputedStyle', dom.window.getComputedStyle.bind(dom.window));
    defineGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
        return dom.window.setTimeout(() => callback(dom.window.performance.now()), 0);
    });
    defineGlobal('cancelAnimationFrame', (handle: number) => dom.window.clearTimeout(handle));

    try {
        return await callback(dom);
    } finally {
        for (const [key, descriptor] of descriptors) {
            if (descriptor) {
                Object.defineProperty(globalThis, key, descriptor);
            } else {
                Reflect.deleteProperty(globalThis, key);
            }
        }
        dom.window.close();
        vi.clearAllTimers();
        vi.useRealTimers();
    }
}
