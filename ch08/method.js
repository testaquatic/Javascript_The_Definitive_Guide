let calculator = {
    operand1: 1,
    operand2: 1,
    add() {
        this.result = this.operand1 + this.operand2;
    },
};

calculator.add();
calculator.result;

let o = {
    m: function() {
        let self = this;
        this === o

        const f = (function() {
            this === o
        }).bind(this);
        f();
    }
};

o.m();