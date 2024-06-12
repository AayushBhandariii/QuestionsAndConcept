let a = 108;
let b = new Number(108);
let c = 108

console.log(a == b); // true
console.log(a === b); // false
console.log(b === c) // false

/* so why does it happen ?

A talk on some constructor

in line number 5 : it only compares primitive value so we get true
in line number six and seven : we are checking both type and value so we get false

when we use constructor like `new Number()` or anything our data type is set to be object



*/