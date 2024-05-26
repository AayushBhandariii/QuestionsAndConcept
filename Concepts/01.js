function showData(){
    console.log(`Let variable ` , let)
    console.log(`Var variable ` , var)
    var = 10
    let = 20
}
// ! When we run this code we get an error in let variable because of hoisting in javascript
// the let variable does not get initialized which give us initialization error
// Hoisting -> moving the declaration on top of the function is called hoisting in javascript

// More :

// let and const also get hoisted but with no initialized values so we will get an initialization error.
// Var will get hoisted as empty value as initial value