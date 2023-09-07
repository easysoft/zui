import {createRef} from 'preact';
import {$} from '@zui/core';
import {Button} from '@zui/button/src/component/button';
import {Dropdown} from '../vanilla';

import type {DropdownButtonOptions} from '../types';

export class DropdownButton extends Button<DropdownButtonOptions> {
    static defaultProps: Partial<DropdownButtonOptions> = {
        caret: true,
    };

    _ref = createRef();

    get triggerElement() {
        return this._ref.current as HTMLElement;
    }

    _updateData() {
        const {dropdown, items, onClickItem} = this.props;
        const $trigger = $(this.triggerElement);
        const instance = Dropdown.get(this.triggerElement);
        const options = {
            items,
            onClickItem,
            ...dropdown,
        };
        if (instance) {
            instance.setOptions(options);
        } else {
            $trigger.data(options);
        }
    }

    componentDidMount(): void {
        this._updateData();
    }

    componentDidUpdate(): void {
        this._updateData();
    }

    componentWillUnmount(): void {
        Dropdown.get(this.triggerElement)?.destroy();
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
