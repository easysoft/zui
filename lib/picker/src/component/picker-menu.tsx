import {Component, createRef, h as _h, isValidElement} from 'preact';
import type {JSX, ComponentType} from 'preact';
import {classes, ClassNameLike} from '@zui/browser-helpers/src/classes';
import '@zui/css-icons/src/icons/caret.css';
import {PickerItem} from './picker-item';
import {PickerInput} from './picker-input';
import type {PickerMenuItemOptions} from '../types/picker-menu-item-options';
import type {PickerOptions} from '../types/picker-options';
import type {PickerBasicProps} from '../types/picker-basic-props';

export class PickerMenu<T extends PickerBasicProps = PickerMenuItemOptions, P extends PickerOptions<T> = PickerOptions<T>, S = {}> extends Component<P, S> {
    static ItemComponents: Record<string, ComponentType<any>> = {
        item: PickerItem,
        input: PickerInput,
    };

    static ROOT_TAG = 'menu';

    static NAME = 'picker-menu';

    ref = createRef<HTMLMenuElement>();

    get name() {
        return this.props?.name ?? (this.constructor as typeof PickerMenu).NAME;
    }

    constructor() {
        super();
        this.render();
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

    handleItemClick(onSelect: ((event: MouseEvent) => void) | undefined, event: MouseEvent) {
        if (onSelect) {
            onSelect.call(event.target, event);
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
        const {itemProps} = options;
        const listItem: T = {key: index, ...item};

        if (itemProps) {
            Object.assign(listItem, itemProps[item.type || 'item']);
        }
        if (item.onSelect) {
            listItem.onSelect = this.handleItemClick.bind(this, item.onSelect as ((event: MouseEvent) => void)) as JSX.MouseEventHandler<HTMLAnchorElement>;
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
            (this.constructor as typeof PickerMenu<T>).ItemComponents ? ((this.constructor as typeof PickerMenu<T>).ItemComponents[type] || PickerMenu.ItemComponents[type]) : PickerMenu.ItemComponents[type]
        ) : component;
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
        return (
            <li
                className={classes(`${this.name}-${itemProps.type}`, className as ClassNameLike)}
                key={key}
                {...(rootAttrs as JSX.HTMLAttributes<HTMLLIElement>)}
            >
                <ItemComponent {...itemProps} />
                {typeof children === 'function' ? children() : children}
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

        const RootTag = (this.constructor as typeof PickerMenu<T>).ROOT_TAG as unknown as ComponentType;

        return (
            <RootTag class={classes(this.name, className)} {...others} ref={this.ref}>
                {items && items.map(this.renderItem.bind(this, options))}
                {children}
            </RootTag>
        );
    }
}