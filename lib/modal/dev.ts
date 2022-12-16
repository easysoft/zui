import '@zui/button';
import '@zui/icons';
import 'zui-dev';
import {Modal} from './src/main';

onPageUpdate(() => {
    const myModalElement = document.getElementById('myModal');
    if (myModalElement) {
        const myModal = Modal.ensure(myModalElement);
        console.log('myModal', myModal);
    }
});
