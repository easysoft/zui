import {Component, createRef} from 'preact';
import {$} from '../../cash';
import {HElement} from './h-element';
import {ContentRenderContext, ContentSourceContext, preparedHTML, renderContentError, type ContentRenderPolicy} from './content-render-context';

import type {HtmlContentProps} from '../types';

/**
 * HTML content component.
 *
 * @example
 * // Render <div><h1>Hello world</h1></div>
 * <HtmlContent html="<h1>Hello world</h1>" />
 *
 * // Render and execute script
 * <HtmlContent html="<script>alert('Hello world')</script>" executeScript />
 */
class HtmlContentBody extends Component<HtmlContentProps & {policy?: ContentRenderPolicy; source: 'html' | 'lazy'}> {
    protected _ref = createRef<HTMLElement>();

    protected _prepared?: {html: string; executeScript: boolean};

    protected _executed?: {html: string; executeScript: boolean};

    protected _runJS() {
        const prepared = this._prepared;
        if (!prepared?.executeScript) {
            this._executed = undefined;
            return;
        }
        if (this._executed?.html === prepared.html && this._executed.executeScript === prepared.executeScript) {
            return;
        }
        $(this._ref.current).runJS().zuiInit();
        this._executed = prepared;
    }

    componentDidMount(): void {
        this._runJS();
    }

    componentDidUpdate(): void {
        this._runJS();
    }

    render(props: HtmlContentProps & {policy?: ContentRenderPolicy; source: 'html' | 'lazy'}) {
        const {executeScript = false, html, policy, source, ...others} = props;
        try {
            this._prepared = policy?.prepareHTML?.(html, executeScript, source) ?? {html, executeScript};
            const innerHTML = {__html: this._prepared.html};
            preparedHTML.add(innerHTML);
            return <HElement {...others} forwardRef={this._ref} dangerouslySetInnerHTML={innerHTML} />;
        } catch (error) {
            this._prepared = undefined;
            return renderContentError(policy, error);
        }
    }
}

export class HtmlContent extends Component<HtmlContentProps> {
    render(props: HtmlContentProps) {
        return (
            <ContentRenderContext.Consumer>
                {policy => <ContentSourceContext.Consumer>{source => <HtmlContentBody {...props} policy={policy} source={source} />}</ContentSourceContext.Consumer>}
            </ContentRenderContext.Consumer>
        );
    }
}
