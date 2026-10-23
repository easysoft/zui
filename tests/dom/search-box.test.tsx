import {act, fireEvent, render} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {i18n} from '@zui/core';
import {SearchBox} from '@zui/search-box/react';

async function flushSearch() {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(500);
    });
}

describe('SearchBox accessibility', () => {
    it.each([
        ['zh-CN', '清空搜索'],
        ['zh-TW', '清空搜尋'],
        ['en', 'Clear search'],
        ['fr', 'Clear search'],
    ])('names the clear button in %s and restores input focus', (language, label) => {
        const previousLanguage = i18n.getCode();
        i18n.setCode(language);
        try {
            const {getByRole, queryByRole} = render(<SearchBox defaultValue="ZUI" />);
            const input = getByRole('textbox');
            const clear = getByRole('button', {name: label});
            act(() => clear.focus());
            fireEvent.click(clear);
            expect(input).toHaveValue('');
            expect(input).toHaveFocus();
            expect(queryByRole('button')).toBeNull();
        } finally {
            i18n.setCode(previousLanguage);
        }
    });

    it('uses the namespaced global translation for a custom clear icon', () => {
        const previousLanguage = i18n.getCode();
        const language = 'search_box_test';
        i18n.addLang({[language]: {searchBox: {clear: 'Reset query'}}});
        i18n.setCode(language);
        try {
            const {getByRole} = render(<SearchBox defaultValue="ZUI" clearIcon="icon-trash" />);
            expect(getByRole('button', {name: 'Reset query'})).toBeEnabled();
        } finally {
            if (i18n.map) delete i18n.map[language];
            i18n.setCode(previousLanguage);
        }
    });
});

describe('SearchBox composition', () => {
    it.each([0, 500])('searches once after committing Chinese text (delay: %s)', async (delay) => {
        const onChange = vi.fn();
        const {getByRole} = render(<SearchBox delay={delay} onChange={onChange} />);
        const input = getByRole('textbox');
        fireEvent(input, new CompositionEvent('compositionstart', {bubbles: true}));
        fireEvent.input(input, {target: {value: 'zhong'}, isComposing: true});
        await flushSearch();

        expect(input).toHaveValue('zhong');
        expect(onChange).not.toHaveBeenCalled();

        fireEvent.input(input, {target: {value: '中'}, isComposing: true});
        fireEvent(input, new CompositionEvent('compositionend', {bubbles: true, data: '中'}));
        fireEvent.input(input, {target: {value: '中'}, isComposing: false});
        await flushSearch();

        expect(input).toHaveValue('中');
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith('中', expect.any(Event));
    });

    it('cancels a pending search when composition starts', async () => {
        const onChange = vi.fn();
        const {getByRole} = render(<SearchBox onChange={onChange} />);
        const input = getByRole('textbox');
        fireEvent.input(input, {target: {value: 'a'}});
        fireEvent(input, new CompositionEvent('compositionstart', {bubbles: true}));
        fireEvent.input(input, {target: {value: 'azhong'}, isComposing: true});
        await flushSearch();
        expect(onChange).not.toHaveBeenCalled();

        fireEvent.input(input, {target: {value: 'a中'}, isComposing: true});
        fireEvent(input, new CompositionEvent('compositionend', {bubbles: true, data: '中'}));
        await flushSearch();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith('a中', expect.any(Event));
    });

    it('resumes a pending search when composition is cancelled without changing the text', async () => {
        const onChange = vi.fn();
        const {getByRole} = render(<SearchBox onChange={onChange} />);
        const input = getByRole('textbox');
        fireEvent.input(input, {target: {value: 'a'}});
        fireEvent(input, new CompositionEvent('compositionstart', {bubbles: true}));
        fireEvent.input(input, {target: {value: 'az'}, isComposing: true});
        await flushSearch();
        expect(onChange).not.toHaveBeenCalled();

        fireEvent.input(input, {target: {value: 'a'}, isComposing: true});
        fireEvent(input, new CompositionEvent('compositionend', {bubbles: true}));
        await flushSearch();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith('a', expect.any(Event));
    });

    it('does not notify twice when compositionend and the final input arrive in the same update', () => {
        const onChange = vi.fn();
        const {getByRole} = render(<SearchBox delay={0} onChange={onChange} />);
        const input = getByRole('textbox') as HTMLInputElement;
        fireEvent(input, new CompositionEvent('compositionstart', {bubbles: true}));
        fireEvent.input(input, {target: {value: 'zhong'}, isComposing: true});

        act(() => {
            input.value = '中';
            input.dispatchEvent(new CompositionEvent('compositionend', {bubbles: true, data: '中'}));
            input.dispatchEvent(new InputEvent('input', {bubbles: true}));
        });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith('中', expect.any(Event));
    });

    it('preserves controlled composition text through a rerender and a focus change', async () => {
        const onChange = vi.fn();
        const {getByRole, rerender} = render(<SearchBox value="" onChange={onChange} hotkeys={false} />);
        const input = getByRole('textbox');
        act(() => input.focus());
        fireEvent(input, new CompositionEvent('compositionstart', {bubbles: true}));
        fireEvent.input(input, {target: {value: 'zhong'}, isComposing: true});
        act(() => input.blur());
        rerender(<SearchBox value="" onChange={onChange} hotkeys={false} placeholder="Search" />);
        await flushSearch();

        expect(input).toHaveValue('zhong');
        expect(onChange).not.toHaveBeenCalled();
        fireEvent.input(input, {target: {value: '中'}, isComposing: true});
        fireEvent(input, new CompositionEvent('compositionend', {bubbles: true, data: '中'}));
        await flushSearch();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith('中', expect.any(Event));
    });

    it('keeps normal input debounced and discards a pending search after clearing', async () => {
        const onChange = vi.fn();
        const {getByRole} = render(<SearchBox onChange={onChange} />);
        const input = getByRole('textbox');
        fireEvent.input(input, {target: {value: 'c'}});
        fireEvent.input(input, {target: {value: 'copy'}});
        expect(onChange).not.toHaveBeenCalled();
        await flushSearch();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith('copy', expect.any(Event));

        fireEvent.input(input, {target: {value: 'copy2'}});
        fireEvent.click(getByRole('button'));
        await flushSearch();
        expect(input).toHaveValue('');
        expect(onChange).toHaveBeenCalledTimes(2);
        expect(onChange).toHaveBeenLastCalledWith('', expect.any(Event));
    });
});

describe('SearchBox controlled input and cleanup', () => {
    it('preserves a draft before the debounced value is echoed and gives Enter the current text', async () => {
        const onChange = vi.fn();
        const onEnter = vi.fn();
        const {getByRole, rerender} = render(<SearchBox value="" onChange={onChange} onEnter={onEnter} />);
        const input = getByRole('textbox');
        fireEvent.input(input, {target: {value: 'sto'}});
        fireEvent.input(input, {target: {value: 'storybook'}});
        rerender(<SearchBox value="" onChange={onChange} onEnter={onEnter} placeholder="Search" />);
        expect(input).toHaveValue('storybook');
        expect(onChange).not.toHaveBeenCalled();
        fireEvent.keyDown(input, {key: 'Enter'});
        expect(onEnter).toHaveBeenLastCalledWith('storybook', expect.any(Event));
        await flushSearch();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith('storybook', expect.any(Event));
        rerender(<SearchBox value="storybook" onChange={onChange} onEnter={onEnter} />);
        expect(input).toHaveValue('storybook');
    });

    it('cancels a pending draft notification when an external value replaces it', async () => {
        const onChange = vi.fn();
        const {getByRole, rerender} = render(<SearchBox value="initial" onChange={onChange} />);
        const input = getByRole('textbox');
        fireEvent.input(input, {target: {value: 'draft'}});
        rerender(<SearchBox value="external" onChange={onChange} />);
        expect(input).toHaveValue('external');
        await flushSearch();
        expect(onChange).not.toHaveBeenCalled();
    });

    it('does not replace a newer draft when the previous notification is echoed', async () => {
        const onChange = vi.fn();
        const {getByRole, rerender} = render(<SearchBox value="" onChange={onChange} />);
        const input = getByRole('textbox');
        fireEvent.input(input, {target: {value: 'first'}});
        await flushSearch();
        fireEvent.input(input, {target: {value: 'second'}});
        rerender(<SearchBox value="first" onChange={onChange} />);
        expect(input).toHaveValue('second');
        await flushSearch();
        expect(onChange).toHaveBeenCalledTimes(2);
        expect(onChange).toHaveBeenLastCalledWith('second', expect.any(Event));
    });

    it('clears an unnotified controlled draft immediately and cancels its timer', async () => {
        const onChange = vi.fn();
        const onClear = vi.fn();
        const {getByRole} = render(<SearchBox value="" onChange={onChange} onClear={onClear} />);
        const input = getByRole('textbox');
        fireEvent.input(input, {target: {value: 'draft'}});
        fireEvent.keyDown(input, {key: 'Escape'});
        expect(input).toHaveValue('');
        expect(input).toHaveFocus();
        expect(onClear).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenLastCalledWith('', expect.any(Event));
        await flushSearch();
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it.each([0, 500])('applies a deferred external replacement after composition ends (delay: %s)', async (delay) => {
        const onChange = vi.fn();
        const {getByRole, rerender} = render(<SearchBox value="initial" onChange={onChange} delay={delay} />);
        const input = getByRole('textbox') as HTMLInputElement;
        fireEvent(input, new CompositionEvent('compositionstart', {bubbles: true}));
        fireEvent.input(input, {target: {value: 'zhong'}, isComposing: true});
        rerender(<SearchBox value="external" onChange={onChange} delay={delay} />);
        expect(input).toHaveValue('zhong');
        act(() => {
            input.value = '中';
            input.dispatchEvent(new CompositionEvent('compositionend', {bubbles: true, data: '中'}));
            input.dispatchEvent(new InputEvent('input', {bubbles: true}));
        });
        await flushSearch();
        expect(input).toHaveValue('external');
        expect(onChange).not.toHaveBeenCalled();
    });

    it('releases pending notifications and hotkeys on unmount', async () => {
        const onChange = vi.fn();
        const onEnter = vi.fn();
        const onClear = vi.fn();
        const {getByRole, unmount} = render(<SearchBox onChange={onChange} onEnter={onEnter} onClear={onClear} />);
        const input = getByRole('textbox');
        fireEvent.input(input, {target: {value: 'pending'}});
        unmount();
        fireEvent.keyDown(input, {key: 'Enter'});
        fireEvent.keyDown(input, {key: 'Escape'});
        await flushSearch();
        expect(onChange).not.toHaveBeenCalled();
        expect(onEnter).not.toHaveBeenCalled();
        expect(onClear).not.toHaveBeenCalled();
    });
});
