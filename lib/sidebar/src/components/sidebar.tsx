import {createRef} from 'preact';
import {ReactComponent, classes} from '@zui/core';
import {Sidebar as SidebarVanilla} from '../vanilla/sidebar';
import type {ComponentChildren, JSX, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {SidebarOptions} from '../types/sidebar-options';

export type SidebarProps = SidebarOptions & {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    contentClass?: ClassNameLike;
    contentStyle?: JSX.CSSProperties;
    children?: ComponentChildren;
};

export class Sidebar extends ReactComponent<SidebarProps> {
    protected _sidebar?: SidebarVanilla;

    protected _element = createRef<HTMLDivElement>();

    get sidebar() {
        return this._sidebar;
    }

    componentDidMount(): void {
        const {current} = this._element;
        if (current) {
            const {className, style, children, contentClass, contentStyle, ...sidebarOptions} = this.props;
            this._sidebar = new SidebarVanilla(current, sidebarOptions);
        }
    }

    componentWillUnmount(): void {
        this._sidebar?.destroy();
    }

    render(props: RenderableProps<SidebarProps>) {
        const {className = 'w-40', side = 'left', style, children, contentClass, contentStyle} = props;
        return (
            <div
                ref={this._element}
                className={classes(`sidebar sidebar-${side}`, className)}
                style={style}
            >
                <div className={classes('sidebar-content', contentClass)} style={contentStyle}>{children}</div>
            </div>
        );
    }
}
