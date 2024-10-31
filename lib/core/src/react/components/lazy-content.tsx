import {Component} from 'preact';
import type {LazyContentProps, CustomContentType} from '../types';
import {fetchData, type Ajax} from '../../ajax';
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
    };

    state: LazyContentState = {};

    protected _ajax?: Ajax;

    async load() {
        const {props} = this;
        const {fetcher, type, fetcherArgs, fetcherThis = this} = props;
        this.setState({loading: true, error: undefined, content: undefined});
        try {
            const content = await fetchData(fetcher, fetcherArgs, {throws: true, dataType: type === 'custom' ? 'json' : 'text'}, fetcherThis, (ajax) => {
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
    }

    componentDidUpdate(previousProps: Readonly<LazyContentProps>): void {
        if (this.props.fetcher !== previousProps.fetcher || this.props.fetcherArgs !== previousProps.fetcherArgs || this.props.fetcherThis !== previousProps.fetcherThis) {
            this.load();
        }
    }

    componentWillUnmount(): void {
        this._ajax?.abort();
    }

    protected _renderContent(props: LazyContentProps) {
        const {loading, error, content = ''} = this.state;
        const {loadingContent, errorText, type} = props;
        if (loading) {
            return loadingContent;
        }
        if (error) {
            return errorText ?? error.message;
        }
        if (type === 'html') {
            return <HtmlContent html={content as string} />;
        }
        if (type === 'text') {
            return content;
        }
        return <CustomContent content={content} />;
    }

    render(props: LazyContentProps) {
        const {loading} = this.state;
        const {loadingClass, loadingIndicator, className, style, attrs, loadingText} = props;
        return (
            <div className={classes('lazy-content', className, loading ? loadingClass : '', loadingIndicator ? 'load-indicator' : '')} data-loading={loadingText} style={style} {...attrs}>
                {this._renderContent(props)}
            </div>
        );
    }
}
