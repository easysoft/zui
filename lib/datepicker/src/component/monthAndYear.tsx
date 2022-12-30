import {classes} from '@zui/browser-helpers/src/classes';
import {h as _h} from 'preact';
import '@zui/icons';
import dayjs from 'dayjs';
import '@zui/css-icons/src/icons/caret.css';
import {generateArrayNumber} from '../helpers/index';
import '../style/index.css';
import MonthPanel from './monthPanel';
import {DatepickerProps} from '../types';

interface MonthAndYearPanelProps extends DatepickerProps {
    selectedDate: string;
    handleChangeMonth: (month: string)=> void;
}

const MonthAndYearPanel = (props: MonthAndYearPanelProps) => {
    const {selectedDate, handleChangeMonth} = props;
    setTimeout(() => {
        const accordionElement = document.getElementsByClassName('datepicker-accordion');
        if (accordionElement?.length) {
            accordionElement[0].scrollTop = 2400;
        }
    }, 800);

    const currentYear = dayjs(selectedDate).year();

    const years = [...generateArrayNumber(currentYear - 100, currentYear), ...generateArrayNumber(currentYear + 1, currentYear + 100)];

    const handleYear = (event: Event, selectYear: number) => {
        if (!event?.target) {
            return;
        }
        const title = document.querySelectorAll('.datepicker-accordion > ul > li > .datepicker-accordion-title');
        for (let j = 0; j < title.length; j++) {
            if (!title[j].nextElementSibling?.classList.contains('hidden')) {
                title[j].nextElementSibling?.classList.add('hidden');
            }
        }
        event.target.nextElementSibling?.classList.toggle('hidden');
        const accordionDom = document.querySelector('.datepicker-accordion');
        if (!accordionDom) {
            return;
        }
        if (accordionDom.scrollTop + accordionDom.clientHeight === accordionDom.scrollHeight) {
            accordionDom.scrollTop = 0;
        } else {
            if (selectYear < currentYear) {
                accordionDom.scrollTop = accordionDom.scrollTop - 30;
            } else {
                accordionDom.scrollTop = accordionDom.scrollTop + 30;
            }
        }
    };
    return (
        <div class="datepicker-accordion scroll-smooth not-hide-datepicker">
            <ul>
                {years.map((year, yearKey) => <li id={currentYear === year ? 'selected' : ''}>
                    <div class="datepicker-accordion-title" onClick={(e) => handleYear(e, year)}>{year}</div>
                    <div key={yearKey} className={classes('datepicker-accordion-content', currentYear === year ? '' : 'hidden')}>{
                        _h(MonthPanel, {
                            ...props,
                            year: year,
                            handleChangeMonth: handleChangeMonth,
                        })
                    }</div>
                </li>)}
            </ul>
        </div>
    );
};

export default MonthAndYearPanel;
