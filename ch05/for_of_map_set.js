let text = "Na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for (let word of wordSet) {
    unique.push(word);
}
unique;

let m = new Map([[1, "one"]]);
for (let [key, value] of m) {
    key;
    value;
}