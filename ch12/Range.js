class Range {
    // 필드를 비공개한다.
    #from;
    #to;
    constructor(from, to) {
        this.#from = from;
        this.#to = to;
    }

    has(x) {
        return typeof x === "number" && this.#from <= x && x <= this.#to;
    }

    toString() {
        return `{ x | ${this.#from} <= x <= ${this.#to}}`
    }

    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }
}

for (let x of new Range(1, 10)) {
    console.log(x);
}

[...new Range(-2, 2)];

function map(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let v = iterator.next();
            if (v.done) {
                return v;
            } else {
                return {
                    value: f(v.value)
                };
            }
        }
    };
}

[...map(new Range(1, 4), x => x * x)]

function filter(iterable, predicate) {
    let iterator = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            for(;;) {
                let v = iterator.next();
                if (v.done || predicate(v.value)) {
                    return v;
                }
            }
        }
    }
}

[...filter(new Range(1,10), x => x % 2 === 0)];