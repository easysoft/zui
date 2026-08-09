import {Button} from '@zui/button/react';
import {type ButtonProps} from '@zui/button';
import type {CopyBtnOptions} from '../types';
import {CopyBtn as CopyBtnVanilla} from '../vanilla/copy-btn';
import {RenderableProps} from 'preact';

export type CopyBtnProps = CopyBtnOptions & ButtonProps;

export class CopyBtn extends Button<CopyBtnProps> {
    static readonly NAME = 'CopyBtn';

    protected _copyBtn?: CopyBtnVanilla;

    static DEFAULT: Partial<CopyBtnProps> = {
        ...CopyBtnVanilla.DEFAULT,
    } as Partial<CopyBtnProps>;

    get copyBtn() {
        return this._copyBtn;
    }

    /** @deprecated Use copyBtn. */
    get coyBtn() {
        return this.copyBtn;
    }

    componentDidMount(): void {
        super.componentDidMount();
        this._copyBtn = new CopyBtnVanilla(this.base as HTMLElement, this.props);
    }

    componentWillUnmount(): void {
        this._copyBtn?.destroy();
        super.componentWillUnmount();
    }

    protected _handleClick: NonNullable<ButtonProps['onClick']> = (event) => {
        if (this.props.disabled || this.props.loading) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        this.props.onClick?.(event);
        if (!event.defaultPrevented) {
            void this._copyBtn?.copy();
        }
    };

    protected _getProps(props: RenderableProps<CopyBtnProps>) {
        return {
            ...super._getProps(props),
            onClick: this._handleClick,
        };
    }
}
