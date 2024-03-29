import {h as _h, isValidElement, ComponentChildren, JSX, Attributes} from 'preact';
import {classes, ClassNameLike} from '../../helpers';

/**
 * @deprecated Use `CustomContent` instead.
 */
export type CustomRenderResultItem = Partial<{
    html: string;
    __html: string;
    style: JSX.CSSProperties;
    className: ClassNameLike;
    children: ComponentChildren;
    attrs: JSX.HTMLAttributes<HTMLElement>;
    [prop: string]: unknown;
}>;

/**
 * @deprecated Use `CustomContent` instead.
 */
export type CustomRenderResultGenerator<T extends Array<unknown> = unknown[], THIS = unknown> = (this: THIS, result: ComponentChildren[], ...args: T) => (ComponentChildren | CustomRenderResultItem)[] | undefined | void;

/**
 * @deprecated Use `CustomContent` instead.
 */
export type CustomRenderResult<T extends Array<unknown> = unknown[], THIS = unknown> = CustomRenderResultGenerator<T, THIS> | CustomRenderResultItem | ComponentChildren;

/**
 * @deprecated Use `CustomContent` instead.
 */
export type CustomRenderResultList<T extends Array<unknown> = unknown[], THIS = unknown> = CustomRenderResult<T, THIS>[];

/**
 * @deprecated Use `CustomContent` instead.
 */
export type CustomRenderProps<T extends Array<unknown> = unknown[], THIS = unknown> = {
    tag?: string;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    renders: CustomRenderResultList;
    generateArgs?: T;
    generators?: Record<string, CustomRenderResult<T, THIS>>;
    generatorThis?: THIS;
    onGenerate?: (this: THIS, generator: CustomRenderResultGenerator<T>, result: ComponentChildren[], ...args: T) => (ComponentChildren | CustomRenderResultItem)[];
    onRenderItem?: (item: CustomRenderResultItem) => ComponentChildren;
    children?: ComponentChildren;
};

/**
 * @deprecated Use `renderCustomContent` instead.
 */
export function renderCustomResult<T extends HTMLElement = HTMLElement>(props: CustomRenderProps): [JSX.HTMLAttributes<T>, ComponentChildren[]] {
    const {
        tag,
        className,
        style,
        renders,
        generateArgs = [],
        generatorThis,
        generators,
        onGenerate,
        onRenderItem,
        ...others
    } = props;
    const classList: ClassNameLike = [className];
    const rootStyle: JSX.CSSProperties = {...style};
    const result: ComponentChildren[] = [];
    const rawHtml: string[] = [];
    renders.forEach(render => {
        const items: (CustomRenderResultItem | ComponentChildren)[] = [];
        if (typeof render === 'string' && generators && generators[render]) {
            render = generators[render];
        }
        if (typeof render === 'function') {
            if (onGenerate) {
                items.push(...onGenerate.call(generatorThis, render as CustomRenderResultGenerator, result, ...generateArgs));
            } else {
                const renderResult = (render as CustomRenderResultGenerator).call(generatorThis, result, ...generateArgs);
                if (renderResult) {
                    if (Array.isArray(renderResult)) {
                        items.push(...renderResult);
                    } else {
                        items.push(renderResult);
                    }
                }
            }
        } else {
            items.push(render);
        }
        items.forEach(item => {
            if (item === undefined || item === null) {
                return;
            }
            if (typeof item === 'object' && !isValidElement(item) && ('html' in item || '__html' in item || 'className' in item || 'style' in item || 'attrs' in item || 'children' in item)) {
                if (item.html) {
                    result.push(
                        <div className={classes(item.className)} style={item.style} dangerouslySetInnerHTML={{__html: item.html}} {...((item.attrs ?? {}) as unknown as JSX.HTMLAttributes<HTMLDivElement>)}></div>,
                    );
                } else if (item.__html) {
                    rawHtml.push(item.__html);
                } else {
                    if (item.style) {
                        Object.assign(rootStyle, item.style);
                    }
                    if (item.className) {
                        classList.push(item.className);
                    }
                    if (item.children) {
                        result.push(item.children);
                    }
                    if (item.attrs) {
                        Object.assign(others, item.attrs);
                    }
                }
            } else {
                result.push(item);
            }
        });
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

/**
 * @deprecated Use `CustomContent` instead.
 */
export function CustomRender({
    tag = 'div',
    ...props
}: CustomRenderProps) {
    const [attrs, children] = renderCustomResult(props);
    return _h(tag, attrs as Attributes, ...children);
}
