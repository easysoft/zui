import {HElement} from '@zui/core';
import '@zui/label';
import {CalendarEventDom} from './calendar-event';

import type {CalendarProps, CalendarEvent, CalendarContentState} from '../types';
import type {Attributes, RenderableProps, VNode} from 'preact';

export class CalendarContent<P extends CalendarProps = CalendarProps> extends HElement<P, CalendarContentState> {
    constructor(props: P) {
        super(props);
        this.state = {'dateList': this.getPropsDateIndex(props)};
    }

    //传递日期，计算从props中计算出属于当前日期的事件
    getEventsForCurrentDate(month: number, day: number, events: CalendarEvent[]): CalendarEvent[] {
        const eventSet = events.filter(event => {
            return event.day === day && event.month === month;
        });
        return eventSet;
    }

    //生成适于当前页面渲染的日期事件列表
    generateEventList(events: CalendarEvent[]) { 
        const currentDateList = this.state.dateList.map((line) => {
            line.map((item) => {
                const eventSet = this.getEventsForCurrentDate(item.month, item.day, events);
                return item.events = eventSet;
            });
        });
        console.log(currentDateList);
        // this.setState({'dateList': currentDateList});
    }
        
    //通用方法：通过月份计算出当前月份开头的日期
    generateCalendarPagesByYear(year: number): {month: number, day: number, events?: CalendarEvent[]}[][][] {
        const pages:  {month: number, day: number}[][][] = [];
      
        // 创建日期对象，设置为当前年份的1月1日
        const currentDate = new Date(year, 0, 1);
      
        while (currentDate.getFullYear() === year) {
            const page:  {month: number, day: number}[][] = [];
            for (let i = 0; i < 6; i++) {
                const week:  {month: number, day: number}[] = [];
                for (let j = 0; j < 7; j++) {
                    week.push({'month':currentDate.getMonth() + 1, 'day':currentDate.getDate()});
                    currentDate.setDate(currentDate.getDate() + 1);
                }
                page.push(week);
            }
            pages.push(page);
        }
        return pages;
    }

    // 通用方法：通过月份计算出当前日期在生成的日期的索引
    getDateIndex(pages: {month: number, day: number}[][][], month: number, day: number): number {
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            for (let j = 0; j < page.length; j++) {
                if (page[j][0]?.month === month && (page[j][0]?.day <= day && page[j][0]?.day >= day - 7)) {
                    return Number(i);
                }
            }
        }
        return NaN;
    }

    // 通用方法：获取当前props的日期索引
    getPropsDateIndex(props: CalendarProps) {
        const {year, month, day} = props;
        const pages = this.generateCalendarPagesByYear(year);
        return pages[this.getDateIndex(pages, month, day)];
    }

    render(props: RenderableProps<P>): VNode<Attributes> {
        const headerList = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        // const { events, calendarEventSet, onDateClick, onEventClick, onEventDrop, maxVisibleEvents} = props;
        return (<div className="calendar">
            <table className="calendar-table">
                <thead className="calendar-content-header">
                    <tr >
                        {
                            headerList.map((item, index) => {
                                return <th key={index} className="calendar-header-part">{item}</th>;
                            })
                        }
                    </tr>
                </thead>
                <tbody className="calendar-body">
                    {this.state.dateList.map((line) => {
                        return (<tr>{   line.map((item) => {
                            return <td key={`${item.month}-${item.day}`} className={(props.year === new Date().getFullYear() && item.month === new Date().getMonth() + 1 ? 'active' : '') + (item.day === props.day ? '-today' : '')}>
                                <div className={'calendar-body-part'}>
                                    <div className='calendar-body-header'>
                                        {item.day == 1 ? <label className='label gray calendar-body-header-month'>{item.month}月</label> : ''}
                                        <div className='calendar-body-header-day'>{item.day}</div>
                                    </div>
                                </div>
                                {item.events ? <CalendarEventDom {...item.events}></CalendarEventDom> : ''}</td>;
                        })}</tr>);
                    })}
                </tbody>
            </table></div>);
    }
}