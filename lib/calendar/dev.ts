import 'preact/debug';
import 'zui-dev';
import {Calendar} from './src/main';

onPageLoad(() => {
    const calendar = new Calendar('#calendar', {
        maxVisibleEvents:3,
        calendarEvents:[{
            id: '1',
            title: 'event1',
            calendarEventGroup: '1',
            date:new Date(2024, 7, 8),
            description: 'event1 description',
        },
        {
            id: '1',
            title: 'event1',
            calendarEventGroup: '1',
            date:new Date(2024, 7, 8),
            description: 'event1 description',
        },
        {
            id: '1',
            title: 'event1',
            calendarEventGroup: '1',
            date:new Date(2024, 7, 8),
            description: 'event1 description',
        },
        {
            id: '1',
            title: 'event1',
            calendarEventGroup: '1',
            date:new Date(2024, 7, 9),
            description: 'event1 description',
        },
        {
            id: '1',
            title: 'event1',
            calendarEventGroup: '1',
            date:new Date(2024, 7, 10),
            description: 'event1 description',
        },
        {
            id: '1',
            title: 'event1',
            calendarEventGroup: '1231',
            date:new Date(2024, 7, 8),
            description: 'event1 description',
        },
        ],
        calendarEventGroups:[{
            id: '1',
            title: 'event set 1',
            color: '#6a9955'}]});
    console.log('> calendar instance created', calendar);
});