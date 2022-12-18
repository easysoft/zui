import {Component} from 'preact';
import MessagerActions from './messager-actions';
import {MessagerProps} from '../types';
import {classes} from '@zui/browser-helpers/src/classes';
// import {MessagerActionsProps} from '../types'; /* use MessagerActionsProps to control items */

export default class MessagerItem extends Component<MessagerProps> {

    static defaultProps: {
        type: 'default',
        close: true,
    };

    render() {
        const {message, className, type, actions, close} = this.props;
        const actionClass = classes([type, 'border-none']);
        const items = actions?.length ? actions.map(item => {
            return {...item, className: actionClass};
        }) : [];

        if (close) {
            const actionsTimes = {
                name: 'times',
                icon: 'icon-times',
                className: actionClass,
                action: function () {  // 点击该操作按钮的回调函数
                    console.log('你点击了关闭按钮。');
                },
            };
            items.push(actionsTimes);
        }

        return (
            <div class={classes([className, type ? type : 'default', 'messager'])}>
                <div class="messager-content">
                    {message}
                </div>
                <MessagerActions 
                    items={items}
                />
            </div>
        );
    }
}
