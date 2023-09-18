import {KanbanLane} from './kanban-lane';

import type {KanbanBodyProps} from '../types';

export function KanbanBody(props: KanbanBodyProps) {
    const {lanes, cols, items = {}, itemRender} = props;
    return (
        <div className="kanban-body">
            {
                lanes.map((lane, index) => <KanbanLane key={lane.name} index={index} cols={cols} items={items[lane.name]} itemRender={itemRender} {...lane} />)
            }
        </div>
    );
}
