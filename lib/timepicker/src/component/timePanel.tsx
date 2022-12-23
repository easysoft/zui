import {Component, createRef} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import {TimepickerProps, TimeDataProps} from '../types';
import {getTimeFormat, getTimeList} from '../helpers';

export class TimePanel extends Component<TimepickerProps> {

    cellHeight = 24;

    ref = createRef<HTMLMenuElement>();

    hourRef = createRef<HTMLMenuElement>();

    minuteRef = createRef<HTMLMenuElement>();

    secondRef = createRef<HTMLMenuElement>();

    state = {
        selectTime: this.props.value || '00:00:00',
    };

    handleMoveTime(data: {hour: number, minute: number, second?: number}) {
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

    getTimeString(timeObj: TimeDataProps): string {
        if (this.props.showSeconds) {
            return `${timeObj?.hour && this.addZero(timeObj.hour) || '00'}:${timeObj?.minute && this.addZero(timeObj.minute) || '00'}:${timeObj?.second && this.addZero(timeObj.second) || '00'}`;
        }
        return `${timeObj?.hour && this.addZero(timeObj.hour) || '00'}:${timeObj?.minute && this.addZero(timeObj.minute) || '00'}`;
    }

    addZero(number: number) {
        return number < 10 ? `0${number}` : number;
    }

    renderColumn(unitType: 'hour' | 'minute' | 'second', unitList: Array<number>) {
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
        const {className, showSeconds, style} = this.props;
        const {hourList, minuteList, secondList} = getTimeList();
        return (
            <div className={classes('timepicker-timepanel', 'pt-px', className, {'is-enable-sec': showSeconds})} style={style} ref={this.ref}>
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
