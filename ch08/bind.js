let sum = (x, y) => x + y;
let succ = sum.bind(null, 1);
succ(2);
function f(y, z) {
    return this.x + y + z;
}
let g = f.bind({x: 1}, 2);
g(3);