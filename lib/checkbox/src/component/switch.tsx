import {SwitchProps} from '../types';
import {Checkbox} from './checkbox';

export class Switch<P extends SwitchProps = SwitchProps> extends Checkbox<P> {
    static defaultProps: Partial<SwitchProps> = {
        type: 'switch',
    };
}
