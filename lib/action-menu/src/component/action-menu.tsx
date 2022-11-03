import {Component, createRef, h as _h, isValidElement} from 'preact';
import type {JSX, Attributes, ComponentType} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import '@zui/css-icons/src/icons/caret.css';
import {ActionDivider} from './action-divider';
import {ActionItem} from './action-item';
import {ActionHeading} from './action-heading';
import {ActionSpace} from './action-space';
import {ActionCustom} from './action-custom';
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
    };

    ref = createRef<HTMLMenuElement>();

    get name() {
        return this.props.name ?? this.constructor.name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
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
        const options = {...this.props};
        if (typeof options.items === 'function') {
            options.items = options.items(this);
        }
        const customOptions = options.beforeRender?.({menu: this, options});
        if (customOptions) {
            Object.assign(options, customOptions);
        }
        return options as Omit<P, 'items'> & {items: T[]};
    }

    getItemRenderProps(options: Omit<P, 'items'> & {items: T[]}, item: T, index: number): T {
        const {itemProps, onClickItem} = options;
        const listItem: T = {key: index, ...item};

        if (itemProps) {
            Object.assign(listItem, itemProps[item.type || 'item']);
        }
        if (onClickItem || item.onClick) {
            listItem.onClick = this.handleItemClick.bind(this, listItem, index, item.onClick as ((event: MouseEvent) => void)) as JSX.MouseEventHandler<HTMLAnchorElement>;
        }
        listItem.className = classes(listItem.className);
        return listItem;
    }

    renderItem(options: Omit<P, 'items'> & {items: T[]}, item: T, index: number) {
        const listItem = this.getItemRenderProps(options, item, index);

        const {itemRender} = options;
        if (itemRender) {
            if (typeof itemRender === 'object') {
                const CustomRenderComponent = itemRender[item.type || 'item'];
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

        const {type = 'item', component, key = index, rootAttrs, rootClass, rootStyle, rootChildren, ...itemProps} = listItem;

        const ItemComponent = (!component || typeof component === 'string') ? (
            (this.constructor as typeof ActionMenu<T>).ItemComponents ? ((this.constructor as typeof ActionMenu<T>).ItemComponents[type] || ActionMenu.ItemComponents[type]) : ActionMenu.ItemComponents[type]
        ) : component;
        Object.assign(itemProps, {
            type,
            component: typeof component === 'string' ? component : undefined,
        });
        return (
            <li
                className={classes(`${this.name}-${type}`, rootClass)}
                style={rootStyle}
                key={key}
                {...rootAttrs}
            >
                <ItemComponent {...(itemProps as Attributes)} />
                {typeof rootChildren === 'function' ? rootChildren() : rootChildren}
            </li>
        );
    }

    render() {
        const options = this.beforeRender();
        const {
            name,
            style,
            itemProps,
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
