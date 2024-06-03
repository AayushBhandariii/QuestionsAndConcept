console.log(+true) // 1
console.log(!"JavaScript") // false

// Why does this happen

/*
 unary operator in JavaScript

A unary operation is an operation with only one operand.

delete - The delete operator deletes a property from an object.

void - The void operator evaluates an expression and discards its return value.

typeof - The typeof operator determines the type of a given object.

+ The unary plus operator converts its operand to Number type.

- The unary negation operator converts its operand to Number type and then negates it.

~ - Bitwise NOT operator.

! - Logical NOT operator.

await - Pause and resume an async function and wait for the promise's fulfillment/rejection.

+true converts its operand to number which gives output 1
!"JavaScrpt" uses negation operator which converts its datatype to boolean and the value will always be opposite [if truthy value then it will return false]

 */