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
    test(`components: ${mode} solid skins preserve standard text and mode-specific grays`, async ({page}) => {
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
            const name = element.textContent!.trim();
            const shade = Number(name.match(/\d+/)?.[0] || 500);
            const lightToken = name.endsWith('-pale') ? `gray-${shade <= 200 ? 400 : shade <= 400 ? 500 : shade}` : shade <= 300 ? 'fore' : 'white';
            const lightForeground = style.getPropertyValue(`--color-${lightToken}-rgb`).split(',').map(Number);
            return {name, foreground, background, lightForeground};
        }));
        expect(colors.length).toBeGreaterThanOrEqual(29);
        for (const {name, foreground, background, lightForeground} of colors) {
            if (/^(primary|secondary|success|warning|danger|important|special)$/.test(name!.trim())) {
                expect(foreground.slice(0, 3)).toEqual([255, 255, 255]);
                continue;
            }
            if (mode === 'light') {
                expect(foreground.slice(0, 3), name).toEqual(lightForeground);
            } else {
                expect(contrast(foreground.slice(0, 3), background.slice(0, 3)), `${mode} ${name}`).toBeGreaterThanOrEqual(4.5);
            }
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
        const ring = colors.ring.slice(0, 3).map((channel, index) => channel * (colors.ring[3] ?? 1) + colors.background[index] * (1 - (colors.ring[3] ?? 1)));
        if (mode === 'light') {
            expect(colors.placeholder.slice(0, 3)).toEqual([148, 163, 184]);
            expect(ring).toEqual([226, 232, 240]);
        } else {
            expect(contrast(colors.placeholder, colors.background), 'placeholder').toBeGreaterThanOrEqual(4.5);
            expect(contrast(ring, colors.background), 'control boundary').toBeGreaterThanOrEqual(3);
        }
        await input.focus();
        await expect(input).toBeFocused();
        await expect(input).not.toHaveCSS('outline-color', 'rgba(0, 0, 0, 0)');
    });
}

for (const mode of ['light', 'dark'] as const) {
    test(`components: ${mode} modal retains its surface and black backdrop`, async ({page}) => {
        await page.addInitScript(appearance => localStorage.setItem('vitepress-theme-appearance', appearance), mode);
        await page.goto('lib/components/modal/');
        await page.waitForFunction(() => 'zui' in window);
        await page.locator('button[data-target="#myModal"]').click();
        const modal = page.locator('#myModal');
        await expect(modal).toBeVisible();
        await expect(modal).toHaveCSS('background-color', 'rgba(0, 0, 0, 0.4)');
        const surface = await modal.locator('.modal-dialog').evaluate(element => getComputedStyle(element).backgroundColor);
        expect(surface).toBe(mode === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgb(15, 23, 42)');
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
        const colors = await stripe.evaluate(element => ({stripe: getComputedStyle(element).backgroundColor, canvas: getComputedStyle(element.closest('.example')!).backgroundColor}));
        expect(colors.stripe).not.toBe(colors.canvas);
        const row = page.locator('.example .table-hover tbody tr').first();
        await row.hover();
        const background = await row.locator('td').first().evaluate(element => getComputedStyle(element).backgroundColor);
        expect(Number(background.match(/[\d.]+/g)![3])).toBe(mode === 'light' ? 0.05 : 0.12);
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
        expect(Number(background.match(/[\d.]+/g)![3])).toBe(mode === 'light' ? 0.05 : 0.12);
    });
}

for (const mode of ['light', 'dark'] as const) {
    for (const [name, route, selector] of [
        ['date', 'lib/forms/datetime-picker/date.html', '.example .date-picker input'],
        ['member', 'lib/forms/picker/', '.example .picker-select'],
    ]) {
        test(`components: ${mode} ${name} picker popup follows its theme surface`, async ({page}) => {
            await page.addInitScript(appearance => localStorage.setItem('vitepress-theme-appearance', appearance), mode);
            await page.goto(route);
            const trigger = page.locator(selector).first();
            await expect(trigger).toBeVisible();
            await trigger.click();
            const popup = page.locator('.popup:visible').first();
            await expect(popup).toBeVisible();
            const canvas = await trigger.evaluate(element => getComputedStyle(element.closest('.example')!).backgroundColor);
            const colors = await popup.evaluate((element) => {
                const style = getComputedStyle(element);
                return {background: style.backgroundColor, ring: style.boxShadow};
            });
            expect(colors.background).toBe(mode === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgb(15, 23, 42)');
            expect(colors.background).not.toBe(canvas);
            if (mode === 'light') {
                expect(colors.ring).toContain('0.05)');
            } else {
                expect(colors.ring).not.toContain('0.05)');
            }
            if (name === 'member') {
                await expect(popup.locator('.picker-menu-list')).toHaveCSS('background-color', mode === 'light' ? 'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0)');
            }
            await page.getByRole('heading', {level: 1}).click();
            await expect(popup).toBeHidden();
        });
    }
}

for (const mode of ['light', 'dark'] as const) {
    test(`components: ${mode} calendar dates preserve standard selected colors and readable other states`, async ({page}) => {
        await page.clock.setFixedTime(new Date('2026-10-15T09:30:00+08:00'));
        await page.addInitScript(appearance => localStorage.setItem('vitepress-theme-appearance', appearance), mode);
        await page.goto('lib/forms/datetime-picker/date.html');
        const input = page.locator('.example .date-picker input').first();
        await input.click();
        const popup = page.locator('.popup:visible').first();
        await popup.locator('[data-date="2026-10-10"] button').click();
        await expect(input).toHaveValue('2026-10-10');
        await input.click();
        await expect(popup).toHaveCSS('opacity', '1');
        const colors = await popup.locator('.mini-calendar-day > button:not([disabled])').evaluateAll((buttons) => {
            const parse = (value: string) => value.match(/[\d.]+/g)!.slice(0, 3).map(Number);
            return buttons.map((button) => {
                const style = getComputedStyle(button);
                const surface = parse(getComputedStyle(button.closest('.popup')!).backgroundColor);
                const background = style.backgroundColor === 'rgba(0, 0, 0, 0)' ? surface : parse(style.backgroundColor);
                const opacity = Number(getComputedStyle(button.parentElement!).opacity);
                const foreground = parse(style.color).map((channel, index) => channel * opacity + surface[index] * (1 - opacity));
                return {date: button.parentElement!.getAttribute('data-date'), selected: button.parentElement!.classList.contains('selected'), outside: button.parentElement!.classList.contains('is-out-month'), opacity, foreground, background: background.map((channel, index) => channel * opacity + surface[index] * (1 - opacity))};
            });
        });
        expect(colors).toHaveLength(42);
        for (const {date, selected, outside, opacity, foreground, background} of colors) {
            if (selected) {
                expect(foreground).toEqual([255, 255, 255]);
                expect(background).toEqual([59, 130, 246]);
                continue;
            }
            expect(opacity, date!).toBe(outside ? (mode === 'light' ? 0.5 : 0.65) : 1);
            if (mode === 'dark') {
                expect(contrast(foreground, background), `${mode} ${date}`).toBeGreaterThanOrEqual(4.5);
            }
        }
        await popup.getByRole('button', {name: '2026年', exact: true}).click();
        await expect(popup.locator('.date-pick-menu-years > .btn.active')).toHaveCSS('color', 'rgb(255, 255, 255)');
        await popup.locator('.date-pick-menu-years > .btn.active').click();
        await popup.locator('.date-picker-menu > .cell > .row').getByRole('button', {name: '10月', exact: true}).click();
        await expect(popup.locator('.date-pick-menu-month > .btn.active')).toHaveCSS('color', 'rgb(255, 255, 255)');
    });
}

for (const mode of ['light', 'dark'] as const) {
    test(`documentation: ${mode} customized dtable surfaces keep text readable`, async ({page}) => {
        await page.addInitScript(appearance => localStorage.setItem('vitepress-theme-appearance', appearance), mode);
        await page.goto('lib/components/dtable/');
        for (const selector of ['#dtable-header-custom .dtable-header .dtable-cell', '#dtable-striped-custom .dtable-body .dtable-cell.is-odd-row']) {
            const cell = page.locator(`${selector}[data-col="project"]`).first();
            await cell.scrollIntoViewIfNeeded();
            await expect(cell).toBeVisible();
            const colors = await cell.evaluate((element) => {
                const parse = (value: string) => value.match(/[\d.]+/g)!.map(Number);
                let foreground = parse(getComputedStyle(element).color);
                let background = [0, 0, 0, 0];
                let ancestor: Element | null = element;
                while (background[3] < 1 && ancestor) {
                    const below = parse(getComputedStyle(ancestor).backgroundColor);
                    const alpha = background[3] + (below[3] ?? 1) * (1 - background[3]);
                    background = background.slice(0, 3).map((channel, index) => alpha ? (channel * background[3] + below[index] * (below[3] ?? 1) * (1 - background[3])) / alpha : 0).concat(alpha);
                    ancestor = ancestor.parentElement;
                }
                const link = element.querySelector('a');
                if (link) {
                    foreground = parse(getComputedStyle(link).color);
                }
                return {foreground, background};
            });
            expect(contrast(colors.foreground.slice(0, 3), colors.background.slice(0, 3)), selector).toBeGreaterThanOrEqual(4.5);
        }
    });
}
