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
            'data-set-date': 'today-1month',
        }, {
            text: '两个月',
            'data-set-date': 'today+2month',
        }],
        format: 'yyyy/MM/dd',
        name: 'date',
        required: true,
        defaultValue: 'today',
        maxDate: '2024-2-20',
        minDate: '2023-12-1',
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
