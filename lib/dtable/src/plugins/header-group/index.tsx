import {definePlugin} from '../../helpers/shared-plugins';
import type {DTablePlugin} from '../../types/plugin';
import './style.css';

export type DTableHeaderGroupInfo = {
    cols: string[];
    index: number;
};

export type DTableHeaderGroupTypes = {
    options: Partial<{
        headerGroup: boolean;
    }>,
    col: Partial<{
        headerGroup: string;
    }>,
    data: {
        headerGroups: Map<string, DTableHeaderGroupInfo>;
    }
};

const headerGroupPlugin: DTablePlugin<DTableHeaderGroupTypes> = {
    name: 'header-group',
    defaultOptions: {
        headerGroup: true,
    },
    data() {
        return {headerGroups: new Map()};
    },
    when: options => !!options.headerGroup,
    beforeLayout(options) {
        const {headerGroups} = this.data;
        headerGroups.clear();

        const {cols} = options;
        if (!cols?.length) {
            return;
        }

        const colsOrders: Record<string, number> = {};
        cols.forEach((col, index) => {
            const {headerGroup} = col;
            if (!headerGroup) {
                colsOrders[col.name] = index;
                return;
            }
            let groupInfo = headerGroups.get(headerGroup);
            if (groupInfo) {
                groupInfo.cols.push(col.name);
            } else {
                groupInfo = {cols: [col.name], index};
                headerGroups.set(headerGroup, groupInfo);
            }
            colsOrders[col.name] = groupInfo.index + (groupInfo.cols.length / cols.length);
        });

        cols.sort((col1, col2) => {
            return colsOrders[col1.name] - colsOrders[col2.name];
        });

        return {
            headerHeight: (!options.headerHeight && options.rowHeight) ? (options.rowHeight * 2) : undefined,
            cols,
        };
    },
    onRenderHeaderCell(result, {col}) {
        const {headerGroup} = col.setting;
        if (headerGroup) {
            const groupInfo = this.data.headerGroups.get(headerGroup) as DTableHeaderGroupInfo;
            const halfRow = this.layout.headerHeight / 2;
            if (col.name === groupInfo.cols[0]) {
                const colWidth = groupInfo.cols.reduce((width, colName) => {
                    return width + (this.getColInfo(colName)?.realWidth ?? 0);
                }, 0);
                const groupStyle = {
                    height: halfRow - 1,
                    width: colWidth - 1,
                };
                result.push(<div class="dtable-header-group" style={groupStyle}>{headerGroup}</div>);
            }
            result.push({
                className: 'dtable-header-as-group',
                style: {paddingTop: halfRow},
            });
        }
        return result;
    },
};

export const headerGroup = definePlugin(headerGroupPlugin);
