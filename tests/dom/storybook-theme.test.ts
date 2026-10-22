import {afterEach, expect, it, vi} from 'vitest';
import {applyTheme} from '../../.storybook/theme';

const originalClass = document.documentElement.className;
const originalColorScheme = document.documentElement.style.colorScheme;

afterEach(() => {
    document.documentElement.className = originalClass;
    document.documentElement.style.colorScheme = originalColorScheme;
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});

it.each(['light', 'dark'])('applies explicit %s without subscribing to system changes, then restores the host', (theme) => {
    const root = document.documentElement;
    root.className = 'existing dark';
    root.style.colorScheme = 'normal';
    const matchMedia = vi.fn();
    vi.stubGlobal('matchMedia', matchMedia);
    const dispose = applyTheme(theme);
    expect(root.classList.contains('dark')).toBe(theme === 'dark');
    expect(root.classList.contains('existing')).toBe(true);
    expect(root.style.colorScheme).toBe(theme);
    expect(matchMedia).not.toHaveBeenCalled();
    dispose();
    expect(root.className).toBe('existing dark');
    expect(root.style.colorScheme).toBe('normal');
});

it('follows system changes and removes the listener before another theme takes over', () => {
    const media = Object.assign(new EventTarget(), {matches: false});
    const remove = vi.spyOn(media, 'removeEventListener');
    vi.stubGlobal('matchMedia', vi.fn(() => media));
    const root = document.documentElement;
    const dispose = applyTheme('system');
    expect(root.style.colorScheme).toBe('light');
    media.matches = true;
    media.dispatchEvent(new Event('change'));
    expect(root.classList.contains('dark')).toBe(true);
    expect(root.style.colorScheme).toBe('dark');
    dispose();
    expect(remove).toHaveBeenCalledWith('change', expect.any(Function));
    const disposeLight = applyTheme('light');
    media.dispatchEvent(new Event('change'));
    expect(root.classList.contains('dark')).toBe(false);
    expect(root.style.colorScheme).toBe('light');
    disposeLight();
});
