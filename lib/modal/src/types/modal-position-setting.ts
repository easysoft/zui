export type ModalPosition = number | {left: number, top: number, width: number, height: number};

export type ModalPositionPreset = 'fit' | 'center' | 'bottom' | 'top';

export type ModalPositionCallback = (size: {width: number, height: number}) => ModalPosition;

export type ModalPositionSetting = ModalPosition | ModalPositionPreset | ModalPositionCallback;
