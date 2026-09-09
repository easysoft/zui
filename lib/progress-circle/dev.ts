import 'zui-dev';
import {ProgressCircle} from './src/main';

onPageUpdate(() => {
    const progressCircle = new ProgressCircle('#progressCircle', {
        percent: '75%',
    });
    console.log('> progressCircle', progressCircle);
});
