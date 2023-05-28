import {Component, createRef} from 'preact';
import {$} from '../../cash';
import {HElement, HElementProps} from './h-element';

/**
 * HTML content component props.
 */
export interface HtmlContentProps extends HElementProps {
    /**
     * HTML code.
     */
    html: string,

    /**
     * Execute script.
     */
    executeScript?: boolean,
}

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
    #ref = createRef<HTMLDivElement>();

    componentDidMount(): void {
        if (!this.props.executeScript) {
            return;
        }
        $(this.#ref.current).runJS();
    }

    render(props: HtmlContentProps) {
        const {executeScript, html, ...others} = props;
        return <HElement ref={this.#ref} dangerouslySetInnerHTML={{__html: html}} {...others} />;
    }
}
