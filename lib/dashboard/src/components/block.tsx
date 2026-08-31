import {$, HtmlContent, classes} from '@zui/core';
import {Toolbar} from '@zui/toolbar/react';
import '@zui/css-icons';
import type {BlockProps} from '../types';

export type BlockState = {
    dragging?: boolean;
};

export function Block(props: BlockProps) {
    const {left, className, top, id, onMenuBtnClick, title, width, height, content, loading, draggable = true, toolbar} = props;
    const hasActions = !!toolbar || !!onMenuBtnClick;
    return (
        <div className="dashboard-block-cell" style={{left, top, width, height}}>
            <div
                className={classes('dashboard-block load-indicator', (loading && !content) ? 'loading' : '', onMenuBtnClick ? 'has-more-menu' : '', className)}
                draggable={draggable}
                data-id={id}
            >
                <div className="dashboard-block-header">
                    <div className="dashboard-block-title">{title}</div>
                    {hasActions ? (
                        <div className="dashboard-block-actions">
                            {toolbar ? <Toolbar {...toolbar} className={classes('dashboard-block-toolbar', toolbar.className)} /> : null}
                            {onMenuBtnClick ? <button type="button" className="toolbar-item dashboard-block-action btn square ghost rounded size-sm" data-type="more" onClick={onMenuBtnClick}><div className="more-vert"></div></button> : null}
                        </div>
                    ) : null}
                </div>
                {$.isPlainObject(content) && typeof (content as {html?: unknown}).html === 'string' ? <HtmlContent className="dashboard-block-body" executeScript {...(content as {html: string})} /> : (
                    <div className="dashboard-block-body">{content}</div>
                )}
            </div>
        </div>
    );
}
