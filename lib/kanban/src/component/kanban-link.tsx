
import {layoutLink} from '../helpers/link-helpers';

import type {KanbanLinkProps} from '../types';

export function KanbanLink(props: KanbanLinkProps) {
    const {text, textSize} = props;
    const {x, y, padding, width, height, svgProps, markers, svgPathProps, svgPathBackProps, fromPos} = layoutLink(props);
    return (
        <div className="kanban-link" style={{left: x, top: y, width, height}}>
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
                <path className="pointer-events-auto" {...svgPathBackProps} />
                <path {...svgPathProps} />
            </svg>
            <div className="kanban-link-start-point" style={{left: fromPos.x - padding, top: fromPos.y - padding}}></div>
            {text ? <div className="kanban-link-text" style={{fontSize: `${textSize || 12}px`}}>{text}</div> : null}
        </div>
    );
}
