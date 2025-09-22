import 'zui-dev';
import '@zui/button';
import '@zui/input-group';
import '@zui/input-control';
import '@zui/picker';
import '@zui/search-box';
import '@zui/form';
import '@zui/datetime-picker';
import '@zui/color-picker';
import {FormHelper} from './src/main';

onPageUpdate(() => {
    const formBuilder = new FormHelper('#formBuilderExample', {
    });
    console.log('> formBuilder', formBuilder);
});
