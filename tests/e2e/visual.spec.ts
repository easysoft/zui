import {expect, test} from '@playwright/test';
import {mountAvatarFixture, mountButtonFixture, mountDropdownFixture, mountModalFixture} from './fixtures/component-fixtures';

test.describe('element visual contracts', () => {
    test.skip(
        ({browserName}) => browserName !== 'chromium' || process.env.PLAYWRIGHT_SKIP_VISUAL === '1',
        'Visual baselines are reviewed with the local Chromium browser only.',
    );

    test('Button variants', async ({page}) => {
        const contract = await mountButtonFixture(page);
        await expect(contract).toHaveScreenshot('button.png');
    });

    test('Avatar variants', async ({page}) => {
        const contract = await mountAvatarFixture(page);
        await expect(contract).toHaveScreenshot('avatar.png');
    });

    test('expanded Dropdown', async ({page}) => {
        const {menu, trigger} = await mountDropdownFixture(page);
        await expect(trigger).toHaveClass(/\bwith-popover-show\b/);
        await expect(menu).toHaveScreenshot('dropdown-expanded.png');
    });

    test('open Modal', async ({page}) => {
        const {dialog, modal} = await mountModalFixture(page);
        await expect(modal).toBeVisible();
        await expect(dialog).toHaveScreenshot('modal.png');
    });
});
