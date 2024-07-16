import {createRef} from 'preact';
import {Button} from '@zui/button/src/component/button';
import {BtnGroup} from '@zui/btn-group/src/component';
import {Toolbar} from '@zui/toolbar/src/component';
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
        const {dropdown, menu, items, onClickItem, relativeTarget = this.triggerElement} = this.props;
        const instance = Dropdown.get(this.triggerElement);
        const options = {
            items,
            onClickItem,
            menu,
            relativeTarget,
            ...dropdown,
        };
        if (instance) {
            instance.setOptions(options);
        } else {
            new Dropdown(this.triggerElement, options);
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

Object.assign(BtnGroup.ItemComponents, {dropdown: DropdownButton});
Object.assign(Toolbar.ItemComponents, {dropdown: DropdownButton});
