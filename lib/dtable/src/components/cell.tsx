import {ComponentChildren} from 'preact';
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
    children?: ComponentChildren,
    onRenderCell?: CellRenderCallback
}

export function Cell({col, className, height, rowID, rowData, onRenderCell, style: styleFromParent, children: childrenFromParent, ...others}: CellProps) {
    const {cellStyle, align, className: settingClassName} = col.setting;
    const style = {
        left: col.left,
        width: col.realWidth,
        height,
        ...styleFromParent,
        ...cellStyle,
    };
    if (align) {
        style.justifyContent = align === 'left' ? 'start' : (align === 'right' ? 'end' : align);
    }

    let result: CustomRenderResult = [
        childrenFromParent ?? rowData?.[col.name] as ComponentChildren,
    ];
    if (onRenderCell) {
        result = onRenderCell(result, rowID, col, rowData);
    }
    const cellClassName: ClassNameLike[] = [];
    const children: ComponentChildren[] = [];
    result?.forEach(item => {
        if (typeof item === 'object' && item && ('style' in item || 'className' in item || 'style' in item)) {
            if (item.html) {
                children.push(<div className='dtable-cell-html' dangerouslySetInnerHTML={{__html: item.html}}></div>);
            }
            if (item.style) {
                Object.assign(style, item.style);
            }
            if (item.className) {
                cellClassName.push(item.className);
            }
        } else {
            children.push(item);
        }
    });
    return (
        <div
            className={classes('dtable-cell', className, settingClassName, cellClassName)}
            style={style}
            data-col={col.name}
            {...others}
        >
            {children}
        </div>
    );
}
