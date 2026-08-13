import {expect, test} from '@playwright/test';

const libraryRoutes = [
    '/helpers/',
    '/button/',
    '/avatar/',
    '/tabs/',
    '/dropdown/',
    '/modal/',
];

for (const route of libraryRoutes) {
    test(`${route} loads without browser errors`, async ({page}) => {
        const errors: string[] = [];
        page.on('console', (message) => {
            if (message.type() === 'error') {
                errors.push(`console: ${message.text()}`);
            }
        });
        page.on('pageerror', (error) => {
            errors.push(`pageerror: ${error.message}`);
        });

        const response = await page.goto(route);
        expect(response?.ok(), `GET ${route}`).toBe(true);
        await page.locator('#libPage.is-loaded').waitFor();
        await page.evaluate(() => new Promise<void>((resolve) => {
            requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        }));
        expect(errors).toEqual([]);
    });
}
