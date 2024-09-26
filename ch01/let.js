let a = [];
a.push(1, 2, 3);
a.reverse();

let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];
points.dist = function() {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a * a + b * b);
};

points.dist();

function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

abs(-10) === abs(10);