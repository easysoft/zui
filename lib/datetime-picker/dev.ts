import 'zui-dev';
import '@zui/button';
import '@zui/list';
import '@zui/menu';
import '@zui/input-control';
import '@zui/checkbox';
import '@zui/toolbar';
import {TimePicker, DatePicker, DatetimePicker} from './src/main';

onPageUpdate(() => {
    const datePicker = new DatePicker('#date-picker-example', {
        clearText: '待定',
        menu: [{
            text: '选择特殊日期',
            type: 'heading',
        }, {
            text: '上一个月',
            value: 'today-1month',
        }, {
            text: '两个月',
            value: 'today+2month',
        }, {
            text: '长期',
            value: '1970-01-01',
        }, {
            text: '最近一周',
            value: 'WEEK',
        }],
        format: 'yyyy/MM/dd',
        display: (value, date) => {
            return value === '1970-01-01' ? '长期' : (date ? value.replace(/\//g, '-') : (value === 'WEEK' ? '最近一周' : '选择日期'));
        },
        name: 'date',
        defaultValue: 'today',
        maxDate: '2024-12-20',
        minDate: '2023-12-1',
        onChange: (value) => {
            console.log('datePicker.onChange', value);
        },
        allowInvalid: true,
    });
    console.log('> datePicker', datePicker);

    const timePicker = new TimePicker('#time-picker-example', {
        format: 'h:m',
        defaultValue: 'now',
    });
    console.log('> timePicker', timePicker);

    const datetimePicker = new DatetimePicker('#datetime-picker-example', {
        maxDate: '2024-2-20 8:00',
        minDate: '2023-12-1 12:00',
    });
    console.log('> datetimePicker', datetimePicker);
});
