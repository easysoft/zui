import 'zui-dev';
import '@zui/button';
import '@zui/list';
import '@zui/menu';
import '@zui/form-control';
import '@zui/checkbox';
import '@zui/avatar';
import '@zui/tree';
import {Picker} from './src/main';

const items = [
    {text: 'Apple', value: 'apple', keys: 'fruit food'},
    {text: 'Banana Banana Banana', value: 'banana', keys: 'fruit food', disabled: true},
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
            {text: '香蕉', value: 'banana', keys: 'fruit food xiangjiao', disabled: true},
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
        cache: false,
        maxItemsCount: 4,
    });
    console.log('> singlePickerRemote', singlePickerRemote);

    const multiPickerRemote = new Picker('#multiPickerRemote', {
        name: 'selectSome',
        multiple: true,
        items: '/lib/picker/dev/nested-items.json',
        tree: true,
        toolbar: true,
        menu: {
            itemProps: {
                avatarClass: 'size-sm',
            },
            checkbox: true,
            getItem(item) {
                if (item.type === 'item') {
                    if (item.items) {
                        item.titleClass = 'font-bold';
                    } else {
                        item.avatar = {
                            text: item.text?.[0], // 或者通过 src 指定图片
                            size: 'xs',
                            circle: true,
                        };

                        // 对选择项值为 `xxx/xxx` 进行特殊判断
                        const value = item.value;
                        if (typeof value === 'string' && value.includes('/')) {
                            // 获取 `/xxx` 的部分
                            const suffix = '/' + value.split('/')[1];
                            // 判断已选中的值中是否保护 `/xxx` 结尾的值，如果有，将当前项目设置为禁用
                            if (this.props.valueList.some(x => x !== value && x.endsWith(suffix))) {
                                item.disabled = true;
                            }
                        }
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
        // tree: true,
        items: nestedItems,
        menu: {
            itemProps: {
                avatarClass: 'size-sm',
            },
            checkbox: true,
            getItem(item) {
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
        onSelect: (values) => console.log('onSelect', values),
        onDeselect: (values) => console.log('onDeselect', values),
    });
    console.log('> singlePicker', singlePicker);

    const multiPicker = new Picker('#multiPicker', {
        name: 'selectSome',
        multiple: true,
        items: items,
        defaultValue: 'banana,orange',
        placeholder: '请选择你的最爱',
        toolbar: true,
        onSelect: (values) => console.log('onSelect', values),
        onDeselect: (values) => console.log('onDeselect', values),
    });
    console.log('> multiPicker', multiPicker);

    const noSearchPicker = new Picker('#noSearchPicker', {
        'multiple': true,
        'items': [
            {'text': '查看研发需求', 'value': 'story', 'items': [{'text': 'SR1', 'value': '1'}, {'text': 'SR2', 'value': '2'}, {'text': 'SR3', 'value': '3'}, {'text': 'SR4', 'value': '4'}]},
        ],
        'search': false,
        'display': 'test {value}',
        'emptyValue': '',
        'defaultValue': '',
        menu: {
            checkbox: true,
        },
    });
    console.log('> noSearchPicker', noSearchPicker);

    const noSearchMultiPicker = new Picker('#noSearchMultiPicker', {
        items,
        search: false,
        multiple: true,
        placeholder: '请选择你的最爱',
        display: '已选择 {count} 项',
    });
    console.log('> noSearchMultiPicker', noSearchMultiPicker);
});
