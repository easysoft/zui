import {Component, createRef} from 'preact';
import {$} from '../../cash';
import {HElement} from './h-element';

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
export class HtmlContent extends Component<HtmlContentProps> {
    protected _ref = createRef<HTMLDivElement>();

    protected _runJS() {
        if (!this.props.executeScript) {
            return;
        }
        $(this._ref.current).runJS().zuiInit();
    }

    componentDidMount(): void {
        this._runJS();
    }

    componentDidUpdate(previousProps: Readonly<HtmlContentProps>): void {
        if (this.props.html !== previousProps.html) {
            this._runJS();
        }
    }

    render(props: HtmlContentProps) {
        const {executeScript, html, ...others} = props;
        return <HElement forwardRef={this._ref} dangerouslySetInnerHTML={{__html: html}} {...others} />;
    }
}
