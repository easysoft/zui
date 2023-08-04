import {Component, createRef} from 'preact';

export type ModalIframeContentProps = {
    url: string;
    watchHeight?: boolean;
};

export type ModalIframeContentState = {
    height?: number;
};

export class ModalIframeContent extends Component<ModalIframeContentProps> {
    static defaultProps: Partial<ModalIframeContentProps> = {
        watchHeight: true,
    };

    _ref = createRef<HTMLIFrameElement>();

    _rob?: ResizeObserver;

    state: ModalIframeContentState = {};

    componentDidMount() {
        if (this.props.watchHeight) {
            this._watchIframeHeight();
        }
    }

    componentWillUnmount(): void {
        this._rob?.disconnect();
    }

    _watchIframeHeight = () => {
        const iframeDoc = this._ref.current?.contentWindow?.document;
        if (!iframeDoc) {
            return;
        }

        let rob = this._rob;
        rob?.disconnect();
        rob = new ResizeObserver(() => {
            const body = iframeDoc.body;
            const html = iframeDoc.documentElement;
            const height = Math.ceil(Math.max(body.scrollHeight, body.offsetHeight, html.offsetHeight)) + 1;
            this.setState({height});
        });
        rob.observe(iframeDoc.body);
        rob.observe(iframeDoc.documentElement);
        this._rob = rob;
    };

    render() {
        const {url, watchHeight} = this.props;
        return (
            <iframe
                className="modal-iframe"
                style={this.state}
                src={url}
                ref={this._ref}
                onLoad={watchHeight ? this._watchIframeHeight : undefined}
            />
        );
    }
}
