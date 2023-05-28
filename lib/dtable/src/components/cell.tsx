import {ComponentType, h as _h, isValidElement} from 'preact';
import {classes, ClassNameLike} from '@zui/core';
import type {ComponentChildren, JSX} from 'preact';
import type {CellRenderCallback} from '../types/cell';
import type {ColInfo} from '../types/col';
import type {CustomRenderResultList} from '../types/common';
import type {RowInfo} from '../types/row';

export type CellProps = {
    col: ColInfo;
    row: RowInfo;
} & Partial<{
    height: number;
    className: ClassNameLike;
    style: JSX.CSSProperties;
    outerClass: ClassNameLike;
    outerStyle: JSX.CSSProperties;
    children: ComponentChildren;
    onRenderCell: CellRenderCallback;
}>;

export function Cell({col, className, height, row, onRenderCell, style: styleFromParent, outerStyle: outerStyleFromParent, children: childrenFromParent, outerClass, ...others}: CellProps) {
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
    const outerClassName: ClassNameLike[] = ['dtable-cell', outerClass, className, col.setting.className, {
        'has-border-left': border === true || border === 'left',
        'has-border-right': border === true || border === 'right',
    }];
    const contentClassName: ClassNameLike[] = ['dtable-cell-content', col.setting.cellClass];

    const value = row.data?.[col.name];
    const defaultResult: CustomRenderResultList = [childrenFromParent ?? value ?? ''];
    const result: CustomRenderResultList = onRenderCell ? onRenderCell(defaultResult, {row, col, value}, _h) : defaultResult;

    const outerChildren: ComponentChildren[] = [];
    const contentChildren: ComponentChildren[] = [];
    const outerAttrs: JSX.HTMLAttributes<HTMLDivElement> = {};
    const contentAttrs: JSX.HTMLAttributes<HTMLDivElement> = {};

    let contentTagName = 'div';

    result?.forEach(item => {
        if (typeof item === 'object' && item && !isValidElement(item) && ('html' in item || 'className' in item || 'style' in item || 'attrs' in item || 'children' in item || 'tagName' in item)) {
            const children = item.outer ? outerChildren : contentChildren;
            if (item.html) {
                children.push(<div className={classes('dtable-cell-html', item.className)} style={item.style} dangerouslySetInnerHTML={{__html: item.html}} {...((item.attrs ?? {}) as unknown as JSX.HTMLAttributes<HTMLDivElement>)}></div>);
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
                if (item.attrs) {
                    Object.assign(item.outer ? outerAttrs : contentAttrs, item.attrs);
                }
            }
            if (item.tagName && !item.outer) {
                contentTagName = item.tagName as string;
            }
        } else {
            contentChildren.push(item);
        }
    });

    const ContentTag = contentTagName as unknown as ComponentType;

    return (
        <div
            className={classes(outerClassName)}
            style={outerStyle}
            data-col={col.name}
            data-type={col.type}
            {...others}
            {...outerAttrs}
        >
            {
                contentChildren.length > 0 && (<ContentTag className={classes(contentClassName)} style={contentStyle} {...contentAttrs}>
                    {contentChildren}
                </ContentTag>)
            }
            {outerChildren}
        </div>
    );
}
