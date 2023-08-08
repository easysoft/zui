import 'zui-dev';
import '@zui/button';
import '@zui/menu';
import '@zui/input-control';
import '@zui/checkbox';
import {TimePicker, DatePicker, DatetimePicker} from './src/main';

onPageUpdate(() => {
    const datePicker = new DatePicker('#date-picker-example', {
        clearText: '待定',
        menu: [{
            text: '上一个月',
            'data-set-date': 'now-1month',
        }, {
            text: '两个月',
            'data-set-date': 'now+2month',
        }],
        format: 'yyyy/MM/dd',
        name: 'date',
        required: true,
    });
    console.log('> datePicker', datePicker);

    const timePicker = new TimePicker('#time-picker-example', {
        format: 'h:m',
        defaultValue: 'now',
    });
    console.log('> timePicker', timePicker);

    const datetimePicker = new DatetimePicker('#datetime-picker-example');
    console.log('> datetimePicker', datetimePicker);
});
