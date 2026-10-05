import {$, CustomContent, HtmlContent, classes} from '@zui/core';
import {Toolbar} from '@zui/toolbar/react';
import '@zui/css-icons';
import type {HtmlContentProps} from '@zui/core';
import type {BlockProps} from '../types';

export type BlockState = {
    dragging?: boolean;
};

export function Block(props: BlockProps) {
    const {left, className, rootClass, headerClass, bodyClass, top, id, onMenuBtnClick, title, width, height, content, loading, draggable = true, toolbar} = props;
    const hasActions = !!toolbar || !!onMenuBtnClick;
    const hasTitle = title !== undefined && title !== null && title !== '';
    const htmlContent = $.isPlainObject(content) && typeof (content as {html?: unknown}).html === 'string' ? content as HtmlContentProps : undefined;
    return (
        <div className={classes('dashboard-block-cell', rootClass)} style={{left, top, width, height}}>
            <div
                className={classes('dashboard-block load-indicator', (loading && !content) ? 'loading' : '', onMenuBtnClick ? 'has-more-menu' : '', className)}
                draggable={draggable}
                data-id={id}
            >
                {hasTitle || hasActions ? (
                    <div className={classes('dashboard-block-header', headerClass)}>
                        <div className="dashboard-block-title">{title}</div>
                        {hasActions ? (
                            <div className="dashboard-block-actions">
                                {toolbar ? <Toolbar {...toolbar} className={classes('dashboard-block-toolbar', toolbar.className)} /> : null}
                                {onMenuBtnClick ? <button type="button" className="toolbar-item dashboard-block-action btn square ghost rounded size-sm" data-type="more" onClick={onMenuBtnClick}><div className="more-vert"></div></button> : null}
                            </div>
                        ) : null}
                    </div>
                ) : null}
                {htmlContent ? (
                    <HtmlContent executeScript {...htmlContent} className={classes('dashboard-block-body', bodyClass, htmlContent.className)} />
                ) : (
                    <div className={classes('dashboard-block-body', bodyClass)}>
                        <CustomContent executeScript content={content} />
                    </div>
                )}
            </div>
        </div>
    );
}
