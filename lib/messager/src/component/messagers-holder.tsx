import {classes} from '@zui/browser-helpers/src/classes';
import {Component} from 'preact';
import {MessagersHolderProps} from '../types/messagers-holder-props';

export default class MessagersHolder extends Component<MessagersHolderProps> {

    static defaultProps: {
        placement: 'top',
    };

    render() {
        const {className, placement} = this.props;
        return (
            <div 
                class={classes([className ? className : '', 'messagers-holder', 'col'])}
                data-placement={placement}
            >
            </div>
        );
    }
}