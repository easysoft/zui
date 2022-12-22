import {classes} from '@zui/browser-helpers/src/classes';
import {Toolbar} from '@zui/toolbar/src/component/toolbar';
import {Component, isValidElement} from 'preact';
import {ModalDialogOptions} from '../types';

export class ModalDialog extends Component<ModalDialogOptions> {
    static defaultProps = {closeBtn: true};

    componentDidMount() {
        this.props.afterRender?.call(this, {firstRender: true});
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
            title,
        } = this.props;
        if (isValidElement(header)) {
            return header;
        }
        if (header === false || !title) {
            return null;
        }
        return (
            <div className="modal-header">
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
        } = this.props;
        if (!body) {
            return null;
        }
        if (isValidElement(body)) {
            return body;
        }
        return (
            <div className="modal-body">
                {body}
            </div>
        );
    }

    renderFooter() {
        const {
            footer,
            footerActions,
        } = this.props;
        if (isValidElement(footer)) {
            return footer;
        }
        if (footer === false || !footerActions) {
            return null;
        }
        return (
            <div className="modal-footer">
                {footerActions ? <Toolbar {...footerActions} /> : null}
            </div>
        );
    }

    render() {
        const {
            className,
            style,
            children,
        } = this.props;

        return (
            <div className={classes('modal-dialog', className)} style={style}>
                <div className="modal-content">
                    {this.renderHeader()}
                    {this.renderActions()}
                    {this.renderBody()}
                    {children}
                    {this.renderFooter()}
                </div>
            </div>
        );
    }
}
