import {Component, ComponentChildren, createRef} from 'preact';
import {ContextMenu} from '@zui/contextmenu';
import {formatString} from '@zui/helpers';
import {$} from '@zui/cash';
import '@zui/css-icons/src/icons/more.css';
import type {BlockFetcher, BlockProps} from '../types';

export type BlockState = {
    content: ComponentChildren;
    loading?: boolean;
    dragging?: boolean;
};

export class Block extends Component<BlockProps, BlockState> {
    #ref = createRef<HTMLDivElement>();

    constructor(props: BlockProps) {
        super(props);
        this.state = {content: <div class="dashboard-block-body">{props.block.content}</div>};
    }

    componentDidMount(): void {
        this.load();
        $(this.#ref.current!).on('load.zui.dashboard', this.load.bind(this));
    }

    componentWillUnmount(): void {
        $(this.#ref.current!).off('load.zui.dashboard');
    }

    load() {
        const {block} = this.props;
        let fetcher: BlockFetcher | undefined = block.fetch;
        if (!fetcher) {
            return;
        }
        if (typeof fetcher === 'string') {
            fetcher = {url: fetcher};
        } else if (typeof fetcher === 'function') {
            fetcher = fetcher(block.id, block);
        }
        const {url, ...fetchInitOptions} = fetcher;
        this.setState({loading: true}, () => {
            fetch(formatString(url, block), fetchInitOptions).then((response) => {
                if (response.ok) {
                    response.text().then((html) => {
                        this.setState({loading: false, content: <div class="dashboard-block-body" dangerouslySetInnerHTML={{__html: html}}></div>});
                    });
                } else {
                    this.setState({loading: false, content: <div class="text-danger p-5 text-center">Error: {response.statusText}</div>});
                }
            });
        });
    }

    #handleMenuBtnClick = (event: MouseEvent) => {
        event.stopPropagation();
        ContextMenu.show({
            event: (event.target as HTMLElement),
            placement: 'bottom-end',
            menu: {
                onClickItem: ({item}) => {
                    if (item.attrs?.['data-type'] === 'refresh') {
                        this.load();
                    }
                },
            },
            ...this.props.block.menu,
        });
    };

    #handleDragStart = (event: DragEvent) => {
        const element = this.#ref.current;
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
        const {title, menu, id} = block;
        const {loading, content, dragging} = this.state;
        return (
            <div class="dashboard-block-cell" style={{left, top, width, height, ...style}}>
                <div
                    class={`dashboard-block load-indicator${loading ? ' loading'  : ''}${menu ? ' has-more-menu' : ''}${dragging ? ' is-dragging' : ''}`}
                    draggable
                    onDragStart={this.#handleDragStart}
                    onDragEnd={this.#handleDragEnd}
                    data-id={id}
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
