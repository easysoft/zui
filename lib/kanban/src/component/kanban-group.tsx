import {$, classes, mergeProps} from '@zui/core';
import {Listitem} from '@zui/list/src/component';
import {Kanban} from './kanban';

import type {RenderableProps} from 'preact';
import type {KanbanGroupProps, KanbanGroupState} from '../types';

export class KanbanGroup extends Kanban<KanbanGroupProps, KanbanGroupState> {
    constructor(props: KanbanGroupProps) {
        super(props);
        this.state = {
            ...this.state,
            collapsed: props.collapsed,
        };
    }

    _handleClickHeading = (event: MouseEvent) => {
        if ($(event.target as HTMLElement).closest('a,.btn,button').not('.kanban-group-toggle').length) {
            return;
        }
        this.setState(prevState => ({collapsed: !prevState.collapsed}));
    };

    render(props: RenderableProps<KanbanGroupProps>) {
        const {heading, toggleFromHeading} = props;
        const {collapsed} = this.state;
        const headingProps = mergeProps({className: 'kanban-heading', onClick: toggleFromHeading ? this._handleClickHeading : undefined}, typeof heading === 'function' ? heading.call(this) : heading);
        return (
            <div className={classes('kanban-group', collapsed ? 'is-collapsed' : 'is-expanded', heading ? 'has-heading' : '')}>
                {heading && <Listitem key="heading" {...headingProps} />}
                {collapsed ? null : super.render(props)}
            </div>
        );
    }
}
