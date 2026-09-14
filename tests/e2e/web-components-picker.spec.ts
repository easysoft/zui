import {expect, test} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

import type {Page} from '@playwright/test';

async function mountPicker(page: Page) {
    await page.goto('/picker/');
    await page.locator('#libPage.is-loaded').waitFor();
    await page.evaluate(async (modulePath) => {
        const {definePicker} = await import(modulePath);
        document.body.innerHTML = `
            <form id="editor">
                <fieldset>
                    <label id="owner-label" for="owner">Owner</label>
                    <zui-picker id="owner" name="owner" value="hao" placeholder="Choose an owner"></zui-picker>
                </fieldset>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
                <output id="changes">0</output>
            </form>
        `;
        const element = document.querySelector('zui-picker')!;
        // Exercise the browser's upgrade path with a complex property already assigned.
        element.items = [{value: 'hao', text: 'Hao'}, {value: 'tom', text: 'Tom'}, {value: 'amy', text: 'Amy'}];
        let changes = 0;
        element.addEventListener('zui-change', () => {
            document.querySelector('#changes')!.textContent = String(++changes);
        });
        document.querySelector('form')!.addEventListener('submit', event => event.preventDefault());
        definePicker();
        await element.ready;
    }, '/lib/web-components/src/picker.ts');
}

async function formValues(page: Page) {
    return page.evaluate(() => [...new FormData(document.querySelector('form')!).entries()]);
}

test('picker submits exactly once and separates current, default and reset values', async ({page}) => {
    await mountPicker(page);
    await expect(page.locator('zui-picker')).toContainText('Hao');
    expect(await formValues(page)).toEqual([['owner', 'hao']]);
    await expect(page.locator('zui-picker [name]')).toHaveCount(0);
    await page.evaluate(() => {
        const picker = document.querySelector('zui-picker')!;
        picker.value = 'hao';
        picker.defaultValue = 'tom';
    });
    expect(await formValues(page)).toEqual([['owner', 'hao']]);
    await page.evaluate(() => {
        const picker = document.querySelector('zui-picker')!;
        picker.value = 'tom';
        picker.setAttribute('value', 'amy');
    });
    await expect(page.locator('zui-picker')).toContainText('Tom');
    expect(await formValues(page)).toEqual([['owner', 'tom']]);
    await page.getByRole('button', {name: 'Reset', exact: true}).click();
    await expect(page.locator('zui-picker')).toContainText('Amy');
    expect(await formValues(page)).toEqual([['owner', 'amy']]);
    await expect(page.locator('#changes')).toHaveText('0');
});

test('picker participates in native validity and disabled fieldset behavior', async ({page}) => {
    await mountPicker(page);
    const missing = await page.evaluate(() => {
        const picker = document.querySelector('zui-picker')!;
        picker.required = true;
        picker.value = '';
        return {valid: picker.checkValidity(), missing: picker.validity.valueMissing, message: picker.validationMessage};
    });
    expect(missing.valid).toBe(false);
    expect(missing.missing).toBe(true);
    expect(missing.message).not.toBe('');
    await page.evaluate(() => {
        document.querySelector('fieldset')!.disabled = true;
    });
    expect(await formValues(page)).toEqual([]);
    await expect(page.getByRole('combobox')).toHaveAttribute('aria-disabled', 'true');
    const valid = await page.evaluate(() => {
        document.querySelector('fieldset')!.disabled = false;
        const picker = document.querySelector('zui-picker')!;
        picker.value = 'tom';
        return picker.checkValidity();
    });
    expect(valid).toBe(true);
    expect(await formValues(page)).toEqual([['owner', 'tom']]);
});

test('picker exposes a single cancellable user change event', async ({page}) => {
    await mountPicker(page);
    await page.evaluate(() => {
        document.querySelector('zui-picker')!.addEventListener('zui-before-change', event => event.preventDefault(), {once: true});
    });
    await page.getByRole('combobox', {name: 'Owner'}).click();
    await page.getByRole('option', {name: 'Tom', exact: true}).click();
    expect(await formValues(page)).toEqual([['owner', 'hao']]);
    await expect(page.locator('#changes')).toHaveText('0');
    await expect(page.getByRole('listbox')).toHaveCount(0);
    await page.getByRole('combobox', {name: 'Owner'}).click();
    await page.getByRole('option', {name: 'Tom', exact: true}).click();
    await expect(page.locator('#changes')).toHaveText('1');
    expect(await formValues(page)).toEqual([['owner', 'tom']]);
});

test('picker supports label focus, keyboard selection and popup cleanup on removal', async ({page}) => {
    await mountPicker(page);
    await page.locator('label').click();
    await expect(page.getByRole('listbox')).toBeVisible();
    await expect(page.getByRole('combobox', {name: 'Owner'})).toBeFocused();
    await expect(page.getByRole('combobox', {name: 'Owner'})).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(page.locator('#changes')).toHaveText('1');
    await expect(page.getByRole('listbox')).toHaveCount(0);
    expect(await formValues(page)).toEqual([['owner', 'tom']]);
    await page.getByRole('combobox', {name: 'Owner'}).press('Enter');
    await expect(page.getByRole('listbox')).toBeVisible();
    const state = await page.evaluate(async () => {
        const picker = document.querySelector('zui-picker')!;
        picker.remove();
        await Promise.resolve();
        const remainingPopups = document.querySelectorAll('.picker-menu-list').length;
        document.querySelector('fieldset')!.append(picker);
        await picker.ready;
        return {remainingPopups, value: picker.value};
    });
    expect(state).toEqual({remainingPopups: 0, value: 'tom'});
    await expect(page.getByRole('listbox')).toHaveCount(0);
});

test('picker keeps rapid property writes silent and supports multiple values', async ({page}) => {
    await mountPicker(page);
    await page.evaluate(() => {
        const picker = document.querySelector('zui-picker')!;
        picker.multiple = 3;
        picker.value = 'hao,tom';
        picker.value = 'tom,amy';
    });
    await expect(page.locator('zui-picker')).toContainText('Tom');
    await expect(page.locator('zui-picker')).toContainText('Amy');
    expect(await formValues(page)).toEqual([['owner', 'tom,amy']]);
    await expect(page.locator('#changes')).toHaveText('0');
});

test('picker has accessible closed and open states', async ({page}) => {
    await mountPicker(page);
    const closed = await new AxeBuilder({page}).include('zui-picker').analyze();
    expect(closed.violations).toEqual([]);
    await page.getByRole('combobox', {name: 'Owner'}).click();
    await expect(page.getByRole('option', {name: 'Tom', exact: true})).toBeVisible();
    const opened = await new AxeBuilder({page}).include('zui-picker').include('.picker-menu-list').analyze();
    expect(opened.violations).toEqual([]);
});

test('a property write in before-change takes precedence over the pending selection', async ({page}) => {
    await mountPicker(page);
    await page.evaluate(() => {
        const picker = document.querySelector('zui-picker')!;
        picker.addEventListener('zui-before-change', () => {
            picker.value = 'amy';
        }, {once: true});
    });
    await page.getByRole('combobox', {name: 'Owner'}).click();
    await page.getByRole('option', {name: 'Tom', exact: true}).click();
    await expect(page.locator('zui-picker')).toContainText('Amy');
    expect(await formValues(page)).toEqual([['owner', 'amy']]);
    await expect(page.locator('#changes')).toHaveText('0');
});
