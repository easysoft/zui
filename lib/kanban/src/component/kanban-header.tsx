import {KanbanHeaderCol} from './kanban-header-col';

import type {KanbanHeaderProps} from '../types';

export function KanbanHeader(props: KanbanHeaderProps) {
    const {cols} = props;
    return (
        <div className="kanban-header">
            <div key="name" className="kanban-header-lane-name"></div>
            <div key="cols" className="kanban-header-cols">
                {cols.map((col, index) => <KanbanHeaderCol key={col.name} index={index} {...col} />)}
            </div>
        </div>
    );
}
