import {ColSetting} from './col-setting';

export interface ColInfo extends Omit<ColSetting, 'hidden'> {
    left: number,
    flex: number,
    realWidth: number,
    flexWidth: number,
    visible: boolean
}
