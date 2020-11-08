function simpleArraySum(ar) {
    let sum = 0;
    let reducer = function (acc, val, idx) {
        if(idx !== ar.length) {
            acc += val;
        }
        return acc;
    };
    
    let result = ar.reduce(reducer, sum);
    return result;
}
