import {expect, test} from '@playwright/test';

function contrast(foreground: number[], background: number[]) {
    const luminance = (rgb: number[]) => rgb.map((value) => {
        const channel = value / 255;
        return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    }).reduce((total, channel, index) => total + channel * [0.2126, 0.7152, 0.0722][index], 0);
    const values = [luminance(foreground), luminance(background)].sort((a, b) => a - b);
    return (values[1] + 0.05) / (values[0] + 0.05);
}

for (const mode of ['light', 'dark'] as const) {
    test(`components: ${mode} solid and gray pale skins have readable text`, async ({page}) => {
        await page.addInitScript((appearance) => {
            localStorage.removeItem('zui-docs-theme-v1');
            localStorage.setItem('vitepress-theme-appearance', appearance);
        }, mode);
        await page.goto('lib/components/button/');
        const samples = page.locator('.example .btn.capitalize');
        await expect(samples.first()).toBeVisible();
        const colors = await samples.evaluateAll(elements => elements.filter(element => /^(primary|secondary|success|warning|danger|important|special|gray(-\d+)?(-pale)?)$/.test(element.textContent!.trim())).map((element) => {
            const style = getComputedStyle(element);
            const parse = (value: string) => value.match(/[\d.]+/g)!.map(Number);
            const foreground = parse(style.color);
            let background = parse(style.backgroundColor);
            let ancestor = element.parentElement;
            while (background[3] !== undefined && background[3] < 1 && ancestor) {
                const below = parse(getComputedStyle(ancestor).backgroundColor);
                const alpha = background[3] + (below[3] ?? 1) * (1 - background[3]);
                background = background.slice(0, 3).map((channel, index) => alpha ? (channel * background[3] + below[index] * (below[3] ?? 1) * (1 - background[3])) / alpha : 0).concat(alpha);
                ancestor = ancestor.parentElement;
            }
            return {name: element.textContent, foreground, background};
        }));
        expect(colors.length).toBeGreaterThanOrEqual(29);
        for (const {name, foreground, background} of colors) {
            expect(contrast(foreground.slice(0, 3), background.slice(0, 3)), `${mode} ${name}`).toBeGreaterThanOrEqual(4.5);
        }
    });
}

for (const mode of ['light', 'dark'] as const) {
    test(`components: ${mode} form placeholders and boundaries remain visible`, async ({page}) => {
        await page.addInitScript(appearance => localStorage.setItem('vitepress-theme-appearance', appearance), mode);
        await page.goto('lib/forms/form-control/');
        const input = page.locator('.example input.form-control[type="text"]').first();
        await expect(input).toBeVisible();
        await expect(input).toHaveCSS('box-shadow', /0px 0px 0px 1px/);
        const colors = await input.evaluate((element) => {
            const style = getComputedStyle(element);
            const parse = (value: string) => value.match(/[\d.]+/g)!.map(Number);
            return {placeholder: parse(getComputedStyle(element, '::placeholder').color), background: parse(style.backgroundColor), ring: parse(style.boxShadow.match(/rgba?\([^)]+\)/g)![1])};
        });
        expect(contrast(colors.placeholder, colors.background), 'placeholder').toBeGreaterThanOrEqual(4.5);
        const ring = colors.ring.slice(0, 3).map((channel, index) => channel * (colors.ring[3] ?? 1) + colors.background[index] * (1 - (colors.ring[3] ?? 1)));
        expect(contrast(ring, colors.background), 'control boundary').toBeGreaterThanOrEqual(3);
        await input.focus();
        await expect(input).toBeFocused();
        await expect(input).not.toHaveCSS('outline-color', 'rgba(0, 0, 0, 0)');
    });
}

for (const mode of ['light', 'dark'] as const) {
    test(`components: ${mode} modal dims the page behind an opaque surface`, async ({page}) => {
        await page.addInitScript(appearance => localStorage.setItem('vitepress-theme-appearance', appearance), mode);
        await page.goto('lib/components/modal/');
        await page.waitForFunction(() => 'zui' in window);
        await page.locator('button[data-target="#myModal"]').click();
        const modal = page.locator('#myModal');
        await expect(modal).toBeVisible();
        await expect(modal).toHaveCSS('background-color', 'rgba(0, 0, 0, 0.4)');
        const surface = await modal.locator('.modal-dialog').evaluate(element => getComputedStyle(element).backgroundColor);
        expect(surface.startsWith('rgb(')).toBe(true);
        await modal.getByRole('button', {name: '关闭', exact: true}).click();
        await expect(modal).toBeHidden();
    });
}

for (const mode of ['light', 'dark'] as const) {
    test(`components: ${mode} table stripes and hover remain distinct`, async ({page}) => {
        await page.addInitScript(appearance => localStorage.setItem('vitepress-theme-appearance', appearance), mode);
        await page.goto('lib/components/table/');
        const stripe = page.locator('.example .table-striped tbody tr:nth-child(2)').first();
        await expect(stripe).toBeVisible();
        const colors = await stripe.evaluate(element => ({stripe: getComputedStyle(element).backgroundColor, canvas: getComputedStyle(document.body).backgroundColor}));
        expect(colors.stripe).not.toBe(colors.canvas);
        const row = page.locator('.example .table-hover tbody tr').first();
        await row.hover();
        const background = await row.locator('td').first().evaluate(element => getComputedStyle(element).backgroundColor);
        expect(Number(background.match(/[\d.]+/g)![3])).toBeGreaterThanOrEqual(0.1);
    });
}

for (const mode of ['light', 'dark'] as const) {
    test(`components: ${mode} dtable stripes and hover remain distinct`, async ({page}) => {
        await page.addInitScript(appearance => localStorage.setItem('vitepress-theme-appearance', appearance), mode);
        await page.goto('lib/components/dtable/');
        const host = page.locator('#dtable-striped');
        await host.scrollIntoViewIfNeeded();
        const cell = host.locator('.dtable-body .dtable-cell.is-odd-row').first();
        await expect(cell).toBeVisible();
        const colors = await cell.evaluate(element => ({stripe: getComputedStyle(element).backgroundColor, canvas: getComputedStyle(element.closest('.dtable')!).backgroundColor}));
        expect(colors.stripe).not.toBe(colors.canvas);
        await cell.hover();
        await expect(cell).toHaveClass(/is-hover-row/);
        const background = await cell.evaluate(element => getComputedStyle(element, '::before').backgroundColor);
        expect(Number(background.match(/[\d.]+/g)![3])).toBeGreaterThanOrEqual(0.1);
    });
}
