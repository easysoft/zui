import dayjs from 'dayjs';

export const getTimeFormat = (time = '00:00:00') => {
    const day = dayjs(`1989-01-01 ${time}`);
    return {
        hour: day.hour(),
        minute: day.minute(),
        second: day.second(),
    };
};

export function getTimeList() {
    let hourList = new Array<number>(24).fill(0);
    let minuteList = new Array<number>(60).fill(0);
    let secondList = new Array<number>(60).fill(0);

    hourList = hourList.map((num, index) => num + index);
    minuteList = minuteList.map((num, index) => num + index);
    secondList = secondList.map((num, index) => num + index);

    return {hourList, minuteList, secondList};
}
