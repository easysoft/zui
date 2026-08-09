import {Component, RefObject, createRef} from 'preact';
import {$} from '@zui/core';
import {Menu} from '@zui/menu/react';
import {MenuItemOptions} from '@zui/menu';
import {TimePickerMenuProps} from '../types';

export class TimePickerMenu extends Component<TimePickerMenuProps> {
    _ref: RefObject<HTMLDivElement> = createRef();

    _scrollTimer = 0;

    _handleClickItem = (type: 'hour' | 'minute', info: {item: MenuItemOptions}) => {
        this.props.onChange?.(type, +(info.item.key as string));
    };

    componentDidMount(): void {
        this._scrollTimer = window.setTimeout(() => {
            this._scrollTimer = 0;
            $(this._ref.current).find('.menu-item>.active').scrollIntoView({container: '.menu'});
        }, 100);
    }

    componentWillUnmount(): void {
        clearTimeout(this._scrollTimer);
    }

    render(props: TimePickerMenuProps) {
        const {minuteStep = 5, hour, minute} = props;
        const finalMinuteStep = Math.max(1, Math.floor(minuteStep));
        const hours: MenuItemOptions[] = [];
        const minutes: MenuItemOptions[] = [];
        for (let i = 0; i < 24; ++i) {
            hours.push({key: String(i), text: i < 10 ? `0${i}` : i, active: hour === i});
        }
        for (let i = 0; i < 60; i += finalMinuteStep) {
            minutes.push({key: String(i), text: i < 10 ? `0${i}` : i, active: minute === i});
        }
        const menuClass = 'col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover';
        return (
            <div className="time-picker-menu row" ref={this._ref}>
                <Menu
                    className={menuClass}
                    items={hours}
                    onClickItem={this._handleClickItem.bind(this, 'hour')}
                />
                <Menu
                    className={menuClass}
                    items={minutes}
                    onClickItem={this._handleClickItem.bind(this, 'minute')}
                />
            </div>
        );
    }
}
