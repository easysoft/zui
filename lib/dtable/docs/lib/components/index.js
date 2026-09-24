import {withBase} from 'vitepress';

const defaultCols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small class="text-dark">迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small class="text-dark">人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

// 固定的项目与阶段计划，便于比较排序、层级和进度展示。
const rowDatas = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close']},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit']},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit']},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit']},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit']},
    {id: '6', parent: '5', project: '工单 · 交互设计', manager: '周敏', storyPoints: 8, executionCounts: 1, investedDays: 8, startDate: '2026-09-14', finishDate: '2026-09-18', progress: 100, actions: ['edit']},
    {id: '7', parent: '5', project: '工单 · 拍照上传开发', manager: '陈晨', storyPoints: 16, executionCounts: 1, investedDays: 10, startDate: '2026-09-21', finishDate: '2026-09-30', progress: 50, actions: ['edit']},
    {id: '8', parent: '5', project: '工单 · 弱网验收', manager: '王宁', storyPoints: 10, executionCounts: 1, investedDays: 0, startDate: '2026-10-01', finishDate: '2026-10-09', progress: 0, actions: ['start', 'edit']},
    {id: '9', project: '团队知识库', manager: '林悦', storyPoints: 40, executionCounts: 3, investedDays: 0, startDate: '2026-10-12', finishDate: '2026-10-30', progress: 0, actions: ['start', 'edit']},
    {id: '10', parent: '9', project: '知识库 · 内容分类', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 0, startDate: '2026-10-12', finishDate: '2026-10-14', progress: 0, actions: ['start', 'edit']},
    {id: '11', parent: '9', project: '知识库 · 全文检索', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 0, startDate: '2026-10-15', finishDate: '2026-10-26', progress: 0, actions: ['start', 'edit']},
    {id: '12', parent: '9', project: '知识库 · 权限验收', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 0, startDate: '2026-10-27', finishDate: '2026-10-30', progress: 0, actions: ['start', 'edit']},
].map(row => ({
    ...row,
    managerAvatar: withBase(`/assets/avatar/avatar-${['林悦', '陈晨', '王宁', '周敏'].indexOf(row.manager) + 1}.png`),
}));

const optionsOverride = {
    'dtable-basic': {
        nested: false,
        footer: false,
        checkable: false,
    },
    'dtable-advanced': {
        checkOnClickRow: true,
        plugins: ['checkable', 'nested', 'rich'],
        striped: true,
        colHover: 'header',
        bordered: true,
        cols: {
            id: {sortType: 'down', width: 70},
            manager: {width: 90, sortType: true},
            executionCounts: {align: 'right', sortType: true},
            investedDays: {align: 'right'},
            startDate: {width: 120, sortType: true},
            finishDate: {width: 120, sortType: true},
        },
    },
    'dtable-layout-size': {
        height: {min: 200, max: 300},
        data: 5,
        cols: {
            manager: false,
            storyPoints: false,
            executionCounts: false,
            startDate: false,
            finishDate: false,
            actions: false,
        },
    },
    'dtable-responsive': {
        height: 'auto',
        data: 5,
        responsive: true,
        cols: {
            project: {fixed: false, flex: 1},
            manager: false,
            storyPoints: false,
            executionCounts: false,
            startDate: false,
            finishDate: false,
            actions: false,
        },
    },
    'dtable-flex': {
        height: 'auto',
        data: 5,
        cols: {
            project: {fixed: false, flex: 3},
            investedDays: {flex: 2},
            progress: {flex: 1},
            manager: false,
            storyPoints: false,
            executionCounts: false,
            startDate: false,
            finishDate: false,
            actions: false,
        },
    },
    'dtable-cols-fixed': {
        height: 'auto',
        data: 5,
        cols: {
            project: {fixed: false, flex: 3, minWidth: 300},
            investedDays: {flex: 2, minWidth: 100},
            progress: {flex: 1, minWidth: 100},
            manager: false,
            storyPoints: false,
            executionCounts: false,
            startDate: false,
            finishDate: false,
        },
    },
    'dtable-header-height': {
        height: 'auto',
        data: 5,
        headerHeight: 50,
    },
    'dtable-header-hidden': {
        height: 'auto',
        data: 5,
        header: false,
    },
    'dtable-header-custom': {
        height: 'auto',
        data: 5,
    },
    'dtable-row-height': {
        height: 'auto',
        data: 5,
        rowHeight: 50,
    },
    'dtable-sort-type': {
        height: 'auto',
        data: 5,
        cols: {
            id: {sortType: 'up'},
            project: {fixed: false, flex: 3, sortType: false},
            investedDays: {flex: 2, sortType: true},
            progress: {flex: 1, sortType: true},
            manager: false,
            storyPoints: false,
            executionCounts: false,
            startDate: false,
            finishDate: false,
            actions: false,
        },
    },
    'dtable-hover-effection': {
        height: 'auto',
        data: 5,
        rowHover: true,
        colHover: true,
        cellHover: true,
    },
    'dtable-hover-effection-custom': {
        height: 'auto',
        data: 5,
        rowHover: true,
        colHover: true,
        cellHover: true,
    },
    'dtable-striped': {
        height: 'auto',
        data: 5,
        striped: true,
    },
    'dtable-striped-custom': 'dtable-striped',
    'dtable-bordered': {
        height: 'auto',
        data: 5,
        bordered: true,
    },
    'dtable-bordered-custom': 'dtable-bordered',
    'dtable-scrollbar': {
        scrollbarHover: true,
        scrollbarSize: 15,
        horzScrollbarPos: 'inside',
        data: 6,
        height: 200,
    },
    'dtable-scrollbar-custom': 'dtable-scrollbar',
    'dtable-cell-style': {
        height: 'auto',
        data: 5,
        cols: {
            id: {style: {color: 'var(--color-danger-500)'}},
            project: {fixed: false, flex: 3, minWidth: 300, cellStyle: {fontWeight: 'bold', color: 'var(--color-primary-500)'}},
            investedDays: false,
            progress: {flex: 1, minWidth: 100},
            manager: false,
            storyPoints: false,
            executionCounts: false,
            startDate: false,
            finishDate: false,
            actions: {align: 'center', cellStyle: {justifyContent: 'end'}},
        },
    },
    'dtable-checkable': {
        height: 'auto',
        data: 5,
        checkOnClickRow: true,
        plugins: ['checkable'],
    },
    'dtable-nested': {
        plugins: ['nested'],
    },
    'dtable-render-cell': {
        cols: {
            actions: {
                onRenderCell(_result, {col, row}) {
                    return [{
                        html: row.data[col.name].map((action) => {
                            if (action === 'start') {
                                return `<a href="#action=${action}" title="开始" class="btn square primary-pale size-sm"><i class="icon icon-play"></i></a>`;
                            }
                            if (action === 'edit') {
                                return `<a href="#action=${action}" title="编辑" class="btn square primary-pale size-sm"><i class="icon icon-pencil"></i></a>`;
                            }
                            if (action === 'close') {
                                return `<a href="#action=${action}" title="编辑" class="btn square primary-pale size-sm"><i class="icon icon-off"></i></a>`;
                            }
                            return `<a href="#action=${action}">${action}</a>`;
                        }).join(' '),
                    }];
                },
            },
        },
    },
};

function getOptions(id) {
    let override = optionsOverride[id] || {};
    if (typeof override === 'string') {
        override = optionsOverride[override] || {};
    }
    return {
        height: 400,
        striped: false,
        ...override,
        data: typeof override.data === 'number' ? rowDatas.slice(0, override.data) : rowDatas,
        cols: Array.isArray(override.cols) ? override.cols.map((col) => {
            if (typeof col === 'string') {
                return defaultCols.find(c => c.name === col);
            }
            return {...defaultCols.find(c => c.name === col.name), ...col};
        }) : defaultCols.map((col) => {
            if (override.cols) {
                const overrideCol = override.cols[col.name];
                if (overrideCol) {
                    return {...col, ...overrideCol};
                } else if (overrideCol === false) {
                    return {...col, hidden: true};
                }
            }
            return col;
        }),
    };
}

let initTimer = 0;

function handleScroll() {
    if (initTimer) {
        cancelAnimationFrame(initTimer);
    }

    initTimer = requestAnimationFrame(tryInitDTables);
}

function tryInitDTables() {
    const tableList = document.querySelectorAll('[id^="dtable-"]:not(.dtable)');
    let initedCount = 0;
    tableList.forEach((table) => {
        if (table.classList.contains('dtable-inited')) {
            initedCount++;
            return;
        }
        if (!window.zui || !window.zui.dom.isVisible(table)) {
            return;
        }
        const id = table.id;
        const options = getOptions(id);
        const dtable = new window.zui.DTable(table, options);
        table.classList.add('dtable-inited');
        console.log('> dtable inited', dtable);
        initedCount++;
    });
    if (initedCount === tableList.length) {
        document.removeEventListener('scroll', handleScroll);
    }
}

export default {
    mounted() {
        onZUIReady(tryInitDTables);
        document.addEventListener('scroll', handleScroll);
    },
};
