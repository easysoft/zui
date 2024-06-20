import {Component, createRef} from 'preact';

export type ModalIframeContentProps = {
    url: string;
    watchHeight?: boolean;
    iframeBodyClass?: string;
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

    get iframeDoc() {
        return this._ref.current?.contentWindow?.document;
    }

    componentDidMount() {
        if (this.props.watchHeight) {
            this._watchIframeHeight();
        }
    }

    componentWillUnmount(): void {
        this._rob?.disconnect();
    }

    _watchIframeHeight() {
        const iframeDoc = this.iframeDoc;
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
    }

    _handleIframeLoad = () => {
        const iframeDoc = this.iframeDoc;
        if (!iframeDoc) {
            return;
        }

        const {iframeBodyClass, watchHeight} = this.props;

        if (watchHeight) {
            this._watchIframeHeight();
        }

        if (iframeBodyClass) {
            iframeDoc.body.classList.add(iframeBodyClass);
        }
    };

    render() {
        return (
            <iframe
                className="modal-iframe"
                style={this.state}
                src={this.props.url}
                ref={this._ref}
                onLoad={this._handleIframeLoad}
            />
        );
    }
}
