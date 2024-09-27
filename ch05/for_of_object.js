let o = {x: 1, y: 2, z: 3};

/*
for (let element of o) {
    console.log(element);
}
*/

let keys = "";
for (let k of Object.keys(o)) {
    keys += k;
}
keys;

let sum = 0;
for (let v of Object.values(o)) {
    sum += v;
}
sum;

let pairs = "";
for (let [k, v] of Object.entries(o)) {
    pairs += k + v;
}
pairs;

let frequency = {};
for (let letter of "mississippi") {
    if ( frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
frequency;