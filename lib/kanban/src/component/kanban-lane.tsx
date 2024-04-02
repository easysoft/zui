import {CustomContent, HElement, classes, mergeProps, toCssSize} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {KanbanColOptions, KanbanColProps, KanbanLaneName, KanbanLaneProps} from '../types';
import {KanbanLaneCol} from './kanban-lane-col';

export class KanbanLane extends HElement<KanbanLaneProps> {
    protected _getClassName(props: RenderableProps<KanbanLaneProps>): ClassNameLike {
        const {className, index, maxHeight, height} = props;
        return ['kanban-lane', className, {'is-first': !index, 'is-auto-height': !maxHeight && (!height || height === 'auto')}];
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
                height: toCssSize(height),
                minHeight: toCssSize(minHeight),
                maxHeight: toCssSize(maxHeight),
            },
            'z-lane': name,
        });
    }

    protected _renderCol(laneName: KanbanLaneName, col: KanbanColOptions, itemRender: KanbanLaneProps['itemRender'], items: KanbanLaneProps['items']) {
        return <KanbanLaneCol key={col.name} itemRender={itemRender} lane={laneName} items={items[col.name]} {...(col as KanbanColProps)} />;
    }

    protected _getChildren(props: RenderableProps<KanbanLaneProps>): ComponentChildren {
        const {
            name,
            title,
            titleClass,
            actions,
            cols,
            items = {},
            hideName,
            itemRender,
        } = props;

        return [
            hideName ? null : (
                <div key="name" className="kanban-lane-name">
                    {Toolbar.render(actions, [props], {key: 'actions', className: 'kanban-lane-actions', size: 'sm'}, this)}
                    <div key="title" className={classes('kanban-lane-title', titleClass)} title={typeof title === 'string' ? title : undefined}><CustomContent content={title} /></div>
                </div>
            ),
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
