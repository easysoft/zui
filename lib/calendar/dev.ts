import 'preact/debug';
import 'zui-dev';
import {Calendar} from './src/main';

onPageLoad(() => {
    const calendarNormal = new Calendar('.calendar-normal', {});
    const calendarEvent = new Calendar('.calendar-event', {
        maxVisibleEvents:2,
        shrinkFreeWeekend:true,
        calendarEvents:[{
            id: '1',
            title: '观看天花板',
            calendarEventGroup: '1',
            date:new Date(2024, 10, 25, 9, 29, 12, 34),
            description: '观看天花板',
        },
        {
            id: '2',
            title: '和绿巨人睡觉',
            calendarEventGroup: '2',
            date:new Date(2024, 10, 26, 7, 12, 47),
            description: '和绿巨人睡觉',
        },
        {
            id: '3',
            title: '和路人乙捶打',
            calendarEventGroup: '3',
            date:new Date(2024, 10, 27, 7, 30, 30),
            description: '和路人乙捶打',
        },
        {
            id: '4',
            title: '自言自语',
            calendarEventGroup: '4',
            date:new Date(2024, 10, 28, 1, 58, 30),
            description: '自言自语',
        },
        {
            id: '5',
            title: '观望天花板',
            calendarEventGroup: '5',
            date:new Date(2024, 10, 29, 7, 30, 30),
            description: '观望天花板',
        },
        {
            id: '6',
            title: 'event3',
            calendarEventGroup: '1',
            date:new Date(2024, 11, 9),
            description: '你好呀',
        },
        ],
        calendarEventGroups:[{
            id: '1',
            title: 'event set 1',
            color: '#f39988'}, {
            id: '2',
            title: 'event set 2',
            color: '#d4a785'}, {id: '3', title: 'event set 3', color: '#29bcd2'},
        {id: '4', title: 'event set 4', color: '#7ec67e'},
        {id: '5', title: 'event set 5', color: '#f1bd73'}]});
    const calendar = new Calendar('.calendar', {
        maxVisibleEvents:2,
        shrinkFreeWeekend:true,
        calendarEvents:[{
            id: '1',
            title: '观看天花板',
            calendarEventGroup: '1',
            date:new Date(2024, 8, 25, 9, 29),
            description: '观看天花板',
        },
        {
            id: '2',
            title: '和绿巨人睡觉',
            calendarEventGroup: '2',
            date:new Date(2024, 8, 26, 7, 12, 47),
            description: '和绿巨人睡觉',
        },
        {
            id: '3',
            title: '和路人乙捶打',
            calendarEventGroup: '3',
            date:new Date(2024, 8, 27, 7, 30, 30),
            description: '和路人乙捶打',
        },
        {
            id: '4',
            title: '自言自语',
            calendarEventGroup: '4',
            date:new Date(2024, 8, 28, 1, 58, 30),
            description: '自言自语',
        },
        {
            id: '5',
            title: '观望天花板',
            calendarEventGroup: '5',
            date:new Date(2024, 8, 29, 7, 30, 30),
            description: '观望天花板',
        },
        {
            id: '6',
            title: 'event3',
            calendarEventGroup: '1',
            date:new Date(2024, 7, 9),
            description: '你好呀',
        },
        ],
        calendarEventGroups:[{
            id: '1',
            title: 'event set 1',
            color: '#f39988'}, {
            id: '2',
            title: 'event set 2',
            color: '#d4a785'}, {id: '3', title: 'event set 3', color: '#29bcd2'},
        {id: '4', title: 'event set 4', color: '#7ec67e'},
        {id: '5', title: 'event set 5', color: '#f1bd73'}]});

    console.log('> calendar-normal instance created', calendarNormal);
    console.log('> calendar-event instance created', calendarEvent);
    console.log('> calendar instance created', calendar);
});