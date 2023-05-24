import {classes, ClassNameLike} from '@zui/browser-helpers/src/classes';
import {ActionMenu} from '@zui/action-menu/src/component/action-menu';
import {ActionBasicProps} from '@zui/action-menu/src/types';
import '@zui/css-icons/src/icons/caret.css';
import type {ToolbarOptions, ToolbarItemOptions} from '../types';
import '../style/index.css';
import {ComponentType, JSX} from 'preact';
import {ToolbarItem} from './toolbar-item';
import {ToolbarDropdown} from './toolbar-dropdown';
import {ButtonProps} from '@zui/button/src/types';
import {ToolbarBtnGroup} from './toolbar-btn-group';

export class Toolbar<T extends ActionBasicProps = ToolbarItemOptions, P extends ToolbarOptions<T> = ToolbarOptions<T>> extends ActionMenu<T, P> {
    static ItemComponents = {
        item: ToolbarItem,
        dropdown: ToolbarDropdown,
        'btn-group': ToolbarBtnGroup,
    };

    static ROOT_TAG = 'nav';

    static NAME = 'toolbar';

    static defaultProps = {
        btnProps: {
            btnType: 'ghost',
        },
    };

    beforeRender() {
        const {gap, btnProps, wrap, ...options} = super.beforeRender();
        options.className = classes(options.className, wrap ? 'flex-wrap' : '', typeof gap === 'number' ? `gap-${gap}` : '');
        if (typeof gap === 'string') {
            if (options.style) {
                options.style.gap = gap;
            } else {
                options.style = {gap: gap};
            }
        }
        return options as Omit<P, 'items'> & {items: T[]};
    }

    isBtnItem(type?: string) {
        return type === 'item' || type === 'dropdown';
    }

    renderTypedItem(ItemComponent: ComponentType, rootProps: JSX.HTMLAttributes, itemProps: T) {
        const {type} = itemProps;
        const userBtnProps = this.props.btnProps;
        const btnProps = (this.isBtnItem(type) ? {btnType: 'ghost', ...userBtnProps} : {}) as ButtonProps;
        const props = {
            ...rootProps,
            ...btnProps,
            ...itemProps,
            className: classes(`${this.name}-${type}`, rootProps.className as ClassNameLike, btnProps.className, itemProps.className),
            style: Object.assign({}, rootProps.style, btnProps.style, itemProps.style),
        } as T;
        if (type === 'btn-group') {
            props.btnProps = userBtnProps;
        }
        return <ItemComponent {...props} />;
    }
}
