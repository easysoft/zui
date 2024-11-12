import {Component, createRef} from 'preact';
import type {LazyContentProps, CustomContentType} from '../types';
import {$} from '../../cash';
import {fetchData, FetcherSetting, type Ajax} from '../../ajax';
import {HtmlContent} from './html-content';
import {CustomContent} from './custom-content';
import {classes} from '../../helpers';

export type LazyContentState = {
    loading?: boolean;
    error?: Error;
    content?: CustomContentType;
};

export class LazyContent extends Component<LazyContentProps, LazyContentState> {
    static defaultProps: Partial<LazyContentProps> = {
        type: 'html',
        loadingIndicator: true,
        loadingClass: 'loading',
        clearBeforeLoad: true,
    };

    state: LazyContentState = {};

    protected _ref = createRef<HTMLDivElement>();

    protected _ajax?: Ajax;

    async load(newFetcher?: FetcherSetting) {
        const {props} = this;
        const {fetcher, type, fetcherArgs, fetcherThis = this, clearBeforeLoad} = props;
        this.setState({loading: true, error: undefined, ...(clearBeforeLoad ? {content: undefined} : {})});
        try {
            const content = await fetchData(newFetcher || fetcher, fetcherArgs, {throws: true, dataType: type === 'custom' ? 'json' : 'text'}, fetcherThis, (ajax) => {
                this._ajax = ajax;
            });
            this.setState({content: content as CustomContentType, loading: false});
        } catch (error) {
            this.setState({error: error as Error, loading: false});
        }
        this._ajax = undefined;
    }

    componentDidMount(): void {
        this.load();
        $(this._ref.current).on('loadContent.zui', (event: Event, fetcher?: FetcherSetting) => {
            event.stopPropagation();
            this.load(fetcher);
        });
    }

    componentDidUpdate(previousProps: Readonly<LazyContentProps>): void {
        if (this.props.fetcher !== previousProps.fetcher || this.props.fetcherArgs !== previousProps.fetcherArgs || this.props.fetcherThis !== previousProps.fetcherThis) {
            this.load();
        }
    }

    componentWillUnmount(): void {
        this._ajax?.abort();
        $(this._ref.current).off('.zui');
    }

    protected _renderContent(_props: LazyContentProps, others: Partial<LazyContentProps>) {
        const {loading, error, content = ''} = this.state;
        const {loadingContent, errorText, type, clearBeforeLoad, ...otherProps} = others;
        if (loading && clearBeforeLoad) {
            return loadingContent;
        }
        if (error) {
            return errorText ?? error.message;
        }
        if (type === 'html') {
            return <HtmlContent html={content as string} executeScript {...otherProps} />;
        }
        if (type === 'text') {
            return content;
        }
        return <CustomContent content={content} {...otherProps} />;
    }

    render(props: LazyContentProps) {
        const {loading} = this.state;
        const {id, loadingClass, loadingIndicator, className, style, attrs, loadingText, ...others} = props;
        return (
            <div id={id} ref={this._ref} className={classes('lazy-content', className, loading ? loadingClass : '', loadingIndicator ? 'load-indicator' : '')} data-loading={loadingText} style={style} {...attrs}>
                {this._renderContent(props, others)}
            </div>
        );
    }
}
