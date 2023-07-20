import {Component, ComponentChild} from 'preact';
import {PopoverPanelOptions} from '../types';
import {classes, CustomContent} from '@zui/core';

export class PopoverPanel extends Component<PopoverPanelOptions> {
    render(props: PopoverPanelOptions) {
        const {
            id,
            popup,
            title,
            content,
            style,
            className,
            closeBtn,
            arrow,
            headingClass = 'popover-heading',
            titleClass = 'popover-title',
            contentClass = 'popover-content',
            arrowStyle,
            onlyInner,
        } = props;

        let contentView = <CustomContent key="content" content={content} />;
        if (contentClass) {
            contentView = <div key="content" className={contentClass}>{contentView}</div>;
        }

        const views: ComponentChild[] = [];
        if (title || closeBtn) {
            views.push(<div className={headingClass} key="heading">
                {title ? <div className={titleClass}>{title}</div> : null}
                {closeBtn ? <button className="btn ghost square size-sm" data-dismiss="popover"><span className="close"></span></button> : null}
            </div>);
        }
        views.push(contentView);
        if (arrow) {
            views.push(<div key="arrow" className={typeof arrow === 'string' ? arrow : 'arrow'} style={arrowStyle}></div>);
        }

        if (onlyInner) {
            return views;
        }

        return (
            <div id={id} className={classes('popover', className, {popup})} style={style}>
                {views}
            </div>
        );
    }
}
