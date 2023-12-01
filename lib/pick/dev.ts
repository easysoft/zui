import 'zui-dev';
import '@zui/button';
import '@zui/menu';
import '@zui/form-control';
import '@zui/checkbox';
import {Pick} from './src/main';

const items = [
    {text: 'Apple', value: 'apple', keys: 'fruit food'},
    {text: 'Banana', value: 'banana', keys: 'fruit food'},
    {text: 'Orange', value: 'orange', keys: 'fruit food'},
    {text: 'Strawberries', value: 'strawberries', keys: 'fruit food'},
    {text: 'Cat', value: 'cat', keys: 'animals pet'},
    {text: 'Dog', value: 'dog', keys: 'animals pet'},
    {text: 'Fish', value: 'fish', keys: 'animals food'},
    {text: 'Pig', value: 'pig', keys: 'animals food'},
    {text: '梨子', value: 'pear', keys: 'fruit food'},
    {text: 'Anna', value: 'anna', keys: 'human animals'},
    {text: 'Ben', value: 'ben', keys: 'human animals'},
    {text: 'Cake', value: 'cake', keys: 'food'},
];

onPageUpdate(() => {
    const singlePick = new Pick('#singlePick', {
        id: 'test',
        items,
        defaultValue: 'banana',
        placeholder: '请选择你的最爱',
        searchHint: '搜索选项',
    });
    console.log('> singlePick', singlePick);

    const multiPick = new Pick('#multiPick', {
        multiple: true,
        items,
        defaultValue: 'banana,orange',
        placeholder: '请选择你的最爱',
        menuCheckbox: true,
    });
    console.log('> multiPick', multiPick);
});
