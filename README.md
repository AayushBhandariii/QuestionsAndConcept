# Question and Concepts in Javascript

## About This Project

Hello world i am Aayush and i am a 14 years old Developer.I started this project in 2024/05/26.The main motive
of this project is to make me understand different javascript concepts and stuffs !

### `01 Hoisting`

```js
function showData(){
    console.log(`Let variable ` , let)
    console.log(`Var variable ` , var)
    var = 10
    let = 20
}
```

### Explanations

This code give us error in `let` part  because in javascript , there is a term called `hoisting`

### What is hoisting

Hoisting is the process of declaring variable in top of the function

### Hoisting in let,const and var


let and const also get hoisted but with no initialized values so we will get an initialization error.
Var will get hoisted as empty value as initial value

### More Information

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

Hoisting is not a term normatively defined in the ECMAScript specification. The spec does define a group of declarations as HoistableDeclaration, but this only includes function, function*, async function, and async function* declarations. Hoisting is often considered a feature of var declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting:

1. Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
2. Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
3. The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
4. The side effects of a declaration are produced before evaluating the rest of the code that contains it.

The four function declarations above are hoisted with type 1 behavior; var declaration is hoisted with type 2 behavior; let, const, and class declarations (also collectively called lexical declarations) are hoisted with type 3 behavior; import declarations are hoisted with type 1 and type 4 behavior.

Some prefer to see let, const, and class as non-hoisting, because the temporal dead zone strictly forbids any use of the variable before its declaration. This dissent is fine, since hoisting is not a universally-agreed term. However, the temporal dead zone can cause other observable changes in its scope, which suggests there's some form of hoisting:

```js
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

If the const x = 2 declaration is not hoisted at all (as in, it only comes into effect when it's executed), then the console.log(x) statement should be able to read the x value from the upper scope. However, because the const declaration still "taints" the entire scope it's defined in, the console.log(x) statement reads the x from the const x = 2 declaration instead, which is not yet initialized, and throws a ReferenceError. Still, it may be more useful to characterize lexical declarations as non-hoisting, because from a utilitarian perspective, the hoisting of these declarations doesn't bring any meaningful features.

### Function hoisting

Function Hoisting:
Function declarations are fully hoisted, including both the declaration and the function body.
You can call a function before its actual declaration in the code

```js
// This works due to function hoisting
sayHello();

function sayHello() {
  console.log("Hello!");
}

```

### `Hoisting 02`

```js
for(var i = 0; i < 5 ; i++){
setTimeout(() => console.log(i),5) // it will log "5" five times
/*
Output :
5
5
5
5
5
*/
}

for(let i=0; i < 5 ; i++){
    setTimeout(() => console.log(i) , 5) // it will log different value of i
    /*
  Output:
  0
  1
  2
  3
  4
    */
}
````

#### So why does this happen?

in first loop  : Var declaration will be moved on top of the function.Javascript will refer each timeout as a common variable so when the loop will end it will print the final value of i
in second loop : Let wont get hoisted so the value of i will change in each loop , which results different value of i

### `Javascript This`
```js
const Employee = {
    skills : 15,
    monthlySalary(){
        return this.skills * 30;
    },
    yearlySalary : () => 365 * this.skills,
}
console.log(Employee.monthlySalary()); // 450
console.log(Employee.yearlySalary()) // NAN
```

#### so why does this happen ?

in the `monthlySalary` function , the value of this is refers to the current object(in this case its `Employee`)
and the function is called in `Employee` Context so it will return 450 value

but in `yearlySalary` function , it is being called through arrow function but the value of this in arrow function refers
to the parent element in this case it is `Window` but there is no variable name skills in window so it will return "NAN"
`

#### Now let’s see how this behaves inside various code blocks.

1. `this` inside `global context`
- this inside a global js file always points to window object.

2. `this` inside a `function`
- this inside a function points to window object.

3. `this` inside `constructor function`
- this inside a constructor function points to the contructor keys.

4. `this` inside a `function` inside an `object`
- this inside an object’s function points to the instance of the object.

5. `this` inside an `inner function`
- this inside an inner function points to the window object.

6. `this` inside a `function` and `strict mode` is on.
- "Undefined" , this is because, when ES3 released, ECMA has concern, may be developers forgot to invoke constructor with new keyword.

#### Inside an `arrow` function, `this` has no `scope` of itself. It always points to the scope of `parent`.
