import {JSX, Component, createRef} from 'preact';

export type ModalHtmlContentProps = {
    html: string,
    execScript?: boolean,
} & JSX.HTMLAttributes<HTMLDivElement>;

export function execScripts(element: HTMLElement) {
    const scripts = element.querySelectorAll('script');
    if (!scripts) {
        return;
    }
    scripts.forEach(script => {
        const s = document.createElement('script');
        s.type = script.type || 'text/javascript';
        s.async = false;
        s.innerHTML = script.innerHTML;
        element.appendChild(s);
        script.remove();
    });
}

export class ModalHtmlContent extends Component<ModalHtmlContentProps> {
    #ref = createRef<HTMLDivElement>();

    componentDidMount(): void {
        if (!this.props.execScript) {
            return;
        }
        const div = this.#ref.current;
        if (div) {
            execScripts(div);
        }
    }

    render() {
        const {execScript, html, ...others} = this.props;
        return (
            <div ref={this.#ref} dangerouslySetInnerHTML={{__html: html}} {...others} />
        );
    }
}
