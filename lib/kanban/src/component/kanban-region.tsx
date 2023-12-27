import {createRef, type RefObject, type ComponentChildren, type RenderableProps} from 'preact';
import {$, ClassNameLike, HElement, mergeProps} from '@zui/core';
import {Listitem} from '@zui/list/src/component';
import {Kanban} from './kanban';
import {mergeData, mergeList, sortByOrder} from '../helpers/kanban-helpers';
import type {KanbanData, KanbanDataset, KanbanProps, KanbanRegionProps, KanbanRegionState} from '../types';

export class KanbanRegion extends HElement<KanbanRegionProps, KanbanRegionState> {
    protected _kanbanRefs = new Map<string, RefObject<Kanban>>();

    protected _needUpdateData = new Map<string, Partial<KanbanData>>();

    constructor(props: KanbanRegionProps) {
        super(props);
        this.state = {
            ...this.state,
            collapsed: props.collapsed,
        };
    }

    componentDidUpdate(): void {
        if (this.state.collapsed) {
            return;
        }
        const needUpdateData = this._needUpdateData;
        [...needUpdateData.keys()].forEach(key => {
            const kanban = this.getKanban(key);
            if (kanban) {
                kanban.update(needUpdateData.get(key) as Partial<KanbanDataset>);
                needUpdateData.delete(key);
            }
        });
    }

    getKanban(key: unknown) {
        return this._kanbanRefs.get(String(key))?.current;
    }

    toggle(expanded?: boolean) {
        this.setState(prevState => ({collapsed: expanded === undefined ? !prevState.collapsed : !expanded}));
    }

    update(state: Partial<KanbanRegionState>) {
        const {items} = state;
        if (items) {
            state = {...state};
            state.items = items.map((item, index) => {
                const key = String(item.key || index);
                if ((item as {deleted?: boolean}).deleted) {
                    return {key, deleted: true} as unknown as KanbanProps;
                }
                if (item.data && typeof item.data === 'object' && this.getKanban(key)) {
                    this._needUpdateKanban(key, item.data as Partial<KanbanDataset>);
                    item = {...item};
                    delete (item as Partial<KanbanProps>).data;
                }

                return item;
            });
        }
        return new Promise(resolve => {
            this.setState(state.items ? (prevState) => {
                return {...state, items: mergeList(prevState.items, state.items as KanbanProps[])};
            } : state, resolve as () => void);
        });
    }

    _needUpdateKanban(key: string, data: Partial<KanbanDataset>) {
        const needUpdateData = this._needUpdateData;
        const oldData = needUpdateData.get(key);
        const {kanbanItemKey = 'key'} = this.props;
        needUpdateData.set(key, mergeData(oldData || {}, data, kanbanItemKey));
    }

    _handleClickHeading = (event: MouseEvent) => {
        if ($(event.target as HTMLElement).closest('a,.btn,button').not('.kanban-region-toggle').length) {
            return;
        }
        this.setState(prevState => ({collapsed: !prevState.collapsed}));
    };

    _buildItems(props: RenderableProps<KanbanRegionProps>): ComponentChildren[] {
        const {items = [], kanbanProps: kanbanPropsSetting, kanbanItemKey = 'key'} = props;
        let {items: stateItems} = this.state;
        if (stateItems) {
            stateItems = mergeList(items, stateItems, kanbanItemKey).filter(x => !(x as {deleted?: boolean}).deleted);
            stateItems.sort(sortByOrder as ((a: KanbanProps, b: KanbanProps) => number));
        } else {
            stateItems = items;
        }
        const kanbanRefs = this._kanbanRefs;
        const refKeys = new Set<string>(kanbanRefs.keys());
        const children = stateItems.map((item, index) => {
            if (item.deleted) {
                return null;
            }
            const kanbanProps = mergeProps(
                {className: 'kanban-region-item', key: index},
                typeof kanbanPropsSetting === 'function' ? kanbanPropsSetting.call(this, item, index) : kanbanPropsSetting,
                item,
            );
            const key = String(kanbanProps.key);
            let ref = kanbanRefs.get(key);
            if (!ref) {
                ref = createRef<Kanban>();
                kanbanRefs.set(key, ref);
            }
            kanbanProps.ref = ref;
            refKeys.delete(key);
            return <Kanban z-key={key} {...kanbanProps} />;
        });
        refKeys.forEach(key => {
            kanbanRefs.delete(key);
        });
        return children;
    }

    protected _getClassName(props: RenderableProps<KanbanRegionProps>): ClassNameLike {
        return ['kanban-region', props.className, this.state.collapsed ? 'is-collapsed' : 'is-expanded', props.heading ? 'has-heading' : ''];
    }

    protected _getChildren(props: RenderableProps<KanbanRegionProps>): ComponentChildren {
        const {heading, toggleFromHeading} = props;
        const {collapsed, heading: headingState} = this.state;
        const headingProps = mergeProps({className: 'kanban-heading', onClick: toggleFromHeading ? this._handleClickHeading : undefined}, typeof heading === 'function' ? heading.call(this) : heading, headingState);
        return [
            heading && <Listitem key="heading" {...headingProps} />,
            collapsed ? null : this._buildItems(props),
        ];
    }
}
