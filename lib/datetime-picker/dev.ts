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
                text: '一个月',
                'data-set-date': '2023-08-05',
            }, {
                text: '两个月',
                'data-set-date': '2023-09-05',
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
