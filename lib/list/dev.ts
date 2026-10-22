import 'zui-dev';
import '@zui/css-icons';
import '@zui/button';
import '@zui/avatar';
import '@zui/checkbox';
import '@zui/utilities';
import {List, NestedList} from './src/main';

let instances: {destroy: () => void}[] = [];

onPageUpdate(() => {
    instances.forEach(instance => instance.destroy());
    instances = [];

    const largeList = new List('#largeList', {
        items: Array.from({length: 10000}, (_, index) => ({id: `large-${index}`, text: `列表项 ${index + 1}`})),
        maxVisibleItems: 100,
        showMoreStep: 50,
        showMoreText: count => `剩余 ${count} 项，点击再显示 50 项`,
    });

    const autoMoreList = new List('#autoMoreList', {
        items: Array.from({length: 1000}, (_, index) => ({id: `auto-${index}`, text: `自动列表项 ${index + 1}`})),
        maxVisibleItems: 20,
        showMoreStep: 10,
        autoShowMore: true,
        showMoreText: count => `剩余 ${count} 项，滚动至此自动显示，也可点击显示`,
    });

    const remoteNestedList = new NestedList('#remoteNestedList', {
        items: '/lib/list/dev/nested-items.json',
        checkbox: true,
        checkOnClick: 'any',
        selectOnChecked: true,
        defaultNestedShow: {'0:0:1': true},
        activeOnHover: true,
        onCheck: function (changes, checks) {
            console.log('> onCheck', {changes, checks, allChecks: this.getChecks(), list: this});
        },
        onClickItem: (...args) => {
            console.log('>> onClickItem', args);
        },
    });
    console.log('> remoteNestedList', remoteNestedList);

    const remoteNestedList2 = new NestedList('#remoteNestedList2', {
        items: '/lib/list/dev/nested-items-2.json',
        checkbox: true,
        checkOnClick: 'any',
        selectOnChecked: true,
        defaultNestedShow: {'0:0': true},
        activeOnHover: true,
        onCheck: function (changes, checks) {
            console.log('> onCheck', {changes, checks, allChecks: this.getChecks(), list: this});
        },
        onClickItem: (...args) => {
            console.log('>> onClickItem', args);
        },
    });
    console.log('> remoteNestedList2', remoteNestedList2);

    const remoteSimpleList = new List('#remoteSimpleList', {
        checkbox: true,
        checkOnClick: true,
        selectOnChecked: true,
        activeOnHover: true,
        items: '/lib/list/dev/items.json',
    });
    console.log('> remoteSimpleList', remoteSimpleList);

    const items = [
        {
            type: 'heading',
            title: '这是标题',
        },
        {
            type: 'divider',
        },
        {
            title: '研发',
            subtitle: '副标题',
            onClick: () => console.log('click 研发'),
            items: [
                {

                    icon: {className: 'example-icon example-icon-star', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%202l3%206%207%201-5%205%201%208-6-4-6%204%201-8-5-5%207-1z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}},
                    title: '大产品',
                    url: '#大产品',
                    items: [
                        {text: '前端', url: '#前端', checked: true},
                        {text: '后端', subtitle: '#后端', checked: true, onClick: () => console.log('click 后端')},
                    ],
                },
                {title: '桌面端'},
                {title: '移动端', checked: true},
                {title: '测试'},
                {title: '运维'},
            ],
        },
        {title: '市场', active: true},
        {title: '技术支持', selected: true},
        {title: '财务'},
        {title: '行政'},
    ];
    const nestedList = new NestedList('#nestedList', {
        items: items,
        checkbox: true,
        checkOnClick: true,
        defaultNestedShow: true,
        maxVisibleItems: 3,
        showMoreText: '剩余 {count} 项，点击再显示 3 项',
    });
    console.log('> nestedList', nestedList);

    const simpleList = new List('#simpleList', {
        checkbox: true,
        checkOnClick: true,
        items: [
            {text: '文本', onClick: () => console.log('ok')},
            {title: '标题'},
            {type: 'heading', title: 'heading'},
            {type: 'divider'},
            {title: '大标题', subtitle: '副标题'},
            {title: '链接', subtitle: 'https://openzui.com', url: 'https://openzui.com'},
            {title: '超复杂情况', subtitle: '这是副标题', url: 'https://openzui.com', icon: {className: 'example-icon example-icon-star', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%202l3%206%207%201-5%205%201%208-6-4-6%204%201-8-5-5%207-1z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, trailingIcon: {className: 'chevron-right', 'aria-hidden': true}, avatar: {icon: {className: 'example-icon example-icon-flag', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2022V3h14l-3%205%203%205H5%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, className: 'primary'}},
            {title: '超复杂情况', subtitle: '这是副标题', icon: {className: 'example-icon example-icon-star', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%202l3%206%207%201-5%205%201%208-6-4-6%204%201-8-5-5%207-1z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, trailingIcon: {className: 'chevron-right', 'aria-hidden': true}, avatar: {icon: {className: 'example-icon example-icon-flag', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2022V3h14l-3%205%203%205H5%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, className: 'success'}, checked: true, actions: [{icon: {className: 'i-check', 'aria-hidden': true}}]},
        ],
    });
    console.log('> simpleList', simpleList);

    instances.push(largeList, autoMoreList, remoteNestedList, remoteNestedList2, remoteSimpleList, nestedList, simpleList);
});
