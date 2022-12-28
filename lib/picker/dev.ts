import 'zui-dev';
import {Picker} from './src/main';

const items = [
    {text: 'Apple', value: 'apple', keys: 'fruit foods'},
    {text: 'Banana', value: 'banana', keys: 'fruit foods'},
    {text: 'Orange', value: 'orange', keys: 'fruit foods'},
    {text: 'Strawberries', value: 'strawberries', keys: 'fruit foods'},
    {text: 'Cat', value: 'cat', keys: 'animals pet'},
    {text: 'Dog', value: 'dog', keys: 'animals pet'},
    {text: 'Fish', value: 'fish', keys: 'animals foods'},
];

onPageUpdate(() => {
    const singlePickerElement = document.querySelector<HTMLElement>('#singlePicker');
    if (singlePickerElement) {
        const singlePicker = new Picker(singlePickerElement, {
            items,
            defaultValue: 'banana',
        });
        console.log('> singlePicker', singlePicker);
    }

    const multiPickerElement = document.querySelector<HTMLElement>('#multiPicker');
    if (multiPickerElement) {
        const multiPicker = new Picker(multiPickerElement, {
            multi: true,
            items,
            defaultValue: 'banana,orange',
        });
        console.log('> multiPicker', multiPicker);
    }
});
