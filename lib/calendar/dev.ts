import 'preact/debug';
import 'zui-dev';
import '@zui/button';
import '@zui/toolbar';
import '@zui/list';
import '@zui/btn-group';
import '@zentao/icons';
import {Calendar} from './src/main';
import events from './dev/events-example';

onPageLoad(() => {
    const calendar = new Calendar('#calendar', {
        headerTitle: 'My Todo Calendar',
        headerActions: [
            {text: 'Export'},
            {text: 'Print', btnType: 'primary'},
        ],
        categories: [
            {
                id: 'DEFAULT',
                name: '默认日历',
                color: 'red',
            },
        ],
        events,
        onClickEvent: (event, category, mouseEvent) => {
            console.log('> onClickEvent', {event, category, mouseEvent});
        },
        onClickDay: function (date, mouseEvent) {
            const dayEvents = this.getDayEvents(date);
            console.log('> onClickDay', {date, mouseEvent, dayEvents});
        },
    });
    console.log('> calendar', calendar);
});
