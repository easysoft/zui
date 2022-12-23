import dayjs from 'dayjs';

export const getTimeFormat = (time?: string) => {
    const dayObject = dayjs(`1989-01-01 ${time || '00:00:00'}`);
    return {
        hour: dayObject.hour(),
        minute: dayObject.minute(),
        second: dayObject.second(),
    };
};

export function getTimeList(): {hourList: Array<number>, minuteList: Array<number>, secondList: Array<number>} {
    let hourList = new Array(24).fill(0);
    let minuteList = new Array(60).fill(0);
    let secondList = new Array(60).fill(0);

    hourList = hourList.map((num, index) => num + index);
    minuteList = minuteList.map((num, index) => num + index);
    secondList = secondList.map((num, index) => num + index);

    return {hourList, minuteList, secondList};
}