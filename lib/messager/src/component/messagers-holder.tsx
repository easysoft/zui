import {classes} from '@zui/browser-helpers/src/classes';
import {Component} from 'preact';
import {MessagersHolderProps} from '../types/messagers-holder-props';

export class MessagersHolder extends Component<MessagersHolderProps> {
    
    // static Name = 'zui.messagers-holder';

    render() {
        const {className, placement} = this.props;
        console.log(className, placement, this.props, 'props');
        return (
            <div 
                class={classes([className ? className : '', 'messagers-holder', 'col'])}
                data-placement={placement}
            >
            </div>
        );
    }
}