import {CustomContent, HElement, Icon, classes, $} from '@zui/core';
import {Avatar} from '@zui/avatar/src/component';
import {Button} from '@zui/button/src/component/button';
import {Checkbox} from '@zui/checkbox/src/component';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {ListItemProps} from '../types';

export class ListItem<P extends ListItemProps = ListItemProps, S = {}> extends HElement<P, S> {
    static defaultProps = {
        hover: true,
    };

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return props.rootClass;
    }

    protected _beforeRender(props: RenderableProps<P>): void | RenderableProps<P> | undefined {
        const {title, subtitle, multiline} = props;
        if (multiline === undefined) {
            return $.extend({
                multiline: !!(title && subtitle),
            }, props);
        }
        return props;
    }

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
            contents.push(<Checkbox key="checkbox" className="list-item-checkbox" checked={checked} {...checkbox} />);
        }
        if (icon) {
            contents.push(<Icon key="icon" className="list-item-icon" icon={icon} />);
        }
        if (avatar) {
            contents.push(<Avatar key="avatar" {...avatar} className={classes('list-item-avatar', avatar.className)} />);
        }
        const customLeading = leading ? <CustomContent key="leading" content={leading} /> : null;
        if (multiline) {
            if (customLeading) {
                contents.push(customLeading);
            }
            return contents.length ? [
                <div key="leading" className={classes('list-item-leading', leadingClass)}>{contents}</div>,
            ] : [];
        }
        if (customLeading) {
            contents.push(<div key="leading" className={classes('list-item-leading', leadingClass)}>{customLeading}</div>);
        }
        return contents;
    }

    protected _renderContent(props: RenderableProps<P>): ComponentChild[] {
        const {
            multiline,
            text,
            textClass,
            title,
            titleClass,
            subtitle,
            subtitleClass,
            url,
            actions,
            target,
        } = props;
        const titleAsLink = url && actions;
        const TitleComponent = titleAsLink ? 'a' : 'div';
        const contents: ComponentChild[] = [
            title ? <TitleComponent key="title" className={classes('list-item-title', titleClass)} href={titleAsLink ? url : undefined} target={titleAsLink ? target : undefined}>{title}</TitleComponent> : null,
            subtitle ? <div key="subtitle" className={classes('list-item-subtitle', subtitleClass)}>{subtitle}</div> : null,
            text ? <div key="text" className={classes('list-item-text', textClass)}>{text}</div> : null,
        ];
        if (!multiline) {
            return contents;
        }
        return [
            <div className="list-item-content" key="content">
                {contents}
            </div>,
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
        } = props;
        const contents: ComponentChild[] = [];
        if (trailingIcon) {
            contents.push(<Icon key="trailing-icon" className="list-item-trailing-icon" icon={trailingIcon} />);
        }
        if (actions?.length) {
            contents.push(<div key="actions" className={classes('list-item-actions', actionsClass)}>{
                actions.map((action, index) => <Button key={index} type="ghost" size="sm" {...action} />)
            }</div>);
        }
        const customTrailing = trailing ? <CustomContent key="trailing" content={trailing} /> : null;
        if (multiline) {
            if (customTrailing) {
                contents.push(customTrailing);
            }
            return contents.length ? [
                <div key="trailing" className={classes('list-item-trailing', trailingClass)}>{contents}{customTrailing}</div>,
            ] : [];
        }
        if (customTrailing) {
            contents.push(<div key="trailing" className={classes('list-item-trailing', trailingClass)}>{customTrailing}</div>);
        }
        return contents;
    }

    protected _render(props: RenderableProps<P>): ComponentChild {
        const {
            className,
            class: className2,
            url,
            actions,
            target,
            active,
            disabled,
            divider,
            checked,
            multiline,
            hover,
        } = props;
        const asLink = url && !actions;
        const ComponentName = asLink ? 'a' : 'div';
        const classList = classes(className, className2, {
            active,
            disabled,
            'has-divider': divider,
            'has-hover state': hover,
            checked,
            multiline,
        });
        return (
            <ComponentName key="item" className={classList} href={asLink ? url : undefined} target={asLink ? target : undefined}>
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
