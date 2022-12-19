import {classes} from '@zui/browser-helpers/src/classes';
import {Toolbar} from '@zui/toolbar/src/component/toolbar';
import {Component} from 'preact';
import {ModalDialogProps} from '../types';

export class ModalDialog extends Component<ModalDialogProps> {
    renderHeader() {
        const {
            header,
            title,
        } = this.props;
        if (header !== undefined) {
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
            children,
        } = this.props;
        return (
            <div className="modal-body">
                {children}
            </div>
        );
    }

    renderFooter() {
        const {
            footer,
            footerActions,
        } = this.props;
        if (footer !== undefined) {
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
        } = this.props;

        return (
            <div className={classes('modal-dialog', className)} style={style}>
                <div className="modal-content">
                    {this.renderHeader()}
                    {this.renderActions()}
                    {this.renderBody()}
                    {this.renderFooter()}
                </div>
            </div>
        );
    }
}
