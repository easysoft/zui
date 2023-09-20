import {Component, createRef} from 'preact';
import {$} from '@zui/core';

import type {RenderableProps} from 'preact';
import type {KanbanLinkOptions, KanbanLinksProps, KanbanLinksState} from '../types';

export class KanbanLinks extends Component<KanbanLinksProps, KanbanLinksState> {
    _ref = createRef<HTMLDivElement>();

    declare _kanban: HTMLElement;

    _idSet = new Set<string>();

    _raf?: number;

    state: KanbanLinksState = {layout: {}};

    componentDidMount(): void {
        const kanbanElement = this._ref.current?.closest('.kanban') as HTMLElement;
        $(kanbanElement).on('laneColResize.kanban.link', (event, entry) => {
            console.log('> laneColResize', event, entry);
            this._tryUpdateLayout();
        });
        this._kanban = kanbanElement;
        this._tryUpdateLayout();
    }

    componentWillUnmount(): void {
        const kanbanElement = this._ref.current?.closest('.kanban');
        if (kanbanElement) {
            $(kanbanElement).off('.kanban.link');
        }
        if (this._raf) {
            cancelAnimationFrame(this._raf);
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
        const idSet = [...this._idSet];
        const $kanban = $(this._kanban).find('.kanban-body');
        const layout: KanbanLinksState['layout'] = {};
        idSet.forEach(id => {
            const element = $kanban.find(`.kanban-item[z-key="${id}"]`)[0];
            if (element) {
                const {top, left, bottom, right} = element.getBoundingClientRect();
                layout[id] = {top, left, bottom, right};
            }
        });
        this.setState({layout});
    }

    _renderLink(link: KanbanLinkOptions) {
        const {layout} = this.state;
        const from = String(link.from);
        const to = String(link.to);
        const fromBounding = layout[from];
        const toBounding = layout[to];
        this._idSet.add(from);
        this._idSet.add(to);
        if (!fromBounding || !toBounding) {
            return null;
        }
        return (
            <div key={`${from}-${to}`} className="kanban-link">
                {JSON.stringify({fromBounding, toBounding})}
            </div>
        );
    }

    render(props: RenderableProps<KanbanLinksProps>) {
        const {links} = props;
        this._idSet.clear();
        return (
            <div className="kanban-links" ref={this._ref}>
                {links.map(link => this._renderLink(link))}
            </div>
        );
    }
}
