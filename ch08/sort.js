function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x - y;
}

function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}

let i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));

const operators = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    pow: Math.pow,
};

function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === "function") {
        return operators[operation](operand1, operand2);
    } else {
        throw "unknown operator";
    }
}

operate2("add", "hello", operate2("add", " ", "world"));
operate2("pow", 10, 2);