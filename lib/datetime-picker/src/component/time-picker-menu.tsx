import {Component, RefObject, createRef} from 'preact';
import {$} from '@zui/core';
import {Menu} from '@zui/menu/src/component';
import {MenuItemProps} from '@zui/menu';
import {TimePickerMenuProps} from '../types';

export class TimePickerMenu extends Component<TimePickerMenuProps> {
    #ref: RefObject<HTMLDivElement> = createRef();

    #handleClickItem = (type: 'hour' | 'minute', info: {item: MenuItemProps}) => {
        this.props.onChange?.(type, String(info.item.key || ''));
    };

    componentDidMount(): void {
        $(this.#ref.current).find('.menu-item>.active').scrollIntoView();
    }

    render(props: TimePickerMenuProps) {
        const {minuteStep = 5, hour, minute} = props;
        const hours: MenuItemProps[] = [];
        const minutes: MenuItemProps[] = [];
        for (let i = 0; i < 24; ++i) {
            hours.push({key: i, text: i < 10 ? `0${i}` : i, active: hour === i});
        }
        for (let i = 0; i < 60; i += minuteStep) {
            minutes.push({key: i, text: i < 10 ? `0${i}` : i, active: minute === i});
        }
        const menuClass = 'col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover';
        return (
            <div className="time-picker-menu row" ref={this.#ref}>
                <Menu
                    className={menuClass}
                    items={hours}
                    onClickItem={this.#handleClickItem.bind(this, 'hour')}
                />
                <Menu
                    className={menuClass}
                    items={minutes}
                    onClickItem={this.#handleClickItem.bind(this, 'minute')}
                />
            </div>
        );
    }
}
