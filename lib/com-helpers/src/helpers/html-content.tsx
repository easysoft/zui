import {JSX, Component, createRef} from 'preact';
import {executeScripts} from './execute-script';

export type HtmlContentProps = {
    html: string,
    executeScript?: boolean,
} & JSX.HTMLAttributes<HTMLDivElement>;

export class HtmlContent extends Component<HtmlContentProps> {
    #ref = createRef<HTMLDivElement>();

    componentDidMount(): void {
        if (!this.props.executeScript) {
            return;
        }
        const div = this.#ref.current;
        if (div) {
            executeScripts(div);
        }
    }

    render() {
        const {executeScript, html, ...others} = this.props;
        return (
            <div ref={this.#ref} dangerouslySetInnerHTML={{__html: html}} {...others} />
        );
    }
}
