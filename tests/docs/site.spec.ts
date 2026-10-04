import {existsSync, readFileSync, readdirSync, statSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';
import {JSDOM} from 'jsdom';

const dist = Path.resolve(import.meta.dirname, '../../docs/_/.vitepress/dist');
if (!existsSync(Path.join(dist, 'index.html'))) {
    throw new Error('Documentation build missing. Run pnpm docs:build first; an external URL must serve this same build.');
}

// Public HTML fixtures (for example modal contents) are assets, not VitePress pages.
const pages = readdirSync(dist, {recursive: true, encoding: 'utf8'})
    .filter(file => file.endsWith('.html') && file !== '404.html')
    .map(file => ({file, html: readFileSync(Path.join(dist, file), 'utf8')}))
    .filter(({html}) => html.includes('<div id="app">'))
    .map(doc => ({...doc, route: doc.file.replace(/(^|\/)index\.html$/, '$1')}))
    .sort((a, b) => a.route.localeCompare(b.route));

function localFile(url: URL, baseURL: string) {
    const base = new URL(baseURL);
    if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) {
        return;
    }
    const relative = decodeURIComponent(url.pathname.slice(base.pathname.length));
    const file = Path.resolve(dist, relative || '.');
    if (file !== dist && !file.startsWith(`${dist}${Path.sep}`)) {
        return;
    }
    const candidate = existsSync(file) && statSync(file).isDirectory() ? Path.join(file, 'index.html') : file;
    return existsSync(candidate) && statSync(candidate).isFile() ? candidate : undefined;
}

test('all generated pages: internal links, anchors and declared resources exist', async ({baseURL}, testInfo) => {
    expect(pages.length, 'Discover pages from a completed documentation build').toBeGreaterThan(0);
    testInfo.annotations.push({type: 'coverage', description: `${pages.length} VitePress pages discovered from ${dist}; 404 and public HTML fixtures excluded.`});
    const origin = new URL(baseURL!).origin;
    const anchors = new Map<string, Set<string>>();
    const references: {source: string; url: URL; link: boolean}[] = [];
    for (const doc of pages) {
        const dom = new JSDOM(doc.html, {url: new URL(doc.route, baseURL).href});
        const document = dom.window.document;
        anchors.set(Path.join(dist, doc.file), new Set([...document.querySelectorAll('[id], a[name]')].map(el => el.id || el.getAttribute('name')!)));
        expect(document.querySelector('.VPContent'), doc.file).not.toBeNull();
        for (const element of document.querySelectorAll('a[href], script[src], link[href], img[src], iframe[src], source[src], video[src], audio[src]')) {
            // Demo controls use illustrative destinations; documentation/navigation links remain checked.
            if (element.tagName === 'A' && element.closest('.example')) {
                continue;
            }
            const href = element.getAttribute('href') ?? element.getAttribute('src')!;
            // VitePress marks authored external links, including other sites on the deployment host.
            if (element.tagName === 'A' && element.classList.contains('vp-external-link-icon') && /^(https?:)?\/\//.test(href)) {
                continue;
            }
            const url = new URL(href, dom.window.location.href);
            if (url.origin === origin) {
                references.push({source: doc.route || '/', url, link: element.tagName === 'A'});
            }
        }
        dom.window.close();
    }
    for (const {source, url, link} of references) {
        const file = localFile(url, baseURL!);
        expect.soft(file, `${source} → ${url.href}: missing local output (HTTP 200 fallback is not a valid target)`).toBeDefined();
        if (file && link && url.hash && anchors.has(file)) {
            expect.soft(anchors.get(file)!.has(decodeURIComponent(url.hash.slice(1))), `${source} → ${url.href}: missing anchor`).toBe(true);
        }
    }
});

for (const doc of pages) {
    test(`site smoke: /${doc.route}`, async ({page, baseURL}, testInfo) => {
        const origin = new URL(baseURL!).origin;
        const errors: string[] = [];
        const pending = new Set<string>();
        page.on('pageerror', error => errors.push(error.message));
        page.on('console', (message) => {
            const url = message.location().url;
            if (message.type() === 'error' && (!url || new URL(url).origin === origin)) {
                errors.push(`Console: ${message.text()}`);
            }
        });
        page.on('request', (request) => {
            if (new URL(request.url()).origin === origin) {
                pending.add(request.url());
            }
        });
        page.on('requestfinished', request => pending.delete(request.url()));
        page.on('requestfailed', (request) => {
            pending.delete(request.url());
            if (new URL(request.url()).origin === origin) {
                errors.push(`${request.failure()?.errorText}: ${request.url()}`);
            }
        });
        page.on('response', (response) => {
            const url = new URL(response.url());
            if (url.origin !== origin) {
                return;
            }
            if (!response.ok()) {
                errors.push(`${response.status()}: ${url.href}`);
            }
            const file = localFile(url, baseURL!);
            if (!file) {
                errors.push(`Missing local resource: ${url.href}`);
            }
            if (response.request().resourceType() !== 'document' && !file?.endsWith('.html') && /text\/html/i.test(response.headers()['content-type'] ?? '')) {
                errors.push(`Unexpected HTML resource response: ${url.href}`);
            }
        });
        const response = await page.goto(doc.route || './', {waitUntil: 'domcontentloaded'});
        expect(response?.ok(), doc.route).toBe(true);
        expect(await response!.text(), 'URL must serve the matching built HTML, not a fallback or another build').toBe(doc.html);
        const dom = new JSDOM(doc.html);
        const title = dom.window.document.title;
        const heading = dom.window.document.querySelector('.VPContent h1')?.textContent?.trim();
        const content = dom.window.document.querySelector('.VPHome') ? '.VPHome' : '.vp-doc';
        dom.window.close();
        expect(heading, `Built document has a main heading: ${doc.file}`).toBeTruthy();
        await expect(page).toHaveTitle(title);
        await expect(page.locator('.VPContent h1').first()).toHaveText(heading!);
        await expect(page.locator('.VPContent .NotFound')).toHaveCount(0);
        await expect(page.locator(content)).not.toBeEmpty();
        await page.waitForFunction(() => 'zui' in window && 'onZUIReady' in window);

        // Visit lazy examples as well as the first viewport, without exercising every control.
        for (const example of await page.locator('.example:visible').all()) {
            await example.scrollIntoViewIfNeeded();
            await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
        }
        await expect.poll(() => [...pending], {message: 'Same-origin requests must finish'}).toEqual([]);
        for (const img of await page.locator('img:visible').all()) {
            const src = await img.getAttribute('src');
            if (src && new URL(src, page.url()).origin === origin) {
                await img.scrollIntoViewIfNeeded();
                await expect.poll(() => img.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0), {message: `Image must decode: ${src}`}).toBe(true);
            }
        }
        await expect.poll(() => [...pending], {message: 'Same-origin requests must finish'}).toEqual([]);
        testInfo.annotations.push({type: 'scope', description: 'Checks local build content, page scripts and same-origin resources. External availability and release/version/copyright content are outside this smoke test.'});
        expect(errors, `Page errors and failed same-origin resources for /${doc.route}`).toEqual([]);
    });
}
