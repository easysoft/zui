/** Apply the existing ZUI theme to the preview document, including body portals. */
export function applyTheme(theme: unknown) {
    const root = document.documentElement;
    const previousDark = root.classList.contains('dark');
    const previousColorScheme = root.style.colorScheme;
    const media = theme !== 'light' && theme !== 'dark' ? window.matchMedia('(prefers-color-scheme: dark)') : undefined;
    const update = () => {
        const dark = theme === 'dark' || !!media?.matches;
        root.classList.toggle('dark', dark);
        root.style.colorScheme = dark ? 'dark' : 'light';
    };
    update();
    media?.addEventListener('change', update);
    return () => {
        media?.removeEventListener('change', update);
        root.classList.toggle('dark', previousDark);
        root.style.colorScheme = previousColorScheme;
    };
}
