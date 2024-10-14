let url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;
let text = "Visit my blog at http://www.example.com/~david";
let match  = text.match(url);
match[0];
match.input;
match.index;
match.groups?.protocol;
match.groups?.host;
match.groups?.path;