import {nextTick} from 'vue';

let themeTransition: ViewTransition | undefined;
const pendingThemeChanges: (() => void)[] = [];

async function applyThemeChanges() {
    // A skipped snapshot still runs its callback; drain each accepted change once.
    for (const change of pendingThemeChanges.splice(0)) change();
    await nextTick();
}

/** Apply a site-wide theme or appearance change with the shared cross-fade. */
export function changeTheme(change: () => void) {
    pendingThemeChanges.push(change);
    themeTransition?.skipTransition();
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        void applyThemeChanges();
        return;
    }
    document.documentElement.classList.add('zui-theme-changing');
    const current = document.startViewTransition(applyThemeChanges);
    themeTransition = current;
    const finish = () => {
        if (themeTransition !== current) return;
        themeTransition = undefined;
        document.documentElement.classList.remove('zui-theme-changing');
    };
    // Rapid selections may skip the animation while keeping the theme update.
    void current.ready.catch(() => {});
    void current.finished.then(finish, finish);
}

export function skipThemeTransition() {
    themeTransition?.skipTransition();
}
