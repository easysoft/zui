import {CustomContent, HElement, Icon, classes, mergeProps} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {KanbanColProps} from '../types';

export class KanbanHeaderCol extends HElement<KanbanColProps> {
    protected _getClassName(props: RenderableProps<KanbanColProps>): ClassNameLike {
        return ['kanban-header-col', props.className];
    }

    protected _getProps(props: RenderableProps<KanbanColProps>): Record<string, unknown> {
        const {
            width,
            minWidth,
            maxWidth,
            color,
        } = props;
        return mergeProps(super._getProps(props), {
            style: {
                '--kanban-col-color': color,
                '--kanban-col-width': width,
                minWidth,
                maxWidth,
            },
        });
    }

    protected _getChildren(props: RenderableProps<KanbanColProps>): ComponentChildren {
        const {
            prefix,
            prefixClass,
            title,
            titleClass,
            subtitle,
            subtitleClass,
            icon,
            trailingIcon,
            actions,
            content,
            contentClass,
        } = props;

        return [
            <div key="title" className="kanban-header-title">
                {icon ? <Icon key="icon" className="as-leading-icon" icon={icon} /> : null}
                {prefix ? <span key="prefix" className={classes('as-prefix', prefixClass)}><CustomContent content={prefix} /></span> : null}
                {title ? <span key="title" className={classes('as-title', titleClass)}><CustomContent content={title} /></span> : null}
                {subtitle ? <span key="subtitle" className={classes('as-subtitle', subtitleClass)}><CustomContent content={subtitle} /></span> : null}
                {trailingIcon ? <Icon key="trailingIcon" className="as-trailing-icon" icon={trailingIcon} /> : null}
            </div>,
            content ? <div key="content" className={classes('kanban-header-col-content', contentClass)}><CustomContent content={content} /></div> : null,
            Toolbar.render(actions, [props], {key: 'actions', className: 'kanban-header-col-actions', size: 'sm'}, this),
        ];
    }
}
