export type WaitUntilOptions<T> = {
    /** 检查间隔时间，默认 100ms */
    interval?: number;

    /** 超时时间，默认 60000ms */
    timeout?: number;

    /** 定时器引用，用于手动清除定时器 */
    timerRef?: {current?: number};

    /** 超时返回值获取函数，默认 undefined */
    timeoutValue?: (checkCount: number) => T | Promise<T>;

    /** 终止信号，用于手动终止 */
    abortSignal?: AbortSignal;
};

/**
 * 等待条件为真
 * @param condition 条件函数
 * @param options 选项
 * @returns 返回值
 */
export function waitUntil<T>(condition: (returnValue: (value: T) => void, checkCount: number) => unknown | Promise<unknown>, optionsOrTimeout?: WaitUntilOptions<T> | number): Promise<T | void> {
    return new Promise((resolve, reject) => {
        const {interval = 100, timeout = 60000, timerRef, timeoutValue, abortSignal} = typeof optionsOrTimeout === 'number' ? {timeout: optionsOrTimeout} : (optionsOrTimeout || {});
        let checkCount = 0;
        let checking = false;
        let value: T | undefined;
        let valueReturned = false;
        const returnValue = (v: T) => {
            valueReturned = true;
            value = v;
        };
        const timerID = window.setInterval(async () => {
            if (checking) {
                return;
            }
            if (abortSignal?.aborted) {
                clearInterval(timerID);
                resolve(undefined);
                return;
            }
            checking = true;
            checkCount++;
            try {
                const checkResult = await condition(returnValue, checkCount);
                if (checkResult) {
                    clearInterval(timerID);
                    resolve(valueReturned ? value : checkResult as T);
                    return;
                }
                if (checkCount * interval >= timeout) {
                    const timeoutResult = timeoutValue ? (await timeoutValue(checkCount)) : undefined;
                    clearInterval(timerID);
                    resolve(timeoutResult);
                    return;
                }
            } catch (error) {
                // Reject instead of hanging forever when the condition throws or rejects.
                clearInterval(timerID);
                reject(error);
                return;
            } finally {
                checking = false;
            }
        }, interval);
        if (timerRef) {
            timerRef.current = timerID;
        }
    });
}
