import {JSX} from 'preact';
import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {ModalBackdropType} from './modal-backdrop-type';
import {ModalPositionSetting} from './modal-position-setting';
import {ModalSizeSetting} from './modal-size-setting';

export type ModalOptions = {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    size?: ModalSizeSetting;
    position?: ModalPositionSetting;
    backdrop?: ModalBackdropType;
    show?: boolean;
    keyboard?: boolean;
    moveable?: boolean;
    animation?: boolean;
    transTime?: number;
    responsive?: boolean;
};
