import '@zui/button';
import '@zui/input-control';
import '@zui/icons';
import '@zui/form';
import 'zui-dev';
import {Timepicker} from './src/vanilla';

onPageUpdate(() => {
    const timepickerExp1 = document.getElementById('timepickerExp1');
    new Timepicker('#timepickerExp1', {
        value: '18:00',
        showSeconds: true,
        onChange: (value) => {
            timepickerExp1.querySelector('.form-control').value = value;
        },
    });

});
