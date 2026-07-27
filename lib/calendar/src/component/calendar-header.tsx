import {Component} from 'preact';
import {CustomContent, i18n} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';
import {addDate, createDate, formatDate, isSameDay, type DateLike} from '@zui/helpers';
import '@zui/css-icons/src/icons/chevron.css';
import type {CalendarViewMode} from '../types';
import type {CustomContentType} from '@zui/core/src/react';
import type {ToolbarSetting, ToolbarOptions, ToolbarItemOptions} from '@zui/toolbar';

/**
 * 日历头部的属性接口
 */
export type CalendarHeaderProps = {
    /** 标题 */
    title?: CustomContentType;

    /** 当前日期 */
    date?: DateLike;

    /** 日期格式，默认 'yyyy-MM-dd' */
    dateFormat?: string | ((date: Date) => string);

    /** 月份格式，默认 'yyyy-MM' */
    monthFormat?: string | ((date: Date) => string);

    /** 日历视图，默认 'month' */
    mode?: CalendarViewMode;

    /** 头部导航栏属性 */
    navProps?: Partial<ToolbarOptions>;

    /** 按钮尺寸，默认 'sm' */
    btnSize?: ToolbarOptions['size'];

    /** 头部导航栏按钮 */
    navItems?: ToolbarItemOptions[];

    /** 头部操作栏 */
    actions?: ToolbarSetting;
};

/**
 * 日历头部的组件
 */
export class CalendarHeader extends Component<CalendarHeaderProps> {
    protected _getNavItems = (props: CalendarHeaderProps) => {
        const {monthFormat = 'yyyy-MM', dateFormat = 'yyyy-MM-dd', date, navItems = []} = props;
        const current = createDate(date, true);
        const today = new Date();
        current.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        const prev = addDate(current, -1, 'month');
        const next = addDate(current, 1, 'month');

        return [
            {hint: formatDate(today, dateFormat), text: i18n.getLang('today'), command: `.~switchDate/${today.getTime()}`, btnType: isSameDay(current, today) ? 'gray-pale' : 'primary-pale'},
            {hint: formatDate(prev, monthFormat), text: '', textClass: 'chevron-left', command: `.~switchDate/${prev.getTime()}`},
            {type: 'text', text: formatDate(current, monthFormat)},
            {hint: formatDate(next, monthFormat), text: '', textClass: 'chevron-right', command: `.~switchDate/${next.getTime()}`},
            ...navItems,
        ];
    };

    render(props: CalendarHeaderProps) {
        const {title, actions, navProps, btnSize = 'sm'} = props;
        const navItems = this._getNavItems(props);
        return (
            <div className="calendar-header">
                {title ? <CustomContent key="title" content={title} className="calendar-header-title" /> : null}
                <Toolbar key="nav" className="calendar-header-nav" btnType="primary-pale" size={btnSize} gap={2} items={navItems} {...navProps} />
                {actions ? Toolbar.render(actions, [], {key: 'actions', className: 'calendar-header-actions', gap: 2, size: btnSize, btnType: 'default'}, this) : null}
            </div>
        );
    }
}
