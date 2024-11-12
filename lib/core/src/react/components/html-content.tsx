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

    update() {
        const element = this._ref.current;
        if (!element) {
            return;
        }
        (this.props.htmlRender || HtmlContent.update)(element, this.props);
    }

    componentDidMount(): void {
        this.update();
    }

    componentDidUpdate(previousProps: Readonly<HtmlContentProps>): void {
        if (this.props.html !== previousProps.html) {
            this.update();
        }
    }

    render(props: HtmlContentProps) {
        const {executeScript, html, ...others} = props;
        return <HElement forwardRef={this._ref} {...others} />;
    }

    static update(element: HTMLElement, props: HtmlContentProps) {
        const {executeScript, html} = props;
        if (executeScript) {
            $(element).html(html);
        } else {
            element.innerHTML = html;
        }
    }
}
