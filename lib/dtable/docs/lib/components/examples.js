const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
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
