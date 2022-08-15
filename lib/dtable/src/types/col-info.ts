import {ColSetting} from './col-setting';

export interface ColInfo<S extends ColSetting = ColSetting> {
    name: string;
    type: string;
    setting: S,
    left: number,
    flex: number,
    realWidth: number,
    flexWidth: number,
    visible: boolean
}
