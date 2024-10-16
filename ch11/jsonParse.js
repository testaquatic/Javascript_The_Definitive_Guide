let data = JSON.parse(text, function(key, value) {
    if (key[0] === "_") {
        return undefined;
    }

    if (typeof value === 'string' && /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {
        return new Date(value);
    }

    return value;
})