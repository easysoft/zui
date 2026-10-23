import type {ComponentChildren} from 'preact';

/** Serializable values passed to component properties. */
export type JsonUIValue = null | boolean | number | string | JsonUIValue[] | {[key: string]: JsonUIValue};

/** Expressions are interpreted only in explicitly documented expression positions. */
export type JsonUIExpression = JsonUIValue;

export type JsonUIModel = {
    path: string;
    event: string;
    value: JsonUIExpression;
};

export type JsonUICommand
    = | {action: string}
        | {type: 'set'; path: string; value: JsonUIExpression}
        | {type: 'reset'; path?: string}
        | {type: 'if'; condition: JsonUIExpression; then: JsonUICommands; else?: JsonUICommands}
        | {type: 'return'; value: JsonUIExpression};

export type JsonUICommands = JsonUICommand | JsonUICommand[];

export type JsonUIWatch = {
    paths: string[];
    do: JsonUICommands;
};

export type JsonUIDocument = {
    version: 1;
    state: Record<string, JsonUIValue>;
    computed?: Record<string, JsonUIExpression>;
    actions?: Record<string, JsonUICommands>;
    watch?: JsonUIWatch[];
    ui: JsonUINode;
};

export type JsonUIElement = {
    key?: string | number;
    tag?: keyof HTMLElementTagNameMap;
    component?: string;
    props?: Record<string, JsonUIValue>;
    children?: JsonUINode;
    events?: Record<string, string | JsonUICommands>;
    /** Document-only bindings to props.<path> or textual children. */
    bind?: Record<string, JsonUIExpression>;
    /** Document-only controlled properties and their change events. */
    model?: Record<string, JsonUIModel>;
    /** Document-only boolean expression; false unmounts this node. */
    when?: JsonUIExpression;
};

export type JsonUIHTML = {
    key?: string | number;
    html: string;
    tag?: keyof HTMLElementTagNameMap;
    props?: Record<string, JsonUIValue>;
    executeScript?: boolean;
};

export type JsonUIMarkdown = {
    key?: string | number;
    markdown: string;
    inline?: boolean;
    props?: Record<string, JsonUIValue>;
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
export type JsonUINode = null | string | number | JsonUIElement | JsonUIHTML | JsonUIMarkdown | JsonUILazy | JsonUINode[];

export type JsonUISchema = JsonUINode | JsonUIDocument;

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
    /** Called only when rendering; omitted to display the Markdown source as text. */
    renderMarkdown?: (node: JsonUIMarkdown, path: string) => ComponentChildren;
    /** Fixed when the view is created; recreate it to change permissions. */
    capabilities?: JsonUICapabilities;
    /** HTTP(S) requests are same-origin by default. Fixed when the view is created. */
    allowRequest?: (url: URL) => boolean;
    onError?: (error: JsonUIError) => void;
    /** Called once after a successful state transaction, with isolated snapshots. */
    onStateChange?: (state: Record<string, JsonUIValue>, previous: Record<string, JsonUIValue>) => void;
};

export type JsonUIProps = JsonUIOptions & {
    schema: JsonUISchema;
};
