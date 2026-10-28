import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import {URL, fileURLToPath, pathToFileURL} from 'node:url';
import assert from 'node:assert/strict';
import {chromium} from '@playwright/test';

export const BROWSER_CASES = ['component-lifecycle', 'application-integration', 'static-page-flow'];
export const COUNTER_SOURCE = 'lib/widget/src/main.js';
export const COUNTER = `export class Counter extends zui.Component {
    static NAME = 'Counter';
    afterInit() {
        this.onClick = () => this.options.onChange();
        this.element.addEventListener('click', this.onClick);
    }
    destroy() {
        super.destroy();
    }
}
`;

export function prepareBrowserCase(repoRoot, workspace, id) {
    fs.cpSync(path.join(repoRoot, 'skills/zui-build/assets/vendor/zui-3.0.0'), path.join(workspace, 'assets/zui'), {recursive: true});
    if (id === 'static-page-flow') {
        fs.mkdirSync(path.join(workspace, 'site'));
        return;
    }
    const component = id === 'component-lifecycle';
    const script = component ? `import {Counter} from './${COUNTER_SOURCE}';
window.mountCounter = () => { window.counter = new Counter('#increment', {onChange: window.countChanged}); };
window.unmountCounter = () => { window.counter?.destroy(); window.counter = null; };` : '// Define mountCounter() and unmountCounter() using this application\'s existing zui.Component runtime.\n';
    fs.writeFileSync(path.join(workspace, 'app.js'), script);
    if (component) {
        fs.mkdirSync(path.join(workspace, path.dirname(COUNTER_SOURCE)), {recursive: true});
        fs.writeFileSync(path.join(workspace, COUNTER_SOURCE), COUNTER);
        fs.writeFileSync(path.join(workspace, 'lib/widget/package.json'), JSON.stringify({name: '@zui/widget', main: './src/main.js', zui: {type: 'js-ui'}}));
    }
    fs.writeFileSync(path.join(workspace, 'index.html'), `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="assets/zui/zui.css"></head><body>
<button id="mount" class="btn">挂载</button><button id="increment" class="btn">增加</button><button id="unmount" class="btn">卸载</button><output id="count">0</output>
<script src="assets/zui/zui.js"></script><script>let count=0;window.countChanged=()=>{document.querySelector('#count').textContent=++count;};document.querySelector('#mount').onclick=()=>window.mountCounter();document.querySelector('#unmount').onclick=()=>window.unmountCounter();</script><script type="module" src="app.js"></script></body></html>`);
}

export async function gradeBrowserCase(workspace, id) {
    const root = fs.realpathSync(id === 'static-page-flow' ? path.join(workspace, 'site') : workspace);
    const server = http.createServer((request, response) => {
        try {
            const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
            const file = fs.realpathSync(path.join(root, pathname === '/' ? 'index.html' : pathname));
            if (!file.startsWith(`${root}${path.sep}`) || !fs.statSync(file).isFile()) throw new Error('Outside fixture');
            response.setHeader('Content-Type', {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json'}[path.extname(file)] || 'application/octet-stream');
            response.end(fs.readFileSync(file));
        } catch {response.writeHead(404).end();}
    });
    await new Promise((resolve, reject) => {
        server.once('error', reject);
        server.listen(0, '127.0.0.1', resolve);
    });
    let browser;
    try {
        // A missing browser is an infrastructure failure, not a passing or failing model task.
        browser = await chromium.launch({headless: true});
        const page = await browser.newPage();
        page.setDefaultTimeout(3000);
        const origin = `http://127.0.0.1:${server.address().port}`;
        await page.route('**/*', (route) => {
            const url = route.request().url();
            let allowed = url.startsWith(`${origin}/`);
            if (id === 'static-page-flow' && url.startsWith('file:')) {
                try {
                    allowed = fs.realpathSync(fileURLToPath(url)).startsWith(`${root}${path.sep}`);
                } catch {allowed = false;}
            }
            return allowed ? route.continue() : route.abort();
        });
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('requestfailed', request => errors.push(`${request.failure()?.errorText} ${request.url()}`));
        page.on('response', (response) => {
            if (response.status() >= 400 && !response.url().endsWith('/favicon.ico')) errors.push(`${response.status()} ${response.url()}`);
        });
        try {
            const urls = [`${origin}/`, ...(id === 'static-page-flow' ? [pathToFileURL(path.join(root, 'index.html')).href] : [])];
            for (const url of urls) {
                await page.goto(url);
                if (id === 'static-page-flow') {
                    for (const name of ['整理需求', '修复缺陷', '发布版本']) assert.equal(await page.getByRole('checkbox', {name, exact: true}).count(), 1);
                    await page.getByRole('button', {name: '待办', exact: true}).click();
                    assert.equal(await page.getByRole('checkbox', {name: '发布版本', exact: true}).isVisible(), false);
                    await page.getByRole('button', {name: '已完成', exact: true}).click();
                    assert.equal(await page.getByRole('checkbox', {name: '整理需求', exact: true}).isVisible(), false);
                    await page.getByRole('checkbox', {name: '发布版本', exact: true}).click();
                    assert.equal(await page.getByRole('checkbox', {name: '发布版本', exact: true}).isVisible(), false);
                    await page.getByRole('button', {name: '待办', exact: true}).click();
                    const checkbox = page.getByRole('checkbox', {name: '整理需求', exact: true});
                    await checkbox.focus();
                    await page.keyboard.press('Space');
                    assert.equal(await checkbox.isVisible(), false);
                    await page.getByRole('button', {name: '全部', exact: true}).click();
                    assert.equal(await page.getByRole('checkbox', {name: '整理需求', exact: true}).isChecked(), true);
                    assert.equal(await page.getByRole('checkbox', {name: '发布版本', exact: true}).isChecked(), false);
                    assert.equal(await page.evaluate(() => [...document.styleSheets].some(sheet => sheet.href?.includes('zui'))), true);
                    for (const width of [390, 1280]) {
                        await page.setViewportSize({width, height: 800});
                        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), true);
                    }
                } else {
                    for (let count = 1; count <= 3; count++) {
                        await page.locator('#mount').click();
                        await page.waitForFunction(() => window.counter instanceof window.zui.Component);
                        await page.evaluate(() => {
                            window.counterConstructor = window.counter.constructor;
                        });
                        await page.locator('#increment').click();
                        assert.equal(await page.locator('#count').textContent(), String(count));
                        await page.locator('#unmount').click();
                        await page.locator('#increment').click();
                        assert.equal(await page.locator('#count').textContent(), String(count));
                        assert.equal(await page.evaluate(() => Boolean(window.counterConstructor.get(document.querySelector('#increment')))), false);
                    }
                }
                assert.deepEqual(errors, []);
            }
            return {name: 'browser-primary-flow', passed: true};
        } catch (error) {return {name: 'browser-primary-flow', passed: false, detail: error.message};}
    } finally {
        await browser?.close();
        await new Promise(resolve => server.close(resolve));
    }
}
