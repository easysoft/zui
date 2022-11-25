import 'zui-dev';
import './src/main';
import {ProgressCircle} from './src/vanilla';

onPageLoad(() => {
    const options = {
        percent: 50,
        circleBgColor: '#F4F5F7',
        circleColor: '#C98FE2',
        circleSize: 50,
        circleBorderSize: 10,
    };
    const progressCircleDom = document.getElementById('progressCircle');
    if (progressCircleDom) {
        new ProgressCircle(progressCircleDom, options);
    }
});
