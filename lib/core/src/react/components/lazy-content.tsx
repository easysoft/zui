import {Component} from 'preact';
import type {LazyContentProps, CustomContentType} from '../types';
import {fetchData, type Ajax} from '../../ajax';
import {HtmlContent} from './html-content';
import {CustomContent} from './custom-content';

export type LazyContentState = {
    loading?: boolean;
    error?: Error;
    content?: CustomContentType;
};

export class LazyContent extends Component<LazyContentProps, LazyContentState> {
    static defaultProps: Partial<LazyContentProps> = {
        type: 'html',
    };

    state: LazyContentState = {};

    protected _ajax?: Ajax;

    async load() {
        const {props} = this;
        const {fetcher, type} = props;
        this.setState({loading: true, error: undefined, content: undefined});
        try {
            const content = await fetchData(fetcher, [props], {throws: true, dataType: type === 'custom' ? 'json' : 'text'}, this, (ajax) => {
                this._ajax = ajax;
            });
            this.setState({content, loading: false});
        } catch (error) {
            this.setState({error: error as Error, loading: false});
        }
        this._ajax = undefined;
    }

    componentDidMount(): void {
        this.load();
    }

    componentWillUnmount(): void {
        this._ajax?.abort();
    }

    render(props: LazyContentProps) {
        const {loading, error, content = ''} = this.state;
        const {loadingText, errorText, type, ...others} = props;
        if (loading) {
            return loadingText;
        }
        if (error) {
            return errorText ?? error.message;
        }
        if (type === 'html') {
            return <HtmlContent html={content as string} {...others} />;
        }
        if (type === 'text') {
            return content;
        }
        return <CustomContent content={content} />;
    }
}
