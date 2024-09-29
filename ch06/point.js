let point = {
    x: 1000,
    y: 2000,
    toString: function() {
        return `(${this.x}, ${this.y})`;
    },
    toLocaleString: function() {
        return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
    },
    valueOf: function() {
        return Math.hypot(this.x, this.y);
    },
    toJSON: function () {
        return this.toString();
    }
};

point.toString();
point.toLocaleString();

Number.point();
point > 4;
point > 5;
point < 6;

JSON.stringify([point]);