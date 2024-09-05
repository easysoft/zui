import 'preact/debug';
import 'zui-dev';
import {Calendar} from './src/main';

onPageLoad(() => {
    const calendar = new Calendar('#calendar', {
        maxVisibleEvents:2,
        shrinkFreeWeekend:true,
        calendarEvents:[{
            id: '1',
            title: '有小时分钟的',
            calendarEventGroup: '1',
            date:new Date(2024, 7, 8, 1, 0),
            description: '不会开发，只会写文档',
        },
        {
            id: '5',
            title: 'event1',
            calendarEventGroup: '1',
            date:new Date(2024, 7, 8, 7, 30, 30),
            description: 'nothing To say',
        },
        {
            id: '6',
            title: 'event1',
            calendarEventGroup: '1',
            date:new Date(2024, 7, 8, 7, 30, 30),
            description: 'nothing To say',
        },
        {
            id: '7',
            title: 'event1',
            calendarEventGroup: '1',
            date:new Date(2024, 7, 8, 7, 30, 30),
            description: 'nothing To say',
        },
        {
            id: '3',
            title: 'event3',
            calendarEventGroup: '1',
            date:new Date(2024, 7, 8, 7, 30, 30),
            description: 'nothing To say',
        },
        {
            id: '4',
            title: 'event3',
            calendarEventGroup: '1',
            date:new Date(2024, 7, 9),
            description: '你好呀',
        },
        // {
        //     id: '5',
        //     title: 'event1',
        //     calendarEventGroup: '1',
        //     date:new Date(2024, 7, 10),
        //     description: 'event1 description',
        // },
        // {
        //     id: '6',
        //     title: 'event1',
        //     calendarEventGroup: '1231',
        //     date:new Date(2024, 7, 8),
        //     description: 'event1 description',
        // },
        ],
        calendarEventGroups:[{
            id: '1',
            title: 'event set 1',
            color: '#6a9955'}, {
            id: '2',
            title: 'event set 2',
            color: '#1d4ed8'}, {id: '3', title: 'event set 3', color: '#e2e8f0'}]});
    console.log('> calendar instance created', calendar);
});