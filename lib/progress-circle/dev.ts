import 'zui-dev';
import {ProgressCircle} from './src/main';

onPageUpdate(() => {
    const progressCircle = new ProgressCircle('#progressCircle', {
    });
    console.log('> progressCircle', progressCircle);
});
