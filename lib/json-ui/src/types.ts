/** Serializable values passed to component properties. */
export type JsonUIValue = null | boolean | number | string | JsonUIValue[] | {[key: string]: JsonUIValue};

export type JsonUIElement = {
    key?: string | number;
    tag?: keyof HTMLElementTagNameMap;
    component?: string;
    props?: Record<string, JsonUIValue>;
    children?: JsonUINode;
    events?: Record<string, string>;
};

export type JsonUIHTML = {
    key?: string | number;
    html: string;
    tag?: keyof HTMLElementTagNameMap;
    props?: Record<string, JsonUIValue>;
    executeScript?: boolean;
};

export type JsonUILazy = {
    key?: string | number;
    fetcher: string;
    type: 'html' | 'text' | 'custom';
    tag?: keyof HTMLElementTagNameMap;
    props?: Record<string, JsonUIValue>;
    executeScript?: boolean;
    loadingContent?: JsonUINode;
    loadingText?: string;
    errorText?: string;
    clearBeforeLoad?: boolean;
    loadingIndicator?: boolean;
};

/** A UI description, not a JSON Schema validation document. */
export type JsonUINode = null | string | number | JsonUIElement | JsonUIHTML | JsonUILazy | JsonUINode[];

/** Callback arguments and return values follow each registered component's API. */
export type JsonUIAction = (...args: never[]) => unknown;

export type JsonUICapabilities = {
    html?: boolean;
    lazyHtml?: boolean;
    executeScript?: boolean;
};

export class JsonUIError extends Error {
    constructor(public readonly path: string, message: string) {
        super(`${path}: ${message}`);
        this.name = 'JsonUIError';
    }
}

export type JsonUIOptions = {
    actions?: Record<string, JsonUIAction>;
    /** Fixed when the view is created; recreate it to change permissions. */
    capabilities?: JsonUICapabilities;
    /** HTTP(S) requests are same-origin by default. Fixed when the view is created. */
    allowRequest?: (url: URL) => boolean;
    onError?: (error: JsonUIError) => void;
};

export type JsonUIProps = JsonUIOptions & {
    schema: JsonUINode;
};
