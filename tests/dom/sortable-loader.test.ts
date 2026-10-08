import {afterEach, expect, it, vi} from 'vitest';
import {$} from '@zui/core';
import {Sortable} from '@zui/sortable';

const originalResource = $.libMap?.sortablejs;
const selector = '#zui-lib-sortablejs';

afterEach(() => {
    document.querySelector(selector)?.remove();
    if (originalResource) {
        $.registerLib('sortablejs', originalResource);
    }
});

it('retries a cached failure and shares the pending resource with other callers', async () => {
    $.registerLib('sortablejs', {src: '/sortable-loader-test.js', check: 'Sortable'});
    const first = Sortable.loadModule();
    await Promise.resolve();
    const failedScript = document.querySelector(selector)!;
    failedScript.dispatchEvent(new Event('error'));
    await expect(first).resolves.toBeUndefined();
    await expect(Sortable.loadModule()).resolves.toBeUndefined();
    expect(document.querySelector(selector)).toBe(failedScript);

    const retry = Sortable.loadModule({noCache: true});
    const concurrentRetry = Sortable.loadModule({noCache: true});
    const concurrentLoad = Sortable.loadModule();
    await Promise.resolve();
    const retryScript = document.querySelector(selector)!;
    expect(retryScript).not.toBe(failedScript);
    expect(document.querySelectorAll(selector)).toHaveLength(1);

    const module = vi.fn();
    vi.stubGlobal('Sortable', module);
    retryScript.dispatchEvent(new Event('load'));
    await expect(Promise.all([retry, concurrentRetry, concurrentLoad])).resolves.toEqual([module, module, module]);
    expect(Sortable.Module).toBe(module);
    await expect(Sortable.loadModule()).resolves.toBe(module);
    await expect(Sortable.loadModule({noCache: true})).resolves.toBe(module);
    expect(document.querySelector(selector)).toBe(retryScript);
});
