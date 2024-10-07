function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes: function(x) {
        return this.from <= x && x <= this.to;
    },

    [Symbol.iterator]: function*() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },

    toString: function() {
        return `(${this.from}...${this.to})`;
    },

    constructor: Range,
};

let r = new Range(1, 3);
r.includes(2);
r.toString();
[...r];