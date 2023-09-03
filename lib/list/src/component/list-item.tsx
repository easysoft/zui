import {CustomContent, HElement, Icon, classes, $} from '@zui/core';
import {Avatar} from '@zui/avatar/src/component';
import {Button} from '@zui/button/src/component/button';
import {Checkbox} from '@zui/checkbox/src/component';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {ListItemProps} from '../types';

export class ListItem<P extends ListItemProps = ListItemProps, S = {}> extends HElement<P, S> {
    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        const {active, disabled, divider, checked, multiline} = props;
        return [props.className, {
            active,
            disabled,
            'has-divider': divider,
            checked,
            multiline,
        }];
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        const {component, target, url} = props;
        const propsMap = super._getProps(props);
        const isLink = component === 'a';
        if (url) {
            propsMap[isLink ? 'href' : 'data-url'] = url;
        }
        if (target) {
            propsMap[isLink ? 'target' : 'data-target'] = target;
        }
        return propsMap;
    }

    protected _beforeRender(props: RenderableProps<P>): void | RenderableProps<P> | undefined {
        const {component, url} = props;
        if (component === undefined) {
            return $.extend({
                component: url ? 'a' : 'div',
            }, props);
        }
        return props;
    }

    protected _renderLeading(props: RenderableProps<P>): ComponentChild[] {
        const {
            icon,
            avatar,
            leading,
            leadingClass,
            checked,
            checkbox,
            multiline,
        } = props;
        const contents: ComponentChild[] = [
            checked !== undefined ? <Checkbox key="checkbox" checked={checked} {...checkbox} /> : null,
            <Icon key="icon" icon={icon} />,
            avatar ? <Avatar key="avatar" {...avatar} /> : null,
        ];
        const customLeading = leading ? <CustomContent key="leading" content={leading} /> : null;
        if (multiline) {
            return [
                <div key="leading" className={classes('list-item-leading', leadingClass)}>{contents}{customLeading}</div>,
            ];
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
        } = props;
        const contents: ComponentChild[] = [
            title ? <div key="title" className={classes('list-item-title', titleClass)}>{title}</div> : null,
            subtitle ? <div key="subtitle" className={classes('list-item-subtitle', subtitleClass)}>{subtitle}</div> : null,
            text ? <div key="text" className={classes('list-item-text', textClass)}>{text}</div> : null,
        ];

        if (!multiline) {
            return contents;
        }
        return [
            <div key="content">
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
        const contents: ComponentChild[] = [
            trailingIcon ? <Icon key="trailing-icon" icon={trailingIcon} /> : null,
            actions ? (
                <div key="actions" className={classes('list-item-actions', actionsClass)}>{
                    actions.map((action, index) => <Button key={index} type="ghost" size="sm" {...action} />)
                }</div>
            ) : null,
        ];
        const customTrailing = trailing ? <CustomContent key="trailing" content={trailing} /> : null;
        if (multiline) {
            return [
                <div key="trailing" className={classes('list-item-trailing', trailingClass)}>{contents}{customTrailing}</div>,
            ];
        }
        if (customTrailing) {
            contents.push(<div key="trailing" className={classes('list-item-trailing', trailingClass)}>{customTrailing}</div>);
        }
        return contents;
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        return [
            ...this._renderLeading(props),
            ...this._renderContent(props),
            ...this._renderTrailing(props),
            props.children,
        ];
    }
}
