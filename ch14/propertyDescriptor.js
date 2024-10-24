Object.getOwnPropertyDescriptor({ x: 1 }, "x");

const random = {
    get octet() {
        return Math.floor(Math.random() * 256);
    },
};

Object.getOwnPropertyDescriptor(random, "octet");

Object.getOwnPropertyDescriptor({}, "x");

let o = {};
Object.defineProperty(o, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true,
});

o.x;
Object.keys(o);
Object.defineProperty(o, "x", { writable: false });
o.x = 2;
o.x;
Object.defineProperty(o, "x", { value: 2 });
o.x;
Object.defineProperty(o, "x", {
    get: function () {
        return 0;
    },
});
o.x;

let p = Object.defineProperties(
    {},
    {
        x: {
            value: 1,
            writable: true,
            enumerable: true,
            configurable: true,
        },
        y: {
            value: 1,
            writable: true,
            enumerable: true,
            configurable: true,
        },
        r: {
            get() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            enumerable: true,
            configurable: true,
        },
    }
);
p.r;
