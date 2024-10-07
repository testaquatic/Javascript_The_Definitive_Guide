function memoize(f) {
    const cache = new Map();

    return function(...args) {
        let key = args.length + args.join("+");
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            let result = f.apply(this, args);
            cache.set(key, result);
            return result;
        }
    };
}

function gcd(a, b) {
    if (a < b) {
        [a, b] = [b, a % b];
    }

    while (b !== 0) {
        [a, b] = [b, a % b];
    }

    return a;
}

const gcdmemo = memoize(gcd);
gcdmemo(85, 187);

const factorial = memoize(function(n) {
    return (n <= 1) ? 1: n * factorial(n - 1);
});

factorial(5);