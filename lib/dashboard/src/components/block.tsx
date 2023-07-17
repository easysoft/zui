import {Component} from 'preact';
import {$, HtmlContent} from '@zui/core';
import '@zui/css-icons/src/icons/more.css';
import type {BlockProps} from '../types';

export type BlockState = {
    dragging?: boolean;
};

export class Block extends Component<BlockProps, BlockState> {
    protected _onDragStart = (event: DragEvent) => {
        const element = (event.target as HTMLElement).closest('.dashboard-block');
        if (!element) {
            return;
        }
        const bounding = element.getBoundingClientRect();
        if ((event.clientY - bounding.top) > 48) {
            event.preventDefault();
            return;
        }
        this.setState({dragging: true});
        event.dataTransfer?.setData('application/id', this.props.id);
        this.props.onDragStart?.(event);
    };

    protected _onDragEnd = (event: DragEvent) => {
        this.setState({dragging: false});
        this.props.onDragEnd?.(event);
    };

    render() {
        const {left, top, id, onMenuBtnClick, title, width, height, content, loading} = this.props;
        const {dragging} = this.state;
        return (
            <div class="dashboard-block-cell" style={{left, top, width, height}}>
                <div
                    class={`dashboard-block load-indicator${(loading && !content) ? ' loading'  : ''}${onMenuBtnClick ? ' has-more-menu' : ''}${dragging ? ' is-dragging' : ''}`}
                    draggable
                    onDragStart={this._onDragStart}
                    onDragEnd={this._onDragEnd}
                    data-id={id}
                >
                    <div class="dashboard-block-header">
                        <div class="dashboard-block-title">{title}</div>
                        {onMenuBtnClick ? (<div class="dashboard-block-actions toolbar">
                            <button class="toolbar-item dashboard-block-action btn square ghost rounded size-sm" data-type="more" onClick={onMenuBtnClick}><div class="more-vert"></div></button>
                        </div>) : null}
                    </div>
                    {$.isPlainObject(content) && (content as {html?: string}).html ? <HtmlContent class="dashboard-block-body" executeScript {...(content as {html: string})} /> : (
                        <div class="dashboard-block-body">{content}</div>
                    )}
                </div>
            </div>
        );
    }
}
