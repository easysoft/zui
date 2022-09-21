import {h as _h} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';

import type {ComponentChildren, JSX} from 'preact';

export type CellProps = {
    col: ColInfo;
    rowID: RowID;
} & Partial<{
    rowData: RowData;
    height: number;
    className: ClassNameLike;
    style: JSX.CSSProperties;
    outerClass: ClassNameLike;
    outerStyle: JSX.CSSProperties;
    children: ComponentChildren;
    onRenderCell: CellRenderCallback;
}>;

export function Cell({col, className, height, rowID, rowData, onRenderCell, style: styleFromParent, outerStyle: outerStyleFromParent, children: childrenFromParent, ...others}: CellProps) {
    const outerStyle = {
        left: col.left,
        width: col.realWidth,
        height,
        ...outerStyleFromParent,
    };
    const {align, border} = col.setting;
    const contentStyle = {
        justifyContent: align ? (align === 'left' ? 'start' : (align === 'right' ? 'end' : align)) : undefined,
        ...col.setting.cellStyle,
        ...styleFromParent,
    };
    const outerClassName: ClassNameLike[] = ['dtable-cell', className, col.setting.className, {
        'has-border-left': border === true || border === 'left',
        'has-border-right': border === true || border === 'right',
    }];
    const contentClassName: ClassNameLike[] = ['dtable-cell-content'];

    let result: CustomRenderResult = [
        childrenFromParent ?? rowData?.[col.name] as ComponentChildren,
    ];
    if (onRenderCell) {
        result = onRenderCell(result, {rowID, col, rowData}, _h);
    }

    const outerChildren: ComponentChildren[] = [];
    const contentChildren: ComponentChildren[] = [];
    result?.forEach(item => {
        if (typeof item === 'object' && item && ('html' in item || 'className' in item || 'style' in item)) {
            const children = item.outer ? outerChildren : contentChildren;
            if (item.html) {
                children.push(<div className={classes('dtable-cell-html', item.className)} style={item.style} dangerouslySetInnerHTML={{__html: item.html}}></div>);
            } else {
                if (item.style) {
                    Object.assign(item.outer ? outerStyle : contentStyle, item.style);
                }
                if (item.className) {
                    (item.outer ? outerClassName : contentClassName).push(item.className);
                }
                if (item.children) {
                    children.push(item.children);
                }
            }
        } else {
            contentChildren.push(item);
        }
    });

    return (
        <div
            className={classes(outerClassName)}
            style={outerStyle}
            data-col={col.name}
            {...others}
        >
            {
                contentChildren.length > 0 && (<div className={classes(contentClassName)} style={contentStyle}>
                    {contentChildren}
                </div>)
            }
            {outerChildren}
        </div>
    );
}
