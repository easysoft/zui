import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {MessagersHolder as MessagersHolderReact} from '../component/messagers-holder';
import {MessagersHolderProps} from '../types';

export class MessagersHolder extends ComponentFromReact<MessagersHolderProps, MessagersHolderReact<MessagersHolderProps>> {
    static NAME = 'MessagersHolder';

    static Component = MessagersHolder;
}
