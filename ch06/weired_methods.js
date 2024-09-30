const METHOD_NAME = "m";
const symbol = Symbol();
let weiredMethods = {
    "method With Spaces"(x) {
        return x + 1;
    },
    [METHOD_NAME](x) {
        return x + 2;
    },
    [symbol](x) {
        return x + 3;
    }
}
weiredMethods["method With Spaces"](1);
weiredMethods[METHOD_NAME](1);
weiredMethods[symbol](1);

let p = {
    x: 1.0,
    y: 1.0,
    
    get r() {
        return Math.hypot(this.x, this.y);
    },
    set r(newvalue) {
        let oldvalue = Math.hypot(this.x, this.y);
        let ratio = newvalue / oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },

    get theta() {
        return Math.atan2(this.y, this.x);
    }
};

p.r;
p.theta;

let q = Object.create(p);
q.x = 3;
q.y = 4;
q.r;
q.theta;

const serialnum = {
    _n: 0,

    get next() {
        return this._n++;
    },

    set next(n) {
        if (n > this._n) {
            this._n = n;
        } else {
            throw new Error("serial number can only be set to a larger value");
            
        }
    }
};

serialnum.next = 10;
serialnum.next;
serialnum.next;

const random = {
    get octet() {
        return Math.floor(Math.random() * 256);
    },
    get uint16() {
        return Math.floor(Math.random() * 65536);
    },
    get int16() {
        return Math.floor(Math.random * 65536 - 32768);
    },
};

