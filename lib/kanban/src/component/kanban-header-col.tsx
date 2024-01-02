import {CustomContent, HElement, Icon, classes, mergeProps, toCssSize} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {KanbanColProps} from '../types';

export class KanbanHeaderCol extends HElement<KanbanColProps> {
    protected _getClassName(props: RenderableProps<KanbanColProps>): ClassNameLike {
        return ['kanban-header-col', props.className, props.subCols ? 'has-subs' : '', props.parentName !== undefined ? 'is-sub' : ''];
    }

    protected _getProps(props: RenderableProps<KanbanColProps>): Record<string, unknown> {
        const {
            width,
            color,
            name,
            gapLeft,
            gapRight,
        } = props;
        return mergeProps(super._getProps(props), {
            style: {
                '--kanban-col-color': color,
                '--kanban-col-width': toCssSize(width),
                '--kanban-col-gap-left': toCssSize(gapLeft),
                '--kanban-col-gap-right': toCssSize(gapRight),
            },
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
        } = props;

        return [
            <div key="wrapper" className={`kanban-header-col-wrapper is-align-${titleAlign}`}>
                <div key="title" className="kanban-header-title">
                    {icon ? <Icon key="icon" className="as-leading-icon" icon={icon} /> : null}
                    {prefix ? <span key="prefix" className={classes('as-prefix', prefixClass)}><CustomContent content={prefix} /></span> : null}
                    {title ? <span key="title" className={classes('as-title', titleClass)}><CustomContent content={title} /></span> : null}
                    {subtitle ? <span key="subtitle" className={classes('as-subtitle', subtitleClass)}><CustomContent content={subtitle} /></span> : null}
                    {trailingIcon ? <Icon key="trailingIcon" className="as-trailing-icon" icon={trailingIcon} /> : null}
                </div>
                {Toolbar.render(actions, [props], {key: 'actions', className: 'kanban-header-col-actions', size: 'sm'}, this)}
            </div>,
            subCols ? (
                <div key="subs" className="kanban-header-sub-cols">
                    {subCols.map((col, index) => <KanbanHeaderCol key={col.name} index={index} {...col} />)}
                </div>
            ) : null,
        ];
    }
}
