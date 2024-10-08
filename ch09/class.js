class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) {
        return this.from <= x && x <= this.to;
    }

    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }

    toString() {
        return `(${this.from}...${this.to})`
    }

    static integerRangePattern = /^\((\d+)\.\.\.(\d+)\)$/;
    static parse(s) {
        let matches = s.match(Range.integerRangePattern);
        if (!matches) {
            throw new TypeError(`Cannot parse Range from "${s}".`);
        }
        return new Range(parseInt(matches[1]), parseInt(matches[2]));
    }
}

let r = new Range(1,3);
r.includes(2);
r.toString();
[...r];

class Span extends Range {
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length);
        } else {
            super(start + length, start);
        }
    }
}

let r2 = Range.parse('(1...10)');
console.log(r2);
r.parse('(1...10)') // TypeError!
