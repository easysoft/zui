import 'zui-dev';
import '@zui/button';
import '@zui/list';
import '@zui/menu';
import '@zui/form-control';
import '@zui/checkbox';
import '@zui/avatar';
import {Picker} from './src/main';

const items = [
    {text: 'Apple', value: 'apple', keys: 'fruit food'},
    {text: 'Banana Banana Banana', value: 'banana', keys: 'fruit food'},
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

const nestedItems = [
    {
        text: '水果',
        value: 'fruit',
        items: [
            {text: '西红柿', value: 'tomato', keys: 'fruit food xihongshi', subtitle: '绿色蔬菜'},
            {text: '西瓜', value: 'watermelon', keys: 'fruit food xigua'},
            {text: '苹果', value: 'apple', keys: 'fruit food pingguo'},
            {text: '香蕉', value: 'banana', keys: 'fruit food xiangjiao'},
        ],
    },
    {
        text: '蔬菜',
        value: 'vegetable',
        items: [
            {text: '西红柿', value: 'tomato', keys: 'fruit food xihongshi'},
            {text: '西瓜2', value: 'watermelon2', keys: 'fruit food xigua'},
            {text: '苹果2', value: 'apple2', keys: 'fruit food pingguo'},
            {text: '香蕉2', value: 'banana2', keys: 'fruit food xiangjiao'},
        ],
    },
];

onPageUpdate(() => {
    const singlePickerRemote = new Picker('#singlePickerRemote', {
        name: 'selectOne',
        items: '/lib/picker/dev/items.json',
        defaultValue: 'banana',
        placeholder: '请选择你的最爱',
        searchHint: '搜索选项',
    });
    console.log('> singlePickerRemote', singlePickerRemote);

    const multiPickerRemote = new Picker('#multiPickerRemote', {
        name: 'selectSome',
        multiple: true,
        items: '/lib/picker/dev/nested-items.json',
        menu: {
            itemProps: {
                avatarClass: 'size-sm',
            },
            checkbox: true,
            getItem: (item) => {
                if (item.type === 'item') {
                    if (item.items) {
                        item.titleClass = 'font-bold';
                    } else {
                        item.avatar = {
                            text: item.text?.[0], // 或者通过 src 指定图片
                            size: 'xs',
                            circle: true,
                        };
                    }
                }
                return item;
            },
        },
        defaultValue: 'banana,orange',
        placeholder: '请选择你的最爱',
    });
    console.log('> multiPickerRemote', multiPickerRemote);

    const singlePickerNested = new Picker('#singlePickerNested', {
        name: 'selectOne',
        items: nestedItems,
        defaultValue: 'banana',
        placeholder: '请选择你的最爱',
        searchHint: '搜索选项',
    });
    console.log('> singlePickerNested', singlePickerNested);

    const multiPickerNested = new Picker('#multiPickerNested', {
        name: 'selectSome',
        multiple: true,
        items: nestedItems,
        menu: {
            itemProps: {
                avatarClass: 'size-sm',
            },
            checkbox: true,
            getItem: (item) => {
                if (item.type === 'item') {
                    if (item.items) {
                        item.titleClass = 'font-bold';
                    } else {
                        item.avatar = {
                            text: item.text?.[0], // 或者通过 src 指定图片
                            size: 'xs',
                            circle: true,
                        };
                    }
                }
                return item;
            },
        },
        defaultValue: 'banana,orange',
        placeholder: '请选择你的最爱',
    });
    console.log('> multiPickerNested', multiPickerNested);

    const singlePicker = new Picker('#singlePicker', {
        name: 'selectOne',
        items,
        defaultValue: 'banana',
        placeholder: '请选择你的最爱',
        searchHint: '搜索选项',
    });
    console.log('> singlePicker', singlePicker);

    const multiPicker = new Picker('#multiPicker', {
        name: 'selectSome',
        multiple: true,
        items: items,
        defaultValue: 'banana,orange',
        placeholder: '请选择你的最爱',
    });
    console.log('> multiPicker', multiPicker);
});
