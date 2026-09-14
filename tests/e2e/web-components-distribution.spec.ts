import {execFile} from 'node:child_process';
import {createServer} from 'node:http';
import {promises as fs} from 'node:fs';
import Path from 'node:path';
import {promisify} from 'node:util';
import {expect, test} from '@playwright/test';

import type {Server} from 'node:http';
import type {AddressInfo} from 'node:net';

const run = promisify(execFile);
const root = Path.resolve(import.meta.dirname, '../..');
let server: Server;
let address: string;

// One build/server per browser project; entries in that project share the output.
test.describe.configure({mode: 'default'});

test.beforeAll(async ({browserName: _browserName}, info) => {
    test.setTimeout(120_000);
    const output = Path.join(root, 'test-results/web-components/browser-package', info.project.name);
    await run('pnpm', ['build:web-components', '--', `--outDir=${output}`], {cwd: root, maxBuffer: 20 * 1024 * 1024});
    server = createServer(async (request, response) => {
        const path = new URL(request.url!, 'http://localhost').pathname;
        if (path === '/') {
            response.setHeader('Content-Type', 'text/html');
            response.end(`<!doctype html><html lang="en"><head><title>Web Components distribution</title><link rel="stylesheet" href="/style.css"></head><body>
                <form><label for="owner" id="owner-label">Owner</label>
                <zui-picker id="owner" name="owner" value="hao"></zui-picker>
                <zui-button text="Save" type="primary" btn-type="submit"></zui-button></form>
                <zui-pager rec-total="60" rec-per-page="20" aria-label="Pages"></zui-pager>
            </body></html>`);
            return;
        }
        const file = Path.resolve(output, `.${path}`);
        try {
            if (!file.startsWith(`${output}${Path.sep}`)) {
                throw new Error('Invalid asset path');
            }
            response.setHeader('Content-Type', file.endsWith('.css') ? 'text/css' : 'text/javascript');
            response.end(await fs.readFile(file));
        } catch (_error) {
            response.writeHead(404).end();
        }
    });
    await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
    address = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});

test.afterAll(async () => {
    if (server) {
        await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
    }
});

for (const mode of ['explicit', 'auto-module', 'auto-script']) {
    test(`built ${mode} entry works without the ZUI development server`, async ({page}) => {
        const errors: string[] = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.goto(address);
        await page.evaluate(() => {
            document.querySelector('zui-picker')!.items = [{value: 'hao', text: 'Hao'}, {value: 'tom', text: 'Tom'}];
            document.querySelector('form')!.addEventListener('submit', event => event.preventDefault());
        });
        if (mode === 'auto-script') {
            await page.addScriptTag({url: `${address}/zui-web-components.auto.js`});
        } else {
            await page.evaluate(async ({mode, address}) => {
                if (mode === 'explicit') {
                    const {defineButton} = await import(`${address}/button.js`);
                    if (customElements.get('zui-button')) {
                        throw new Error('Explicit import registered an element');
                    }
                    defineButton();
                    const {ZuiElement} = await import(`${address}/index.js`);
                    if (!(document.querySelector('zui-button') instanceof ZuiElement)) {
                        throw new Error('ESM entries do not share the same runtime');
                    }
                    const {defineAll} = await import(`${address}/all.js`);
                    defineAll();
                    defineAll();
                } else {
                    await import(`${address}/auto.js`);
                }
            }, {mode, address});
        }
        await page.evaluate(async () => {
            await Promise.all([...document.querySelectorAll('zui-button, zui-picker, zui-pager')].map(element => (element as HTMLElement & {ready: Promise<void>}).ready));
        });
        const button = page.getByRole('button', {name: 'Save'});
        await expect(button).toBeVisible();
        await expect(button).toHaveCSS('display', 'inline-flex');
        const primary = await button.evaluate(element => `rgb(${getComputedStyle(element).getPropertyValue('--color-primary-500-rgb').split(',').map(value => value.trim()).join(', ')})`);
        await expect(button).toHaveCSS('background-color', primary);
        await expect(page.getByRole('combobox', {name: 'Owner'})).not.toHaveCSS('box-shadow', 'none');
        await expect(page.getByRole('navigation', {name: 'Pages'}).getByRole('button')).toHaveCount(3);
        await page.getByRole('combobox', {name: 'Owner'}).click();
        await page.getByRole('option', {name: 'Tom', exact: true}).click();
        await expect(page.locator('zui-picker')).toContainText('Tom');
        expect(await page.evaluate(() => [...new FormData(document.querySelector('form')!).entries()])).toEqual([['owner', 'tom']]);
        await page.evaluate(() => {
            const element = document.querySelector('zui-button')!;
            element.loadingText = 'Saving';
            element.loading = true;
        });
        await expect(page.getByRole('button', {name: 'Saving'})).toBeDisabled();
        const spinner = page.locator('zui-button .spinner');
        await expect(spinner).toBeVisible();
        expect(await spinner.evaluate(element => getComputedStyle(element, '::before').animationName)).not.toBe('none');
        expect(errors).toEqual([]);
    });
}
