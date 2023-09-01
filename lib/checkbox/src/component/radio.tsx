import {RadioProps} from '../types';
import {Checkbox} from './checkbox';

export class Radio<P extends RadioProps = RadioProps> extends Checkbox<P> {
    static defaultProps: Partial<RadioProps> = {
        type: 'radio',
    };
}
