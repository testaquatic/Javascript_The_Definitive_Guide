class EZArray extends Array {
    get first() {
        return this[0];
    }

    get last() {
        return this[this.length - 1];
    }
}

let a = new EZArray();
a instanceof EZArray;
a instanceof Array;
a.push(1, 2, 3, 4);
a.pop();
a.first;
a.last;
a[1];
Array.isArray(a);
EZArray.isArray(a);

Array.prototype.isPrototypeOf(EZArray.prototype);

Array.isPrototypeOf(EZArray);