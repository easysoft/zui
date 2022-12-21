export const generateArrayNumber = (start = 0, end = 0) => {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
};

export const createGroups = (array: number[] | object[], numGroups: number) => {
    const perGroup = Math.ceil(array.length / numGroups);
    return new Array(numGroups).fill({}).map((_, i) => array.slice(i * perGroup, (i + 1) * perGroup));
};
