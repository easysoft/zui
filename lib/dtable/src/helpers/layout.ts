import {parseNumber, clamp} from './number';
import type {ColInfo, ColSetting, DTableColsLayout, DTableColsSectionLayout, DTableOptions, DTablePlugin} from '../types';
import type {DTable} from '../components';

function initSectionColsLayout(cols: DTableColsSectionLayout, fixed = false) {
    if (!cols.list.length) {
        return;
    }

    if (cols.widthSetting && cols.width !== cols.widthSetting) {
        cols.width = cols.widthSetting;
        const extraWidth = cols.width - cols.totalWidth;
        if (fixed || extraWidth > 0) {
            const flexCols = cols.flexList.length ? cols.flexList : cols.list;
            const totalFlex = flexCols.reduce((total, col) => total + (col.flex || 1), 0);
            flexCols.forEach(col => {
                const flexWidth = Math.min(extraWidth, Math.ceil(extraWidth * ((col.flex || 1) / totalFlex)));
                col.realWidth = col.width + flexWidth;
            });
        }
    }

    let left = 0;
    cols.list.forEach(col => {
        if (!col.realWidth) {
            col.realWidth = col.width;
        }
        col.left = left;
        left += col.realWidth;
    });
}

export function initColsLayout(dtable: DTable, options: DTableOptions, plugins: DTablePlugin[], width: number): DTableColsLayout {
    /* Init columns. */
    const {defaultColWidth, minColWidth, maxColWidth, fixedLeftWidth = 0, fixedRightWidth = 0} = options;
    const calcFixedWidth = (fixedWidth: typeof fixedLeftWidth): number => {
        if (typeof fixedWidth === 'function') {
            fixedWidth = fixedWidth.call(dtable);
        }
        fixedWidth = parseNumber(fixedWidth, 0);
        if (fixedWidth < 1) {
            fixedWidth = Math.round(fixedWidth * width);
        }
        return fixedWidth;
    };
    const centerCols: DTableColsSectionLayout = {
        width: 0,
        list: [],
        flexList: [],
        widthSetting: 0,
        totalWidth: 0,
    };
    const leftCols = {
        ...centerCols,
        list: [],
        flexList: [],
        widthSetting: calcFixedWidth(fixedLeftWidth),
    };
    const rightCols = {
        ...centerCols,
        list: [],
        flexList: [],
        widthSetting: calcFixedWidth(fixedRightWidth),
    };
    const colsList: ColInfo[] = [];
    const colsMap: Record<string, ColInfo> = {};
    let needSortCols = false;

    const onAddColCallbacks: ((this: DTable, colInfo: ColInfo) => void)[] = [];
    const colTypesModifiers: Record<string, (Partial<ColSetting> | ((this: DTable, colSetting: ColSetting) => (Partial<ColSetting> | undefined)))[]> = {};
    plugins.forEach(plugin => {
        const {colTypes, onAddCol} = plugin;
        if (colTypes) {
            Object.entries(colTypes).forEach(([type, modifier]) => {
                if (!colTypesModifiers[type]) {
                    colTypesModifiers[type] = [];
                }
                colTypesModifiers[type].push(modifier);
            });
        }
        if (onAddCol) {
            onAddColCallbacks.push(onAddCol);
        }
    });
    options.cols.forEach((userColSetting) => {
        if (userColSetting.hidden) {
            return;
        }
        const {type = '', name} = userColSetting;
        const colSetting: typeof userColSetting = {
            fixed: false,
            flex: false,
            width: defaultColWidth,
            minWidth: minColWidth,
            maxWidth: maxColWidth,
            ...userColSetting,
            type,
        };
        const colInfo: ColInfo = {
            name,
            type,
            setting: colSetting,
            flex: 0,
            left: 0,
            width: 0,
            realWidth: 0,
            visible: true,
            index: colsList.length,
        };

        const colTypeModifier = colTypesModifiers[type];
        if (colTypeModifier) {
            colTypeModifier.forEach(modifier => {
                const newColSetting = typeof modifier === 'function' ? modifier.call(dtable, colSetting) : modifier;
                if (newColSetting) {
                    Object.assign(colSetting, newColSetting, userColSetting);
                }
            });
        }

        const {fixed, flex, minWidth = minColWidth, maxWidth = maxColWidth} = colSetting;
        const colWidth = parseNumber(colSetting.width || defaultColWidth, defaultColWidth);
        colInfo.flex = flex === true ? 1 : (typeof flex === 'number' ? flex : 0);
        colInfo.width = clamp(colWidth < 1 ? Math.round(colWidth * width) : colWidth, minWidth, maxWidth);

        onAddColCallbacks.forEach(callback => callback.call(dtable, colInfo));

        colsList.push(colInfo);
        colsMap[colInfo.name] = colInfo;
        const sectionCols = fixed ? (fixed === 'left' ? leftCols : rightCols) : centerCols;
        sectionCols.list.push(colInfo);
        sectionCols.totalWidth += colInfo.width;
        sectionCols.width = sectionCols.totalWidth;
        if (colInfo.flex) {
            sectionCols.flexList.push(colInfo);
        }
        if (typeof colSetting.order === 'number') {
            needSortCols = true;
        }
    });

    /* Sort columns. */
    if (needSortCols) {
        const colsSorter = (a: ColInfo, b: ColInfo) => (a.setting.order ?? 0) - (b.setting.order ?? 0);
        colsList.sort(colsSorter);
        leftCols.list.sort(colsSorter);
        centerCols.list.sort(colsSorter);
        rightCols.list.sort(colsSorter);
    }

    /* Layout columns. */
    initSectionColsLayout(leftCols, true);
    initSectionColsLayout(rightCols, true);
    centerCols.widthSetting = width - leftCols.width - rightCols.width;
    initSectionColsLayout(centerCols);

    return {
        list: colsList,
        map: colsMap,
        left: leftCols,
        center: centerCols,
        right: rightCols,
    };
}
