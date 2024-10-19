function words(s) {
    var r = /\s+|$/g;
    r.lastIndex = s.match(/[^ ]/).index;

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            let start = r.lastIndex;
            if (start < s.length) {
                let match = r.exec(s);
                if (match) {
                    return {
                        value: s.substring(start, match.index),
                    };
                }
            }
            return {
                done: true,
            };
        },
    };
}

[...words("   abc def ghi! ")];
