import '@zui/button';
import '@zui/css-icons';
import '@zui/toolbar';
import 'zui-dev';
import {Modal, ModalBase, ModalTrigger} from './src/main';

onPageUpdate(() => {
    Object.assign(window, {Modal, ModalBase, ModalTrigger});
    console.log('> Modal', {Modal, ModalTrigger});
});
