import {BtnGroup} from '@zui/button/src/component/btn-group';
import {Component} from 'preact';
import {MessagerActionsProps} from '../types';

export class MessagerActions extends Component<MessagerActionsProps[]> {
    beforeRender() {
        return {}
    }

    render() {
        const props = this.beforeRender();
        return(
            <BtnGroup {...props}></BtnGroup>
        )
    }
}