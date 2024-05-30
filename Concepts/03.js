const Employee = {
    skills : 15,
    monthlySalary(){
        return this.skills * 30;
    },
    yearlySalary : () => 365 * this.skills,
}

console.log(Employee.monthlySalary()); // 450
console.log(Employee.yearlySalary()) // NAN

// so why does this happen ?

// Javascript This

/*
in the `monthlySalary` function , the value of this is refers to the current object(in this case its `Employee`)
and the function is called in `Employee` Context so it will return 450 value

but in `yearlySalary` function , it is being called through arrow function but the value of this in arrow function refers
to the parent element in this case it is `Window` but there is no variable name skills in window so it will return "NAN"
`
*/