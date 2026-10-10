import {h, isValidElement} from 'preact';
import createDOMPurify from 'dompurify';
import {CustomContent, HElement, HtmlContent, LazyContent, getReactComponent} from '@zui/core';
import type {ComponentType, ComponentChildren} from 'preact';
import type {ContentRenderPolicy, CustomContentType, LazyContentProps} from '@zui/core';
import {JsonUIError} from './types';
import type {JsonUICapabilities, JsonUIMarkdown, JsonUIOptions} from './types';

const elementFields = new Set(['tag', 'component', 'key', 'props', 'children', 'events']);
const htmlFields = new Set(['html', 'tag', 'key', 'props', 'executeScript']);
const markdownFields = new Set(['markdown', 'inline', 'key', 'props']);
const lazyFields = new Set(['fetcher', 'type', 'tag', 'key', 'props', 'executeScript', 'loadingContent', 'loadingText', 'errorText', 'clearBeforeLoad', 'loadingIndicator']);
const htmlTags = new Set('a abbr address area article aside audio b bdi bdo blockquote br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header hgroup hr i img input ins kbd label legend li main map mark menu meter nav noscript ol optgroup option output p picture pre progress q rp rt ruby s samp search section select slot small source span strong sub summary sup table tbody td textarea tfoot th thead time tr track u ul var video wbr'.split(' '));
const forbiddenKeys = new Set(['__proto__', 'prototype', 'constructor', '__k', '__v', '__e']);
const hostProps = new Set(['capabilities', 'actions', 'allowRequest', 'onError', 'renderMarkdown']);
const callbackProps = new Set(['transformContent', 'generatorThis', 'generatorArgs', 'fetcherThis', 'fetcherArgs', 'forwardRef', 'ref']);

function isRecord(value: unknown): value is Record<string, unknown> {
    return !!value && typeof value === 'object' && !Array.isArray(value) && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
}

function fail(path: string, message: string): never {
    throw new JsonUIError(path, message);
}

function checkJSON(value: unknown, path: string, ancestors = new Set<object>(), depth = 0, budget = {remaining: 10000}): void {
    if (--budget.remaining < 0 || depth > 100) {
        fail(path, 'JSON exceeds the 100-level or 10000-value limit.');
    }
    if (value === null || typeof value === 'string' || typeof value === 'boolean' || (typeof value === 'number' && Number.isFinite(value))) {
        return;
    }
    if ((!Array.isArray(value) && !isRecord(value)) || ancestors.has(value as object)) {
        fail(path, 'Expected finite, acyclic JSON data.');
    }
    ancestors.add(value as object);
    Object.entries(value as object).forEach(([key, item]) => {
        if (forbiddenKeys.has(key)) {
            fail(`${path}.${key}`, 'This property is reserved.');
        }
        checkJSON(item, `${path}.${key}`, ancestors, depth + 1, budget);
    });
    ancestors.delete(value as object);
}

function checkTag(tag: unknown, path: string): asserts tag is string {
    if (typeof tag !== 'string' || !htmlTags.has(tag)) {
        fail(path, 'Expected a supported, passive HTML element name.');
    }
}

/** Internal per-view compiler and policy; does not maintain a component registry. */
export class JsonUIRuntime {
    readonly capabilities: Readonly<JsonUICapabilities>;

    readonly policy: ContentRenderPolicy;

    private _allowRequest?: JsonUIOptions['allowRequest'];

    private _compiled = new WeakSet<object>();

    private _paths = new WeakMap<object, string>();

    private _purify?: ReturnType<typeof createDOMPurify>;

    private _reportedErrors = new WeakSet<object>();

    constructor(public options: JsonUIOptions = {}) {
        this.capabilities = Object.freeze({...options.capabilities});
        this._allowRequest = options.allowRequest;
        this.policy = {
            resolveContent: content => this.resolveContent(content),
            prepareElement: (component, props) => this.prepareElement(component, props),
            prepareHTML: (html, executeScript, source) => this.prepareHTML(html, executeScript, source),
            prepareLazy: props => this.prepareLazy(props),
            renderError: error => this.renderError(error),
        };
    }

    compile(schema: unknown, path = '$'): CustomContentType {
        checkJSON(schema, path);
        return this._compileNode(structuredClone(schema), path);
    }

    private _remember<T extends object>(value: T, path: string): T {
        this._compiled.add(value);
        this._paths.set(value, path);
        return value;
    }

    private _compileNode(schema: unknown, path: string): CustomContentType {
        if (schema === null || typeof schema === 'string' || typeof schema === 'number') {
            return schema;
        }
        if (Array.isArray(schema)) {
            return this._remember(schema.map((node, index) => this._compileNode(node, `${path}[${index}]`)), path);
        }
        if (!isRecord(schema)) {
            fail(path, 'Expected a UI node, text, number, array or null.');
        }
        const isHTML = Object.hasOwn(schema, 'html');
        const isLazy = Object.hasOwn(schema, 'fetcher');
        const isMarkdown = Object.hasOwn(schema, 'markdown');
        const fields = isLazy ? lazyFields : isHTML ? htmlFields : isMarkdown ? markdownFields : elementFields;
        for (const name of Object.keys(schema)) {
            if (!fields.has(name)) {
                fail(`${path}.${name}`, 'Unknown UI node field.');
            }
        }
        if (schema.key !== undefined && typeof schema.key !== 'string' && typeof schema.key !== 'number') {
            fail(`${path}.key`, 'Expected a string or number.');
        }
        if (schema.tag !== undefined) {
            checkTag(schema.tag, `${path}.tag`);
        }
        if (schema.props !== undefined && !isRecord(schema.props)) {
            fail(`${path}.props`, 'Expected a JSON object.');
        }
        const props = {...schema.props as Record<string, unknown> | undefined};
        for (const name of Object.keys(props)) {
            if (callbackProps.has(name)) {
                fail(`${path}.props.${name}`, 'This property is owned by the host.');
            }
            if (/^on[A-Z]/.test(name)) {
                fail(`${path}.props.${name}`, 'Connect callbacks using events.');
            }
        }
        this._paths.set(props, `${path}.props`);
        if (isMarkdown) {
            if (typeof schema.markdown !== 'string') {
                fail(`${path}.markdown`, 'Expected a string.');
            }
            if (schema.inline !== undefined && typeof schema.inline !== 'boolean') {
                fail(`${path}.inline`, 'Expected a boolean.');
            }
            return this._remember({
                component: this._renderMarkdown,
                key: schema.key,
                props: {node: schema, path},
            }, path) as CustomContentType;
        }
        if (isHTML || isLazy) {
            if (schema.executeScript !== undefined && typeof schema.executeScript !== 'boolean') {
                fail(`${path}.executeScript`, 'Expected a boolean.');
            }
            // Content-node control fields only live at the node level.
            for (const name of [...htmlFields, ...lazyFields]) {
                if (!['tag', 'props', 'key'].includes(name) && Object.hasOwn(props, name)) {
                    fail(`${path}.props.${name}`, 'Put content controls on the UI node.');
                }
            }
            const contentProps = {...props, ...schema};
            delete contentProps.props;
            this._paths.set(contentProps, path);
            if (isHTML) {
                this._checkHTML(schema.html, schema.executeScript === true, 'html', path);
            } else {
                if (schema.loadingContent !== undefined) {
                    contentProps.loadingContent = this._compileNode(schema.loadingContent, `${path}.loadingContent`);
                }
                Object.assign(contentProps, this.prepareLazy(contentProps as unknown as LazyContentProps));
            }
            this._checkContainer(contentProps, path);
            return this._remember(contentProps, path) as CustomContentType;
        }
        if ((schema.tag === undefined) === (schema.component === undefined)) {
            fail(path, 'Specify exactly one of tag and component.');
        }
        let component: ComponentType | string;
        if (schema.tag !== undefined) {
            component = schema.tag as string;
        } else {
            if (typeof schema.component !== 'string') {
                fail(`${path}.component`, 'Expected a registered component name.');
            }
            component = getReactComponent(schema.component) ?? fail(`${path}.component`, `Component "${schema.component}" is not registered.`);
        }
        this._bindEvents(schema.events, path, props);
        const prepared = this.prepareElement(component, props);
        const node = {
            // Keep the validated name so already-loaded lazy trees also pick up
            // registry replacements on their next render without another request.
            ...(schema.tag ? {tag: schema.tag} : {component: schema.component}),
            key: schema.key,
            props: prepared.props,
            ...(Object.hasOwn(schema, 'children') ? {children: this._compileNode(schema.children, `${path}.children`)} : {}),
        };
        return this._remember(node, path) as CustomContentType;
    }

    private _renderMarkdown = ({node, path}: {node: JsonUIMarkdown; path: string}): ComponentChildren => {
        try {
            const {renderMarkdown} = this.options;
            return renderMarkdown ? renderMarkdown(node, path) : node.markdown;
        } catch (error) {
            return this.renderError(error instanceof JsonUIError ? error : new JsonUIError(path, error instanceof Error ? error.message : String(error)));
        }
    };

    private _bindEvents(events: unknown, path: string, props: Record<string, unknown>) {
        if (events !== undefined) {
            if (!isRecord(events)) {
                fail(`${path}.events`, 'Expected an event-to-action map.');
            }
            for (const [event, action] of Object.entries(events)) {
                if (!/^on[A-Z][a-zA-Z0-9]*$/.test(event)) {
                    fail(`${path}.events.${event}`, 'Expected a callback property such as onClick.');
                }
                this._getAction(action, `${path}.events.${event}`);
                const getAction = () => this._getAction(action, `${path}.events.${event}`);
                props[event] = function (this: unknown, ...args: unknown[]) {
                    return getAction().apply(this, args as never[]);
                };
            }
        }
    }

    private _getAction(action: unknown, path: string) {
        if (typeof action !== 'string' || !Object.hasOwn(this.options.actions ?? {}, action) || typeof this.options.actions?.[action] !== 'function') {
            fail(path, `Action "${String(action)}" is not registered.`);
        }
        return this.options.actions![action];
    }

    resolveContent(content: CustomContentType): CustomContentType {
        // VNodes/functions created by registered components remain host code.
        if (!content || typeof content === 'boolean' || typeof content === 'function' || isValidElement(content) || (typeof content === 'object' && this._compiled.has(content))) {
            return content;
        }
        if (Array.isArray(content)) {
            return this._remember(content.map(node => this.resolveContent(node)), '$content');
        }
        if (typeof content === 'string' || typeof content === 'number') {
            return content;
        }
        if (!isRecord(content)) {
            fail('$content', 'Unsupported custom content.');
        }
        if (Object.hasOwn(content, 'markdown')) {
            return this.compile(content, '$content');
        }
        // Existing components also produce the flat CustomContent format (className,
        // attrs, item metadata, component references). Preserve that public format;
        // the strict JSON protocol is checked only at schema/response boundaries.
        if (Object.hasOwn(content, 'fetcher')) {
            return this._remember(this.prepareLazy(content as unknown as LazyContentProps), '$content');
        }
        if (Object.hasOwn(content, 'html')) {
            if (content.executeScript !== undefined && typeof content.executeScript !== 'boolean') {
                fail('$content.executeScript', 'Expected a boolean.');
            }
            this._checkHTML(content.html, content.executeScript === true, 'html', '$content.html');
            this._checkContainer(content, '$content');
            return this._remember({...content}, '$content') as CustomContentType;
        }
        const {component, tag, children, events, ...rest} = content;
        let target = tag ?? component;
        if (tag !== undefined) {
            checkTag(tag, '$content.tag');
        } else if (typeof component === 'string') {
            target = getReactComponent(component) ?? (htmlTags.has(component) ? component : fail('$content.component', `Component "${component}" is not registered.`));
        }
        if (typeof target !== 'string' && typeof target !== 'function') {
            fail('$content.component', 'Expected a registered component or explicit tag.');
        }
        const baseProps = {...rest, ...rest.attrs as object, ...rest.props as object};
        delete baseProps.attrs;
        delete baseProps.props;
        const props = {...baseProps};
        this._bindEvents(events, '$content', props);
        const prepared = this.prepareElement(target as ComponentType | string, props);
        const nestedProps = {...rest.props as object} as Record<string, unknown>;
        Object.entries(prepared.props).forEach(([name, value]) => {
            if (value !== baseProps[name]) {
                nestedProps[name] = value;
            }
        });
        return this._remember({
            ...rest,
            ...(tag ? {tag} : {component: typeof component === 'string' ? component : prepared.component}),
            key: content.key,
            props: nestedProps,
            ...(children !== undefined ? {children: this.resolveContent(children as CustomContentType)} : {}),
        }, '$content') as CustomContentType;
    }

    private _checkHTML(html: unknown, executeScript: boolean, source: 'html' | 'lazy', path: string) {
        if (typeof html !== 'string') {
            fail(path, 'HTML content must be a string.');
        }
        if (!this.capabilities[source === 'lazy' ? 'lazyHtml' : 'html']) {
            fail(path, `${source === 'lazy' ? 'lazyHtml' : 'html'} capability is disabled.`);
        }
        if (executeScript && !this.capabilities.executeScript) {
            fail(path, 'executeScript capability is disabled.');
        }
    }

    prepareHTML(html: string, executeScript: boolean, source: 'html' | 'lazy') {
        if (typeof executeScript !== 'boolean') {
            fail('$content.executeScript', 'Expected a boolean.');
        }
        this._checkHTML(html, executeScript, source, '$content.html');
        if (executeScript === true) {
            return {html, executeScript};
        }
        if (!this._purify) {
            this._purify = createDOMPurify(window);
            this._purify.addHook('uponSanitizeAttribute', (_node, data) => {
                if (/^(?:z-|zui-|data-)/i.test(data.attrName) || (data.attrName === 'href' && this._isCommandURL(data.attrValue))) {
                    data.keepAttr = false;
                }
            });
        }
        return {html: this._purify.sanitize(html, {USE_PROFILES: {html: true}}), executeScript: false};
    }

    prepareLazy(props: LazyContentProps): LazyContentProps {
        const path = this._paths.get(props) ?? '$content';
        if (!['html', 'text', 'custom'].includes(props.type ?? '')) {
            fail(`${path}.type`, 'Lazy content requires an explicit html, text or custom type.');
        }
        if (typeof props.fetcher !== 'string') {
            fail(`${path}.fetcher`, 'Lazy content requires a URL string.');
        }
        if (props.fetcherArgs !== undefined) {
            fail(`${path}.fetcherArgs`, 'URL interpolation arguments are not supported.');
        }
        for (const name of ['executeScript', 'clearBeforeLoad', 'loadingIndicator'] as const) {
            if (props[name] !== undefined && typeof props[name] !== 'boolean') {
                fail(`${path}.${name}`, 'Expected a boolean.');
            }
        }
        for (const name of ['loadingText', 'errorText'] as const) {
            if (props[name] !== undefined && typeof props[name] !== 'string') {
                fail(`${path}.${name}`, 'Expected a string.');
            }
        }
        let url: URL;
        try {
            url = new URL(props.fetcher, document.baseURI);
        } catch {
            fail(`${path}.fetcher`, 'Invalid request URL.');
        }
        if (!/^https?:$/.test(url.protocol) || url.username || url.password || !(this._allowRequest ? this._allowRequest(url) : url.origin === location.origin)) {
            fail(`${path}.fetcher`, 'The host request policy rejected this URL.');
        }
        const executeScript = props.executeScript === true;
        if (props.type === 'html') {
            this._checkHTML('', executeScript, 'lazy', path);
        } else if (executeScript) {
            fail(`${path}.executeScript`, 'Script execution only applies to HTML content.');
        }
        const result: LazyContentProps = {
            ...props,
            executeScript,
            transformContent: (content) => {
                if (props.type === 'custom') {
                    return this.compile(content, `${path}.response`);
                }
                if (typeof content !== 'string') {
                    fail(`${path}.response`, 'Expected a text response.');
                }
                return content;
            },
        };
        if (props.loadingContent !== undefined) {
            result.loadingContent = this.resolveContent(props.loadingContent);
        }
        this._checkContainer(result as unknown as Record<string, unknown>, path);
        return result;
    }

    prepareElement(component: ComponentType | string, props: Record<string, unknown>) {
        const path = this._paths.get(props) ?? '$content.props';
        let result = props;
        if ((component as {isJsonUI?: boolean}).isJsonUI) {
            for (const name of hostProps) {
                if (Object.hasOwn(props, name)) {
                    fail(`${path}.${name}`, 'Nested JSON UI cannot override host options.');
                }
            }
        }
        if ((component as unknown) === HtmlContent) {
            if (props.executeScript !== undefined && typeof props.executeScript !== 'boolean') {
                fail(`${path}.executeScript`, 'Expected a boolean.');
            }
            this._checkHTML(props.html, props.executeScript === true, 'html', path);
            this._checkContainer(props, path);
        } else if ((component as unknown) === LazyContent) {
            result = this.prepareLazy(props as unknown as LazyContentProps) as unknown as Record<string, unknown>;
        } else if (component === CustomContent && props.content !== undefined) {
            result = {...props, content: this.resolveContent(props.content as CustomContentType)};
        } else if (component === HElement) {
            if (props.tag !== undefined) {
                checkTag(props.tag, `${path}.tag`);
            }
            const inner = props.tag ?? props.component ?? 'div';
            const target = typeof inner === 'string' ? (props.tag ? inner : getReactComponent(inner) ?? inner) : inner;
            if (typeof target !== 'string' && typeof target !== 'function') {
                fail(`${path}.component`, 'Expected an element or registered component.');
            }
            const {props: nested, attrs, component: _component, tag: _tag, ...rest} = props;
            this.prepareElement(target as ComponentType | string, {...rest, ...attrs as object, ...nested as object});
        } else if (typeof component === 'string') {
            checkTag(component, path);
            this._checkNativeProps(props, path);
        }
        if (props.dangerouslySetInnerHTML !== undefined) {
            const value = props.dangerouslySetInnerHTML;
            if (!isRecord(value) || typeof value.__html !== 'string') {
                fail(`${path}.dangerouslySetInnerHTML`, 'Expected an HTML string.');
            }
            result = {...result, dangerouslySetInnerHTML: {__html: this.prepareHTML(value.__html, false, 'html').html}};
        }
        return {component, props: result};
    }

    private _isCommandURL(value: string) {
        return value.trim().startsWith('#!');
    }

    private _checkNativeProps(props: Record<string, unknown>, path: string) {
        for (const [name, value] of Object.entries(props)) {
            const lowerName = name.toLowerCase();
            if (/^(?:z-use-|z-commands?(?:-|$)|zui-(?:create|init|toggle|on|commands?)(?:-|$)|data-(?:toggle|zui|on)(?:-|$))/.test(lowerName) || lowerName === 'srcdoc') {
                fail(`${path}.${name}`, 'Automatic initialization and executable attributes are not allowed.');
            }
            if (/^on/i.test(name) && value != null && typeof value !== 'function') {
                fail(`${path}.${name}`, 'Event handlers must be host actions.');
            }
            if (['href', 'src', 'action', 'formaction', 'xlink:href', 'xlinkhref'].includes(lowerName) && typeof value === 'string') {
                // HTML URL parsing ignores ASCII control characters.
                // eslint-disable-next-line no-control-regex
                const normalized = value.replace(/[\u0000-\u0020]/g, '');
                if (this._isCommandURL(value) || /^(javascript|vbscript|data):/i.test(normalized)) {
                    fail(`${path}.${name}`, 'Executable URLs are not allowed.');
                }
            }
        }
        if (isRecord(props.attrs)) {
            this._checkNativeProps(props.attrs, `${path}.attrs`);
        }
        if (isRecord(props.props)) {
            this._checkNativeProps(props.props, `${path}.props`);
        }
    }

    private _checkContainer(props: Record<string, unknown>, path: string) {
        if (props.tag !== undefined) {
            checkTag(props.tag, `${path}.tag`);
        }
        this._checkNativeProps(props, path);
    }

    renderError(error: unknown): ComponentChildren {
        const normalized = error instanceof JsonUIError ? error : new JsonUIError('$content', error instanceof Error ? error.message : String(error));
        const identity = error && typeof error === 'object' ? error : normalized;
        if (!this._reportedErrors.has(identity)) {
            this._reportedErrors.add(identity);
            this.options.onError?.(normalized);
        }
        return h('span', {role: 'alert', className: 'json-ui-error'}, normalized.message);
    }
}

/** Validate without rendering or loading remote content. The first error includes its JSON path. */
export function validateJsonUI(schema: unknown, options?: JsonUIOptions): JsonUIError[] {
    try {
        new JsonUIRuntime(options).compile(schema);
        return [];
    } catch (error) {
        return [error instanceof JsonUIError ? error : new JsonUIError('$', error instanceof Error ? error.message : String(error))];
    }
}
