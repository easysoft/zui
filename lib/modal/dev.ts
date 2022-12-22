import '@zui/button';
import '@zui/icons';
import 'zui-dev';
import {Modal, ModalTrigger} from './src/main';

onPageUpdate(() => {
    console.log('> Modal', {Modal, ModalTrigger});
});
