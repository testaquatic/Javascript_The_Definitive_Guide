const words = /\b\p{Alphabetic}+\b/gu;
let text = "This is a native test of the matchAll() method.";
for (let word of text.matchAll(words)) {
    console.log(`Found '${word[0]}' at index ${word.index}.`);
}