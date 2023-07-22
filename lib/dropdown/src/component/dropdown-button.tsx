import {createRef} from 'preact';
import {$} from '@zui/core';
import {Button} from '@zui/button/src/component/button';
import type {DropdownButtonOptions} from '../types';
import type {Dropdown} from '../vanilla';

export class DropdownButton extends Button<DropdownButtonOptions> {
    static defaultProps: Partial<DropdownButtonOptions> = {
        caret: true,
    };

    _ref = createRef();

    get triggerElement() {
        return this._ref.current as HTMLElement;
    }

    componentDidMount(): void {
        const {dropdown, items} = this.props;
        $(this.triggerElement).data({
            items,
            ...dropdown,
        });
    }

    componentWillUnmount(): void {
        const dropdown = $(this.triggerElement).zui('dropdown') as Dropdown;
        if (dropdown) {
            dropdown.destroy();
        }
    }

    protected _getProps(props: DropdownButtonOptions) {
        const {trigger, placement} = props;
        return {
            ...super._getProps(props),
            'data-toggle': 'dropdown',
            'data-trigger': trigger,
            'data-placement': placement,
            ref: this._ref,
        };
    }
}
