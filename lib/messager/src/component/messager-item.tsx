import {Component} from 'preact';
import MessagerActions from './messager-actions';
import {MessagerProps} from '../types';
import {classes} from '@zui/browser-helpers/src/classes';

export class MessagerItem extends Component<MessagerProps> { 
    // static Name = 'zui.messager-item';

    render() {
        const {message, actions, className} = this.props;
        console.log(this.props);
        return (
            <div class={classes([className, 'messagers'])}>
                <div class="messager-content">
                    {message}
                </div>
                <MessagerActions {...actions}/>
            </div>
        );
    }
}
