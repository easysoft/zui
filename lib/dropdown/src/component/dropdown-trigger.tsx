import {classes} from '@zui/browser-helpers/src/classes';
import type {JSX} from 'preact';
import {Component, createRef} from 'preact';
import {DropdownOptions} from '../types/dropdown-options';
import {DropdownTriggerOptions} from '../types/dropdown-trigger-options';
import {DropdownTriggerState} from '../types/dropdown-trigger-state';
import {Dropdown} from '../vanilla/dropdown';

export class DropdownTrigger<T extends DropdownTriggerOptions = DropdownTriggerOptions> extends Component<T, DropdownTriggerState> {
    #dropdown?: Dropdown;

    #ref = createRef();

    state = {placement: '', show: false};

    get ref() {
        return this.#ref;
    }

    get triggerElement() {
        return this.#ref.current as HTMLElement;
    }

    componentDidMount(): void {
        const {modifiers = [], ...dropdownOptions} = this.props.dropdown || {};
        modifiers.push({
            name: 'dropdown-trigger',
            enabled: true,
            phase: 'beforeMain',
            fn: ({state}) => {
                const placement = state.placement?.split('-').shift() || '';
                this.setState({placement});
            },
        });
        this.#dropdown = Dropdown.ensure(this.triggerElement, {
            ...dropdownOptions,
            modifiers,
            onShow: () => {
                this.setState({show: true});
            },
            onHide: () => {
                this.setState({show: true});
            },
        } as DropdownOptions);
    }

    componentWillUnmount(): void {
        this.#dropdown?.destroy();
    }

    beforeRender() {
        const {className, children, dropdown, ...props} = this.props;
        return {
            className: classes('dropdown', className),
            children: typeof children === 'function' ? children(this.state) : children,
            ...props,
            'data-toggle': 'dropdown',
            'data-dropdown-placement': this.state.placement,
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
