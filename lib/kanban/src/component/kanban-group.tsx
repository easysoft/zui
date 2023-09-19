import {Component} from 'preact';
import {$, classes, mergeProps} from '@zui/core';
import {Listitem} from '@zui/list/src/component';
import {Kanban} from './kanban';

import type {RenderableProps} from 'preact';
import type {KanbanGroupProps, KanbanGroupState} from '../types';

export class KanbanGroup extends Component<KanbanGroupProps, KanbanGroupState> {
    constructor(props: KanbanGroupProps) {
        super(props);
        this.state = {
            collapsed: props.collapsed,
        };
    }

    _handleClickHeading = (event: MouseEvent) => {
        if ($(event.target as HTMLElement).closest('a,.btn,button').not('.kanban-group-toggle').length) {
            return;
        }
        this.setState(prevState => ({collapsed: !prevState.collapsed}));
    };

    render(props: RenderableProps<KanbanGroupProps>, state: Readonly<KanbanGroupState>) {
        const {heading, toggleFromHeading, ...others} = props;
        const {collapsed} = state;
        const headingProps = mergeProps({className: 'kanban-heading', onClick: toggleFromHeading ? this._handleClickHeading : undefined}, typeof heading === 'function' ? heading.call(this) : heading);
        return (
            <div className={classes('kanban-group', collapsed ? 'is-collapsed' : 'is-expanded', heading ? 'has-heading' : '')}>
                {heading && <Listitem key="heading" {...headingProps} />}
                {collapsed ? null : <Kanban key="kanban" {...others} />}
            </div>
        );
    }
}
