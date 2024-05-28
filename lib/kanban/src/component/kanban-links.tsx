import {Component, createRef} from 'preact';
import {$} from '@zui/core';
import {KanbanLink} from './kanban-link';
import {KanbanLinkEditor} from './kanban-link-editor';

import type {ComponentChild, RenderableProps} from 'preact';
import type {KanbanLinkOptions, KanbanLinksProps, KanbanLinksState} from '../types';
import {createLinkID} from '../helpers/link-helpers';

const EVENT_NAMESPACE = '.kanban';

export class KanbanLinks extends Component<KanbanLinksProps, KanbanLinksState> {
    protected _ref = createRef<HTMLDivElement>();

    protected declare _container: HTMLElement;

    protected declare _multiKanban: boolean;

    protected _watchSet = new Set<string>();

    protected _raf?: number;

    state: KanbanLinksState = {layout: {}, scrollTop: 0, scrollLeft: 0};

    componentDidMount(): void {
        const {container = '.kanban'} = this.props;
        const containerElement = this._ref.current?.closest(container) as HTMLElement;
        const $container = $(containerElement);
        this._multiKanban = $container.find('.kanban').length > 1;
        $container.on(`laneColResize${EVENT_NAMESPACE} laneColScroll${EVENT_NAMESPACE}`, () => {
            this._tryUpdateLayout();
        }).on(`scroll${EVENT_NAMESPACE}`, () => {
            // this._tryUpdateLayout();
            // this.setState({scrollTop: containerElement.scrollTop, scrollLeft: containerElement.scrollLeft});
        });
        this._container = containerElement;
        this._tryUpdateLayout();
    }

    componentWillUnmount(): void {
        const containerElement = this._container;
        if (containerElement) {
            $(containerElement).off(EVENT_NAMESPACE);
        }
        if (this._raf) {
            cancelAnimationFrame(this._raf);
        }
    }

    componentDidUpdate(previousProps: Readonly<KanbanLinksProps>): void {
        if (previousProps.links !== this.props.links || previousProps.filters !== this.props.filters) {
            this._tryUpdateLayout();
        }
    }

    _tryUpdateLayout() {
        if (this._raf) {
            cancelAnimationFrame(this._raf);
        }
        this._raf = requestAnimationFrame(() => {
            this._updateLayout();
            this._raf = 0;
        });
    }

    _updateLayout() {
        const watchSet = [...this._watchSet];
        const container = this._container;
        const $container = $(container);
        const {top: containerTop, left: containerLeft} = container.getBoundingClientRect();
        const offsetTop = container.scrollTop - containerTop;
        const offsetLeft = container.scrollLeft - containerLeft;
        const layout: KanbanLinksState['layout'] = {};
        watchSet.forEach(key => {
            const [kanban, id] = key.split('_');
            const element = $container.find(`${this._multiKanban ? `.kanban[z-key="${kanban}"] ` : ''}.kanban-item[z-key="${id}"]`).children()[0];
            if (element) {
                const {top, left, bottom, right} = element.getBoundingClientRect();
                layout[key] = {top: top + offsetTop, left: left + offsetLeft, bottom: bottom + offsetTop, right: right + offsetLeft};
            }
        });
        this.setState({layout});
    }

    _renderLink(link: KanbanLinkOptions) {
        const {layout} = this.state;
        const {from, fromKanban = '', to, toKanban = ''} = link;
        const fromKey = `${fromKanban}_${from}`;
        const toKey = `${toKanban}_${to}`;
        const fromReact = layout[fromKey];
        const toRect = layout[toKey];
        this._watchSet.add(fromKey);
        this._watchSet.add(toKey);
        if (!fromReact || !toRect) {
            return null;
        }
        return (
            <KanbanLink key={`${from}-${to}`} {...link} fromRect={fromReact} toRect={toRect} onDelete={this.props.onDeleteLink} />
        );
    }

    _renderLinks(props: RenderableProps<KanbanLinksProps>) {
        const {links, filters} = props;
        const includeSet = new Set(filters);
        const isLinkMatch = (link: KanbanLinkOptions) => {
            const {from, to, fromKanban = '', toKanban = ''} = link;
            if (this._multiKanban) {
                return includeSet.has(`${fromKanban}_${from}`) || includeSet.has(`${toKanban}_${to}`) || includeSet.has(fromKanban) || includeSet.has(toKanban) || includeSet.has(createLinkID(link));
            }
            return includeSet.has(from) || includeSet.has(to) || includeSet.has(`${from}-${to}`);
        };
        return  links.reduce((list, link) => {
            if (!filters || isLinkMatch(link)) {
                const result = this._renderLink(link);
                if (result) {
                    list.push(result);
                }
            }
            return list;
        }, [] as ComponentChild[]);
    }

    _renderEditor(props: RenderableProps<KanbanLinksProps>) {
        const {editLinks, onAddLink, container} = props;
        if (editLinks) {
            return <KanbanLinkEditor key="editor" container={container} onAddLink={onAddLink} />;
        }
        return null;
    }

    render(props: RenderableProps<KanbanLinksProps>) {
        this._watchSet.clear();
        return (
            <div className="kanban-links" ref={this._ref}>
                {this._renderLinks(props)}
                {this._renderEditor(props)}
            </div>
        );
    }
}
