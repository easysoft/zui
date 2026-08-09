import {$, signal} from '@zui/core';
import {Component, createRef} from 'preact';

export type ModalIframeContentProps = {
    url: string;
    watchHeight?: boolean;
    iframeBodyClass?: string;
    onLoad?: (this: ModalIframeContent) => void;
};

export class ModalIframeContent extends Component<ModalIframeContentProps> {
    static defaultProps: Partial<ModalIframeContentProps> = {
        watchHeight: true,
    };

    _ref = createRef<HTMLIFrameElement>();

    _rob?: ResizeObserver;

    _height = signal<number>();

    _timer = 0;

    get iframeDoc() {
        return this._ref.current?.contentWindow?.document;
    }

    protected _handleError = (event: ErrorEvent) => {
        if (event.message.includes('ResizeObserver loop completed with undelivered notifications')) {
            this.componentWillUnmount();
        }
    };

    componentDidMount() {
        if (this.props.watchHeight) {
            this._watchIframeHeight();
        }
        window.addEventListener('error', this._handleError);
    }

    componentWillUnmount(): void {
        window.removeEventListener('error', this._handleError);
        this._rob?.disconnect();
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = 0;
        }
    }

    _watchIframeHeight() {
        try {
            const iframeDoc = this.iframeDoc;
            const iframeBody = iframeDoc?.body;
            if (!iframeDoc || !iframeBody) {
                return;
            }
            let rob = this._rob;
            rob?.disconnect();
            rob = new ResizeObserver(() => {
                if (this._timer) {
                    clearTimeout(this._timer);
                }
                this._timer = window.setTimeout(() => {
                    try {
                        const body = iframeDoc.body;
                        const html = iframeDoc.documentElement;
                        if (!body || !html) {
                            return;
                        }
                        const height = Math.ceil(Math.max(body.scrollHeight, body.offsetHeight, html.offsetHeight));
                        if (height && height !== this._height.value) {
                            this._height.value = height;
                        }
                    } catch {
                        // Cross-origin iframes cannot expose a document for height measurement.
                    } finally {
                        this._timer = 0;
                    }
                }, 10);
            });
            rob.observe(iframeBody);
            this._rob = rob;
        } catch {
            // Cross-origin iframes cannot be observed.
        }
    }

    _handleIframeLoad = () => {
        const iframeDoc = this.iframeDoc;
        if (!iframeDoc) {
            return;
        }

        try {
            const {iframeBodyClass, watchHeight} = this.props;

            if (watchHeight) {
                this._watchIframeHeight();
            }

            if (iframeBodyClass) {
                const classNames = iframeBodyClass.split(/\s+/).filter(Boolean);
                if (classNames.length) {
                    iframeDoc.body.classList.add(...classNames);
                }
            }
        } catch {
            // ignore error
        }

        $(this._ref.current).trigger('modal-iframe-loaded');
    };

    render() {
        return (
            <iframe
                className="modal-iframe"
                style={this._height.value ? `height: ${this._height.value}px;` : undefined}
                src={this.props.url}
                ref={this._ref}
                onLoad={this._handleIframeLoad}
            />
        );
    }
}
