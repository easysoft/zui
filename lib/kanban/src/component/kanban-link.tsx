import {Component} from 'preact';
import {classes} from '@zui/core';
import {layoutLink} from '../helpers/link-helpers';
import '@zui/css-icons/src/icons/close.css';

import type {ComponentChild, RenderableProps} from 'preact';
import type {KanbanLinkProps, KanbanLinkState} from '../types';

export class KanbanLink extends Component<KanbanLinkProps, KanbanLinkState> {
    state: Readonly<KanbanLinkState> = {};

    protected _handleMouseHover = (event: MouseEvent) => {
        this.setState({hover: event.type === 'mouseenter'});
    };

    protected _onDelete = () => {
        this.props.onDelete?.call(this, this.props);
    };

    render(props: RenderableProps<KanbanLinkProps>, state: Readonly<KanbanLinkState>): ComponentChild {
        const {text, textSize, color, onDelete, weight = 1.5} = props;
        const {hover} = state;
        const {x, y, padding, width, height, svgProps, markers, svgPathProps, svgPathBackProps, fromPos} = layoutLink(props);
        return (
            <div className={classes('kanban-link', hover ? 'is-hover' : '')} style={{left: x, top: y, width, height, color, '--kanban-link-weight': weight}} onMouseEnter={onDelete ? this._handleMouseHover : undefined} onMouseLeave={onDelete ? this._handleMouseHover : undefined}>
                <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" version="1.1">
                    {markers.length ? (
                        <defs>
                            {
                                markers.map(({path, id, ...markerProps}) => (
                                    <marker key={id} {...markerProps} id={id}>
                                        <path {...path} />
                                    </marker>
                                ))
                            }
                        </defs>
                    ) : null}
                    <path {...svgPathBackProps} />
                    <path {...svgPathProps} />
                </svg>
                <div className="kanban-link-start-point" style={{left: fromPos.x - padding, top: fromPos.y - padding}}></div>
                {onDelete ? <div className="kanban-link-delete-btn"><button type="button" className="btn rounded-full size-sm square primary" onClick={this._onDelete}><i className="close" /></button></div> : null}
                {text ? <div className="kanban-link-text" style={{fontSize: `${textSize || 12}px`}}>{text}</div> : null}
            </div>
        );
    }
}
