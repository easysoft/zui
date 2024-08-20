import 'preact/debug';
import 'zui-dev';
import {Calendar} from './src/main';

onPageLoad(() => {
    const calendar = new Calendar('#calendar', {
        maxVisibleEvents:3,
        calendarEvents:[{
            id: '1',
            title: 'event1',
            calendarEventSet: '2022-01-01',
            date:new Date(2024, 7, 8),
            description: 'event1 description',
        },
        {
            id: '1',
            title: 'event1',
            calendarEventSet: '2022-01-01',
            date:new Date(2024, 7, 8),
            description: 'event1 description',
        },
        {
            id: '1',
            title: 'event1',
            calendarEventSet: '2022-01-01',
            date:new Date(2024, 7, 8),
            description: 'event1 description',
        },
        {
            id: '1',
            title: 'event1',
            calendarEventSet: '2022-01-01',
            date:new Date(2024, 7, 8),
            description: 'event1 description',
        },
        {
            id: '1',
            title: 'event1',
            calendarEventSet: '2022-01-01',
            date:new Date(2024, 7, 8),
            description: 'event1 description',
        },
        {
            id: '1',
            title: 'event1',
            calendarEventSet: '2022-01-01',
            date:new Date(2024, 7, 8),
            description: 'event1 description',
        },
        ]});
    console.log('> calendar instance created', calendar);
});