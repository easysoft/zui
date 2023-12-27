import {KanbanLane} from './kanban-lane';

import type {KanbanBodyProps} from '../types';

export function KanbanBody(props: KanbanBodyProps) {
    const {lanes, cols, items = {}, itemRender, hideLaneName} = props;
    return (
        <div className="kanban-body">
            {
                lanes.map((lane, index) => <KanbanLane key={lane.name} index={index} cols={cols} items={items[lane.name]} hideName={hideLaneName} itemRender={itemRender} {...lane} />)
            }
        </div>
    );
}
