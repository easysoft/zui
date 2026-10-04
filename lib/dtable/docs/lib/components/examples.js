export function mountDTables(root, getOptions) {
    const tables = [...root.querySelectorAll('[id^="dtable-"]:not(.dtable)')];
    const instances = new Map();
    let disposed = false;
    let initTimer = 0;

    function tryInitDTables() {
        if (disposed || !window.zui) {
            return;
        }
        tables.forEach((table) => {
            if (instances.has(table) || !window.zui.dom.isVisible(table)) {
                return;
            }
            instances.set(table, new window.zui.DTable(table, getOptions(table.id)));
            table.classList.add('dtable-inited');
        });
        if (instances.size === tables.length) {
            document.removeEventListener('scroll', handleScroll);
        }
    }

    function handleScroll() {
        cancelAnimationFrame(initTimer);
        initTimer = requestAnimationFrame(() => {
            initTimer = 0;
            tryInitDTables();
        });
    }

    document.addEventListener('scroll', handleScroll);
    onZUIReady(tryInitDTables);

    return () => {
        disposed = true;
        document.removeEventListener('scroll', handleScroll);
        cancelAnimationFrame(initTimer);
        instances.forEach((instance, table) => {
            instance.destroy();
            table.classList.remove('dtable-inited');
        });
        instances.clear();
    };
}
