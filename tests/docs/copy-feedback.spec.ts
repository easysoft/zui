import {expect, test} from '@playwright/test';

type CopyWindow = Window & {
    copyTest: {
        calls: string[];
        pending: {resolve: () => void; reject: () => void}[];
    };
};

test.beforeEach(async ({page}) => {
    await page.addInitScript(() => {
        const state = {calls: [] as string[], pending: [] as CopyWindow['copyTest']['pending']};
        (window as unknown as CopyWindow).copyTest = state;
        Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {
            writeText: (text: string) => new Promise<void>((resolve, reject) => {
                state.calls.push(text);
                state.pending.push({resolve, reject: () => reject(new Error('Permission denied'))});
            }),
        }});
    });
});

for (const item of [
    {path: 'guide/config/base/font.html', name: '复制 font-sans', value: 'font-sans', success: '已复制类名'},
    {path: 'guide/config/base/color.html', name: '复制颜色变量 --color-primary-50', value: '--color-primary-50', success: '已复制'},
    {path: 'utilities/effects/utilities/shadow.html', name: '复制类名 shadow-none', value: 'shadow-none', success: '已复制'},
]) {
    test(`ZUI-DOC-005: ${item.value} waits for completion and recovers from failed writes`, async ({page}) => {
        const errors: string[] = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.goto(item.path);
        const button = page.getByRole('button', {name: item.name, exact: true}).first();
        const status = button.getByRole('status');
        await page.clock.install();

        await button.click();
        await expect(status).toHaveText('正在复制…');
        await expect(button).toHaveAttribute('aria-busy', 'true');
        await button.evaluate(element => (element as HTMLButtonElement).click());
        expect(await page.evaluate(() => (window as unknown as CopyWindow).copyTest.calls)).toEqual([item.value]);
        await page.clock.fastForward(2100);
        await expect(status).toHaveText('正在复制…');

        await page.evaluate(() => (window as unknown as CopyWindow).copyTest.pending.shift()!.resolve());
        await expect(status).toHaveText(item.success);
        await expect(button).toHaveAttribute('aria-busy', 'false');
        await page.clock.fastForward(1500);

        await button.click();
        await page.clock.fastForward(1000);
        await expect(status).toHaveText('正在复制…');
        await page.evaluate(() => (window as unknown as CopyWindow).copyTest.pending.shift()!.reject());
        await expect(status).toHaveText('复制失败，请重试');
        await expect(status).not.toHaveClass(/success/);
        await button.evaluate(element => (element as HTMLButtonElement).blur());
        await page.mouse.move(0, 0);
        await expect(status).toHaveCSS('opacity', '1');

        await button.click();
        await expect(status).toHaveText('正在复制…');
        await page.evaluate(() => (window as unknown as CopyWindow).copyTest.pending.shift()!.resolve());
        await expect(status).toHaveText(item.success);
        await page.clock.fastForward(2001);
        await expect(status).toBeEmpty();
        expect(await page.evaluate(() => (window as unknown as CopyWindow).copyTest.calls)).toEqual([item.value, item.value, item.value]);
        expect(errors).toEqual([]);
    });
}

test('ZUI-DOC-005: unavailable clipboard gives a manual-copy instruction', async ({page}) => {
    await page.goto('guide/config/base/font.html');
    await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', {value: undefined}));
    const button = page.getByRole('button', {name: '复制 font-sans', exact: true}).first();
    await button.click();
    await expect(button.getByRole('status')).toHaveText('无法复制，请手动复制');
    await expect(button).toHaveAttribute('aria-busy', 'false');
    await expect(button).toBeEnabled();
});

test('ZUI-DOC-005: pending writes can settle after client-side navigation', async ({page}) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('guide/config/base/font.html');
    const button = page.getByRole('button', {name: '复制 font-sans', exact: true}).first();
    await button.click();
    await expect(button.getByRole('status')).toHaveText('正在复制…');
    await page.locator('.VPNavBarTitle a').click();
    await expect(button).toHaveCount(0);
    await page.evaluate(() => (window as unknown as CopyWindow).copyTest.pending.shift()!.resolve());
    await expect(page.locator('.docs-copy-control')).toHaveCount(0);
    expect(errors).toEqual([]);
});
