import type {JSX} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {ModalBackdropType} from './modal-backdrop-type';
import type {ModalPositionSetting} from './modal-position-setting';
import type {ModalSizeSetting} from './modal-size-setting';
import type {ModalBase} from '../vanilla';

export type ModalBaseOptions = {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    size?: ModalSizeSetting;
    position?: ModalPositionSetting;
    backdrop?: ModalBackdropType;
    show?: boolean;
    hideOthers?: boolean;
    closeOthers?: boolean;
    keyboard?: boolean;
    moveable?: boolean;
    animation?: boolean;
    transTime?: number;
    responsive?: boolean;
    onShown?: (this: ModalBase) => void;
    onHidden?: (this: ModalBase) => void;
    onShow?: (this: ModalBase) => void;
    onHide?: (this: ModalBase) => void;
};
