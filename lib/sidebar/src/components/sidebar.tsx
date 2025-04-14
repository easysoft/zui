import {ComponentChildren, createRef, JSX, RenderableProps} from 'preact';
import {ClassNameLike, ReactComponent, classes} from '@zui/core';
import {Sidebar as SidebarVanilla} from '../vanilla/sidebar';
import {SidebarOptions} from '../types/sidebar-options';

export type SidebarProps = SidebarOptions & {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
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
            const {className, style, children, ...sidebarOptions} = this.props;
            this._sidebar = new SidebarVanilla(current, sidebarOptions);
        }
    }

    componentWillUnmount(): void {
        this._sidebar?.destroy();
    }

    render(props: RenderableProps<SidebarProps>) {
        const {className = 'w-40', side = 'left', style, children} = props;
        return (
            <div
                ref={this._element}
                className={classes(`sidebar side-bar-${side}`, className)}
                style={style}
            >
                <div className="sidebar-content">{children}</div>
            </div>
        );
    }
}
