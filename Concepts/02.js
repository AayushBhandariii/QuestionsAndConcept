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


// So why does this happen?

// Hoisting : Part 2

// in first loop  : Var declaration will be moved on top of the function.Javascript will refer each timeout as a common variable so when the loop will end it will print the final value of i
// in second loop : Let wont get hoisted so the value of i will change in each loop , which results different value of i