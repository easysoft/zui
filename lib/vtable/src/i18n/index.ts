const zh_cn = {
    empty: '暂无数据',
    selectAll: '选择全部可选行',
    selectRow: '选择行 {0}',
    sortAscending: '按 {0} 升序排列',
    sortDescending: '按 {0} 降序排列',
    sortNone: '取消 {0} 排序',
    resizeColumn: '调整 {0} 列宽',
};

const zh_tw: typeof zh_cn = {
    empty: '暫無資料',
    selectAll: '選擇全部可選列',
    selectRow: '選擇列 {0}',
    sortAscending: '依 {0} 升冪排列',
    sortDescending: '依 {0} 降冪排列',
    sortNone: '取消 {0} 排序',
    resizeColumn: '調整 {0} 欄寬',
};

const en: typeof zh_cn = {
    empty: 'No data',
    selectAll: 'Select all selectable rows',
    selectRow: 'Select row {0}',
    sortAscending: 'Sort {0} ascending',
    sortDescending: 'Sort {0} descending',
    sortNone: 'Clear sorting for {0}',
    resizeColumn: 'Resize column {0}',
};

export const vtableI18n = {zh_cn, zh_tw, en, default: en};
