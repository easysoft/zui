import {CustomContent, HElement, Icon, classes, $, mergeProps} from '@zui/core';
import {Avatar} from '@zui/avatar/src/component';
import {Button} from '@zui/button/src/component/button';
import {Checkbox} from '@zui/checkbox/src/component';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ListItemProps} from '../types';

export class ListItem<P extends ListItemProps = ListItemProps, S = {}> extends HElement<P, S> {
    protected _renderLeading(props: RenderableProps<P>): ComponentChild[] {
        const {
            icon,
            avatar,
            toggleIcon,
            leading,
            leadingClass,
            checked,
            checkbox,
            multiline,
        } = props;
        const contents: ComponentChild[] = [];
        if (toggleIcon) {
            contents.push(<CustomContent key="toggleIcon" content={toggleIcon} />);
        }
        if (checked !== undefined) {
            contents.push(<Checkbox key="checkbox" className="item-checkbox" checked={checked} {...checkbox} />);
        }
        if (icon) {
            contents.push(<Icon key="icon" className="item-icon" icon={icon} />);
        }
        if (avatar) {
            const avatarProps = typeof avatar === 'function' ? avatar.call(this, props) : avatar;
            if (avatarProps) {
                avatarProps.className = classes('item-avatar', avatarProps.className);
                contents.push(<Avatar key="avatar" {...avatarProps} />);
            }
        }
        const customLeading = leading ? <CustomContent key="leading" content={leading} /> : null;
        if (customLeading) {
            contents.push(customLeading);
        }
        if (multiline) {
            return contents.length ? [
                <div key="leading" className={classes('item-leading', leadingClass)}>{contents}</div>,
            ] : [];
        }
        return contents;
    }

    protected _renderContent(props: RenderableProps<P>): ComponentChild[] {
        const {
            textClass,
            titleClass,
            subtitle,
            subtitleClass,
            url,
            actions,
            target,
            content,
        } = props;
        const titleAsLink = url && actions;
        const TitleComponent = titleAsLink ? 'a' : 'div';
        let {title, text} = props;
        if (title === undefined) {
            title = text;
            text = null;
        }
        const contents: ComponentChild[] = [
            title ? <TitleComponent key="title" className={classes('item-title', titleClass)} href={titleAsLink ? url : undefined} target={titleAsLink ? target : undefined}>{title}</TitleComponent> : null,
            subtitle ? <div key="subtitle" className={classes('item-subtitle', subtitleClass)}>{subtitle}</div> : null,
            text ? <div key="text" className={classes('item-text text', textClass)}>{text}</div> : null,
        ];
        return [
            <div className="item-content" key="content">
                {contents}
            </div>,
            content ? <CustomContent key="extraContent" content={content} /> : null,
        ];
    }

    protected _renderTrailing(props: RenderableProps<P>): ComponentChild[] {
        const {
            multiline,
            trailing,
            trailingClass,
            trailingIcon,
            actions,
            actionsClass,
            actionsAttrs,
        } = props;
        const contents: ComponentChild[] = [];
        if (trailingIcon) {
            contents.push(<Icon key="trailing-icon" className="item-trailing-icon" icon={trailingIcon} />);
        }
        if (actions?.length) {
            contents.push(<div key="actions" className={classes('item-actions toolbar', actionsClass)} {...actionsAttrs}>{
                actions.map((action, index) => <Button key={index} type="ghost" size="sm" {...action} />)
            }</div>);
        }
        const customTrailing = trailing ? <CustomContent key="trailing" content={trailing} /> : null;
        if (customTrailing) {
            contents.push(customTrailing);
        }
        if (multiline) {
            return contents.length ? [
                <div key="trailing" className={classes('item-trailing', trailingClass)}>{contents}{customTrailing}</div>,
            ] : [];
        }
        return contents;
    }

    protected _render(props: RenderableProps<P>): ComponentChild {
        const {
            innerComponent,
            innerClass,
            innerAttrs,
            url,
            actions,
            target,
            active,
            disabled,
            divider,
            checked,
            multiline,
            title,
            subtitle,
            hover,
        } = props;
        const ComponentName = innerComponent || ((url && !actions) ? 'a' : 'div');
        const asLink = ComponentName === 'a';
        const attrs = mergeProps({
            key: 'item',
            className: classes('listitem', innerClass, {
                active,
                disabled,
                'has-divider': divider,
                'has-hover state': hover,
                checked,
                multiline: multiline ?? !!(title && subtitle),
                state: asLink,
            }),
            href: asLink ? url : undefined,
            target: asLink ? target : undefined,
        }, innerAttrs);
        return (
            <ComponentName {...attrs}>
                {this._renderLeading(props)}
                {this._renderContent(props)}
                {this._renderTrailing(props)}
            </ComponentName>
        );
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        return [
            this._render(props),
            props.children,
        ];
    }
}
