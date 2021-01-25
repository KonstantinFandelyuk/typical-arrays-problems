exports.min = function min(array) {
    if (array === undefined || array === null || array.length <= 0) return 0;
    return Math.min(...array);
};

exports.max = function max(array) {
    if (array === undefined || array === null || array.length <= 0) return 0;
    return Math.max(...array);
};

exports.avg = function avg(array) {
    if (array === undefined || array === null || array.length <= 0) return 0;
    let result =
        array.reduce((sum, current) => sum + current, 0) / array.length;
    return result;
};
