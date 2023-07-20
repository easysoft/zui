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
            headingClass,
            titleClass,
            contentClass,
            arrowStyle,
            onlyInner,
        } = props;

        let contentView = <CustomContent key="content" content={content} />;
        if (contentClass || title) {
            contentView = <div key="content" className={contentClass}>{contentView}</div>;
        }

        const views: ComponentChild[] = [];
        const closeBtnView = closeBtn ? <button className="btn ghost square size-sm btn-close" data-dismiss="popover"><span className="close"></span></button> : null;
        if (title) {
            views.push(<div className={headingClass} key="heading">
                {title ? <div className={titleClass}>{title}</div> : null}
                {closeBtnView}
            </div>);
        } else {
            views.push(closeBtnView);
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
