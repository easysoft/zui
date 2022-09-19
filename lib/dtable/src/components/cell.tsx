import {ComponentChildren, h as _h} from 'preact';
import {JSX} from 'preact/jsx-runtime';
import {classes, ClassNameLike} from '@zui/browser-helpers/src/classes';
import {ColInfo} from '../types/col-info';
import {CellRenderCallback} from '../types/cell-render';
import {RowData, RowID} from '../types/row-data';
import {CustomRenderResult} from '../types/custom-render-result';

export interface CellProps {
    col: ColInfo,
    rowID: RowID,
    rowData?: RowData,
    className?: ClassNameLike,
    height?: number,
    style?: JSX.CSSProperties,
    cellStyle?: JSX.CSSProperties,
    children?: ComponentChildren,
    onRenderCell?: CellRenderCallback,
}

export function Cell({col, className, height, rowID, rowData, onRenderCell, style: styleFromParent, cellStyle: cellStyleFromParent, children: childrenFromParent, ...others}: CellProps) {
    const {cellStyle, align, className: settingClassName, border} = col.setting;
    const style = {
        left: col.left,
        width: col.realWidth,
        height,
        ...cellStyleFromParent,
        ...cellStyle,
    };
    const contentStyle = {
        justifyContent: align ? (align === 'left' ? 'start' : (align === 'right' ? 'end' : align)) : undefined,
        ...styleFromParent,
    };

    let result: CustomRenderResult = [
        childrenFromParent ?? rowData?.[col.name] as ComponentChildren,
    ];
    if (onRenderCell) {
        result = onRenderCell(result, {rowID, col, rowData}, _h);
    }
    const cellClassName: ClassNameLike[] = ['dtable-cell', className, settingClassName, {
        'has-border-left': border === true || border === 'left',
        'has-border-right': border === true || border === 'right',
    }];
    const contentClassName: ClassNameLike[] = ['dtable-cell-content'];
    const children: ComponentChildren[] = [];
    result?.forEach(item => {
        if (typeof item === 'object' && item && ('html' in item || 'className' in item || 'style' in item || 'cellClass' in item || 'cellStyle' in item)) {
            if (item.html) {
                children.push(<div className={classes('dtable-cell-html', item.className)} style={item.style} dangerouslySetInnerHTML={{__html: item.html}}></div>);
            } else {
                if (item.style) {
                    Object.assign(contentStyle, item.style);
                }
                if (item.className) {
                    contentClassName.push(item.className);
                }
            }
            if (item.cellStyle) {
                Object.assign(style, item.cellStyle);
            }
            if (item.cellClass) {
                cellClassName.push(item.cellClass);
            }
        } else {
            children.push(item);
        }
    });

    return (
        <div
            className={classes(cellClassName)}
            style={style}
            data-col={col.name}
            {...others}
        >
            <div className={classes(contentClassName)} style={contentStyle}>
                {children}
            </div>
        </div>
    );
}
