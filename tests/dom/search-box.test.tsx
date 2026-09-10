import {act, fireEvent, render} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {SearchBox} from '@zui/search-box/react';

async function flushSearch() {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(500);
    });
}

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
