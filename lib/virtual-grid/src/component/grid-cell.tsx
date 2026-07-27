import {Attributes, ComponentChildren, ComponentType} from 'preact';
import {CellProps} from '../types';

export function GridCell({
    type,
    key,
    style,
    bounding,
    offsetX = 0,
    offsetY = 0,
    component: Component,
    data,
    hidden,
    props,
    children,
    onRender,
    ...others
}: CellProps) {
    if (hidden) {
        return null;
    }
    let content: ComponentChildren | undefined;
    if (onRender) {
        content = onRender(type, data);
    } else if (Component) {
        const ComponentClass = Component as ComponentType;
        content = <ComponentClass {...(props as Attributes)} />;
    } else {
        content = data as ComponentChildren;
    }
    const {left, top, width, height} = bounding;
    return (
        <div style={{width, height, left: left + offsetX, top: top + offsetY, ...style}} {...others}>
            {content}
            {children}
        </div>
    );
}
