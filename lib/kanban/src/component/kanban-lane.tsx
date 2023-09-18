import {CustomContent, HElement, classes, mergeProps} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {KanbanLaneProps} from '../types';
import {KanbanLaneCol} from './kanban-lane-col';

export class KanbanLane extends HElement<KanbanLaneProps> {
    protected _getClassName(props: RenderableProps<KanbanLaneProps>): ClassNameLike {
        return ['kanban-lane', props.className, props.index ? '' : 'is-first'];
    }

    protected _getProps(props: RenderableProps<KanbanLaneProps>): Record<string, unknown> {
        const {
            height,
            minHeight,
            maxHeight,
            color,
        } = props;
        return mergeProps(super._getProps(props), {
            style: {
                '--kanban-lane-color': color,
                height,
                minHeight,
                maxHeight,
            },
        });
    }

    protected _getChildren(props: RenderableProps<KanbanLaneProps>): ComponentChildren {
        const {
            title,
            titleClass,
            actions,
            cols,
            items,
        } = props;

        return [
            <div key="name" className="kanban-lane-name">
                <div key="title" className={classes('kanban-lane-title', titleClass)}><CustomContent content={title} /></div>
                {Toolbar.render(actions, [props], {key: 'actions', className: 'kanban-lane-actions', size: 'sm'}, this)}
            </div>,
            <div key="cols" className="kanban-lane-cols">
                {cols.map(col => <KanbanLaneCol key={col.name} items={items[col.name]} {...col} />)}
            </div>,
        ];
    }
}
