import {act, fireEvent, within} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {Dropdown} from '@zui/dropdown';
import {flushAnimationFrame} from '../setup/dom';

async function createDropdown(tree: boolean, nestedTrigger?: 'click' | 'hover', searchBox = false, mask = false) {
    const trigger = document.createElement('button');
    document.body.append(trigger);
    const onClickItem = vi.fn();
    const onToggle = vi.fn();
    const dropdown = new Dropdown(trigger, {
        animation: false,
        mask,
        tree,
        onClickItem,
        menu: {nestedTrigger, onToggle},
        items: [
            {key: 'copy', text: 'Copy'},
            {key: 'export', text: 'Export', icon: 'download', listProps: {searchBox}, items: [
                {key: 'format', text: 'Choose format', listProps: {searchBox}, items: [
                    {key: 'pdf', text: 'Export as PDF'},
                ]},
            ]},
            {key: 'keep', text: 'Keep open', className: 'not-hide-menu'},
        ],
    });
    await flushAnimationFrame();
    act(() => dropdown.show());
    await act(async () => flushAnimationFrame());
    return {dropdown, onClickItem, onToggle, menu: within(dropdown.target!)};
}

async function flushHover() {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(200);
    });
}

describe.each([false, true])('Dropdown click dismissal (tree: %s)', (tree) => {
    it('keeps parent items open and closes after choosing a nested leaf', async () => {
        const {dropdown, menu, onClickItem} = await createDropdown(tree);

        fireEvent.click(menu.getByText('Export'));
        expect(dropdown.shown).toBe(true);
        expect(menu.getByText('Choose format')).toBeVisible();

        fireEvent.click(menu.getByText('Choose format'));
        expect(dropdown.shown).toBe(true);
        expect(menu.getByText('Export as PDF')).toBeVisible();

        fireEvent.click(menu.getByText('Export as PDF'));
        expect(dropdown.shown).toBe(false);
        expect(onClickItem).toHaveBeenCalledTimes(3);
        expect(onClickItem).toHaveBeenLastCalledWith(expect.objectContaining({keyPath: 'export:format:pdf'}));
    });

    it.each(['.item-inner', '.item-icon', '.nested-toggle-icon'])('keeps the Dropdown open when clicking a parent %s', async (selector) => {
        const {dropdown, menu} = await createDropdown(tree);
        const item = menu.getByText('Export').closest('.menu-item')!;

        fireEvent.click(item.querySelector(selector)!);

        expect(dropdown.shown).toBe(true);
        expect(menu.getByText('Choose format')).toBeVisible();
    });

    it('preserves the keep-open option and closes after choosing a root leaf', async () => {
        const {dropdown, menu} = await createDropdown(tree);

        fireEvent.click(menu.getByText('Keep open'));
        expect(dropdown.shown).toBe(true);

        fireEvent.click(menu.getByText('Copy'));
        expect(dropdown.shown).toBe(false);
    });
});

describe('Dropdown search interaction', () => {
    async function openSearchMenu(mask = false) {
        const result = await createDropdown(false, 'hover', true, mask);
        fireEvent.mouseOver(result.menu.getByText('Export'));
        await flushHover();
        const input = result.menu.getByRole('textbox') as HTMLInputElement;
        const wrapper = result.dropdown.menu!.element!.closest('.menu-wrapper')!;
        return {...result, input, wrapper};
    }

    it('keeps a focused search submenu open after leaving the menu and resumes hiding after blur', async () => {
        const {dropdown, menu, input, wrapper} = await openSearchMenu();
        act(() => input.focus());

        fireEvent.mouseLeave(input.closest('.menu-wrapper')!);
        fireEvent.mouseLeave(wrapper);
        await flushHover();

        expect(input).toHaveFocus();
        expect(menu.getByText('Choose format')).toBeVisible();
        expect(dropdown.shown).toBe(true);

        act(() => input.blur());
        fireEvent.mouseLeave(wrapper);
        await flushHover();
        expect(menu.queryByText('Choose format')).not.toBeInTheDocument();
    });

    it('cancels a pending hover dismissal when the search field receives focus', async () => {
        const {menu, input, wrapper} = await openSearchMenu();
        fireEvent.mouseLeave(wrapper);
        act(() => input.focus());
        await flushHover();

        expect(menu.getByText('Choose format')).toBeVisible();
        expect(input).toHaveFocus();
    });

    it('protects composition even if the native candidate window takes focus', async () => {
        const {menu, input, wrapper} = await openSearchMenu();
        act(() => input.focus());
        act(() => input.blur());
        fireEvent.mouseLeave(wrapper);
        fireEvent(input, new CompositionEvent('compositionstart', {bubbles: true}));
        fireEvent.input(input, {target: {value: 'c'}, isComposing: true});
        fireEvent.mouseLeave(wrapper);
        await act(async () => {
            await vi.advanceTimersByTimeAsync(600);
        });

        expect(input).toBeInTheDocument();
        expect(input).toHaveValue('c');
        expect(menu.getByText('Choose format')).toBeVisible();

        fireEvent(input, new CompositionEvent('compositionend', {bubbles: true}));
        fireEvent.mouseLeave(wrapper);
        await flushHover();
        expect(menu.queryByText('Choose format')).not.toBeInTheDocument();
    });

    it('protects all ancestor menus while searching a deeper submenu and still selects leaves', async () => {
        const {dropdown, menu, wrapper} = await openSearchMenu();
        fireEvent.mouseOver(menu.getByText('Choose format'));
        await flushHover();
        const input = within(menu.getByText('Export as PDF').closest('.menu-wrapper')!).getByRole('textbox');
        act(() => input.focus());
        fireEvent(input, new CompositionEvent('compositionstart', {bubbles: true}));
        fireEvent.mouseLeave(input.closest('.menu-wrapper')!);
        fireEvent.mouseLeave(wrapper);
        await flushHover();

        expect(menu.getByText('Choose format')).toBeVisible();
        expect(menu.getByText('Export as PDF')).toBeVisible();
        fireEvent(input, new CompositionEvent('compositionend', {bubbles: true}));
        fireEvent.click(menu.getByText('Export as PDF'));
        expect(dropdown.shown).toBe(false);
    });

    it('still closes the dropdown when clicking outside a focused search menu', async () => {
        const {dropdown, input} = await openSearchMenu(true);
        act(() => input.focus());

        fireEvent.click(document.body);

        expect(dropdown.shown).toBe(false);
    });
});

describe('Dropdown hover and click interaction', () => {
    it.each(['.item-title', '.item-inner', '.item-icon', '.nested-toggle-icon'])('keeps a hovered submenu open when clicking its parent %s', async (selector) => {
        const {dropdown, menu, onClickItem, onToggle} = await createDropdown(false);
        const parent = menu.getByText('Export').closest('.menu-item')!;
        fireEvent.mouseOver(parent);
        fireEvent.mouseEnter(parent.closest('.menu-wrapper')!);
        await flushHover();
        expect(menu.getByText('Choose format')).toBeVisible();
        onToggle.mockClear();

        fireEvent.click(parent.querySelector(selector)!);
        expect(menu.getByText('Choose format')).toBeVisible();
        fireEvent.click(parent.querySelector(selector)!);

        expect(dropdown.shown).toBe(true);
        expect(menu.getByText('Choose format')).toBeVisible();
        expect(onClickItem).toHaveBeenCalledTimes(2);
        expect(onToggle).not.toHaveBeenCalled();

        fireEvent.mouseLeave(dropdown.menu!.element!.closest('.menu-wrapper')!);
        await flushHover();
        expect(menu.queryByText('Choose format')).not.toBeInTheDocument();
        expect(dropdown.shown).toBe(true);
    });

    it('keeps a deeper hovered submenu open and closes after choosing its leaf', async () => {
        const {dropdown, menu, onClickItem, onToggle} = await createDropdown(false);
        fireEvent.mouseOver(menu.getByText('Export'));
        await flushHover();
        fireEvent.mouseOver(menu.getByText('Choose format'));
        fireEvent.mouseEnter(menu.getByText('Choose format').closest('.dropdown-menu')!);
        await flushHover();
        expect(menu.getByText('Export as PDF')).toBeVisible();
        onToggle.mockClear();

        fireEvent.click(menu.getByText('Choose format'));

        expect(menu.getByText('Export as PDF')).toBeVisible();
        expect(onToggle).not.toHaveBeenCalled();
        fireEvent.click(menu.getByText('Export as PDF'));
        expect(dropdown.shown).toBe(false);
        expect(onClickItem).toHaveBeenCalledTimes(2);
    });

    it('preserves programmatic toggling in hover mode', async () => {
        const {dropdown, menu, onToggle} = await createDropdown(false);
        fireEvent.mouseOver(menu.getByText('Export'));
        await flushHover();
        expect(menu.getByText('Choose format')).toBeVisible();

        act(() => {
            void dropdown.menu!.toggle('export');
        });

        expect(menu.queryByText('Choose format')).not.toBeInTheDocument();
        expect(dropdown.shown).toBe(true);
        expect(onToggle).toHaveBeenLastCalledWith('export', false, undefined);
    });

    it.each([false, true])('allows click-triggered submenus to collapse (tree: %s)', async (tree) => {
        const {dropdown, menu, onToggle} = await createDropdown(tree, 'click');
        fireEvent.click(menu.getByText('Export'));
        expect(menu.getByText('Choose format')).toBeVisible();

        fireEvent.click(menu.getByText('Export'));

        expect(menu.queryByText('Choose format')).not.toBeInTheDocument();
        expect(dropdown.shown).toBe(true);
        expect(onToggle).toHaveBeenLastCalledWith('export', false, undefined);
    });
});
