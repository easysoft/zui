import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';
import type {DTablePlugin} from '../../types/plugin';

export type DTableHeaderGroupInfo = {
    cols: string[];
    index: number;
};

export type DTableHeaderGroupTypes = {
    options: Partial<{
        headerGroup: boolean;
    }>,
    col: Partial<{
        group: string;
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
            const {group} = col;
            if (!group) {
                colsOrders[col.name] = index;
                return;
            }
            let groupInfo = headerGroups.get(group);
            if (groupInfo) {
                groupInfo.cols.push(col.name);
            } else {
                groupInfo = {cols: [col.name], index};
                headerGroups.set(group, groupInfo);
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
        const {group} = col.setting;
        if (group) {
            const groupInfo = this.data.headerGroups.get(group) as DTableHeaderGroupInfo;
            const halfRow = this.layout.headerHeight / 2;
            if (col.name === groupInfo.cols[0]) {
                const colWidth = groupInfo.cols.reduce((width, colName) => {
                    return width + (this.getColInfo(colName)?.realWidth ?? 0);
                }, 0);
                const groupStyle = {
                    height: halfRow - 1,
                    width: colWidth - 1,
                };
                result.push(<div class="dtable-header-group" style={groupStyle}>{group}</div>);
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
