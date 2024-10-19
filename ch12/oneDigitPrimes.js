function* oneDigitPrimes() {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}

let primes = oneDigitPrimes();

primes.next().value;
primes.next().value;
primes.next().value;
primes.next().value;
primes.next().done;

primes[Symbol.iterator]();

[...oneDigitPrimes()];
let sum = 0;
for (let prime of oneDigitPrimes()) {
    sum += prime;
}
sum;

function* fibonacciSequence() {
    let x = 0;
    let y = 1;
    for (;;) {
        yield y;
        [x, y] = [y, x + y];
    }
}

function fibonacci(n) {
    for (let f of fibonacciSequence()) {
        if (n-- <= 0) {
            return f;
        }
    }
}
fibonacci(20);

function* take(n, iterable) {
    let it = iterable[Symbol.iterator]();
    while (n-- > 0) {
        let next = it.next();
        if (next.done) {
            return;
        } else {
            yield next.value;
        }
    }
}

[...take(5, fibonacciSequence())];

function* zip(...iterables) {
    let iterators = iterables.map((i) => i[Symbol.iterator]());
    let index = 0;
    while (iterators.length > 0) {
        if (index >= iterators.length) {
            index = 0;
        }
        let item = iterators[index].next();
        if (item.done) {
            iterators.splice(index, 1);
        } else {
            yield item.value;
            index++;
        }
    }
}

[...zip(oneDigitPrimes(), "ab", [0])];

function* sequence(...iterables) {
    for (let iterable of iterables) {
        yield* iterable;
    }
}

[...sequence("abc", oneDigitPrimes())];
