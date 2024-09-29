function factorial(x) {
    // 인자가 유효하지 않으면 에러를 일으킨다.
    if (x < 0) {
        throw new Error("x must not be negative.");
    }
    // 그렇지 않으면 정상적으로 값을 계산해 반환한다.
    let f;
    for (f = 1; x > 1; f *= x, x--) {
        // 의도적으로 비움
    }
    return f;
}

factorial(4);

try {
    // 사용자에게 숫자 입력을 요구한다.
    let n = Number(prompt("Please enter a positive integer", ""));
    let f = factorial(n);
    alert(n + " != " + f);
} catch(ex) {
    alert(ex);
}