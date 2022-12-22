import {classes} from '@zui/browser-helpers/src/classes';
import {Toolbar} from '@zui/toolbar/src/component/toolbar';
import {Component, isValidElement} from 'preact';
import {ModalDialogOptions} from '../types';

export class ModalDialog extends Component<ModalDialogOptions> {
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
        if (header === false) {
            return null;
        }
        if (isValidElement(header)) {
            return header;
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
        if (footer === false) {
            return null;
        }
        if (isValidElement(footer)) {
            return footer;
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
