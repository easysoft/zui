import {Component, h as _h, isValidElement, JSX} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import {Button} from '@zui/button/src/component/button';
import {BtnProps} from '../types/btn-props';
import {BtnGroupOptions} from '../types/btn-group-options';
import '../style/index.css';

export class BtnGroup extends Component<BtnGroupOptions> {
    componentDidMount() {
        this.props.afterRender?.call(this, {firstRender: true});
    }

    componentDidUpdate(): void {
        this.props.afterRender?.call(this, {firstRender: false});
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
    }

    handleItemClick(item: BtnProps, index: number, onClick: ((event: MouseEvent) => void) | undefined, event: MouseEvent) {
        if (onClick) {
            onClick.call(event.target, event);
        }
        const {onClickItem} = this.props;
        if (onClickItem) {
            onClickItem.call(this, {item, index, event});
        }
    }

    beforeRender(): Omit<BtnGroupOptions, 'items'> & {items: BtnProps[]} {
        const options = {...this.props};
        const customOptions = options.beforeRender?.call(this, options);
        if (customOptions) {
            Object.assign(options, customOptions);
        }
        if (typeof options.items === 'function') {
            options.items = options.items.call(this);
        }
        return options as Omit<BtnGroupOptions, 'items'> & {items: BtnProps[]};
    }

    onRenderItem(item: BtnProps, index: number) {
        const {key = index, ...others} = item;
        return <Button key={key} {...others} />;
    }

    renderItem(options: Omit<BtnGroupOptions, 'items'> & {items: BtnProps[]}, item: BtnProps, index: number) {
        const {itemRender, btnProps: defaultBtnProps, onClickItem} = options;
        const btnProps: BtnProps = {key: index, ...item};
        if (defaultBtnProps) {
            Object.assign(btnProps, defaultBtnProps);
        }
        if (onClickItem) {
            btnProps.onClick = this.handleItemClick.bind(this, btnProps, index, item.onClick as ((event: MouseEvent) => void)) as JSX.MouseEventHandler<HTMLAnchorElement>;
        }
        if (itemRender) {
            const result = itemRender.call(this, btnProps, _h);
            if (isValidElement(result)) {
                return result;
            }
            if (typeof result === 'object') {
                Object.assign(btnProps, result);
            }
        }

        return this.onRenderItem(btnProps, index);
    }

    render() {
        const options = this.beforeRender();
        const {
            className,
            items,
            size,
            type,
            btnProps,
            children,
            itemRender,
            onClickItem,
            beforeRender,
            afterRender,
            beforeDestroy,
            ...others
        } = options;

        return (
            <div
                className={classes('btn-group', size ? `size-${size}` : '', className)}
                {...others}
            >
                {items && items.map(this.renderItem.bind(this, options))}
                {children}
            </div>
        );
    }
}
