function* smallNumbers() {
    console.log("next()가 처음 호출되었으며 인자는 무시합니다.");
    let y1 = yield 1;
    console.log(`next()가 두 번째로 호출되었으며 인자는 ${y1}입니다.`);
    let y2 = yield 2;
    console.log(`next()가 세 번째로 호출되었으며 인자는 ${y2}입니다.`);
    let y3 = yield 3;
    console.log(`next()가 네 번째로 호출되었으며 인자는 ${y3}입니다.`);
    return 4;
}

let g = smallNumbers();
console.log("제너레이터가 생성됐습니다. 아직 실행된 코드는 없습니다.");
let n1 = g.next("a");
console.log(`제네레이터가 전달한 값은 ${n1.value}입니다.`);
let n2 = g.next("b");
console.log(`제네레이터가 전달한 값은 ${n2.value}입니다.`);
let n3 = g.next("c");
console.log(`제네레이터가 전달한 값은 ${n3.value}입니다.`);
let n4 = g.next("d");
console.log(`제네레이터는 ${n4.value}를 넘기고 종료했습니다.`);
