import {Component, ComponentChildren, createRef} from 'preact';
import {ContextMenu} from '@zui/contextmenu';
import {formatString} from '@zui/helpers';
import {$, HtmlContent} from '@zui/core';
import {store} from '@zui/store';
import '@zui/css-icons/src/icons/more.css';
import type {BlockFetcher, BlockProps} from '../types';

export type BlockState = {
    content?: ComponentChildren;
    loading?: boolean;
    dragging?: boolean;
    url?: string;
};

const CACHE_PREFIX = 'Dashboard:Block.cache:';

export class Block extends Component<BlockProps, BlockState> {
    #ref = createRef<HTMLDivElement>();

    get element() {
        return this.#ref.current!;
    }

    componentDidMount(): void {
        this.load();
        $(this.element).on('load.zui.dashboard', this.load);
    }

    componentWillUnmount(): void {
        $(this.element).off('load.zui.dashboard');
    }

    load = () => {
        const {block, cache} = this.props;
        let fetcher: BlockFetcher | undefined = block.fetch;
        if (!fetcher || this.state.loading) {
            return;
        }
        if (typeof fetcher === 'string') {
            fetcher = {url: fetcher};
        } else if (typeof fetcher === 'function') {
            fetcher = fetcher(block.id, block);
        }
        const {url, ...fetchInitOptions} = fetcher;
        const newState: Partial<BlockState> = {loading: true, url};
        if (cache) {
            const cacheHtml = store.session.get<string>(`${CACHE_PREFIX}${url}`);
            if (cacheHtml) {
                newState.content = <HtmlContent class="dashboard-block-body" html={cacheHtml} executeScript />;
            }
        }
        this.setState(newState, () => {
            fetch(formatString(url, block), {
                headers: {'X-Requested-With': 'XMLHttpRequest'},
                ...fetchInitOptions,
            }).then((response) => {
                if (response.ok) {
                    response.text().then((html) => {
                        this.setState({loading: false, content: <HtmlContent class="dashboard-block-body" html={html} executeScript />}, () => {
                            if (cache) {
                                store.session.set(`${CACHE_PREFIX}${url}`, html);
                            }
                        });
                    });
                } else {
                    this.setState({loading: false, content: <div className="dashboard-block-body"><div class="panel center text-danger p-5 text-center">Error: {response.statusText}</div></div>});
                }
            });
        });
    };

    #handleMenuBtnClick = (event: MouseEvent) => {
        event.stopPropagation();
        ContextMenu.show({
            event: (event.target as HTMLElement),
            placement: 'bottom-end',
            menu: {
                onClickItem: ({item}) => {
                    if ((item.attrs?.['data-type']) === 'refresh') {
                        this.load();
                    }
                },
            },
            ...this.props.block.menu,
        });
    };

    #handleDragStart = (event: DragEvent) => {
        const {element} = this;
        const bounding = element!.getBoundingClientRect();
        if ((event.clientY - bounding.top) > 48) {
            event.preventDefault();
            return;
        }
        this.setState({dragging: true});
        event.dataTransfer?.setData('application/id', this.props.block.id);
        this.props.onDragStart?.(event);
    };

    #handleDragEnd = (event: DragEvent) => {
        this.setState({dragging: false});
        this.props.onDragEnd?.(event);
    };

    render() {
        const {left, top, width, height, style, block} = this.props;
        const {title, menu, id, content: blockContent} = block;
        const {loading, dragging, url} = this.state;
        let {content} = this.state;
        if (content === undefined) {
            if ($.isPlainObject(blockContent) && (blockContent as {html?: string}).html) {
                content = <div class="dashboard-block-body" dangerouslySetInnerHTML={{__html: (blockContent as {html: string}).html}} />;
            } else {
                <div class="dashboard-block-body">{blockContent}</div>;
            }
        }
        return (
            <div class="dashboard-block-cell" style={{left, top, width, height, ...style}}>
                <div
                    class={`dashboard-block load-indicator${(loading && !content) ? ' loading'  : ''}${menu ? ' has-more-menu' : ''}${dragging ? ' is-dragging' : ''}`}
                    draggable
                    onDragStart={this.#handleDragStart}
                    onDragEnd={this.#handleDragEnd}
                    data-id={id}
                    data-url={url}
                    ref={this.#ref}
                >
                    <div class="dashboard-block-header">
                        <div class="dashboard-block-title">{title}</div>
                        {menu ? (<div class="dashboard-block-actions toolbar">
                            <button class="toolbar-item dashboard-block-action btn square ghost rounded size-sm" data-type="more" onClick={this.#handleMenuBtnClick}><div class="more-vert"></div></button>
                        </div>) : null}
                    </div>
                    {content}
                </div>
            </div>
        );
    }
}
