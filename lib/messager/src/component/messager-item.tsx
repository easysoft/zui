import {Component} from 'preact';
import MessagerActions from './messager-actions';
import {MessagerProps} from '../types';
import {classes} from '@zui/browser-helpers/src/classes';

export default class MessagerItem extends Component<MessagerProps> {
    static defaultProps: {
        className: 'messager-default',
        type: 'default',
    };

    render() {
        const {message, actions, className, type} = this.props;
        return (
            <div class={classes([className, 'messager'])}>
                <div class="messager-content">
                    {message}
                </div>
                <MessagerActions {...actions}/>
                <button type="btn" class="btn messager-default border-0">
                    <i class="icon icon-times"></i>
                </button>
            </div>
        );
    }
}
