import '@zui/button';
import '@zui/icons';
import 'zui-dev';
import {Modal, ModalBase, ModalTrigger} from './src/main';

onPageUpdate(() => {
    Object.assign(window, {Modal, ModalBase, ModalTrigger});
    console.log('> Modal', {Modal, ModalTrigger});
});
