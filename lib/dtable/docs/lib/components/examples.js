const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 两侧固定列共占约 400px，窄容器将所有列放入同一滚动区域。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

export function withExampleOptions(options) {
    return {
        responsive: true,
        scrollbarHover: false,
        'aria-label': '项目计划示例',
        ...options,
        plugins: [...(options.plugins || []), responsiveExample],
    };
}

export function mountDTables(root, getOptions) {
    const tables = [...root.querySelectorAll('[id^="dtable-"]:not(.dtable):not([data-dtable-managed])')];
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
            instances.set(table, new window.zui.DTable(table, withExampleOptions(getOptions(table.id))));
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
