import {$, HtmlContent, classes} from '@zui/core';
import '@zui/css-icons/src/icons/more.css';
import type {BlockProps} from '../types';

export type BlockState = {
    dragging?: boolean;
};

export function Block(props: BlockProps) {
    const {left, className, top, id, onMenuBtnClick, title, width, height, content, loading, draggable = true} = props;
    return (
        <div class="dashboard-block-cell" style={{left, top, width, height}}>
            <div
                className={classes('dashboard-block load-indicator', (loading && !content) ? 'loading'  : '', onMenuBtnClick ? 'has-more-menu' : '', className)}
                draggable={draggable}
                data-id={id}
            >
                <div class="dashboard-block-header">
                    <div class="dashboard-block-title">{title}</div>
                    {onMenuBtnClick ? (<div class="dashboard-block-actions toolbar">
                        <button class="toolbar-item dashboard-block-action btn square ghost rounded size-sm" data-type="more" onClick={onMenuBtnClick}><div class="more-vert"></div></button>
                    </div>) : null}
                </div>
                {$.isPlainObject(content) && (content as {html?: string}).html ? <HtmlContent className="dashboard-block-body" executeScript {...(content as {html: string})} /> : (
                    <div class="dashboard-block-body">{content}</div>
                )}
            </div>
        </div>
    );
}
