import type {Locator, Page} from '@playwright/test';

const visualFixtureStyle = `
    *, *::before, *::after {
        animation: none !important;
        caret-color: transparent !important;
        transition: none !important;
    }
    html, body {
        background: #fff !important;
        color-scheme: light !important;
    }
    body {
        margin: 0 !important;
        min-height: 100vh;
        padding: 0 !important;
    }
    .e2e-contract {
        align-items: center;
        background: #fff;
        display: inline-flex;
        font-family: Arial, sans-serif;
        gap: 12px;
        padding: 16px;
    }
`;

async function openLibrary(page: Page, libName: string): Promise<void> {
    await page.goto(`/${libName}/`);
    await page.locator('#libPage.is-loaded').waitFor();
    await page.emulateMedia({colorScheme: 'light', reducedMotion: 'reduce'});
    await page.addStyleTag({content: visualFixtureStyle});
}

async function replaceBody(page: Page, html: string): Promise<void> {
    await page.evaluate((fixtureHTML) => {
        document.documentElement.classList.remove('dark');
        document.body.className = '';
        document.body.innerHTML = fixtureHTML;
    }, html);
}

export async function mountButtonFixture(page: Page): Promise<Locator> {
    await openLibrary(page, 'button');
    await replaceBody(page, `
        <main id="e2e-button-contract" class="e2e-contract" aria-label="Button variants">
            <button type="button" class="btn">Default</button>
            <button type="button" class="btn active">Active</button>
            <button type="button" class="btn dark">Dark</button>
            <button type="button" class="btn" disabled>Disabled</button>
        </main>
    `);
    return page.locator('#e2e-button-contract');
}

export async function mountAvatarFixture(page: Page): Promise<Locator> {
    await openLibrary(page, 'avatar');
    await page.locator('#avatar1 .avatar').waitFor();
    await page.locator('#avatar4 .avatar').waitFor();
    await page.evaluate(() => {
        const fixture = document.createElement('main');
        fixture.id = 'e2e-avatar-contract';
        fixture.className = 'e2e-contract';
        fixture.setAttribute('aria-label', 'Avatar variants');

        for (const selector of ['#avatar1 .avatar', '#avatar2 .avatar', '#avatar4 .avatar']) {
            const avatar = document.querySelector(selector)?.cloneNode(true);
            if (avatar) {
                fixture.append(avatar);
            }
        }
        document.body.className = '';
        document.body.replaceChildren(fixture);
    });
    return page.locator('#e2e-avatar-contract');
}

export type DropdownFixtureOptions = {
    open?: boolean;
    viewportEdge?: boolean;
};

export async function mountDropdownFixture(page: Page, options: DropdownFixtureOptions = {}): Promise<{contract: Locator; menu: Locator; trigger: Locator}> {
    const {open = true, viewportEdge = false} = options;
    await openLibrary(page, 'dropdown');
    await replaceBody(page, `
        <main
            id="e2e-dropdown-contract"
            class="e2e-contract"
            ${viewportEdge ? 'style="bottom: 4px; position: fixed; right: 4px;"' : ''}
        >
            <button
                id="e2e-dropdown-trigger"
                type="button"
                class="btn primary"
                aria-haspopup="menu"
            >Open actions <span class="caret"></span></button>
        </main>
    `);

    await page.evaluate(async (modulePath) => {
        const {Dropdown} = await import(modulePath) as {
            Dropdown: new (selector: string, options: Record<string, unknown>) => {inited: boolean};
        };
        const dropdown = new Dropdown('#e2e-dropdown-trigger', {
            animation: false,
            arrow: true,
            id: 'e2e-dropdown-popover',
            mask: false,
            menu: {
                items: [
                    {key: 'edit', text: 'Edit item', url: '#edit'},
                    {key: 'duplicate', text: 'Duplicate item', url: '#duplicate'},
                    {
                        key: 'export',
                        text: 'Export item',
                        items: [
                            {key: 'pdf', text: 'Export as PDF', url: '#pdf'},
                            {key: 'png', text: 'Export as PNG', url: '#png'},
                        ],
                    },
                    {type: 'divider'},
                    {key: 'archive', text: 'Archive item', url: '#archive'},
                ],
            },
            placement: 'bottom-start',
            trigger: 'click',
        });
        (window as unknown as {__e2eDropdown?: {inited: boolean}}).__e2eDropdown = dropdown;
    }, '/lib/dropdown/src/main.ts');

    await page.waitForFunction(() => {
        return (window as unknown as {__e2eDropdown?: {inited: boolean}}).__e2eDropdown?.inited;
    });

    const trigger = page.locator('#e2e-dropdown-trigger');
    const menu = page.locator('#e2e-dropdown-popover');
    if (open) {
        await trigger.click();
        await menu.locator('.dropdown-menu').waitFor();
        await menu.waitFor({state: 'visible'});
    }
    return {contract: page.locator('#e2e-dropdown-contract'), menu, trigger};
}

export type ModalFixtureOptions = {
    open?: boolean;
    stacked?: boolean;
};

export async function mountModalFixture(page: Page, options: ModalFixtureOptions = {}): Promise<{dialog: Locator; modal: Locator; secondModal: Locator; secondTrigger: Locator; trigger: Locator}> {
    const {open = true, stacked = false} = options;
    await openLibrary(page, 'modal');
    await replaceBody(page, `
        <main id="e2e-modal-contract" class="e2e-contract">
            <button
                id="e2e-modal-trigger"
                type="button"
                class="btn primary"
                data-toggle="modal"
                data-target="#e2e-modal"
                data-animation="false"
                data-keyboard="true"
            >Open modal</button>
            <div
                id="e2e-modal"
                class="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="e2e-modal-title"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div id="e2e-modal-title" class="modal-title">Confirm change</div>
                        </div>
                        <div class="modal-actions">
                            <button type="button" class="btn square ghost" aria-label="Close" data-dismiss="modal" autofocus>
                                <span class="close"></span>
                            </button>
                        </div>
                        <div class="modal-body">This action updates the selected item.</div>
                        <div class="modal-footer">
                            <button type="button" class="btn" data-dismiss="modal">Cancel</button>
                            <button
                                id="e2e-second-modal-trigger"
                                type="button"
                                class="btn"
                                data-toggle="modal"
                                data-target="#e2e-second-modal"
                                data-animation="false"
                                data-keyboard="true"
                            >Open second modal</button>
                            <button type="button" class="btn">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="e2e-second-modal"
                class="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="e2e-second-modal-title"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div id="e2e-second-modal-title" class="modal-title">Second change</div>
                        </div>
                        <div class="modal-body">This dialog is stacked above the first dialog.</div>
                        <div class="modal-footer">
                            <button type="button" class="btn" data-dismiss="modal">Close second modal</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    `);

    const trigger = page.locator('#e2e-modal-trigger');
    const secondTrigger = page.locator('#e2e-second-modal-trigger');
    const modal = page.locator('#e2e-modal');
    const secondModal = page.locator('#e2e-second-modal');
    if (open) {
        await trigger.click();
        await modal.waitFor({state: 'visible'});
    }
    if (stacked) {
        await secondTrigger.click();
        await secondModal.waitFor({state: 'visible'});
    }
    return {dialog: modal.locator('.modal-dialog'), modal, secondModal, secondTrigger, trigger};
}
