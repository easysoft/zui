import {h as _h, isValidElement, ComponentChildren, JSX} from 'preact';
import {classes, ClassNameLike} from '@zui/browser-helpers/src/classes';

export type CustomRenderResultItem = Partial<{
    html: string;
    __html: string;
    style: JSX.CSSProperties;
    className: ClassNameLike;
    children: ComponentChildren;
    attrs: JSX.HTMLAttributes<HTMLElement>;
    [prop: string]: unknown;
}>;

export type CustomRenderResultGenerator<T extends Array<unknown> = unknown[]> = (result: ComponentChildren[], ...args: T) => ComponentChildren[];

export type CustomRenderResult<T extends Array<unknown> = unknown[]> = CustomRenderResultGenerator<T> | CustomRenderResultItem | ComponentChildren;

export type CustomRenderResultList<T extends Array<unknown> = unknown[]> = CustomRenderResult<T>[];

export type CustomRenderProps<T extends Array<unknown> = unknown[]> = {
    tag?: string;
    className: ClassNameLike;
    style: JSX.CSSProperties;
    renders: CustomRenderResultList;
    generateArgs?: T;
    onGenerate?: (generator: CustomRenderResultGenerator, result: ComponentChildren[], ...args: T) => ComponentChildren[];
    onRenderItem?: (item: CustomRenderResultItem) => CustomRenderResultItem;
};

export function renderCustomResult<T extends HTMLElement = HTMLElement>(props: CustomRenderProps): [JSX.HTMLAttributes<T>, ComponentChildren[]] {
    const {
        tag,
        className,
        style,
        renders,
        generateArgs = [],
        onGenerate,
        onRenderItem,
        ...others
    } = props;
    const classList: ClassNameLike = [className];
    const rootStyle: JSX.CSSProperties = {...style};
    let result: ComponentChildren[] = [];
    const rawHtml: string[] = [];
    renders.forEach(render => {
        if (typeof render === 'function') {
            if (onGenerate) {
                result = onGenerate(render as CustomRenderResultGenerator, result, ...generateArgs);
            } else {
                result = render(result, ...generateArgs);
            }
        } else if (typeof render === 'object' && render && !isValidElement(render) && ('html' in render || '__html' in render || 'className' in render || 'style' in render || 'attrs' in render || 'children' in render)) {
            if (render.html) {
                result.push(
                    <div className={classes(render.className)} style={render.style} dangerouslySetInnerHTML={{__html: render.html}} {...((render.attrs ?? {}) as unknown as JSX.HTMLAttributes<HTMLDivElement>)}></div>,
                );
            } else if (render.__html) {
                rawHtml.push(render.__html);
            } else {
                if (render.style) {
                    Object.assign(rootStyle, render.style);
                }
                if (render.className) {
                    classList.push(render.className);
                }
                if (render.children) {
                    result.push(render.children);
                }
                if (render.attrs) {
                    Object.assign(others, render.attrs);
                }
            }
        } else {
            result.push(render);
        }
    });

    if (rawHtml.length) {
        Object.assign(others, {dangerouslySetInnerHTML: {__html: rawHtml}});
    }

    return [{
        className: classes(classList),
        style: rootStyle,
        ...others,
    }, result];
}

export function CustomRender({
    tag = 'div',
    ...props
}: CustomRenderProps) {
    const [attrs, children] = renderCustomResult(props);
    return _h(tag, attrs as unknown as Record<string, any>, ...children);
}
