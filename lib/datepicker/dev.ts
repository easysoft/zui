import '@zui/button';
import '@zui/input-control';
import '@zui/form';
import {BtnGroup} from '@zui/btn-group';
import 'zui-dev';
import {Datepicker} from './src/vanilla';
import './src/style/index.css';

onPageUpdate(() => {
    const datePicker1 = <HTMLElement>document.getElementById('datePicker1');
    const formControl1 = <HTMLInputElement>datePicker1.querySelector('.form-control');
    formControl1.value = '2022-12-12';
    new Datepicker('#datePicker1', {
        date: '2022-12-12',
        onChange: (newDate) => {
            formControl1.value = newDate;
        },
    });
    const datePicker3 = <HTMLElement>document.getElementById('datePicker3');
    const formControl3 = <HTMLInputElement>datePicker3.querySelector('.form-control');
    new Datepicker('#datePicker3', {
        showOtherMonth: false,
        onChange: (newDate) => {
            formControl3.value = newDate;
        },
    });
    const datePicker4 = <HTMLElement>document.getElementById('datePicker4');
    const formControl4 = <HTMLInputElement>datePicker4.querySelector('.form-control');
    new Datepicker('#datePicker4', {
        minDate: '2022-12-02',
        maxDate: '2022-12-30',
        onChange: (newDate) => {
            formControl4.value = newDate;
        },
    });
    const datePicker6 = <HTMLElement>document.getElementById('datePicker6');
    const formControl6 = <HTMLInputElement>datePicker6.querySelector('.form-control');
    new Datepicker('#datePicker6', {
        tagDate: ['2022-12-24', '2022-12-25'],
        onChange: (newDate) => {
            formControl6.value = newDate;
        },
    });
    const datePicker8 = <HTMLElement>document.getElementById('datePicker8');
    const formControl8 = <HTMLInputElement>datePicker8.querySelector('.form-control');
    const datePickerComponent = new Datepicker('#datePicker8', {
        placement: 'top-end',
        onChange: (newDate) => {
            formControl8.value = newDate;
        },
    });
    new BtnGroup('#btnGroupPlacement', {
        items: [
            {text: 'top-start'},
            {text: 'top-end'},
            {text: 'bottom-start'},
            {text: 'bottom-end'},
        ],
        onClickItem: (info) => {
            const fElement = info.event.target.closest('.btn-group');
            const btns = fElement.querySelectorAll('.btn');
            btns.forEach(element => {
                element.classList.remove('primary');
            });
            info.event.target.classList.toggle('primary');
            datePickerComponent.render({placement: info.item.text});
        },
    });
});
