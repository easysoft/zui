import {$, HElement, createRef, mergeProps} from '@zui/core';
import {Moveable} from '@zui/dnd';
import {Kanban} from './kanban';
import {KanbanRegion} from './kanban-region';
import {KanbanLinks} from './kanban-links';

import type {ComponentChildren, RefObject, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {KanbanData, KanbanDataSetting, KanbanRegionProps, KanbanListProps, KanbanListState, KanbanProps, KanbanRegionState, KanbanDataset, KanbanLinkOptions} from '../types';
import {createLinkID} from '../helpers/link-helpers';
import {mergeList} from '../helpers/kanban-helpers';

const EVENT_NAMESPACE = '.kanban';

export class KanbanList extends HElement<KanbanListProps, KanbanListState> {
    static defaultProps: Partial<KanbanListProps> = {
        moveable: true,
        sticky: true,
        responsive: true,
        scrollbarHover: true,
        linkItemKey: 'id',
    };

    state: Readonly<KanbanListState> = {};

    protected declare _loadedSetting: KanbanDataSetting;

    protected declare _data: KanbanData;

    protected _moveable?: Moveable;

    protected _ref = createRef<HTMLElement>();

    protected _rob?: ResizeObserver;

    protected _layoutTimer?: number;

    protected _kanbanRefs = new Map<string, RefObject<Kanban | KanbanRegion>>();

    componentDidMount() {
        const element = this._ref.current;
        if (element) {
            const {moveable, responsive, showLinkOnSelected, showLinkOnHover} = this.props;
            if (moveable) {
                this._moveable = new Moveable(element, $.extend({selector: 'self', move: 'scroll', onMoveStart: (event: MouseEvent, target: HTMLElement) => {
                    /* Ignore click on scrollbar. */
                    const {bottom, right} = target.getBoundingClientRect();
                    if ((event.clientY < bottom && event.clientY > (bottom - 20)) || (event.clientX < right && event.clientX > (right - 20))) {
                        return false;
                    }

                    /* Ignore click on link, input or buttons. */
                    return !$(event.target as HTMLElement).closest('a,input,.btn,.state,.kanban-item,.not-moveable').length;
                }}, typeof moveable === 'object' ? moveable : null));
            }
            if (showLinkOnSelected) {
                $(element).on(`kanbanItemSelected${EVENT_NAMESPACE}`, (_event, info: {kanban: string, selected: string[]}) => {
                    this.setState(prevState => {
                        return {
                            selected: {
                                ...(prevState.selected),
                                [info.kanban]: info.selected,
                            },
                        };
                    });
                });
            }
            if (showLinkOnHover) {
                $(element).on(`kanbanItemHover${EVENT_NAMESPACE}`, (_event, {kanban, hover}: {kanban: string, hover: string}) => {
                    this.setState({hover: hover === undefined ? hover : `${kanban}_${hover}`});
                });
            }

            if (responsive) {
                const rob = new ResizeObserver(this._tryUpdateLayout.bind(this));
                const $element = typeof responsive !== 'boolean' ? $(responsive) : $(element).parent();
                $element.each((_index, ele) => {
                    rob.observe(ele);
                });
                this._rob = rob;
            }
        }
    }

    componentWillUnmount(): void {
        this._moveable?.destroy();
        this._rob?.disconnect();
        const element = this._ref.current;
        if (element) {
            $(element).off(EVENT_NAMESPACE);
        }
    }

    getKanban(key: unknown): Kanban | KanbanRegion | null {
        const keyStr = String(key);
        const refs = this._kanbanRefs;
        if (refs.has(keyStr)) {
            return refs.get(keyStr)!.current;
        }
        let kanban: Kanban | null | undefined = null;
        const refsList = Array.from(refs.values());
        for (const ref of refsList) {
            const current = ref.current!;
            if (current instanceof KanbanRegion) {
                kanban = current.getKanban(key);
                if (kanban) {
                    break;
                }
            }
        }
        return kanban || null;
    }

    updateKanban(key: unknown, data: Partial<KanbanRegionState | KanbanDataset>): Promise<unknown> {
        const kanban = this.getKanban(key);
        if (kanban) {
            return (kanban as Kanban).update(data as Partial<KanbanDataset>);
        }
        return Promise.reject(new Error(`[ZUI] Kanban not found: ${key}`));
    }

    updateLayout(): void {
        const element = this._ref.current;
        if (!element) {
            return;
        }
        const $element = $(element);
        const width = $element.width();
        const height = $element.height();
        this.setState({width, height});
    }

    updateLink(link: KanbanLinkOptions | KanbanLinkOptions[], change?: Partial<KanbanLinkOptions>) {
        return this.changeState(prevState => {
            let newLinks = Array.isArray(link) ? link : [link];
            if (change) {
                newLinks = newLinks.map(x => ({...x, ...change}));
            }
            return {linkChanges: mergeList(prevState.linkChanges, newLinks, this.props.linkItemKey)};
        });
    }

    addLink(link: KanbanLinkOptions | KanbanLinkOptions[]) {
        return this.updateLink(link);
    }

    deleteLink(link: KanbanLinkOptions | KanbanLinkOptions[]) {
        return this.updateLink(link, {deleted: true});
    }

    protected _tryUpdateLayout(): void {
        if (this._layoutTimer) {
            cancelAnimationFrame(this._layoutTimer);
        }
        this._layoutTimer = requestAnimationFrame(() => {
            this.updateLayout();
            this._layoutTimer = 0;
        });
    }

    protected _getClassName(props: RenderableProps<KanbanListProps>): ClassNameLike {
        return ['kanban-list', props.className, props.sticky ? 'has-sticky' : '', props.moveable ? 'is-moveable' : '', props.scrollbarHover ? 'scrollbar-hover' : ''];
    }

    protected _getProps(props: RenderableProps<KanbanListProps>): Record<string, unknown> {
        const {width, height} = props;
        const widthSetting = typeof width === 'function' ? width.call(this) : width;
        const heightSetting = typeof height === 'function' ? height.call(this) : height;
        const {width: actualWidth, height: actualHeight} = this.state ?? {};
        return mergeProps(super._getProps(props), {
            ref: this._ref,
            style: {
                width: widthSetting,
                height: heightSetting,
                '--kanban-list-width': `${actualWidth || width}px`,
                '--kanban-list-height': `${actualHeight || height}px`,
            },
        });
    }

    protected _onAddLink = async (newLink: KanbanLinkOptions) => {
        const {onAddLink, linkItemKey} = this.props;
        newLink[linkItemKey!] = createLinkID(newLink);
        const result = await onAddLink?.call(this, newLink);
        if (result === false) {
            return;
        }
        this.addLink(newLink);
    };

    protected _onDeleteLink = async (link: KanbanLinkOptions) => {
        const {onDeleteLink} = this.props;
        const result = await onDeleteLink?.call(this, link);
        if (result === false) {
            return;
        }
        this.deleteLink(link);
    };

    protected _getLinks(props: RenderableProps<KanbanListProps>): KanbanLinkOptions[] {
        const {linkChanges = []} = this.state;
        const {links = [], getLink, linkItemKey} = props;
        return mergeList(links, linkChanges, this.props.linkItemKey).reduce((list, link) => {
            const newLink = getLink?.call(this, link);
            if (newLink !== false) {
                link = newLink || link;
                if (!link.deleted) {
                    if (!link[linkItemKey!]) {
                        link[linkItemKey!] = createLinkID(link);
                    }
                    list.push(link);
                }
            }
            return list;
        }, [] as KanbanLinkOptions[]);
    }

    protected _renderLinks(props: RenderableProps<KanbanListProps>) {
        const links = this._getLinks(props);
        const {editLinks} = props;
        if (!editLinks && !links.length) {
            return;
        }

        const {showLinkOnHover, showLinkOnSelected} = props;
        let filters: string[] | undefined;
        if (links.length && (showLinkOnSelected || showLinkOnHover)) {
            filters = [];
            const {selected = {}, hover} = this.state;
            if (showLinkOnSelected && selected) {
                Object.keys(selected).forEach(kanban => {
                    const selectedItems = selected[kanban];
                    if (selectedItems.length) {
                        filters!.push(...selectedItems.map(x => `${kanban}_${x}`));
                    }
                });
            }
            if (showLinkOnHover && hover) {
                filters.push(hover);
            }
            filters = [...new Set(filters)];
        }

        return (
            <KanbanLinks
                key="links"
                container=".kanban-list"
                links={links}
                filters={filters}
                editLinks={editLinks}
                onDeleteLink={editLinks ? (this._onDeleteLink as (link: KanbanLinkOptions) => void) : undefined}
                onAddLink={editLinks ? this._onAddLink : undefined}
            />
        );
    }

    protected _getChildren(props: RenderableProps<KanbanListProps>): ComponentChildren {
        const {items = [], kanbanProps: kanbanPropsSetting, showLinkOnSelected, showLinkOnHover, selectable, editLinks} = props;
        const kanbanRefs = this._kanbanRefs;
        const refKeys = new Set<string>(kanbanRefs.keys());
        const children = [
            ...items.map((kanbanProps, index) => {
                if (kanbanPropsSetting) {
                    kanbanProps = typeof kanbanPropsSetting === 'function' ? kanbanPropsSetting.call(this, kanbanProps, index) : $.extend({}, kanbanPropsSetting, kanbanProps);
                }
                const key = String(kanbanProps.key ?? index);
                let ref = kanbanRefs.get(key);
                if (!ref) {
                    ref = createRef<Kanban>();
                    kanbanRefs.set(key, ref);
                }
                refKeys.delete(key);
                const isRegion = ((kanbanProps as KanbanRegionProps).heading !== undefined || (kanbanProps as KanbanRegionProps).items);
                if (showLinkOnSelected || showLinkOnHover || selectable) {
                    if (isRegion) {
                        (kanbanProps as KanbanRegionProps).kanbanProps = {showLinkOnSelected, showLinkOnHover, selectable, ...(kanbanProps as KanbanRegionProps).kanbanProps} as KanbanProps;
                    } else {
                        kanbanProps = {showLinkOnSelected, showLinkOnHover, selectable, ...kanbanProps};
                    }
                }
                if (editLinks) {
                    if (isRegion) {
                        (kanbanProps as KanbanRegionProps).items = ((kanbanProps as KanbanRegionProps).items || []).map(x => ({...x, editLinks: false}));
                    } else {
                        kanbanProps = {...kanbanProps, editLinks: false};
                    }
                }
                const KanbanComponent = isRegion ? KanbanRegion : Kanban;
                return <KanbanComponent key={key} ref={ref} sticky={props.sticky} {...(kanbanProps as KanbanProps)} z-key={key} />;
            }),
            props.children,
        ];
        refKeys.forEach(key => {
            kanbanRefs.delete(key);
        });
        const links = this._renderLinks(props);
        if (links) {
            children.push(links);
        }
        return children;
    }
}
