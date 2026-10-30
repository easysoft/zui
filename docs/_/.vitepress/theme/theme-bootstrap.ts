// This small, synchronous head script restores validated cached tokens before first paint.
// The client revalidates settings and regenerates tokens from the canonical model.
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
            let declarations = Object.entries(tokens).map(([key, value]) => {
                if (!/^--(?:color-[a-z]+(?:-[a-z]+)*(?:-\d+)?(?:-rgb)?|radius(?:-(?:sm|md|lg|xl|2xl|3xl))?|font-size-root)$/.test(key)
                    || typeof value !== 'string'
                    || !/^(?:#[\da-fA-F]{6}|\d{1,3},\s*\d{1,3},\s*\d{1,3}|\d+(?:\.\d+)?(?:px|rem))$/.test(value)) {
                    throw new Error('Invalid theme token');
                }
                return `${key}:${value};`;
            }).join('');
            // Older caches predate the readable text tokens used by solid skins.
            for (const [key, value] of Object.entries(tokens)) {
                const match = key.match(/^--color-(?:(primary|secondary|success|warning|danger|important|special)-500|(gray-(?:50|[1-9]00|950)))$/);
                const name = match?.[1] || match?.[2];
                if (!name || typeof value !== 'string' || !/^#[\da-f]{6}$/i.test(value) || Object.hasOwn(tokens, `--color-on-${name}`)) {
                    continue;
                }
                const [red, green, blue] = [1, 3, 5].map((start) => {
                    const channel = parseInt(value.slice(start, start + 2), 16) / 255;
                    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
                });
                const white = 1.05 / (red * 0.2126 + green * 0.7152 + blue * 0.0722 + 0.05) >= 4.5;
                declarations += `--color-on-${name}:${white ? '#ffffff' : '#000000'};--color-on-${name}-rgb:${white ? '255, 255, 255' : '0, 0, 0'};`;
            }
            return declarations;
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
