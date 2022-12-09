import { classes } from '@zui/browser-helpers/src/classes';
import {Component} from 'preact';
import {MessagersHolderProps} from '../types/messagers-holder-props';
import {MessagerItem} from './messager-item';

export class MessagersHolder extends Component<MessagersHolderProps> {
    static Name = 'zui.messagers-holder';

    static defaultProps = {
        placement: 'top'
    };

    constructor(props: MessagersHolderProps) {
        super(props);

        this.state = {
            messagerList:[]
        };
    }

    render() {
        const {messagerList} = this.state;
        const {className, placement} = this.props;
        return (
            <div class={classes([className, placement, 'messagers-holder', 'col'])}>
                {
                    messagerList.map(ele => {
                        <MessagerItem
                            {...ele}
                        >
                        </MessagerItem>
                    })
                }
            </div>
        );
    }
}