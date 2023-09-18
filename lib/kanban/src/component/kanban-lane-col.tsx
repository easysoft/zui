import {classes, CustomContent} from '@zui/core';
import {CardList} from '@zui/cards/src/component';

import type {JSX} from 'preact';
import type {KanbanLaneColProps} from '../types';

const kanbanItemProps = {
    className: 'kanban-item',
};

export function KanbanLaneCol(props: KanbanLaneColProps) {
    const {items} = props;
    const {
        width,
        minWidth,
        maxWidth,
        color,
        content,
        contentClass,
    } = props;
    const style: JSX.CSSProperties = {
        '--kanban-col-color': color,
        '--kanban-col-width': width as string,
        minWidth,
        maxWidth,
    };
    return (
        <div className="kanban-lane-col" style={style}>
            {content ? <div className={classes('kanban-col-content', contentClass)}><CustomContent content={content} /></div> : null}
            <CardList key="list" className="kanban-items scrollbar-thin scrollbar-hover" itemProps={kanbanItemProps} items={items} />
        </div>
    );
}
