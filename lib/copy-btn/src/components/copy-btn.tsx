import {Button} from '@zui/button/src/component';
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

    get coyBtn() {
        return this._copyBtn;
    }

    componentDidMount(): void {
        super.componentDidMount();
        this._copyBtn = new CopyBtnVanilla(this.base as HTMLElement, this.props);
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
        this._copyBtn?.destroy();
    }

    protected _handleClick = () => {
        this._copyBtn?.copy();
    };

    protected _getProps(props: RenderableProps<CopyBtnProps>) {
        return {
            ...super._getProps(props),
            onClick: this._handleClick,
        };
    }
}
