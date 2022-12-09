import {Button} from '@zui/button/src/component/button';
import {ButtonProps} from '@zui/button/src/types';
// import {Component} from 'preact';
import {MessagerActionsProps} from '../types';

export class MessagerAction<T extends ButtonProps = MessagerActionsProps> extends Button {
    beforeRender() {
        return {}
    }
    // render() {
    //     const props = this.beforeRender();
    //     return(
    //         <Button {...props}></Button>
    //     )
    // }
}