export function isDiff(value1: unknown, value2: unknown) {
    if (value1 === value2) {
        return false;
    }
    if (value1 && value2) {
        const typeOfValue1 = typeof value1;
        const typeOfValue2 = typeof value2;
        if (typeOfValue1 !== typeOfValue2) {
            return true;
        }
        if (typeOfValue1 === 'object' && typeOfValue2 === 'object') {
            const isArray1 = Array.isArray(value1);
            const isArray2 = Array.isArray(value2);
            if (isArray1 !== isArray2) {
                return true;
            }
            if (isArray1 && isArray2) {
                if (value1.length !== value2.length) {
                    return true;
                }
                for (let i = 0; i < value1.length; i++) {
                    if (isDiff(value1[i], value2[i])) {
                        return true;
                    }
                }
                return false;
            }

            const keys1 = Object.keys(value1);
            const keys2 = Object.keys(value2);
            if (keys1.length !== keys2.length) {
                return true;
            }
            for (const key of keys1) {
                if (isDiff((value1 as Record<string, unknown>)[key], (value2 as Record<string, unknown>)[key])) {
                    return true;
                }
            }
            return false;
        }
        if (typeOfValue1 === 'function' && typeOfValue2 === 'function') {
            return value1.toString() !== value2.toString();
        }
    }
    return value1 !== value2;
}
