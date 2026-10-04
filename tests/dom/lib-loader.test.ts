import {afterEach, describe, expect, it, vi} from 'vitest';
import {$} from '@zui/core/src/cash';
import {LibLoader} from '@zui/core/src/helpers/lib-loader';

const libName = 'lib-loader-test';
const scriptID = `zui-lib-${libName}`;

afterEach(() => {
    document.getElementById(scriptID)?.remove();
    delete $.libMap?.[libName];
});

describe('LibLoader', () => {
    it.each([false, true])('rethrows the cached error after an initial load with throwError=%s', async (throwError) => {
        const error = new Error('Library check failed');
        const check = vi.fn(() => {
            throw error;
        });
        const loader = new LibLoader(libName, {src: '/lib-loader-test.js', check});

        const loading = loader.load({throwError});
        if (throwError) {
            await expect(loading).rejects.toBe(error);
        } else {
            await expect(loading).resolves.toBeUndefined();
        }

        await expect(loader.load()).resolves.toBeUndefined();
        await expect(loader.load({throwError: true})).rejects.toBe(error);
        await expect(loader.load({throwError: true})).rejects.toBe(error);
        expect(check).toHaveBeenCalledOnce();
        expect(loader.loaded).toBe(false);
        expect(() => loader.Module).toThrow('LibLoader.Module is not loaded');
    });

    it('retries a failed script explicitly and shares the pending retry with concurrent callers', async () => {
        const loader = new LibLoader(libName, {src: '/lib-loader-test.js', check: 'LibLoaderTestModule'});
        const loading = loader.load();
        await Promise.resolve();
        const failedScript = document.getElementById(scriptID)!;
        failedScript.dispatchEvent(new Event('error'));
        await expect(loading).resolves.toBeUndefined();

        const cachedFailure = await loader.load({throwError: true}).catch(error => error);
        expect(cachedFailure).toBeInstanceOf(Error);
        await expect(loader.load({throwError: true})).rejects.toBe(cachedFailure);
        expect(document.getElementById(scriptID)).toBe(failedScript);

        const retry = loader.load({noCache: true, throwError: true});
        const concurrentRetry = loader.load({noCache: true});
        const concurrentLoad = loader.load({throwError: true});
        await Promise.resolve();
        const script = document.getElementById(scriptID)!;
        expect(script).not.toBe(failedScript);
        expect(failedScript.isConnected).toBe(false);
        expect(document.querySelectorAll(`#${scriptID}`)).toHaveLength(1);

        const module = {ready: true};
        vi.stubGlobal('LibLoaderTestModule', module);
        script.dispatchEvent(new Event('load'));
        for (const result of await Promise.all([retry, concurrentRetry, concurrentLoad])) {
            expect(result).toBe(module);
        }
        expect(loader.loaded).toBe(true);
        expect(loader.Module).toBe(module);

        vi.stubGlobal('LibLoaderTestModule', undefined);
        await expect(loader.load({throwError: true})).resolves.toBe(module);
        expect(document.getElementById(scriptID)).toBe(script);
    });

    it('honors each concurrent caller\'s error mode when a shared script fails', async () => {
        const loader = new LibLoader(libName, {src: '/lib-loader-test.js', check: 'LibLoaderTestModule'});
        const silentLoad = loader.load();
        const strictLoad = loader.load({throwError: true});
        const results = Promise.allSettled([silentLoad, strictLoad]);
        await Promise.resolve();

        expect(document.querySelectorAll(`#${scriptID}`)).toHaveLength(1);
        document.getElementById(scriptID)!.dispatchEvent(new Event('error'));
        expect(await results).toEqual([
            {status: 'fulfilled', value: undefined},
            {status: 'rejected', reason: expect.any(Error)},
        ]);
        await expect(loader.load()).resolves.toBeUndefined();
        await expect(loader.load({throwError: true})).rejects.toThrow('Failed to load JS');
    });
});
