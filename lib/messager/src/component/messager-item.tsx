import {Component} from 'preact';
import MessagerActions from './messager-actions';
import { MessagerActionsProps } from '../types';

export class MessagerItem extends Component<MessagerActionsProps> { 
    static Name = 'zui.messager-item';

    render() {
        const {actions} = this.props;
        return(
            <div class="col">
                <div class="messager-content">
                    普通提示消息1
                </div>
                <MessagerActions
                    {...actions}
                ></MessagerActions>
            </div>
        );
    }
}