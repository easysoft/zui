import {CustomContent, HElement, Icon, classes, mergeProps, toCssSize} from '@zui/core';
import {Toolbar} from '@zui/toolbar/react';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {KanbanColProps} from '../types';
import {
    getColumnBackgroundStyle,
    getRowBackgroundStyle,
} from '../helpers/kanban-helpers';

export class KanbanHeaderCol extends HElement<KanbanColProps> {
    protected _getClassName(props: RenderableProps<KanbanColProps>): ClassNameLike {
        return ['kanban-header-col', props.className, props.subCols ? 'has-subs' : '', props.parentName !== undefined ? 'is-sub' : ''];
    }

    protected _getProps(props: RenderableProps<KanbanColProps>): Record<string, unknown> {
        const {
            width,
            color,
            backgroundColor,
            backgroundPattern,
            colBgColor,
            rowBgColor,
            rowColor,
            name,
            gapLeft,
            gapRight,
        } = props;
        const style: Record<string, string | null | undefined> = {
            '--kanban-col-color': color,
            '--kanban-col-width': toCssSize(width),
            '--kanban-col-gap-left': toCssSize(gapLeft),
            '--kanban-col-gap-right': toCssSize(gapRight),
        };
        if (backgroundPattern === 'horizontal') {
            Object.assign(style, getRowBackgroundStyle(rowBgColor, rowColor || 'var(--kanban-lane-color)'));
        } else if (backgroundPattern === 'vertical') {
            const colBgStyle = getColumnBackgroundStyle(backgroundColor, colBgColor);
            if (colBgStyle) {
                Object.assign(style, colBgStyle);
            }
        }
        return mergeProps(super._getProps(props), {
            style,
            'z-col': name,
        });
    }

    protected _getChildren(props: RenderableProps<KanbanColProps>): ComponentChildren {
        const {
            prefix,
            prefixClass,
            title,
            titleClass,
            titleAlign = 'center',
            subtitle,
            subtitleClass,
            icon,
            trailingIcon,
            actions,
            subCols,
            backgroundPattern,
            colBgColor,
            rowBgColor,
            rowColor,
        } = props;

        return [
            <div key="wrapper" className={`kanban-header-col-wrapper is-align-${titleAlign}`}>
                <div key="title" className="kanban-header-title">
                    {icon ? <Icon key="icon" className="as-leading-icon" icon={icon} /> : null}
                    {prefix ? <span key="prefix" className={classes('as-prefix', prefixClass)}><CustomContent content={prefix} /></span> : null}
                    {title ? <span key="title" className={classes('as-title', titleClass)} title={typeof title === 'string' ? title : undefined}><CustomContent content={title} /></span> : null}
                    {subtitle ? <span key="subtitle" className={classes('as-subtitle', subtitleClass)}><CustomContent content={subtitle} /></span> : null}
                    {trailingIcon ? <Icon key="trailingIcon" className="as-trailing-icon" icon={trailingIcon} /> : null}
                </div>
                {Toolbar.render(actions, [props], {key: 'actions', className: 'kanban-header-col-actions', size: 'sm'}, this)}
            </div>,
            subCols ? (
                <div key="subs" className="kanban-header-sub-cols">
                    {subCols.map((col, index) => (
                        <KanbanHeaderCol
                            key={col.name}
                            index={index}
                            {...col}
                            backgroundPattern={backgroundPattern}
                            colBgColor={colBgColor}
                            rowBgColor={rowBgColor}
                            rowColor={rowColor}
                        />
                    ))}
                </div>
            ) : null,
        ];
    }
}
