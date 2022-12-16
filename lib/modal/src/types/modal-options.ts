import {ModalBackdropType} from './modal-backdrop-type';
import {ModalPositionSetting} from './modal-position-setting';
import {ModalWidthPreset} from './modal-width-preset';

export interface ModalOptions {
    width?: number | ModalWidthPreset | '100%';
    position?: ModalPositionSetting;
    backdrop?: ModalBackdropType;
    show?: boolean;
    keyboard?: boolean;
    moveable?: boolean;
    animation?: boolean;
    transTime?: number;
}
