import 'zui-dev';
import '@zui/base';
import '@zui/utilities';
import {ProgressBar} from './src/main';

onPageUpdate(() => {
    const element = document.querySelector('#progressBarExample');
    if (!element) {
        return;
    }
    new ProgressBar(element, {percent: 65, height: 20, width: 320});
});
