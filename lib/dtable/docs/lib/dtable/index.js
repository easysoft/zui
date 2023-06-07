import {withBase} from 'vitepress';

const defaultCols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: (val) => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small class="text-dark">迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small class="text-dark">人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '完成日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map(action => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const projectNames = ['禅道开源版', '禅道企业版', '禅道旗舰版', '禅道移动端', '禅道自动化测试社区', 'ZUI3', 'ZenDAS', '渠成云原生应用交付平台', 'ZTF', 'ZenData', 'ZentaoPHP', '喧喧', 'ZSite', 'ZDOO', 'ZenTools', 'ZenShot', 'ZenPanel', 'ZBox', 'MZUI'];
const managerList = ['李强', '张天明', '孙小微', '王萌', '刘大辉', '周红', '李兰', '金星', '魏小娟', '张亮', '马广春', '丁玉涛'];

const now = Date.now();
function generateRowData(index) {
    const managerIndex = Math.floor(Math.random() * managerList.length);
    const id = index + 1;
    return {
        id: `${id}`,
        project: `${projectNames[index % projectNames.length]}${Math.floor(index / projectNames.length) || ''}`,
        manager: managerList[managerIndex],
        managerAvatar: withBase(`assets/avatar/avatar-${1 + (managerIndex % 10)}.png`),
        storyPoints: Math.floor(Math.random() * 1000),
        executionCounts: Math.floor(Math.random() * 50),
        investedDays: Math.floor(Math.random() * 60),
        startDate: new Date(now - Math.floor(Math.random() * 100 * (3600 * 1000 * 24))).toLocaleDateString(),
        finishDate: new Date(now + Math.floor(Math.random() * 100 * (3600 * 1000 * 24))).toLocaleDateString(),
        progress: Math.floor(Math.random() * 100),
        actions: ['start', 'edit', 'close'],
        parent: `${['', '', '', id - 1, id - 2, id - 3, id - 3, id - 4, '', ''][id % 10]}`,
    };
}

const rowDatas = Array(100).fill(0).map((_, index) => generateRowData(index));

const optionsOverride = {
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
            actions: {type: 'actionButtons', width: 100, onRenderCell: null, actionBtnData: {start: {title: '开始', icon: 'play'}, close: {title: '关闭', icon: 'off'}, edit: {title: '编辑', icon: 'pencil'}}, style: {justifyContent: 'center'}},
        },
    },
    'dtable-layout-size': {
        width: 'auto',
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
                        html: row.data[col.name].map(action => {
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
        cols: Array.isArray(override.cols) ? override.cols.map(col => {
            if (typeof col === 'string') {
                return defaultCols.find(c => c.name === col);
            }
            return {...defaultCols.find(c => c.name === col.name), ...col};
        }) : defaultCols.map(col => {
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
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    initTimer = requestAnimationFrame(tryInitDTables);
}

function tryInitDTables() {
    const tableList = document.querySelectorAll('[id^="dtable-"]:not(.dtable)');
    let initedCount = 0;
    tableList.forEach(table => {
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
