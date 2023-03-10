import {Component, createRef, h as _h, isValidElement} from 'preact';
import type {JSX, ComponentType} from 'preact';
import {classes, ClassNameLike} from '@zui/browser-helpers/src/classes';
import '@zui/css-icons/src/icons/caret.css';
import {ActionDivider} from './action-divider';
import {ActionItem} from './action-item';
import {ActionHeading} from './action-heading';
import {ActionSpace} from './action-space';
import {ActionCustom} from './action-custom';
import {ActionBasic} from './action-basic';
import type {ActionMenuOptions} from '../types/action-menu-options';
import type {ActionBasicProps} from '../types/action-basic-props';
import type {ActionMenuItemOptions} from '../types/action-menu-item-options';

export class ActionMenu<T extends ActionBasicProps = ActionMenuItemOptions, P extends ActionMenuOptions<T> = ActionMenuOptions<T>, S = {}> extends Component<P, S> {
    static ItemComponents: Record<string, ComponentType<any>> = {
        divider: ActionDivider,
        item: ActionItem,
        heading: ActionHeading,
        space: ActionSpace,
        custom: ActionCustom,
        basic: ActionBasic,
    };

    static ROOT_TAG = 'menu';

    static NAME = 'action-menu';

    ref = createRef<HTMLMenuElement>();

    get name() {
        return this.props.name ?? (this.constructor as typeof ActionMenu).NAME;
    }

    componentDidMount() {
        this.afterRender(true);
    }

    componentDidUpdate(): void {
        this.afterRender(false);
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.({menu: this});
    }

    afterRender(firstRender: boolean) {
        this.props.afterRender?.({menu: this, firstRender});
    }

    handleItemClick(item: T, index: number, onClick: ((event: MouseEvent) => void) | undefined, event: MouseEvent) {
        if (onClick) {
            onClick.call(event.target, event);
        }
        const {onClickItem} = this.props;
        if (onClickItem) {
            onClickItem({menu: this, item, index, event});
        }
    }

    beforeRender(): Omit<P, 'items'> & {items: T[]} {
        const props = {...this.props};
        if (typeof props.items === 'function') {
            props.items = props.items(this);
        }
        const customOptions = props.beforeRender?.({menu: this, options: props});
        if (customOptions) {
            Object.assign(props, customOptions);
        }
        return props as Omit<P, 'items'> & {items: T[]};
    }

    getItemRenderProps(props: Omit<P, 'items'> & {items: T[]}, item: T, index: number): T {
        const {commonItemProps, onClickItem} = props;
        const itemProps: T = {key: index, ...item};

        if (commonItemProps) {
            Object.assign(itemProps, commonItemProps[item.type || 'item']);
        }
        if (onClickItem || item.onClick) {
            itemProps.onClick = this.handleItemClick.bind(this, itemProps, index, item.onClick as ((event: MouseEvent) => void)) as JSX.MouseEventHandler<HTMLAnchorElement>;
        }
        itemProps.className = classes(itemProps.className);
        return itemProps;
    }

    renderItem(props: Omit<P, 'items'> & {items: T[]}, item: T, index: number) {
        const itemAllProps = this.getItemRenderProps(props, item, index);

        const {itemRender} = props;
        if (itemRender) {
            if (typeof itemRender === 'object') {
                const CustomRenderComponent = itemRender[item.type || 'item'];
                if (CustomRenderComponent) {
                    return <CustomRenderComponent {...itemAllProps} />;
                }
            } else if (typeof itemRender === 'function') {
                const result = itemRender.call(this, itemAllProps, _h);
                if (isValidElement(result)) {
                    return result;
                }
                if (typeof result === 'object') {
                    Object.assign(itemAllProps, result);
                }
            }
        }

        const {type = 'item', component, key = index, rootAttrs, rootClass, rootStyle, rootChildren, ...itemProps} = itemAllProps;

        const ItemComponent = (!component || typeof component === 'string')
            ? (this.constructor as typeof ActionMenu<T>).ItemComponents ? ((this.constructor as typeof ActionMenu<T>).ItemComponents[type] || ActionMenu.ItemComponents[type]) : ActionMenu.ItemComponents[type]
            : component;
        Object.assign(itemProps, {
            type,
            component: typeof component === 'string' ? component : undefined,
        });

        return this.renderTypedItem(ItemComponent, {
            className: classes(rootClass),
            children: rootChildren,
            style: rootStyle,
            key,
            ...rootAttrs,
        } as JSX.HTMLAttributes, {
            ...itemProps,
            type,
            component: typeof component === 'string' ? component : undefined,
        } as T);
    }

    renderTypedItem(ItemComponent: ComponentType, rootProps: JSX.HTMLAttributes, itemProps: T) {
        const {children, className, key, ...rootAttrs} = rootProps;
        const {activeClass = '', activeKey, activeIcon} = this.props;
        const iconView = !!activeIcon && (activeKey === key)
            ? <i className={`icon icon-${activeIcon} -absolute -right-3 -top-1`} />
            : null;

        const isActive = activeKey === key;

        return (
            <li
                className={classes(`${this.name}-${itemProps.type}`, className as ClassNameLike, {[activeClass]: isActive, '-relative': isActive})}
                key={key}
                {...(rootAttrs as JSX.HTMLAttributes<HTMLLIElement>)}
            >
                <ItemComponent {...itemProps} />
                {iconView}
                {typeof children === 'function' ? children() : children}
            </li>
        );
    }

    render() {
        const props = this.beforeRender();
        const {
            name,
            style,
            commonItemProps: itemProps,
            className,
            items,
            children,
            itemRender,
            onClickItem,
            beforeRender,
            afterRender,
            beforeDestroy,
            activeClass,
            activeKey,
            ...others
        } = props;

        const RootTag = (this.constructor as typeof ActionMenu<T>).ROOT_TAG as unknown as ComponentType;

        return (
            <RootTag class={classes(this.name, className)} style={style} {...others} ref={this.ref}>
                {items && items.map(this.renderItem.bind(this, props))}
                {children}
            </RootTag>
        );
    }
}
