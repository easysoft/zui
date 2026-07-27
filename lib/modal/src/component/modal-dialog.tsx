import {classes, CustomContent, $} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component/toolbar';
import {Component, createRef, isValidElement} from 'preact';
import {ModalDialogOptions, ModalDialogState} from '../types';

export class ModalDialog extends Component<ModalDialogOptions, ModalDialogState> {
    static defaultProps = {closeBtn: true};

    protected _ref = createRef<HTMLDivElement>();

    constructor(props: ModalDialogOptions) {
        super(props);
        this.state = {showed: !props.waitShowEvent};
    }

    componentDidMount() {
        const {waitShowEvent, afterRender} = this.props;
        afterRender?.call(this, {firstRender: true});
        if (waitShowEvent) {
            $(this._ref.current).on(waitShowEvent, () => {
                this.setState({showed: true});
            });
        }
    }

    componentDidUpdate(): void {
        this.props.afterRender?.call(this, {firstRender: false});
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
    }

    renderHeader() {
        const {
            header,
            headerClass,
            title,
        } = this.props;
        if (isValidElement(header)) {
            return header;
        }
        if (header === false || !title) {
            return null;
        }
        if (header) {
            return <CustomContent className={classes('modal-header', headerClass)} content={header} />;
        }
        return (
            <div className={classes('modal-header', headerClass)}>
                <div className="modal-title">{title}</div>
            </div>
        );
    }

    renderActions() {
        const {
            actions,
            closeBtn,
        } = this.props;
        if (!closeBtn && !actions) {
            return null;
        }
        if (isValidElement(actions)) {
            return actions;
        }
        return (
            <div className="modal-actions">
                {actions ? <Toolbar {...actions} /> : null}
                {closeBtn ? (
                    <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
                ) : null}
            </div>
        );
    }

    renderBody() {
        const {
            body,
            bodyClass,
        } = this.props;
        if (!body) {
            return null;
        }
        if (isValidElement(body)) {
            return body;
        }
        return <CustomContent className={classes('modal-body', bodyClass)} content={body} />;
    }

    renderFooter() {
        const {
            footer,
            footerClass,
            footerActions,
        } = this.props;
        if (isValidElement(footer)) {
            return footer;
        }
        if (footer === false || !footerActions) {
            return null;
        }
        if (footer) {
            return <CustomContent className={classes('modal-footer', footerClass)} content={footer} />;
        }
        return (
            <div className={classes('modal-footer', footerClass)}>
                {footerActions ? <Toolbar {...footerActions} /> : null}
            </div>
        );
    }

    render() {
        const {
            className,
            style,
            contentClass,
            children,
            waitShowEvent,
        } = this.props;

        const loading = waitShowEvent && !this.state.showed;
        return (
            <div ref={waitShowEvent ? this._ref : undefined} className={classes('modal-dialog', className, loading ? 'loading' : '')} style={style}>
                <div className={classes('modal-content', contentClass)}>
                    {this.renderHeader()}
                    {this.renderActions()}
                    {this.renderBody()}
                    {children}
                    {this.renderFooter()}
                </div>
                {loading ? <div class="load-indicator loading" /> : null}
            </div>
        );
    }
}
