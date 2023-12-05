import {toChildArray} from 'preact';
import {CustomContent, HElement, Icon, classes, mergeProps} from '@zui/core';
import {Avatar} from '@zui/avatar/src/component';
import {Toolbar} from '@zui/toolbar/src/component';
import {Checkbox} from '@zui/checkbox/src/component';

import type {ComponentChild, ComponentChildren, ComponentType, JSX, RenderableProps} from 'preact';
import type {ListitemProps} from '../types';

export class Listitem<P extends ListitemProps = ListitemProps, S = {}> extends HElement<P, S> {
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

    protected _renderContent(props: RenderableProps<P>, linkRendered?: boolean): ComponentChild[] {
        const {
            textClass,
            titleClass,
            titleAttrs,
            subtitle,
            subtitleClass,
            url,
            target,
            content,
            contentClass,
            contentAttrs,
        } = props;
        const titleAsLink = url && !linkRendered;
        const TitleComponent = titleAsLink ? 'a' : 'div';
        let {title, text} = props;
        if (title === undefined) {
            title = text;
            text = null;
        }
        return [
            <div className={classes('item-content', contentClass)} key="content" {...contentAttrs}>
                {title ? <TitleComponent key="title" className={classes('item-title', titleClass)} href={titleAsLink ? url : undefined} target={titleAsLink ? target : undefined} {...titleAttrs}><CustomContent content={title} /></TitleComponent> : null}
                {subtitle ? <div key="subtitle" className={classes('item-subtitle', subtitleClass)}><CustomContent content={subtitle} /></div> : null}
                {text ? <div key="text" className={classes('item-text text', textClass)}>{text}</div> : null}
                {content ? <CustomContent key="extraContent" content={content} /> : null}
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
        } = props;
        const contents: ComponentChild[] = [];
        if (trailingIcon) {
            contents.push(<Icon key="trailing-icon" className="item-trailing-icon" icon={trailingIcon} />);
        }
        if (actions) {
            contents.push(Toolbar.render(actions, [props], {key: 'actions', relativeTarget: props, size: 'sm'}, this));
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

    protected _render(props: RenderableProps<P>, extraAttrs?: Record<string, unknown>): ComponentChild {
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
            hint,
            selected,
        } = props;
        const ComponentName = innerComponent || ((url && !actions) ? 'a' : 'div');
        const asLink = ComponentName === 'a';
        const attrs = mergeProps({
            key: 'item',
            title: hint,
            className: classes('listitem', innerClass, {
                active,
                disabled,
                'has-divider': divider,
                selected,
                checked,
                multiline: multiline ?? !!(title && subtitle),
                state: asLink && !disabled,
            }),
        }, asLink ? {href: url, target} : null, extraAttrs, innerAttrs);
        return (
            <ComponentName {...attrs}>
                {this._renderLeading(props)}
                {this._renderContent(props, asLink)}
                {this._renderTrailing(props)}
            </ComponentName>
        );
    }

    protected _onRender(component: ComponentType | keyof JSX.IntrinsicElements, componentProps: Record<string, unknown>, children: ComponentChildren, _props: RenderableProps<P>): void | [component: ComponentType | keyof JSX.IntrinsicElements, componentProps: Record<string, unknown>, children: ComponentChildren] {
        const innerAttrs = Object.keys(componentProps).reduce<Record<string, unknown>>((attrs, key) => {
            if (key.startsWith('data-')) {
                attrs[key] = componentProps[key];
                delete componentProps[key];
            }
            return attrs;
        }, {});
        return [component, componentProps, [this._render(_props, innerAttrs), ...toChildArray(children)]];
    }
}
