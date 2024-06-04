let a = {greeting : "Hi"};

let z = a;

z.greeting = "bye"

console.log(a.greeting) // Bye

let x = {...a} // De structuring a
x = "not changed"
console.log(a.greeting) // Bye
console.log(x) // not changed

let c = Object.assign({} , a)
c.greeting = "Axy"
console.log(c.greeting) // Axy
console.log(a.greeting) // bye

// if our object is nested we can use structured clone !

/*

So why does it happen ?

Object Types

so as we know object are reference types based so , so we are passing reference of a in z variable so when we do any thing with z variable it will reflect the a too
*/