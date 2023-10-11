import {CustomContent, HElement, classes, mergeProps} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {KanbanColOptions, KanbanLaneName, KanbanLaneProps} from '../types';
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
            name,
        } = props;
        return mergeProps(super._getProps(props), {
            style: {
                '--kanban-lane-color': color,
                height,
                minHeight,
                maxHeight,
            },
            'z-lane': name,
        });
    }

    protected _renderCol(laneName: KanbanLaneName, col: KanbanColOptions, itemRender: KanbanLaneProps['itemRender'], items: KanbanLaneProps['items']) {
        return <KanbanLaneCol key={col.name} itemRender={itemRender} lane={laneName} items={items[col.name]} {...col} />;
    }

    protected _getChildren(props: RenderableProps<KanbanLaneProps>): ComponentChildren {
        const {
            name,
            title,
            titleClass,
            actions,
            cols,
            items = {},
            itemRender,
        } = props;

        return [
            <div key="name" className="kanban-lane-name">
                <div key="title" className={classes('kanban-lane-title', titleClass)}><CustomContent content={title} /></div>
                {Toolbar.render(actions, [props], {key: 'actions', className: 'kanban-lane-actions', size: 'sm'}, this)}
            </div>,
            <div key="cols" className="kanban-lane-cols">
                {cols.reduce<ComponentChild[]>((list, col) => {
                    if (col.subCols) {
                        col.subCols.forEach(subCol => {
                            list.push(this._renderCol(name, subCol, itemRender, items));
                        });
                    } else {
                        list.push(this._renderCol(name, col, itemRender, items));
                    }
                    return list;
                }, [])}
            </div>,
        ];
    }
}
