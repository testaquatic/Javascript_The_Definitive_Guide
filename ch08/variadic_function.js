function max(first = -Infinity, ...rest) {
    let maxValue = first;
    for (let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
    return maxValue;
}

function max_arguments(x) {
    let maxValue = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxValue) {
            maxValue = arguments;
        }
    }
    return maxValue;
}

