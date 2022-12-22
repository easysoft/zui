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
        const iframeBody = this.#ref.current?.contentWindow?.document.body;
        if (!iframeBody) {
            return;
        }

        let rob = this.#rob;
        rob?.disconnect();
        rob = new ResizeObserver(() => {
            this.setState({height: iframeBody.clientHeight});
        });
        rob.observe(iframeBody);
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
