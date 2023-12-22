export type TimePickerMenuProps = {
    onChange?: (type: 'hour' | 'minute', value: number) => void;
    minuteStep?: number;
    time?: [hour: number, minute: number];
    hour?: number;
    minute?: number;
};
