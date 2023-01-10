import {Component, createRef} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import {getTimeFormat, getTimeList} from '../helpers';
import type {TimepickerProps, TimeDataProps} from '../types';

export class TimePanel extends Component<TimepickerProps> {

    cellHeight = 24;

    ref = createRef<HTMLDivElement>();

    hourRef = createRef<HTMLDivElement>();

    minuteRef = createRef<HTMLDivElement>();

    secondRef = createRef<HTMLDivElement>();

    state = {
        selectTime: this.props.value || '00:00:00',
    };

    handleMoveTime(data: TimeDataProps) {
        const behavior = 'smooth';
        if (data.hour && this.hourRef.current) {
            this.hourRef.current?.scrollTo({behavior, top: data.hour * this.cellHeight});
        }

        if (data.minute && this.minuteRef.current) {
            this.minuteRef.current?.scrollTo({behavior, top: data.minute * this.cellHeight});
        }

        if (data.second && this.secondRef.current) {
            this.secondRef.current?.scrollTo({behavior, top: data.second * this.cellHeight});
        }
    }

    handleChange(data: TimeDataProps) {
        this.handleMoveTime(data);
        this.setState({selectTime: this.getTimeString(data)});
    }

    getTimeString(timeObj: TimeDataProps) {
        if (this.props.showSeconds) {
            return `${timeObj?.hour && this.addZero(timeObj.hour) || '00'}:${timeObj?.minute && this.addZero(timeObj.minute) || '00'}:${timeObj?.second && this.addZero(timeObj.second) || '00'}`;
        }
        return `${timeObj?.hour && this.addZero(timeObj.hour) || '00'}:${timeObj?.minute && this.addZero(timeObj.minute) || '00'}`;
    }

    addZero(number: number) {
        return number < 10 ? `0${number}` : number;
    }

    renderColumn(unitType: 'hour' | 'minute' | 'second', unitList: number[]) {
        const timeData = getTimeFormat(this.state.selectTime);
        return unitList.map(unit => {
            const isActive = timeData[unitType] === unit;
            const newTime = {...timeData, [unitType]: unit};
            return (
                <button
                    className={classes('btn', 'size-sm', 'ghost', 'flex', {'active': isActive})}
                    type="button"
                    key={`unit-${unitType}-${unit}`}
                    onClick={() => this.handleChange(newTime)}
                >
                    {this.addZero(unit)}
                </button>
            );
        });
    }

    onSubmit() {
        console.log(this.state.selectTime);
        if (this.props.onChange) {
            this.props.onChange(this.state.selectTime);
        }
    }

    onClear() {
        this.setState({selectTime: ''});
        if (this.props.onChange) {
            this.props.onChange('');
        }
    }

    render() {
        const {showSeconds, style} = this.props;
        const {hourList, minuteList, secondList} = getTimeList();
        return (
            <div className={classes('timepicker-timepanel', 'pt-px')} style={style} ref={this.ref}>
                <div className={classes('flex', ' justify-around', 'p-px', 'not-hide-timepicker')}>
                    <div className={'overflow-hidden'}>
                        <div className={'timepicker-timepanel-select-col'} ref={this.hourRef}>
                            {this.renderColumn('hour', hourList)}
                        </div>
                    </div>
                    <div className={'overflow-hidden'}>
                        <div className={'timepicker-timepanel-select-col'} ref={this.minuteRef}>
                            {this.renderColumn('minute', minuteList)}
                        </div>
                    </div>
                    {
                        showSeconds && <div className={'overflow-hidden'}>
                            <div className={'timepicker-timepanel-select-col'} ref={this.secondRef}>
                                {this.renderColumn('second', secondList)}
                            </div>
                        </div>
                    }
                </div>
                <div className={classes('timepicker-timepanel-actions', 'flex', 'p-px', 'justify-between', 'align-center')}>
                    <button className={classes('btn', 'size-sm', 'ghost', 'text-primary')} type="button" onClick={this.onClear.bind(this)}>清除</button>
                    <button className={classes('btn', 'size-sm', 'ghost', 'text-primary')} type="button" onClick={this.onSubmit.bind(this)}>确认</button>
                </div>
            </div>
        );
    }
}
