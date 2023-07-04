import 'zui-dev';
import './src/main';
import {ProgressCircle} from './src/vanilla';

onPageUpdate(() => {
    const progressCircle = new ProgressCircle('#progressCircle', {
    });
});
