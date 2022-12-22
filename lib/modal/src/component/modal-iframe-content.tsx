import {Component, createRef} from 'preact';

export type ModalIframeContentProps = {
    url: string;
};

export type ModalIframeContentState = {
    height?: number;
};

export class ModalIframeContent extends Component<ModalIframeContentProps> {
    #ref = createRef<HTMLIFrameElement>();

    #rob?: ResizeObserver;

    state: ModalIframeContentState = {};

    componentDidMount() {
        this.#watchIframeHeight();
    }

    componentWillUnmount(): void {
        this.#rob?.disconnect();
    }

    #watchIframeHeight = () => {
        const iframeDoc = this.#ref.current?.contentWindow?.document;
        if (!iframeDoc) {
            return;
        }

        let rob = this.#rob;
        rob?.disconnect();
        rob = new ResizeObserver(() => {
            const body = iframeDoc.body;
            const html = iframeDoc.documentElement;
            const height = Math.ceil(Math.max(body.scrollHeight, body.offsetHeight, html.offsetHeight));
            this.setState({height});
        });
        rob.observe(iframeDoc.body);
        rob.observe(iframeDoc.documentElement);
        this.#rob = rob;
    };

    render() {
        const {url} = this.props;
        return (
            <iframe
                className="modal-iframe"
                style={this.state}
                src={url}
                ref={this.#ref}
                onLoad={this.#watchIframeHeight}
            />
        );
    }
}
