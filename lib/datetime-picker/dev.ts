import 'zui-dev';
import '@zui/button';
import '@zui/menu';
import '@zui/input-control';
import '@zui/checkbox';
import {TimePicker, DatePicker} from './src/main';

onPageUpdate(() => {
    const datePickerElement = document.querySelector<HTMLElement>('#datePickerExample');
    if (datePickerElement) {
        const datePicker = new DatePicker(datePickerElement, {
            clearText: '待定',
            menu: [{
                text: '上一个月',
                'data-set-date': 'now-1month',
            }, {
                text: '两个月',
                'data-set-date': 'now+2month',
            }],
        });
        console.log('> datePicker', datePicker);
    }

    const timePickerElement = document.querySelector<HTMLElement>('#timePickerExample');
    if (timePickerElement) {
        const timePicker = new TimePicker(timePickerElement, {
        });
        console.log('> timePicker', timePicker);
    }
});
