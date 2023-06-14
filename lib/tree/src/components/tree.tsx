import {ActionMenuNested} from '@zui/action-menu/src/component/action-menu-nested';
import type {ActionMenuItemOptions} from '@zui/action-menu/src/types';
import type {TreeOptions, TreeItemOptions} from '../types';
import {TreeItem} from './tree-item';

export class Tree<T extends ActionMenuItemOptions = TreeItemOptions> extends ActionMenuNested<T, TreeOptions<T>> {
    static ItemComponents = {
        item: TreeItem,
    };

    static NAME = 'tree';

    get nestedTrigger() {
        return this.props.nestedTrigger || 'click';
    }

    get menuName() {
        return 'tree';
    }

    getItemRenderProps(props: Omit<TreeOptions<T>, 'items'> & {items: T[];}, item: T, index: number): T {
        const itemProps = super.getItemRenderProps(props, item, index) as TreeItemOptions;
        const {collapsedIcon, expandedIcon, normalIcon, actionsCreator} = props;
        if (itemProps.icon === undefined) {
            itemProps.icon = itemProps.items ? (itemProps.show ? expandedIcon : collapsedIcon) : normalIcon;
        }
        if (itemProps.actions === undefined && actionsCreator) {
            itemProps.actions = actionsCreator(item);
        }
        return itemProps as T;
    }

    renderToggleIcon() {
        return null;
    }
}
