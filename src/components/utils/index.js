export const convertToNum = (value) => {
    if (/^\d+$/.test(value)) {
        return parseFloat(value)
    } else return value
}

export const compare = (a, b, key, sortType) => {
    if (sortType === 'desc') {
        if (convertToNum(a[key]) < convertToNum(b[key])) return 1;
        if (convertToNum(b[key]) < convertToNum(a[key])) return -1;
        return 0;
    } else if (sortType === 'asc') {
        if (convertToNum(a[key]) > convertToNum(b[key])) return 1;
        if (convertToNum(b[key]) > convertToNum(a[key])) return -1;
        return 0;
    }
}