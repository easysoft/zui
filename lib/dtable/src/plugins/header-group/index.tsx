import {classes} from '@zui/browser-helpers/src/classes';
import {CustomRenderResult} from '../../types/custom-render-result';
import {DTablePlugin, DTableWithPlugin} from '../../types/plugin';
import {RowInfo} from '../../types/row-info';
import {RowProps} from '../../types/row-props';
import {definePlugin} from '../../helpers/shared-plugins';
import {RowData, RowID} from '../../types/row-data';
import {ColInfo} from '../../types/col-info';
import './style.css';

type HeaderGroupDTable = DTableWithPlugin<DTableHeaderGroupOptions, DTableHeaderGroupState> & DTableHeaderGroupProps;

export interface DTableHeaderGroupOptions {
    headerGroup?: boolean;
}

export interface DTableHeaderGroupState {
    test: boolean;
}

export interface DTableHeaderGroupInfo {
    cols: string[];
    index: number;
}

export interface DTableHeaderGroupColSetting {
    group?: string;
}

export interface DTableHeaderGroupProps {
    headerGroups: Map<string, DTableHeaderGroupInfo>;
}

export const headerGroup: DTablePlugin<DTableHeaderGroupOptions, DTableHeaderGroupState, DTableHeaderGroupColSetting, DTableHeaderGroupProps> = {
    name: 'header-group',
    defaultOptions: {
        headerGroup: true,
    },
    onCreate() {
        this.headerGroups = new Map();
    },
    when: options => !!options.headerGroup,
    beforeLayout(options) {
        const {headerGroups} = this;
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
            let groupInfo = this.headerGroups.get(group);
            if (groupInfo) {
                groupInfo.cols.push(col.name);
            } else {
                groupInfo = {cols: [col.name], index};
                this.headerGroups.set(group, groupInfo);
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
    onRenderHeaderCell(result, rowID, col): CustomRenderResult {
        const {group} = col.setting;
        if (group) {
            const groupInfo = this.headerGroups.get(group) as DTableHeaderGroupInfo;
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

export default definePlugin<DTableHeaderGroupOptions, DTableHeaderGroupState, DTableHeaderGroupColSetting, DTableHeaderGroupProps>(headerGroup);
