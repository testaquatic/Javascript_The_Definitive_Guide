function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

abs(-10) === abs(10);

function sum(array) {
    let sum = 0;
    for (let x of array) {
        sum += x;
    }
    return sum;
}

let primes = [2, 3, 5, 7, 11];

sum(primes);

function factorial(n) {
    let product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }
    return product;
}

factorial(4);

function factorial2(n) {
    let i, product = 1;
    for (i = 2; i <= n; i++) {
        product *= i;
    }
    return product;
}
factorial2(5);

class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let p = new Point(1, 1);
p.distance;