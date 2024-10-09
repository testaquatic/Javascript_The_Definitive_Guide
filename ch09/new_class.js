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

function Span(start, span) {
    if (span >= 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }
}

Span.prototype = Object.create(Range.prototype);

Span.prototype.constructor = Span;

Span.prototype.toString = function() {
    return `(${this.from}...+${this.to - this.from})`;
}

let r = new Range(1, 3);
r.includes(2);
r.toString();
[...r];