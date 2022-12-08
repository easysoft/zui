import {classes} from '@zui/browser-helpers/src/classes';
import type {JSX} from 'preact';
import {Component, createRef} from 'preact';
import {TooltipOptions} from '../types/tooltip-options';
import {TooltipTriggerOptions} from '../types/tooltip-trigger-options';
import {TooltipTriggerState} from '../types/tooltip-trigger-state';
import {Tooltip} from '../vanilla';

export class TooltipTrigger<T extends TooltipTriggerOptions = TooltipTriggerOptions> extends Component<T, TooltipTriggerState> {
    
    #tooltip?: Tooltip;

    #ref = createRef();

    constructor(props: T) {
        super(props);
        this.state = {placement: props.tooltip?.placement || '', show: false};
    }

    get ref() {
        return this.#ref;
    }

    get triggerElement() {
        return this.#ref.current as HTMLElement;
    }

    componentDidMount(): void {
        const {...dropdownOptions} = this.props.tooltip || {};
        this.#tooltip = Tooltip.ensure(this.triggerElement, {
            ...dropdownOptions,
            onShow: () => {
                this.setState({show: true});
            },
            onHide: () => {
                this.setState({show: true});
            },
        } as TooltipOptions);
    }

    componentWillUnmount(): void {
        this.#tooltip?.destroy();
    }

    beforeRender() {
        const {className, children, ...props} = this.props;
        return {
            className: classes('tooltip', className),
            children: typeof children === 'function' ? children(this.state) : children,
            ...props,
            'data-toggle': 'tooltip',
            'data-tooltip-placement': this.state.placement,
            ref: this.#ref,
        };
    }

    render() {
        const {children, ...props} = this.beforeRender();
        return (
            <div {...(props as JSX.HTMLAttributes<HTMLDivElement>)}>
                {children}
            </div>
        );
    }
}
