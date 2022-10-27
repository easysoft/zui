import {Component, h as _h, createRef, isValidElement, JSX, Attributes} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import '@zui/css-icons/src/icons/caret.css';
import {ActionDivider as ActionDividerComponent} from './action-divider';
import {ActionItem as ActionItemComponent} from './action-item';
import {ActionHeading as ActionHeadingComponent} from './action-heading';
import {ActionSpace as ActionSpaceComponent} from './action-space';
import type {ActionMenuOptions} from '../types/action-menu-options';
import type {ActionMenuItem} from '../types/action-menu-item';
import type {CommonActionItem} from '../types/common-action-item';

const internalComponents = {
    divider: ActionDividerComponent,
    item: ActionItemComponent,
    heading: ActionHeadingComponent,
    space: ActionSpaceComponent,
};

export class ActionMenu<T extends ActionMenuItem = CommonActionItem, P extends ActionMenuOptions<T> = ActionMenuOptions<T>, S = {}> extends Component<P, S> {
    static NAME = 'action-menu';

    ref = createRef<HTMLMenuElement>();

    get $(): HTMLMenuElement | null {
        return this.ref.current;
    }

    get name() {
        return this.props.name ?? this.constructor.name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
    }

    componentDidMount() {
        this.props.afterRender?.call(this, {firstRender: true});
    }

    componentDidUpdate(): void {
        this.props.afterRender?.call(this, {firstRender: false});
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
    }

    handleItemClick(item: T, index: number, onClick: ((event: MouseEvent) => void) | undefined, event: MouseEvent) {
        if (onClick) {
            onClick.call(event.target, event);
        }
        const {onClickItem} = this.props;
        if (onClickItem) {
            onClickItem.call(this, {item, index, event});
        }
    }

    beforeRender(): Omit<P, 'items'> & {items: T[]} {
        const options = {...this.props};
        const customOptions = options.beforeRender?.call(this, options);
        if (customOptions) {
            Object.assign(options, customOptions);
        }
        if (typeof options.items === 'function') {
            options.items = options.items.call(this);
        }
        return options as Omit<P, 'items'> & {items: T[]};
    }

    onRenderItem(item: T, index: number) {
        const {type = 'item', component, key = index, rootAttrs, rootClass, rootStyle, ...itemProps} = item;
        const ItemComponent = ((typeof component === 'string' ? false : component) || internalComponents[type as keyof typeof internalComponents] || ActionItemComponent) as typeof ActionItemComponent;
        Object.assign(itemProps, {
            component: typeof component === 'string' ? component : undefined,
            type,
        });
        return <li className={classes(rootClass) || undefined} style={rootStyle} {...rootAttrs} key={key}><ItemComponent {...(itemProps as Attributes)} /></li>;
    }

    renderItem(options: Omit<P, 'items'> & {items: T[]}, item: T, index: number) {
        const {itemRender, itemDefaultProps, onClickItem} = options;
        const listItem: T = {key: index, ...item};
        const type = listItem.type ?? 'item';
        if (itemDefaultProps) {
            Object.assign(listItem, itemDefaultProps[type]);
        }
        if (onClickItem) {
            listItem.onClick = this.handleItemClick.bind(this, listItem, index, item.onClick as ((event: MouseEvent) => void)) as JSX.MouseEventHandler<HTMLAnchorElement>;
        }
        listItem.className = classes([`${this.name}-${type}`, listItem.className]);
        if (itemRender) {
            if (typeof itemRender === 'object') {
                const CustomRenderComponent = itemRender[type];
                if (CustomRenderComponent) {
                    return <CustomRenderComponent {...listItem} />;
                }
            } else if (typeof itemRender === 'function') {
                const result = itemRender.call(this, listItem, _h);
                if (isValidElement(result)) {
                    return result;
                }
                if (typeof result === 'object') {
                    Object.assign(listItem, result);
                }
            }
        }

        return this.onRenderItem(listItem, index);
    }

    render() {
        const options = this.beforeRender();
        const {
            name,
            attrs,
            style,
            itemDefaultProps,
            className,
            items,
            children,
            itemRender,
            onClickItem,
            beforeRender,
            afterRender,
            beforeDestroy,
            ...others
        } = options;

        return (
            <menu class={classes(this.name, className)} {...others} ref={this.ref}>
                {items && items.map(this.renderItem.bind(this, options))}
                {children}
            </menu>
        );
    }
}
