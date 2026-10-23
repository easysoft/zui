import {Component} from 'preact';
import {ContentRenderContext, CustomContent} from '@zui/core';
import type {CustomContentType} from '@zui/core';
import type {JsonUIProps, JsonUIValue} from '../types';
import {JsonUIRuntime} from '../runtime';

/** Preact renderer with optional per-instance JSON document state. */
export class JsonUI extends Component<JsonUIProps> {
    /** Lets the content policy recognize aliases of this renderer. */
    static readonly isJsonUI = true;

    private _runtime: JsonUIRuntime;

    private _content?: CustomContentType;

    private _resetOnRender = false;

    constructor(props: JsonUIProps) {
        super(props);
        this._runtime = new JsonUIRuntime(props);
    }

    getState() {
        return this._runtime.getState();
    }

    patchState(patch: Record<string, JsonUIValue>) {
        return this._runtime.patchState(patch);
    }

    resetState(): Record<string, JsonUIValue>;
    resetState(props: Partial<JsonUIProps>): void;
    resetState(props?: Partial<JsonUIProps>) {
        if (props?.schema !== undefined) {
            // ComponentFromReact calls this before delivering the new host options.
            this._resetOnRender = true;
            return;
        }
        return this._runtime.resetState();
    }

    componentWillUnmount() {
        this._runtime.destroy();
    }

    render(props: JsonUIProps) {
        const previousOptions = this._runtime.options;
        this._runtime.options = props;
        const reset = this._resetOnRender;
        this._resetOnRender = false;
        try {
            const content = this._runtime.compile(props.schema, '$', reset);
            this._content = content;
        } catch (error) {
            const placeholder = this._runtime.renderError(error);
            this._runtime.options = previousOptions;
            const retained = this._runtime.refreshDocument();
            if (retained !== undefined) this._content = retained;
            if (this._content === undefined) {
                return placeholder;
            }
        }
        this._runtime.trackState();
        return (
            <ContentRenderContext.Provider value={this._runtime.policy}>
                <CustomContent content={this._content} />
            </ContentRenderContext.Provider>
        );
    }
}
