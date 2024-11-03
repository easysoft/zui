import {definePlugin} from '../../helpers/shared-plugins';
import {contextmenu} from '../contextmenu';

import type {DTableContextMenuTypes} from '../contextmenu';
import type {ColInfo, ColName} from '../../types/col';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {DTablePointerInfo, ColBorderType} from '../../types';
import {JSX} from 'preact/jsx-runtime';

export interface DTableCustomColTypes {
    options: {
        customCol?: boolean;
        canSetColVisibility?: (this: DTableCustomCol, colName: ColName, visible: boolean) => boolean;
        onSetColBorder?: (this: DTableCustomCol, colName: ColName, border: ColBorderType, colBorders: Record<ColName, ColBorderType>) => void;
        onSetColVisibility?: (this: DTableCustomCol, colName: ColName, visible: boolean) => void;
    },
    col: {
        required?: boolean;
    },
    state: {
        colBorders: Record<ColName, ColBorderType>;
        colVisibility: Record<ColName, boolean>;
    },
    methods: {
        getColBorder: (this: DTableCustomCol, colName: ColName, checkNeighbor?: boolean) => ColBorderType;
        setColBorder: (this: DTableCustomCol, colName: ColName, border: ColBorderType) => void;
        setColVisibility: (this: DTableCustomCol, colName: ColName, visible: boolean) => void;
    }
}

export type DTableCustomCol = DTableWithPlugin<DTableCustomColTypes, [DTableContextMenuTypes]>;

function getNeighborColBorder(table: DTableCustomCol, col?: ColInfo | ColName): {prev?: ColBorderType, next?: ColBorderType, prevName?: ColName, nextName?: ColName} {
    if (typeof col === 'string') {
        col = table.getColInfo.call(table, col);
    }
    if (!col) {
        return {};
    }
    const {colBorders} = table.state;
    const {side, sideIndex} = col;
    const sideCols = table.layout.cols[side].list;
    const prevCol = sideIndex > 0 ? sideCols[sideIndex - 1] : null;
    const nextCol = sideCols[sideIndex + 1];
    return {
        prevName: prevCol?.name,
        nextName: nextCol?.name,
        prev: prevCol ? (colBorders[prevCol.name] ?? prevCol.setting.border) : undefined,
        next: nextCol ? (colBorders[nextCol.name] ?? nextCol.setting.border) : undefined,
    };
}

function hasBorder(border: ColBorderType | undefined, side: 'left' | 'right') {
    return border === side || border === true;
}

const customColPlugin: DTablePlugin<DTableCustomColTypes, [DTableContextMenuTypes]> = {
    name: 'custom-col',
    when: options => !!options.customCol,
    plugins: [contextmenu],
    resetState: true,
    options(options) {
        if (options.customCol && !options.contextmenu) {
            options.contextmenu = {
                header: (_event: MouseEvent, info: DTablePointerInfo) => {
                    const border = this.getColBorder(info.colName);
                    const getIcon = (type: ColBorderType) => {
                        const style: JSX.CSSProperties = {width: '12px', margin: '0 2px', height: '12px', border: '1px dotted var(--color-border-strong)'};
                        const solidBorder = '2px solid var(--color-border-strong)';
                        if (type === 'left') {
                            style.borderLeft = solidBorder;
                        } else if (type === 'right') {
                            style.borderRight = solidBorder;
                        } else if (type === true) {
                            style.borderLeft = solidBorder;
                            style.borderRight = solidBorder;
                        }
                        return <span style={style} />;
                    };
                    const disableHideCol = (this.getColInfo(info.colName)?.setting.required as boolean) || !this.options.canSetColVisibility?.call(this, info.colName, false);
                    return [
                        {
                            icon: getIcon(border),
                            text: this.i18n('setDivider'),
                            items: [
                                {text: this.i18n('leftDivider'), icon: getIcon('left'), selected: border === 'left', onClick: () => (this as DTableCustomCol).setColBorder(info.colName, 'left')},
                                {text: this.i18n('rightDivider'), icon: getIcon('right'), selected: border === 'right', onClick: () => (this as DTableCustomCol).setColBorder(info.colName, 'right')},
                                {text: this.i18n('allDivider'), icon: getIcon(true), selected: border === true, onClick: () => (this as DTableCustomCol).setColBorder(info.colName, true)},
                                {text: this.i18n('noDivider'), icon: getIcon(false), selected: !border, onClick: () => (this as DTableCustomCol).setColBorder(info.colName, false)},
                            ],
                        },
                        {
                            text: this.i18n('hideCol'),
                            icon: 'eye-off',
                            disabled: disableHideCol,
                            onClick: disableHideCol ? undefined : (() => this.setColVisibility(info.colName, false)),
                        },
                    ];
                },
            };
        }
        return options;
    },
    state() {
        return {colBorders: {}, colVisibility: {}};
    },
    methods: {
        getColBorder(colName, checkNeighbor = true) {
            const col = this.getColInfo(colName);
            if (!col) {
                return false;
            }
            const {colBorders} = this.state;
            const border = colBorders[colName] ?? col.setting.border;
            if (border === true || !checkNeighbor) {
                return border;
            }
            const {prev, next} = getNeighborColBorder(this, col);
            const hasLeftBorder = border === 'left' || hasBorder(prev, 'right');
            const hasRightBorder = border === 'right' || hasBorder(next, 'left');

            if (hasLeftBorder && hasRightBorder) {
                return true;
            }
            return hasLeftBorder ? 'left' : (hasRightBorder ? 'right' : false);
        },
        setColBorder(colName, border) {
            const oldBorder = this.getColBorder(colName, false);
            if (oldBorder === border) {
                return;
            }
            const {onSetColBorder} = this.options;
            const {prev, next, prevName, nextName} = getNeighborColBorder(this, colName);
            this.update({dirtyType: 'layout', state: (prevState) => {
                const colBorders = {
                    ...(prevState as typeof this.state).colBorders,
                    [colName]: border,
                };
                if (!hasBorder(border, 'left') && hasBorder(prev, 'right')) {
                    colBorders[prevName!] = false;
                }
                if (!hasBorder(border, 'right') && hasBorder(next, 'left')) {
                    colBorders[nextName!] = false;
                }
                return {
                    colBorders,
                };
            }}, onSetColBorder ? (() => {
                onSetColBorder!.call(this, colName, border, this.state.colBorders);
            }) : undefined);
        },
        setColVisibility(colName, visible) {
            const {onSetColVisibility} = this.options;
            this.update({dirtyType: 'options', state: (prevState) => ({colVisibility: {...(prevState as typeof this.state).colVisibility, [colName]: visible}})}, onSetColVisibility ? (() => {
                onSetColVisibility!.call(this, colName, visible);
            }) : undefined);
        },
    },
    onAddCol(col) {
        const {colBorders} = this.state;
        if (colBorders[col.name] !== undefined) {
            col.border = colBorders[col.name];
        }
    },
    beforeLayout(options) {
        const {colVisibility} = this.state;
        if (Object.keys(colVisibility).length && options.cols) {
            options.cols = options.cols.map(col => {
                if (colVisibility[col.name] !== undefined) {
                    col = {
                        ...col,
                        hidden: !colVisibility[col.name],
                    };
                }
                return col;
            });
        }
    },
    i18n: {
        zh_cn: {
            setDivider: '设置分割线',
            leftDivider: '左侧',
            rightDivider: '右侧',
            allDivider: '两侧',
            noDivider: '无',
            hideCol: '隐藏此列',
        },
        zh_tw: {
            setDivider: '設置分割線',
            leftDivider: '左側',
            rightDivider: '右側',
            allDivider: '兩側',
            noDivider: '無',
            hideCol: '隱藏此列',
        },
        en: {
            setDivider: 'Set divider',
            leftDivider: 'Left Side',
            rightDivider: 'Right Side',
            allDivider: 'Both Sides',
            noDivider: 'No Divider',
            hideCol: 'Hide this column',
        },
    },
};

export const customCol = definePlugin(customColPlugin);
