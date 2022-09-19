import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';

type DTableHeaderGroupOptions = Partial<{
    headerGroup: boolean;
}>;

type DTableHeaderGroupState = {
    test: boolean;
};

type DTableHeaderGroupInfo = {
    cols: string[];
    index: number;
};

type DTableHeaderGroupColSetting = Partial<{
    group: string;
}>;

type DTableHeaderGroupProps = {
    headerGroups: Map<string, DTableHeaderGroupInfo>;
};

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
    onRenderHeaderCell(result, {col}): CustomRenderResult {
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
