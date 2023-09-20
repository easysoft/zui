import type {KanbanLinkPointType, KanbanLinkProps, KanbanLinkShape, KanbanLinkSide} from '../types';

export const SVG_PADDING = 12;
export const CURVE_FACTOR = 0.5;
export const LINK_DEFAULT_LENGTH = 200;

export type LinkLayout = {
    x: number;
    y: number;
    width: number;
    height: number;
    fromSide: KanbanLinkSide;
    toSide: KanbanLinkSide;
    fromPos: {x: number, y: number};
    toPos: {x: number, y: number};
    svgPathProps: Record<string, unknown>;
    svgPathBackProps: Record<string, unknown>;
    svgProps: Record<string, unknown>;
    markers: LinkMarker[];
    nodeStyle: Record<string, unknown>;
    padding: number;
};

export type ElementPos = {x: number, y: number};

export type ElementSize = {width: number, height: number};

export type ElementReact = ElementPos & ElementSize;

export type LinkMarker = {
    id: string,
    orient: string,
    markerUnits: string,
    refX: number,
    refY: number,
    markerWidth: number,
    markerHeight: number,
    path: {
        d: string,
        fill: string,
    },
};

export const oppositeSideMap: Record<KanbanLinkSide, KanbanLinkSide> = {
    left: 'right',
    right: 'left',
    top: 'bottom',
    bottom: 'top',
    '': '',
};

export function getRectAnchorPos(rect: ElementReact, side: KanbanLinkSide): ElementPos {
    if (side === 'top') {
        return {x: rect.x + (rect.width / 2), y: rect.y};
    }
    if (side === 'left') {
        return {x: rect.x, y: rect.y + (rect.height / 2)};
    }
    if (side === 'right') {
        return {x: rect.x + rect.width, y: rect.y + (rect.height / 2)};
    }
    return {x: rect.x + (rect.width / 2), y: rect.y + rect.height};
}

export function getDistanceAbs(from: ElementPos, to: ElementPos): number {
    return ((from.x - to.x) * (from.x - to.x)) + ((from.y - to.y) * (from.y - to.y));
}

export function getBestLinkSides(from: ElementReact, to: ElementReact, fromSide?: KanbanLinkSide, toSide?: KanbanLinkSide): {fromSide: KanbanLinkSide, toSide: KanbanLinkSide, fromPos: ElementPos, toPos: ElementPos} {
    const fromSides: KanbanLinkSide[] = fromSide ? [fromSide] : ['left', 'right', 'top', 'bottom'];
    const toSides: KanbanLinkSide[] = toSide ? [toSide] : ['left', 'right', 'top', 'bottom'];
    let minDistance = Number.MAX_SAFE_INTEGER;
    let fromPos: ElementPos = {x: 0, y: 0};
    let toPos: ElementPos = {x: 0, y: 0};
    fromSides.forEach((fromThisSide) => {
        toSides.forEach((toThisSide) => {
            const fromThisPos = getRectAnchorPos(from, fromThisSide);
            const toThisPos = getRectAnchorPos(to, toThisSide);
            const distance = getDistanceAbs(fromThisPos, toThisPos) * (oppositeSideMap[fromThisSide] === toThisSide ? 1 : 2);
            if (distance < minDistance) {
                minDistance = distance;
                fromSide = fromThisSide;
                toSide = toThisSide;
                fromPos = fromThisPos;
                toPos = toThisPos;
            }
        });
    });
    return {
        fromSide, toSide, fromPos, toPos,
    } as {fromSide: KanbanLinkSide, toSide: KanbanLinkSide, fromPos: ElementPos, toPos: ElementPos};
}

export function getCenterPos(from: ElementPos, to: ElementPos): ElementPos {
    return {x: (from.x + to.x) / 2, y: (from.y + to.y) / 2};
}

export function getRectOfTowPos(from: ElementPos, to: ElementPos): ElementReact {
    return {
        x: Math.min(from.x, to.x), y: Math.min(from.y, to.y), width: Math.abs(from.x - to.x), height: Math.abs(from.y - to.y),
    };
}

export function getPointMarker(type: KanbanLinkPointType, side: 'start' | 'end', id: string): LinkMarker {
    const marker = {
        id: `marker-${side}-${id}-${type}`,
        orient: 'auto',
        markerUnits: 'strokeWidth',
        refX: side === 'start' ? 0 : 6,
        refY: 3,
        markerWidth: 6,
        markerHeight: 6,
        path: {
            d: '',
            fill: 'currentColor',
        },
    };
    if (type === 'arrow') {
        if (side === 'start') {
            marker.path.d = 'M6,0 L6,6 L0,3 z';
        } else {
            marker.path.d = 'M0,0 L0,6 L6,3 z';
        }
    } else if (type === 'dot') {
        marker.path.d = 'M3,3 m-3,0 a 3,3 0 1,1 6,0 a 3,3 0 1,1 -6,0';
    } else if (type === 'square') {
        marker.path.d = 'M0,0 L0,6 L6,6 L6,0 z';
    } else if (type === 'diamond') {
        marker.path.d = 'M3,0 L6,3 L3,6 L0,3 z';
    }
    return marker;
}

export function getLinkPath(fromPos: ElementPos, toPos: ElementPos, fromSide: KanbanLinkSide, toSide: KanbanLinkSide, shape: KanbanLinkShape = 'curve', strokeWidth: number = 2): string {
    const {
        x, y, width, height,
    } = getRectOfTowPos(fromPos, toPos);
    const deltaX = SVG_PADDING - x;
    const deltaY = SVG_PADDING - y;
    if (shape === 'curve') {
        const ctrlWidth = width * 0.7;
        const ctrlHeight = height * 0.7;
        const startLength = strokeWidth * 2; // default is 8;
        const ctrlPos = {
            a1x: fromPos.x + (fromSide === 'left' ? -startLength : (fromSide === 'right' ? startLength : 0)),
            a1y: fromPos.y + (fromSide === 'top' ? -startLength : (fromSide === 'bottom' ? startLength : 0)),
            ax: fromPos.x + (fromSide === 'left' ? -ctrlWidth : (fromSide === 'right' ? ctrlWidth : 0)),
            ay: fromPos.y + (fromSide === 'top' ? -ctrlHeight : (fromSide === 'bottom' ? ctrlHeight : 0)),
            bx: toPos.x + (toSide === 'left' ? -(ctrlWidth - startLength) : (toSide === 'right' ? (ctrlWidth - startLength) : 0)),
            by: toPos.y + (toSide === 'top' ? -(ctrlHeight - startLength) : (toSide === 'bottom' ? (ctrlHeight - startLength) : 0)),
            b1x: toPos.x + (toSide === 'left' ? -startLength : (toSide === 'right' ? startLength : 0)),
            b1y: toPos.y + (toSide === 'top' ? -startLength : (toSide === 'bottom' ? startLength : 0)),
        };
        return `M ${fromPos.x + deltaX} ${fromPos.y + deltaY} L ${ctrlPos.a1x + deltaX} ${ctrlPos.a1y + deltaY} C ${ctrlPos.ax + deltaX} ${ctrlPos.ay + deltaY} ${ctrlPos.bx + deltaX} ${ctrlPos.by + deltaY} ${ctrlPos.b1x + deltaX} ${ctrlPos.b1y + deltaY} L ${toPos.x + deltaX} ${toPos.y + deltaY}`;
    }
    if (shape === 'fold') {
        const centerPos = getCenterPos(fromPos, toPos);
        const halfWidth = width / 2;
        const halfHeight = height / 2;
        const ctrlPos = {
            ax: fromPos.x + (fromSide === 'left' ? -halfWidth : (fromSide === 'right' ? halfWidth : 0)),
            ay: fromPos.y + (fromSide === 'top' ? -halfHeight : (fromSide === 'bottom' ? halfHeight : 0)),
            bx: toPos.x + (toSide === 'left' ? -halfWidth : (toSide === 'right' ? halfWidth : 0)),
            by: toPos.y + (toSide === 'top' ? -halfHeight : (toSide === 'bottom' ? halfHeight : 0)),
        };
        return `M ${fromPos.x + deltaX} ${fromPos.y + deltaY} L ${ctrlPos.ax + deltaX} ${ctrlPos.ay + deltaY} L ${centerPos.x + deltaX} ${centerPos.y + deltaY} L ${ctrlPos.bx + deltaX} ${ctrlPos.by + deltaY} L ${toPos.x + deltaX} ${toPos.y + deltaY}`;
    }
    return `M ${fromPos.x + deltaX} ${fromPos.y + deltaY} L ${toPos.x + deltaX} ${toPos.y + deltaY}`;
}

export function layoutLink(link: KanbanLinkProps): LinkLayout {
    const {fromRect: fromBounding, toRect: toBounding} = link;
    const id = `${link.from}-${link.to}`;
    const fromRect = {x: fromBounding.left, y: fromBounding.top, width: fromBounding.right - fromBounding.left, height: fromBounding.bottom - fromBounding.top};
    const toRect = {x: toBounding.left, y: toBounding.top, width: toBounding.right - toBounding.left, height: toBounding.bottom - toBounding.top};
    const {fromSide, toSide, fromPos, toPos} = getBestLinkSides(fromRect, toRect);

    const bounding = getRectOfTowPos(fromPos, toPos);
    const {x, y, width, height} = bounding;

    fromPos.x += SVG_PADDING - x;
    fromPos.y += SVG_PADDING - y;
    toPos.x += SVG_PADDING - x;
    toPos.y += SVG_PADDING - y;

    const {
        weight: strokeWidth = 2,
        fromPoint,
        toPoint = 'arrow',
    } = link;

    const nodeStyle = {
        left: `${0 - SVG_PADDING}px`,
        top: `${0 - SVG_PADDING}px`,
        width: `${width + (2 * SVG_PADDING)}px`,
        height: `${height + (2 * SVG_PADDING)}px`,
    };
    const svgPathProps: Record<string, unknown> = {
        'stroke-width': strokeWidth,
        fill: 'transparent',
        stroke: 'currentColor',
        'stroke-linejoin': 'round',
        'marker-start': fromPoint && fromPoint !== 'none' ? `url(#marker-start-${id}-${fromPoint})` : undefined,
        'marker-end': toPoint && toPoint !== 'none' ? `url(#marker-end-${id}-${toPoint})` : undefined,
        d: getLinkPath(fromPos, toPos, fromSide, toSide, link.shape, strokeWidth),
    };
    const svgPathBackProps: Record<string, unknown> = {
        'stroke-width': strokeWidth + 5,
        'stroke-linejoin': 'round',
        fill: 'transparent',
        stroke: 'currentColor',
        d: svgPathProps.d,
        class: 'opacity-0',
    };

    const svgProps: Record<string, unknown> = {
        width: width + (2 * SVG_PADDING),
        height: height + (2 * SVG_PADDING),
    };
    const markers: LinkMarker[] = [];

    if (link.lineStyle === 'dashed') {
        svgPathProps['stroke-dasharray'] = `${strokeWidth * 3} ${strokeWidth * 3}`;
    } else if (link.lineStyle === 'dotted') {
        svgPathProps['stroke-dasharray'] = `${strokeWidth} ${strokeWidth}`;
    }

    if (fromPoint && fromPoint !== 'none') {
        markers.push(getPointMarker(fromPoint, 'start', id));
    }
    if (toPoint && toPoint !== 'none') {
        markers.push(getPointMarker(toPoint, 'end', id));
    }

    return {
        x,
        y,
        width,
        height,
        fromSide,
        toSide,
        fromPos,
        toPos,
        nodeStyle,
        svgPathProps,
        svgPathBackProps,
        svgProps,
        markers,
        padding: SVG_PADDING,
    };
}
