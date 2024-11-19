export function evalValue<T = unknown>(value: string, ...args: unknown[]): T {
    if (value.includes('RAWJS')) {
        value = value.split('"RAWJS<').join('').split('>RAWJS"').join('').split('<RAWJS_QUOTE>').join('"').split('<RAWJS_LINE>').join('\n');
    }
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const func = new Function(`return ${value}`);
    return func(...args);
}

export function parseRawData<T = unknown>(data: string, ...args: unknown[]): T {
    if (data.includes('RAWJS')) {
        return evalValue(data, ...args);
    }

    return JSON.parse(data);
}

export function jsRaw(data: unknown): string {
    return JSON.stringify(data, (_, value) => {
        if (typeof value === 'function') {
            return `RAWJS<${value.toString().split('"').join('<RAWJS_QUOTE>').split('\n').join('<RAWJS_LINE>')}>RAWJS`;
        }
    });
}
