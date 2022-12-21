import {classes} from '@zui/browser-helpers/src/classes';
import '@zui/icons';
import dayjs from 'dayjs';
import '@zui/css-icons/src/icons/caret.css';
import {createGroups, generateArrayNumber} from '../helpers/index';

const MonthPanel = (props) => {
    const {format, selectedDate, changeYear, handleChangeMonth} = props;

    const monthPanel = createGroups(generateArrayNumber(1, 12), 4); 
    return (
        <div className={classes('datepicker-calendar-month')}>
            <div className="datepicker-calendar-bar">
                <button type="button" className="btn ghost" onClick={() => {changeYear('subtract');}}>
                    <i className="icon icon-angle-left" />
                </button>
                <button type="button" className="btn ghost">
                    {dayjs(selectedDate).format('YYYY 年')}
                </button>
                <button type="button" className="btn ghost" onClick={() => {changeYear('add');}}>
                    <i className="icon icon-angle-right" />
                </button>
            </div>
            <table className="datepicker-calendar-month-table">
                <tbody className="datepicker-calendar-month-table-body">
                    {monthPanel.map((group, groupKey) => <tr key={groupKey}>{group.map((month, monthKey) => {
                        const classList = ['text-center'];
                        const year = dayjs(selectedDate).year();
                        const showMonth = dayjs(`${year}-${month}-01`).format(format);
                        
                        return (<td key={monthKey} className={classes(classList)}>
                            <div className={classes('btn', 'ghost', 'datepicker-calendar-month')} onClick={() => {handleChangeMonth(showMonth);}}>
                                {dayjs(showMonth).format('MM')} 月
                            </div>
                        </td>);
                    })}</tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default MonthPanel;
