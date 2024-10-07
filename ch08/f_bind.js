function partialLeft(f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...outerArgs, ...innerArgs];
        return f.apply(this, args);
    }
}

function partialRight(f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...innerArgs, ...outerArgs];
        return f.apply(this, args);
    }
}

function partial(f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...outerArgs];
        let innerIndex = 0;
        for (let i = 0; i < args.length; i++) {
            if (args[i] === undefined) {
                args[i] = innerArgs[innerIndex++];
            }
        }
        args.push(...innerArgs.slice(innerIndex))
        return f.apply(this, args);
    }
}

const f = function(x, y, z) { return x * (y - z); }
partialLeft(f, 2)(3, 4);
partialRight(f, 2)(3, 4);
partial(f, undefined, 2)(3, 4)

const sum = (x, y) => x + y;
const increment = partialLeft(sum, 1);
const cuberoot = partialRight(Math.pow, 1 / 3);
cuberoot(increment(26));

function compose(f, g) {
    return function(...args) {
        return f.call(this, g.apply(this, args))
    }
}

const not = partialLeft(compose, x => !x);
const even = x => x % 2 === 0;
const odd = not(even);
const isNumber = not(isNaN);
odd(3) && isNumber(2);