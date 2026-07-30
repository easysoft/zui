export function evalValue<T = unknown>(value: string, ...args: [name: string, value: unknown][]): T {
    if (value.includes('RAWJS')) {
        value = value.split('"RAWJS<').join('').split('>RAWJS"').join('').split('RAWJS<').join('').split('>RAWJS').join('').split('<RAWJS_QUOTE>').join('"').split('<RAWJS_LINE>').join('\n');
    }

    const func = new Function(...args.map(([name]) => name), `return ${value.trim()}`);
    return func(...args.map(([, value]) => value));
}

export function parseRawData<T = unknown>(data: string, ...args: [name: string, value: unknown][]): T {
    if (!data.includes('RAWJS')) {
        return JSON.parse(data);
    }

    return JSON.parse(data, (_key, value) => {
        if (typeof value === 'string' && value.includes('RAWJS<')) {
            return evalValue(value, ...args);
        }
        return value;
    });
}

export function jsRaw(data: unknown): string {
    return JSON.stringify(data, (_, value) => {
        if (typeof value === 'function') {
            return `RAWJS<${value.toString().split('"').join('<RAWJS_QUOTE>').split('\n').join('<RAWJS_LINE>')}>RAWJS`;
        }
        return value;
    });
}
