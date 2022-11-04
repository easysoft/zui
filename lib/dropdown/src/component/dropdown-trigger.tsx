import {classes} from '@zui/browser-helpers/src/classes';
import type {JSX} from 'preact';
import {Component, createRef} from 'preact';
import {DropdownOptions} from '../types/dropdown-options';
import {DropdownTriggerOptions} from '../types/dropdown-trigger-options';
import {Dropdown} from '../vanilla/dropdown';

export class DropdownTrigger extends Component<DropdownTriggerOptions> {
    #dropdownOptions?: DropdownOptions;

    #dropdown?: Dropdown;

    #ref = createRef<HTMLDivElement>();

    componentDidMount(): void {
        this.#dropdown = Dropdown.ensure(this.#ref.current as HTMLElement, {
            ...this.#dropdownOptions,
        } as DropdownOptions);
    }

    componentWillUnmount(): void {
        this.#dropdown?.destroy();
    }

    beforeRender(): JSX.HTMLAttributes & {dropdownOptions: DropdownOptions} {
        const {className, style, attrs, children, ...dropdownOptions} = this.props;
        this.#dropdownOptions = dropdownOptions;
        return {
            className: classes('dropdown', className),
            style,
            children,
            ...attrs,
            dropdownOptions,
            ref: this.#ref,
        };
    }

    render() {
        const {children, dropdownOptions, ...props} = this.beforeRender();
        return (
            <div {...(props as JSX.HTMLAttributes<HTMLDivElement>)} data-toggle="dropdown">
                {children}
            </div>
        );
    }
}
