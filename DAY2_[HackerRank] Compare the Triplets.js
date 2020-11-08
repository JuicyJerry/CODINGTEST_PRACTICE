function compareTriplets(a, b) {
    let ret = [0, 0];
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            ret[0]++;
        } else if (a[i] < b[i]) {
            ret[1]++;
        }
    }
    return ret;
}