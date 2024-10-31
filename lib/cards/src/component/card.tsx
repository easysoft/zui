import {ClassNameLike, CustomContent, HElement, Icon, classes, mergeProps} from '@zui/core';
import {Avatar} from '@zui/avatar/src/component';
import {Toolbar} from '@zui/toolbar/src/component';
import {List} from '@zui/list/src/component';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {CardProps} from '../types';

export class Card<P extends CardProps = CardProps, S = {}> extends HElement<P, S> {
    protected _renderContent(props: RenderableProps<P>): ComponentChildren {
        const {
            subtitle,
            subtitleClass,
            content,
            contentClass,
        } = props;
        if (!subtitle && !content) {
            return;
        }
        return [
            <div className={classes('card-content', contentClass)} key="content">
                {subtitle ? <div key="subtitle" className={classes('card-subtitle', subtitleClass)}><CustomContent content={subtitle} /></div> : null}
                {content ? <CustomContent key="extraContent" content={content} /> : null}
            </div>,
        ];
    }

    protected _renderHeading(props: RenderableProps<P>): ComponentChildren {
        const {
            icon,
            prefix,
            prefixClass,
            title,
            titleClass,
            titleUrl,
            titleAttrs,
            suffix,
            suffixClass,
            heading,
            headingClass,
        } = props;
        if (!icon && !prefix && !title && !suffix && !heading) {
            return;
        }
        const TitleComponent = titleUrl ? 'a' : 'span';
        return (
            <div className={classes('card-heading', headingClass)}>
                {icon ? <Icon key="icon" className="card-icon" icon={icon} /> : null}
                {prefix ? <CustomContent key="prefix" className={classes('card-prefix', prefixClass)} content={prefix} /> : null}
                {title ? <TitleComponent key="title" className={classes('card-title', titleClass)} href={titleUrl} {...titleAttrs}><CustomContent content={title} /></TitleComponent> : null}
                {suffix ? <CustomContent key="suffix" className={classes('card-suffix', suffixClass)} content={suffix} /> : null}
                {heading ? <CustomContent key="extraHeading" content={heading} /> : null}
            </div>
        );
    }

    protected _renderHeader(props: RenderableProps<P>): ComponentChildren {
        const {
            header,
            headerClass,
        } = props;
        if (header) {
            return <div className={classes('card-header', headerClass)}><CustomContent key="header" content={header} /></div>;
        }
    }

    protected _renderFooter(props: RenderableProps<P>): ComponentChildren {
        const {
            footer,
            footerClass,
            footActions,
        } = props;
        if (footer || footActions) {
            return (<div className={classes('card-footer', footerClass)}>
                <CustomContent key="footer" content={footer} />
                {Toolbar.render(footActions, [props], {key: 'foot-actions', relativeTarget: props, className: 'card-foot-actions', size: 'sm'}, this)}
            </div>);
        }
    }

    protected _renderActions(props: RenderableProps<P>): ComponentChildren {
        return Toolbar.render(props.actions, [props], {key: 'actions', relativeTarget: props, className: 'card-actions', size: 'sm'}, this);
    }

    protected _renderList(props: RenderableProps<P>): ComponentChildren {
        const {items} = props;
        if (!items) {
            return;
        }
        const listProps = mergeProps({key: 'list', className: 'card-list'}, typeof items === 'object' ? items : {items});
        return <List {...listProps} />;
    }

    protected _renderAvatar(props: RenderableProps<P>): ComponentChildren {
        const {
            avatar,
        } = props;
        if (avatar) {
            const avatarProps = typeof avatar === 'function' ? avatar.call(this, props) : avatar;
            if (avatarProps) {
                avatarProps.className = classes('item-avatar', avatarProps.className);
                return <Avatar key="avatar" {...avatarProps} />;
            }
        }
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return ['card', props.className, props.selected ? 'selected' : ''];
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        return [
            this._renderActions(props),
            this._renderHeader(props),
            this._renderAvatar(props),
            this._renderHeading(props),
            this._renderContent(props),
            this._renderList(props),
            this._renderFooter(props),
            props.children,
        ];
    }
}
