let pattern = /Java/g;
let text = "Javascript > Java";
let match;

while ((match = pattern.exec(text)) !== null) {
    console.log(`Matched ${match[0]} at ${match.index}`);
    console.log(`Next search begins at ${pattern.lastIndex}`);
}