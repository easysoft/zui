import 'zui-dev';
import '@zui/input-control';
import '@zui/icons';
import '@zui/checkbox';
import '@zui/button';
import {Popovers} from './src/vanilla';

onPageLoad(() => {
    new Popovers('#trigger', {
        placement: 'bottom-start',
    });
});
