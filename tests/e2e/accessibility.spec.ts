import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';
import {mountAvatarFixture, mountButtonFixture, mountDropdownFixture, mountModalFixture} from './fixtures/component-fixtures';

const wcagTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

async function expectNoWcagViolations(builder: AxeBuilder): Promise<void> {
    const results = await builder.withTags(wcagTags).analyze();
    const violations = results.violations.map(({help, id, impact, nodes}) => ({
        help,
        id,
        impact,
        targets: nodes.map(node => node.target),
    }));
    expect(violations).toEqual([]);
}

test.describe('automated accessibility checks', () => {
    test('Button variants', async ({page}) => {
        await mountButtonFixture(page);
        await expectNoWcagViolations(new AxeBuilder({page}).include('#e2e-button-contract'));
    });

    test('Avatar variants', async ({page}) => {
        await mountAvatarFixture(page);
        await expectNoWcagViolations(new AxeBuilder({page}).include('#e2e-avatar-contract'));
    });

    test('expanded Dropdown', async ({page}) => {
        await mountDropdownFixture(page);
        await expectNoWcagViolations(
            new AxeBuilder({page})
                .include('#e2e-dropdown-contract')
                .include('#e2e-dropdown-popover'),
        );
    });

    test('open Modal', async ({page}) => {
        const {modal} = await mountModalFixture(page);
        await expectNoWcagViolations(new AxeBuilder({page}).include('#e2e-modal'));

        await modal.getByRole('button', {name: 'Close'}).click();
        await expect(modal).not.toHaveClass(/\bin\b/);
    });
});
