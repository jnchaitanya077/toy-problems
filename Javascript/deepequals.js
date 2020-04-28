function deepEqual(a, b) {
    if (a === b) {
        // items are identical
        return true;
    } else if (
        typeof a === "object" &&
        a !== null &&
        typeof b === "object" &&
        b !== null
    ) {
        // items are objects - do a deep property value compare
        // join keys from both objects together in one array
        let keys = Object.keys(a).concat(Object.keys(b));
        // filter out duplicate keys
        keys = keys.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });
        for (p of keys) {
            if (typeof a[p] === "object" && typeof b[p] === "object") {
                if (deepEqual(a[p], b[p]) === false) {
                    return false;
                }
            } else if (a[p] !== b[p]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

//test cases
var obj = {
    name: {
        KRISH: "krishna"
    },
    object: 77
};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {
    name: {
        KRISH: "krishna"
    },
    object: 77
}));
console.log(deepEqual(obj, {
    name: {
        K: "krishna"
    },
    object: 77
}));
console.log(deepEqual(obj, {
    name: {
        KRISH: "kri"
    },
    object: 77
}));
console.log(deepEqual(obj, {
    name: {
        KRISH: "krishna"
    },
    object: 77
}));