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
    const output = Path.join(root, 'test-results/web-components/browser-zui', info.project.name);
    await run('pnpm', ['build', '--name=zui', '--exclude-not-ready', `--out-dir=${output}`], {cwd: root, maxBuffer: 20 * 1024 * 1024});
    server = createServer(async (request, response) => {
        const path = new URL(request.url!, 'http://localhost').pathname;
        if (path === '/') {
            response.setHeader('Content-Type', 'text/html');
            response.end(`<!doctype html><html lang="en"><head><title>Web Components distribution</title><link rel="stylesheet" href="/zui.css"></head><body>
                <form><app-counter count="2"><input name="note" aria-label="Note" value="Initial"></app-counter></form>
                <output></output>
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

for (const mode of ['esm', 'umd']) {
    test(`ordinary ZUI ${mode} build supports consumer-defined custom elements`, async ({page}) => {
        const errors: string[] = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.goto(address);
        await page.evaluate(() => {
            (document.querySelector('app-counter') as HTMLElement & {count: number}).count = 3;
        });
        if (mode === 'umd') {
            await page.addScriptTag({url: `${address}/zui.js`});
        }
        await page.evaluate(async ({mode, address}) => {
            const api = (mode === 'esm' ? await import(`${address}/zui.esm.js`) : (window as unknown as {zui: unknown}).zui) as typeof import('@zui/core') & Record<string, unknown>;
            for (const name of ['Button', 'Pager', 'Picker']) {
                if (customElements.get(`zui-${name.toLowerCase()}`) || api[`Zui${name}Element`] || api[`define${name}`]) {
                    throw new Error('The distribution must leave component wrappers to consumers');
                }
            }
            const {h, defineWebComponent, property} = api;
            defineWebComponent(({count, onClick, children}: {count: number; onClick: () => void; children?: import('preact').ComponentChildren}) => h('section', null,
                h('button', {type: 'button', className: 'btn primary', onClick}, `Count ${count}`), children), {
                tagName: 'app-counter',
                properties: {count: property.number('count', 0)},
                slots: {'': 'children'},
                options: ({count}, context) => ({
                    count,
                    onClick: () => {
                        context.set({count: count + 1});
                        context.emit('app-change', {count: count + 1});
                    },
                }),
            });
            const element = document.querySelector('app-counter') as HTMLElement & {ready: Promise<void>};
            element.addEventListener('app-change', (event) => {
                document.querySelector('output')!.textContent = String((event as CustomEvent).detail.count);
            });
            if (!(element instanceof api.ZuiElement)) {
                throw new Error('Consumer elements must use the distributed core runtime');
            }
            await element.ready;
        }, {mode, address});
        const button = page.getByRole('button', {name: 'Count 3'});
        await expect(button).toBeVisible();
        await expect(button).toHaveCSS('display', 'inline-flex');
        const primary = await button.evaluate(element => `rgb(${getComputedStyle(element).getPropertyValue('--color-primary-500-rgb').split(',').map(value => value.trim()).join(', ')})`);
        await expect(button).toHaveCSS('background-color', primary);
        const input = page.getByRole('textbox', {name: 'Note'});
        await input.fill('User input');
        await button.focus();
        await page.keyboard.press('Enter');
        await expect(page.getByRole('button', {name: 'Count 4'})).toBeFocused();
        await expect(page.locator('app-counter')).toHaveAttribute('count', '4');
        await expect(page.locator('output')).toHaveText('4');
        await expect(input).toHaveValue('User input');
        expect(await page.evaluate(() => new FormData(document.querySelector('form')!).get('note'))).toBe('User input');
        expect(errors).toEqual([]);
    });
}
