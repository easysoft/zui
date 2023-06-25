export const delay = (ms: number, setTimerID: (timerID: number) => void) => new Promise(resolve => {
    const id = window.setTimeout(resolve, ms);
    if (setTimerID) {
        setTimerID(id);
    }
});
