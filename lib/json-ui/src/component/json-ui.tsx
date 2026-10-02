import {Component} from 'preact';
import {ContentRenderContext, CustomContent} from '@zui/core';
import type {CustomContentType} from '@zui/core';
import type {JsonUIProps} from '../types';
import {JsonUIRuntime} from '../runtime';

/** Preact renderer; component state and requests remain owned by the host. */
export class JsonUI extends Component<JsonUIProps> {
    /** Lets the content policy recognize aliases of this renderer. */
    static readonly isJsonUI = true;

    private _runtime: JsonUIRuntime;

    private _content?: CustomContentType;

    constructor(props: JsonUIProps) {
        super(props);
        this._runtime = new JsonUIRuntime(props);
    }

    render(props: JsonUIProps) {
        const previousOptions = this._runtime.options;
        this._runtime.options = props;
        try {
            const content = this._runtime.compile(props.schema);
            this._content = content;
        } catch (error) {
            const placeholder = this._runtime.renderError(error);
            this._runtime.options = previousOptions;
            if (this._content === undefined) {
                return placeholder;
            }
        }
        return (
            <ContentRenderContext.Provider value={this._runtime.policy}>
                <CustomContent content={this._content} />
            </ContentRenderContext.Provider>
        );
    }
}
