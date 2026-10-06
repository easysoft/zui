// This small, synchronous head script restores validated cached tokens before first paint.
// The client revalidates settings and regenerates the cache from the canonical model.
function restoreTheme() {
    try {
        // VitePress may run head scripts again during client-side navigation.
        if (document.getElementById('zui-custom-theme')) {
            return;
        }
        const saved = JSON.parse(localStorage.getItem('zui-docs-theme-v1') || 'null');
        if (saved?.settings?.version !== 1) {
            return;
        }
        const read = (tokens: unknown) => {
            if (!tokens || typeof tokens !== 'object' || Array.isArray(tokens)) {
                throw new Error('Invalid theme');
            }
            return Object.entries(tokens).map(([key, value]) => {
                if (!/^--(?:color-[a-z]+(?:-[a-z]+)*(?:-\d+)?(?:-rgb)?|radius(?:-(?:sm|md|lg|xl|2xl|3xl))?|font-size-root)$/.test(key)
                    || typeof value !== 'string'
                    || !/^(?:#[\da-fA-F]{6}|\d{1,3},\s*\d{1,3},\s*\d{1,3}|\d+(?:\.\d+)?(?:px|rem))$/.test(value)) {
                    throw new Error('Invalid theme token');
                }
                return `${key}:${value};`;
            }).join('');
        };
        const light = read(saved.light);
        const dark = read(saved.dark);
        const style = document.createElement('style');
        style.id = 'zui-custom-theme';
        const root = ':root[data-zui-theme]';
        style.textContent = `${root} {${light}} @media (prefers-color-scheme: dark) {${root} .dark-auto {${dark}}} ${root}.dark, ${root} .dark {${dark}} ${root} .light-in-dark {${light}}`;
        document.head.appendChild(style);
        document.documentElement.dataset.zuiTheme = '';
    } catch {
        // Storage can be blocked, corrupt, or from an unsupported version.
    }
}

export const themeBootstrapScript = `(${restoreTheme.toString()})();`;
