import {Component, ComponentChild} from 'preact';
import {PopoverPanelOptions} from '../types';
import {classes, CustomContent} from '@zui/core';
import '@zui/css-icons/src/icons/arrow.css';
import '@zui/css-icons/src/icons/close.css';

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
            footer,
            footerClass,
        } = props;

        let contentView = <CustomContent key="content" content={content} />;
        if (contentClass || title) {
            contentView = <div key="content" className={contentClass}>{contentView}</div>;
        }

        let footerView = <CustomContent key="footer" content={footer} />;
        if (footerClass || title) {
            footerView = <div key="footer" className={footerClass}>{footerView}</div>;
        }

        const views: ComponentChild[] = [];
        const closeBtnView = closeBtn ? <button className="btn ghost square size-sm btn-close" data-dismiss="popover"><span className="close"></span></button> : null;
        if (title) {
            views.push(<div className={headingClass} key="heading">
                {title ? <CustomContent className={titleClass} content={title} /> : null}
                {closeBtnView}
            </div>);
        } else {
            views.push(closeBtnView);
        }
        views.push(contentView, footerView);
        if (arrow) {
            views.push(<div key="arrow" className={typeof arrow === 'string' ? arrow : 'arrow'} style={arrowStyle}></div>);
        }

        if (onlyInner) {
            return views;
        }

        return (
            <div id={id} className={classes('popover', className, {popup, 'has-heading': title})} style={style}>
                {views}
            </div>
        );
    }
}
