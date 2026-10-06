import {readFileSync} from 'node:fs';
import Path from 'node:path';
import {expect, test} from '@playwright/test';

import type {Locator, Page} from '@playwright/test';
import type {FormBuilder} from '@zui/form-builder';

type FormBuilderWindow = Window & {zui: {FormBuilder: typeof FormBuilder}};

const source = readFileSync(Path.resolve(import.meta.dirname, '../../lib/form-builder/docs/lib/forms/index.md'), 'utf8');
const snippets = [...source.matchAll(/== 完整代码\n\n```html\n([\s\S]*?)\n```/g)].map(match => match[1]);
const ids = ['formBuilderBasic', 'formBuilderWidgets', 'formBuilderLayout', 'formBuilderLinkage', 'formBuilderValidation', 'formBuilderSubmit'];
const initialData = [
    {name: '林悦', email: 'linyue@example.com', notifications: true},
    {priority: 'normal', description: '', channels: ['email'], enabled: true, quantity: 1},
    {firstName: '林', lastName: '悦', contact: {email: 'linyue@example.com', phone: ''}},
    {userType: 'normal', adminCode: '', reviewer: '部门负责人'},
    {username: '', email: ''},
    {title: '客户服务门户', notifications: true},
];

async function formData(page: Page, index: number) {
    return page.evaluate(id => (window as unknown as FormBuilderWindow).zui.FormBuilder.get(`#${id}`)?.$?.formData, ids[index]);
}

async function changeText(input: Locator, value: string) {
    await input.fill(value);
    await input.press('Tab');
}

async function expectInitial(page: Page, index: number) {
    const root = page.locator(`#${ids[index]}`);
    await expect(root.locator('.form-builder')).toBeVisible();
    await expect.poll(() => formData(page, index)).toEqual(initialData[index]);
    await expect(root.locator('.form-item-error')).toHaveCount(0);
    if (index === 0) {
        await expect(root.getByLabel('姓名', {exact: true})).toHaveValue('林悦');
        await expect(root.getByLabel('接收通知', {exact: true})).toBeChecked();
    } else if (index === 1) {
        await expect(root.getByLabel('优先级', {exact: true})).toHaveValue('normal');
        await expect(root.locator('.picker-select')).toContainText('邮件');
        await expect(root.getByLabel('启用通知', {exact: true})).toBeChecked();
    } else if (index === 2) {
        await expect(root.getByLabel('邮箱', {exact: true})).toBeVisible();
        await expect(root.getByLabel('姓', {exact: true})).toHaveValue('林');
    } else if (index === 3) {
        await expect(root.getByLabel('管理员授权说明', {exact: true})).toHaveCount(0);
        await expect(root.getByLabel('审核人', {exact: true})).toHaveValue('部门负责人');
        await expect(root.getByLabel('审核人', {exact: true})).not.toBeEditable();
    } else if (index === 4) {
        await expect(page.locator('#formBuilderValidationResult')).toHaveText('填写字段后点击“验证表单”');
    } else {
        await expect(page.locator('#formBuilderSubmitResult')).toHaveText('点击“提交表单”查看数据');
    }
}

async function exercise(page: Page, index: number) {
    const root = page.locator(`#${ids[index]}`);
    const label = (name: string) => root.getByLabel(name, {exact: true});
    await expectInitial(page, index);
    await root.scrollIntoViewIfNeeded();
    expect(await root.evaluate((element) => {
        const box = element.getBoundingClientRect();
        return box.left >= 0 && box.right <= innerWidth && element.scrollWidth <= element.clientWidth;
    })).toBe(true);

    if (index === 0) {
        await changeText(label('姓名'), '陈曦');
        await label('接收通知').focus();
        await page.keyboard.press('Space');
        await expect(label('接收通知')).not.toBeChecked();
        await expect.poll(() => formData(page, index)).toEqual({...initialData[index], name: '陈曦', notifications: false});
    } else if (index === 1) {
        await label('优先级').selectOption('urgent');
        await changeText(label('说明'), '优先通知项目负责人');
        await root.locator('.picker-select').click();
        const pop = page.locator('.picker-menu.in');
        await expect(pop).toBeVisible();
        await pop.getByText('站内消息', {exact: true}).click();
        await expect(root.locator('.picker-select')).toContainText('站内消息');
        await label('数量').click();
        await expect(pop).toHaveCount(0);
        await changeText(label('数量'), '3');
        await expect(label('数量')).toHaveAttribute('type', 'number');
        await expect(label('数量')).toHaveAttribute('min', '1');
        await expect(label('数量')).toHaveAttribute('max', '10');
        await label('启用通知').focus();
        await page.keyboard.press('Space');
        await expect(label('启用通知')).not.toBeChecked();
        await expect.poll(() => formData(page, index)).toEqual({priority: 'urgent', description: '优先通知项目负责人', channels: ['email', 'message'], enabled: false, quantity: 3});
    } else if (index === 2) {
        const first = (await label('姓').boundingBox())!;
        const last = (await label('名').boundingBox())!;
        expect(Math.abs(first.y - last.y)).toBeLessThan(1);
        expect(last.x).toBeGreaterThan(first.x + first.width);
        await changeText(label('电话'), '13800138000');
        const summary = root.locator('summary');
        await summary.focus();
        await page.keyboard.press('Space');
        await expect(label('邮箱')).not.toBeVisible();
        await page.keyboard.press('Enter');
        await expect(label('邮箱')).toBeVisible();
        await expect(summary).toBeFocused();
        await expect.poll(() => formData(page, index)).toEqual({...initialData[index], contact: {email: 'linyue@example.com', phone: '13800138000'}});
    } else if (index === 3) {
        await label('用户类型').selectOption('admin');
        await expect(label('管理员授权说明')).toBeVisible();
        await expect(label('管理员授权说明')).toHaveJSProperty('required', true);
        await expect(root.getByText('请说明管理员权限的使用范围', {exact: true})).toBeVisible();
        await expect(label('审核人')).toHaveValue('系统管理员');
        await changeText(label('管理员授权说明'), '维护部门成员权限');
        await label('用户类型').selectOption('normal');
        await expect(label('管理员授权说明')).toHaveCount(0);
        await expect(label('审核人')).toHaveValue('部门负责人');
        await expect.poll(() => formData(page, index)).toEqual({...initialData[index], adminCode: '维护部门成员权限'});
        await label('用户类型').selectOption('admin');
        await expect(label('管理员授权说明')).toHaveValue('维护部门成员权限');
    } else if (index === 4) {
        const submit = root.getByRole('button', {name: '验证表单', exact: true});
        const result = page.locator('#formBuilderValidationResult');
        await expect(root.locator('form')).toHaveJSProperty('noValidate', true);
        await submit.click();
        await expect(root.locator('[z-key="username"] .form-item-error').first()).toBeVisible();
        await expect(root.locator('[z-key="email"] .form-item-error').first()).toBeVisible();
        await changeText(label('用户名'), '1a');
        await changeText(label('邮箱'), 'name@');
        await submit.click();
        await expect(root.getByText('请以字母开头，仅使用字母、数字或下划线', {exact: true})).toBeVisible();
        await expect(root.getByText('请输入有效的邮箱地址', {exact: true})).toBeVisible();
        await changeText(label('用户名'), 'lin_yue');
        await changeText(label('邮箱'), 'linyue@example.com');
        await submit.focus();
        await page.keyboard.press('Enter');
        await expect(root.locator('.form-item-error')).toHaveCount(0);
        await expect(result).toHaveText('验证通过');
        await changeText(label('用户名'), '1');
        await expect(result).toHaveText('填写字段后点击“验证表单”');
        await submit.click();
        await expect(root.locator('[z-key="username"] .form-item-error').first()).toBeVisible();
    } else {
        const result = page.locator('#formBuilderSubmitResult');
        const submit = root.getByRole('button', {name: '提交表单', exact: true});
        await changeText(label('项目名称'), '工单门户');
        await label('接收通知').focus();
        await page.keyboard.press('Space');
        await submit.click();
        await expect(result).toHaveText(JSON.stringify({title: '工单门户', notifications: false}, null, 2));
        await expect(root.locator('input[name="json"]')).toHaveValue(JSON.stringify({title: '工单门户', notifications: false}));
        await changeText(label('项目名称'), '客户反馈中心');
        await expect(result).toHaveText('点击“提交表单”查看数据');
        await submit.focus();
        await page.keyboard.press('Space');
        await expect(result).toHaveText(JSON.stringify({title: '客户反馈中心', notifications: false}, null, 2));
        await expect(result).toHaveCSS('white-space', 'pre-wrap');
        expect(await result.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true);
    }
}

for (const width of [1280, 320]) {
    for (const mode of ['preview', 'copied']) {
        test(`FormBuilder ${mode}: complete forms, widgets, validation and submit at ${width}px`, async ({page, baseURL}, testInfo) => {
            const errors: string[] = [];
            page.on('pageerror', error => errors.push(error.message));
            page.on('response', (response) => {
                if (response.url().startsWith(new URL(baseURL!).origin) && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
            });
            await page.setViewportSize({width, height: 900});
            expect(snippets).toHaveLength(ids.length);
            if (mode === 'preview') {
                await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
                await page.goto('lib/forms/form-builder/');
                await expect(page.locator('.plugin-tabs')).toHaveCount(ids.length);
            }

            async function openCopied(code: string, name: string) {
                const url = new URL(`__form_builder_${name}__.html`, baseURL).href;
                await page.route(url, route => route.fulfill({
                    contentType: 'text/html; charset=utf-8',
                    body: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="zui/zui.css"><script src="zui/zui.js"></script></head><body><main class="p-4">${code}</main></body></html>`,
                }));
                await page.goto(url);
            }

            for (const [index, id] of ids.entries()) {
                await test.step(id, async () => {
                    if (mode === 'copied') await openCopied(snippets[index], id);
                    const url = page.url();
                    await exercise(page, index);
                    expect(page.url(), 'Demo submissions must stay on the page').toBe(url);
                    if (mode === 'preview') {
                        const previous = await page.evaluateHandle(id => (window as unknown as FormBuilderWindow).zui.FormBuilder.get(`#${id}`)!, id);
                        const tabs = page.locator('.plugin-tabs').nth(index);
                        if ([1, 2, 4, 5].includes(index)) await tabs.screenshot({path: testInfo.outputPath(`${id}-${width}.png`), animations: 'disabled'});
                        if (index === 1) {
                            await page.locator(`#${id} .picker-select`).click();
                            await expect(page.locator('.picker-menu.in')).toBeVisible();
                        }
                        await tabs.getByRole('tab', {name: '完整代码', exact: true}).click();
                        await expect.poll(() => previous.evaluate(instance => instance.destroyed && !instance.$ && !instance.element.isConnected)).toBe(true);
                        await expect(page.locator('.picker-menu')).toHaveCount(0);
                        await previous.dispose();
                        await expect(tabs.locator('pre code')).toHaveText(snippets[index]);
                        await tabs.locator('button.copy').click();
                        await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(snippets[index]);
                        await tabs.getByRole('tab', {name: '示例', exact: true}).click();
                        await expectInitial(page, index);
                    }
                });
            }
            if (mode === 'copied') {
                await openCopied(snippets.join('\n'), 'combined');
                for (let index = 0; index < ids.length; index++) await expectInitial(page, index);
            }
            expect(await page.locator('[id]').evaluateAll((elements) => {
                const ids = elements.map(element => element.id);
                return new Set(ids).size === ids.length;
            })).toBe(true);
            await page.locator('#formBuilderWidgets .picker-select').click();
            await expect(page.locator('.picker-menu.in')).toBeVisible();
            const previous = await page.evaluateHandle(ids => ids.map(id => (window as unknown as FormBuilderWindow).zui.FormBuilder.get(`#${id}`)!), ids);
            if (mode === 'preview') {
                await page.locator('.VPDocFooter a.pager-link').first().click();
            } else {
                await previous.evaluate(instances => instances.forEach(instance => instance.destroy()));
            }
            await expect.poll(() => previous.evaluate(instances => instances.every(instance => instance.destroyed && !instance.$))).toBe(true);
            await expect(page.locator('.picker-menu')).toHaveCount(0);
            await previous.dispose();
            expect(errors, 'Page errors and failed resources').toEqual([]);
        });
    }
}
