import {Component, createRef} from 'preact';
import {Sticky} from '@zui/core';
import {KanbanHeaderCol} from './kanban-header-col';

import type {RefObject} from 'preact';
import type {KanbanHeaderProps} from '../types';

export class KanbanHeader extends Component<KanbanHeaderProps> {
    protected declare _sticky: Sticky;

    protected _ref: RefObject<HTMLDivElement> = createRef();

    componentDidMount() {
        if (this._ref.current) {
            this._sticky = new Sticky(this._ref.current!, {scrollContainer: '.kanban-list'});
        }
    }

    componentWillUnmount(): void {
        this._sticky?.destroy();
    }

    render(props: KanbanHeaderProps) {
        return (
            <div className="kanban-header" ref={this._ref}>
                <div key="name" className="kanban-header-lane-name"></div>
                <div key="cols" className="kanban-header-cols">
                    {props.cols.map((col, index) => <KanbanHeaderCol key={col.name} index={index} {...col} />)}
                </div>
            </div>
        );
    }
}
