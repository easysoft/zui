import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import path from 'node:path';
import postcss from 'postcss';
import {expect, test} from '@playwright/test';

const require = createRequire(import.meta.url);
const {createPostcssConfig} = require('../../scripts/build/css-config.cjs');
const root = path.resolve(import.meta.dirname, '../..');
const fixture = `
<button id="primary" class="btn primary">Primary</button>
<button id="gray-light" class="btn gray-100">Light gray</button>
<button id="gray-mid" class="btn gray-400">Mid gray</button>
<button id="pale" class="btn pale">Pale</button>
<button id="pale-light" class="btn gray-100-pale">Light pale</button>
<input id="input" class="form-control" placeholder="Placeholder">
<div id="popup" class="popup">Popup</div>
<div id="dialog" class="modal-dialog">Modal</div>
<div class="picker-menu"><div id="menu" class="menu">Menu</div></div>
<table class="table table-striped table-hover"><tbody><tr><td>First row</td></tr><tr id="stripe"><td>Second row</td></tr></tbody></table>
<div class="dtable dtable-striped dtable-hover-row"><div class="dtable-body"><div id="dstripe" class="dtable-cell is-odd-row is-hover-row">Data row</div></div></div>
<div class="mini-calendar">
<div class="mini-calendar-day is-out-month is-weekend"><button id="outside-weekend" class="btn ghost">27</button></div>
<div class="mini-calendar-day is-out-month"><button id="outside" class="btn ghost">28</button></div>
<div class="mini-calendar-day is-weekend"><button id="weekend" class="btn ghost">4</button></div>
<div class="mini-calendar-day"><button id="weekday" class="btn ghost">5</button></div>
<div class="mini-calendar-day selected is-out-month"><button id="date" class="btn ghost">6</button></div>
<div class="mini-calendar-day is-today"><button id="today" class="btn ghost">7</button></div>
</div>
<div class="date-pick-menu-month"><button id="month" class="btn active">October</button></div>
<div class="date-pick-menu-years"><button id="year" class="btn active">2026</button></div>`;

let css: string;
let legacyCSS: string;

test.beforeAll(async () => {
    const files = ['lib/base/src/tailwind.css', 'lib/base/src/global.css', 'lib/table/src/vars.css', 'lib/table/src/table.css'];
    for (const entry of [...['button', 'form-control', 'modal', 'datetime-picker', 'menu', 'picker', 'dtable'].map(lib => `lib/${lib}/src/style/index.ts`), 'lib/utilities/src/main.ts']) {
        for (const match of readFileSync(path.join(root, entry), 'utf8').matchAll(/import ['"](.+\.css)['"]/g)) {
            files.push(path.join(path.dirname(entry), match[1]));
        }
    }
    const result = await postcss(createPostcssConfig({minify: false, content: [{raw: fixture, extension: 'html'}]}).plugins).process(files.map(file => `@import ${JSON.stringify(path.join(root, file))};`).join('\n'), {from: path.join(root, 'component-theme-test.css')});
    css = result.css;
    // Old application presets replace the whole color map and do not provide on-* tokens.
    result.root.walkDecls(/^--color-on-/, (declaration) => {
        declaration.remove();
    });
    legacyCSS = result.root.toString();
});

for (const [name, outer, inner, system, dark] of [
    ['light', '', '', 'light', false],
    ['dark', 'dark', '', 'light', true],
    ['nested light', 'dark', 'light-in-dark', 'dark', false],
    ['nested dark', 'light-in-dark', 'dark', 'light', true],
    ['automatic light', '', 'dark-auto', 'light', false],
    ['automatic dark', '', 'dark-auto', 'dark', true],
    ['automatic light inside dark', 'dark', 'dark-auto', 'light', true],
] as const) {
    test(`${name} preserves the component theme defaults`, async ({page}) => {
        await page.emulateMedia({colorScheme: system});
        await page.setContent(`<html class="${outer}"><head><style>${css}</style></head><body><main class="${inner}">${fixture}</main></body></html>`);
        await expect(page.locator('#primary')).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(page.locator('#gray-light')).toHaveCSS('color', dark ? 'rgb(255, 255, 255)' : 'rgb(30, 41, 59)');
        await expect(page.locator('#gray-mid')).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(page.locator('#pale')).toHaveCSS('color', dark ? 'rgb(203, 213, 225)' : 'rgb(100, 116, 139)');
        await expect(page.locator('#pale-light')).toHaveCSS('color', dark ? 'rgb(203, 213, 225)' : 'rgb(148, 163, 184)');
        const input = await page.locator('#input').evaluate(element => ({placeholder: getComputedStyle(element, '::placeholder').color, border: getComputedStyle(element).getPropertyValue('--form-control-border')}));
        expect(input.placeholder).toBe('rgb(148, 163, 184)');
        expect(input.border.replaceAll(' ', '')).toBe(dark ? 'rgba(203,213,225,.5)' : '#e2e8f0');
        await expect(page.locator('#popup')).toHaveCSS('background-color', dark ? 'rgb(15, 23, 42)' : 'rgba(255, 255, 255, 0.85)');
        await expect(page.locator('#dialog')).toHaveCSS('background-color', dark ? 'rgb(15, 23, 42)' : 'rgba(255, 255, 255, 0.9)');
        expect(await page.locator('#popup').evaluate(element => getComputedStyle(element).backdropFilter)).toBe(dark ? 'none' : 'blur(16px)');
        expect(await page.locator('#dialog').evaluate(element => getComputedStyle(element).backdropFilter)).toBe(dark ? 'none' : 'blur(8px)');
        await expect(page.locator('#menu')).toHaveCSS('background-color', dark ? 'rgba(0, 0, 0, 0)' : 'rgb(255, 255, 255)');
        for (const id of ['stripe', 'dstripe']) {
            await expect(page.locator(`#${id}`)).toHaveCSS('background-color', dark ? 'rgb(15, 23, 42)' : 'rgb(248, 250, 252)');
        }
        await page.locator('#stripe').hover();
        await expect(page.locator('#stripe td')).toHaveCSS('background-color', `rgba(59, 130, 246, ${dark ? '0.12' : '0.05'})`);
        expect(await page.locator('#dstripe').evaluate(element => getComputedStyle(element, '::before').backgroundColor)).toBe(`rgba(59, 130, 246, ${dark ? '0.12' : '0.05'})`);
        await expect(page.locator('#weekend')).toHaveCSS('color', dark ? 'rgb(148, 163, 184)' : 'rgb(100, 116, 139)');
        await expect(page.locator('#today')).toHaveCSS('color', dark ? 'rgb(191, 219, 254)' : 'rgb(59, 130, 246)');
        for (const id of ['outside', 'outside-weekend']) {
            expect(await page.locator(`#${id}`).evaluate(element => getComputedStyle(element.parentElement!).opacity)).toBe(dark ? '0.65' : '0.5');
        }
        expect(await page.locator('#date').evaluate(element => getComputedStyle(element.parentElement!).opacity)).toBe('1');
        for (const id of ['date', 'month', 'year']) {
            await expect(page.locator(`#${id}`)).toHaveCSS('color', 'rgb(255, 255, 255)');
        }
    });
}

for (const mode of ['light', 'dark'] as const) {
    test(`${mode} popup and dialog retain opacity utility overrides`, async ({page}) => {
        await page.setContent(`<html class="${mode === 'dark' ? 'dark' : ''}"><head><style>${css}</style></head><body>${fixture}</body></html>`);
        for (const id of ['popup', 'dialog']) {
            await page.locator(`#${id}`).evaluate(element => element.classList.add('bg-opacity-50', 'ring-opacity-50'));
            await expect(page.locator(`#${id}`)).toHaveCSS('background-color', mode === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(15, 23, 42, 0.5)');
            const ring = await page.locator(`#${id}`).evaluate(element => getComputedStyle(element).getPropertyValue('--tw-ring-color').match(/[\d.]+/g)!.map(Number));
            expect(ring).toEqual(mode === 'light' ? [0, 0, 0, 0.5] : [51, 65, 85, 0.5]);
        }
    });

    test(`${mode} legacy palettes retain selected dates, months and years without new tokens`, async ({page}) => {
        await page.setContent(`<html class="${mode === 'dark' ? 'dark' : ''}" style="--color-fore-in-dark-rgb:250,250,250"><head><style>${legacyCSS}</style></head><body>${fixture}</body></html>`);
        for (const id of ['primary', 'date', 'month', 'year']) {
            await expect(page.locator(`#${id}`)).toHaveCSS('color', 'rgb(250, 250, 250)');
        }
        await page.locator('html').evaluate(element => element.style.setProperty('--color-on-primary-rgb', '1, 2, 3'));
        for (const id of ['primary', 'date', 'month', 'year']) {
            await expect(page.locator(`#${id}`)).toHaveCSS('color', 'rgb(1, 2, 3)');
        }
    });
}
