import {Button} from '@zui/button/src/component';
import {type ButtonProps} from '@zui/button';
import type {CopyBtnOptions} from '../types';
import {CopyBtn as CopyBtnVanilla} from '../vanilla/copy-btn';

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
}
