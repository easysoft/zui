import {ClassNameLike, classes} from '@zui/browser-helpers/src/classes';
import {Component, ComponentChildren, JSX} from 'preact';

export interface AvatarProps {
    size?: number | 'sm' | 'md' | 'lg' | 'xl';
    rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none';
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    src?: string;
    text?: string;
    children?: ComponentChildren;
}

export class Avatar extends Component<AvatarProps> {
    render() {
        const {size, rounded, className, style, src, text, children, ...others} = this.props;
        const finalClassName = [className];
        const finalStyle = {...style};
        let content: ComponentChildren = null;
        if (src) {
            content = <img src={src} alt={text} />;
        } else {
            content = text;
        }
        if (typeof size === 'number') {
            finalStyle.width = size;
            finalStyle.height = size;
        } else if (typeof size === 'string') {
            finalClassName.push(`avatar-${size}`);
        }
        if (typeof rounded === 'string') {
            finalClassName.push(`rounded-${rounded}`);
        }
        return (
            <div
                className={classes(finalClassName)}
                style={finalStyle}
                {...others}
            >
                {content}
                {children}
            </div>
        );
    }
}
