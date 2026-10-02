import {Component, createRef} from 'preact';
import type {LazyContentProps, CustomContentType} from '../types';
import {$} from '../../cash';
import {fetchData, FetcherSetting, type Ajax} from '../../ajax';
import {HtmlContent} from './html-content';
import {CustomContent} from './custom-content';
import {classes} from '../../helpers';
import {HElement} from './h-element';
import {ContentRenderContext, ContentSourceContext, renderContentError, type ContentRenderPolicy} from './content-render-context';

/**
 * 懒加载内容组件的状态
 */
export type LazyContentState = {
    /** 是否正在加载 */
    loading?: boolean;
    /** 加载出错时的错误对象 */
    error?: Error;
    /** 加载到的内容 */
    content?: CustomContentType;
};

/**
 * 懒加载内容组件
 * 用于异步加载并展示内容，支持 HTML、文本或自定义组件渲染
 */
export class LazyContent extends Component<LazyContentProps, LazyContentState> {
    /** 默认属性 */
    static defaultProps: Partial<LazyContentProps> = {
        type: 'html',
        loadingIndicator: true,
        loadingClass: 'loading',
        clearBeforeLoad: true,
    };

    /** 组件内部状态 */
    state: LazyContentState = {};

    protected _ref = createRef<HTMLElement>();

    protected _ajax?: Ajax;

    /** 加载序号，用于丢弃过期的乱序响应 */
    protected _loadSeq = 0;

    protected _policy?: ContentRenderPolicy;

    protected _preparedProps?: LazyContentProps;

    protected _unmounted = false;

    /**
     * 加载内容
     * @param newFetcher 可选的新的获取器设置，如果提供将使用此设置进行加载，否则使用 props 中的 fetcher
     */
    async load(newFetcher?: FetcherSetting) {
        if (this._unmounted || !this._preparedProps) {
            return;
        }
        // Abort any in-flight request and mark this call as the latest load.
        this._ajax?.abort();
        const seq = ++this._loadSeq;
        try {
            const props = newFetcher ? {...this.props, fetcher: newFetcher as LazyContentProps['fetcher']} : this.props;
            const prepared = this._policy?.prepareLazy?.(props) ?? props;
            const {fetcher, type, fetcherArgs, fetcherThis = this, clearBeforeLoad} = prepared;
            this.setState({loading: true, error: undefined, ...(clearBeforeLoad ? {content: undefined} : {})});
            const content = await fetchData(fetcher, fetcherArgs, {throws: true, dataType: type === 'custom' ? 'json' : 'text'}, fetcherThis, (ajax) => {
                this._ajax = ajax;
            });
            if (seq !== this._loadSeq) {
                return;
            }
            const transformContent = this._preparedProps?.transformContent;
            this.setState({content: transformContent ? transformContent(content as CustomContentType) : content as CustomContentType, loading: false});
        } catch (error) {
            if (seq !== this._loadSeq) {
                return;
            }
            this.setState({error: error as Error, loading: false});
        }
        this._ajax = undefined;
    }

    /**
     * 组件挂载后触发加载，并监听 `loadContent.zui` 事件
     */
    componentDidMount(): void {
        this.load();
        $(this._ref.current).on('loadContent.zui', (event: Event, fetcher?: FetcherSetting) => {
            event.stopPropagation();
            this.load(fetcher);
        });
    }

    /**
     * 组件更新时检查 fetcher 相关属性是否变化，若变化则重新加载
     * @param previousProps 上一次渲染的属性
     */
    componentDidUpdate(previousProps: Readonly<LazyContentProps>): void {
        if (this.props.fetcher !== previousProps.fetcher || this.props.fetcherArgs !== previousProps.fetcherArgs || this.props.fetcherThis !== previousProps.fetcherThis || this.props.type !== previousProps.type) {
            this.load();
        }
    }

    /**
     * 组件卸载时中止未完成的请求并移除事件监听
     */
    componentWillUnmount(): void {
        this._unmounted = true;
        ++this._loadSeq;
        this._ajax?.abort();
        $(this._ref.current).off('.zui');
    }

    protected _renderContent(_props: LazyContentProps, others: Partial<LazyContentProps>) {
        const {loading, error, content = ''} = this.state;
        const {loadingContent, contentClass, contentStyle, contentAttrs, errorText, type, clearBeforeLoad, executeScript, transformContent, fetcher, fetcherArgs, fetcherThis, ...otherProps} = others;
        if (loading && clearBeforeLoad) {
            return <CustomContent content={loadingContent} />;
        }
        if (error) {
            if (this._policy) {
                const placeholder = renderContentError(this._policy, error);
                return errorText === undefined ? placeholder : <span role="alert">{errorText}</span>;
            }
            return errorText ?? error.message;
        }
        if (type === 'html') {
            return (
                <ContentSourceContext.Provider value="lazy">
                    <HtmlContent html={content as string} executeScript={executeScript ?? !this._policy} className={contentClass} style={contentStyle} attrs={contentAttrs} {...otherProps} />
                </ContentSourceContext.Provider>
            );
        }
        if (type === 'text') {
            return content;
        }
        return <CustomContent content={content} className={contentClass} style={contentStyle} attrs={contentAttrs} {...otherProps} />;
    }

    /**
     * 渲染组件结构
     * @param props 组件属性
     */
    render(props: LazyContentProps) {
        return (
            <ContentRenderContext.Consumer>
                {(policy) => {
                    this._policy = policy;
                    try {
                        const prepared = policy?.prepareLazy?.(props) ?? props;
                        this._preparedProps = prepared;
                        const {loading} = this.state;
                        const {id, tag = 'div', loadingClass, loadingIndicator, className, style, attrs, loadingText, ...others} = prepared;
                        return (
                            <HElement tag={tag} forwardRef={this._ref} className={classes('lazy-content', className, loading ? loadingClass : '', loadingIndicator ? 'load-indicator' : '')} style={style} attrs={{id, 'data-loading': loadingText, ...attrs}}>
                                {this._renderContent(prepared, others)}
                            </HElement>
                        );
                    } catch (error) {
                        this._preparedProps = undefined;
                        return renderContentError(policy, error);
                    }
                }}
            </ContentRenderContext.Consumer>
        );
    }
}
