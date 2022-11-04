import {classes} from '@zui/browser-helpers/src/classes';
import {ActionMenu} from '@zui/action-menu/src/component/action-menu';
import {ActionBasicProps} from '@zui/action-menu/src/types';
import '@zui/css-icons/src/icons/caret.css';
import type {ToolbarOptions, ToolbarItemOptions} from '../types';
import '../style/index.css';
import {ComponentType, JSX} from 'preact';
import {ToolbarItem} from './toolbar-item';

export class Toolbar<T extends ActionBasicProps = ToolbarItemOptions> extends ActionMenu<T, ToolbarOptions<T>> {
    static ItemComponents = {
        item: ToolbarItem,
    };

    static ROOT_TAG = 'nav';

    static defaultProps = {
        itemProps: {
            item: {
                btnType: 'ghost',
            },
        },
    };

    beforeRender() {
        const options = super.beforeRender();
        options.className = classes(options.className, options.wrap ? 'flex-wrap' : '', typeof options.gap === 'number' ? `gap-${options.gap}` : '');
        if (typeof options.gap === 'string') {
            if (options.style) {
                options.style.gap = options.gap;
            } else {
                options.style = {gap: options.gap};
            }
        }
        return options;
    }

    renderTypedItem(ItemComponent: ComponentType, rootProps: JSX.HTMLAttributes, itemProps: T) {
        console.log('> renderTypedItem', {ItemComponent, rootProps, itemProps});
        const props = {
            ...rootProps,
            ...itemProps,
            className: classes(`toolbar-${itemProps.type}`, rootProps.className, itemProps.className),
            style: Object.assign({}, rootProps.style, itemProps.style),
        };
        return <ItemComponent {...props} />;
    }
}
